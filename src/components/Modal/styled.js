import { Grid, styled } from '@mui/material';

export const ModalWrapp = styled('div')
(
  () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2,
    height: '50vh',
    width: '50vw',
    backgroundColor: '0000008f',
    display: 'flex',
    justifyContent: 'center',
  }));
