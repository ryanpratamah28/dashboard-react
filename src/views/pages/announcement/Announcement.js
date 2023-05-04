import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CCol, CCard, CCardBody, CButton, CForm, CFormInput } from '@coreui/react'

function Annnouncement() {
  const navigate = useNavigate()
  const { id } = useParams()
  const accessToken = sessionStorage.getItem('accessToken')

  const [announcement, setAnnouncement] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    if (!id) return

    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`${'http://13.215.252.80:3000/announcement/show'}/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        setAnnouncement(response.data.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchAnnouncement()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      if (id === 'create') {
        axios.post(`http://13.215.252.80:3000/announcement/create`, announcement, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        return navigate('/announcement')
      } else {
        axios.patch(`${'http://13.215.252.80:3000/announcement/update'}/${id}`, announcement, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        return navigate('/announcement')
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleChange(e) {
    const announcementClone = { ...announcement }
    announcementClone[e.target.name] = e.target.value
    setAnnouncement(announcementClone)
  }

  return (
    <>
      <CCard>
        <CCardBody>
          <CForm className="row g-3">
            <CCol xs={12}>
              <CFormInput
                id="inputJudul"
                name="title"
                label="Judul"
                placeholder="Judul.."
                value={announcement.title}
                onChange={handleChange}
              />
            </CCol>
            <CCol xs={12}>
              <CFormInput
                id="inputDeskripsi"
                name="description"
                label="Deskripsi"
                placeholder="Deskripsi..."
                value={announcement.description}
                onChange={handleChange}
              />
            </CCol>
            <CCol xs={12}>
              <CButton type="submit" onClick={handleSubmit} className="text-white">
                {id === 'create' ? 'Submit' : 'Update'}
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Annnouncement
