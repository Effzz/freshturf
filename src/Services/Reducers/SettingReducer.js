import { 
    initialState,
    CHANGESETTING
} from '../../Constant/SettingConst'

export function SettingReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGESETTING:
            window.localStorage.setItem('userData', JSON.stringify(
                {
                    currentUser: action.currentUser
                }
            ))
            return {
                currentUser: action.currentUser
            }
        default:
            return state
    }
}