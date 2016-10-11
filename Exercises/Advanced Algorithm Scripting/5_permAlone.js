// solution is brute force and ugly

function permAlone(str) {
  var perms = [];
  getAllPerms("", str);
  return checkAllPerms(perms);
  
  function getAllPerms(prefix, str) {
    var l = str.length;
    if (l === 0) perms.push(prefix);
    else {
      for (var i = 0; i < l; i ++)
        getAllPerms(prefix + str[i], str.substr(0, i) + str.substr(i + 1));
    }
  }
  
  function checkAllPerms(perms) {
    var count = 0;
    for (var i = 0; i < perms.length; i++) {
      for (var j = 1; j < perms[i].length; j++) {
        if (perms[i][j] === perms[i][j-1]) break;
        else if (j === perms[i].length - 1) count++;
      }
    }
    return count;
  }
}


  

//checkAllPerms(['ab', 'ba']);
permAlone('aab');
//permAlone('aab');





//https://github.com/FreeCodeCamp/wiki/blob/master/Bonfire-No-Repeats-Please.md
//https://en.wikipedia.org/wiki/Heap%27s_algorithm