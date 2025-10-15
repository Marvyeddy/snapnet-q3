import Navbar from "./components/Navbar";
import Left from "../src/assets/Group 3510.svg";
import Hero from "./components/Hero";

const App = () => {
  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute bottom-0">
        <img src={Left} alt="left" loading="lazy" />
      </div>
      <div>
        <Navbar />
      </div>

      <Hero />
    </section>
  );
};

export default App;
