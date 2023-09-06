import './App.css';
import { Grid, Typography } from '@mui/material';
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
      <HeaderGrid item xs={12}>
        <Item>
          <LogoText variant="h1" component="h2">
            Trip my dream
          </LogoText>;

        </Item>
      </HeaderGrid>
      <SidebarGrid item xs={3}>
        <Item>SideBar</Item>
      </SidebarGrid>
      <MainGrid item xs={9}>
        <Item>Main</Item>
      </MainGrid>
      <FooterGrid item xs={12}>
        <Item>Footer</Item>
      </FooterGrid>
    </MainWrap>
  );
}

export default App;
