import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./views/paginaPrincipal/Inicio";

function App() {
  return (
    <div className="font-mono subpixel-antialiased">
      <Navbar />
      <Inicio />
      <div id="acercade" className="">
        2
      </div>
      <div id="contacto" className="">
        3
      </div>
      <Footer />
    </div>
  );
}

export default App;
