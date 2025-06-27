import Image from "next/image"

const Overview = () => {
  return (
    <>
        {/* Company Overview */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src="/assets/overview.png"
                alt="Business meeting"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-primary mb-3">Balwan International Group – Shaping Global Horizons Since 2004</h2>
              <p className="text-muted mb-4">
                Established in 2004, Balwan International Group has grown into a dynamic, diversified conglomerate with
                a strong international presence. Based in the UAE, we have expanded our operations across multiple
                sectors, building a reputation for excellence, innovation, and sustainable growth.
              </p>
              <p className="text-muted mb-4">
                With innovative strategies and customer satisfaction at our core, Balwan International Group stands as a
                trusted partner in driving business success and creating value for stakeholders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Overview