import { Box, Grid, Typography } from '@mui/material';
export default function Footer() {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="body1" paddingTop={2} textAlign="center">
            &copy; &nbsp; Hard Fork Maintenance inc
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
