'use strict';

var NoopClass = function () {};
var builtIns = Object.getOwnPropertyNames(NoopClass);

module.exports = function (c) {
  return Object.getOwnPropertyNames(c).reduce(function (value, m) {
    if (builtIns.indexOf(m) !== -1) {
      return value;
    }

    value[m] = c[m];
    return value;
  }, {});
};
