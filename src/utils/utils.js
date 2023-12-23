export const isWithinRange = (avatar, lowerBound, higherBound) => {
  // this function determines if the range of the avatar is within bounds. 
  // Example: avatar position is at 500. Lower bound is 300 and higher bound is 1000. This returns TRUE, the avatar is within range because it falls between 300 and 1000
  return avatar >= lowerBound && avatar <= higherBound;
};
  
export const getIsAvatarInView = (userPositionX, userPositionY, positionX, positionY, screenWidth, screenHeight) => {
  /**
   * The positionX and positionY points are the center of the avatar and centered in our viewport. An avatar has a height of 125px and a width of 50px. If the userPositionX and userPositionY points are out of view a user can still be able to see a portion of a peer's avatar like an arm or the top of their head. We will still consider that peer avatar as in view.
   */
  const halfAvatarWidth = 50 / 2;
  const halfAvatarHeight = 125 / 2;
  
  // Calculate the limits to the left, right, top, and bottom of where an avatar can appear. 
  const leftBound = Math.max(0, positionX - (screenWidth / 2))
  const rightBound = +positionX + (screenWidth / 2);
  const topBound = Math.max(0, positionY - (screenHeight / 2)); 
  const bottomBound = +positionY + (screenHeight / 2);
  
  // Calculate the full width and height of the avatar on all sides
  const avatarLeft = userPositionX - halfAvatarWidth;
  const avatarRight = userPositionX + halfAvatarWidth;
  const avatarTop = userPositionY - halfAvatarHeight;
  const avatarBottom = userPositionY + halfAvatarHeight;
  
  const isAvatarWidthVisible = 
    isWithinRange(avatarLeft, leftBound, rightBound) ||
    isWithinRange(avatarRight, leftBound, rightBound)
    
  const isAvatarHeightVisible = 
    isWithinRange(avatarTop, topBound, bottomBound) ||
    isWithinRange(avatarBottom, topBound, bottomBound)
    
  if (isAvatarWidthVisible && isAvatarHeightVisible) {
    return true;
  }
  return false;
};
   
export const getDistanceFromAvatar = (userPositionX, userPositionY, positionX, positionY) => {
  // To get the shortest distance between two points we will use the pythagorean theorem
  const distanceX = Math.abs(userPositionX - positionX);
  const distanceY = Math.abs(userPositionY - positionY);
  
  return Math.round(Math.sqrt((distanceX**2) + (distanceY**2)));
}; 

export const getColumnData = (headers = [], columns = []) => {
  // function to format data to pass along to our reuable table component
  const columnData = [];
  
  columns.forEach(column => {
    const rowData = [];
    for (let header in headers) {
      rowData.push(column[header]);  
    }
    
    columnData.push({id: column.id, rowData})
  }) 
  
  return columnData;
};
  