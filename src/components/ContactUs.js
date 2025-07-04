"use client"

import React, { useState } from 'react';

const ContactUs = () => {
    // Add state for form data and handlers
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        inquiryType: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add form submission logic (API call, validation, etc.)
        alert('Thank you for contacting us!');
        setFormData({
            fullName: '',
            email: '',
            company: '',
            inquiryType: '',
            subject: '',
            message: '',
        });
    };
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5">
                                <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
                                <p className="lead text-muted">
                                    Have questions about careers, partnerships, or just want to say hello? We'd love to hear from you.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h4 className="card-title mb-4">Send Message</h4>

                                            <form onSubmit={handleSubmit}>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label htmlFor="fullName" className="form-label">
                                                            Full Name <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fullName"
                                                            name="fullName"
                                                            placeholder="Example name Sid"
                                                            value={formData.fullName}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="email" className="form-label">
                                                            Email Address <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Test@gmail.com"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="company" className="form-label">
                                                            Company
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="company"
                                                            name="company"
                                                            placeholder="Your Company"
                                                            value={formData.company}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inquiryType" className="form-label">
                                                            Inquiry Type
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inquiryType"
                                                            name="inquiryType"
                                                            placeholder="Test@gmail.com"
                                                            value={formData.inquiryType}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="subject" className="form-label">
                                                            Subject
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Your Company"
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="message" className="form-label">
                                                            Message
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="message"
                                                            name="message"
                                                            rows={5}
                                                            placeholder="Tell us about your inquiry"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary btn-lg w-100">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="ps-lg-4 mt-4 mt-lg-0">
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="flex-shrink-0">
                                                <div className="bg-primary rounded-3 p-3">
                                                    <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-1">Email</h5>
                                                <p className="text-muted mb-1">BIG@careers.com</p>
                                                <small className="text-muted">We respond within 24 hours</small>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0">
                                                <div className="bg-success rounded-3 p-3">
                                                    <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-1">Phone</h5>
                                                <p className="text-muted mb-1">+971 600 0549 993</p>
                                                <small className="text-muted">Mon-Fri, 9AM-6PM PST</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs