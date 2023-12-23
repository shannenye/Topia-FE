import { getIsAvatarInView, getDistanceFromAvatar } from './utils';

export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  // function to generate list of users in view. This func gets imported directly into the component
  const usersInView = [];
  
  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  for (const user in users) {
    const { id, is_broadcaster, username, x: userPositionX, y: userPositionY} = users[user];
    const isAvatarInView = getIsAvatarInView(userPositionX, userPositionY, positionX, positionY, screenWidth, screenHeight);
    
    if (isAvatarInView) {
      const userData = { 
        id, 
        username, 
        isBroadcaster: is_broadcaster ? 'Yes' : 'No', 
        distance: getDistanceFromAvatar(userPositionX, userPositionY, positionX, positionY)
      };
      
      usersInView.push(userData);
    }
  }
  
  return usersInView.sort((user1, user2) => {
    if (user1.distance > user2.distance) return 1;
    if (user1.distance < user2.distance) return -1;
    return 0;
  });
}

