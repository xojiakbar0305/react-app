import React, {useState} from 'react'
import Modal from 'react-modal'
import './xizmatlar.css'

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="container-services">
      <h1 className="servicesTitle">Xizmatlar</h1>
      <div className="services-box-wrapper">
        <div className="services-boxs">
          <img src={require('../imgs/quyon.jpg')} alt="rasm" />
          <div className="services-box-text">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam minima eum fuga nisi odit voluptate sequi fugit delectus, adipisci asperiores voluptas tenetur praesentium ut laudantium aperiam ad ex exercitationem esse autem.</p>
            <button onClick={() => setModalIsOpen(true)} className="services-button-more">More</button>
          </div>
        </div>
        <div className="services-boxs">
          <img src={require('../imgs/quyon.jpg')} alt="rasm" />
          <div className="services-box-text">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam minima eum fuga nisi odit voluptate sequi fugit delectus, adipisci asperiores voluptas tenetur praesentium ut laudantium aperiam ad ex exercitationem esse autem.</p>
            <button className="services-button-more">More</button>
          </div>
        </div>
        <div className="services-boxs">
          <img src={require('../imgs/quyon.jpg')} alt="rasm" />
          <div className="services-box-text">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam minima eum fuga nisi odit voluptate sequi fugit delectus, adipisci asperiores voluptas tenetur praesentium ut laudantium aperiam ad ex exercitationem esse autem.</p>
            <button className="services-button-more">More</button>
          </div>
        </div>
        <div className="services-boxs">
          <img src={require('../imgs/quyon.jpg')} alt="rasm" />
          <div className="services-box-text">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam minima eum fuga nisi odit voluptate sequi fugit delectus, adipisci asperiores voluptas tenetur praesentium ut laudantium aperiam ad ex exercitationem esse autem.</p>
            <button className="services-button-more">More</button>
          </div>
        </div>
      </div>
      <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={() => setModalIsOpen(false)}
      style={
        {
          overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.8)'
          },
          content: {
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '450px',
            color: 'orange'
          }
        }
      }>
        <h2>modal title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ratione.</p>
        <button onClick={() => setModalIsOpen(false)}>close</button>
      </Modal>
    </div>
  )
}