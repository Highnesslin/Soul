import React, { Component } from 'react'
import {
    FormContainer,
    TitleGroup,
    InputGroup
} from '../_components/form-group/'

class PasswordInput extends Component {
  constructor(props) {
    super(props)
    this.state={
        password: ''
    }
  }
  getValue = value=> {
      this.setState({
        password: value
      })
      this.props.changePassword(value)
  }
  render() {
    return (
        <FormContainer>
            <TitleGroup
              type='password'
              title='密码'
            />
            <InputGroup
              hasBorder={true}
              value={this.state.password}
              type={'password'}
              getValue={this.getValue}
            ></InputGroup>
        </FormContainer>
    )
  }
}
export default PasswordInput