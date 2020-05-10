import {
  SiteDescription,
  SiteHeader,
  SiteHeaderHero,
  SiteHero,
  SiteMain,
  SiteTitle,
  inner,
  outer,
} from '../styles/shared';

import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import IndexLayout from '../layouts';
import React from 'react';
import SiteNav from '../components/header/SiteNav';
import { StarGazer } from '../components/StarGazer';
import { Timeline } from '../components/Timeline';
import Wrapper from '../components/Wrapper';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const Intro = styled.div`
  border: 2px solid #fff;
  padding: 2vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CallOut = css`
  position: relative;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0a0b0d;
`;

const HeroContent = css`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #0a0b0d;
  color: white;
`;

const NavWrapper = styled.div`
  padding: 4vh;
`;

const About = () => (
  <IndexLayout>
    <Helmet>
      <title>About me</title>
    </Helmet>
    <Wrapper>
      <StarGazer />
      <header css={[CallOut]}>
        <NavWrapper>
          <SiteNav />
        </NavWrapper>
        <div css={HeroContent}>
          <Intro>
            <SiteTitle style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
              I'm Giancarlos Castillo
            </SiteTitle>
            <SiteDescription>Frontend maniac, backend enthusiastic</SiteDescription>
          </Intro>
        </div>
      </header>
      <main
        id="site-main"
        css={[SiteMain, outer]}
        style={{
          backgroundColor: '#0a0b0d',
          borderTop: '1px solid rgba(255,255,255, 0.4)',
          borderBottom: '1px solid rgba(255,255,255, 0.4)',
        }}
      >
        <div css={inner}>
          <Timeline />
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export const heroBackgroundQuery = graphql`
  query heroBackgroundQuery {
    hero: file(relativePath: { eq: "img/smile.png" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`;

export default About;
