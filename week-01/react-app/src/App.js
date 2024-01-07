import { useState } from 'react';

import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Button from './components/Button';

export default function App() {
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <div>
            <Header />
            <div id="tabs">
                <menu>
                    <Button active={activeContentIndex === 0} onClick={() => setActiveContentIndex(0)}>
                        Why React?
                    </Button>
                    <Button active={activeContentIndex === 1} onClick={() => setActiveContentIndex(1)}>
                        Core Features
                    </Button>
                    <Button active={activeContentIndex === 2} onClick={() => setActiveContentIndex(2)}>
                        Related Resources
                    </Button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {Content[activeContentIndex].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
