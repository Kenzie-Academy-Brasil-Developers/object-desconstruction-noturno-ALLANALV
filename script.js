const itemArray = [{
    id: 1,
    product: "Pão",
    price: 5.8,
    quantity: 3,
    section: "Padaria",
},
{
    id: 2,
    product: "Leite",
    price: 3.0,
    quantity: 1,
    section: "Derivados de Leite",
},
{
    id: 3,
    product: "Carne",
    price: 10.0,
    quantity: 2,
    section: "Carne",
},
{
    id: 4,
    product: "Tomate",
    price: 4.0,
    quantity: 5,
    section: "Hortifruti",
},
];

const testMap = (array) => {
    const result = array.map((value) => {
        let { id, price } = value;
        if (id > 2) {
            price = 2.00;
        }
        return { ...value, price };
    });
    return result
};

const testFilter = (array) => {
    const result = array.filter(({ id }) => {
        if (id <= 2) {
            return { ...id }
        }
    });

    return result
}

const testFind = (array) => {
    const result = array.filter(({ id, product }) => {
        if (product === 'Leite') {
            return { ...id, ...product }
        }
    });

    return result
}

const testReduce = (array) => {
    const totalList = array.reduce((acc, { quantity, price }) => {
        acc += price * quantity
        return acc
    }, 0);

    return totalList
}

const filterPrice = (array) => {
    const result = array.filter(({ id, price }) => {
        if (price > 3) {
            return { ...id, ...price }
        }
    });

    return result
}

const updatePrice = (array) => {
    const updating = array.map((value) => {
        let { product, price } = value;
        if (product === 'Leite') {
            price = 4
        }
        return { ...value, price }
    });

    return updating
}

const totalsection = (array) => {
    const bakery = array.filter(({ id, section }) => {
        if (section === 'Padaria') {
            return { ...id }
        }
    });

    const total = bakery.reduce((acc, { price, quantity }) => {
        acc += price * quantity
        return acc
    }, 0);

    return total
}