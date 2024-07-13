import React from 'react'

const ContactForm = () => {
  return (
    <>
  <div className="form-container">
  <form
  action='https://getform.io/f/anlelmpa' 
  method='POST'
  >
    <h2>Talk to us</h2>
    <input type="email" id="email" name="email" placeholder="Work email*" required />
    <div className="name-fields">
      <div className="name-field">
        <input type="text" id="first-name" name="first-name" placeholder="First name" required />
      </div>
      <div className="name-field">
        <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
      </div>
    </div>
    <div className="terms">
      <input type="checkbox" id="terms" name="terms" required />
      <label htmlFor="terms">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
    </div>
    <button type="submit">Contact Us</button>
  </form>
</div>

    </>
  )
}

export default ContactForm
