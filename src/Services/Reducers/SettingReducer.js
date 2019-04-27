import { 
    initialState,
    CHANGESETTING
} from '../../Constant/SettingConst'

export function SettingReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGESETTING:
            window.localStorage.setItem('userData', JSON.stringify(
                {
                    currentUser: action.currentUser,
                    token: action.token
                }
            ))
            return {
                currentUser: action.currentUser,
                token: action.token
            }
        default:
            return state
    }
}