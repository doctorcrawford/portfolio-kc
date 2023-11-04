import { TbTriangleInverted } from 'react-icons/tb'
import { init, sendForm } from '@emailjs/browser';
import Form from './Form';


const Contact = () => {

  // const form = document.getElementById("myForm") as HTMLFormElement;
  // form?.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const apiKey = process.env.EMAILJS_PUBLIC_KEY;
  //   const serviceID = "service_kzitiuc";
  //   const templateID = "template_x6q03hw";
  //   console.log("apikey ", apiKey)

  //   if (apiKey) {
  //     init(apiKey);
  //   }

  //   sendForm(serviceID, templateID, form, 'PtzET5wjXWsR6PJPe').then(response => {
  //     console.log("success!", response.status, response.text);
  //     alert("success!");
  //   },
  //     error => {
  //       console.log("failed...", error);
  //       alert("failed...");
  //     }
  //   );
  // });

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
      <div className="mx-auto w-10/12 max-w-contentContainer xl:flex flex-col items-center rounded-lg bg-[#112240] p-7 gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <h2 className="text-xl font-titleFont font-semibold tracking-wide py-1 pt-0 group-hover:text-textYellow text-center sm:pb-2 md:pb-3">
          Contact Me
        </h2>
        {/* <!-- contact form --> */}
        <Form />
      </div>

      {/* Previous simple method for emailing */}
      {/* <a href="mailto:noor.kcraw217@gmail.com">
        <button className="w-40 h-14 border border-textYellow mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a> */}

    </section>
  );
};

export default Contact;