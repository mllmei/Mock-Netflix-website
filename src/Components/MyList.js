import Filmimage from "./Film";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions.js";
const MyList = props => {
  const onClick = item => {
    props.remove(item);
    //props.dispatch({ type: "REMOVE", item });
  };
  const { myList } = props;
  return (
    <div>
      <h3>MyList</h3>
      <div className="flex-container">
        {myList.length === 0 ? (
          <p>None</p>
        ) : (
          myList.map(item => (
            <Filmimage
              {...item}
              button="Remove"
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
  return { myList: state.mylist };
};
const mapDispatchtoProps = dispatch => {
  return {
    remove: item => {
      dispatch(actions.Remove(item));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(MyList);
