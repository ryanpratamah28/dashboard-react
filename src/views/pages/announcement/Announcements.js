import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CContainer, CRow, CCol } from '@coreui/react'
import { CCard, CCardBody, CCardTitle, CCardText, CCardImage, CButton } from '@coreui/react'
import { cilPlus, cilTrash, cilPencil } from '@coreui/icons'
import logoProfil from 'src/assets/brand/pp-1.png'
import CIcon from '@coreui/icons-react'

function Announcements() {
  const navigate = useNavigate()
  const [announcements, setAnnouncements] = useState([])
  const accessToken = sessionStorage.getItem('accessToken')

  async function getAnnouncements() {
    try {
      let response = await axios.get('http://13.215.252.80:3000/announcement/show', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      setAnnouncements(response.data.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getAnnouncements() //eslint-disable-next-line
  }, [])

  async function handleDelete(announcement) {
    try {
      setAnnouncements(announcements.filter((a) => a.id !== announcement.id))
      await axios.delete(`${'http://13.215.252.80:3000/announcement'}/${announcement.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <CCard>
        <CCardBody>
          <div className="header-announcement p-0 mb-4">
            <CButton
              className="bg-success text-light"
              onClick={() => navigate('/announcement/create')}
            >
              <CIcon icon={cilPlus} className="me-2" />
              Create Announcement
            </CButton>
          </div>

          <CContainer className="p-0">
            <CRow>
              {announcements.map((announcement) => (
                <CCol xs={12} md={6} xxl={4} className="mt-2 mb-2">
                  <CCard key={announcement.id}>
                    <CCardBody>
                      <div className="d-flex mb-4">
                        <CCardImage src={logoProfil} style={{ width: '18%' }}></CCardImage>

                        <div className="d-flex flex-column mx-3">
                          <CCardTitle>Ryan Pratama Hidayat</CCardTitle>
                          <h6>20 - 04 - 2023</h6>
                        </div>
                      </div>

                      <CCardTitle className="mb-2">{announcement.title}</CCardTitle>
                      <CCardText className="mb-4">{announcement.description}</CCardText>

                      <div className="button-actions d-flex justify-content-end">
                        <CButton
                          onClick={() => navigate(`/announcement/${announcement.id}`)}
                          color="success"
                          variant="ghost"
                          className="bg-transparent text-success"
                        >
                          <CIcon icon={cilPencil} className="d-block m-auto" />
                        </CButton>

                        <CButton
                          onClick={() => handleDelete(announcement)}
                          color="danger"
                          variant="ghost"
                          className="bg-transparent text-danger"
                        >
                          <CIcon icon={cilTrash} className="d-block m-auto" />
                        </CButton>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Announcements
