class Account{
    id: number;
    name: string;
    email: string;
    password: string;


    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const AccountTests = [
    {
        id: -1,
        name: 'test',
        email: 'test@mail',
        password: 'pass'
    },
    {
        id: -2,
        name: 'test 2',
        email: 'test@mail',
        password: 'pass'
    },
    {
        id: -3,
        name: 'test 3',
        email: 'test@mail',
        password: 'pass'
    }
]

export { Account, AccountTests }