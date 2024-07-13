'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/* const images = [
  {
    label: 'Hard Fork Maintenance Inc',
    imgPath: '/image2/nhf1.jpg',
  },
  {
    label: '24/7 Customer Care',
    imgPath: '/image2/nhf2.jpg',
  },
  {
    label: 'Drop us an email',
    imgPath: '/image2/nhf3.jpg',
  },
  {
    label: 'Welcome to Hard Fork Mainteinance inc',
    imgPath: '/image2/nhf4.jpg',
  },
  {
    label: 'Call Us Anytime',
    imgPath: '/image2/nhf5.jpg',
  },
  {
    label: 'We always Deliver',
    imgPath: '/image2/nhf6.jpg',
  },
  {
    label: 'Certificate of Trust',
    imgPath: '/image2/nhf7.jpg',
  },
  {
    label: 'Know us Better',
    imgPath: '/image2/nhf8.jpg',
  },
  {
    label: 'Affordable Price',
    imgPath: '/image2/nhf9.jpg',
  },
  {
    label: 'Contact us',
    imgPath: '/image2/nhf10.jpg',
  },
  {
    label: 'Thank you ',
    imgPath: '/image2/nhf11.jpg',
  },
];
 */
const images = [
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image/hf1.PNG',
  },
  {
    label: '24/7 Customer Care',
    imgPath: '/image/hf3.PNG',
  },
  {
    label: 'Drop us an email',
    imgPath: '/image/hf4.PNG',
  },
];
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100vw', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
          }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { xs: 255, md: 600 },

                  display: 'block',
                  maxWidth: '100vw',
                  overflow: 'hidden',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: '#ffc400', // Change the text color of the back button
              '&:hover': {
                backgroundColor: 'darkred', // Change the background color on hover
              },
            }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: '#ffc400', // Change the text color of the back button
              '&:hover': {
                backgroundColor: 'darkred', // Change the background color on hover
              },
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        sx={{
          backgroundColor: 'black', // Change the background color of the stepper
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'white', // Change the color of the dots
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: '#ffc400', // Change the color of the active dot
          },
        }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
