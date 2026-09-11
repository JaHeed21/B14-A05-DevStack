import React from "react";

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

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div key={technology.id} className="h-10 w-10 ">
          <img src={technology.icon} alt={technology.name} />
        </div>
        <span className="rounded-full text-[.8rem]">{technology.badge}</span>
      </div>
      <div>
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <div>
        <div className="flex items-center gap-3 text-[.82rem] text-[#4b5563]">
          <span>{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span
            className="flex items-center gap-1 font-semibold
          text-[#111827]"
          >
            <span className="text-[#f59e0b]">★</span>
            {technology.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
