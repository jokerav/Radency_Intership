import createTableRaw from './createTableRaw';
const categories = ['Task', 'Random Thought','Idea'];
const notes = [
  {
    "noteCategory": categories[2],
    "noteContent": "To wash my cat",
    "creationTime":"14.09.2022",
    "archived": false,
  },
  {
    "noteCategory": categories[0],
    "noteContent": "Make shopping",
    "creationTime":"14.09.2022",
    "archived": false,
  },
  {
    "noteCategory": categories[1],
    "noteContent": "Enter Radency Intership",
    "creationTime":"14.09.2022",
    "archived": false,
  }
];
const tableBody = document.querySelector('.tableBody');
notes.forEach(note =>{
  tableBody.insertAdjacentHTML('afterbegin',
    `<tr>
<td>${note.creationTime}</td>
  <td>${note.noteContent}</td>
  <td>${note.noteCategory}</td>
  <td><button type="button">Edit</button></td>
  <td><button type="button">Remove</button></td>
  <td><button type="button">To archive</button></td>
</tr>`);
})


