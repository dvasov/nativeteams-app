import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="w-full bg-primary--midnight-blue relative text-white border-t-[5px] border-[var(--primary-color)]">
      <div className="px-10 section-padding--y">
        <div className="flex flex-col items-center justify-center">
          <h2 className="h1 text-center text-3xl mb-10">
            Never miss out our <span className="text-primary">latest news</span>
          </h2>
          <div className="flex items-center justify-center w-full md:w-[50vw] xl:w-[30vw] mb-10">
            <div className="relative flex items-center justify-center w-full rounded-full bg-primary--light-grey text-primary--light-grey">
              <input
                placeholder="Email address"
                className="w-full border-none px-8 rounded-tl-full rounded-bl-full py-3 bg-primary--light-grey focus-visible:outline-none"
                type="search"
              />
              <button className="h-full btn bg-primary rounded-full border-none px-[3rem] py-3 text-white shadow-none">
                Search
              </button>
            </div>
          </div>
          <p className="text-center mb-5 max-w-[65ch]">
            By submitting this form, you will receive emails from Native Teams.
            For details, view our Privacy Policy.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[5rem] right-[10rem] hidden lg:block">
        <Image
          className=""
          src="/globals/lines.svg"
          alt="Banner Image"
          width={205}
          height={205}
        />
      </div>
    </section>
  );
}
