import React from 'react';
import ContactList from './components/ContactList.js';
import './App.css';

function App() {
    const Contacts = [
        {
            name : "Anita Sutton",
            avatar : "https://randomuser.me/api/portraits/women/85.jpg", 
            status : true,
        },

        {
            name :  "Jim George",
            avatar : "https://randomuser.me/api/portraits/men/18.jpg",
            status : false,
        },

        {
            name : "Kaylee Hansen",
            avatar : "https://randomuser.me/api/portraits/women/21.jpg", 
            status : true,
        },

        {
            name : "Luke Porter", 
            avatar : "https://randomuser.me/api/portraits/women/44.jpg", 
            status : false,
        },

        {
            name : "Charlotte Ryan", 
            avatar : "https://randomuser.me/api/portraits/women/30.jpg", 
            status : true,
        },

    ];

    return (
        <div className = "App">
            <ContactList 
                contacts = {Contacts}
            />
        </div>
    )
    }
          

export default App;
