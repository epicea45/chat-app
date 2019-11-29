import React from 'react';
import ContactList from './components/ContactList.js';

function App() {
    const Contacts = [
        {
            name : "Anita Sutton",
            avatar : "https://randomuser.me/api/portraits/women/85.jpg", 
            online : true,
        },

        {
            name :  "Jim George",
            avatar : "https://randomuser.me/api/portraits/men/18.jpg",
            online : false,
        },

        {
            name : "Kaylee Hansen",
            avatar : "https://randomuser.me/api/portraits/women/21.jpg", 
            online : true,
        },

        {
            name : "Luke Porter", 
            avatar : "https://randomuser.me/api/portraits/women/44.jpg", 
            online : false,
        },

        {
            name : "Charlotte Ryan", 
            avatar : "https://randomuser.me/api/portraits/women/30.jpg", 
            online : true,
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
