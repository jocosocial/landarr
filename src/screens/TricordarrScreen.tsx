import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {type ReactNode} from 'react';

import {appStoreUrl, googlePlayUrl} from '../links';
import {Page} from './Page';
import {StepList} from './StepList';
import {WhatCanIDoLink} from './WhatCanIDoLink';

const steps: ReactNode[] = [
  'Used Tricordarr on an earlier cruise? Delete the old app first.',
  'Install Tricordarr and open it.',
  <>
    Follow the setup screens. When asked, choose <strong>On Land</strong> or{' '}
    <Box component="strong" sx={{whiteSpace: 'nowrap'}}>
      Pre-Registration
    </Box>
    .
  </>,
  <>
    If you see a server setting, make sure it says <strong>Start</strong>.
  </>,
  <>
    Choose <strong>Create Account</strong>. Enter your registration code, then pick a username and password. You'll need
    them again on the ship.
  </>,
  "Write down or take a screenshot of your recovery key. You'll only see it once.",
];

export const TricordarrScreen = () => (
  <Page title="Get the Tricordarr app" backHref="#/choose">
    <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{mb: 4}}>
      <Button
        href={appStoreUrl}
        target="_blank"
        rel="noopener"
        variant="contained"
        size="large"
        fullWidth
        startIcon={<AppleIcon />}>
        App Store
      </Button>
      <Button
        href={googlePlayUrl}
        target="_blank"
        rel="noopener"
        variant="contained"
        size="large"
        fullWidth
        startIcon={<AndroidIcon />}>
        Google Play
      </Button>
    </Stack>
    <StepList steps={steps} />
    <WhatCanIDoLink />
  </Page>
);
