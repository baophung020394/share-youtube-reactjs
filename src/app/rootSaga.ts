import { all } from "@redux-saga/core/effects";
import dashboardSaga from "features/dashboard/dashboardSaga";

export default function* rootSaga() {
  yield all([dashboardSaga()])
}
