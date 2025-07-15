"use client"
import React, { useState } from "react"
import JobCard from "./ui/JobCard"
import CommonBanner from "./ui/CommonBanner"

const Career = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All Departments")

    const departments = [
        "All Departments",
        "Engineering",
        "Design",
        "Marketing",
        "Sales",
        "Operations",
        "Human Resources",
        "Finance",
    ]
    const jobListings = [
        {
            title: "Manager",
            role: "Designer",
            location: "UAE",
            experience: "3+ Years",
            type: "Full Time",
            description: "Create intuitive and beautiful user experiences for our growing platform.",
            skills: ["Figma", "UI Designing", "Photoshop", "Web Designs", "App Designing"],
            logo: "/assets/bigh-logo-1.svg",
        },
        {
            title: "Senior Developer",
            role: "Frontend",
            location: "Remote",
            experience: "5+ Years",
            type: "Full Time",
            description: "Lead frontend development projects and mentor junior developers.",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
            logo: "/assets/bigh-logo-1.svg",
        },
        {
            title: "Product Manager",
            role: "Product",
            location: "Dubai",
            experience: "4+ Years",
            type: "Full Time",
            description: "Drive product strategy and work closely with engineering and design teams.",
            skills: ["Product Strategy", "Analytics", "Agile", "User Research", "Roadmapping"],
            logo: "/assets/bigh-logo-1.svg",
        },
    ]
    return (
        <>

            <CommonBanner
                imageSrc="/assets/banners/career1.png"
                title="Careers at Bahwan International Group"
                subtitle="Building Legacy Together, One Career at a Time"
                buttons={[
                    { label: 'Join Us', href: '/buy' }
                ]}
                textPosition={{ top: '55%', left: '5%' }}
            />
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="display-5 fw-bold mb-3">Join Our Amazing Team</h2>
                            <p className="lead text-muted mb-5">
                                Discover opportunities to grow, learn, and make an impact in a collaborative environment.
                            </p>

                            <div className="row g-3 justify-content-center">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-white border-end-0">
                                            <i className="bi bi-search text-muted"></i>
                                            <svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control border-start-0 ps-0"
                                            placeholder="Search Jobs..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <select
                                        className="form-select form-select-lg"
                                        value={selectedDepartment}
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                    >
                                        {departments.map((dept) => (
                                            <option key={dept} value={dept}>
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row g-4">
                        {jobListings.map((job, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <JobCard {...job} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Career