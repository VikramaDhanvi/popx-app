import React from 'react';

const SignInScreen = () => {
  return (
    <>
      {/* Bootstrap 3.3.7 CDN */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />

      {/* Inline styles for floating inputs */}
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
          font-size: 16px;       /* Increased label font size */
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

              <form>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control input-lg"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control input-lg"
                    placeholder="Enter password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block"
                  disabled
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
