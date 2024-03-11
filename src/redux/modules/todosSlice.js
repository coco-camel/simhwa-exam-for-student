import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addTodo = createAsyncThunk(
  '__addTodo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteTodo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [__addTodo.fulfilled]: (state, action) => {
      state.list = [
        ...state.list,
        action.payload
      ]
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
