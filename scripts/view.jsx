import React from 'react';
import '../styles/view.scss';

const View = ({
  name,
  code,
  phone,
  email,
  country,
  password,
  passwordConfirmation,
  onChange,
  onSubmit
}) => {
  return (
    <div className="View">
      <form onSubmit={onSubmit}>
        <div className="item">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
            focused="True"
            required
          />
        </div>
        <div className="item">
          <input
            type="number"
            className="input"
            name="code"
            value={code}
            placeholder="Code"
            onChange={onChange}
            required
          />
        </div>
        <div className="item">
          <input
            className="input"
            type="text"
            name="phone"
            value={phone}
            placeholder="Phone number"
            onChange={onChange}
            required
          />
        </div>
        <div className="item">
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={onChange}
            required
          />
        </div>
        <div className="item">
          <input
            className="input"
            type="text"
            name="country"
            value={country}
            placeholder="Select country"
            onChange={onChange}
            required
          />
        </div>
        <div className="item">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
            required
          />
        </div>
        <div className="item">
          <input
            className="input"
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password confirmation"
            onChange={onChange}
            required
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" required />
          <p htmlFor="checkbox">
            Yes, I'd like to recieve the very occasional email with information
            on new services and discounts
          </p>
        </div>

        <button type="submit">Create an account</button>
      </form>
      <div>
        Already have a 24Slides account? Click here to log in to your existing
        account and join a company team
      </div>
    </div>
  );
};

export default View;
