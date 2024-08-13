class Account{
    id: number;
    name: string;
    mail: string;
    password: string;


    constructor(id: number, name: string, mail: string, password: string) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.password = password;
    }
}

const AccountTests = [
    {
        id: -1,
        name: 'test',
        mail: 'test@mail',
        password: 'pass'
    },
    {
        id: -2,
        name: 'test 2',
        mail: 'test@mail',
        password: 'pass'
    },
    {
        id: -3,
        name: 'test 3',
        mail: 'test@mail',
        password: 'pass'
    }
]

export { Account, AccountTests }