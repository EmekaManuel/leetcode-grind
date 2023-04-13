/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (const num of magazine) {
    ransomNote = ransomNote.replace(num, "");
  }

  if (!ransomNote) return true;
  else return false;
};
