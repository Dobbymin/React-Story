import { useState } from 'react';

import TabButton from '../TabButton/TabButton';
import { EXAMPLES } from '../../data';
import './Examples.css';
import Section from '../Section';
import Tabs from '../Tabs';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'JSX', 'Props', 'State'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log('APP COMPONENT EXECUTING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <>
            <Section title="Examples" id="examples">
                <Tabs
                    buttons={
                        <>
                            <TabButton
                                isSelected={selectedTopic === 'components'}
                                onClick={() => handleSelect('components')}
                            >
                                components
                            </TabButton>
                            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
                                JSX
                            </TabButton>
                            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
                                Props
                            </TabButton>
                            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
                                State
                            </TabButton>
                        </>
                    }
                >
                    {tabContent}
                </Tabs>
                <menu></menu>
            </Section>
        </>
    );
}
