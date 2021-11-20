import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

export function* handleIncrement(action: PayloadAction<number>) {
  console.log(incrementSaga.toString());
  console.log('waiting 1s');
  yield delay(1000);

  console.log('waiting done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log('counter Saga');

  yield takeEvery(incrementSaga.toString(), handleIncrement);
  // yield takeLatest(incrementSaga.toString(), handleIncrement);
}
