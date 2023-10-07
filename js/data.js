/* exported data */
let data = {
  view: 'card-sets',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function beforeUnload(event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('ajax-project', dataJSON);
}
window.addEventListener('beforeunload', beforeUnload);

const previousDataJSON = localStorage.getItem('ajax-project');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
