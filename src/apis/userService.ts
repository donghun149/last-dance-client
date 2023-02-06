import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-type': 'application/json',
    },
});

export type UserResponse = {}

export type LoginResponse = {}
export type LoginRequest = {
    email: string
    password: string
}

class UserService {
    login(request: LoginRequest){
        return httpClient.post<LoginResponse>(`/login`,request)
    }
    getUserByUserName(userName: string) {
        return httpClient.get<UserResponse>(`/users/${userName}`, {});
    }
}

export default new UserService();