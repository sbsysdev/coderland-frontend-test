// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// types
import { TaskItem } from '../types';
// store
import { MainState } from '@/core/store';

interface TaskState {
    taskList: TaskItem[];
}

const initialTaskState: TaskState = {
    taskList: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState: initialTaskState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<TaskItem>) => {
            state.taskList = [payload, ...state.taskList];
        },
    },
});

export const { addTask } = taskSlice.actions;

export const selectTask = (state: MainState) => state.task;

export const taskReducer = taskSlice.reducer;
