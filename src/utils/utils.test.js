import { TABLE_HEADERS } from "./constants";
import { 
  isWithinRange, 
  getIsAvatarInView, 
  getDistanceFromAvatar,
  getColumnData 
} from "./utils";

describe("isWithinRange", () => {
  it("Should return true if the position is within the two values", () => {
    const inRange = isWithinRange(500, 300, 1000);
    expect(inRange).toEqual(true);
  });
  
  it("Should return false if the position is outside of the two values", () => {
    const inRange = isWithinRange(500, 700, 2000);
    expect(inRange).toEqual(false);
  })
});

describe("getIsAvatarInView", () => {
  it("Should return true if the avatar's position is within view", () => {
    const isAvatarInView1 = getIsAvatarInView(1200, 2900, 1500, 2500, 1000, 1000);
    const isAvatarInView2 = getIsAvatarInView(1000, 2000, 1500, 2500, 1000, 1000);
    const isAvatarInView3 = getIsAvatarInView(1005, 2020, 1500, 2500, 1000, 1000);
    
    expect(isAvatarInView1).toEqual(true);
    expect(isAvatarInView2).toEqual(true);
    expect(isAvatarInView3).toEqual(true);
  });
  
  it("Should return false if the avatar's position is out of view", () => {
    const isAvatarInView1 = getIsAvatarInView(0, 0, 1500, 2500, 1000, 1000);
    const isAvatarInView2 = getIsAvatarInView(3500, 150, 1500, 2500, 1000, 1000);
    const isAvatarInView3 = getIsAvatarInView(1850, 1200, 1500, 2500, 1000, 1000);
    
    expect(isAvatarInView1).toEqual(false);
    expect(isAvatarInView2).toEqual(false);
    expect(isAvatarInView3).toEqual(false);
  });
});

describe("getDistanceFromAvatar", () => {
  it("Should return the shortest distance between two (x, y) coordinates", () => {
    const distance1 = getDistanceFromAvatar(1200, 2900, 1500, 2500);
    const distance2 = getDistanceFromAvatar(1000, 2000, 1500, 2500);
    const distance3 = getDistanceFromAvatar(1005, 2020, 1500, 2500);
    
    expect(distance1).toEqual(500);
    expect(distance2).toEqual(707);
    expect(distance3).toEqual(690);
  });
});

describe("getColumnData", () => {
  it("Should return an empty array if nothing is passed in", () => {
    expect(getColumnData()).toEqual([]);
  });
  
  it("Should return formatted columns data", () => {
    const columns = [
      { distance: 500, id: 4, isBroadcaster: "No", username: "user4"},
      { distance: 690, id: 6, isBroadcaster: "No", username: "user6"},
      { distance: 707, id: 5, isBroadcaster: "No", username: "user5"},
    ]
    const columnData = getColumnData(TABLE_HEADERS, columns)
    const expected = [
      { id: 4, rowData: ['user4', 500, 'No'] },
      { id: 6, rowData: ['user6', 690, 'No'] },
      { id: 5, rowData: ['user5', 707, 'No'] },
    ]
    
    expect(columnData).toEqual(expected);
  });
});
