export interface User {
    fullname: string;
    username: string;
    email: string;
    gender: string;
    date_birth: string;
    password?: string;
    password_confirmation?: string;
  }