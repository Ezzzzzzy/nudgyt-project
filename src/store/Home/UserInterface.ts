export interface Username {
    value: string
}

export interface User {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    repos_url: string,
    organizations_url: string
}

export interface Users {
    [index: number]: User
}

export interface InitialState {
    username: Username,
    user: User,
    users: Users
}
