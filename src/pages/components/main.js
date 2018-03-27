import React from 'react';
import brain from '../../img/brain.jpg';
import family from '../../img/family.jpeg';
import meditation from '../../img/meditation.jpg';
import { braingym_explanation, braingym_definition } from '../../general/text/webtext';


const Main = ()=>(
  <div className="main col-md-12">
      <div className="main__intro col-md-10 offset-md-1">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 carousel__img" src={ brain } alt="900x500" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>¿Y tu Que haces por tu cerebro?</h5>
                  <p>¿Conoces Brain Gym?</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 carousel__img" src={ family } alt="900x500" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Terapia tradicional y familiar</h5>
                  <p>Mejora tu vida personal y familiar con la terapia de Brain Gym</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
      <div className="row">
        <div className="braingym col-md-12">
            <div className="braingym__section col-md-10 offset-md-1 col-xs-12">
                <h2 className="braingym__section__title">¿Qué es Gimnasia Cerebral o Brain Gym? </h2>
                <p className="braingym__section__info braingym__section__info--border" dangerouslySetInnerHTML={braingym_definition}></p>
            </div>

            <div className="braingym__section col-md-10 offset-md-1 col-xs-12">
                <h2 className="braingym__section__title">El éxito de la gimnasia cerebral</h2>
                <p className="braingym__section__info braingym__section__info--picture " dangerouslySetInnerHTML={braingym_explanation}></p>
                <img src={meditation} alt="" className="braingym__section_picture"/>
            </div>
        </div>
      </div>
  </div>
)

export default Main;
