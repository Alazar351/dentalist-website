export default function Safety() {
  return (
    <section className=" mx-20 mt-52 flex flex-col items-center justify-center gap-24  ">
      <div className="mx-auto flex min-h-[500px] w-full flex-col items-center justify-start rounded-3xl bg-[#DBDEFA] pt-24 text-center lg:min-h-[700px]">
        <p className="text-xs font-bold uppercase text-[#583FBC]">Safety</p>
        <h2 className="mt-4 text-5xl font-bold ">We put safety first</h2>
        <p className="mt-6 text-lg lg:max-w-[525px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="mt-[-35%] px-[18%] md:mt-[-30%] lg:mt-[-25%]">
        <video
          width="320"
          height="240"
          controls
          preload="auto"
          className="w-full rounded-3xl"
        >
          <source src="/video/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
