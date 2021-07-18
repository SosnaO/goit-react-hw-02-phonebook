// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import shortid from 'shortid'

class ContactForm extends Component{
    state = {
        // contacts: [],
        name: '',
        number: ''
     }
     nameInputId=shortid.generate();
     numberInputId=shortid.generate();


     handleChange=event=>{
       const {name, value}= event.currentTarget;
       this.setState({id: shortid.generate(),[name]: value})
   };
   
   handleSubmit=event=>{
     event.preventDefault();
     
     this.props.onSubmit(this.state);
     this.reset();
   };

   reset = () => {
    this.setState({ name: '', number: '' });
  };

    render(){
                return(
                <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name
        <input
        type="text"
        name="name"
        onChange={this.handleChange}
        id={this.nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        />
        </label>

        <label htmlFor={this.numberInputId}>Number
            <input
        type="tel"
        name="number"

        onChange={this.handleChange}
        id={this.numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        />
        </label>

        <button  type="submit">Add contact</button>


        </form>


        )



    }





}










export default ContactForm;