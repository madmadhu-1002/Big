"use client"

import { useState } from "react"
import { FaStar, FaRocket } from "react-icons/fa"

export default function TransformationJourney() {
    const [selectedYear, setSelectedYear] = useState(2004)

    const milestones = [
        { year: 2004, icon: <FaRocket />, description: "Started BIG in 2004 with bold ambitions and strategic partnerships." },
        { year: 2006, description: "Expansion into new markets and verticals." },
        { year: 2008, description: "Strengthened manufacturing capabilities." },
        { year: 2010, description: "Launched award-winning products." },
        { year: 2012, description: "Global strategic alliances established." },
        { year: 2014, description: "Recognized for excellence in innovation." },
        { year: 2016, description: "Digital transformation began." },
        { year: 2018, description: "Employee strength crossed 1000+." },
        { year: 2020, description: "Thrived through adversity during global challenges." },
        { year: 2022, description: "Sustainability initiatives accelerated." },
        { year: 2024, description: "AI and automation integration started." },
        { year: 2025, description: "Becoming a regional leader in tech-enabled industries." },
    ]

    const currentMilestone = milestones.find((m) => m.year === selectedYear)

    return (
        <section className="py-5" style={{ background: "linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)" }}>
            <div className="container">
                {/* Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">Our Journey of Transformation</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                        We've expanded across industries, forged partnerships, and consistently embraced innovation. Every milestone represents our vision for sustainable success.
                    </p>
                </div>

                {/* Timeline */}
                <div className="position-relative mb-5">
                    <div
                        className="position-absolute"
                        style={{
                            top: "50%",
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "linear-gradient(to right, #4A90E2, #ccc)",
                            transform: "translateY(-50%)",
                            zIndex: 1,
                        }}
                    />
                    <div className="d-flex justify-content-between position-relative z-2 flex-wrap gap-2">
                        {milestones.map((milestone) => (
                            <div
                                key={milestone.year}
                                className="text-center flex-grow-1"
                                onClick={() => setSelectedYear(milestone.year)}
                                style={{ cursor: "pointer" }}
                            >
                                <div
                                    className={`rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm ${selectedYear === milestone.year ? "bg-primary text-white" : "bg-white"}`}
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        border: selectedYear === milestone.year ? "4px solid #0d6efd" : "2px solid #ccc",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {selectedYear === milestone.year && <FaStar style={{ fontSize: "10px" }} />}
                                </div>
                                <div className="mt-2 small text-muted fw-semibold">{milestone.year}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Details Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                                <div
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: "48px", height: "48px", fontSize: "20px" }}
                                >
                                    {currentMilestone?.icon || <FaStar />}
                                </div>
                                <h4 className="mb-0 text-primary fw-bold">Milestone {selectedYear}</h4>
                            </div>
                            <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                                {currentMilestone?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
