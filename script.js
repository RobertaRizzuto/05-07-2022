const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};
// usiamo Object.values per sommare ed ottenere -> 110
Object.values(product.addons);
const initialValue = product.price;
const fullOptionalPrice = Object.values(product.addons).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(fullOptionalPrice);

//----------------------------------------------------secondo esercizio

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - €${price}</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 2, // pagina corrente
  _per_page: 3, // numero di risultati per pagina

  get getproduct() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;

    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return paginatedProducts;
  },

  set setproducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.getproduct.map(getProductHTML).join("");
    document.body.innerHTML = `
          <h2 class="title">Offerte lampo</h2>
          <ul>${productsHTML}</ul>
      `;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};
shop.setproducts = [
  { id: 1, name: "TV", price: 400 },
  { id: 2, name: "PC", price: 1200 },
  { id: 3, name: "Phon", price: 52 },
  { id: 4, name: "Radio", price: 64 },
  { id: 5, name: "Keybard", price: 30 },
  { id: 6, name: "Mouse", price: 20 },
  { id: 7, name: "Tablet", price: 164 },
  { id: 8, name: "Pendrive", price: 15 },
  { id: 9, name: "Hard disk", price: 70 },
];
