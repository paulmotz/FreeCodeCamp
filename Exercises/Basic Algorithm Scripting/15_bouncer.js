function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(truthy);
}

function truthy(value) {
  return value;
}

bouncer([7, "ate", "", false, 9]);
