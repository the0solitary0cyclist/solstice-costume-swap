import React, { useState } from 'react';
import './App.css';

// Header
import sun from './images/icons/solstice.png'
import sheIcon from './images/icons/she-icon.png';
import heIcon from './images/icons/he-icon.png';
import joshIcon from './images/icons/josh-icon.png';

// Dolls
import doll1 from './images/dolls/she.png';
import doll2 from './images/dolls/he.png';
import doll3 from './images/dolls/josh.png';

// Empty
import clear from './images/icons/clear.png'
import empty from './images/icons/empty.png'
// import empty from './images/icons/empty2.png'

// Sweeney Todd
import lovettT from './images/sweeney_todd/lovett_top.png';
import lovettTicon from './images/sweeney_todd/lovett_top_icon.png';
import sweeneyT from './images/sweeney_todd/sweeney_top.png';
import sweeneyTicon from './images/sweeney_todd/sweeney_top_icon.png';

import lovettB from './images/sweeney_todd/lovett_bottoms.png';
import lovettBicon from './images/sweeney_todd/lovett_bottoms_icon.png';
import sweeneyB from './images/sweeney_todd/sweeney_bottoms.png';
import sweeneyBicon from './images/sweeney_todd/sweeney_bottoms_icon.png';

// Great Comet
import natashaT from './images/great_comet/natasha_top.png';
import natashaTicon from './images/great_comet/natasha_top_icon.png';
import pierreT from './images/great_comet/pierre_top.png';
import pierreTicon from './images/great_comet/pierre_top_icon.png';

import natashaB from './images/great_comet/natasha_bottoms.png';
import natashaBicon from './images/great_comet/natasha_bottoms_icon.png';
import pierreB from './images/great_comet/pierre_bottoms.png';
import pierreBicon from './images/great_comet/pierre_bottoms_icon.png';

// Anne of Green Gables
import anneT from './images/anne_of_green_gables/anne_top.png';
import anneTicon from './images/anne_of_green_gables/anne_top_icon.png';
import gilbertT from './images/anne_of_green_gables/gilbert_top.png';
import gilbertTicon from './images/anne_of_green_gables/gilbert_top_icon.png';

import anneB from './images/anne_of_green_gables/anne_bottoms.png';
import anneBicon from './images//anne_of_green_gables/anne_bottoms_icon.png';
import gilbertB from './images/anne_of_green_gables/gilbert_bottoms.png';
import gilbertBicon from './images/anne_of_green_gables/gilbert_bottoms_icon.png';

// My Fair Lady
import elizaT from './images/my_fair_lady/eliza_top.png';
import elizaTicon from './images/my_fair_lady/eliza_top_icon.png';
import higginsT from './images/my_fair_lady/higgins_top.png';
import higginsTicon from './images/my_fair_lady/higgins_top_icon.png';

import elizaB from './images/my_fair_lady/eliza_bottoms.png';
import elizaBicon from './images/my_fair_lady/eliza_bottoms_icon.png';
import higginsB from './images/my_fair_lady/higgins_bottoms.png';
import higginsBicon from './images/my_fair_lady/higgins_bottoms_icon.png';

// Twilight
import bellaT from './images/twilight/bella_top.png';
import bellaTicon from './images/twilight/bella_top_icon.png';
import edwardT from './images/twilight/edward_top.png';
import edwardTicon from './images/twilight/edward_top_icon.png';

import bellaB from './images/twilight/bella_bottoms.png';
import bellaBicon from './images/twilight/bella_bottoms_icon.png'
import edwardB from './images/twilight/edward_bottoms.png';
import edwardBicon from './images/twilight/edward_bottoms_icon.png';


const Header = ({ handleDollChange, handleAboutChange }) => {
  const [activeIcon, setActiveIcon] = useState('');

  const handleClick = (iconName) => () => {
    setActiveIcon(iconName);
    handleDollChange(iconName)
  };
  return (
    <header className="app-header">
      <div className="header-title">
      <img src={sun} className="header-image icon active" alt="About Icon" title="About" onClick={() => handleAboutChange()}/>
        <h1>Solstice Costume Swap</h1>
      </div>
      <div className="header-icons">
        <button onClick={handleClick(0)} className={`icon ${activeIcon === 0? 'active' : ''}`}>
        <img src={sheIcon} alt="She doll 1 Icon" className="doll-icon" />
        </button>
        <button onClick={handleClick(1)} className={`icon ${activeIcon === 1? 'active' : ''}`}>
          <img src={heIcon} alt="He doll 2 Icon" className="doll-icon" />
        </button>
        <button onClick={handleClick(2)} className={`icon ${activeIcon === 2? 'active' : ''}`}>
          <img src={joshIcon} alt="Josh doll 3 Icon" className="doll-icon" />
        </button>
      </div>
    </header>
  );
};

const Era = ({ handleEraChange }) => {
  const [activeEra, setActiveEra] = useState('');

  const handleClick = (eraName) => () => {
    setActiveEra(eraName);
    handleEraChange(eraName)
  };
  return (
    <div className="eras"><h2>Eras</h2>
    <li onClick={handleClick('sweeney')} className={`era ${activeEra === 'sweeney'? 'active' : ''}`}>1785 - Sweeney Todd</li>
    <li onClick={handleClick('natasha')} className={`era ${activeEra === 'natasha'? 'active' : ''}`}>1812 - Natasha, Pierre, & the Great Comet</li>
    <li onClick={handleClick('anne')} className={`era ${activeEra === 'anne'? 'active' : ''}`}>1891 - Anne of Green Gables</li>
    <li onClick={handleClick('eliza')} className={`era ${activeEra === 'eliza'? 'active' : ''}`}>1912 - My Fair Lady</li>
    <li onClick={handleClick('twilight')} className={`era ${activeEra === 'twilight'? 'active' : ''}`}>2005 - Twilight</li>
  </div>
  );
};

const Doll = ({ dollIndex, currentTop, currentBottom }) => {
  
  const dolls = [doll1, doll2, doll3];

  console.log(dollIndex)
  return (
    <div className="doll-container">
      <img className="doll-img background" src={dolls[dollIndex]} alt={`Doll ${dollIndex}`} />
      <img className="overlay-top overlay" src={currentTop} />
      <img className="overlay-bottom overlay" src={currentBottom} />
    </div>
  );
};

const Sidebar = ({ tops, handleTopChange, bottoms, handleBottomChange, handleEraChange, eraIndex }) => {
  return (
    <div className="sidebar">
      <Era handleEraChange={handleEraChange} />

      {eraIndex ? (
        <div>
          <div className="tops">
            <h2>Tops</h2>
            {tops.map((top, index) => (
              <img
                key={index}
                src={top[0]}
                alt={`Top ${index}`}
                onClick={() => handleTopChange(top[1])}
              />
            ))}
          </div>
          <div className="bottoms">
            <h2>Bottoms</h2>
            {bottoms.map((bottom, index) => (
              <img
                key={index}
                src={bottom[0]}
                alt={`Bottom ${index}`}
                onClick={() => handleBottomChange(bottom[1])}
              />
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};


const About = () => {
  return (
    <div className="about">
      <h1>About this app</h1>
      <div>
        <h3>Welcome, SarahEmily &amp; friends!</h3>
        <p>This is a virtual paper-doll application inspired by SarahEmily's love for Francis, Josh Groban, and for the media referenced. That media coincidently represents a nice array of eras and costumes, which inspired this project.</p>
        <h3>To use the application:</h3>
        <div className="instructions" >
          <li>Select a "doll" icon in the top right.</li>
          <li>Select an "era" from the list to reveal its associated outfits.</li>
          <li>Click a "top" or "bottom" to see it appear on your doll.</li>
          <li>Toggle between eras to mix&amp;match your costumes.</li>
          <li>Explore gender-agnostic styling – just like in a real Small &amp; Casual production!</li>
        </div>
        <p>
          I've taken some liberties with the costumes – some are riffs on the iconic; some are my own designs. For example, I have taken pains to <i>actually</i> set Sweeney Todd in its true 1785, despite its usual pseudo-Victorian styling. Josh Groban looks good either way.
        </p>
        <p> Graphical styles vary between outfits <strike>because I was learning Photoshop on the fly</strike> for <i>artistic</i> reasons.</p>
        <p> I count 363 available character stylings (if you count walking around in your skivies, rocking your undershirt, or taking a no-pants subway ride.)</p>
        <p>
          This web domain name is available for two years for this and any other Solstice Swap purposes. Just like the changing fashions, it's here for a relatively short, but hopefully enjoyable, time.
        </p>
        <p>Have fun!</p>
        <p>Love &amp; Solstice Light,<br />
        <i>Your Secret Solstice Swapper</i></p>
        <p>
          P.S. Special mention to Etsy artist <a href="https://www.etsy.com/shop/LilyAndThreads?ref=shop-header-name&amp;listing_id=1536338829&amp;from_page=listing">Lily&amp;Threads</a>; I purchased her paper dolls as a design template. I'm sure this was never her intended medium but I trust the usage is properly transformative.
        </p>
        <p> P.P.S. Anne of Green Gables by some accounts starts in 1876 but given the puffed sleeves that never seemed right. <a href="https://rebeccathehistorian.tumblr.com/post/74350013738/two-different-timelines#:~:text=This%20means%20that%20if%20we,the%20Island%20(1883%2D1887)">This delightful article</a> allowed me to put it in the Late Victorian where puffed sleeves make much more sense.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [dollIndex, setDollIndex] = useState(0);
  const [eraIndex, setEraIndex] = useState(0);

  const [currentTop, setCurrentTop] = useState(empty);
  const [currentBottom, setCurrentBottom] = useState(empty);

  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);

  const [currentComponent, setCurrentComponent] = useState('about');

  const handleAboutChange = () => {
    setCurrentComponent('about');
  };

  const handleDollChange = (index) => {
    setCurrentComponent('doll');
    setDollIndex(index);
  };

  const handleEraChange = (index) => {
  
    const swenney_tops = [[lovettTicon, lovettT], [sweeneyTicon, sweeneyT], [clear, empty]];
    const sweeney_bottoms = [[lovettBicon, lovettB], [sweeneyBicon, sweeneyB], [clear, empty]];

    const natasha_tops = [[natashaTicon, natashaT], [pierreTicon, pierreT], [clear, empty]];
    const natasha_bottoms = [[natashaBicon, natashaB], [pierreBicon, pierreB], [clear, empty]];

    const anne_tops = [[anneTicon, anneT], [gilbertTicon, gilbertT], [clear, empty]];
    const anne_bottoms = [[anneBicon, anneB], [gilbertBicon, gilbertB]];

    const my_fair_lady_tops = [[elizaTicon, elizaT], [higginsTicon, higginsT], [clear, empty]];
    const my_fair_lady_bottoms = [[elizaBicon, elizaB], [higginsBicon, higginsB], [clear, empty]];

    const twilight_tops = [[bellaTicon, bellaT], [edwardTicon, edwardT], [clear, empty]];
    const twilight_bottoms = [[bellaBicon, bellaB], [edwardBicon, edwardB], [clear, empty]];

    setEraIndex(index); // CG

    switch (index) {
      case 'sweeney':
        setTops(swenney_tops);
        setBottoms(sweeney_bottoms);
        break;
      case 'natasha':
        setTops(natasha_tops);
        setBottoms(natasha_bottoms)
        break;
      case 'anne':
        setTops(anne_tops);
        setBottoms(anne_bottoms)
        break;
      case 'eliza':
        setTops(my_fair_lady_tops);
        setBottoms(my_fair_lady_bottoms)
        break;
      case 'twilight':
        setTops(twilight_tops);
        setBottoms(twilight_bottoms)
        break;
      default:
        setTops([]);
        setBottoms([])
    }
  };

  const handleTopChange = (top) => {
    setCurrentTop(top);
  };

  const handleBottomChange = (bottom) => {
    console.log(bottom)
    setCurrentBottom(bottom);
  };

  return (
    <div className="app">
      <Header handleDollChange={handleDollChange} handleAboutChange={handleAboutChange} />
      <div className="content">
        <div className="container">
          <main>
            {currentComponent === 'doll' ? (
              < Doll dollIndex={dollIndex} currentTop={currentTop} currentBottom={currentBottom} />
            ) : (
              <About />
            )}
          </main>
          <aside>
            < Sidebar tops={tops} eraIndex={eraIndex} handleTopChange={handleTopChange} bottoms={bottoms} handleBottomChange={handleBottomChange} handleEraChange={handleEraChange} eraIndex={eraIndex}/>
          </aside>
        </div>
      </div>
      <footer>
        <p>© 2024 Solstice Costume Swap – A Gift for SarahEmily</p>
      </footer>
    </div>
  );
}
