import {Farmer} from "~/models/farmer";
import {Account} from "~/models/account";

const Fetch = <T>(url: string, cb: any = null) => useFetch<T>('http://localhost:8080/' + url, {
    lazy: true,
    onResponse({ request, response, options }) {
        // Process the response data
        if(cb != null){
            cb(response)
        }
    },
})



const ClientFetch = async (url: string) => await $fetch('http://localhost:8080/' + url)

export const Fetcher = {
    store: null,
    setAccountsCount(count: number) {
        if(Fetcher.store != null){
            Fetcher.store.setAccountsCount(count)
        }
    },
    setFarmersCount(count: number) {
        if(Fetcher.store != null){
            Fetcher.store.setFarmersCount(count)
        }
    },
    setLeeksCount(count: number) {
        if(Fetcher.store != null){
            Fetcher.store.setLeeksCount(count)
        }
    },
    get_accounts: () => Fetch<Account[]>('accounts', (data: any) => {
        console.log('data accounts', data)
        Fetcher.setAccountsCount(data._data.length)
    }),
    get_accounts_count: () => Fetch<Number>('accounts/count', (data: number) => {
        console.log('data accounts_count', data)
        Fetcher.setAccountsCount(data._data)
    }),
    add_fake_account: async () => await ClientFetch('accounts/fake'),

    get_farmers: () => Fetch<Farmer[]>('farmers', (data: any) => {
        console.log('data farmers', data)
        Fetcher.setFarmersCount(data._data.length)
    }),
    get_farmer: (id: string ) => Fetch<Farmer>('farmers/' + id),
    get_public_farmer: (id: string ) => Fetch<Farmer>('farmers/public/' + id),
    add_fake_farmer: async () => await ClientFetch('farmers/fake'),

    get_leeks: () => Fetch('leeks'),

    get_counts: () => Fetch('potager/counts', (data: number[]) => {
    Fetcher.setAccountsCount(data._data[0])
    Fetcher.setFarmersCount(data._data[1])
    Fetcher.setLeeksCount(data._data[2])
})
}