export type Action = {type: "ADD_TOKEN"; payload: string}

export const addToken = (token: string) => ({
    type: "ADD_TOKEN",
    payload: token
})