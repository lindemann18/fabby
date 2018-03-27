import React from 'react';
import Fabby from '../../img/fabby.jpg';
import { aboutme_description } from '../../general/text/webtext';

const AboutMe = ()=> (
    <div className="aboutme col-md-12">
        <h1 className="aboutme__name">Dra. Faviola Sanchez</h1>
        <div className="aboutme__picture_container">
          <img src={ Fabby } className="rounded-circle aboutme__picture" alt="dra fabiola sanchez" />
        </div>
        <p className="aboutme__title">PROFESORA, INSTITUTO DE DESARROLLO HUMANO E
          INVESTIGACION IDHEI</p>

        <p className="aboutme__description" dangerouslySetInnerHTML={aboutme_description}>
        </p>

        <div className="experience col-md-12">
            <div className="experience__job --first col-md-5 col-xs-12">
                  <h3 className="experience__job_title">Tutora</h3>
                  <span className="experience__job_place">Universidad Autónoma De Sinaloa</span>
                  <span className="experience__date">2010 - A la fecha</span>
                  <p className="experience__job_description">
                    APOYO A ALUMNOS Y DOCENTES EN DIVERSAS NECESIDADES EDUCATIVAS
                    ENTRENAMIENTO A DOCENTES
                  </p>
            </div>

            <div className="experience__job col-md-5 col-xs-12">
                  <h3 className="experience__job_title">Profesora</h3>
                  <span className="experience__job_place">Instituto De Desarrollo Humano E Investigación IDHEI</span>
                  <span className="experience__date">2008 - A la fecha</span>
                  <p className="experience__job_description">
                    FORMADORA DE VARIAS GENERACIONES A NIVEL MAESTRIA Y DOCTORADO EN DESARROLLO HUMANO
                  </p>
            </div>

            <div className="experience__job --first col-md-5 col-xs-12">
                  <h3 className="experience__job_title">Profesora</h3>
                  <span className="experience__job_place">Instituto Humanista DE Sinaloa</span>
                  <span className="experience__date">2004 - 2006</span>
                  <p className="experience__job_description">
                    FORMADORA DE VARIAS GENERACIONES A NIVEL MAESTRIA Y DOCTORADO EN DESARROLLO HUMANO
                  </p>
            </div>

            <div className="experience__job col-md-5 col-xs-12">
                  <h3 className="experience__job_title">Maestra</h3>
                  <span className="experience__job_place">Facultad DE Contaduría Y Administración, UAS</span>
                  <span className="experience__date">1985 - A la fecha</span>
                  <p className="experience__job_description">
                    COAUTORA DEL PLAN DE ESTUDIOS V, LIC. EN CONTADURIA PUBLICA, ADMINISTRACCION DE EMPRESAS Y NEGOCIOS Y COMERCIO INTERNACIONALES.
                    AUTORA DE LOS PROGRAMAS EN LAS MATERIAS DE DESARROLLO HUMANO, DESARROLLO DE HABILIDADES CREATIVAS, Y ESTRATEGIAS DE APRENDIZAJE
                  </p>
            </div>
        </div>
    </div>
)

export default AboutMe;
