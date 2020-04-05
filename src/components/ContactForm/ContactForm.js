import React, { Component } from "react"
import styled from "styled-components"
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
  /* padding-right: 35px; */
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

  toggleModal = e => {
    e.preventDefault()
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  sendMessage = e => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }))
    console.log("Message sent")
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
          initialValues={{ fullname: "", email: "", content: "" }}
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
            }
            if (values.fullname.length < 4) {
              errors.fullname = "Należy wpisać minimum 4 znaki"
            }
            if (!values.content) {
              errors.content = "Należy wypełnić pole"
            }
            if (values.content.length < 10) {
              errors.content = "Należy wpisać minimum 10 znaków"
            }

            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Label forHtml="fullname">Imie i nazwisko</Label>
              <StyledField type="text" name="fullname" />
              <StyledErrorMessage name="fullname" component="div" />

              <Label forHtml="email">Twój adres e-mail</Label>
              <StyledField type="email" name="email" />
              <StyledErrorMessage name="email" component="div" />

              <Label forHtml="content">Twój adres e-mail</Label>
              <StyledTextarea component="textarea" name="content" />
              <StyledErrorMessage name="content" component="div" />
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
