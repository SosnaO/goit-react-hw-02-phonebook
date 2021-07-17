// import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ContactForm extends Component{
    state = {
        contacts: [],
        name: '',
        number: ''
     }
     handleChange=event=>{
       const {name, value}= event.currentTarget;
       this.setState({[name]: value})
   }
   
   handleSubmit=event=>{
     event.preventDefault();
   }
    render(){
                return(
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


        )



    }





}










export default ContactForm;