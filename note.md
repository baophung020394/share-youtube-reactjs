feature: /admin/dashboard
feature: /admin/students

auth / authentication
- login
- sign up / register
- forget password

CLICK LOGIN
- Call API to login
- Success -> redirect ADMIN

LOGIN
LOGOUT

authSaga
- if logged in, watch LOGOUT
- else watch LOGIn


LOGIN
- call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page

authSlice: cung cấp/định nghĩa actions/reduecers
authSaga: định nghĩa effect

# Solution Navigation ( di chuyển giữa các trang)
- Sử dụng chung 1 object history

- statistics: thống kê

# Các steps tạo 1 saga và slice

1. Tạo file Slice trong DashboardSlice
- Tạo createSlice
- Khai báo typescript kiểu dữ liệu
- Khai báo hàm gọi API, set state trong reducers
- Khai báo initialState ( state mặc định )
- Khai báo/Export báo Selectors
- Khai báo/Export Actions
- Khai báo/Export Reducers

2. Tạo file Saga trong DashboardSaga
- Export default 1 cái dashboardSaga quản lý các function saga con
các technical use:
connected-react-router
history@4.10.1
redux-saga
redux-toolkit

### Students

ROUTINGS
- /admin/students: listing
- /admin/students/add: add new student
- /admin/students/:studentId: update a student 

LISTING
- search by name
- filter by city
- sort by name, mark
- Pagination

student slice state:
- loading
- list
- filter {page:1, limit:10, ....}
- pagination


ADD/EDIT
- React Hook Form v7
- Yup