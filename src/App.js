// import { element } from 'prop-types';
import React, { Component }  from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
// function App() {

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'} ],
    //  ],
    filter: '',
    name: '',
    number: ''
 }

 changeFilter = element => {
   this.setState({filter: element.currentTarget.value});
 };
  

  deleteContacts = contactId =>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact =>contact.id !==contactId)


    }));
  }
  formSubmitHandler = ({ id, name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };


  
  render(){
const { contacts, filter }=this.state;
const visibleContacts = this.visibleContacts();
   
 return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHandler}/>


    <h2>Contacts</h2>

{/*     
        <ul>
        <li>{this.data}</li>
        </ul> 
     */}

  <Filter value={filter} onChange={this.changeFilter} />
  
    <ContactList
     contacts={visibleContacts}
     onChange={this.changeFilter}
     onDelete={this.deleteContacts} /> 
    </div>
  );
 }
}





 
 
export default App;
