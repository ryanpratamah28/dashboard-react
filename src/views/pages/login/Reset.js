import React from "react";
import "src/views/pages/login/login.css";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import logoReset from "src/assets/brand/forgot-logo.png";

const Reset = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol
            md={8}
            style={{
              boxShadow: "0px 10px 25px 2px rgba(71, 133, 234, 0.5)",
              padding: "0",
            }}
          >
            <CCardGroup>
              <CCard className="p-4" style={{ height: "450px" }}>
                <CCardBody>
                  <CForm>
                    <h1>Reset Password</h1>
                    <p className="text-medium-emphasis">Enter Your Email</p>
                    <br />
                    <CInputGroup
                      className="mb-4"
                      style={{ margin: "30px 0 0 0" }}
                    >
                      <CFormInput
                        style={{ height: "50px" }}
                        placeholder="Email"
                        autoComplete="Email"
                      />
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                    </CInputGroup>
                    <p
                      style={{
                        opacity: "0.7",
                        color: "grey",
                        margin: "-20px 0 0 0",
                        textAlign: "center",
                      }}
                    >
                      verification will be sent to your email after sending
                    </p>
                    <CRow>
                      <CCol
                        xs={6}
                        style={{
                          margin: "35px 0 0 0",
                          padding: "0 0 0 25px",
                        }}
                      >
                        <CButton color="primary" className="px-4">
                          Send
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5"
                style={{ width: "44%", background: "#4785EA" }}
              >
                <CCardBody
                  className="text-center"
                  style={{ overflow: "hidden", padding: "0" }}
                >
                  <CAvatar
                    src={logoReset}
                    style={{ width: "650px", margin: "200px 0 0 -90px" }}
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
          <p
            style={{ textAlign: "center", opacity: "0.7", margin: "5px 0 0 0" }}
          >
            Don't Have an Account?, <a href="/register">Register</a>
          </p>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Reset;
