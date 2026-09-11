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
    <section className="h-fit rounded-[22px] border boorder-[#e5e7eb] bg-[#f7f7f7] p-4">
      <h3 className="text-[1.3rem] font-bold text-[#0f172a] ">Your Stack</h3>
      <p className="mt-1 text-[0.75rem] text-[#6b7280]">
        {selectedStack.length === 0
          ? "No technologies selected yet."
          : `${selectedStack.length} ${selectedStack.length <= 1 ? " Technology" : " Technologies"} selected.`}
      </p>

      <div className="mt-5 space-y-4">
        {isEmpty ? (
          <p className="text-center text-sm border border-dotted px-6 py-4 rounded-xl">
            {" "}
            Your stack is empty{" "}
          </p>
        ) : (
          selectedStack.map((Tech) => (
            <div
              key={Tech.id}
              className=" flex items-center justify-between gap-3 rounded-xl border border-[$e5e7eb] bg-white px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-[#e5e7eb]">
                  <img
                    src={Tech.icon}
                    alt={Tech.name}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827] ">
                    {Tech.name}
                  </p>
                  <p className="text-[.68rem] text-[#6b7280]">
                    {Tech.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(Tech.id)}
                className="text-lg text-red-500"
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
      {!isEmpty && (
        <button
          className="mt-15 mb-5 w-full border border-[#ED8C85] rounded-xl text-[#D82C20] px-4 py-2 text-sm font-semibold bg-white"
          onClick={onRemoveAll}
        >
          Remove All
        </button>
      )}
    </section>
  );
};

export default YourStack;
