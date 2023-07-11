import React from "react";
import CreateArticleForm from "../../components/CreateArticleForm/CreateArticleForm";
import AdminArticles from "../../components/AdminArticles/AdminArticles";

const Admin = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <CreateArticleForm />
        <AdminArticles />
      </div>
    </>
  );
};

export default Admin;
