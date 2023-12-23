import React, { useState, useEffect } from "react";
import "./UserList.css";
import listUsersInView from "../utils/listUsersInView";
import { getColumnData } from "../utils/utils";
import { TABLE_HEADERS, USER_LIST, GENERIC_FORM_STATE } from '../utils/constants';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import Button from './shared/Button/Button';
import Table from "./shared/Table/Table";

export const UserList = () => {
  // TODO: Create a Modal component with inputs for position and screen size (screen size should default to actual window width and height but be editable).
  // CTA in Modal should close modal, call listUsersInView with updated values, and update usersInView
  // Add a list of the users in view in the render statement below
  
  const [usersInView, setUsersInView] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [formState, setFormState] = useState({...GENERIC_FORM_STATE});
  const [formErrors, setFormErrors] = useState({});

  const handleFormUpdate = (location, value) => {
    // an empty string is still considered a value. When going from empty string to a value it will save it as a string -> Ex: '888'
    // You cannot save every value that comes in as a number because it will automatically convert '' to 0. This gives the user a bad experience
    const num = typeof value === 'string' && value.length > 0 ? +value : '';
    let newFormState = num;
    
    if (typeof value === Number) {
      newFormState = value;
    }
    setFormState(form => ({...form, [location]: newFormState}));
  };
  
  const getCurrentScreenSize = () => {
    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    return {
      screenWidth,
      screenHeight
    };
  }
  
  useEffect(() => {
    // once modal is open, set the screen size inputs as the current size by default
    if (toggleModal) {
      const currentScreenSize = getCurrentScreenSize();
      
      setFormState(form => ({...GENERIC_FORM_STATE, ...currentScreenSize}));
    } else {
      return;
    }
  }, [toggleModal]);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          The following Users are currently visible based on position and screen size.
        </Typography>
      </Box>
      <Button
        text="User List"
        type="primary"
        click={e => {
          e.preventDefault();
          setToggleModal(true);
        }}
      />
      {usersInView.length ? (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            These are the current users within view:
          </Typography>
          <Table
            headers={Object.values(TABLE_HEADERS)}
            columns={getColumnData(TABLE_HEADERS, usersInView)}
          />
        </Box>
        ) : (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      )}
      
      <Dialog
        open={toggleModal}
        onClose={() => setToggleModal(false)}
      >
        <DialogTitle>
          Input a number for position and screen size 
        </DialogTitle>
        <DialogContent>
          <form className="modal-form">
            <div className="modal-section">
              <Typography variant="subtitle1" gutterBottom>
                Position of the avatar
              </Typography>
              <label htmlFor="positionX" className="required">
                Position X   
              </label>
              <input 
                id="positionX" 
                type="number" 
                pattern="[0-9]"
                min="0" 
                value={formState.positionX} 
                required
                className={formErrors.positionX}
                onChange={e => {
                  e.preventDefault();
                  
                  
                  handleFormUpdate('positionX', e.target.value);
                }}
              />
              <label htmlFor="positionY" className="required">
                Position Y   
              </label>
              <input 
                id="positionY" 
                type="number" 
                pattern="[0-9]"
                min="0" 
                value={formState.positionY}
                required
                className={formErrors.positionY}
                onChange={e => {
                  e.preventDefault();
                  
                  handleFormUpdate('positionY', e.target.value);
                }}
              />
            </div>
            
            <div className="modal-section">
              <Typography variant="subtitle1" gutterBottom>
                Screen Size
              </Typography>
              <label htmlFor="screenWidth" className="required">
                Screen Width
              </label>
              <input 
                id="screenWidth" 
                type="number" 
                pattern="[0-9]"
                min="0" 
                value={formState.screenWidth}
                required
                className={formErrors.screenWidth}
                onChange={e => {
                  e.preventDefault();
                  
                  handleFormUpdate('screenWidth', e.target.value);
                }}  
              />
              <label htmlFor="screenHeight" className="required">
                Screen Height 
              </label>
              <input 
                id="screenHeight" 
                type="number" 
                pattern="[0-9]"
                min="0" 
                value={formState.screenHeight}
                required
                className={formErrors.screenHeight}
                onChange={e => {
                  e.preventDefault();
                  
                  handleFormUpdate('screenHeight', e.target.value);
                }}
              />
            </div>
            
            <div className="modal-btns">
              <Button 
                text="Submit"
                type="primary"
                click={e => {
                  e.preventDefault();
                  
                  const { positionX, positionY, screenWidth, screenHeight } = formState;
                  let isValid = true;
                  
                  // Check if there are any empty strings in our form fields. If there are then add them to our error state
                  for (let field in formState) {
                    const hasValue = formState[field].toString().length;
                    if (!hasValue) {
                      isValid = false;
                      setFormErrors(errors => ({...errors, [field]: 'error'}))
                    }
                    if (hasValue && formErrors[field]) {
                      setFormErrors(errors => {
                        let newErrors = {...errors};
                        delete newErrors[field];
                        return newErrors;
                      })
                    }
                  }
                  
                  // submit the form if all fields are valid
                  if (isValid) {
                    setUsersInView(listUsersInView(USER_LIST, positionX, positionY, screenWidth, screenHeight));
                    setToggleModal(false) 
                  }
                }}
              />
              <Button
                type="secondary" 
                text="Cancel" 
                click={e => {
                  e.preventDefault();
                  
                  setToggleModal(false);
                }}
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
