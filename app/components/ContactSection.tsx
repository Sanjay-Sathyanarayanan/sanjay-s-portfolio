import TextAnimation from "@/app/components/ui/text-animation";
import Form from "./Form";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className=" flex flex-col gap-3 items-center justify-around px-12 lg:flex-row mt-24 mb-12">
        <TextAnimation />
        <Form/>
      </div>
    </section>
  );
};

export default ContactSection;
