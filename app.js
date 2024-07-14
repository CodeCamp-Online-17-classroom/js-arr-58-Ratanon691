const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
const groupedBySex = persons.reduce((acc, person) => {
  if (!acc[person.sex]) {
    acc[person.sex] = []
  }
  acc[person.sex].push(person.name)
  return acc
}, {})

console.log(groupedBySex)
// Output: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
