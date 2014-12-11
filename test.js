'use strict'

var e = require('./')
var test = require('tape')

test('startsWith', function(t) {
  t.plan(3)

  t.equal(e.startsWith('hello world', 'hel'), true)
  t.equal(e.startsWith('hello world', 'hello '), true)
  t.equal(e.startsWith('hello world', 'ello'), false)
})

test('endsWith', function(t) {
  t.plan(2)

  t.equal(e.endsWith('hello world', 'world'), true)
  t.equal(e.endsWith('hello world', 'hello '), false)
})

test('mStartsWith', function(t) {
  t.plan(2)

  t.equal(e.mStartsWith('hello world','hal','hel','hello'), true)
  t.equal(e.mStartsWith('hello world','hallo ','ha', 'x'), false)
})

test('replace', function(t) {
  t.plan(3)

  t.equal(e.replace('hello world','o','xx'), 'hellxx wxxrld')
  t.equal(e.replace('hello world','ll','x'), 'hexo world')
  t.equal(e.replace('hello world','a','x'), 'hello world')
})

test('mReplace', function(t) {
  t.plan(2)

  t.equal(e.mReplace('hello world','o','l','xx'), 'hexxxxxx wxxrxxd')
  t.equal(e.mReplace('hello world','ll','h','xx'), 'xxexxo world')
})

test('numberOf', function(t) {
  t.plan(3)

  t.equal(e.numberOf('hello world','l'), 3)
  t.equal(e.numberOf('hello world','h'), 1)
  t.equal(e.numberOf('hello world','x'), 0)
})

test('toUpperCaseFirst', function(t) {
  t.plan(2)

  t.equal(e.toUpperCaseFirst('hello world'), 'Hello world')
  t.equal(e.toUpperCaseFirst('A'), 'A')
})

test('createName', function(t) {
  t.plan(2)

  t.equal(e.createName('Andreas')('Hofer'), 'Andreas Hofer')
  t.equal(e.createName('Johannes')('Kepler'), 'Johannes Kepler')
})

test('cleanArray', function(t) {
  t.plan(2)

  t.equal(e.cleanArray(['a', 'b', 'c', undefined, null, 'd', 'e']).join(','), 'a,b,c,d,e')
  t.equal(e.cleanArray([undefined, undefined, null]).join(','), '')
})
