import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';
import Header from './components/Header/Header.jsx';

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}
