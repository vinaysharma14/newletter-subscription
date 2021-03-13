export const MESSAGES = {
  tryAgain: 'Try again',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing',
  emailMaxLenErr: 'Email too long',
  emailMinLenErr: 'Email too short',
  emailPatternErr: 'Invalid email entered',
  emailRequiredErr: 'Email cannot be blank',
  emailPlaceholder: 'Enter your email here',
  subToNewsletter: 'Subscribe to our newsletter',
  stayUptoDate: 'Stay upto date with our latest new and products.',
  facingTechnicalIssues: 'We are facing some technical issues at the moment. Please try again later.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
