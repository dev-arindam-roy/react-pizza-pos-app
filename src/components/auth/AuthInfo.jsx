import React, { useEffect, useState } from "react";

const AuthInfo = ({ sendAuthInfo }) => {
  const [authInfo, setAuthInfo] = useState(null);
  useEffect(() => {
    setAuthInfo(sendAuthInfo);
  }, [sendAuthInfo]);
  return (
    <>
      <div className="auth-settings">
        <label className="auth-info">Hello, {authInfo?.name || ""}</label>
        <br />
        <span className="restaurant-name">
          {authInfo?.restaruntInfo?.name || ""}
        </span>
      </div>
    </>
  );
};

export default AuthInfo;
