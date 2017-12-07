function _ensureArray(val) {
  return Array.isArray(val) ? val : [val];
}

function _queryArray(val) {
  const arr = _ensureArray(val);
  return arr.join(',');
}

module.exports = {
  queryArray: _queryArray
}
