import React from 'react'
import {Link} from 'react-router-dom'
import PopUpModal from './PopUpModal'
import validator from 'validator';
import {registerPost} from '../services/api'
class Register extends React.Component {
   
  state = {
    email: '',
    password: '',
    repassword: '',
    errorCompenent: null,
    showErrorModal: false
  }



  onRegisterBtnClick = (e) => {
      e.preventDefault()
      console.log(this.state);
      if (this.state.email.trim() === '' || this.state.password === '' || this.state.password !== this.state.repassword || !validator.isEmail(this.state.email.trim())){
        const errorsElement = (
        
            <ul>
                {this.state.email.trim() === '' ? <li>Email should not be empty</li> : null}
                {!validator.isEmail(this.state.email.trim())  ? <li>you have to enter a valid email</li> : null}
                {this.state.password === '' ? <li>password should not be empty</li> : null}
                {this.state.password !== this.state.repassword ? <li>password is not matching the repassword</li> : null}
            </ul>
            
        )
        
        this.setState({
            errorCompenent: errorsElement,
            showErrorModal: true
        })
      } else {
        registerPost(this.state.email, this.state.password, this.state.repassword).then(data => {
          console.log(data);
        }).catch(error => {
          console.log(error);
        })
      }
      
  }

  closeModal = () => {
      console.log('I am called from the child');
      this.setState({
        showErrorModal: false
      })
  }
  render() {
    return (
        
      <React.Fragment>
         
        <PopUpModal show={this.state.showErrorModal} close={this.closeModal} className="bg-danger" title="Entries Error">
            {this.state.errorCompenent}
        </PopUpModal>
        <div className="breadcrumb">
          <div className="container">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <span className="breadcrumb-item active">Register</span>
          </div>
        </div>
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / REgister</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only fiveLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
            </p>
            <div className="form">
              <form  >
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="email"
                      placeholder="Enter User Name"
                      required
                      onChange={(e) => {this.setState({email: e.target.value})}}
                      value={this.state.email}/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => {this.setState({password: e.target.value})}}
                      value={this.state.password}/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      required
                      onChange={(e) => {this.setState({repassword: e.target.value})}}
                      value={this.state.repassword}/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <button  className="btn black" onClick={this.onRegisterBtnClick}>Register</button>
                    <h5>not Registered?
                      <Link to="/login">Login here</Link>
                    </h5>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
export default Register