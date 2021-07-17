// import render from "dom-serializer";
import React from "react";

    const ContactList = ({ contacts }) =>
     <ul> {contacts.map(contacts=> 
     <li key={contacts.id}>
         <p>{contacts.name}</p>
         <p>{contacts.number}</p>

     </li>)}
     
     </ul>



  export default ContactList;