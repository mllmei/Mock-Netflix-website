//import axios from "axios";

export const Remove = item => {
  return { type: "REMOVE", item: item };
};
export const Add = item => {
  return { type: "ADD", item: item };
};
export const Get = lists => {
  return { type: "GET", lists: lists };
};
