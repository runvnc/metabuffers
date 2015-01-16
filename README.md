# metabuffers

Allows you to attach metadata (an object that can be JSONified) to buffers, 
and then extract the metadata from the buffer later.

This is an alternative to, for example, just encoding binary data with base64
and sending everything as JSON.  base64 uses about 33% more bandwidth so this
will avoid that.

## Usage

```javascript
metabuffers = require('./metabuffers');

data = new Buffer('**123**');
meta = { id: 'dave95' };
bufferWithMeta = metabuffers.addMeta(data, meta);

extracted = metabuffers.extract(bufferWithMeta);

data2 = extracted.buffer;
meta2 = extracted.meta;

```

