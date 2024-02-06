/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

// $FlowFixMe[unsupported-syntax]
declare module 'graceful-fs' {
  declare module.exports: {
    ...$Exports<'fs'>,
    gracefulify(fs: {...}): void,
  };
}
