// Use the HTML5 File API to read and write files
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.addEventListener('change', event => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const contents = reader.result;
    // Use contents to create a new document
  };
  reader.readAsText(file);
});

const downloadLink = document.createElement('a');
downloadLink.download = 'my-document.txt';
downloadLink.href = URL.createObjectURL(new Blob(['Hello, world!']));
downloadLink.click();
