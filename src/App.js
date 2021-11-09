import React from 'react';
import Layout from './core/Layout';

const App = () => {
  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
        <h1 className="p-5">Ultimate Authentication</h1>
        <h2>MERN Stack</h2>
        <hr />
        <p className="lead">
          Learn MERN stack web development by building production ready login register system with account activation, forgot password, reset password, login with facebook, login with google as well as ACL by implementing private and protected routes for authenticated user and users with the role of admin.
        </p>
      </div>
    </Layout>
  )
}

export default App;
