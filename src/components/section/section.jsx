import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './section.css'

export default () => {
  return (
    <Router>
      <section className="section">
        <div className="section-container">
          <Div />
        </div>
      </section>
    </Router>
  )
}

const Div = () => {
  return (
    <div className="boxs">
      <div className="wrapper-boxs">
        <h3>Biznesingizni keyingi bosqichga olib chiqing</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique tempore soluta iure amet, magnam possimus vitae? Aperiam libero in odio accusantium, ipsum aspernatur delectus autem, eligendi suscipit consequatur quam voluptate fuga ex similique nam amet sit velit consequuntur. Sint iure quidem similique in explicabo officiis, voluptatem doloribus deleniti adipisci ducimus provident possimus nam modi quasi id dolorum omnis velit veniam consectetur pariatur est minima!</p>
        <Link className="link" to="/xizmatlar">Xizmatlar bilan tanishish</Link>
      </div>
      <div className="youtube">
        <iframe width="500" height="315" src="https://www.youtube.com/embed/YgsqC-DZpdM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}