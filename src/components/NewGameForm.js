import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewGameForm(props) {
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewGameFormSubmission}
        buttonText="Add Game Review" />
    </React.Fragment>
  );

  function handleNewGameFormSubmission(event) {
    event.preventDefault();
    props.onNewGameCreation({
      name: event.target.name.value, 
      console: event.target.console.value, 
      rating: event.target.rating.value, 
      id: v4()
    });
  }
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func
};

export default NewGameForm;