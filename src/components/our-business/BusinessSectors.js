"use client"

import { useState } from "react"
import Flag from 'react-world-flags';

export default function BusinessSectors() {
    const [selectedCountry, setSelectedCountry] = useState("all")

    const handleRadioChange = (event) => {
        setSelectedCountry(event.target.value)
    }

    const radioOptions = [
        { value: "all", label: "All", flag: null },
        { value: "uae", label: "United Arab Emirates", flag: "AE" },
        { value: "oman", label: "Oman", flag: "OM" },
        { value: "bahrain", label: "Bahrain", flag: "BH" },
        { value: "saudi-arabia", label: "Saudi Arabia", flag: "SA" },
        { value: "india", label: "India", flag: "IN" },
    ]

    return (
        <section className="py-5 py-md-5 py-lg-5" >
            {" "}
            {/* Light blue background */}
            <div className="container px-4 px-md-4 text-center">
                <h2 className="display-5 fw-bold">Our Business Sectors</h2>
                <p className="mx-auto text-muted fs-5 mt-3" style={{ maxWidth: "700px" }}>
                    Comprehensive solutions across diverse industries, powered by expertise, innovation, and strategic
                    partnerships.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    {radioOptions.map((option) => (
                        <div key={option.value} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="country-selection"
                                id={`radio-${option.value}`}
                                value={option.value}
                                checked={selectedCountry === option.value}
                                onChange={handleRadioChange}
                            />
                            <label className="form-check-label d-flex align-items-center gap-1" htmlFor={`radio-${option.value}`}>
                                {option.flag && <Flag code={option.flag} style={{ width: 35, height: 25 }} />}
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
