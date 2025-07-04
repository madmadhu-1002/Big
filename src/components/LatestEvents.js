"use client"

import Image from "next/image"
import { Row, Col } from "react-bootstrap"

const events = [
    {
        id: 1,
        image:
            "/assets/latest-events-1.png",
        title: "Partnership Agreement Signing",
        description: "Strategic partnership ceremony with international business leaders",
    },
    {
        id: 2,
        image:
            "/assets/latest-events-1.png",
        title: "Product Launch Event",
        description: "Unveiling of new automotive solutions and technologies",
    },
    {
        id: 3,
        image:
            "/assets/latest-events-1.png",
        title: "Annual Team Gathering",
        description: "Company-wide celebration and recognition ceremony",
    },
    {
        id: 4,
        image:
            "/assets/latest-events-1.png",
        title: "Business Excellence Awards",
        description: "Recognition of outstanding achievements and partnerships",
    },
]

export default function LatestEvents() {


    return (
        <section className="py-5">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">Latest Events</h2>

                </div>
                <Row className="g-3 mb-3">
                    <Col sm={12}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "650px" }}
                        >
                            <Image
                                src="/assets/latest-events-1.png"
                                alt={events[0].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "450px" }}
                        >
                            <Image
                                src="/assets/latest-events-2.png"
                                alt={events[1].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "450px" }}
                        >
                            <Image
                                src="/assets/latest-events-3.png"
                                alt={events[1].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="g-3">
                    <Col sm={4}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "250px" }}
                        >
                            <Image
                                src="/assets/latest-events-4.png"
                                alt={events[2].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "250px" }}
                        >
                            <Image
                                src="/assets/latest-events-5.png"
                                alt={events[3].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "250px" }}
                        >
                            <Image
                                src="/assets/latest-events-6.png"
                                alt={events[3].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>
                </Row>

            </div>

            <style jsx>{`
        .event-card {
          transition: all 0.3s ease;
        }

        .event-card:hover {
          transform: scale(1.02);
        }

        .bg-gradient-to-top {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
        }
      `}</style>
        </section>
    )
}
