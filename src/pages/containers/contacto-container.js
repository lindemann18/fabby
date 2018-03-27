import React, {Component} from 'react';
import Contacto from '../components/contacto';

class ContactoContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nombre:'holis',
      asunto:'',
      telefono:'',
      mensaje:''
    }
  }
  render(){
    return(
      <Contacto email={this.state}/>
    );
  }
}

export default ContactoContainer;
