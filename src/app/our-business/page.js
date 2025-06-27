import Image from "next/image"

const page = () => {
    return (
        <>
            {/* Hero Banner */}
            <div className="min-w-full flex-shrink-0 position-relative "
                data-aos='fade-down'>
                <Image
                    src="/assets/banners/ourbusiness.png"
                    width={1467}
                    height={614}
                    alt="banners"
                    layout="responsive"
                    className="h-100"

                />


            </div>
        </>
    )
}

export default page