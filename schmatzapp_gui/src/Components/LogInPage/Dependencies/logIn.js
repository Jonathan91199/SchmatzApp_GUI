import Axios from 'axios'

export default function logIn(userName, password, callBack) {
    Axios.post(`http://${window.location.hostname}:${process.env.REACT_APP_SERVER_PORT}/api/login`, {
        userName: userName,
        password: password
    }).then((authKey) => {
        callBack()
    }).catch(err => {
        console.error(err.toString())
    })
}