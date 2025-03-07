
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ModeSelection from "../components/ModeSelection";

// function Homepage() {
//   return (
//     <div className="d-flex flex-column h-100vh">
//       <Navbar />
//       <div style={{ flexGrow: 1 }}>
//         <ModeSelection />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Homepage;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModeSelection from "../components/ModeSelection";

function Homepage() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      {/* Fixed Navbar */}
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Mode Selection (Takes up Remaining Space) */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ModeSelection />
      </div>

      {/* Footer at Bottom */}
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
