# metabuffers

Allows you to attach metadata (an object that can be JSONified) to buffers, 
and then extract the metadata from the buffer later.

This is an alternative to, for example, just encoding binary data with base64
and sending everything as JSON.  base64 uses about 33% more bandwidth so this
will avoid that.

Here are a few usage examples in one of my current projects:

* Transmitting files for backup, currently using protocol buffers to send filename etc. along with data, metabuffers would also work fine.

* Relay/proxy system for a home server behind a router doing NAT, single connection multiplexing multiple connects, sending socket ID along with data.

```javascript
metabuffers = require('./metabuffers');

data = new Buffer('**123**');
meta = { id: 'dave95' };
bufferWithMeta = metabuffers.addMeta(data, meta);

extracted = metabuffers.extract(bufferWithMeta);

data2 = extracted.buffer;
meta2 = extracted.meta;

```

