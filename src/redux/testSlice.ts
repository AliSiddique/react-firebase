import { createSlice } from '@reduxjs/toolkit'

type State = {
    data:number
}

const initialState: State = {
    data:34
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increments:(state )=> {
            state.data = state.data + 1
        },
        decrement:(state) => {
            state.data = state.data - 1
        },
        incremenetByAmount: (state,action) => {
            state.data = state.data + action.payload
        }
    }
})

export const { increments,decrement,incremenetByAmount } = testSlice.actions