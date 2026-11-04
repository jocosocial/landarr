import AppleIcon from '@mui/icons-material/Apple';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {type ReactNode} from 'react';

import {krakenAppStoreUrl} from '../links';
import {Page} from './Page';
import {StepList} from './StepList';

const steps: ReactNode[] = [
  'Install The Kraken on your iPhone.',
  <>
    Sign up using the <Link href="#/web">website</Link> or the <Link href="#/tricordarr">Tricordarr app</Link>.
  </>,
  "Once you're on the ship, connect to the ship WiFi. Then open The Kraken and log in with your username and password.",
];

export const KrakenScreen = () => (
  <Page title="Get The Kraken app" backHref="#/choose">
    <Alert severity="info" sx={{mb: 3}}>
      You can't sign up with The Kraken before you sail, but you should still download it now so it's ready when you
      board.
    </Alert>
    <Button
      href={krakenAppStoreUrl}
      target="_blank"
      rel="noopener"
      variant="contained"
      size="large"
      fullWidth
      startIcon={<AppleIcon />}
      sx={{mb: 4}}>
      App Store
    </Button>
    <StepList steps={steps} />
  </Page>
);
