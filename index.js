// Template from UDM repository
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js#L41
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory
  } else {
    root.returnExports = factory
  }
})('thatbad', function() {
  console.log(`NPM isn't all that bad`)
})
