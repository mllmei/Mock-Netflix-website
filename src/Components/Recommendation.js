import Filmimage from "./Film";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions.js";
const Recommendation = props => {
  const onClick = item => {
    props.add(item);
    //props.dispatch({ type: "ADD", item });
  };
  const { recommendations } = props;

  return (
    <div>
      <h3>Recommendations</h3>
      <div className="flex-container">
        {recommendations.length === 0 ? (
          <p>None</p>
        ) : (
          recommendations.map(item => (
            <Filmimage
              {...item}
              button="Add"
              onClick={() => onClick(item)}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
const mapStatetoProps = state => {
  return { recommendations: state.recommendations };
};
const mapDispatchtoProps = dispatch => {
  return {
    add: item => {
      dispatch(actions.Add(item));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Recommendation);
