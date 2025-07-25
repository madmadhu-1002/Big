import React from 'react'

const JobCard = ({
    title = "Manager",
    role = "Designer",
    location = "UAE",
    experience = "3+ Years",
    type = "Full Time",
    description = "Create intuitive and beautiful user experiences for our growing platform.",
    skills = ["Figma", "UI Designing", "Photoshop", "Web Designs", "App Designing"],
    logo,
}) => {
    return (
        <div className="card h-100 shadow-sm border-0 job-card">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                        {logo ? (
                            <img
                                src={logo || "/placeholder.svg"}
                                alt="Company Logo"
                                className="me-3"
                                style={{ width: "48px", height: "48px" }}
                            />
                        ) : (
                            <div className="bg-primary rounded-3 p-2 me-3" style={{ width: "48px", height: "48px" }}>
                                <svg width="32" height="32" fill="white" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <span className="badge bg-secondary">{type}</span>
                </div>

                <h3 className="card-title h4 mb-3">{title}</h3>

                <div className="d-flex align-items-center mb-3 text-muted">
                    <div className="d-flex align-items-center me-4">
                        <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <span>{role}</span>
                    </div>
                    <div className="d-flex align-items-center me-4">
                        <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <span>{location}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                        <span>{experience}</span>
                    </div>
                </div>

                <p className="text-muted mb-4">{description}</p>

                <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="badge bg-primary text-dark border">
                                {skill}
                            </span>
                        ))}
                        {skills.length > 5 && <span className="badge bg-secondary">1+More</span>}
                    </div>
                </div>

                <button className="btn btn-primary w-100 btn-lg">Apply Now</button>
            </div>
        </div>
    )
}

export default JobCard