import Search from "./Search";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-padding--y">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="space-y-5 relative">
          <div className="absolute top-0 left-[-4rem] z-[0]">
            <Image
              src="/globals/heart.svg"
              alt="Native Teams Blog"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute left-[2.5rem] bottom-[-5rem] z-[0] opacity-[.6]">
            <Image
              src="/globals/lines.svg"
              alt="Native Teams Blog"
              width={75}
              height={75}
            />
          </div>
          <div className="absolute right-[1.5rem] top-[-1.5rem] z-[0] opacity-[.6]">
            <Image
              src="/globals/lines.svg"
              alt="Native Teams Blog"
              width={50}
              height={50}
            />
          </div>
          <div className="space-y-5 relative z-[3]">
            <h2 className="text-center text-primary">Native Teams Blog</h2>
            <h1 className="text-center text-5xl max-w-[30ch]">
              Resources, Tips and Tricks About the Modern Way of Working
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[50vw] xl:w-[30vw]">
          <Search />
        </div>
      </div>
    </section>
  );
}
