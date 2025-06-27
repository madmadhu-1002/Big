import Image from "next/image"

export default function EmpoweringLivesSection() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image Section */}
                    <div className="col-lg-5">
                        <div className="position-relative">
                            <Image
                                src="/assets/BIG-OMAN-4.png"
                                alt="VinFast Automotive Showroom"
                                width={600}
                                height={400}
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-lg-7">
                        <div className="ps-lg-4">
                            <h2 className="display-6 fs-3 fw-bold text-primary mb-2">Empowering Lives Through Enterprise</h2>

                            <div className="content-text" style={{ lineHeight: "1.4", fontSize: "16px" }}>
                                <p className="mb-2">
                                    Founded in 2004, Bahwan International Group (BIG) is a future-focused, diversified business
                                    conglomerate headquartered in Muscat, Oman & regional office in Dubai UAE. With a vision to bridge
                                    global innovation with regional opportunity, BIG has steadily grown into one of the Middle East and
                                    North Africa's most respected and agile business groups.
                                </p>

                                <p className="mb-2">
                                    Our operations span several high-impact sectors including automotive distribution, healthcare
                                    solutions, food and consumer goods, equipment rental, and strategic joint ventures. Through exclusive
                                    partnerships with leading international brands, we deliver world-class products and services tailored
                                    to the evolving needs of customers across Oman, Saudi Arabia, Bahrain the UAE, Iraq, and beyond.
                                </p>

                                <p className="mb-2">
                                    At the core of BIG's success lies a deep commitment to integrity, operational excellence, and
                                    long-term value creation. We believe in empowering people—our employees, partners, and communities—by
                                    fostering a culture of accountability, innovation, and continuous improvement.
                                </p>

                                <p className="mb-0">
                                    With a growing team of over 1800 professionals and a network that spans multiple markets, Bahwan
                                    International Group remains driven by its founding principles: customer-centric growth, sustainable
                                    business practices, and strategic global alignment. As we look toward the future, BIG continues to
                                    explore new opportunities, expand its reach, and contribute meaningfully to the economic and social
                                    progress of the region.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
