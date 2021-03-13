import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';

import { pattern } from 'utils';
import { useMessage } from 'hooks';
import { Text, Input, Button } from 'components';

import { RootState } from 'store';
import { subscribeToNewsletter } from 'store/features';

import './styles.css';

type FormValues = {
  email: string,
};

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const {
    subscribing,
    subscriptionError,
  } = useSelector(({ subscriptionReducer }: RootState) => subscriptionReducer);

  const submitHandler: SubmitHandler<FormValues> = useCallback(
    () => dispatch(subscribeToNewsletter()),
    [dispatch],
  );

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text type="h1" text="subToNewsletter" />
        <Text type="p" text="stayUptoDate" />

        <div className="mt-5">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input
              name="email"
              error={errors.email?.type}
              placeholder={useMessage('emailPlaceholder')}
              ref={register({
                pattern,
                minLength: 10,
                maxLength: 30,
                required: true,
              })}
            />

            <Button
              type="submit"
              disabled={subscribing}
              onSubmit={handleSubmit(submitHandler)}
              text={subscribing ? 'subscribing' : 'subscribe'}
            />

            {subscriptionError && <Text error type="p" text={subscriptionError} />}
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
