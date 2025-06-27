"use client"

import Image from "next/image"
import Link from "next/link"

export default function UpcomingEvents() {
    const events = [
        {
            id: 1,
            title: "Suhail Bahwan Group Hosts Iftar Gatherings",
            description:
                "During the holy month of Ramadan, the group organized a series of Iftar events, fostering community spirit and strengthening bonds among employees and partners.",
            image:
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
            date: "May 05, 2025",
            likes: 152,
            shareIcon: true,
        },
        {
            id: 2,
            title: "Bahwan CyberTek Acquires STOICS IT's Operations",
            description:
                "Bahwan has expanded its global footprint by acquiring STOICS IT's operations in Cyprus, UAE, and India, enhancing its capabilities in digital transformation solutions.",
            image:
                "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
            date: "May 05, 2025",
            likes: 200,
            shareIcon: true,
        },
        {
            id: 3,
            title: "Road Safety Awareness",
            description:
                "On February 25, 2025, Bahwan Engineering Company (BEC) hosted a Road Safety Program in collaboration with Royal Oman Police (ROP)...",
            image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
            date: "May 05, 2025",
            likes: 100,
            shareIcon: true,
        },
    ]

    return (
        <section className="py-5 bg-light">
            <div className="container-fluid">
                <div className="row">
                    {/* Left Sidebar */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="sticky-top" style={{ top: "100px" }}>
                            <h2 className="display-6 fw-bold text-primary mb-4">BIG upcoming Events</h2>
                            <p className="text-muted mb-4">
                                Bahwan International Group be recognized as an entity that provides excellence
                            </p>
                            <Link href="/events" className="btn btn-primary rounded-pill px-4">
                                View all <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Events Cards */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row g-4">
                            {events.map((event) => (
                                <div key={event.id} className="col-lg-4 col-md-6">
                                    <div className="event-card bg-white rounded-4 shadow-sm overflow-hidden h-100">
                                        {/* Event Image */}
                                        <div className="position-relative">
                                            <div
                                                className="rounded-circle overflow-hidden mx-auto mt-4"
                                                style={{ width: "80px", height: "80px" }}
                                            >
                                                <Image
                                                    src={event.image || "/placeholder.svg"}
                                                    alt={event.title}
                                                    width={80}
                                                    height={80}
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>

                                            {/* Share Icon */}
                                            {event.shareIcon && (
                                                <div className="position-absolute top-0 end-0 m-3">
                                                    <button
                                                        className="btn btn-light btn-sm rounded-circle"
                                                        style={{ width: "32px", height: "32px" }}
                                                    >
                                                        <i className="fas fa-share-alt text-primary"></i>
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Event Content */}
                                        <div className="card-body p-4 text-center">
                                            <h6 className="fw-bold mb-3" style={{ fontSize: "14px", lineHeight: "1.4" }}>
                                                {event.title}
                                            </h6>

                                            <p className="text-muted small mb-3" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                                                {event.description}
                                            </p>

                                            {/* Date */}
                                            <div className="d-flex align-items-center justify-content-center mb-3">
                                                <i className="fas fa-calendar-alt text-muted me-2" style={{ fontSize: "12px" }}></i>
                                                <small className="text-muted">{event.date}</small>
                                            </div>

                                            {/* Footer */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-heart text-danger me-1" style={{ fontSize: "12px" }}></i>
                                                    <small className="text-muted">{event.likes}</small>
                                                </div>
                                                <Link
                                                    href={`/events/${event.id}`}
                                                    className="text-primary text-decoration-none fw-medium"
                                                    style={{ fontSize: "12px" }}
                                                >
                                                    Read More <i className="fas fa-arrow-right ms-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .event-card {
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }

        .sticky-top {
          position: sticky;
        }

        @media (max-width: 768px) {
          .sticky-top {
            position: relative;
            top: auto !important;
          }
        }
      `}</style>
        </section>
    )
}
