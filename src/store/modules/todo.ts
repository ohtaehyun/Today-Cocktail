// 액션 타입(문자열)
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';


export interface ITodoState {
    list: ITodo[]
}

interface ITodo {
    id: number,
    text: string,
    isDone: boolean
}

interface ICreateAction {
    type: typeof CREATE,
    payload: ITodo
}

interface IDoneAction {
    type: typeof DONE,
    payload: {
        id: number
    }
}

export type ITodoActionTypes = | ICreateAction | IDoneAction;

//액션 생성 함수
export function create(payload: object) {
    return {
        type: CREATE,
    }
}

export function done(id: string) {
    return {
        type: DONE,
        id
    }
}

// 초기 상태
const initState: ITodoState = {
    list: [{
        id: 0,
        text:"척추 펴기",
        isDone: false,
    }, {
        id: 1,
        text: "물 마시기",
        isDone: false,
    }]
}


//리듀서 
export default function todo(state: ITodoState = initState, action: ITodoActionTypes): ITodoState {
    switch(action.type) {
        case CREATE:
            return {
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    text: action.payload.text,
                    isDone: false
                })
            };
        case DONE:
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload.id ? {...item, isDone: true} : item)
            };
        default:
            return state;
    }
}