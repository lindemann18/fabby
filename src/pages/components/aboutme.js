import React from 'react';

const AboutMe = ()=> (
    <div className="aboutme col-md-12">
        <h1 className="aboutme__name">Dra. Faviola Sanchez</h1>
        <p className="aboutme__title">PROFESORA, INSTITUTO DE DESARROLLO HUMANO E
          INVESTIGACION IDHEI</p>

        <p className="aboutme__description">
            Soy profesora universitaria por mas de 25 años, tengo Maestria y doctorado en
            Psicoterapia de linea existencial, me dedico a capacitar tanto a docentes como
            a personal en las empresas. Trabajo desarrollo de habilidades personales
            y mejoramiento de la eficiencia personal.Asesoria especializada en problemas
            de aprendizaje y consulta psicoterapeutica privada.Especialista en Brain Gym(R)
        </p>

        <div className="experience col-md-12">
            <div className="experience__job col-md-4">
                  <h3 className="experience__job_title">Tutora</h3>
                  <span className="experience__job_place">Universidad Autónoma De Sinaloa</span>
                  <span className="date">2010 - A la fecha</span>
                  <p clasName="experience__job_descriptoin">
                    APOYO A ALUMNOS Y DOCENTES EN DIVERSAS NECESIDADES EDUCATIVAS
                    ENTRENAMIENTO A DOCENTES
                  </p>
            </div>
        </div>
    </div>
)

export default AboutMe;
