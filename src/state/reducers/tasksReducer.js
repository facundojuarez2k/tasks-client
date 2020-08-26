import { ADD_TASK, MARK_AS_PENDING, MARK_AS_WORKING, MARK_AS_SOLVED } from '../actions/tasksActions';
const STATUS_PENDING    = 0;
const STATUS_WORKING    = 1;
const STATUS_SOLVED     = 2;

const tasksReducer = (state = [], action) => {
    switch(action.type) { 
        case ADD_TASK:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case MARK_AS_SOLVED:
            return state.map(task => 
                (task.id === action.id)
                ? {...task, status: STATUS_SOLVED}
                : task
            );
        case MARK_AS_WORKING:
            return state.map(task => 
                (task.id === action.id)
                ? {...task, status: STATUS_WORKING}
                : task
            );
        case MARK_AS_PENDING:
            return state.map(task => 
                (task.id === action.id)
                ? {...task, status: STATUS_PENDING}
                : task
            );
        default:
            return state;
    }
}

export default tasksReducer;