import Image from "next/image";
import bg from "../../../../public/background/contact.jpg";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      {/* this home background img */}
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 -left-24  w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center  space-y-6 w-full sm:w-3/4">
          <h1 className=" font-semibold text-center text-4xl capitalize text-cyan-400">
            Contact Me!
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            If you have any questions, inquiries, or just want to connect, feel
            free to reach out. I'm always open to new opportunities and
            collaborations. Please fill out the form below, and I'll get back to
            you as soon as possible!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}