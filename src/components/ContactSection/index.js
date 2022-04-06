import { Controller, useForm } from "react-hook-form";
import {
  Heading,
  InfoWrapper,
  ProjectRow,
  TopLine,
} from "../AllComponentsStyle";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { ContactButton, ContactForm, ContactWrapper } from "./ContactElements";
import * as emailjs from "emailjs-com";
import { useState } from "react";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_CODE,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset({ name: "", email: "", subject: "", message: "" });
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2500);
    } catch (e) {
      console.log(e);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactWrapper>
      <InfoWrapper id="contact">
        <ProjectRow>
          <TopLine>CONTACT</TopLine>
          <Heading>Contact with me</Heading>
        </ProjectRow>
        <ContactForm
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error variant="standard">
                <TextField
                  variant="outlined"
                  required
                  label="First Name"
                  fullWidth
                  margin={"normal"}
                  error={!!errors?.name}
                  {...register("name", {
                    required: true,
                    maxLength: 40,
                  })}
                  {...field}
                />
                {errors?.name?.type === "required" && (
                  <FormHelperText id="name">
                    This field is required
                  </FormHelperText>
                )}
                {errors?.name?.type === "maxLength" && (
                  <FormHelperText id="name">Too many characters</FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error variant="standard">
                <TextField
                  variant="outlined"
                  required
                  label="E-mail"
                  margin={"normal"}
                  fullWidth
                  error={!!errors?.email}
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  {...field}
                />
                {errors?.email?.type === "required" && (
                  <FormHelperText id="email">
                    This field is required
                  </FormHelperText>
                )}
                {errors?.email?.type === "pattern" && (
                  <FormHelperText id="email">
                    Incorrect e-mail address
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error variant="standard">
                <TextField
                  variant="outlined"
                  required
                  label="Subject"
                  fullWidth
                  margin={"normal"}
                  error={!!errors?.subject}
                  {...register("subject", {
                    required: true,
                  })}
                  {...field}
                />
                {errors?.subject?.type === "required" && (
                  <FormHelperText id="subject">
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error variant="standard">
                <TextField
                  variant="outlined"
                  required
                  rows={5}
                  multiline
                  label="Message"
                  margin={"normal"}
                  fullWidth
                  error={!!errors?.message}
                  {...register("message", {
                    required: true,
                  })}
                  {...field}
                />
                {errors?.message?.type === "required" && (
                  <FormHelperText id="email">
                    This field is required{" "}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          {showErrorAlert && (
            <Alert severity="error">Message was not sent :(</Alert>
          )}
          {showSuccessAlert && <Alert>Message was sent</Alert>}
          <ContactButton>
            <Button
              fullWidth
              variant="contained"
              className="submit-btn"
              type="submit"
              disabled={loading}
            >
              SEND
            </Button>
          </ContactButton>
        </ContactForm>
      </InfoWrapper>
    </ContactWrapper>
  );
};

export default ContactSection;
