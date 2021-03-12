export const MESSAGES = {
  subscribe: 'Subscribe',
  emailBlankError: 'Email cannot be blank',
  emailPlaceholder: 'Enter your email here',
  subToNewsletter: 'Subscribe to our Newsletter',
  stayUptoDate: 'Stay upto date with our latest new and products.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
