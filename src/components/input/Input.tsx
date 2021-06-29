import React from 'react';
import style from './Input.module.css';

const Input: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
