import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';
import { listData } from '../../data/dataStore';



const Hero = props => (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
      <img src={listData.image} alt="alt" className={styles.image} />
    </header>
  );
  
Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    srcText: PropTypes.string,
}


export default Hero;