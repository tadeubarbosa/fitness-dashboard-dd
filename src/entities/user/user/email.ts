export class Email {
    constructor (email: string) {
        this.setEmail(email);
    }

    setEmail (email) {
        if (!email) {
            throw new Error("You must pass an valid email");
        }
        if (email.match(/([\w]{3,})\@([\w]{2,})((\.([\w]{2,})){1,})/) === false) {
            throw new Error("You must pass an valid email");
        }
    }
}