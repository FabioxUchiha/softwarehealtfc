import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Acercade } from "./views/paginaPrincipal/Acercade";
import { Contacto } from "./views/paginaPrincipal/Contacto";
import { Inicio } from "./views/paginaPrincipal/Inicio";

function App() {
  return (
    <div className="font-mono subpixel-antialiased text-gray-600">
      <Navbar />
      <Inicio />
      <Acercade />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
