import Image from "next/image";

const MediaEventCard = ({ image, alt, title, description, link }) => (
    <div className="bg-white rounded shadow h-100 p-3">
        <div className="row g-2 align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-4">
                <div className="position-relative w-100" style={{ height: "120px" }}>
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        className="rounded object-fit-contain"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Content Column */}
            <div className="col-12 col-md-8">
                <h6 className="fw-bold" style={{ fontSize: "1rem" }}>{title}</h6>
                <p className="mb-1" style={{ fontSize: "12px" }}>{description}</p>
                <a href={link || "#"} className="text-primary small">Read More..</a>
            </div>
        </div>
    </div>
);

export default MediaEventCard;
