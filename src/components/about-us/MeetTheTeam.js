import { Row, Col } from "react-bootstrap"
import Profile from "../ui/Profile"

const team = [
    {
        name: "Shaikh Ahamad Bhawan",
        role: "Chairman",
        image: "/assets/team/sabahwan.png",
    },
    {
        name: "Sheikh Abdullah Bahwan",
        role: "Executive Director",
        image: "/assets/team/sabdullahb.png",
    },
    {
        name: "Sheikh Sultan Bahwan",
        role: "Director",
        image: "/assets/team/sbsultan.png",
    },
    {
        name: "Shyam Asnani",
        role: "CEO",
        image: "/assets/team/sasnani.png",
    },
    {
        name: "Paulo Fernandes",
        role: "COO International Operations",
        image: "/assets/team/pfernandes.png",
    },
    {
        name: "G.K Ganesh",
        role: "COO Domestic Operations",
        image: "/assets/team/gkganesh.png",
    },
    {
        name: "Manish Kakkar",
        role: "COO Bahwan Services and Trading LLC",
        image: "/assets/team/mkakkar.png",
    },
    {
        name: "Tom Cyriac",
        role: "COO Sadad International",
        image: "/assets/team/tcyriac.png",
    },
]


const MeetTheTeam = () => {
    return (
        <>
            <Row className="p-5">
                <Col sm={4}>
                    <h2
                        className="mb-3"
                        style={{
                            fontSize: "48px",
                            fontWeight: "600",
                            color: "#3498db",
                            lineHeight: "1.2",
                        }}
                    >
                        Meet the Team
                    </h2>
                    <p
                        style={{
                            fontSize: "24px",
                            color: "#2c3e50",
                            fontWeight: "400",
                            lineHeight: "1.4",
                            marginBottom: "40px",
                        }}
                    >
                        The great minds
                        <br />
                        behind our work
                    </p>

                </Col>
                <Col sm={8}>
                    <Row className="g-4">
                        {team.map((member, index) => (
                            <Col key={index} xs={12} sm={6} md={4} >
                                <Profile {...member} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default MeetTheTeam