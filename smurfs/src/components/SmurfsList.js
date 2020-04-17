import React, { useEffect, useState } from "react";
import {connect} from "react-redux";

import {fetchSmurfs} from "../actions/smurfsActions";
import "./App.css";

const SmurfsList = props => {
  useEffect(() => {
    props.fetchSmurfs();
    // console.log("Fetch Smurfs: ", props.fetchSmurfs())
  }, [])

    return (
      <div className="SmurfList">}
          {props.data && props.data.map(item => (
            <div className="data-card" key={item.id}>
              <h4 className="smurf-name">{item.name}</h4>
              <p className="smurf-age">{item.age} years old</p>
              <p className="smurf-height">{item.height}</p>
            </div>
          ))}
      </div>
    );
};
          

  const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
      data: state.smurfsReducer.data
    };
  };

  export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList)