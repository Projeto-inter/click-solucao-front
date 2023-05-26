import { Action } from "./action"

export interface TokenState {
    //model a ser usada no redux
    tokens: string 
}

const initialState = {
    tokens: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    //coloca no campo de tokens o payload que tá chegando 
    switch(action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }
        default: return state   
    }
}