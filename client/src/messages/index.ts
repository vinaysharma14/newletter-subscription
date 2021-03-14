export const MESSAGES = {
  loading: 'Loading',
  tryAgain: 'Try again',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing',
  subscribers: 'Subscribers',
  emailMaxLenErr: 'Email too long',
  emailMinLenErr: 'Email too short',
  thankYou: 'Thank you for subscribing!',
  emailPatternErr: 'Invalid email entered',
  emailRequiredErr: 'Email cannot be blank',
  emailPlaceholder: 'Enter your email here',
  subToNewsletter: 'Subscribe to our newsletter',
  noSubscribers: 'Looks like no one has subscribed yet :(',
  stayUptoDate: 'Stay upto date with our latest new and products.',
  emailAlreadySubscribed: 'Email address has been already subscribed.',
  listOfSubscribers: 'List of users who have subscribed to your newsletter.',
  subscribedSuccessfully: 'You have been successfully subscribed to our newsletter.',
  facingTechnicalIssues: 'We are facing some technical issues at the moment. Please try again later.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
