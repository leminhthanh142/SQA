import { Box, styled } from '@mui/material';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroBackground } from '../components/HeroBackground';
import { Location } from '../components/Location';
import { ContactForm } from '../components/ContactForm';

export const ContactPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <MainLayout isHideBookTable>
      <HeroBackground
        title="Contact"
        des="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        maxHeight={500}
      />
      <Wrapper>
        <Location />
      </Wrapper>
      <Wrapper>
        <ContactForm onSubmit={handleSubmit} />
      </Wrapper>
    </MainLayout>
  );
};

export const Wrapper = styled(Box)({
  maxWidth: 1320,
  margin: '0 auto',
  paddingTop: '120px'
});
