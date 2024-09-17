import React from "react";
import AdHeader from "../components/common/Header/AdHeader";
import Header from "../components/common/Header/header";
import { Helmet } from "react-helmet";
import { useAuth } from "../API/auth";
import Footer from "../components/common/Footer/footer";
import PagesBanner from "../components/Banner/PagesBanner";
import { Navigate } from "react-router-dom";
import "../components/Admin/adminLayout.css";

const Admin = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>Tahir Tourism | Admin</title>
      </Helmet>

      <Header />

      <PagesBanner title="Admin" />

      <AdHeader />

      <Footer />
    </>
  );
};

export default Admin;
