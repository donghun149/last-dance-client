import axios from 'axios'

const LOCAL_API_HOST = 'http://localhost:8080'
const REAL_API_HOST = 'http://ec2-3-37-147-215.ap-northeast-2.compute.amazonaws.com:8080'
const httpClient = axios.create({
  baseURL: LOCAL_API_HOST,
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

export type GetUserByNicknameRequest = {
  nickname: string
}
export type GetUserByNicknameResponse = {
  email: string | '',
  nickname: string | '',
}

export type GetIsOwnRequest = {
  email: string,
  token: string,
}

class UserService {
  async register(request: RegisterRequest) {
    try {
      await httpClient.post<RegisterResponse>(`/register`, request)
    } catch (error) {
      console.error(error)
      throw error
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

  async getUserByNickname(request: GetUserByNicknameRequest) {
    try {
      const response = await httpClient.get<GetUserByNicknameResponse>(`/api/v1/users/${request.nickname}`, {})

      return response.data as GetUserByNicknameResponse
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getIsOwn(request: GetIsOwnRequest) {
    try {
      const response =
          await httpClient.get<boolean>(`/api/v1/users/check/${request.email}`, {
            headers: {
              token: request.token
            }
          })

      return response.data as boolean
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