import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import {type ReactNode} from 'react';

import {webSignUpUrl} from '../links';
import {Page} from './Page';
import {StepList} from './StepList';
import {WhatCanIDoLink} from './WhatCanIDoLink';

const steps: ReactNode[] = [
  'Open the Twitarr website using the button above. Any phone, tablet, or computer will work.',
  <>
    Choose <strong>Create Account</strong>.
  </>,
  'Read the rules and agree to them.',
  <>
    Enter your registration code, then pick a username and password. You'll need them again on the ship. Check the
    agreement box if you see one, then choose <strong>Create Account</strong>.
  </>,
  <>
    Write down or take a screenshot of your recovery key. You'll only see it once. Then choose <strong>I'm ready</strong>
    .
  </>,
];

export const WebScreen = () => (
  <Page title="Sign up on the website" backHref="#/choose">
    <Button
      href={webSignUpUrl}
      target="_blank"
      rel="noopener"
      variant="contained"
      size="large"
      fullWidth
      endIcon={<OpenInNewIcon />}
      sx={{mb: 4}}>
      Go to the Twitarr Preregistration Site
    </Button>
    <StepList steps={steps} />
    <WhatCanIDoLink />
  </Page>
);
