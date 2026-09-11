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
      <main className="max-w-400 mx-auto">
        <Navbar />
        <Banner />
        <Suspense
          fallback={
            <div className="text-center text-2xl font-bold">Loading...</div>
          }
        >
          <TechnologyGrid technologies={technologyPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
