import { Grid, styled } from '@mui/material';

export const MainWrap = styled(Grid)
(
  () => ({
    height: '100vh',
    width: '100vw',
  }));
export const Item = styled('div')(
  () => ({

    padding: 0,
    textAlign: 'center',

  }));
export const HeaderGrid = styled(Grid)(
  () => ({
    backgroundColor: 'violet',
    height: '15%',

  }));
export const FooterGrid = styled(Grid)(
  () => ({
    backgroundColor: 'violet',
    height: '20%',

  }));
export const SidebarGrid = styled(Grid)(
  () => ({
    backgroundColor: 'blue',
    height: '65%',

  }));

export const MainGrid = styled(Grid)(
  () => ({
    backgroundColor: 'white',
    height: '65%',

  }));