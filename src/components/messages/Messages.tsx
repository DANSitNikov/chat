import React from 'react';
import avatar from '../../assets/avatar.png';
import style from './Messages.module.css';

const Messages: React.FC = () => {
  return (
    <div className={style.message}>
      <img src={avatar} alt="person" />
      <p>
        message
      </p>
    </div>
  );
};

export default Messages;
