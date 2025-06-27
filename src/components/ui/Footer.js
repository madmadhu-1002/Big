import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
        <footer style={{ backgroundColor: "#1a1a1a", color: "white" }}>
      {/* Social Media Section */}
      <div className="container-fluid py-4" style={{ borderBottom: "1px solid #333" }}>
        <div className="container">
          <div className="row">
          <div className="col-md-4">
          <Image
              src="/bigh-logo-1.png"
              alt="AITF Logo"
              width={200}
              height={50}
              priority
              className='ps-3'
            />
          </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-end align-items-center">
                <span className="me-4" style={{ fontSize: "16px", fontWeight: "400" }}>
                  Follow Us on
                </span>
                <div className="d-flex gap-3">
                  <a href="#" className="text-white">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row">
          {/* Reach us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>
              Reach us
            </h5>
            <div className="mb-3 d-flex align-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="me-3"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span style={{ fontSize: "14px" }}>+971 600 0549 993</span>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="me-3"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span style={{ fontSize: "14px" }}>info@big.com</span>
            </div>
            <div className="d-flex align-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="me-3"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span style={{ fontSize: "14px" }}>Dubai , UAE</span>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Our Business
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Media & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>
              Legal
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Terms & Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "14px" }}>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>
              Join Our Newsletter
            </h5>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  style={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                    color: "white",
                    fontSize: "14px",
                  }}
                />
                <button
                  className="btn"
                  type="button"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "1px solid #007bff",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#999", lineHeight: "1.4" }}>
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer