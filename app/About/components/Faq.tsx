import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className=" mx-auto mt-[200px] flex flex-col items-center justify-center px-10 pb-[200px]">
      <div className="mb-[60px]">
        <p className="text-center text-xs font-bold uppercase text-[#583FBC]">
          Faq
        </p>
        <h2 className="mt-4 text-center text-5xl font-bold ">
          Frequently asked questions
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="border-t-4 border-t-[#583FBC]"
        id="Faq"
      >
        <AccordionItem
          value="item-1"
          className="accordion-gradient border-b-[#96A0B5] py-4 pl-6"
        >
          <AccordionTrigger className="flex gap-20  text-2xl font-bold">
            Is there any cost or obligation if l request an offer?
          </AccordionTrigger>
          <AccordionContent className="max-w-[651px] text-2xl  text-[#96A0B5]">
            I see Coint being a long-term part of my business structure. Not
            just for this business, but also our future endeavors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="accordion-gradient border-b-[#96A0B5] py-4 pl-6"
        >
          <AccordionTrigger className="flex gap-20  text-2xl font-bold">
            What kind of construction services will be purchased?
          </AccordionTrigger>
          <AccordionContent className="max-w-[651px] text-2xl text-[#96A0B5]">
            I see Coint being a long-term part of my business structure. Not
            just for this business, but also our future endeavors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="accordion-gradient border-b-[#96A0B5] py-4 pl-6"
        >
          <AccordionTrigger className="flex gap-20  text-2xl font-bold">
            How Do I Print My Auto Insurance ID Card?
          </AccordionTrigger>
          <AccordionContent className="max-w-[651px] text-2xl text-[#96A0B5]">
            I see Coint being a long-term part of my business structure. Not
            just for this business, but also our future endeavors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="accordion-gradient border-b-[#96A0B5] py-4 pl-6"
        >
          <AccordionTrigger className="flex gap-20  text-2xl font-bold">
            How Do I Know What Deductible Applies To My Policy?
          </AccordionTrigger>
          <AccordionContent className="max-w-[651px] text-2xl text-[#96A0B5]">
            I see Coint being a long-term part of my business structure. Not
            just for this business, but also our future endeavors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="accordion-gradient border-b-[#96A0B5] py-4 pl-6"
        >
          <AccordionTrigger className="flex gap-20  text-2xl font-bold">
            If I Am Moving, Will I Need To Request A New Agent?
          </AccordionTrigger>
          <AccordionContent className="max-w-[651px] text-2xl text-[#96A0B5]">
            I see Coint being a long-term part of my business structure. Not
            just for this business, but also our future endeavors.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
