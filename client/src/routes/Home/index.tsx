import { FC, useMemo, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { pattern } from 'utils';
import { useMessage } from 'hooks';
import { MessageKey } from 'messages';
import { Text, Input, Button } from 'components';

import './styles.css';

type FormValues = {
  email: string,
};

export const Home: FC = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = useCallback(() => {}, []);

  const emailErr = useMemo((): MessageKey | undefined => {
    if (errors.email) {
      switch (errors.email.type) {
        case 'maxLength':
          return 'emailMaxLenErr';

        case 'minLength':
          return 'emailMinLenErr';

        case 'pattern':
          return 'emailPatternErr';

        case 'required':
        default:
          return 'emailRequiredErr';
      }
    }

    return undefined;
  }, [errors]);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text type="h1" text="subToNewsletter" />
        <Text type="p" text="stayUptoDate" />

        <div className="mt-5">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input
              name="email"
              placeholder={useMessage('emailPlaceholder')}
              ref={register({
                pattern,
                minLength: 10,
                maxLength: 30,
                required: true,
              })}
            />

            {emailErr && <Text type="p" error text={emailErr} />}

            <Button type="submit" text="subscribe" onSubmit={handleSubmit(submitHandler)} />
          </form>
        </div>
      </div>
    </div>
  );
};

// TODO:
// mock API integration
// API success component
// API error handling with retry
