import './App.css';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import {Continents} from './pages/continents';
import {
  FooterGrid,
  HeaderGrid,
  Item, LogoText,
  MainGrid,
  MainWrap,
  SidebarGrid,
} from './styled';

function App () {
  return (
    <MainWrap container>
      <HeaderGrid item lg={12}>
        <Item>
          <LogoText variant="h1" component="h2">
            Trip my dream
          </LogoText>;

        </Item>
      </HeaderGrid>
      <SidebarGrid item lg={3}>
        <Item>SideBar</Item>
      </SidebarGrid>
      <MainGrid item lg={9}>
        <Continents/>
      </MainGrid>
      <FooterGrid item lg={12}>
        <Item>Footer</Item>
      </FooterGrid>
    </MainWrap>
  );
}

export default App;
