import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-primary--ice-cold-blue relative">
      <Image
        className="absolute top-0 left-0 hidden lg:block"
        src="/globals/nativeteams-big-light.png"
        alt="Banner Image"
        width={500}
        height={500}
      />
      <div className="px-10 section-padding--y">
        <div className="flex flex-col items-center justify-center">
          <h2 className="h1 text-center text-3xl mb-10">
            Explore Native Teams today
          </h2>
          <p className="text-center mb-10 max-w-[65ch]">
            Unlock the full potential of your teams and elevate your business or
            personal growth with Native Teams. Explore our platform today and
            start your journey towards success.
          </p>
          <button className="hidden lg:flex btn bg-primary rounded-full border-none px-7 py-6 text-[16px] shadow-none">
            Learn more
          </button>
        </div>
      </div>
      <div className="absolute right-[1rem] top-[1rem] lg:right-[20rem] lg:top-[3rem]">
        <Image
          className=""
          src="/globals/lines.svg"
          alt="Banner Image"
          width={105}
          height={105}
        />
      </div>
    </section>
  );
}
