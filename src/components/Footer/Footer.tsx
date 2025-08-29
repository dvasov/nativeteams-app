import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black bg-primary--cosmic-blue">
      <div className="grid grid-cols-1 lg:grid-cols-[.5fr_1fr] justify-between p-10 lg:p-20">
        <div className="col-span-1 mb-10 lg:mb-0">
          <Image
            src="logos/nativeteams-logo--white.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex gap-[6rem] text-primary--light-purple flex-wrap">
          <div className="flex flex-col gap-5">
            <h6 className="uppercase text-white font-bold">Platforms</h6>
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="javascript:;">Employer of Record</Link>
              </li>
              <li>
                <Link href="javascript:;">PEO Services</Link>
              </li>
              <li>
                <Link href="javascript:;">Company as a Service</Link>
              </li>
              <li>
                <Link href="javascript:;">Work Payments</Link>
              </li>
              <li>
                <Link href="javascript:;">Global Payroll</Link>
              </li>
              <li>
                <Link href="javascript:;">Tax Management</Link>
              </li>
              <li>
                <Link href="javascript:;">Expenses Management</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h6 className="uppercase text-white font-bold">Information</h6>
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="javascript:;">Legal Entity</Link>
              </li>
              <li>
                <Link href="javascript:;">Client Invoicing</Link>
              </li>
              <li>
                <Link href="javascript:;">Payment Requests</Link>
              </li>
              <li>
                <Link href="javascript:;">Global Mobility</Link>
              </li>
              <li>
                <Link href="javascript:;">Employees Benefits</Link>
              </li>
              <li>
                <Link href="javascript:;">For Startups</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h6 className="uppercase text-white font-bold">Company</h6>
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="javascript:;">About</Link>
              </li>
              <li>
                <Link href="javascript:;">Our Clients</Link>
              </li>
              <li>
                <Link href="javascript:;">Affiliates</Link>
              </li>
              <li>
                <Link href="javascript:;">Partnerships</Link>
              </li>
              <li>
                <Link href="">Charity</Link>
              </li>
              <li>
                <Link href="javascript:;">Data & Security</Link>
              </li>
              <li>
                <Link href="javascript:;">Book a demo</Link>
              </li>
              <li>
                <Link href="javascript:;">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[1px] border-[var(--light-grey)] py-10 px-10 lg:px-20">
        <div>
          <p className="text-sm text-primary--light-grey">
            © Native Teams Limited
          </p>
        </div>
        <ul className="flex gap-5 items-center justify-center">
          <li className="text-primary--light-grey">
            <Link href="javascript:;">Cookie Policy</Link>
          </li>
          <li className="text-primary--light-grey">
            <Link href="javascript:;">Cookie Policy</Link>
          </li>
          <li className="text-primary--light-grey">
            <Link href="javascript:;">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
