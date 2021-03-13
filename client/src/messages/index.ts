export const MESSAGES = {
  subscribe: 'Subscribe',
  emailMaxLenErr: 'Email too long',
  emailMinLenErr: 'Email too short',
  emailPatternErr: 'Invalid email entered',
  emailRequiredErr: 'Email cannot be blank',
  emailPlaceholder: 'Enter your email here',
  subToNewsletter: 'Subscribe to our newsletter',
  stayUptoDate: 'Stay upto date with our latest new and products.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
