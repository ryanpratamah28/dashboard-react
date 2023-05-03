/* eslint-disable react/no-unescaped-entities */
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
import { cilLockLocked } from "@coreui/icons";
import logoConfirm from "src/assets/brand/confimed-logo.png";

const Confirm = () => {
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
                    <h1>Confirm</h1>
                    <p className="text-medium-emphasis">
                      Enter Your Password Account
                    </p>
                    <br />
                    <CInputGroup
                      className="mb-3"
                      style={{ margin: "15px 0 0 0" }}
                    >
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        style={{ height: "45px" }}
                      />
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="password"
                        placeholder=" Confirm Your Password"
                        autoComplete="current-password"
                        style={{ height: "45px" }}
                      />
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow>
                      <CCol
                        xs={6}
                        style={{
                          margin: "35px 0 0 0",
                          padding: "0 0 0 25px",
                        }}
                      >
                        <CButton color="primary" className="px-4 text-light">
                          Login
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
                    src={logoConfirm}
                    style={{ width: "550px", margin: "200px -50px 0 20px" }}
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

export default Confirm;
