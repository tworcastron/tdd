class ShoppingCart {
  constructor() {
    this.price = 0;
  }
  getTotalPrice() {
    return this.price;
  }
  addItem(item) {
    this.price = this.roundPrice(this.price + item.price);
  }
  removeItem(item) {
    this.price = this.roundPrice(this.price - item.price);
  }

  roundPrice(price) {
    return Number(Number(price).toFixed(2))
  }
}

module.exports = ShoppingCart 