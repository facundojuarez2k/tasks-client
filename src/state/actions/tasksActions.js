export const ADD_TASK = 'ADD_TASK';
export const MARK_AS_SOLVED = 'MARK_AS_SOLVED';
export const MARK_AS_WORKING = 'MARK_AS_WORKING';
export const MARK_AS_PENDING = 'MARK_AS_PENDING';

export const addTask = data => ({
    type: ADD_TASK,
    payload: data
})

export const markAsSolved = id => ({
    type: MARK_AS_SOLVED,
    id
});

export const markAsWorking = id => ({
    type: MARK_AS_WORKING,
    id
});

export const markAsPending = id => ({
    type: MARK_AS_PENDING,
    id
});