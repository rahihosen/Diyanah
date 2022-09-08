export const cart = {
  state: {
    count: 0,
    cart: [],
  },
  actions: {
    addToCart: ({ commit, state }, product) => {
      let found = state.cart.some((el) => {
        return el.product_name === product.product_name;
      });
      if (!found) {
        commit("ADD_TO_CART", product);
      } else {
        commit("UPDATE_CART", product);
      }
    },
    
  },
  mutations: {
    ADD_TO_CART(state, product) {
      // state.cart.push(product)
      product.isDeleting = false;
      console.log(product)
      product = { ...product, quantity: 1 };
      state.cart = [...state.cart, product];
    },
    UPDATE_CART(state, product) {
      let findIndex = state.cart.findIndex(
        (x) => x.product_name == product.product_name
      );
      state.cart[findIndex].quantity++;
    },
    EMPTY_CART(state) {
      console.log(state.cart)
      state.cart = [];
    },
    CHANGE_QTY(state, payload) {
      //console.log(payload)
      state.cart[payload.index].quantity = payload.qty;
    },
    increment(state, index) {
      state.cart[index].quantity++;
      //console.log(findIndex);
    },
    incrementSingleProductQty(state, id) {
      const product = state.cart.find((cart) => cart.id === id);
      //const index =  product.index;
      product.quantity++;
      //console.log(qty);
    },

    decrementSingleProductQty(state, id) {
      const product = state.cart.find((cart) => cart.id === id);
      product.quantity--;
    },

    decrement(state, index) {
      if (state.cart[index].quantity == 1) {
        state.cart[index].quantity = 1;
      } else {
        state.cart[index].quantity--;
      }
    },
    REMOVE_CART(state, index) {
      state.cart.splice(index, 1);
      // console.log(index);
    },
  },

  getters: {
    counterValue: function (state) {
      return state.count;
    },
    getCartProducts: function (state) {
      return state.cart;
    },
    cartCount: (state) => {
      if (state.cart.length === 0) {
        return "0";
      } else {
        return state.cart.reduce((a, b) => a + b.quantity, 0);
      }
    },
    cartTotal: (state) => {
      if (state.cart.length === 0) {
        return "0";
      } else {
        return state.cart
          .reduce((a, b) => a + b.product_price * b.quantity, 0)
          .toFixed(2);
      }
    },

    cartItems: (state) => {
      if (state.cart.length === 0) {
        return "0";
      } else {
        return state.cart;
      }
    },

    itemTotal: (state) => (index) => {
      if (state.cart[index]) {
        return state.cart[index].product_price * state.cart[index].quantity;
      }
    },

    getIndividualProductQty: (state) => (id) => {
      let product = state.cart.find((cart) => cart.id === id);
      return product ? product.quantity : 0;
    },
  },
};
