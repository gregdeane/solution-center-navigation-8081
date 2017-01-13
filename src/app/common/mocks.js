/*
 NOTE:

 All the content from this file is temporal and will be removed after the development phase
 */

export const MOCKED_ENVIRONMENT = {
  NAME: 'LOCAL',
  URL: 'https://sc-development.norris.zalan.do',
  DOMAIN: '.zalan.do',
  PORT: '',
  USER_SERVICE: 'https://um-development.norris.zalan.do',
  TOKEN_SERVICE: 'https://tm-development.norris.zalan.do',
  MERCHANT_SERVICE: 'https://merchant-development.norris.zalan.do',
  GOODDATA_SERVICE: 'https://gooddata-development.norris.zalan.do',
  MODULE_SERVICE: 'https://ms-development.norris.zalan.do',
  USER_SERVICE_NEW: 'https://us2-development.norris.zalan.do'
};

export const USER_1 = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNDBlMGYyMi04YmI0LTRkNmEtYTU0Mi04ZDUwOTc4MzY0YzciLCJleHAiOjE0ODUyNzE4MDUsImJ1c2luZXNzUGFydG5lcnMiOlsiNjA4ODdmNDctZmU0OS00Y2I3LTgwMDgtYmI3ODA4OWQwNDVhIiwiOTczZjEwMGUtNzA4OC00NWM5LWJmOGEtMzllNDQzYWM3YmI1Il0sInBlcm1pc3Npb25zIjpbImFwcDEud3JpdGUiLCJhcHAyLnJlYWQiLCJhcHAxLnJlYWQiXX0.HJbrG9VrPmRcUD688jOKEaSRSbyogeKAZzhk7OOZnOY",
  "id": "340e0f22-8bb4-4d6a-a542-8d50978364c7",
  "firstName": "user1",
  "lastName": "user1",
  "email": "user@zalan.do",
  "password": "string",
  "roles": {
    "973f100e-7088-45c9-bf8a-39e443ac7bb5": [
      "app1.admin"
    ],
    "60887f47-fe49-4cb7-8008-bb78089d045a": [
      "app2.viewer"
    ]
  }
};

export const USER_2 = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4YmZlNTUxMS1mYWQ2LTRlZGItODQ3Yy00ODg4NWZlNjYzN2YiLCJleHAiOjE0ODUyNzE4NDcsImJ1c2luZXNzUGFydG5lcnMiOlsiOTczZjEwMGUtNzA4OC00NWM5LWJmOGEtMzllNDQzYWM3YmI1Il0sInBlcm1pc3Npb25zIjpbImFwcDEud3JpdGUiLCJhcHAyLnJlYWQiLCJhcHAxLnJlYWQiXX0.edBhEBLwHH1LU16bW9q_hsav7CPd3LFKS9CCSV3GEi0",
  "id": "8bfe5511-fad6-4edb-847c-48885fe6637f",
  "firstName": "user2",
  "lastName": "user2",
  "email": "user2@zalan.do",
  "password": "string",
  "roles": {
    "973f100e-7088-45c9-bf8a-39e443ac7bb5": [
      "app1.admin",
      "app2.viewer"
    ]
  }
};

export const USER_3 = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YzlhMTJiYy03NWNkLTQwOGItYTMyNS1lMmY0ZjVjNTZjZjgiLCJleHAiOjE0ODUyNzE4ODEsImJ1c2luZXNzUGFydG5lcnMiOlsiOTczZjEwMGUtNzA4OC00NWM5LWJmOGEtMzllNDQzYWM3YmI1Il0sInBlcm1pc3Npb25zIjpbImFwcDEud3JpdGUiLCJhcHAxLnJlYWQiXX0.sRjQ4k5_cPqf99-L8RxHOSXJXeso5MYMQTBM_q8AAtw",
  "id": "5c9a12bc-75cd-408b-a325-e2f4f5c56cf8",
  "firstName": "user3",
  "lastName": "user3",
  "email": "user3@zalan.do",
  "password": "string",
  "roles": {
    "973f100e-7088-45c9-bf8a-39e443ac7bb5": [
      "app1.admin"
    ]
  }
};

export const USER_4 = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMzljM2U4MC1jZmY0LTQyZjAtOTQ4My1iZjc2NjA1YTY4YjgiLCJleHAiOjE0ODUyNzE4OTUsImJ1c2luZXNzUGFydG5lcnMiOlsiNjA4ODdmNDctZmU0OS00Y2I3LTgwMDgtYmI3ODA4OWQwNDVhIiwiOTczZjEwMGUtNzA4OC00NWM5LWJmOGEtMzllNDQzYWM3YmI1Il0sInBlcm1pc3Npb25zIjpbImFwcDIucmVhZCIsImFwcDMucmVhZCIsImFwcDEud3JpdGUiLCJhcHAxLnJlYWQiLCJhcHAzLndyaXRlIl19.9JlL5NRtIL61CdFUIE73z95DVqT1O_exBcCPXEzHKGk",
  "id": "a39c3e80-cff4-42f0-9483-bf76605a68b8",
  "firstName": "user4",
  "lastName": "user4",
  "email": "user4@zalan.do",
  "password": "string",
  "roles": {
    "973f100e-7088-45c9-bf8a-39e443ac7bb5": [
      "app1.admin",
      "app2.viewer"
    ],
    "60887f47-fe49-4cb7-8008-bb78089d045a": [
      "app3.admin"
    ]

  }
};

export const USER_5 = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmODdlZGY0ZS1hZjgxLTRmOWYtYTk4Zi05ODIwNTkyMDFjZDAiLCJleHAiOjE0ODUyNzE5MTAsImJ1c2luZXNzUGFydG5lcnMiOlsiNjA4ODdmNDctZmU0OS00Y2I3LTgwMDgtYmI3ODA4OWQwNDVhIiwiOTczZjEwMGUtNzA4OC00NWM5LWJmOGEtMzllNDQzYWM3YmI1Il0sInBlcm1pc3Npb25zIjpbImFwcDEud3JpdGUiLCJhcHAyLnJlYWQiLCJhcHAxLnJlYWQiXX0.ZrZOGGk0hiYzQf57W4zE39PsVv6UhCBpNsu4ERuGXEU",
  "id": "f87edf4e-af81-4f9f-a98f-982059201cd0",
  "firstName": "user5",
  "lastName": "user5",
  "email": "user5@zalan.do",
  "password": "string",
  "roles": {
    "60887f47-fe49-4cb7-8008-bb78089d045a": [
      "app1.admin",
      "app2.viewer"
    ],
    "973f100e-7088-45c9-bf8a-39e443ac7bb5": [
      "app1.viewer"
    ]
  }
};

