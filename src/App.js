import React from 'react';
import Contact from './components/Contact.js';

function App() {
    return (
        <div>
            <Contact name = "Anita Sutton" avatar= "https://randomuser.me/api/portraits/women/85.jpg" online = {true}/>
            <Contact name = "Jim George" avatar= "https://randomuser.me/api/portraits/men/18.jpg" online= {false}/>
            <Contact name = "Charlotte Ryan" avatar= "https://randomuser.me/api/portraits/women/44.jpg" online= {true}/>
        </div>
    );
}

export default App;
