const ServerFetch = (url: string) => useFetch('http://localhost:8080/' + url, {
    lazy: true
})

const Fetcher = {
    get_accounts: () => ServerFetch('accounts'),
    get_farmers: () => ServerFetch('farmers'),
    get_leeks: () => ServerFetch('leeks')
}

export { Fetcher }