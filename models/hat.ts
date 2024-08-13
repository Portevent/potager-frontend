class Hat {
    id: number;
    template: number;
    hat_template: number;
    quantity: number;


    constructor(id: number, template: number, hat_template: number, quantity: number) {
        this.id = id;
        this.template = template;
        this.hat_template = hat_template;
        this.quantity = quantity;
    }
}

export { Hat }
