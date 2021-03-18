export const ERRORS: Record<string, Record<string, string>> = {
  email: {
    maxLength: 'Email too long',
    minLength: 'Email too short',
    pattern: 'Invalid email entered',
    required: 'Email cannot be blank',
  },
};

export type ErrorKey = keyof typeof ERRORS;
