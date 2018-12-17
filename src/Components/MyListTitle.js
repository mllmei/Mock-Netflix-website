import React from "react";
import { connect } from "react-redux";
const MyListTitle = props => {
  const { myList } = props;
  return (
    <div>
      <h1 style={{ color: "red" }}>Titles</h1>
      <ul>
        {myList.length === 0 ? (
          <p>None</p>
        ) : (
          myList.map(item => <li key={item.id}>{item.title}</li>)
        )}
      </ul>
    </div>
  );
};
const mapStatetoProps = state => {
  return { myList: state.mylist };
};

export default connect(mapStatetoProps)(MyListTitle);
