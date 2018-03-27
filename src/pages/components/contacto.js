import React from 'react';
import { contacto_info } from '../../general/text/webtext';

const Contacto = ({nombre,asunto,telefono,mensaje})=>(
  <div className="contacto col-md-10 offset-md-1">
      <div className="contacto__title">
        <h4>Contacto</h4>
      </div>

      <div className="contacto__form col-md-8 offset-md-2">
        <span className="contacto__form_info" dangerouslySetInnerHTML={contacto_info}></span>
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="" className="contacto__label">Nombre</label>
            <input type="text" className="form-control" value={nombre}/>
          </div>
          <div className="form-group">
            <label htmlFor="" className="contacto__label">Teléfono</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="" className="contacto__label">Asunto</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="" className="contacto__label"></label>
            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
          </div>
          <button className="btn btn-primary btn-block">Enviar</button>
        </form>
      </div>
  </div>
)

export default Contacto;
