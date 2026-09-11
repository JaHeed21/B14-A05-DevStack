import { use } from "react";
import TechnologyCard from "./TechnologyCard";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string | null;
}

interface TechnologyGridProps {
  technologies: Promise<Technology[]>;
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  const technologyList = use(technologies);
  return (
    <>
      <section className="mx-auto w-full px-12 pb-12 pt-8 sm:px-8 lg:px-14">
        <div>
          <h2 className="text-[2.2rem] font-black sm:text-[3rem]">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#d72c8d] to-[#1f3bd9] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-[1.5rem]">
            Pick one technology er category to build your idea stack.
          </p>
        </div>
        <div>
          <div>
            {technologyList.map((technology) => (
              <TechnologyCard key={technology.id} technology={technology} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyGrid;
