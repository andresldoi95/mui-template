export default interface SignupForm {
    fullname: string;
    username: string;
    email: string;
    gendre: string;
    date_birth: Date | string;
    password: string;
    password_confirmation: string;
}