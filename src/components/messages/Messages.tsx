import React from 'react';
import style from './Messages.module.css';
import { StateItem } from '../../App';
import Message from './message';

interface Props {
  state: Array<StateItem>
}

const Messages: React.FC<Props> = (props) => {
  const { state } = props;

  return (
    <div className={style.container}>
      {
        state && state.length > 0
        && (
          state.map((message, i) => <Message key={i} mes={message} />)
        )
      }
      {
        (!state || state.length) === 0
        && (
          <p className={style.noMessages}>
            There are no messages yet
          </p>
        )
      }
    </div>
  );
};

export default Messages;
