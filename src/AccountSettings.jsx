import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AccountSettings = () => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <p style={{ padding: '2rem' }}>No user data found.</p>;
  }

  return (
    <>
      <style>{`
        .account-box {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
          max-width: 500px;
          margin: 0 auto;
        }

        .account-item {
          margin-bottom: 12px;
        }

        .account-label {
          font-weight: 600;
          color: #6c25ff;
          font-size: 14px;
        }

        .account-value {
          font-size: 15px;
        }
      `}</style>

      <div className="container bg-light" style={{ minHeight: '100vh', padding: '2rem' }}>
        <h4 className="fw-bold mb-4">Account Settings</h4>

        <div className="account-box">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Profile"
              style={{ width: '70px', height: '70px', borderRadius: '50%', marginRight: '1rem' }}
            />
            <div>
              <p className="mb-0 fw-bold">{userData.fullName}</p>
              <p className="mb-0">{userData.email}</p>
            </div>
          </div>

          <div className="account-item">
            <div className="account-label">Phone Number</div>
            <div className="account-value">{userData.phone}</div>
          </div>

          <div className="account-item">
            <div className="account-label">Password</div>
            <div className="account-value">{userData.password}</div>
          </div>

          <div className="account-item">
            <div className="account-label">Company Name</div>
            <div className="account-value">{userData.company || '-'}</div>
          </div>

          <div className="account-item">
            <div className="account-label">Are you an Agency?</div>
            <div className="account-value">{userData.agency}</div>
          </div>

          <div className="account-item mt-3">
            <div className="account-label">Bio</div>
            <div className="account-value">
              Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
