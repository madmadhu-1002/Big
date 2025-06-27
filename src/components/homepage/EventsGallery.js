"use client"

import Image from "next/image"
import { Row, Col } from "react-bootstrap"

export default function EventsGallery() {
    const events = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
            title: "Partnership Agreement Signing",
            description: "Strategic partnership ceremony with international business leaders",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
            title: "Product Launch Event",
            description: "Unveiling of new automotive solutions and technologies",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
            title: "Annual Team Gathering",
            description: "Company-wide celebration and recognition ceremony",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
            title: "Business Excellence Awards",
            description: "Recognition of outstanding achievements and partnerships",
        },
    ]

    return (
        <section className="py-5">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-primary mb-3">Featured News and Insights</h2>

                </div>
                <Row className="g-3 mb-3">
                    <Col sm={4}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "350px" }}
                        >
                            <Image
                                src="/assets/news/news-1.jpg"
                                alt={events[0].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>

                    <Col sm={8}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "350px" }}
                        >
                            <Image
                                src="/assets/news/news-2.jpg"
                                alt={events[1].title}
                                fill
                                className="object-fit-cover rounded-4"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="g-3">
                    <Col sm={8}>
                        <div
                            className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                            style={{ height: "250px" }}
                        >
                            <Image
                                src="/assets/news/news-3.jpg"
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
                                src="/assets/news/news-4.jpg"
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
