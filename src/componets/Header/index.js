import React from 'react';

import githublogo from '../../img/github.svg';
import twitterlogo from '../../img/twitter.svg';
import './style.css';

const Header = () => (
    <header id="main-header">
        <a href="https://github.com/lockdzn/conversor-react"><img src={githublogo} alt="GitHub" className="g"/></a>
        <a href="https://twitter.com/lockdzn"><img src={twitterlogo} alt="Twitter" className="l"/></a>
    </header>
);

export default Header;