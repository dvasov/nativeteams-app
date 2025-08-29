import Image from "next/image";

export default function Author() {
  return (
    <div className="bg-primary--cosmic-blue w-full bg-primary--ice-cold-blue relative px-10 py-15 lg:p-20 lg:pb-30 rounded-2xl">
      <div className="flex items-center justify-center">
        <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] relative overflow-hidden rounded-full mt-[-8rem] lg:mt-[-10rem] mb-10 shadow-[-5px_5px_0px_0_var(--primary-color)]">
          <Image
            className="absolute w-full h-full object-cover"
            src="/globals/jane-doe.jpg"
            alt="Author"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white mb-5">Jane Doe</h2>
          <h6 className="text-white mb-5 uppercase font-bold">Author</h6>
          <p className="text-white max-w-[50ch] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
