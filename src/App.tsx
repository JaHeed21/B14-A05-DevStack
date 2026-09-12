import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/TechnologyGrid";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const getTechnologies = async () => {
  const response = await fetch("./data/data.json");
  return response.json();
};

const technologyPromise = getTechnologies();
function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Navbar />
      <div className="max-w-[1920px] border-b border-[#ececec]"></div>
      <Banner />
      <Suspense
        fallback={
          <div className="text-center text-2xl font-bold">Loading...</div>
        }
      >
        <TechnologyGrid technologies={technologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
