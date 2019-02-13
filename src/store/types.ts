export interface RootState {
    auth: {
        accessToken: string | undefined,
        refreshToken: string | undefined
    }
}