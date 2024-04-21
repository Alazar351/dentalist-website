import Image from "next/image";
import Pain from "../../../public/assets/service-pain.svg";
import Night from "../../../public/assets/service-night.svg";
import Sens from "../../../public/assets/service-sens.svg";
import Color from "../../../public/assets/service-color.svg";
import Gums from "../../../public/assets/service-gums.svg";

export default function Symptoms() {
  return (
    <section className="mx-6 mt-[200px] flex flex-col items-center justify-start gap-[104px] rounded-3xl  bg-[#FADBE2] py-[96px]  xl:mt-[280px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs font-bold uppercase text-[#583FBC]">Symptoms</p>
        <h2 className="mt-4 text-center text-5xl font-bold ">
          Specialized care through experience
        </h2>
        <p className="mt-6 text-center text-lg lg:max-w-[839px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="grid justify-center gap-[72px] lg:grid-cols-2">
        <div className="flex max-w-[430px] items-center gap-6">
          <Image src={Pain} alt="safety image" width={96} height={96} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Spontaneaous pain</h3>
            <p className="text-gray-700 opacity-70">
              Spontaneous pain even when you’re not eating or drinking
            </p>
          </div>
        </div>
        <div className="flex max-w-[430px] items-center gap-6">
          <Image src={Color} alt="safety image" width={96} height={96} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Discoloration of tooth</h3>
            <p className="text-gray-700 opacity-70">
              Darkening or discoloration of a tooth
            </p>
          </div>
        </div>
        <div className="flex max-w-[430px] items-center gap-6">
          <Image src={Night} alt="safety image" width={96} height={96} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Middle night pain</h3>
            <p className="text-gray-700 opacity-70">
              Pain that wakes you up in the middle of the night
            </p>
          </div>
        </div>
        <div className="flex max-w-[430px] items-center gap-6">
          <Image src={Gums} alt="safety image" width={96} height={96} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Tenderness in gums</h3>
            <p className="text-gray-700 opacity-70">
              From floss bosses to sweet tooths, every mouth is welcome.
            </p>
          </div>
        </div>
        <div className="flex max-w-[430px] items-center gap-6">
          <Image src={Sens} alt="safety image" width={96} height={96} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Extreme sensitivity</h3>
            <p className="text-gray-700 opacity-70">
              Extreme sensitivity to cold or heat when your’e drink or eat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
