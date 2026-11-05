import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import {apiDocsUrl, githubUrl} from './links';
import {twitarrPrimary} from './theme';

export const Header = () => (
  <AppBar position="static" elevation={0} enableColorOnDark sx={{bgcolor: twitarrPrimary, color: 'white'}}>
    <Toolbar sx={{justifyContent: 'flex-end', gap: 1}}>
      <Button href={apiDocsUrl} target="_blank" rel="noopener" sx={{color: 'inherit', px: 1.5}}>
        API Docs
      </Button>
      <IconButton
        href={githubUrl}
        target="_blank"
        rel="noopener"
        color="inherit"
        edge="end"
        aria-label="Twitarr on GitHub"
        sx={{width: 48, height: 48}}>
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);
