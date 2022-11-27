import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/v1',
    headers: {
        'Content-type': 'application/json',
    },
});

export type UserResponse = {}

class UserService {
    getUserByUserName(userName: string) {
        return httpClient.get<UserResponse>(`/users/${userName}`, {});
    }
}

export default new UserService();