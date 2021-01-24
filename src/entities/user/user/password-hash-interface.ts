export interface PasswordHashInterface {
    hash: (password: string) => Promise<string>;
}