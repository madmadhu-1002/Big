import { Button } from "react-bootstrap";
import EmblaThumbnails from "../ui/EmblaThumbnails";
import Image from "next/image"
import { Row, Col } from "react-bootstrap"


const slides = [
  '/assets/overview1.png',
  '/assets/overview2.png',
  '/assets/overview3.png',
];

const events = [
  {
    id: 1,
    image:
      "/assets/latest-events-1.png",
    title: "Partnership Agreement Signing",
    description: "Strategic partnership ceremony with international business leaders",
  },
  {
    id: 2,
    image:
      "/assets/latest-events-1.png",
    title: "Product Launch Event",
    description: "Unveiling of new automotive solutions and technologies",
  },
  {
    id: 3,
    image:
      "/assets/latest-events-1.png",
    title: "Annual Team Gathering",
    description: "Company-wide celebration and recognition ceremony",
  },
  {
    id: 4,
    image:
      "/assets/latest-events-1.png",
    title: "Business Excellence Awards",
    description: "Recognition of outstanding achievements and partnerships",
  },
]

const Overview = () => {
  return (
    <>
      {/* Company Overview */}
      <section id="about" className="py-5 bg-light" >
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 mb-4 mb-lg-0 align-items-center d-flex flex-column" data-aos="fade-right">
              <EmblaThumbnails slides={slides} />
            </div>
            <div className="col-lg-6 align-items-start d-flex flex-column" data-aos="fade-left">
              <h2 className="text-primary mb-3" style={{ fontSize: "60px" }}>About Bahwan International Group</h2>
              <p className="text-muted mb-4">
                Established in 2004, Balwan International Group has grown into a dynamic, diversified conglomerate with
                a strong international presence. Based in the UAE, we have expanded our operations across multiple
                sectors, building a reputation for excellence, innovation, and sustainable growth.
              </p>
              <p className="text-muted mb-4">
                With innovative strategies and customer satisfaction at our core, Balwan International Group stands as a
                trusted partner in driving business success and creating value for stakeholders worldwide.
              </p>
              <Button className="px-4">Know More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 align-items-start d-flex flex-column" data-aos="fade-right">
              <h2 className="text-primary mb-3" style={{ fontSize: "60px" }}>About Bahwan International Group</h2>
              <p className="text-muted mb-4">
                Established in 2004, Balwan International Group has grown into a dynamic, diversified conglomerate with
                a strong international presence. Based in the UAE, we have expanded our operations across multiple
                sectors, building a reputation for excellence, innovation, and sustainable growth.
              </p>
              <p className="text-muted mb-4">
                With innovative strategies and customer satisfaction at our core, Balwan International Group stands as a
                trusted partner in driving business success and creating value for stakeholders worldwide.
              </p>
              <Button className="px-4">Know More</Button>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0 " data-aos="fade-left">
              <Row className="g-3 mb-3">
                <Col sm={12}>
                  <div
                    className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                    style={{ height: "350px" }}
                  >
                    <Image
                      src="/assets/latest-events-1.png"
                      alt={events[0].title}
                      fill
                      className="object-fit-cover rounded-4"
                    />
                  </div>
                </Col>

                <Col sm={6}>
                  <div
                    className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                    style={{ height: "150px" }}
                  >
                    <Image
                      src="/assets/latest-events-2.png"
                      alt={events[1].title}
                      fill
                      className="object-fit-cover rounded-4"
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div
                    className="event-card position-relative overflow-hidden rounded-4 shadow-lg"
                    style={{ height: "150px" }}
                  >
                    <Image
                      src="/assets/latest-events-3.png"
                      alt={events[1].title}
                      fill
                      className="object-fit-cover rounded-4"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Overview