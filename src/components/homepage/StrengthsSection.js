"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "@/styles/StrengthsSection.module.css"
import {
    FaUsers,
    FaShieldAlt,
    FaCreditCard,
    FaBuilding,
    FaShoppingCart,
    FaProjectDiagram,
} from "react-icons/fa"


// Define the strength areas data
const strengthAreas = [
    {
        id: 1,
        title: "Team Expertise",
        description: "Highly skilled professionals with years of industry experience",
        icon: FaUsers,
        color: "#1a73e8",
    },
    {
        id: 2,
        title: "Financial Stability",
        description: "Strong financial foundation ensuring business continuity",
        icon: FaCreditCard,
        color: "#34a853",
    },
    {
        id: 3,
        title: "Security & Trust",
        description: "Robust security measures protecting your valuable assets",
        icon: FaShieldAlt,
        color: "#ea4335",
    },
    {
        id: 4,
        title: "Infrastructure",
        description: "State-of-the-art facilities and technological infrastructure",
        icon: FaBuilding,
        color: "#fbbc05",
    },
    {
        id: 5,
        title: "Customer Service",
        description: "Dedicated support team available 24/7 for all your needs",
        icon: FaShoppingCart,
        color: "#4285f4",
    },
    {
        id: 6,
        title: "Global Network",
        description: "Extensive network of partners across the globe",
        icon: FaProjectDiagram,
        color: "#5f6368",
    },
]

export default function StrengthsSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    // Calculate rotation angle based on active index
    const getRotationAngle = (index) => {
        // Each item takes up 60 degrees in a circle (360/6 = 60)
        // We want to center the active item, so we rotate to position it
        return -60 * index
    }

    return (
        <div className={styles.strengthsContainer}>
            <h2 className={styles.sectionTitle}>Areas of Strength</h2>

            {/* Navigation Icons */}
            <div className={styles.navContainer}>
                <div className={styles.navLine}></div>
                {strengthAreas.map((area, index) => (
                    <motion.div
                        key={area.id}
                        className={`${styles.navItem} ${activeIndex === index ? styles.active : ""}`}
                        onClick={() => setActiveIndex(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.iconCircle}>
                            <area.icon size={24} />
                        </div>
                        <motion.div
                            className={styles.navTooltip}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: activeIndex === index ? 1 : 0, scale: activeIndex === index ? 1 : 0.8 }}
                        >
                            {area.title}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Rotating Fan Section */}
            <div className={styles.fanContainer}>
                <motion.div
                    className={styles.fanSegment}
                    animate={{ rotate: getRotationAngle(activeIndex) }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {strengthAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            className={styles.fanItem}
                            style={{
                                rotate: `${index * 60}deg`,
                                opacity: activeIndex === index ? 1 : 0.3,
                            }}
                        >
                            <div className={styles.fanContent}>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Center Content */}
                    <div className={styles.centerContent}>
                        <h3>100% Direct involvement of</h3>
                        <h2>Owners in Business</h2>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu Bars */}
            <div className={styles.mobileBars}>
                <motion.div
                    className={styles.bar}
                    style={{ backgroundColor: strengthAreas[activeIndex].color }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
                <motion.div className={styles.bar} style={{ backgroundColor: "#fff" }}></motion.div>
                <motion.div
                    className={styles.bar}
                    style={{ backgroundColor: strengthAreas[activeIndex].color }}
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>
        </div>
    )
}
