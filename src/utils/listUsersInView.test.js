import { USER_LIST } from './constants';
import listUsersInView from './listUsersInView';

describe("listUsersInView", () => {
  it("Should return a list of filtered and sorted user data", () => {
    const listOfUsersInView1 = (listUsersInView(USER_LIST, 1500, 2500, 1000, 1000))
    const expected1 = [
      { id: 4, username: 'user4', isBroadcaster: 'No', distance: 500 },
      { id: 6, username: 'user6', isBroadcaster: 'No', distance: 690 },  
      { id: 5, username: 'user5', isBroadcaster: 'No', distance: 707 }
    ];
    
    const listOfUsersInView2 = (listUsersInView(USER_LIST, 800, 400, 1800, 1200))
    const expected2 = [
      { id: 3, username: 'user3', isBroadcaster: 'Yes', distance: 566 },
      { id: 2, username: 'user2', isBroadcaster: 'No', distance: 894 },  
    ];
    
    const listOfUsersInView3 = (listUsersInView(USER_LIST, 3000, 300, 1000, 1000))
    const expected3 = [
      { id: 1, username: 'user1', isBroadcaster: 'No', distance: 522 },
    ];

    expect(listOfUsersInView1).toHaveLength(3);
    expect(listOfUsersInView1).toEqual(expected1);
    expect(listOfUsersInView1[0].distance).toBeLessThan(listOfUsersInView1[2].distance);
    
    expect(listOfUsersInView2).toHaveLength(2);
    expect(listOfUsersInView2).toEqual(expected2);
    expect(listOfUsersInView2[0].distance).toBeLessThan(listOfUsersInView2[1].distance);
    
    expect(listOfUsersInView3).toHaveLength(1);
    expect(listOfUsersInView3).toEqual(expected3);
  });
});
