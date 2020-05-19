import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';


const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          handleChange={handleChange}
          value={displayName}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
