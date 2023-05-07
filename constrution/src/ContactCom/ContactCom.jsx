import React from 'react'
import './Contact.css'
const ContactCom = () => {
  return (
    <>
      <div className="c-section">
        <div className="container">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <input type="text" className="form-control" />
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
      </form>
        </div>
      </div>
    </>
  )
}

export default ContactCom
