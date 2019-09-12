import React, { Component } from 'react';
import './App.css';
import UserInput from './UserIO/UserInput';
import UserOutput from './UserIO/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {userName: 'jinu'},
      {userName: 'jacob'}
    ]
  }

  switchUserNameHandler = (event) => {
    this.setState({
      usernames: [
        {userName: 'jinu'},
        {userName: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          userName={this.state.usernames[1].userName}
          changed={this.switchUserNameHandler}>
        </UserInput>
        <UserOutput userName={this.state.usernames[0].userName}/>
        <UserOutput userName={this.state.usernames[1].userName}/>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
