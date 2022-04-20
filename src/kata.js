class Kata {

  filter_list(l) {
    return l.filter(c => typeof c === 'number');
  }
}

module.exports = {
  Kata,
};