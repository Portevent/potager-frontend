class Account{
    id: number;
    login: string;
    mail: string;


    constructor(id: number, login: string, mail: string) {
        this.id = id;
        this.login = login;
        this.mail = mail;
    }
}

const AccountTests = [
    {
        id: -1,
        login: 'test',
        mail: 'test@mail'
    },
    {
        id: -2,
        login: 'test 2',
        mail: 'test@mail'
    },
    {
        id: -3,
        login: 'test 3',
        mail: 'test@mail'
    }
]

export { Account, AccountTests }