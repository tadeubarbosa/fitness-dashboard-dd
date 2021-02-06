export class Password {
    private _password: string;
    private PASSWORD_MIN_SIZE: number = 8;

    constructor (password: string) {
        this.setPassword(password);    
    }

    setPassword(password) {
        if (!password) {
            throw new Error("You must pass an valid password!");
        }
        if (password.length > this.PASSWORD_MIN_SIZE) {
            throw new Error("You must pass an valid password!");
        }
        this._password = password;
    }
}