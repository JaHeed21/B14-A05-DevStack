import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <main className="flex justify-between mx-auto w-full flex-col lg:flex-row px-12 py-12 max-w-400 ">
      <section className="w-full mx-auto mt-16 lg:w-[50%] ">
        <h1 className="text-[4rem] font-black leading-[1.2] font-inter">
          Build Your Idea{" "}
          <span className="block bg-linear-to-r from-[#ff7a18] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="max-w-140 mt-7 text-[1.2rem] text-[#6b7280] font-jakarta">
          Explore Frontend, Backend, database, and tooling options, compare them
          side by sidem and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 mt-7 items-center ">
          <button className="rounded-xl border-0 bg-linear-to-r from-[#ff8a5b] to-[#d72c8d] text-white px-7 py-2 text-[1.05rem]">
            Explore Technologies
          </button>
          <button className="border border-[#d1d5db] rounded-xl text-[#374151] hover:bg-[#f3f4f6] px-12 py-2 text-[1.05rem]">
            Learn More
          </button>
        </div>
      </section>
      <section className="flex w-full lg:w-[50%] md:w-[48%] justify-center items-center">
        <img
          src={bannerStack}
          alt="Banner Stack"
          className="w-full h-[450px] object-cover"
        />
      </section>
    </main>
  );
};

export default Banner;
