"use client"

import Image from "next/image"

export default function PartnersSection() {
    const partners = [
        {
            name: "Hyundai",
            logo: "/assets/partners/image 34.png",
        },
        {
            name: "ABB",
            logo: "/assets/partners/Picture1.png",
        },
        {
            name: "Hitachi",
            logo: "/assets/partners/Picture2.png",
        },
        {
            name: "IQantar",
            logo: "/assets/partners/Picture3.png",
        },
        {
            name: "GreenTech",
            logo: "/assets/partners/Picture4.png",
        },
        {
            name: "iPark",
            logo: "/assets/partners/Picture5.png",
        },
        {
            name: "ADAD International",
            logo: "/assets/partners/Picture6.png",
        },
        {
            name: "Wipro",
            logo: "/assets/partners/Picture7.png",
        },
        {
            name: "Page Middle East",
            logo: "/assets/partners/Picture8.png",
        },
        {
            name: "ADB Safegate",
            logo: "/assets/partners/Picture10.png",
        },
        {
            name: "Smit Lamnalco",
            logo: "/assets/partners/Picture11.png",
        },
        {
            name: "Vanderlande",
            logo: "/assets/partners/Picture12.png",
        },
        {
            name: "Rosenbauer",
            logo: "/assets/partners/Picture14.png",
        },
        {
            name: "Minimax",
            logo: "/assets/partners/Picture15.png",
        },
        {
            name: "Blue Aqua",
            logo: "/assets/partners/Picture16.png",
        },
        {
            name: "Hyunet India",
            logo: "/assets/partners/Picture17.png",
        },
        {
            name: "GSS",
            logo: "/assets/partners/Picture18.png",
        },
    ]

    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">Our Partners</h2>
                </div>

                {/* Partners Grid */}
                <div className="row g-4 justify-content-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="partner-card bg-white rounded-3 shadow-sm p-4 h-100 d-flex align-items-center justify-content-center">
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={120}
                                    height={60}
                                    className="img-fluid"
                                    style={{ maxHeight: "60px", objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .partner-card {
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
          min-height: 120px;
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
          border-color: #e0e0e0;
        }
      `}</style>
        </section>
    )
}