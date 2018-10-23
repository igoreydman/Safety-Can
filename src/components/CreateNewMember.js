import React, { Component } from "react";

class CreateNewMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      age: "",
      hasSpecialNeeds: "",
      conditions: []
    };

    this.createNewMember = this.createNewMember.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSpecNeedsChange = this.handleSpecNeedsChange.bind(this);
    this.handleConditionsChange = this.handleConditionsChange.bind(this);
  }

  createNewMember(name, phoneNumber, email, age, conditions) {
    alert("You've created a new member named: " + name);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleAgeChange(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleSpecNeedsChange(e) {
    this.setState({
      hasSpecialNeeds: e.target.value
    });
  }

  handleConditionsChange(e) {
    this.setState({
      conditions: e.target.value
    });
  }

  render() {
    return (
      <div id="create-new-member">
        <form>
<<<<<<< HEAD
          <div>
            <label>Name</label>
            <input
              id="name-member"
=======
          <div class="form-section">
            <label class="form-label">Name</label>
            <input
              id="name-member"
              class="form-input"
>>>>>>> master
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
<<<<<<< HEAD
          <div>
            <label>Phone Number</label>
            <input
              id="phone-number-member"
=======
          <div class="form-section">
            <label class="form-label">Phone #</label>
            <input
              id="phone-number-member"
              class="form-input"
>>>>>>> master
              type="text"
              onChange={this.handlePhoneNumberChange}
              value={this.state.phoneNumber}
            />
          </div>
<<<<<<< HEAD
          <div>
            <label>Email</label>
            <input
              id="email-member"
=======
          <div class="form-section">
            <label class="form-label">Email</label>
            <input
              id="email-member"
              class="form-input"
>>>>>>> master
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
<<<<<<< HEAD
          <div>
            <label>Age</label>
            <input
              id="age"
=======
          <div class="form-section">
            <label class="form-label">Age</label>
            <input
              id="age"
              class="form-input"
>>>>>>> master
              type="number"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
          </div>
<<<<<<< HEAD
          <div>
            <label>Has Special Needs?</label>
            <input
              type="radio"
              name="special-needs"
=======
          <div class="form-section">
            <label class="form-label">Has Special Needs?</label>
            <input
              type="radio"
              class="special-needs"
>>>>>>> master
              value={this.state.hasSpecialNeeds}
            />Yes
            <input
              type="radio"
<<<<<<< HEAD
              name="special-needs"
              value={this.state.hasSpecialNeeds}
            />No
          </div>
          <div>
            <label>Conditions</label>
            <input
              id="conditions"
=======
              class="special-needs"
              value={this.state.hasSpecialNeeds}
            />No
          </div>
          <div class="form-section">
            <label class="form-label">Conditions</label>
            <input
              id="conditions"
              class="form-input"
>>>>>>> master
              type="text"
              onChange={this.handleConditionsChange}
              value={this.state.conditions}
            />
          </div>
<<<<<<< HEAD
          <div>
=======
          <div class="form-section">
>>>>>>> master
            <input
              id="submit-btn-1"
              onClick={() =>
                this.createNewMember(
                  this.state.name,
                  this.state.phoneNumber,
                  this.state.email,
                  this.state.age,
                  this.state.conditions
                )
              }
              type="button"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNewMember;
