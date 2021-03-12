import { useMemo } from 'react';
import { MessageKey, MESSAGES } from 'messages';

export const useMessage = (text: MessageKey):
typeof MESSAGES[MessageKey] => useMemo(() => MESSAGES[text], [text]);
