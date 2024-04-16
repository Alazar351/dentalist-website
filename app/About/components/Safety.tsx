export default function Safety() {
  return (
    <section className=" mx-20 mt-36 flex flex-col items-center justify-center gap-24 rounded-3xl bg-[#DBDEFA]">
      <div className="mx-auto max-h-[700px] min-h-[300px] pt-24 text-center ">
        <p className="text-xs font-bold uppercase text-[#583FBC]">Safety</p>
        <h2 className="mt-4 text-5xl font-bold ">We put safety first</h2>
        <p className="mt-6 text-lg lg:max-w-[525px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <video
        width="320"
        height="240"
        controls
        preload="auto"
        className="mb-[-15%] w-full px-[18%]"
      >
        <source src="/video/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
