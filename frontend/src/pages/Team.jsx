import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpeg"; // Import images

const teamMembers = [
  {
    name: "Fred Morrison",
    role: "Accountant-auditor",
    image: img1,
  },
  {
    name: "Ann Smith",
    role: "Vice President",
    image: img1,
  },
  {
    name: "Roxie Swanson",
    role: "Sales Manager",
    image: img1,
  },
  {
    name: "John Doe",
    role: "Marketing Head",
    image: img1,
  },
  {
    name: "Emma Brown",
    role: "HR Manager",
    image: img1,
  },
];

const Team = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Flex-grow-1 ensures this section takes up remaining space */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center vw-100" style={{ paddingTop: "60px"}}>
        <div className="container-fluid text-center my-5">
          <h2 className="fw-bold" id="team-heading">Our Team Members</h2>
          <p className="text-muted">Meet our dedicated team of professionals.</p>

          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg col-md-4 col-sm-6 mb-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mb-3 shadow-2"
                      style={{ width: "120px", height: "120px" }}
                    />
                    <h5 className="card-title">{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer will be pushed to the bottom */}
      <Footer />
    </div>
  );
};

export default Team;