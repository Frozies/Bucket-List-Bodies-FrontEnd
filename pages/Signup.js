  import React, {
  useContext,
  useState,
  useEffect
} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import Card from '../components/common/Card';
import GradientButton from '../components/common/GradientButton';
import Hyperlink from '../components/common/Hyperlink';
import Label from '../components/common/Label';
import FormInput from '../components/Auth/FormInput';
import { AuthContext } from '../components/AuthContext';
import GradientBar from './../components/common/GradientBar';
import FormError from './../components/Auth/FormError';
import FormSuccess from './../components/Auth/FormSuccess';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required(
    'First name is required'
  ),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const SIGNUP = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      message
      userInfo {
        _id
        firstName
        lastName
        email
        role
        avatar
        bio
      }
      token
      expiresAt
    }
  }
`;

const ProcessSignup = ({ signupData }) => {
  const authContext = useContext(AuthContext);
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );

  useEffect(() => {
    const { signup } = signupData;
    authContext.setAuthState(signup);
    setRedirectOnLogin(true);
  }, [authContext, signupData]);

  return (
    <>{redirectOnLogin && <Redirect to="/dashboard" />}</>
  );
};

const Signup = () => {
  const [signup, { loading, error, data }] = useMutation(
    SIGNUP
  );

  return (
    <>
      {data && <ProcessSignup signupData={data} />}
      <section className="w-full sm:w-1/2 h-screen m-auto p-8 sm:pt-10">
        <GradientBar />
        <Card>
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
              <div>
                <div className="w-32 m-auto mb-6">
                  <img src={logo} alt="Logo" />
                </div>
                <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Sign up for an account
                </h2>
                <p className="text-gray-600 text-center">
                  Already have an account?{' '}
                  <Hyperlink to="login" text="Log in now" />
                </p>
              </div>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: ''
                }}
                onSubmit={values =>
                  signup({
                    variables: { ...values }
                  })
                }
                validationSchema={SignupSchema}
              >
                {() => (
                  <Form className="mt-8">
                    {data && (
                      <FormSuccess
                        text={data.signup.message}
                      />
                    )}
                    {error && (
                      <FormError text={error.message} />
                    )}
                    <input
                      type="hidden"
                      name="remember"
                      value="true"
                    />
                    <div>
                      <div className="flex">
                        <div className="mb-2 mr-2 w-1/2">
                          <div className="mb-1">
                            <Label text="First Name" />
                          </div>
                          <FormInput
                            ariaLabel="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="mb-2 ml-2 w-1/2">
                          <div className="mb-1">
                            <Label text="Last Name" />
                          </div>
                          <FormInput
                            ariaLabel="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="mb-1">
                          <Label text="Email address" />
                        </div>
                        <FormInput
                          ariaLabel="Email address"
                          name="email"
                          type="email"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <div className="mb-1">
                          <Label text="Password" />
                        </div>
                        <FormInput
                          ariaLabel="Password"
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <GradientButton
                        type="submit"
                        text="Sign Up"
                        loading={loading}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Signup;
