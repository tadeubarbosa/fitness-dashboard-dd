export interface CreateAccountContract {
    execute: (user: UserDTO) => Promise<User>;
}