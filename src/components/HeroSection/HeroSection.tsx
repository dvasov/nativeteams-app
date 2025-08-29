import Search from "./Search";

export default function HeroSection() {
  return (
    <section className="section-padding--y">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="space-y-5">
          <h2 className="text-center text-primary">Native Teams Blog</h2>
          <h1 className="text-center text-5xl max-w-[30ch]">
            Resources, Tips and Tricks About the Modern Way of Working
          </h1>
        </div>
        <div className="flex items-center justify-center w-full md:w-[50vw] xl:w-[30vw]">
          <Search />
        </div>
      </div>
    </section>
  );
}
