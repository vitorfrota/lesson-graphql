module.exports = {
  discountPrice(parent) {
    return parent.price - parent.discount
  }
}