'use client';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const splitTextRevealVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: (i) => ({
    opacity: 1,
    y: '0%',
    transition: {
      delay: i * 0.05, // Adjust the delay as needed
    },
  }),
};

/* const useScrambleText = (text) => {
  const splitText = 'Latest Destination ';
  const [scrambledText, setScrambledText] = useState('');

  useEffect(() => {
    let isMounted = true;
    let iteration = 0;

    const scramble = () => {
      if (!isMounted) return;
      iteration += 1;
      setScrambledText((prev) => {
        const length = prev.length || text.length;
        return text
          .split('')
          .map((char, index) => {
            if (index < iteration / 2) {
              return char;
            }
            return Math.random().toString(36).charAt(2);
          })
          .join('');
      });

      if (iteration < text.length * 2) {
        setTimeout(scramble, 50);
      }
    };

    scramble();

    return () => {
      isMounted = false;
    };
  }, [text]);

  return scrambledText;
};
 */
const useScrambleText = (text, delay = 0) => {
  const [scrambledText, setScrambledText] = useState('');

  useEffect(() => {
    let isMounted = true;
    let iteration = 0;

    const scramble = () => {
      if (!isMounted) return;
      iteration += 1;
      setScrambledText((prev) => {
        const length = prev.length || text.length;
        return text
          .split('')
          .map((char, index) => {
            if (index < iteration / 2) {
              return char;
            }
            return Math.random().toString(36).charAt(2);
          })
          .join('');
      });

      if (iteration < text.length * 2) {
        setTimeout(scramble, 50);
      }
    };

    const timeoutId = setTimeout(scramble, delay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return scrambledText;
};
export default function Hero() {
  /*   const scrambledText = useScrambleText('The Best Place to get Maintenance'); */
  const splitText = 'Latest Destination ';
  const scrambledText = useScrambleText(
    'The Best Place to get Maintenance',
    splitText.length * 100
  ); // Delay scramble start by split text reveal duration
  return (
    <Grid item overflow={'hidden'}>
      <Box
        sx={{
          backgroundImage: `url(/hardforknew1.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 600,
          width: '100vw',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            opacity: '1',
          }}
        >
          <Typography
            initial="hidden"
            animate="visible"
            variant="h1"
            sx={{
              lineHeight: '1.1em',
              fontSize: { xs: '1.8rem', md: '4rem' },
              fontWeight: 900,
              mb: { xs: 1, md: 0 },
              textTransform: 'uppercase',
            }}
            color="black"
            align="center"
            fontFamily={'Orbitron'}
            component={motion.div}
            style={{ overflow: 'hidden' }}
          >
            {splitText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={splitTextRevealVariants}
                custom={index}
                ss
              >
                {char}
              </motion.span>
            ))}
          </Typography>
          <Typography
            color="black"
            align="center"
            fontFamily={'Orbitron'}
            fontWeight={700}
            initial="hidden"
            animate="visible"
            sx={{
              fontSize: { xs: '1.1rem', md: '3rem' },
              lineHeight: '1.6em',
              overflow: 'hidden',
              mb: { xs: 1, md: 0 },
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {scrambledText}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontFamily: 'Orbitron',
              color: 'black',
              fontWeight: 600,
              textAlign: 'center',
              mb: { xs: 1, md: 0 },
            }}
            component={motion.div}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.7, ease: 'easeIn' }}
          >
            we love to give you comfort
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
