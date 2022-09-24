const createTableRaw = (note)=>{
`<td>${note.creationTime}</td>
  <td>${note.noteContent}</td>
  <td>${note.noteCategory}</td>
  <td><button type="button">Edit</button></td>
  <td><button type="button">Remove</button></td>
  <td><button type="button">To archive</button></td>`
}
export { createTableRaw }