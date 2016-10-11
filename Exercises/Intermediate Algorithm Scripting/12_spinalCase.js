function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, " ").toLowerCase().split(" ").join("-");
}

//spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
