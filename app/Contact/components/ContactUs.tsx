import Appointment from "@/app/components/Appointment";

export default function ContactUs() {
  return (
    <section className="mx-6 mt-8 ">
      <div className="h-[600px] rounded-3xl bg-[#DBEFFA] pt-16 text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-5xl font-bold ">Contact Us</h2>
          <p className=" max-w-[550px] text-lg">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[-15%] max-w-[840px] rounded-3xl border bg-white px-[110px] py-16">
        <Appointment />
      </div>
    </section>
  );
}
