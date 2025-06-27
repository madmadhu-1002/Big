// components/ui/DotIndicators.jsx
import React from 'react'

const DotIndicators = ({ count, activeIndex }) => {
    return (
      <div className="mt-4 d-flex justify-content-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-pill bg-primary"
            style={{
              height: "8px",
              width: activeIndex === index ? "32px" : "12px",
              opacity: activeIndex === index ? 1 : 0.5,
              transition: "all 0.3s ease-in-out",
            }}
          ></div>
        ))}
      </div>
    );
  }
  

export default DotIndicators
