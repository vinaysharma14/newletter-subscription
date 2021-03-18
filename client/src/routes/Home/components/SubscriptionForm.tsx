import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';

import { emailRegex } from 'utils';
import { useMessage } from 'hooks';
import { Text, Input, Button } from 'components';

import { RootState } from 'store';
import { subscribeToNewsletter } from 'store/features';

type FormValues = {
  email: string,
};

export const SubscriptionForm: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const {
    subscribing,
    subscriptionError,
    submitButtonLabel,
  } = useSelector(({ subscriptionReducer }: RootState) => subscriptionReducer);

  const submitHandler: SubmitHandler<FormValues> = useCallback(
    ({ email }) => dispatch(subscribeToNewsletter(email)),
    [dispatch],
  );

  return (
    <>
      <Text type="h1" text="subToNewsletter" />
      <Text type="p" text="stayUptoDate" />

      <div className="mt-5">
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            name="email"
            error={errors.email?.type}
            placeholder={useMessage('emailPlaceholder')}
            ref={register({
              minLength: 10,
              maxLength: 30,
              required: true,
              pattern: emailRegex,
            })}
          />

          <Button
            type="submit"
            loading={subscribing}
            disabled={subscribing}
            text={submitButtonLabel}
            onSubmit={handleSubmit(submitHandler)}
          />

          {subscriptionError && <Text error type="p" text={subscriptionError} />}
        </form>
      </div>
    </>
  );
};
