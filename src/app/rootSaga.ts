import { all } from "@redux-saga/core/effects";
import authSaga from "features/auth/authSaga";
import youtubeSaga from "features/home/homeSaga";

export default function* rootSaga() {
  yield all([authSaga(), youtubeSaga()])
}
