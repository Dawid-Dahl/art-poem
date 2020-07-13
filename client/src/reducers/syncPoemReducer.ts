import {ReduxArtPoem} from "../types/types";
import {sortArtPoemsByCollection, doesArtPoemBelongToUser} from "../utils/utils";
import {SyncPoemActionTypes} from "../actions/syncPoemAction";
import {welcomePoem, initPoem} from "../utils/defaultPoems";

export type SyncPoemReducerState = {
	renderedPoems: ReduxArtPoem[];
	poemSelected: ReduxArtPoem;
	error: null | Error;
};

const initialState: SyncPoemReducerState = {
	renderedPoems: [welcomePoem],
	poemSelected: initPoem,
	error: null,
};

export const syncPoemReducer = (
	state: SyncPoemReducerState = initialState,
	action: SyncPoemActionTypes
): SyncPoemReducerState => {
	switch (action.type) {
		case "RENDER_POEMS_FULFILLED":
			return {...state, renderedPoems: action.artPoems};
		case "RENDER_SOCIAL_FEED_FULFILLED":
			return {...state, renderedPoems: action.artPoemsFromCache};
		case "SELECT_POEM":
			return {...state, poemSelected: action.artPoem};
		case "DESELECT_POEM":
			return {...state, poemSelected: initPoem};
		case "GET_POEMS_BY_USER_AND_COLLECTION":
			return {
				...state,
				renderedPoems: sortArtPoemsByCollection(
					action.cachedPoems,
					action.reduxCollection
				).filter(poem => doesArtPoemBelongToUser(poem, action.user)),
			};
		case "REMOVE_ALL_POEMS_FROM_RENDERED_POEMS":
			return {...state, renderedPoems: []};
		default:
			return state;
	}
};
