import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Game' />
          <br/>
          <br/>
        <input
          type='text'
          name='console'
          placeholder='Type of Console' />
          <br/>
          <br/>
        <textarea
          name='review'
          placeholder='Write a review of the game' />
          <br/>
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;