'use client';
import { Typography, Box, Button, Grid, Card, styled } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  maxWidth: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
}));

const FlipCard = ({ frontText, backText, backButtonText, backButtonLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const variants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  const containerStyle = {
    maxWidth: '100%',
    height: 300,
    perspective: 1000,
    cursor: 'pointer',
  };

  const cardStyle = {
    maxWidth: '100%',
    height: 400,
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
  };

  return (
    <Box component={motion.div} sx={containerStyle} onClick={toggleFlip}>
      <Box
        component={motion.div}
        animate={isFlipped ? 'flipped' : 'initial'}
        variants={variants}
        transition={{ duration: 0.5 }}
        sx={cardStyle}
      >
        <StyledCard elevation={8} style={{ backgroundColor: '#f0f0f0' }}>
          <Typography variant="h6" gutterBottom>
            {frontText}
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            Prompt, Professional, Reliable
          </Typography>
        </StyledCard>
        <StyledCard
          elevation={8}
          style={{
            backgroundColor: '#e0e0e0',
            transform: 'rotateY(180deg)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {backText}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            The Number one trusted and reliable service.
          </Typography>
          <Button
            href={backButtonLink}
            variant="contained"
            sx={{
              bgcolor: '#ffc400',
              '&:hover': {
                bgcolor: '#ffc400',
              },
            }}
          >
            {backButtonText}
          </Button>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default function What() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <FlipCard
          frontText="Precision in Every Detail"
          backText="Get in Touch with Us "
          backButtonText="Contact Us"
          backButtonLink="/contact"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FlipCard
          frontText="Your Maintenance Our Expertise"
          backText="Check Out Our Services"
          backButtonText="Services"
          backButtonLink="/services"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FlipCard
          frontText="Craftsmanship You Can Trust"
          backText="Get to Know Us Better"
          backButtonText="About Us"
          backButtonLink="/about"
        />
      </Grid>
    </Grid>
  );
}
