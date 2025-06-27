import React from 'react'

const RentalCard = () => {
  return (
    <>
        <div
      className="card border-0 shadow-sm text-center"
      style={{
        maxWidth: "280px",
        margin: "0 auto",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <div className="card-body p-3">
        {/* Icon Circle */}
        <div
          className="d-flex justify-content-center align-items-center mx-auto mb-3"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#e8e8e8",
            borderRadius: "50%",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            {/* Car icon */}
            <path
              d="M5 11L6.5 6.5H17.5L19 11M5 11V16H6.5M5 11H19M19 11V16H17.5M6.5 16V17.5H8.5V16M15.5 16V17.5H17.5V16M8.5 16H15.5M6.5 16H8.5M15.5 16H17.5"
              stroke="#ff8c00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Key icon */}
            <path d="M12 3L14 5L12 7L10 5L12 3Z" fill="#ffd700" />
            <circle cx="12" cy="4" r="1" fill="#ffd700" />
          </svg>
        </div>

        {/* Title */}
        <h5
          className="card-title mb-3"
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#2c3e50",
          }}
        >
          Rental
        </h5>

        {/* Description */}
        <p
          className="card-text mb-3"
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            color: "#6c757d",
            marginBottom: "20px",
          }}
        >
          Bahwan provides comprehensive rental solutions for equipment, vehicles, and tools. With flexible terms and
          reliable support, it's a trusted partner.
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="text-decoration-none"
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
    </>
  )
}

export default RentalCard