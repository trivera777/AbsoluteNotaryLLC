import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Credentials from "./Components/Credentials/Credentials";
import Contact from "./Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Credentials />
      <Contact />
    </>
  );
}

export default App;
