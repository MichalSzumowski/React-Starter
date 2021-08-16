import React from 'react';
import Container from '../Container/Container';
import {infoPage} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} image={infoPage.image} />
    <p>{infoPage.content}</p>
  </Container>
);

export default Info;