class Kata {

  filter_list(l) {
    return l.filter(c => this.isNumeric(c));
  }
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}

module.exports = {
  Kata,
};