import React from 'react'

const TermsContent = () => {
    return (
        <div className="container fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <h2 className="fw-bold mb-4" style={{ color: "#0ea5e9", fontSize: "2.5rem" }}>
                        Terms of Use
                    </h2>

                    <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                        These Terms of Use apply to all visitors, users, and others who access or use the website of Bahwan
                        International Group.
                    </p>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">1. User Accounts</h4>
                        <p style={{ lineHeight: "1.6" }}>
                            You may be required to create an account to access certain features. You are responsible for safeguarding
                            your password and any activities under your account.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">2. Prohibited Conduct</h4>
                        <p className="mb-3" style={{ lineHeight: "1.6" }}>
                            You agree not to:
                        </p>
                        <ul className="list-unstyled ms-3">
                            <li className="mb-2" style={{ lineHeight: "1.6" }}>
                                Violate any applicable law or regulation.
                            </li>
                            <li className="mb-2" style={{ lineHeight: "1.6" }}>
                                Interfere with or disrupt the website or servers.
                            </li>
                            <li className="mb-2" style={{ lineHeight: "1.6" }}>
                                Upload malicious software or content.
                            </li>
                            <li className="mb-2" style={{ lineHeight: "1.6" }}>
                                Attempt unauthorized access to systems or user data.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">3. Content Ownership</h4>
                        <p style={{ lineHeight: "1.6" }}>
                            All original content remains the intellectual property of Bahwan International Group. You may not copy,
                            modify, distribute, or sell any part of our content without permission.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">4. Termination</h4>
                        <p style={{ lineHeight: "1.6" }}>
                            We reserve the right to suspend or terminate access to our website for any user who violates these terms,
                            without prior notice.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">5. Disclaimers</h4>
                        <p style={{ lineHeight: "1.6" }}>
                            The website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or
                            completeness of content on this site.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold mb-3">6. Jurisdiction</h4>
                        <p style={{ lineHeight: "1.6" }}>
                            These Terms of Use are governed by the laws of [Insert Country/Region], and you consent to the exclusive
                            jurisdiction and venue of courts located therein.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsContent