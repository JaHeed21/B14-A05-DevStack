import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export interface Technology {
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
  const [SelectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedStack = technologyList.filter((tech) => {
    return SelectedIds.includes(tech.id);
  });

  const addToStack = (techId: string) => {
    if (SelectedIds.includes(techId)) return;

    setSelectedIds((previousIds: string[]) => [...previousIds, techId]);
  };

  const removeFromStack = (techId: string) => {
    setSelectedIds((previousIds: string[]) =>
      previousIds.filter((id) => id !== techId),
    );
  };

  const removeAll = () => setSelectedIds([]);
  return (
    <>
      <section className="mx-auto max-w-400 w-full px-5 pb-12 pt-8 sm:px-8 lg:px-14 ">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[2.2rem] font-black sm:text-[3rem] font-inter">
              Explore the{" "}
              <span className="bg-linear-to-r from-[#d72c8d] to-[#1f3bd9] bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mt-2 text-[1.5rem] font-jakarta text-[#64748B]">
              Pick one technology er category to build your idea stack.
            </p>
          </div>
        </div>
        {/* xl:grid-cols-[minmax(0,1fr)_270px] ------> same as what used bellow*/}
        <div className="grid gap-8 xl:grid-cols-[1fr_270px]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologyList.map((technology) => {
              const isSelected = SelectedIds.includes(technology.id);
              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  onAdd={addToStack}
                />
              );
            })}
          </div>
          <YourStack
            selectedStack={selectedStack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </section>
    </>
  );
};

export default TechnologyGrid;
