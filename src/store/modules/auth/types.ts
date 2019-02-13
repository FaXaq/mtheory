export interface AuthState {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

export interface ILoginParams {
    username: string,
    password: string
}

export interface ISignupParams {
    username: string,
    password: string,
    passwordConfirmation: string,
    email: string,
    emailConfirmation: string
}