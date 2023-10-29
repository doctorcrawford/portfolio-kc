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
      {/* <div className="w-80 h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group"> */}
      <div className="mx-auto py-10 xl:py-32 flex flex-col items-center justify-center rounded-lg bg-[#112240] p-7 gap-6 hover:-translate-y-2 transition-transform duration-300 group w-10/12 w-max-500">
        <h1 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textYellow">
          Contact Me
        </h1>
        {/* <!-- contact form --> */}
        <form id="myForm">
          {/* <!-- name --> */}
          <div className="form-group">
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>

          {/* <!-- email --> */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
            />
          </div>

          {/* <!-- subject --> */}
          <div className="form-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              placeholder='Message'
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
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