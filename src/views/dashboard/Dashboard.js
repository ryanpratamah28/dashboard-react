import React from 'react'

import { CCard, CCardBody, CContainer } from '@coreui/react'
import VectorImg from '../../assets/images/avatars/Vector Employee.png'

var nameGet = sessionStorage.getItem('name')
var name = nameGet.replace(/["]/g, '')

const Dashboard = () => {
  return (
    <>
      <CCard
        className="mb-4"
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', borderRadius: '20px' }}
      >
        <CCardBody
          style={{
            paddingTop: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingBottom: '15px',
          }}
        >
          <CContainer className="d-flex p-3">
            <div className="d-flex justify-content-center align-items-center vector-img">
              <img src={VectorImg} alt="" width="350"></img>
            </div>

            <div className="content p-4">
              <div className="title mb-4 text-primary">
                <h3 style={{ fontWeight: '500' }}>Hello, {name}</h3>
                <h3 style={{ fontWeight: '500' }}>Selamat Datang di Aplikasi HR KSN</h3>
              </div>

              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id.
                  Scelerisque purus semper eget duis at tellus. Quam lacus suspendisse faucibus
                  interdum posuere. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue
                  eget arcu dictum varius duis at.
                  <br />
                  <br />
                  Ullamcorper dignissim cras tincidunt lobortis feugiat. Mollis nunc sed id semper.
                  Diam quis enim lobortis scelerisque fermentum. Feugiat nibh sed pulvinar proin
                  gravida hendrerit lectus a. Massa tempor nec feugiat nisl pretium fusce. Amet
                  justo donec enim diam vulputate ut pharetra. Bibendum at varius vel pharetra vel
                  turpis nunc eget. Amet facilisis magna etiam tempor.
                </p>
              </div>
            </div>
          </CContainer>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
