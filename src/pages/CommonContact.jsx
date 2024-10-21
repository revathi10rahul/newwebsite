import React from 'react'
import './commoncss.css'
import { Helmet } from 'react-helmet';
function CommonContact() {
  return (
    <div>
       
        <Helmet>
        <title>Contact NacreSystem | Get in Touch for Software Solutions</title>
        <meta
          name="description"
          content="Contact NacreSystem for inquiries about software development, services, and solutions. Get support or find our office location here."
        />
        <meta property="og:title" content="Contact NacreSystem" />
        <meta property="og:description" content="Get in touch with NacreSystem for all your software needs." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="YOUR_WEBSITE_URL/contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="YOUR_WEBSITE_URL/contact" />
      </Helmet>
  
  
<div class="contact-form-wrapper d-flex justify-content-center ">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
    

    </div>
  )
}

export default CommonContact