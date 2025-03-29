import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const SignInScreen = () => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake name just for display (since login doesn't collect full name)
    setUserData({
      fullName: 'Signed In User',
      email: form.email,
      password: form.password,
    });

    navigate('/account');
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />

      <style>{`
        .form-group {
          position: relative;
          padding: 10px;
          border: 2px solid #ccc;
          margin: 10px 0;
          border-radius: 6px;
        }

        .form-group > label {
          position: absolute;
          top: -12px;
          left: 20px;
          background-color: white;
          padding: 0 5px;
          font-size: 16px;
          color: #6c25ff;
          font-weight: 600;
        }

        .form-group > input {
          font-size: 16px;
          border: none;
          box-shadow: none;
          background-color: transparent;
          padding: 12px 10px;
        }

        .form-control:focus {
          box-shadow: none;
        }
      `}</style>

      <div className="container bg-light" style={{ padding: '2rem', minHeight: '100vh' }}>
        <div className="row justify-content-start">
          <div className="col-xs-12 col-sm-10 col-md-4" style={{ marginTop: '20px' }}>
            <div>
              <h3 className="fw-bold text-start mb-2">
                Signin to your<br />PopX account
              </h3>
              <p className="text-muted text-start mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control input-lg"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-control input-lg"
                    placeholder="Enter password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInScreen;
