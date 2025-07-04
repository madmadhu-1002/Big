// components/BusinessCardItem.tsx

import React from 'react'

const BuiFocCard = ({ title, description, icon, isCenter, position }) => {
  const isVisible = Math.abs(position) <= 2

  if (!isVisible) return null

  return (
    <>
      <div style={{ height: "360px" }}>
        <div
          className="card mx-2"
          style={{
            width: isCenter ? "280px" : "240px",
            height: isCenter ? "300px" : "280px",
            borderRadius: "20px",
            border: "none",
            boxShadow: isCenter ? "0 8px 25px rgba(0,0,0,0.15)" : "0 4px 15px rgba(0,0,0,0.1)",
            transform: isCenter ? "scale(1.05)" : "scale(0.95)",
            transition: "all 0.3s ease",
            opacity: isCenter ? 1 : 0.8,
            zIndex: isCenter ? 5 : 1,
          }}
        >
          <div className="card-body text-center p-4 d-flex flex-column justify-content-between h-100">
            <div>
              <div className="mb-3">{icon}</div>
              <h5
                className="card-title mb-3"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#2c3e50",
                }}
              >
                {title}
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "14px",
                  color: "#6c757d",
                  lineHeight: "1.5",
                }}
              >
                {description}
              </p>
            </div>
            <a
              href="#"
              className="text-decoration-none mt-3"
              style={{
                color: "#3498db",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default BuiFocCard


