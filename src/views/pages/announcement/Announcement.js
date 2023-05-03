import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CCol, CCard, CCardBody, CButton, CForm, CFormInput } from '@coreui/react'

function Annnouncement() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [announcement, setAnnouncement] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    if (!id) return

    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`http://13.215.252.80:3000/announcement/show/${id}`)
        setAnnouncement(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchAnnouncement()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      if (id === 'new') {
        axios.post(`http://13.215.252.80:3000/announcement/create`, announcement)
        return navigate('/announcement')
      } else {
        axios.put(`http://13.215.252.80:3000/announcement/update/${id}`, announcement)
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
                label="Judul"
                placeholder="Judul.."
                value={announcement.title}
                onChange={handleChange}
              />
            </CCol>
            <CCol xs={12}>
              <CFormInput
                id="inputDeskripsi"
                label="Deskripsi"
                placeholder="Deskripsi..."
                value={announcement.description}
                onChange={handleChange}
              />
            </CCol>
            <CCol xs={12}>
              <CButton type="submit" onClick={handleSubmit} className="text-white">
                {id === 'new' ? 'Submit' : 'Update'}
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Annnouncement
