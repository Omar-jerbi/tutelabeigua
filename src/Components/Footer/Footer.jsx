import React from 'react'
import './Footer.css'
import img77 from '../../Img/Component 8.png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col l12 s12">
            <img src={img77} alt="" />
            <h4>Gruppo 77</h4>
          </div>

          <div className="col l8 s12">
            <h6>Design:</h6>
            <p>Gabriella Bonetti,
              Luca Galli,<br />
              Gabriele Moggio </p>

            <h6>Development:</h6>
            <p>Omar Jerbi,
              Erik Ricci, <br />
              Gianluca Napolitano,
              Luca Insinna </p>
          </div>

          <div className="col l4 s12">
            <h5 id="keep-in-touch">Let's keep <br /> in touch</h5>
            <a className="grey-text text-lighten-3" href="#!">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a className="grey-text text-lighten-3" href="#!">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a className="grey-text text-lighten-3" href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>

          </div>
        </div>


      </div>
    </footer>



  )
}

export default Footer