const button = document.getElementById('button');
const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('imageContainer');

button.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        imageContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
});
