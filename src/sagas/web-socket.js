import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

const wsUri = 'wss://echo.websocket.org';
function worker() {
  return eventChannel(emitter => {
    const ws = new WebSocket(wsUri);
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'SOCKET_CONNECTED',
          payload: 'hello server'
        })
      );
    };
    ws.onerror = error => {
      console.log('WebSocket error ' + error);
      emitter(END);
    };
    ws.onmessage = e => {
      let msg = null;
      try {
        msg = JSON.parse(e.data);
      } catch (err) {
        console.error(`Error parsing : ${e.data}`);
      }
      if (msg) {
        const { payload, type } = msg;
        switch (type) {
          case 'CHAT_MSG':
            return emitter({ type: 'CHAT_MSG_RECEIVED', payload });
          default:
            return emitter({ type, payload });
        }
      }
    };
    // unsubscribe function
    return () => {
      console.log('Socket off');
      emitter(END);
    };
  });
}
export default function* watcher() {
  const channel = yield call(worker);
  while (true) {
    const action = yield take(channel);
    console.log(action);
    yield put(action);
  }
}
