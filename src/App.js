import React, { Component }  from 'react';
import './App.css';
// import ContactList from './components/ContactList'

// function App() {

class App extends Component {

  state = {
     contacts: [],
     name: ''
  }
  render(){
 return (
    <div>
  <h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
  />

  <h2>Contacts</h2>


  {/* <Filter /> */}
   {/* <ContactList /> */}
    </div>
  );
 }
}





 
 
export default App;