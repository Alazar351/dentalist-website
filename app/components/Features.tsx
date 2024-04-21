import Image from "next/image";
import Safety from "../../public/assets/safety.svg";
import FullService from "../../public/assets/full-service.svg";
import NoJudge from "../../public/assets/no-judge.svg";
import Insurance from "../../public/assets/insurance.svg";

export default function Features() {
  return (
    <section
      id="Features"
      className="mx-6 mt-36 flex items-center justify-center rounded-3xl bg-[#DBDEFA] pb-36"
    >
      <div className="mx-auto pt-24 ">
        <p className="text-xs font-bold uppercase text-[#583FBC]">Features</p>
        <h2 className="mt-4 text-5xl font-bold ">
          Specialized care through experience
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="mt-32 grid justify-center gap-20 lg:grid-cols-2">
          <div className="flex max-w-[430px] items-center gap-6">
            <Image src={Safety} alt="safety image" width={96} height={96} />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Safety first</h3>
              <p className="text-gray-700 opacity-70">
                We prioritize safety with health checks and more
              </p>
            </div>
          </div>
          <div className="flex max-w-[430px] items-center gap-6">
            <Image
              src={Insurance}
              alt="Insurance image"
              width={96}
              height={96}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Insurance accepted</h3>
              <p className="text-gray-700 opacity-70">
                We’re in network with major insurers like Delta Dental, Aetna,
                and Cigna.
              </p>
            </div>
          </div>
          <div className="flex max-w-[430px] items-center gap-6">
            <Image
              src={FullService}
              alt="Full service image"
              width={96}
              height={96}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Full-service dentistry</h3>
              <p className="text-gray-700 opacity-70">
                Our clinic offer a full of dental service, from exams to
                implants and veneers.
              </p>
            </div>
          </div>
          <div className="flex max-w-[430px] items-center gap-6">
            <Image
              src={NoJudge}
              alt="No judgment image"
              width={96}
              height={96}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">No judgment ever</h3>
              <p className="text-gray-700 opacity-70">
                From floss bosses to sweet tooths, every mouth is welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
