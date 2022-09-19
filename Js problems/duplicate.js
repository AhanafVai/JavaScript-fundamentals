const names = [
  "abul",
  "babul",
  "sabul",
  "rabul",
  "Kabul",
  "abul",
  "babul",
  "sabul",
  "rabul",
];

function removeDuplicate(names) {
  const unique = [];
  for (const element of names) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
    console.log(element);
  }
  return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);
