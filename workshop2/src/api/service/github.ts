import http from '../axios'

export const fetchUsers = (keyword: string) => {
    return http.get('/search/users?q='+keyword);
}