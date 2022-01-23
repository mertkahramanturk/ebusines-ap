import * as actionTypes from "./actionTypes";


export function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
  }