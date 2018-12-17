const inistate = {
  mylist: [],
  recommendations: []
};
const reducers = (state = inistate, action) => {
  switch (action.type) {
    case "GET":
      return { ...action.lists };
    case "REMOVE":
      return {
        mylist: state.mylist.filter(item => item.id !== action.item.id),
        recommendations: [...state.recommendations, action.item]
      };
    case "ADD":
      return {
        mylist: [...state.mylist, action.item],
        recommendations: state.recommendations.filter(
          item => item.id !== action.item.id
        )
      };
    default:
      return state;
  }
};
export default reducers;
