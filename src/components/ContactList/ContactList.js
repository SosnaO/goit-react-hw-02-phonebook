// import render from "dom-serializer";
import React from "react";
import PropTypes from 'prop-types';

    const ContactList = ({ contacts, onDelete }) =>(
     <ul> {contacts.map(({ id, name, number })=> ( 
     <li key={id}>
         <p>{name}</p>
         <p>{number}</p>
         <button onClick={()=> onDelete=(id)}>Delete</button>

     </li>))}
      
     </ul>
    );

    ContactList.propTypes = {
        contacts: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
      };
    



  export default ContactList;