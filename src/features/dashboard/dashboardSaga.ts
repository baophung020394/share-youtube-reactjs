import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { dashboardActions, RankingByCity } from './dashboardSlice';

function* fetchStatistics() {
  // Khi sử dụng all thì tất cả hàm bên trong chạy song song với nhau
  // Nếu các hàm bên trong là non-blocking thì hàm all sẽ là non-blocking và ngược lại
  // Nếu 1 trong cách àm có 1 hàm blocking thì all sẽ là blocking
  const responseList: Array<ListResponse<Student>> = yield all([
    // gte: lớn hơn hoặc bằng
    // lte: nhỏ hơn hoặc bằng
    call(studentApi.getAll, { _page: 1, _limit: 5, gender: 'male' }),
    call(studentApi.getAll, { _page: 1, _limit: 5, gender: 'female' }),
    call(studentApi.getAll, { _page: 1, _limit: 5, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 5, mark_lte: 5 }),
  ]);
  console.log('responseList', responseList);
  const statisticsList = responseList.map((x) => x.pagination._totalRows);
  console.log('statisticsList', statisticsList);
  // dòng dưới là đặt tên property cho 4 kết quả trả về của statisticList
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticsList;
  yield put(
    dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount })
  );
}

function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  });
  yield put(dashboardActions.setHighestStudentList(data));
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  });
  yield put(dashboardActions.setLowestStudentList(data));
}

function* fetchRankingByCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

  // Fetch ranking per city
  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: 'mark',
      _order: 'desc',
      city: x.code,
    })
  );
  console.log('callList', callList);
  const responseList: Array<ListResponse<Student>> = yield all(callList);
  console.log('responseList', responseList);
  const rankingByCityList: Array<RankingByCity> = responseList.map((x, idx) => ({
    cityId: cityList[idx].code,
    cityName: cityList[idx].name,
    rankingList: x.data,
  }));
  console.log('rankingByCityList', rankingByCityList);
  // update state
  yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

function* fetchDashboardData() {
  // Cho 4 hàm fetch data chạy cùng 1 lúc
  // Hàm nào res về trước thì show trước
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);

    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    console.log('Failed to fetch dashboad data', error);
    yield put(dashboardActions.fetchDataFailed());
  }
}

export default function* dashboardSaga() {
  console.log(dashboardActions.fetchData.type);
  // takeLatest chạy 1 saga mới nhất khi nhận được dispatch từ params 1 của hàm
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
