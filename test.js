metabuffers = require('./metabuffers');
assert = require('assert');

data = new Buffer('**123**');
meta = { id: 'dave95' };
bufferWithMeta = metabuffers.addMeta(data, meta);

extracted = metabuffers.extract(bufferWithMeta);

data2 = extracted.buffer;
meta2 = extracted.meta;

console.log(extracted.meta);
console.log(extracted.buffer.toString());

assert(data2.toString() == data.toString());
assert(meta2.id == meta.id);
