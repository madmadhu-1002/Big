import Image from 'next/image';
import Flag from 'react-world-flags';

export default function JointVentures({
    title,
    description,
    icon,
    countries,
    cards,
}) {
    return (
        <div className="bg-light mx-3 mt-3 p-0 py-4 rounded shadow-sm"
            style={{
                background: "linear-gradient(180deg, #DDF2FF 50%, #FFFFFF 100%)",
                borderRadius: "18px",
            }}>
            <div className="container-fluid">
                {/* Title Row */}
                <div className="row align-items-start mb-4">
                    {/* Left Icon & Text */}
                    <div className="col-md-6 d-flex flex-column flex-md-row mb-4">
                        <div className="align-self-start align-self-md-center mb-3 mb-md-0 me-md-3">
                            <div className="hexagon p-3">{icon}</div>
                        </div>
                        <div>
                            <h5 className="fw-bold mb-1">{title}</h5>
                            <p className="mb-0">{description}</p>
                        </div>
                    </div>


                    {/* Flags */}
                    <div className="col-md-6 mt-3 mt-md-0 d-flex justify-content-md-start gap-3 align-items-center flex-wrap">
                        {countries.map(({ code, name }) => (
                            <div key={code} className="d-flex align-items-center gap-2">
                                <Flag code={code} style={{ width: 35, height: 25 }} />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards Row */}
                <div className="row g-4">
                    {cards.map(({ image, title, subtitle }, idx) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={idx}>
                            <div className="card border-0 shadow-sm h-100">
                                <div className="position-relative image-wrapper" style={{ width: "100%", height: "250px" }}>
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="card-img-top object-fit-contain image-zoom"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="fw-bold text-primary mb-0">{title}</h6>
                                    {subtitle && <small className="text-muted">{subtitle}</small>}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
