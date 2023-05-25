// assets/js/app.js

import React from 'react';
import { createRoot } from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola, React en Symfony!</h1>
                <h1>vamos a por todas  Symfony!</h1>
            </div>
        );
    }
}

createRoot(document.getElementById('root')).render(<App />);
