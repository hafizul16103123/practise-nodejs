import * as util from 'util'
import config from '../config'
//
const date = new Date(12,12)
const isDate = util.types.isDate(date)
console.log({isDate})
//
const a = new RegExp('p','gi')
const isRegExp = util.types.isRegExp(a);
console.log({isRegExp})
//
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const uint8array = encoder.encode('this is some data');
console.log({uint8array})
const string = decoder.decode(uint8array)
console.log({string})
//
const buffer = Buffer.from('this is some data')
console.log({buffer})
const bufferToString = buffer.toString()
console.log({bufferToString})

console.log(config.env)