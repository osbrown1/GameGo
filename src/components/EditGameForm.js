import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditGameForm (props) {
  const { game } = props;
  function handleEditGameFormSubmission(event) {
    event.preventDefault();
    props.onEditGame({
      names: event.target.names.value,
      console: event.target.console.value,
      rating: event.target.rating.value,
      id: game.id});
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditGameFormSubmission}
        buttonText="Update Game" />
    </React.Fragment>
  );
}

EditGameForm.propTypes = {
  game: PropTypes.object, 
  onEditGame: PropTypes.func
};

export default EditGameForm;