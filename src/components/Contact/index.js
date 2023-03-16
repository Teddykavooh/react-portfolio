import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendMail = (e) => {
    e.preventDefault(e)

    emailjs
      .sendForm(
        //service_id
        'service_rezgqli',
        //template_id
        'template_3cs02e9',
        //form_ref
        refForm.current,
        //public_key
        'BZYclGPaLdrWFksnE'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendMail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Antony Kavoo,
          <br />
          Murang'a, Kenya.
          <br />
          <span>teddykavooh@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer url="https://title.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.505, -0.09]}>
              <Popup>Antony is currently here. Do reach out :)</Popup>
              {/* -0.7176245031091218, 37.142470003189025  =>Murang'a */}
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
