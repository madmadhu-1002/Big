import { FaEye, FaBullseye, FaHandshake } from "react-icons/fa"

export default function WhatWeBelieve() {
    const beliefs = [
        {
            id: 1,
            title: "Vision",
            icon: <FaEye className="text-primary fs-2" />,
            description: "A Globally recognized business group creating customers for life",
        },
        {
            id: 2,
            title: "Mission",
            icon: <FaBullseye className="text-primary fs-2" />,
            description:
                "Diversify and innovatively deliver world-class products and services, through empowered employees by creating value for our stakeholders",
        },
        {
            id: 3,
            title: "Core Values",
            icon: <FaHandshake className="text-primary fs-2" />,
            values: ["Integrity", "Ownership", "Passion", "Excellence"],
        },
    ]

    return (
        <section className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">What We Believe In</h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {beliefs.map((belief) => (
                        <div key={belief.id} className="col-lg-4 col-md-6">
                            <div
                                className="card border-0 shadow-lg h-100 text-center text-white"
                                style={{
                                    background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
                                    borderRadius: "24px",
                                    minHeight: "300px",
                                }}
                            >
                                <div className="card-body d-flex flex-column justify-content-center p-5">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div
                                            className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center"
                                            style={{ width: "80px", height: "80px" }}
                                        >
                                            {belief.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="fw-bold mb-4">{belief.title}</h4>

                                    {/* Description or Values */}
                                    {belief.description ? (
                                        <p className="mb-0" style={{ fontSize: "15px", lineHeight: "1.6", opacity: "0.95" }}>
                                            {belief.description}
                                        </p>
                                    ) : (
                                        <div className="d-flex flex-wrap justify-content-center gap-2">
                                            {belief.values?.map((value, index) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-white text-primary px-3 py-2 rounded-pill"
                                                    style={{ fontSize: "13px", fontWeight: "500" }}
                                                >
                                                    {value}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
