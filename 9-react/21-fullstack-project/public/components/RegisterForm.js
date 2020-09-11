import React from 'react'
import {InputGroup, InputGroupAddon, InputGroupText, Button, Input} from 'reactstrap'

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              First Name
            </InputGroupText>
          </InputGroupAddon>
          <Input/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Last Name
            </InputGroupText>
          </InputGroupAddon>
          <Input/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Email
            </InputGroupText>
          </InputGroupAddon>
          <Input/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Password
            </InputGroupText>
          </InputGroupAddon>
          <Input/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Re-Password
            </InputGroupText>
          </InputGroupAddon>
          <Input/>
        </InputGroup>
        <Button color="primary">Register</Button>
      </div>
    )
  }
}


export default RegisterForm