import React, { useState } from 'react';
import {
  Box,
  Stack,
  styled,
  Typography,
  Paper,
  OutlinedInput,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl
} from '@mui/material';
import { useOrders } from '../context/orders';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { NumberStepper } from '../components/NumberStepper';
import { OrderCard } from '../components/OrderCard';
import { ProductionQuantityLimits } from '@mui/icons-material';
import { RightArrow } from '../components/RightArrow';
import { LeftArrow } from '../components/LeftArrow';
import { PaymentType, ShippingType } from '../type';

const labels = ['Contacts', 'Shipping', 'Payment'];

export const OrdersPage = () => {
  const { orders, onAddOrder, onRemoveOrder } = useOrders();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingType, setShippingType] = useState(ShippingType.Courier);
  const [paymentType, setPaymentType] = useState(PaymentType.Online);

  const handleChangeShippingType = (shippingType) => {
    setShippingType(shippingType);
  };

  const handleChangePaymentType = (paymentType) => {
    setPaymentType(paymentType);
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBackStep = () => {
    if (activeStep === 0) return;
    setActiveStep(activeStep - 1);
  };

  const navigationButtons = () => {
    let nextBtn = 'Shipping';
    if (activeStep === 1) nextBtn = 'Payment';
    if (activeStep === 2) nextBtn = 'Submit';

    return (
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={4} ml={1}>
        <StyledBackButton
          disableRipple
          variant={'outlined'}
          startIcon={<LeftArrow />}
          onClick={handleBackStep}>
          Back Step
        </StyledBackButton>
        <StyledNextButton variant={'contained'} endIcon={<RightArrow />} onClick={handleNextStep}>
          {nextBtn}
        </StyledNextButton>
      </Stack>
    );
  };

  const informationForm = (
    <Box ml={1}>
      <StyledTitle variant={'body1'}>Fill in your information</StyledTitle>
      <Stack direction={'row'} spacing={2} mt={2} mb={2}>
        <FormControl fullWidth>
          <OutlinedInput placeholder={'Full name'} />
        </FormControl>
        <FormControl fullWidth>
          <OutlinedInput placeholder={'Phone number'} />
        </FormControl>
      </Stack>
      <RadioGroup defaultValue="female">
        <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
      </RadioGroup>
    </Box>
  );

  const shippingForm = (
    <Box>
      <Box ml={1}>
        <StyledTitle variant={'body1'}>Delivery method</StyledTitle>
        <Box mt={2} mb={4}>
          <RadioGroup
            defaultValue="courier"
            onChange={(e) => handleChangeShippingType(e.target.value)}>
            <StyledFormControlLabel
              isSelected={shippingType === ShippingType.Pickup}
              value="pickup"
              control={<StyledRadio />}
              label="Pickup"
            />
            <StyledFormControlLabel
              isSelected={shippingType === ShippingType.Courier}
              value="courier"
              control={<StyledRadio />}
              label="Courier"
            />
          </RadioGroup>
        </Box>
        <StyledTitle variant={'body1'}>Delivery Address</StyledTitle>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <OutlinedInput placeholder={'Adress'} />
        </FormControl>
      </Box>
    </Box>
  );

  const paymentForm = (
    <Box>
      <Box ml={1}>
        <StyledTitle variant={'body1'}>Payment method</StyledTitle>
        <Box mt={2} mb={4}>
          <RadioGroup
            defaultValue={PaymentType.Online}
            onChange={(e) => handleChangePaymentType(Number(e.target.value))}>
            <StyledFormControlLabel
              isSelected={paymentType === PaymentType.Delivery}
              value={0}
              control={<StyledRadio />}
              label="Payment on Delivery"
            />
            <StyledFormControlLabel
              isSelected={paymentType === PaymentType.Online}
              value={1}
              control={<StyledRadio />}
              label="Online Payment"
            />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );

  if (!orders.length) {
    return (
      <MainLayout>
        <HeroBackground
          title="Orders"
          des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        />
        <Wrapper>
          <Stack alignItems={'center'} spacing={3}>
            <ProductionQuantityLimits sx={{ fontSize: 150 }} />
            <Typography variant={'h4'}>There is no order yet!</Typography>
          </Stack>
        </Wrapper>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <HeroBackground
        title="Orders"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
      />
      <Wrapper>
        <Typography variant={'h2'}>Checkout</Typography>
        <Stack spacing={4} direction={'row'} mt={8} justifyContent={'space-between'}>
          <Box width={500}>
            <Box mb={5}>
              <NumberStepper activeStep={activeStep} labels={labels} />
            </Box>
            {activeStep === 0 && informationForm}
            {activeStep === 1 && shippingForm}
            {activeStep === 2 && paymentForm}
            {navigationButtons()}
          </Box>
          <StyledPaper elevation={0}>
            <Typography variant={'body2'}>Order total ({orders.length})</Typography>
            <Box maxHeight={800} overflow={'auto'}>
              <Stack spacing={2} mt={3}>
                {orders.map((order) => (
                  <OrderCard
                    key={order.id}
                    image={order.image}
                    name={order.name}
                    price={order.price}
                    quantity={order.quantity}
                    onAddOrder={() => onAddOrder(order)}
                    onRemoveOrder={() => onRemoveOrder(order)}
                    totalPrice={order.totalPrice}
                  />
                ))}
              </Stack>
            </Box>
          </StyledPaper>
        </Stack>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});

const StyledTitle = styled(Typography)({
  color: '#000000'
});

const StyledPaper = styled(Paper)(() => ({
  border: '1px solid #f0f0f5',
  padding: 24,
  width: 520
}));

const StyledBackButton = styled(Button)({
  color: '#000000',
  background: 'transparent',
  textTransform: 'none',
  height: 46,
  padding: 0,
  border: 'none',
  '& span': {
    marginRight: 12
  },
  '&:hover': {
    border: 'none',
    background: 'transparent'
  }
});

const StyledNextButton = styled(Button)({
  color: '#ffffff',
  background: '#fe5f41',
  textTransform: 'none',
  width: 174,
  height: 46,
  borderRadius: 8,
  boxShadow: 'none',
  '& span': {
    marginLeft: 12
  },
  '&:hover': {
    background: '#fd4e2d',
    boxShadow: 'none'
  }
});

const StyledRadio = styled(Radio)({
  color: '#cecece',
  '&.Mui-checked': {
    color: '#fe5f41'
  }
});

const StyledFormControlLabel = styled(FormControlLabel)(({ isSelected }) => ({
  border: '1px solid',
  borderColor: isSelected ? '#fe5f41' : '#cecece',
  color: isSelected ? '#fe5f41' : '#cecece',
  margin: 0,
  marginBottom: 16,
  height: 60,
  borderRadius: 4
}));
