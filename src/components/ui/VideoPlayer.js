"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import styles from "@/styles/VideoPlayer.module.css"



export default function VideoPlayer({ posterSrc, videoSrc, title, subtitle, alt }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    const handlePlayClick = () => {
        if (videoRef.current) {
            setIsPlaying(true)
            videoRef.current.play()
        }
    }

    const handleVideoEnd = () => {
        setIsPlaying(false)
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
    }

    return (
        <div className={styles.videoContainer}>
            {/* Video Poster Image */}
            <Image
                src={posterSrc || "/placeholder.svg"}
                alt={alt}
                fill
                className={`${styles.videoPoster} ${isPlaying ? styles.videoHidden : styles.videoVisible}`}
                priority
            />

            {/* Actual Video Element */}
            <video
                ref={videoRef}
                className={`${styles.actualVideo} ${isPlaying ? styles.videoVisible : styles.videoHidden}`}
                controls={isPlaying}
                onEnded={handleVideoEnd}
                onPause={handleVideoPause}
                poster={posterSrc}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            {!isPlaying && (
                <div className={styles.videoOverlay}>
                    <button className={styles.playButton} onClick={handlePlayClick} aria-label="Play video">
                        <div className={styles.playIcon}></div>
                    </button>

                    <div className={styles.videoText}>
                        <h1 className={styles.videoTitle}>{title}</h1>
                        <p className={styles.videoSubtitle}>{subtitle}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
