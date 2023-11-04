import { sendForm } from "@emailjs/browser";
import { useState } from "react"

const Form = () => {
  // const initialValues = {
  //   name: '',
  //   email: '',
  //   message: ''
  // }

  // const [formValues, setFormValues] = useState(initialValues);
  // const [formSubmit, setFormSubmit] = useState(false);
  // const [alert, setAlert] = useState(false);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   });
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   const serviceID = "service_kzitiuc";
  //   const templateID = "template_x6q03hw";
  //   const apiKey = process.env.EMAILJS_PUBLIC_KEY;

  //   sendForm(serviceID, templateID, e.target, apiKey)
  //     .then((result) => {
  //       setAlert(false);
  //       setFormValues(initialValues);
  //       setFormSubmit(true);
  //     },
  //       (error) => {
  //         console.log(error.text)
  //       });
  // };

  return (
    <form
      id="myForm"
      className='space-y-2 text-black w-11/12'
    >
      {/* <!-- name --> */}
      <div className="form-group">
        <input
          type="name"
          name="name"
          className="form-control rounded-md w-full p-1"
          id="name"
          placeholder="Name"
        />
      </div>

      {/* <!-- email --> */}
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control rounded-md w-full p-1"
          id="email"
          placeholder="Email Address"
        />
      </div>

      {/* <!-- subject --> */}
      <div className="form-group">
        <input
          type="text"
          name="subject"
          className=" rounded-md p-1 xl:p-2 w-full"
          id="subject"
          placeholder="Subject"
        />
      </div>

      <div className="form-group">
        <textarea
          className="form-control rounded-md w-full p-1"
          id="message"
          name="message"
          rows={5}
          placeholder='Message'
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-textYellow p-1.5 rounded-md hover:text-white xl:p-2"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;