import './App.css';
import { Grid } from '@mui/material';
import {
  FooterGrid,
  HeaderGrid,
  Item,
  MainGrid,
  MainWrap,
  SidebarGrid,
} from './styled';

function App () {
  return (
    <MainWrap container>
      <HeaderGrid item xs={12}>
        <Item>Header</Item>
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
