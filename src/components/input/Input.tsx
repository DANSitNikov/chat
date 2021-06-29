import React, { Dispatch, SetStateAction, useState } from 'react';
import firebase from 'firebase';
import style from './Input.module.css';
import { StateItem } from '../../App';
import db from '../../firebase';

interface Props {
  setState: Dispatch<SetStateAction<StateItem[]>>,
  state: Array<StateItem>
}

const Input: React.FC<Props> = (props) => {
  const [message, setMessage] = useState<string>('');
  const { setState, state } = props;

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState([{ message, timestamp: firebase.firestore.FieldValue.serverTimestamp() }, ...state]);
    setMessage('');

    db.collection('messages').add({
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <div className={style.formInputWrapper}>
          <textarea
            className={style.formInput}
            name="input"
            id="input"
            placeholder="new message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          className={style.formSubmit}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Input;
