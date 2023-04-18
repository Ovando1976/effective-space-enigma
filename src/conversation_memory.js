// Use local storage to save and retrieve data
localStorage.setItem('conversation', JSON.stringify(conversation));
const conversation = JSON.parse(localStorage.getItem('conversation'));

// Use session storage to save and retrieve temporary data
sessionStorage.setItem('tempData', 'hello');
const tempData = sessionStorage.getItem('tempData');
