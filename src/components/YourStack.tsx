import type { Technology } from "./TechnologyGrid";

interface YourStackProps {
  selectedStack: Technology[];
  onRemove: (techId: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  const isEmpty = selectedStack.length === 0;
  return (
    <section>
      <h3>Your Stack</h3>
      <p className="">
        {selectedStack.length === 0
          ? "No technologies selected yet."
          : `${selectedStack.length} ${selectedStack.length <= 1 ? " Technology" : " Technologies"} selected.}`}
      </p>

      <div>
        {isEmpty ? (
          <p className="text-center text-sm border border-dotted px-6 py-4 rounded-xl">
            {" "}
            Your stack is empty{" "}
          </p>
        ) : (
          selectedStack.map((Tech) => (
            <div key={Tech.id}>
              <div>
                <div>
                  <img
                    src={Tech.icon}
                    alt={Tech.name}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <p>{Tech.name}</p>
                  <p>{Tech.category}</p>
                </div>
                <button onClick={() => onRemove(Tech.id)} className="">
                  x
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {!isEmpty && <button onClick={onRemoveAll}>Remove All</button>}
    </section>
  );
};

export default YourStack;
