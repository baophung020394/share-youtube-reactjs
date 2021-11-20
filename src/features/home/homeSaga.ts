import { PayloadAction } from '@reduxjs/toolkit';
import youtubeApi from 'api/youtubeApi';
import { ListParams, ListResponse, Youtube } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { youtubeActions } from './homeSlice';

function* fetchYoutubeList() {
  try {
    const response: ListResponse<Youtube> = yield call(youtubeApi.getAll);
    yield put(youtubeActions.fetchYoutubeListSuccess(response));
  } catch (error:any) {
    console.log('failed to fetch youtube list', error);
    yield put(youtubeActions.fetchYoutubeListFailed());
  }
}

export default function* youtubeSaga() {
  // watch fetch youtube action
  yield takeLatest(youtubeActions.fetchYoutubeList, fetchYoutubeList);
}
