export const USER_LIST = {
  "user-1": {
    id: 1,
    is_broadcaster: false,
    username: "user1",
    x: 3500,
    y: 150,
  },
  "user-2": {
    id: 2,
    is_broadcaster: false,
    username: "user2",
    x: 0,
    y: 0,
  },
  "user-3": {
    id: 3,
    is_broadcaster: true,
    username: "user3",
    x: 400,
    y: 800,
  },
  "user-4": {
    id: 4,
    is_broadcaster: false,
    username: "user4",
    x: 1200,
    y: 2900,
  },
  "user-5": {
    id: 5,
    is_broadcaster: false,
    username: "user5",
    x: 1000,
    y: 2000,
  },
  "user-6": {
    id: 6,
    is_broadcaster: false,
    username: "user6",
    x: 1005,
    y: 2020,
  },
  "user-7": {
    id: 7,
    is_broadcaster: true,
    username: "user7",
    x: 1850,
    y: 1200,
  },
};

export const TABLE_HEADERS = { // key = corresponding column to map to, value = column name
  username: 'username',
  distance: 'distance (px)',
  isBroadcaster: 'broadcaster'
};

export const GENERIC_FORM_STATE = {
  positionX: 800, 
  positionY: 400, 
  screenWidth: 0, 
  screenHeight: 0
};

export const FORM_ERRORS = {
  required: 'Please fill out the required field.'
};
