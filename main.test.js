import fs from 'fs'
import path from 'path'

test('dyno import commonjs', () => {
  fs.writeFileSync(path.join(__dirname, './generated/mod.js'), 'module.exports = { prop: "a" };')

  const mod = require('./generated/mod.js')

  expect(mod.prop).toEqual('a')
})

test('dyno import es2015', () => {
  fs.writeFileSync(path.join(__dirname, './generated/mod.es.js'), 'export const foo = "a"')

  const foo = require('./generated/mod.es.js').foo

  expect(foo).toEqual('a')
})
