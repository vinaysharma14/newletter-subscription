import { FC, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useMessage } from 'hooks';
import { Text, Input } from 'components';

import './styles.css';

type FormValues = {
  email: string,
};

export const Home: FC = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = useCallback(() => {}, []);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text type="h1" text="subToNewsletter" />
        <Text type="p" text="stayUptoDate" />

        <div className="mt-5">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input ref={register({ required: true })} name="email" placeholder={useMessage('emailPlaceholder')} />
            {errors.email && <Text type="p" error text="emailBlankError" />}
          </form>
        </div>
      </div>
    </div>
  );
};
