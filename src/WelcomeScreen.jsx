import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />

      <style>{`
        .welcome-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100vh;
          padding: 2rem;
          background-color: #f8f9fa;
        }

        .welcome-content {
          max-width: 400px;
          margin: 0 auto;
          text-align: left;
        }

        .btn-create {
          background-color: rgb(108, 37, 255);
          color: white;
          font-weight: bold;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          padding: 12px;
        }

        .btn-login {
          background-color: rgb(206, 186, 251);
          color: black;
          font-weight: bold;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          padding: 12px;
        }

        .btn-block {
          width: 100%;
          margin-top: 10px;
        }
      `}</style>

      <div className="welcome-container">
        <div className="welcome-content">
          <h2 className="fw-bold">Welcome to PopX</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button className="btn-create btn btn-block" onClick={() => navigate('/create-account')}>
            Create Account
          </button>
          <button className="btn-login btn btn-block" onClick={() => navigate('/signin')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
