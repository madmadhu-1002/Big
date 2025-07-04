import Image from "next/image"
import DotIndicators from "./ui/DotIndicators"

const SlidingCards = () => {
    return (
        <>
            <div className="container py-5">
                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-4" style={{ color: "#0ea5e9", fontSize: "2.5rem" }}>
                        Look at Our Other Business
                    </h2>

                    {/* Filter Buttons */}
                    <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                        <button
                            className="btn text-white px-4 py-2 rounded-pill fw-medium"
                            style={{ backgroundColor: "#0ea5e9", borderColor: "#0ea5e9" }}
                        >
                            Automobile
                        </button>
                        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-medium text-dark">Food</button>
                        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-medium text-dark">
                            Renewable Energy
                        </button>
                        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-medium text-dark">
                            Defense Supply
                        </button>
                        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-medium text-dark">
                            Airport Solutions
                        </button>
                    </div>
                </div>

                {/* Business Cards */}
                <div className="row g-4">
                    {/* Changan Auto Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow border-0 rounded-4 overflow-hidden">
                            <div className="position-relative">
                                <Image
                                    src="/assets/business2.png"
                                    alt="Changan Auto Dealership"
                                    width={400}
                                    height={280}
                                    className="card-img-top"
                                    style={{ height: "280px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="card-body text-center py-4 bg-white">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                backgroundColor: "#1e40af",
                                                border: "2px solid #1e40af",
                                            }}
                                        >
                                            <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
                                                V
                                            </span>
                                        </div>
                                    </div>
                                    <h5
                                        className="card-title mb-0 fw-bold text-uppercase text-dark"
                                        style={{ fontSize: "1.4rem", letterSpacing: "1px" }}
                                    >
                                        CHANGAN
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fox Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow border-0 rounded-4 overflow-hidden">
                            <div className="position-relative">
                                <Image
                                    src="/assets/business3.png"
                                    alt="Fox Company Building"
                                    width={400}
                                    height={280}
                                    className="card-img-top"
                                    style={{ height: "280px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="card-body text-center py-4 bg-white">
                                <h5
                                    className="card-title mb-0 fw-bold text-uppercase text-dark"
                                    style={{ fontSize: "1.8rem", letterSpacing: "4px" }}
                                >
                                    FOX
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Vinfast Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow border-0 rounded-4 overflow-hidden">
                            <div className="position-relative">
                                <Image
                                    src="/assets/business4.png"
                                    alt="Vinfast Company Building"
                                    width={400}
                                    height={280}
                                    className="card-img-top"
                                    style={{ height: "280px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="card-body text-center py-4 bg-white">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="me-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                                backgroundColor: "#6b7280",
                                                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                            }}
                                        >
                                            <span className="text-white fw-bold" style={{ fontSize: "14px", marginTop: "8px" }}>
                                                V
                                            </span>
                                        </div>
                                    </div>
                                    <h5
                                        className="card-title mb-0 fw-bold text-uppercase text-dark"
                                        style={{ fontSize: "1.4rem", letterSpacing: "3px" }}
                                    >
                                        VINFAST
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DotIndicators count={3} activeIndex={0} />
            </div>

        </>
    )
}

export default SlidingCards