import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useFlash } from '../../context/flash';
import Slide from '@mui/material/Slide';

export const Flash = () => {
  const { flash, setFlash } = useFlash();
  const handleClose = () => setFlash({ type: flash?.type || 'success', message: '' });
  return (
    <Snackbar
      open={!!flash?.message}
      autoHideDuration={3500}
      onClose={handleClose}
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert onClose={handleClose} severity={flash?.type}>
        {flash?.message}
      </Alert>
    </Snackbar>
  );
};
