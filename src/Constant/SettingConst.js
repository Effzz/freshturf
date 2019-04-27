import { token, fetchDefault } from '../Core/GithubConfig'

export const CHANGESETTING = "CHANGESETTING"

const Storage = JSON.parse(window.localStorage.getItem('userData'))
let DefaultUser = fetchDefault
let DefaultToken = token
if(Storage){
    DefaultUser = Storage.currentUser
    DefaultToken = Storage.token
}

export const initialState = {
    currentUser: DefaultUser,
    token: DefaultToken
}


export const settingMapStateToProps = state => {
    return {
        currentUser: state.SettingReducer.currentUser,
        token: state.SettingReducer.token
    }
}

export const settingMapDispatchToProps = dispatch => {
    return {
        onChangeSetting: (newUser, newToken) => dispatch(
            {
                type: CHANGESETTING,
                currentUser: newUser,
                token: newToken
            }
        )
    }
}