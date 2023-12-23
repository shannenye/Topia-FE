# Topia Frontend Coding Challenge

### Premise

Topia is a combination of several front-end technologies. There is a graphical canvas, a user interface, and a streaming system. All 3 interact to deliver a unique experience.

This test is designed to touch on the elements of all 3.

While topia runs on a user’s computer, peer avatars are added or removed from the canvas depending on whether or not the peer avatar falls within the range of the user’s viewport. A user’s screen height and width determine how much of the Topia a user can see centered on their own avatar.

In this test, you will rewrite the central algorithm that runs in Topia to maintain which peer avatars are on canvas and which ones are not.

You will wrap the results of this algorithm in a user interface of your own design.

- At the root level of this project, in `App.js`, you are expected to present a button named `User List`.
- Pressing this button will launch a modal that will display a list of users that are on the visible screen centered on `x, y`
- The default values for the fields should be `x = 800; y = 400`
- `x, y` (the user’s current position) should be editable in the modal and as it changes it should update the results of the list.
- The list of users can be found in `/src/utils/constants.js`
- Upon opening the modal and when current position and screen size update state, run a utility located in `/src/utils/listUsersInView.js` called `listUsersInView`. This function should return an array of the users in view. `more details about the functionality of this utility are below`
- From this array, list the users in a table, sorted by distance to the center `x,y`
- Columns for the table should be: username, distance, and a visual indication whether this user is a broadcaster or not. For this, there is a field called `is_broadcaster` in the user object.
- Closing the modal should bring you back to our input fields and button which we can change to alter the list in the modal. We should also be able to alter the screen size to change the arguments to `listUsersInView`
- For purposes of this test and for use in `listUsersInView` assume the avatar height and width for each user is `height = 125px` and `width = 50px` and that the position of each user is the center point of the avatar

### User List Functionality

Your task is to complete the function `listUsersInView`. It has 5 arguments:

- `users` - a map of users to search through. Each user is indexed by the user’s ID. Each object of the indexed user contains an x, y, width and height.

- `positionX`, `positionY` - The X and Y coordinate of the user’s own avatar

- `screenWidth`, `screenHeight` - The width and height of the user’s screen

You are to use these arguments to determine whether or not a peer avatar in `users` is indeed in the user’s viewport of `screenWidth` width and `screenHeight` height centered at `positionX` and `positionY`

For each peer avatar that appears in the viewport, add the ID of that user to the array `usersInView` which is currently declared and empty at the top of the function `listUsersInView`.

### How to complete

Please submit this completed project to a new github repo. We can coordinate our own use and download of the completed code when you let us know you’re done!

To run this repository, run: `npm start` from the project directory at your terminal and test your progress at `http://localhost:3000/`. Please ensure `node` and `npm` are installed on your computer

##### Happy Coding!

### Shannen's Section

#### Notes
- The entire browser is responsive and should look the same across Chrome, Firefox, and Safari. Screen width and height can be adjusted to mobile as well, give it a try and take a look at the table and modal in different formats!
- All of the colors in this project have been taken directly from https://topia.io/ and saved as root variables so they can be reused and accessed from anywhere in the project. Button, hover, and table styles have also been taken from Topia for consistency
- A 'shared' file has been created to store micro components that can be re-used. This is to simulate a component library in a real development setting.

#### Checklist
- [x] Create a button that opens a modal
- [x] The modal must contain 2 inputs each for position and screen size
- [x] The inputs must contain numbers and are required fields
- [x] Defaults for position are x = 800 and y = 400
- [x] Defaults for screen width and height are the current window size
- [x] Submitting the modal should update the user list table with new values according to the new inputs
- [x] Create a table with header fields: username, distance, and broadcaster
- [x] Users in the table must be sorted according to closest distance
- [x] Add input contraints for fields to only be numbers
 
#### Testing
- Tests have been added for all functions
