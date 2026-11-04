import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {getPreviousHash} from '../useHashRoute';
import {Page} from './Page';

const actions: {title: string; description: string}[] = [
  {
    title: 'User profile',
    description: 'Create your profile. You can add a picture or avatar, pronouns, contact info, a bio, and more.',
  },
  {
    title: 'Schedule',
    description:
      "If the schedule is out, follow events to add them to your daily planner. You'll get in-app notifications once on-board.",
  },
  {
    title: 'Performer bios',
    description: 'Read about the official guests and performers who will be on-board with us.',
  },
  {
    title: 'LFGs and personal events',
    description:
      "Create your own Looking For Group (LFG) events and private events ahead of time. No one else can see or join them until we're all on-board.",
  },
  {
    title: 'Favorite users (Tricordarr only)',
    description:
      "Add your friends' usernames to a quick access list. This also lets them call you on-board using KrakenTalk™, Twitarr's voice calling feature.",
  },
  {
    title: 'Help manual (Tricordarr only)',
    description: "Read about all the features you'll have in the app once we embark.",
  },
];

export const ActionsScreen = () => (
  <Page title="What can I do?" backHref={getPreviousHash() || '#/'}>
    <Typography sx={{mb: 4}}>Once you have an account, here's what you can do before you sail.</Typography>
    {actions.map(action => (
      <Box key={action.title} sx={{mb: 3}}>
        <Typography variant="h2" sx={{fontSize: '1.125rem', fontWeight: 600, mb: 0.5}}>
          {action.title}
        </Typography>
        <Typography>{action.description}</Typography>
      </Box>
    ))}
    <Typography variant="h2" sx={{fontSize: '1.375rem', fontWeight: 600, mt: 5, mb: 2}}>
      For shadow event organizers
    </Typography>
    <Typography sx={{mb: 2}}>
      You can create a performer profile linked to your shadow event, which may be shown with your event's information.
      It's separate from your user profile and isn't publicly linked to it.
    </Typography>
    <Typography sx={{mb: 2}}>
      You can do this once the schedule is out. Use the website or Tricordarr to open the Schedule and find your event.
      Select it, then press <strong>Set Organizer</strong> (or long-press in the app). Fill in as much or as little as
      you'd like, then press <strong>Submit</strong> or <strong>Save</strong>.
    </Typography>
    <Typography sx={{mb: 2}}>
      Hosting more than one shadow event? Press <strong>Set Organizer</strong> on each one to link it to your performer
      profile. You can only have one performer profile for all of your events.
    </Typography>
    <Typography>
      If you're a cruise guest performing with an official event, contact The Home Office or the Twitarr team about
      linking a performer profile to that event.
    </Typography>
  </Page>
);
