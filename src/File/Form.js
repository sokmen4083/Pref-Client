import React, { Component } from 'react';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.sendProfileInfo = this.sendProfileInfo.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {user:{}};
	}

  sendProfileInfo()
  {
	  let profilData = this.state.user;
	  fetch('http://localhost:5501/users/profile',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profilData)
	  }).then(function(response) {
		  return response.json();
	  }).then(function(data) {
		  return window.location.href = "/Profil" 
	  }); 
  }

 

  handleInputChange(event) {
    const target = event.target;
    //const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    let user = this.state.user;
    user[name] = target.value;
    this.setState({user});
  }

  render() {
    return (
		<div>
      <form id="registration">
        <h1>REGISTRATION FORM</h1>
        <p>NAME : 
          <input type="text" id="name" name="firstName" placeholder="please enter your name" value={this.state.user.firstName} onChange={this.handleInputChange}/></p>
        <p>SURNAME : 
          <input type="text" id="surname" name="lastName" placeholder="please enter your surname" value={this.state.user.lastName} onChange={this.handleInputChange}/></p>
        <p>EMAIL : 
          <input type="email" id="email" name="email" placeholder="please enter your Email" value={this.state.user.email} onChange={this.handleInputChange}/></p>
        <p>BIRTHDAY : 
          <input type="date" id="date" name="birthday" value={this.state.user.birthday} onChange={this.handleInputChange}/></p>
        <p>
           <input type="button" value="SUBMIT" id="submit" onClick={this.sendProfileInfo}/></p> 
      </form>
	  </div>
      
    );
  }
}

