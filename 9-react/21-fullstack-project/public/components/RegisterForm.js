import React from 'react'
import {InputGroup, InputGroupAddon, InputGroupText, Button, Input} from 'reactstrap'

class RegisterForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: ''
    }
  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              First Name
            </InputGroupText>
          </InputGroupAddon>
          <Input value={this.state.firstName} onChange={(e) => {this.setState({firstName: e.target.value})}}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Last Name
            </InputGroupText>
          </InputGroupAddon>
          <Input value={this.state.lastName}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Email
            </InputGroupText>
          </InputGroupAddon>
          <Input type="email" value={this.state.email}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Password
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" value={this.state.password}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Re-Password
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" value={this.state.repassword}/>
        </InputGroup>
        <Button color="primary">Register</Button>
      </React.Fragment>
    )
  }
}

export default RegisterForm