import React, { useState } from 'react'
import { Axios, db } from  '../../firebase/firebaseConfig'
import './contact.css'
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '10px',
    opacity               :'1',
    border                :'none',
    width                 :'300px'
  },
  overlay: {
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [confirmation, setConfirmation] = useState(false)

  function closeModal(){
    setConfirmation(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    const root = document.getElementById('root')

  }

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    setConfirmation(true)
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-elin-portfolio.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <div className="formRow"> 
        <input
        className="formname"
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
        className="formemail"
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        </div>
         <input
          type="subject"
          name="subject"
          placeholder="Subject"
          onChange={updateInput}
          value={formData.subject || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button className="submitButton"type="submit">Submit</button>
      </form>

      <Modal
          isOpen={confirmation}
          onRequestClose={closeModal}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
              <div className="closeRow">
              <button onClick={closeModal} className="closeModalBtn">
              <i class="fas fa-times closeModal"></i>
              </button>
              </div>
              <div className="modalWrapper">
              <i class="far fa-check-circle"></i>
              <div className="confoHeadline">Thank you for your message!</div>
              
              <div className='confoText'>I will return to you as possible</div>
          </div>
      </Modal>
    </>
  )
}

export default ContactForm