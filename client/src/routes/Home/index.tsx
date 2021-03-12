import { FC, useMemo, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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
        case 'pattern':
          return 'invalidEmailEntered';

        case 'required':
        default:
          return 'emailBlankError';
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
              ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />

            {emailErr && <Text type="p" error text={emailErr} />}

            <Button type="submit" text="subscribe" onSubmit={handleSubmit(submitHandler)} />
          </form>
        </div>
      </div>
    </div>
  );
};
