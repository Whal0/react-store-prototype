import React, { useState } from 'react';
import {  Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';



import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './style';

const steps = ['Dane Wysyłki', 'Płatność'];


const Checkout = ({ cart, resfreshCart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => {
    <div>
      POTWIERDZONE
    </div>
  }

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => activeStep === 0 
    ? <AddressForm nextStep = {nextStep}/>
    : <PaymentForm nextStep={nextStep} backStep={backStep} cart={cart} resfreshCart={resfreshCart}/>

  return (
    <>
      <div className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper>
          <Typography variant="h4" align="center">Kasa</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
            </Stepper>
            {activeStep === steps.lenght ? <Confirmation/> : <Form />}
          </Paper>
      </main>
    </>
  )
}

export default Checkout
