// import { element } from 'prop-types';
import React, { Component }  from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

// function App() {

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'} ],
    name: '',
    number: ''
 }

  
  formSubmitHandler=data=>{
    console.log(data);
  };

  
  render(){
const { contacts }=this.state;

 return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHandler}/>


    <h2>Contacts</h2>

    
        <ul>
        <li>{this.data}</li>
        </ul> 
    

  {/* <Filter /> */}
    <ContactList contacts={contacts} /> 
    </div>
  );
 }
}





 
 
export default App;
