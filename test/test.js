'use strict';

import getClassStatics from '../';
import assert from 'assert';

class Foo {
  static method1() {
    // method1
  }

  static method2() {
    // method2
  }
}

it('It work!', () => {
  var statics = getClassStatics(Foo);
  assert.notEqual(statics.method1, undefined);
  assert.notEqual(statics.method2, undefined);
});
