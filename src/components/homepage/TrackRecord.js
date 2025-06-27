import React from 'react'

const TrackRecord = () => {
  return (
    <>
        {/* Track Record Statistics */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary mb-3">Our Track Record Speaks for Itself</h2>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-primary h-100 track-record-card" style={{ transition: "all 0.3s ease" }}>
                <div className="card-body">
                  <div className="display-4 text-primary fw-bold mb-2">8+</div>
                  <h5 className="text-primary">Countries</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-primary h-100 track-record-card" style={{ transition: "all 0.3s ease" }}>
                <div className="card-body">
                  <div className="display-4 text-primary fw-bold mb-2">30+</div>
                  <h5 className="text-primary">Companies</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-primary h-100 track-record-card" style={{ transition: "all 0.3s ease" }}>
                <div className="card-body">
                  <div className="display-4 text-primary fw-bold mb-2">45+</div>
                  <h5 className="text-primary">Brands</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-primary h-100 track-record-card" style={{ transition: "all 0.3s ease" }}>
                <div className="card-body">
                  <div className="display-4 text-primary fw-bold mb-2">1800+</div>
                  <h5 className="text-primary">Employees</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrackRecord