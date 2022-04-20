class Kata {

  filter_list(l) {
    return l.filter(c => this.isNumeric(c));
  }
  isNumeric(n) {
    return (typeof n !== 'string');
  }
}

module.exports = {
  Kata,
};