import React from "react";
import { Navigate } from "react-router";
const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/LogIn" replace={true} />;
  }
  return <div>마이페이지</div>;
};

export default MyPage;
