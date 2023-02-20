import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
  },
});

export type UserResponse = {}

export type RegisterRequest = {
  email: string
  name: string
  password: string
}
export type RegisterResponse = {}
export type LoginRequest = {
  email: string
  password: string
}
export type LoginResponse = {}

class UserService {
  async register(request: RegisterRequest) {
    try {
      await httpClient.post<RegisterResponse>(`/register`, request)
    } catch (error) {
      console.error(error)
    }
  }

  async login(request: LoginRequest) {
    try {
      const response = await httpClient.post<LoginResponse>(`/login`, request)

      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  getUserByUserName(userName: string) {
    return httpClient.get<UserResponse>(`/users/${userName}`, {});
  }
}

export default new UserService();