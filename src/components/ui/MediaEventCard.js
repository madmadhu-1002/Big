import Image from "next/image";

const MediaEventCard = ({ image, alt, title, description, link }) => (
    <div className="d-flex flex-column flex-md-row bg-white rounded shadow p-3 h-100">
        <Image
            src={image}
            width={150}
            height={150}
            className="rounded me-md-3 mb-3 mb-md-0"
            alt={alt}
        />
        <div>
            <h6 className="fw-bold">{title}</h6>
            <p className="mb-1 small">{description}</p>
            <a href={link || "#"} className="text-primary small">Read More..</a>
        </div>
    </div>
);

export default MediaEventCard