import React from 'react';
import style from './Message.module.css';
import avatar from '../../../assets/avatar.png';
import { StateItem } from '../../../App';

interface Props {
  mes: StateItem
}

/**
 *
 * Функциональная компонента
 *
 * @param {Props} props - объект, в котором есть:
 * объект mes: 1) сообщение
 *             2) временная метка
 *
 * @return {JSX.Element} - возвращает jsx разметку сообщения
 * */

const Message: React.FC<Props> = (props) => {
  const { mes } = props;
  console.log(mes);

  return (
    <div className={style.message}>
      <img src={avatar} alt="person" />
      <div>
        {mes.message.split('\n').map((string, i) => {
          return (
            <p key={i}>
              {string}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Message;
