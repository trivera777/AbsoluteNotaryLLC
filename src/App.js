import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Credentials from "./Components/Credentials/Credentials";
import Fees from "./Components/Fees/Fees";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Credentials />
      <Fees />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
