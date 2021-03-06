import React, { useEffect, useState } from 'react';
import Input from './components/input';
import Messages from './components/messages';
import style from './App.module.css';
import db from './firebase';

export interface StateItem {
  message: string,
  timestamp: any
}

/**
 *
 * Функциональная компонента (делает асинхронный запрос за данными)
 *
 * @return {JSX.Element} - возвращает jsx разметку всего приложения
 * */

const App: React.FC = React.memo(() => {
  const [state, setState] = useState<Array<StateItem>>([]);

  useEffect(() => {
    if (state.length === 0) {
      (async function () {
        /** Получение новых данных, если придет новое сообщение */
        await db.collection('messages').orderBy('timestamp', 'asc').onSnapshot((querySnapshot) => {
          const data: any = [];

          querySnapshot.forEach((message) => {
            const pushToData = message.data() as StateItem;
            data.push(pushToData);
          });

          setState(data.reverse());
        });
      }());
    }
  }, []);

  return (
    <div className={style.container}>
      <Input setState={setState} state={state} />
      <Messages state={state} />
    </div>
  );
});

export default App;
