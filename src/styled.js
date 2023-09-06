import { Grid, styled, Typography } from '@mui/material';

export const MainWrap = styled(Grid)
(
  () => ({
    height: '100vh',
    width: '100vw',
  }));

export const LogoText = styled(Typography)
(
  () => ({
    color: 'white',

  }));
export const Item = styled('div')(
  () => ({

    padding: 0,
    textAlign: 'center',
    overflow: 'auto',
    height: '100%',

  }));
export const HeaderGrid = styled(Grid)(
  () => ({
    backgroundColor: 'violet',
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

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