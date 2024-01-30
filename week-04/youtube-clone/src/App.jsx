import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items';
import Metadata from './components/Metadata';
import Section from './components/Section';
import Player from './components/Video/Player';
import ActionButtons from './components/common/Button/ActionButtons';
import MoreBtn from './components/common/Button/MoreBtn';
import Subscribe from './components/common/Button/Subscribe';
import HashTags from './components/common/Text/HashTags';
import Hits from './components/common/Text/Hits';
import NextTitle from './components/common/Text/NextTitle';
import TitleClamp from './components/common/Text/TitleClamp';

function App() {
    return (
        <>
            <header>
                <Header />
            </header>

            <Player />

            <div className="infoAndUpNext">
                <Section className="info">
                    <div className="metadata">
                        <HashTags />
                        <div className="titleAndButton">
                            <TitleClamp />

                            <MoreBtn />
                        </div>
                        <Hits />
                    </div>
                    <ul className="actions">
                        <ActionButtons />
                    </ul>
                    <div className="channel">
                        <Metadata />
                        <Subscribe />
                    </div>
                </Section>

                <section className="upNext">
                    <NextTitle />
                    <ul>
                        <Items />
                    </ul>
                </section>
            </div>
        </>
    );
}

export default App;
