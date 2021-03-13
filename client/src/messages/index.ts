export const MESSAGES = {
  tryAgain: 'Try again',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing',
  emailMaxLenErr: 'Email too long',
  emailMinLenErr: 'Email too short',
  thankYou: 'Thank you for subscribing!',
  emailPatternErr: 'Invalid email entered',
  emailRequiredErr: 'Email cannot be blank',
  emailPlaceholder: 'Enter your email here',
  subToNewsletter: 'Subscribe to our newsletter',
  stayUptoDate: 'Stay upto date with our latest new and products.',
  subscribedSuccessfully: 'You have been successfully subscribed to our newsletter.',
  facingTechnicalIssues: 'We are facing some technical issues at the moment. Please try again later.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
