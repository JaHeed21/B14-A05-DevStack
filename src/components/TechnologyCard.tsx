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
  isSelected: boolean;
  onAdd: (techId: string) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article
      className={`min-h-[260px] flex flex-col rounded-xl border bg-[#f7f7f7] p-4 ${isSelected ? "border-[#050505]" : "border-[#b1afaf]"}`}
    >
      <div className="flex items-start justify-between px-2 mb-4">
        <div className="h-8 w-8 ">
          <img src={technology.icon} alt={technology.name} />
        </div>
        <span className="rounded-full text-[.8rem]">{technology.badge}</span>
      </div>

      <h3 className="text-[1.05rem] px-2 font-bold text-[#171f2c] sm:text-[1.2rem]">
        {technology.name}
      </h3>
      <p className="px-2 text-[0.9rem] leading-6 text-[#4b5563]">
        {technology.description}
      </p>

      <div className="mt-auto px-2 pt-4">
        <div className="mb-4 flex justify-between items-center gap-2 text-[.82rem] text-[#4b5563]">
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

      <button
        onClick={() => onAdd(technology.id)}
        className={`w-full rounded-xl px-4 py-3 text-sm font-semibold ${isSelected ? "bg-[#e5e7eb] text-[#111827]" : "bg-[#171c2f] text-[white]"}`}
        disabled={isSelected}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;
