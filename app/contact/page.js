import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function Contact() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ mt: 3 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '100vw',
              aspectRatio: 120 / 45,
            }}
          >
            <Image
              src={'/image/hf6.PNG'}
              alt={''}
              fill
              sizes="(max-width:768px 100vw,800px)"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, pb: 3 }}>
              Contact Us
            </Typography>{' '}
          </Box>
          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: 'Raleway', color: '#ffc400', mb: 1 }}
            >
              Contact Information
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Raleway',
                mb: 1,
                p: 1,
                fontSize: { xs: '1rem', md: '1.5rem' },
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              href="mailto:fieldsupport@hardforkmaintenance.com"
              component="a"
            >
              fieldsupport@hardforkmaintenance.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Raleway',
                p: 1,
                mb: 1,
                fontWeight: 600,
              }}
            >
              Main:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                pb: 1,
                fontSize: { xs: '1rem', md: '1.3rem' },
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              href="tel:+1984-203-1778"
              component="a"
            >
              984-203-1778
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Raleway',
                p: 1,
                mb: 1,
                fontWeight: 600,
              }}
            >
              Field Support:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                pb: 1,
                fontSize: { xs: '1rem', md: '1.3rem' },
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              href="tel:+1919-268-6769"
              component="a"
            >
              919-268-6769
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Raleway',
                p: 1,
                mb: 1,
                fontWeight: 600,
              }}
            >
              Address:
            </Typography>
            <Typography
              variant="h6"
              sx={{ pb: 1, mb: 1, fontSize: { xs: '1rem', md: '1.3rem' } }}
            >
              2924 Rolesville Rd Wendell NC 27591
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
