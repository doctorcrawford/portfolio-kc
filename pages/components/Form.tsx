import { sendForm } from "@emailjs/browser";
import { Input } from "postcss";
import { useState, Dispatch, SetStateAction } from "react"

interface FormProps {
  formSubmit: boolean,
  setFormSubmit: Dispatch<SetStateAction<boolean>>
}

const Form = ({ formSubmit, setFormSubmit }: FormProps) => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [alert, setAlert] = useState(false);

  type InputText = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

  const handleInputChange = (e: InputText) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const target = e.target as HTMLFormElement

    if (serviceID && templateID && apiKey) {
      sendForm(serviceID, templateID, target, apiKey)
        .then((result) => {
          setAlert(false);
          setFormValues(initialValues);
          setFormSubmit(true);
        },
          (error) => {
            console.log(error.text)
          });
    }
  };

  const validateFormFields = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.name === '' || formValues.email === '' || formValues.message === '') {
      setAlert(true)
    } else {
      sendEmail(e);
    }
  };

  return (
    <>
      {alert ?
        <p className="text-red-500">
          *Please complete all form fields before submitting
        </p> :
        null
      }
      {formSubmit ? null :
        <form
          id='contactForm'
          method='POST'
          onSubmit={validateFormFields}
          className='space-y-2 text-black w-11/12'
        >
          <input
            type="text"
            name="name"
            className="form-control rounded-md w-full p-1"
            id="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            className="form-control rounded-md w-full p-1"
            id="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="subject"
            className=" rounded-md p-1 xl:p-2 w-full"
            id="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={handleInputChange}
          />

          <textarea
            className="form-control rounded-md w-full p-1"
            id="message"
            name="message"
            rows={5}
            placeholder='Message'
            value={formValues.message}
            onChange={handleInputChange}
          ></textarea>

          <button
            type="submit"
            className="bg-textYellow p-1.5 rounded-md hover:text-white xl:p-2"
          >
            Submit
          </button>
        </form>
      }
    </>
  );
}

export default Form;