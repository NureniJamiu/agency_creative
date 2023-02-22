import { TestimonialCard } from "./";
import TestimonialData from "../data/TestimonialData";
import SectionTitle from "./SectionTitle";
const Testimonials = () => {
  return (
    <div className="md:py-20 dark:bg-[#0d0d0d]">
      <SectionTitle
        sectionName="Testimonial"
        sectionDesc="People talk about us"
      />
      <div className="flex flex-col mx-5 md:mx-10 lg:mx-28 py-10 justify-center items-center md:flex-row gap-8">
        {TestimonialData.map((data, index) => (
          <TestimonialCard
            key={index}
            avatar={data.avatar}
            name={data.name}
            position={data.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
