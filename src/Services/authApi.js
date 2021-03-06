import request from './apiServices';
import {apiCall} from "../Services/api";

export function login(loginRequest) {
    return request({
        url: "/api/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: "/api/auth/signup/",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

// Get Currently Logged in User.
export function getCurrentUser() {
    if(!localStorage.getItem('accessToken')) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: "/api/users/me",
        method: 'GET'
    });
}

export function verifyPasswordEmployee(info) {
    return apiCall('POST', "/api/auth/verifypassword/employee", info);
}
