document.addEventListener('DOMContentLoaded', () => {
  const uploadBtn = document.getElementById('uploadBtn');
  const modal = document.getElementById('uploadModal');
  const closeBtn = document.getElementsByClassName('close')[0];
  const fileInput = document.getElementById('fileInput');
  const imageContainer = document.getElementById('imageContainer');

  uploadBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        imageContainer.innerHTML = 'img';
        imageContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  });
});
