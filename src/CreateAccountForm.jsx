import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const CreateAccountForm = () => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(form);
    navigate('/account');
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />

      <style>{`
        .form-label {
          font-size: 14px;
          color: #6c25ff;
          font-weight: 600;
        }

        .required-star {
          color: red;
          margin-left: 2px;
        }

        .form-control {
          border-radius: 8px;
          padding: 12px;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .create-btn {
          background-color: rgb(108, 37, 255);
          color: white;
          font-weight: bold;
          font-size: 16px;
          padding: 12px;
          border: none;
          border-radius: 6px;
          width: 100%;
          margin-top: 20px;
        }
      `}</style>

      <div className="container bg-light" style={{ padding: '2rem', minHeight: '100vh' }}>
        <div className="row justify-content-start">
          <div className="col-xs-12 col-sm-10 col-md-4" style={{ marginTop: '20px' }}>
            <h3 className="fw-bold text-start mb-4">Create your<br />PopX account</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label className="form-label">Full Name<span className="required-star">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Marry Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label">Phone number<span className="required-star">*</span></label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Marry Doe"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label">Email address<span className="required-star">*</span></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Marry Doe"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label">Password<span className="required-star">*</span></label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Marry Doe"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label">Company name</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Marry Doe"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3 mb-2">
                <label className="form-label">Are you an Agency?<span className="required-star">*</span></label>
                <div className="radio-group mt-1">
                  <label>
                    <input
                      type="radio"
                      name="agency"
                      value="Yes"
                      onChange={handleChange}
                      required
                    /> Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="agency"
                      value="No"
                      onChange={handleChange}
                      required
                    /> No
                  </label>
                </div>
              </div>

              <button type="submit" className="create-btn">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountForm;
