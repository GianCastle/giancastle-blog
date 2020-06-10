import {
  SiteDescription,
  SiteMain,
  SiteSectionTitle,
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
import styled from '@emotion/styled';

const MainAbout = styled.main`
  background-color: #0a0b0d;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const HeroTitle = styled(SiteTitle)`
  text-transform: uppercase;
  font-weight: bold;
`;

const Intro = styled.div`
  border: 2px sold #fff;
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

const Engineering = () => (
  <IndexLayout>
    <Helmet>
      <title>I'm Giancarlos Castillo</title>
    </Helmet>
    <Wrapper>
      <StarGazer />
      <header css={[CallOut]}>
        <NavWrapper>
          <SiteNav />
        </NavWrapper>
        <div css={HeroContent}>
          <Intro>
            <HeroTitle>Coming soon</HeroTitle>
          </Intro>
        </div>
      </header>
      <MainAbout id="site-main" css={[SiteMain, outer]}>
        <div css={inner}></div>
      </MainAbout>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Engineering;
