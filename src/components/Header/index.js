import React from 'react';
import './styles.css';

export default function Header({blacked}) {
  return (
    <header className={blacked ? 'blacked' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" />
        </a>
      </div>

      <div className="header--user">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
        </a>
      </div>
    </header>
  );
}