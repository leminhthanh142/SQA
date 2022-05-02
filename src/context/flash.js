import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const FlashContext = React.createContext({
  type: 'success',
  message: ''
});

export function useFlash() {
  return useContext(FlashContext);
}

export const FlashContextProvider = ({ children }) => {
  const [flash, setFlash] = useState({
    type: 'success',
    message: ''
  });

  const values = {
    flash,
    setFlash
  };

  return <FlashContext.Provider value={values}>{children}</FlashContext.Provider>;
};

FlashContextProvider.propTypes = {
  children: PropTypes.node
};
