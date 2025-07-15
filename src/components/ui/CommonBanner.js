
import Image from 'next/image';
import Link from 'next/link';





const CommonBanner = ({
    imageSrc,
    title,
    subtitle,
    imageAlt = 'banner',
    textPosition = { top: '35%', left: '5%' },
    buttons = [],
    titleFontSize = '2rem',
    subtitleFontSize = '1rem',
}) => {
    return (
        <div className="min-w-full flex-shrink-0 position-relative" data-aos="fade-down" style={{ position: 'relative' }}>
            <Image
                src={imageSrc}
                width={1467}
                height={614}
                alt={imageAlt}
                layout="responsive"
                className="h-100"
            />

            {/* Overlay Text */}
            <div
                className="position-absolute text-white text-start px-0 overlay-text"
                style={{
                    ...textPosition
                }}
            >
                <h1 className="mb-0 responsive-title" style={{ fontSize: titleFontSize }}>{title}</h1>
                <p className="mb-0 responsive-subtitle" style={{ fontSize: subtitleFontSize, width: '60%' }}>{subtitle}</p>

                {/* Buttons */}
                <div className="d-flex gap-2 flex-wrap mt-2">
                    {buttons.map((btn, idx) => (
                        <Link
                            key={idx}
                            href={btn.href}
                            className={`btn responsive-button  ${btn.variant === 'secondary' ? 'btn-outline-light' : 'btn-primary'
                                }`}
                        >
                            {btn.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
