import { TbTriangleInverted } from 'react-icons/tb'

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textYellow font-semibold flex items-center tracking-wide">
        <TbTriangleInverted /><TbTriangleInverted />
        <TbTriangleInverted /><TbTriangleInverted />
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Always looking for new challenges to tackle that allow me to apply my skills and experience while continuing to learn and grow. Or just say hello!
      </p>
      <a href="mailto:noor.kcraw217@gmail.com">
        <button className="w-40 h-14 border border-textYellow mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;