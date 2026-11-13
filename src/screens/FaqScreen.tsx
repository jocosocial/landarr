import Typography from '@mui/material/Typography';

import {Page} from './Page';

const faqs = [
  {
    question: "What's a Twitarr?",
    answer:
      "Use it for group and individual messaging, forums & a public activity feed, impromptu gatherings, the event schedule, photos, karaoke & game library listings, and more - it's a great way to connect with all the cool things happening around you.",
  },
  {question: 'Do I need this?', answer: 'Nope! Completely optional.'},
  {question: 'Does it cost anything?', answer: 'Nope! Twitarr is freely available without a paid internet plan.'},
  {question: 'Does Twitarr work off-ship?', answer: 'Nope! Twitarr only works when connected to ship WiFi.'},
  {question: 'Can I use my old account?', answer: 'Nope! Accounts and content are new every year.'},
  {
    question: 'Do I need to install an app?',
    answer: 'Nope! Nearly everything works in the website. The apps add features and behave better on a crowded network.',
  },
];

export const FaqScreen = () => (
  <Page title="FAQ" backHref="#/">
    {faqs.map(({question, answer}) => (
      <section key={question}>
        <Typography variant="h2" sx={{fontSize: '1.25rem', fontWeight: 700, mt: 3, mb: 0.5}}>
          {question}
        </Typography>
        <Typography>{answer}</Typography>
      </section>
    ))}
  </Page>
);
