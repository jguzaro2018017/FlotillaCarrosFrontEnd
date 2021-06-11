export class UserModel{
    constructor(
        public userID: number,
        public DPI: string,
        public username: string,
        public nameU: string,
        public lastnameU: string,
        public hiringDate: string,
        public age: number,
        public phoneNumber: string,
        public email: string,
        public passwordU: string,
        public rol: string
    ){

    }
}