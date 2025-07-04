"use client"
import React, { useState } from "react"
import styles from "@/styles/LiquidGlassCard.module.css"

const LiquidGlassCard = () => {
    const [activeTab, setActiveTab] = useState("Energy")

    const tabs = ["Energy", "Food", "Asset Security / Asset"]
    return (
        <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center p-4">
            <div className={styles.bgPattern}></div>

            <div className={`${styles.mainContainer} p-5`} style={{ maxWidth: "900px", width: "100%" }}>
                {/* Header Section */}
                <div className="text-center mb-4">
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                        <div className={styles.indianFlag}>
                            <div className={`${styles.flagStripe} ${styles.saffron}`}></div>
                            <div className={`${styles.flagStripe} ${styles.white}`}></div>
                            <div className={`${styles.flagStripe} ${styles.green}`}></div>
                        </div>
                        <h1 className="mb-0 fw-bold" style={{ fontSize: "2.5rem", color: "#2c3e50" }}>
                            INDIA
                        </h1>
                    </div>
                    <h2 className="fw-bold mb-0" style={{ color: "#007bff", fontSize: "1.8rem" }}>
                        BSTL Global Solutions
                    </h2>
                </div>

                {/* Divider */}
                <hr className="my-4" style={{ border: "2px solid #dee2e6", opacity: 0.5 }} />

                {/* Navigation Tabs */}
                <div className="d-flex justify-content-center mb-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`nav-tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Company Logos Grid */}
                <div className="row g-4">
                    {/* First Row */}
                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <div className="text-center">
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        style={{
                                            width: "0",
                                            height: "0",
                                            borderLeft: "15px solid transparent",
                                            borderRight: "15px solid transparent",
                                            borderBottom: "20px solid #00A651",
                                        }}
                                    ></div>
                                    <span className="fw-bold" style={{ color: "#00A651", fontSize: "1.1rem" }}>
                                        HYUNDAI
                                    </span>
                                </div>
                                <small style={{ color: "#666", fontSize: "0.7rem" }}>ENGINEERING & CONSTRUCTION</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                                    <div
                                        style={{ width: "20px", height: "15px", background: "#4CAF50", borderRadius: "3px 3px 0 0" }}
                                    ></div>
                                </div>
                                <span className="fw-bold" style={{ color: "#4CAF50", fontSize: "1.2rem" }}>
                                    park
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <span className="fw-bold" style={{ color: "#E31E24", fontSize: "1.5rem", letterSpacing: "2px" }}>
                                HITACHI
                            </span>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <div className="text-center">
                                <div style={{ color: "#E31E24", fontSize: "0.9rem", fontWeight: "bold" }}>
                                    <div>FIRE RESCUE RENT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <span className="fw-bold" style={{ color: "#E31E24", fontSize: "2rem", letterSpacing: "3px" }}>
                                ABB
                            </span>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <div className="text-center">
                                <div className="d-flex align-items-center gap-1 mb-1">
                                    <div style={{ width: "8px", height: "8px", background: "#FF6B35", borderRadius: "50%" }}></div>
                                    <div style={{ width: "8px", height: "8px", background: "#4ECDC4", borderRadius: "50%" }}></div>
                                    <div style={{ width: "8px", height: "8px", background: "#45B7D1", borderRadius: "50%" }}></div>
                                    <div style={{ width: "8px", height: "8px", background: "#96CEB4", borderRadius: "50%" }}></div>
                                </div>
                                <div style={{ color: "#333", fontSize: "1rem", fontWeight: "bold" }}>ADAD</div>
                                <div style={{ fontSize: "0.7rem", color: "#666" }}>سعودي</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <span className="fw-bold" style={{ color: "#E31E24", fontSize: "1rem" }}>
                                ROSENBAUER
                            </span>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className={`${styles.companyCard} d-flex align-items-center justify-content-center`}>
                            <span className="fw-bold" style={{ color: "#2c3e50", fontSize: "1rem" }}>
                                VANDERLANDE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LiquidGlassCard