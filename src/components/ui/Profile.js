import Image from 'next/image';

const Profile = ({ name, image, role }) => {
    return (
        <>
            <div className="text-center">
                {/* Profile Image */}
                <div className="mb-3">
                    <div className="rounded-circle overflow-hidden mx-auto shadow-lg" style={{ width: "150px", height: "150px" }}>
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={`${name}'s profile picture`}
                            width={150}
                            height={150}
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div>
                </div>

                {/* Name */}
                <h4 className="fw-bold text-dark mb-1">{name}</h4>

                {/* Title */}
                <p className="text-primary mb-0 fw-medium">{role}</p>
            </div>
        </>
    )
}

export default Profile