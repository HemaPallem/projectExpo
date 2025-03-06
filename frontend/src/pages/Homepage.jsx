
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModeSelection from "../components/ModeSelection";

function Homepage() {
  return (
    <div className="d-flex flex-column h-100vh">
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <ModeSelection />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
