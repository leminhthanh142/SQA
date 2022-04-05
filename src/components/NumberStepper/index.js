import {
  Step,
  StepLabel,
  Stepper,
  styled,
  Box,
  StepConnector,
  stepConnectorClasses
} from '@mui/material';
import PropTypes from 'prop-types';

export const NumberStepper = ({ activeStep, labels }) => {
  return (
    <Stepper activeStep={activeStep} connector={<StyledConnector />}>
      {labels.map((label, index) => (
        <Step key={label}>
          <StyledStepLabel
            StepIconComponent={CustomStepIcon}
            active={index === activeStep}
            completed={index <= activeStep}>
            {label}
          </StyledStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

const StyledConnector = styled(StepConnector)(() => {
  return `& .${stepConnectorClasses.line} {
    border-color: #f0f0f5;
    border-top-width: 2px;
  }`;
});

const CustomStepIcon = ({ active, completed, icon }) => {
  const defaultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: 30,
    height: 30,
    textAlign: 'center',
    background: '#fff',
    color: '#afb1bd',
    border: 'solid #afb1bd 1px',
    fontSize: 14
  };
  const activeStyle = { background: '#fe5f41', color: '#fff', border: '1px solid #fe5f41' };

  return completed || active ? (
    <Box sx={{ ...defaultStyle, ...activeStyle }}>{icon}</Box>
  ) : (
    <Box sx={{ ...defaultStyle }}>{icon}</Box>
  );
};

const StyledStepLabel = ({ active, completed, children, ...others }) => {
  const sx = {
    '& .Mui-active': {
      color: '#fe5f41',
      fontWeight: 700
    },
    '& .MuiStepLabel-label': {
      color: '#afb1bd',
      fontWeight: 500
    }
  };
  return (
    <StepLabel sx={sx} {...others}>
      {children}
    </StepLabel>
  );
};

NumberStepper.propTypes = {
  activeStep: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string)
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

StyledStepLabel.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  children: PropTypes.node
};
