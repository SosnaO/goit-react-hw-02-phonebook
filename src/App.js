// import { element } from 'prop-types';
import React, { Component }  from 'react';
import './App.css';
// import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

// function App() {

class App extends Component {

  // state = {
  //    contacts: [],
    //  name: '',
    //  number: ''
  // }
//   handleChange=event=>{
//     const {name, value}= event.currentTarget;
//     this.setState({[name]: value})
// }

// handleSubmit=event=>{
//   event.preventDefault();
// }
 
  render(){
 return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
{/* 
    <form onSubmit={this.handleSubmit}>
      <label>Name
        <input
      type="text"
     
      name="name"
      onChange={this.handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      />
      </label>

      <label>Number
          <input
      type="tel"
      name="number"
      onChange={this.handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
      />
      </label>

      <button type="submit">Add contact</button>
      

    </form>
   */}

    <h2>Contacts</h2>


  {/* <Filter /> */}
   {/* <ContactList /> */}
    </div>
  );
 }
}





 
 
export default App;
