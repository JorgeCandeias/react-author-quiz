import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
    </div>
  );
}

export default AuthorQuiz;
