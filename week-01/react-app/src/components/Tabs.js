import Button from './Button';
import { useState } from 'react';
import Content from './Content';

import './Tabs.css';

const Tabs = () => {
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <div id="container">
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
                <Button active={activeContentIndex === 3} onClick={() => setActiveContentIndex(3)}>
                    React vs JS
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
    );
};

export default Tabs;
