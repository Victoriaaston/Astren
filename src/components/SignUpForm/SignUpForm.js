import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import React from "react"

export default class SignUpForm extends Component {
    state = {
        name: '', 
        email: '', 
        password:'', 
        confirm: '',
        error: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error:''
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Agaon'});
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        const { id } = this.props;
        return (
          <div>
            <div className="form-container" id={id}>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label htmlFor={`${id}-name-input`}>Name</label>
                <input type="text" id={`${id}-name-input`} name="name" value={this.state.name} onChange={this.handleChange} required />
                <label htmlFor={`${id}-email-input`}>Email</label>
                <input type="email" id={`${id}-email-input`} name="email" value={this.state.email} onChange={this.handleChange} required />
                <label htmlFor={`${id}-password-input`}>Password</label>
                <input type="password" id={`${id}-password-input`} name="password" value={this.state.password} onChange={this.handleChange} required />
                <label htmlFor={`${id}-confirm-input`}>Confirm</label>
                <input type="password" id={`${id}-confirm-input`} name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" id={`${id}-submit-button`} disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      } 
    }
