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

const container = document.querySelector('.container');
const listFunctions = [testMap(itemArray), testFilter(itemArray), testFind(itemArray), filterPrice(itemArray), updatePrice(itemArray)]

function createSection(name = ['testMap', 'testFilter', 'testFind', 'filterPrice', 'updatePrice']) {
    for (let index = 0; index < listFunctions.length; index++) {
        const list = document.createElement('ul');
        const execFunction = document.createElement('h2');
        execFunction.innerText = ` function ${name[index]}`;
        execFunction.classList.add('name-function')
        list.appendChild(execFunction);

        const obj = listFunctions[index];
        obj.forEach((elem) => {
            const card = document.createElement('li');
            const identy = document.createElement('div');
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const infor = document.createElement('div');
            const name = document.createElement('h3');
            const sectionName = document.createElement('span');
            const descPrice = document.createElement('p');
            const descStore = document.createElement('p');
            const spanPrice = document.createElement('span');
            const spanQuantify = document.createElement('span');
            const buy = document.createElement('button');

            const { id, product, price, quantity, section } = elem;
            card.classList.add('cardProduct');

            identy.innerText = id;
            img.src = './img/carrinho-de-compras.png';
            name.innerText = product;
            sectionName.innerText = section;
            spanPrice.innerText = `R$ ${price.toFixed(2)}`;
            spanQuantify.innerText = quantity;
            buy.innerText = 'Comprar';

            identy.classList.add('id');
            infor.classList.add('info');
            name.classList.add('titleProduct');
            sectionName.classList.add('section-product');
            descPrice.classList.add('description');
            spanPrice.classList.add('price');
            spanQuantify.classList.add('quantify');
            descStore.classList.add('description');


            descPrice.innerText = 'Preço: ';
            descStore.innerText = 'Estoque :';
            figure.appendChild(img);
            descPrice.appendChild(spanPrice);
            descStore.appendChild(spanQuantify);

            infor.appendChild(name);
            infor.appendChild(sectionName);
            infor.appendChild(descPrice);
            infor.appendChild(descStore);
            infor.appendChild(buy)

            card.appendChild(identy);
            card.appendChild(figure);
            card.appendChild(infor);

            list.appendChild(card)
        });

        container.appendChild(list)
    }
}

createSection();

