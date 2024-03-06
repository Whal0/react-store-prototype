import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';


const AddressForm = ({ nextStep, cart }) => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>Dane Wysyłki</Typography>
      <FormProvider {...methods}>
        <form onSubmit= {methods.handleSubmit((data) => nextStep(data))} cart={cart}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Imię" />
            <FormInput required name="lastName" label="Nazwisko" />
            <FormInput required name="address1" label="Adres" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="Miasto" />
            <FormInput required name="zip" label="Kod pocztowy" />
          </Grid>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Wróc do koszyka</Button>
            <Button type="submit" variant="contained" color="primary">Zapłać</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
