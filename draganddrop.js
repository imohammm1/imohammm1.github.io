document.addEventListener('DOMContentLoaded', () => {
const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('image-container');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
});
});
