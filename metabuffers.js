exports.addMeta = function(buffer, meta) {
  var json = JSON.stringify(meta);
	var jsonBuffer = new Buffer(json);
	var newLength = jsonBuffer.length + 2 + buffer.length;
	var outBuffer = new Buffer(newLength);
	outBuffer.writeUInt16LE(jsonBuffer.length, 0);
	outBuffer.write(json, 2);
	buffer.copy(outBuffer, 2 + jsonBuffer.length);
	return outBuffer;
}

exports.extract = function (buffer) {
  var full = buffer.toString();
  var jsonLength = buffer.readUInt16LE(0);
  var json = buffer.toString('utf8', 2, jsonLength+2);
  var meta = JSON.parse(json);
  return { meta: meta, buffer: buffer.slice(2+jsonLength) };
}

