import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import hero from '../assets/hero.jpg';
import {twitarrPrimary} from '../theme';
import {useScreenFocus} from '../useScreenFocus';

export const HomeScreen = () => {
  const headingRef = useScreenFocus();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 8,
        textAlign: 'center',
        color: 'white',
        backgroundColor: twitarrPrimary,
        backgroundImage: `linear-gradient(rgba(6, 57, 83, 0.72), rgba(6, 57, 83, 0.72)), url(${hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <Typography
        ref={headingRef}
        tabIndex={-1}
        variant="h1"
        sx={{fontSize: {xs: '2.75rem', sm: '4.5rem'}, fontWeight: 700, mb: 5, outline: 'none'}}>
        Welcome to Twitarr
      </Typography>
      <Button
        href="#/choose"
        variant="contained"
        sx={{
          backgroundImage: 'linear-gradient(to bottom right, #ff7f00, #f05238)',
          color: 'white',
          '&:hover': {backgroundImage: 'none', bgcolor: '#ff7f00'},
          fontSize: {xs: '1.5rem', sm: '1.75rem'},
          fontWeight: 500,
          borderRadius: 2,
          px: {xs: 5, sm: 8},
          py: 1.5,
        }}>
        Get Started
      </Button>
    </Box>
  );
};
