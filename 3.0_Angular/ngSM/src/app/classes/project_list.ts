import { Project } from './project';

export const PROJECTS: Project[] = [
  { id: 1, name: 'My Personal Website', date: 'February 2018', update: 'April 2019', url: 'https://github.com/seanpmyers/personalWebsite',
  description: [
    'I\'ve been developing my site since early 2018. I\'ve had several iterations since starting. I like to try out different web '
    + 'frameworks and libraries.'
  ], cssId: 'personalP'},
  { id: 2, name: 'auxCord', date: 'March 2018', update: 'March 2019', url: 'https://github.com/csteinmetz1/auxCord', description: [
    ' auxCord is a group project I helped create during Clemson University\'s first hackathon in 2018.'
    + ' Using Spotify and its API, the app takes two user\'s listening data and creates a new playlist with music both users would enjoy.'
    + ' It won the "Best Cloud Based Hack" award.'
  ],
  cssId: 'auxCordP'},
  { id: 3, name: 'Lyro', date: 'Jan 2019', update: 'May 2019', url: 'https://lyro.xyz', description: [
    'This is a project I am develping as my new domain hub for web projects I make. I will try to update this when I have more details.'
  ],
  cssId: 'lyroP'}
];
