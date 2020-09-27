import axios from 'axios'

const URL = 'http://localhost:3001'

export function login(data) {
    return dispatch => {
        console.log(data)
        axios({
            url: URL + '/user/login',
            method: 'POST',
            data: {
                email: data.email,
                password: data.password
            }
        })
        .then(response => {
            console.log(response, '<<----<<RESPONSE LOGIN')
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            dispatch({
                type: "LOGIN",
                payload: response.data
            })
        })
        .catct(err => {
            console.log(err)
        })
    }
}