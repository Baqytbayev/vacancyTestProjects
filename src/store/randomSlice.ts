import { createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import { randomApi } from "../api/randomApi"
import IRandom from "../interface/IRandom"

export const getRandom = createAsyncThunk(
    'getRandom',
    async() => {
        const response =  await randomApi.getRandom()
        return response
    }
)

export const sliceRandom = createSlice({
    name: 'randomSlice', 
    initialState: {
        random: [] as IRandom[],
        loadingRandom: false,
        messageRandom: ''
    },

 
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getRandom.rejected, (state) => {
        state.loadingRandom = false
    })
    .addCase(getRandom.pending, (state) => {
        state.loadingRandom = true
    })
    .addCase(getRandom.fulfilled, (state, action) => {
        state.loadingRandom = false
        state.random = action.payload.results
        state.messageRandom = action.payload.message
    })

    },
  });
