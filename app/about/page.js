'use client';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);
const aboutContent =
  'At Hardfork Maintenance Inc., our diligent and skilled technicians provide efficient and prompt commercial building maintenance services. Our services include carpentry, masonry, light plumbing and light electrical and lighting services. Our market area covers greater North Carolina and Northern South Carolina. We strive to exceed client’s expectations and ensure that we professionally resolve clients’ issues. We are adequately staffed to ensure that we communicate status updates and progress with clients.  We place particular emphasis on proper troubleshooting in order to ensure that client’s resources are effectively deployed.';
const missionvision =
  'Our mission is to problem-solve clients’ building maintenance needs and deploy the most efficient resolutions.';
export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 0 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 800,
                aspectRatio: 70 / 45,
              }}
            >
              <Image
                src={'/image/hf1.PNG'}
                /* width={800} height={480} */ alt={''}
                fill
                sizes="(max-width:768px 100vw,800px)"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 3, bgcolor: '#ffc400' }}>
            <Box sx={{ display: 'grid', placeItems: 'left' }}>
              <Typography variant="h3" sx={{ fontWeight: 800, pb: 3 }}>
                About Us
              </Typography>{' '}
            </Box>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography variant="h2">
                Hardfork Maintenance is known to have passion for precision
              </Typography>
              <Box
                sx={{
                  width: '70px',
                  height: '2px',
                  bgcolor: 'black',
                  marginLeft: '0 auto',
                }}
              >
                <Divider />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                mt: { xs: 0, md: 2 },
                p: { xs: 3, md: 7 },
              }}
            >
              <Typography variant="body1" sx={{ fontFamily: 'Raleway' }}>
                {aboutContent}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'grid',
                placeItems: { xs: 'left', md: 'center' },

                pl: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: '#ffc400' }}
              >
                Mission/Vision
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                placeItems: { xs: 'left', md: 'center' },
                pl: { xs: 2, md: 2 },
                mb: 7,
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: 'Raleway' }}>
                {missionvision}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
