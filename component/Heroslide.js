'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/* const images = [
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image/hf1.PNG',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/image/hf3.PNG',
  },
  {
    label: 'Your Trusted Partner in Building Care',
    imgPath: '/image/hf4.PNG',
  },
];
 */
const images = [
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image2/nhf1.jpg',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/image2/nhf2.jpg',
  },
  {
    label: 'Your Trusted Partner in Building Care',
    imgPath: '/image2/nhf3.jpg',
  },
  {
    label: 'Welcome to Hard Fork Mainteinance inc',
    imgPath: '/image2/nhf4.jpg',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/image2/nhf5.jpg',
  },
  {
    label: 'Your Trusted Partner in Building Care',
    imgPath: '/image2/nhf6.jpg',
  },
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image2/nhf7.jpg',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/image2/nhf8.jpg',
  },
  {
    label: 'Your Trusted Partner in Building Care',
    imgPath: '/image2/nhf9.jpg',
  },
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image2/nhf10.jpg',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business ',
    imgPath: '/image2/nhf11.jpg',
  },
];

function Heroslide() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoPlayInterval={9000} //
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <Box
              component="img"
              sx={{
                height: { xs: 250, md: 500 },
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                width: '100%',
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {images.map((step, index) => (
        <Box
          key={step.label}
          position="absolute"
          top={0}
          left={{ xs: 13, md: 0 }}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ opacity: activeStep === index ? 1 : 0 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#ffc400',
              fontFamily: 'Fauna One',
              fontSize: { xs: '1.7rem', md: '4rem' },
              fontWeight: 900,
              textTransform: 'capitalize',
              lineHeight: '1.1em',
              textShadow: '1px 1px black ',
            }}
          >
            {step.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Heroslide;
