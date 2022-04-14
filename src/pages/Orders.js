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
  FormControl,
  FormHelperText
} from '@mui/material';
import { useOrders } from '../context/orders';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { NumberStepper } from '../components/NumberStepper';
import { OrderCard } from '../components/OrderCard';
import { ProductionQuantityLimits } from '@mui/icons-material';
import { RightArrow } from '../components/RightArrow';
import { LeftArrow } from '../components/LeftArrow';
import { digits, PaymentType, ShippingType } from '../type';
import { useNavigate } from 'react-router-dom';
import { useFlash } from '../context/flash';
import { customAxios } from '../customAxios';

const labels = ['Contacts', 'Shipping', 'Payment'];
const creditCards = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-visa_xbmobu.png'
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-master_hk7o4r.png'
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-american_wfurcp.png'
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-jcb_qb5auz.png'
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-discover_jhud7f.png'
  }
];
const onlineGateWays = [
  {
    id: 6,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-gateway-paypal_hp0gag.png'
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-stripe_odvihl.png'
  }
];

export const OrdersPage = () => {
  const navigate = useNavigate();
  const { setFlash } = useFlash();
  const { orders, onAddOrder, onRemoveOrder, setOrders } = useOrders();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingType, setShippingType] = useState(ShippingType.Courier);
  const [paymentType, setPaymentType] = useState(PaymentType.Online);
  const [selectedPaymentCard, setSelectedPaymentCard] = useState();
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [address, setAddress] = useState('');

  const handleResetOrders = () => {
    setOrders([]);
  };
  const isValid = () => {
    if (activeStep === 1) {
      return !!address;
    }
    return !!userName && !!phoneNumber && !phoneNumberError;
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    validatePhoneNumber(e);
  };

  const validatePhoneNumber = (e) => {
    const value = e.target.value;
    if (!digits.test(value) && value.length) {
      setPhoneNumberError('Invalid phone number!');
      return;
    }
    setPhoneNumberError('');
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmitOrder = async () => {
    try {
      const promiseAll = [];
      const userInformationParams = {
        userName,
        address,
        phoneNo: phoneNumber,
        date: new Date()
      };
      orders.forEach((order) =>
        promiseAll.push(
          customAxios.post('/carts/add', {
            ...userInformationParams,
            productId: Number(order.productId),
            quantity: order.quantity,
            total: order.total
          })
        )
      );
      await Promise.all(promiseAll);
      setFlash({
        type: 'success',
        message: 'Make order successfully!'
      });
    } catch (err) {
      setFlash({ type: 'error', message: 'Something wrong, please try again later!' });
    }
  };

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

  const handleSelectPaymentCard = (id) => {
    setSelectedPaymentCard(id);
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
        <StyledNextButton
          variant={'contained'}
          endIcon={<RightArrow />}
          disabled={!isValid()}
          onClick={() => {
            handleNextStep();
            if (activeStep === 2) {
              handleSubmitOrder();
            }
          }}>
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
          <OutlinedInput
            value={userName}
            onChange={handleChangeUserName}
            placeholder={'Full name'}
          />
        </FormControl>
        <FormControl fullWidth error={!!phoneNumberError}>
          <OutlinedInput
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            placeholder={'Phone number'}
          />
          <FormHelperText sx={{ ml: 0 }}>{phoneNumberError}</FormHelperText>
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
          <OutlinedInput value={address} onChange={handleChangeAddress} placeholder={'Adress'} />
        </FormControl>
      </Box>
    </Box>
  );

  const onlinePaymentForm = (
    <>
      <StyledTitle variant={'body1'}>Credit Cards</StyledTitle>
      <CardContainer>
        <Box sx={{ margin: '1rem 0' }} display={'flex'} flexWrap={'wrap'}>
          {creditCards.map((card, i) => (
            <PaymentCard
              key={i}
              onClick={() => handleSelectPaymentCard(card.id)}
              isSelected={card.id === selectedPaymentCard}>
              <img src={card.image} alt={''} />
            </PaymentCard>
          ))}
        </Box>
      </CardContainer>
      <CardContainer>
        <StyledTitle variant={'body1'}>Online payment gateways</StyledTitle>
        <Box sx={{ margin: '1rem 0' }} display={'flex'} flexWrap={'wrap'}>
          {onlineGateWays.map((card, i) => (
            <PaymentCard
              key={i}
              onClick={() => handleSelectPaymentCard(card.id)}
              isSelected={card.id === selectedPaymentCard}>
              <img src={card.image} alt={''} />
            </PaymentCard>
          ))}
        </Box>
      </CardContainer>
    </>
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
        {paymentType === PaymentType.Online && onlinePaymentForm}
      </Box>
    </Box>
  );

  const completeForm = (
    <Box>
      <Stack spacing={3} justifyContent={'flex-start'} sx={{ pl: 1 }}>
        <StyledTitle variant={'body2'}>Checkout complete!</StyledTitle>
        <StyledTitle variant={'body2'}>Thank you for your orders...</StyledTitle>
        <StyledBackButton
          disableRipple
          variant={'outlined'}
          startIcon={<LeftArrow />}
          onClick={() => {
            navigate('/');
            handleResetOrders();
          }}>
          Come back homepage
        </StyledBackButton>
      </Stack>
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
            {activeStep !== 3 && navigationButtons()}
            {activeStep === 3 && completeForm}
          </Box>
          <StyledPaper elevation={0}>
            <Typography variant={'body2'}>Order total ({orders.length})</Typography>
            <Box maxHeight={800} overflow={'auto'}>
              <Stack spacing={2} mt={3}>
                {orders.map((order) => (
                  <OrderCard
                    key={order.productId}
                    image={order.imageName}
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

const CardContainer = styled(Box)({
  margin: '2rem 0',
  width: 480
});

const PaymentCard = styled(Box)(({ isSelected }) => ({
  cursor: 'pointer',
  border: '1px solid',
  borderColor: isSelected ? '#fe5f41' : '#cecece',
  color: isSelected ? '#fe5f41' : '#cecece',
  borderRadius: 5,
  margin: '0 8px 8px 0',
  transition: 'all 0.3s',
  '&:hover': {
    borderColor: '#fe5f41'
  },
  img: {
    width: 150
  }
}));
