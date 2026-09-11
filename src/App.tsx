import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/TechnologyGrid";
import { Suspense } from "react";

const getTechnologies = async () => {
  const response = await fetch("./data/data.json");
  return response.json();
};

const technologyPromise = getTechnologies();
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
