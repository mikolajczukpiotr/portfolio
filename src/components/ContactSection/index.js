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
        "servicedf_yo27b0h",
        "template_u4tfnb6",
        templateParams,
        "user_ynj1ckEe2VFLeylOvGSd2"
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
          <TopLine>KONTAKT</TopLine>
          <Heading>Skontaktuj sie ze mną</Heading>
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
                  label="Imię"
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
                    To pole jest wymagane
                  </FormHelperText>
                )}
                {errors?.name?.type === "maxLength" && (
                  <FormHelperText id="name">
                    Za duża ilość znaków
                  </FormHelperText>
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
                    To pole jest wymagane
                  </FormHelperText>
                )}
                {errors?.email?.type === "pattern" && (
                  <FormHelperText id="email">
                    Nie prawidłowy adres e-mail
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
                  label="Temat"
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
                    To pole jest wymagane
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
                  label="Wiadomość"
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
                    To pole jest wymagane
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          {showErrorAlert && (
            <Alert severity="error">Wiadomość nie została wysłana :(</Alert>
          )}
          {showSuccessAlert && <Alert>Wiadomość została wysłana</Alert>}
          <ContactButton>
            <Button
              fullWidth
              variant="contained"
              className="submit-btn"
              type="submit"
              disabled={loading}
            >
              Wyślij
            </Button>
          </ContactButton>
        </ContactForm>
      </InfoWrapper>
    </ContactWrapper>
  );
};

export default ContactSection;
