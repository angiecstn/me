import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
  render() {
    return (
      <div className="contact">

      	Angelica Costantini 
      	<br/>
      	<br/>

      	<a href="mailto:angelica.costantini@danielwellington.com?Subject=hi" target="_top">angelica.costantini@danielwellington.com</a>
      	<br/>
      	<br/>
      	
      	
      	+46 (0)760610078
      	<br/>
      	<br/>

      	<a href="mailto:angelicacostantini07@gmail.com?Subject=hi" target="_top">angelicacostantini07@gmail.com</a>
      	<br/>
      	<br/>

      	+39 (0)3343028064
      	<br/>
      	<br/>


      	<SocialIcon style={{margin: 2}} url="https://www.instagram.com/angelica.costantini/" />
      	<SocialIcon style={{margin: 2}} url="https://www.facebook.com/angelica.costantini.7" />

      </div>
    );
  }
}




export default Contact;
