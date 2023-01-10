import React from 'react';
import { DiFirebase, DiReact, DiZend, DiSass } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size='3rem' />
        <ListContainer>
          <ListTitle>Fram work</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tailwindcss
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size='3rem' />
        <ListContainer>
          <ListTitle>Tools/library</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sass / BootStrab
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
