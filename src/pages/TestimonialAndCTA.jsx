// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Carousel } from "react-bootstrap";

// function TestimonialsAndCTA() {
//   return (
//     <>
//       <div style={{ width: "100vw", overflowX: "hidden" }}> {/* Ensure no horizontal overflow */}
//         <Navbar />
//         <section className="text-center py-5" style={{ width: "100%", padding: "0" }}> {/* Remove padding and set full width */}
//           <div className="row mx-0" style={{ width: "100%" }}> {/* Ensure row takes full width */}
//             <div className="col-12 px-0"> {/* Remove padding from column */}
//               <h2 className="fw-bold">What Our Users Say</h2>
//               <Carousel prevLabel="" nextLabel="" style={{ width: "100%" }}> {/* Ensure carousel takes full width */}
//                 <Carousel.Item>
//                   <div className="d-flex flex-column align-items-center">
//                     <p className="text-muted w-75">
//                       “This platform made learning so much easier and more interactive.”
//                     </p>
//                     <h5 className="fw-bold mt-3">John Doe</h5>
//                     <p className="text-muted">Student, College</p>
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <div className="d-flex flex-column align-items-center">
//                     <p className="text-muted w-75">
//                       “An excellent tool for gathering insightful reviews efficiently.”
//                     </p>
//                     <h5 className="fw-bold mt-3">Jane Smith</h5>
//                     <p className="text-muted">Professional, Company</p>
//                   </div>
//                 </Carousel.Item>
//                 {/* Add more Carousel.Items as needed */}
//               </Carousel>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>

//       {/* Optional CSS for Carousel Arrows */}
//       <style>
//         {`
//           .carousel-control-prev,
//           .carousel-control-next {
//             width: 5%; /* Adjust arrow size */
//             background-color: rgba(0, 0, 0, 0.5); /* Add background color */
//             border-radius: 50%; /* Make arrows circular */
//           }

//           .carousel-control-prev-icon,
//           .carousel-control-next-icon {
//             filter: invert(1); /* Change arrow color to white */
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default TestimonialsAndCTA;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";

function TestimonialsAndCTA() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <Navbar />
      <section className="text-center flex-grow-1 d-flex align-items-center justify-content-center" style={{ width: "100vw" }}>
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Users Say</h2>
          <Carousel controls={true} indicators={false} interval={3000} style={{ width: "100%" }}>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center">
                <p className="text-muted w-75">
                  “This platform made learning so much easier and more interactive.”
                </p>
                <h5 className="fw-bold mt-3">John Doe</h5>
                <p className="text-muted">Student, College</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center">
                <p className="text-muted w-75">
                  “An excellent tool for gathering insightful reviews efficiently.”
                </p>
                <h5 className="fw-bold mt-3">Jane Smith</h5>
                <p className="text-muted">Professional, Company</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      
      <Footer />

      <style>
        {`
          .carousel-control-prev,
          .carousel-control-next {
            width: 40px; 
            height: 40px;
            background-color: rgba(0, 0, 0, 0.2); 
            border-radius: 50%; 
          }

          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(1);
          }

          section {
            padding: 0;
            margin: 0;
          }

          .container {
            max-width: 100%;
            padding: 0 15px;
          }

          .carousel {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default TestimonialsAndCTA;