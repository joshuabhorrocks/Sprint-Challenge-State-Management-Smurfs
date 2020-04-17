import React, { useState } from "react";
import { connect } from "react-redux";

import { sendSmurfs } from "../actions/smurfsActions";

const SmurfsForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const changeHandler = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value, [e.target.age]: e.target.age, [e.target.height]: e.target.height})
    };

    const submitForm = e => {
        
    };

    return (
        <div className="form">
            <form onSubmit={submitForm}>
                <label className="name-input">
                    Name:
                    <input name="name" id="" type="text" onChange={changeHandler} value={newSmurf.name} />
                </label>
                <label className="age-input">
                    Age:
                    <input name="age" id="" type="text" onChange={changeHandler} value={newSmurf.age} />
                </label>
                <label className="height-input">
                    Height:
                    <input name="height" id="" type="text" onChange={changeHandler} value={newSmurf.height} />
                </label>
                {console.log("Submitting new: ", props)}
                <button className="submit-button" type="submit" onClick={() => props.sendSmurfs(newSmurf)}>
                    Add Your Smurf!
                </button>
            </form>
        </div>
    )
};


const mapStateToProps = state => {
    return {
      isAdding: state.isAdding
    };
  };
  
  export default connect(mapStateToProps,{sendSmurfs})(SmurfsForm);