function isClass (func) {
  return typeof func === 'function' &&
    /^class\s/.test(Function.prototype.toString.call(func))
}

function isStatelessComponent (func) {
  return !isClass(func) && typeof func === 'function'
}
