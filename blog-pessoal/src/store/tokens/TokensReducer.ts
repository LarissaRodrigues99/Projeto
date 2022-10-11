import {Action} from "./Actions";

export interface TokenState {
    tokens: string 
}

const initalState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initalState, action: Action) => {
    switch(action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}