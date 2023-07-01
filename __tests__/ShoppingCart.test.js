const ShoppingCart = require('../src/ShoppingCart')

let cart

beforeEach(() => {
  cart = new ShoppingCart()
})

test('Shopping cart zwraca domyślnie 0', () => {
  // sprawdzenie czy dane są poprawne
  expect(cart.getTotalPrice()).toBe(0)
})

test('Cena równa się 10 po dodaniu produtku', () => {
  const item = { price: 10 }
  cart.addItem(item)

  expect(cart.getTotalPrice()).toBe(10)
})

test('Cena równa się 15 po dodaniu 2 produktów', () => {
  const item = { price: 10 }
  const item2 = { price: 5 }
  cart.addItem(item)
  cart.addItem(item2)

  expect(cart.getTotalPrice()).toBe(15)
})

test('Cena równa się 12 po dodaniu 2 produktów i odjęciu 1', () => {
  const item = { price: 10 }
  const item2 = { price: 5 }
  const item3 = { price: 3 }
  cart.addItem(item)
  cart.addItem(item2)
  cart.removeItem(item3)

  expect(cart.getTotalPrice()).toBe(12)
})

test('Cena równa się 10 po dodaniu 1 odjęciu 1', () => {
  const item = { price: 16 }
  const item2 = { price: 6 }
  cart.addItem(item)
  cart.removeItem(item2)

  expect(cart.getTotalPrice()).toBe(10)
})

test('Cena jest zaokrąglona do 2 miejsc po przecinku', () => {
  const item = { price: 9.1234 }
  cart.addItem(item)

  expect(cart.getTotalPrice()).toBe(9.12)
})