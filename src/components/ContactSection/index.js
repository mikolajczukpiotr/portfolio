import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Heading, InfoWrapper, TopLine } from "../AllComponentsStyle";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_yo27b0h",
        "template_u4tfnb6",
        templateParams,
        "user_ynj1ckEe2VFLeylOvGSd2"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <InfoWrapper id="contact">
      <TopLine>KONTAKT</TopLine>
      <Heading>Skontaktuj sie ze mną</Heading>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row formRow">
          <div className="col-6">
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              className="form-control formInput"
              placeholder="Name"
            ></input>
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>
          <div className="col-6">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control formInput"
              placeholder="Email address"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <input
              type="text"
              name="subject"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please enter a subject",
                },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              className="form-control formInput"
              placeholder="Subject"
            ></input>
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <textarea
              rows={3}
              name="message"
              {...register("message", {
                required: true,
              })}
              className="form-control formInput"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </InfoWrapper>
  );
};

export default ContactSection;
