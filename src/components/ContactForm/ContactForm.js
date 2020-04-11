import React, { Component } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from "formik"

import Heading from "../Heading/Heading"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"

const StyledWrapper = styled.div`
  position: relative;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`
const StyledField = styled(Field)`
  width: 100%;
  padding: 15px 25px;
  color: ${({ theme }) => theme.grey100};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.dark2};
  border: none;
  margin: 10px 0;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`

const Label = styled.label`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey300};
`

const StyledTextarea = styled(StyledField)`
  resize: none;
  min-height: 250px;
  font-family: inherit;
`
const StyledErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 10px;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

class ContactForm extends Component {
  state = {
    isModalOpen: false,
  }

  toggleModal = values => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  sendMessage = e => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = values => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then(() => navigate("/success"))
      .catch(error => alert(error))
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <StyledWrapper>
        {isModalOpen && (
          <Modal
            sendMessage={this.sendMessage}
            toggleModal={this.toggleModal}
          />
        )}
        <Heading>Formularz kontaktowy</Heading>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            content: "",
            policy: "",
          }}
          autoComplete="off"
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "Należy wypełnić pole"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Nieprawidłowy adres e-mail"
            }
            if (!values.fullname) {
              errors.fullname = "Należy wypełnić pole"
            } else if (values.fullname.length < 4) {
              errors.fullname = "Należy wpisać minimum 4 znaki"
            }
            if (!values.content) {
              errors.content = "Należy wypełnić pole"
            } else if (values.content.length < 10) {
              errors.content = "Należy wpisać minimum 10 znaków"
            }
            if (!values.policy) {
              errors.policy = "Należy zaznaczyć pole"
            }

            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.handleSubmit({
              fullname: values.fullname,
              email: values.email,
              content: values.content,
            })
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <Label forHtml="fullname">Imię i nazwisko</Label>
              <StyledField type="text" name="fullname" required />
              <StyledErrorMessage name="fullname" component="div" />
              <Label forHtml="email">Twój adres e-mail</Label>
              <StyledField type="email" name="email" required />
              <StyledErrorMessage name="email" component="div" />
              <Label forHtml="content">Treść wiadomości</Label>
              <StyledTextarea component="textarea" name="content" required />
              <StyledErrorMessage name="content" component="div" />
              <Label forHtml="policy">
                <Field type="checkbox" name="policy" /> Wyrażam zgodę na
                przetwarzanie danych osobowych przez firmę 2LB w celu udzielenia
                odpowiedzi na zapytanie.
              </Label>
              <StyledErrorMessage name="policy" component="div" />
              <StyledButton type="submit" disabled={isSubmitting}>
                Wyślij
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    )
  }
}

export default ContactForm
