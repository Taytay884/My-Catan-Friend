export class UserService {
    static getLoggedInUser = () => {
        return new Promise<string>((resolve, reject): void => {
            setTimeout(() => {
                const userName: string | null = localStorage.getItem('loggedInUser');
                userName ? resolve(userName) : reject();
            }, 1500)
        });
    }
}
