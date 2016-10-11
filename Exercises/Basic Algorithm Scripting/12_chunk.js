function chunk(arr, size) {
  // Break it up.
  var chunks = [];
  for (var i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

chunk(["a", "b", "c", "d"], 2);
