export const usePotagerStore = defineStore('potager', {
    state: () => ({accountsCount: 0, farmersCount: 0, leeksCount: 0}),
    actions: {
        setAccountsCount(i){
            this.accountsCount = i
        },
        setFarmersCount(i){
            this.farmersCount = i
        },
        setLeeksCount(i){
            this.leeksCount = i
        }
    },
})