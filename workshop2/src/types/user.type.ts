export default class User {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;

    constructor(id: number, login: string, avatar_url: string, html_url: string) {
        this.id = id;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
    }
}