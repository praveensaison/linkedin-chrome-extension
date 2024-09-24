function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Open Modal';
  button.id = 'myExtensionButton';
  button.style.position = 'fixed';
  button.style.right = '20px';
  button.style.top = '50%';
  button.style.zIndex = '9999';
  return button;
}

function createModal() {
  const modal = document.createElement('div');
  modal.id = 'myExtensionModal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modalTitle">My Extension Modal</h2>
      <p>This is the modal content.</p>
    </div>
  `;
  return modal;
}

function toggleModal() {
  const modal = document.getElementById('myExtensionModal');
  if (modal.style.display === 'none') {
    updateModalTitle();
  }
  modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

function updateModalTitle() {
  const titleElement = document.querySelector('.text-heading-xlarge');
  const modalTitle = document.getElementById('modalTitle');
  if (titleElement && modalTitle) {
    modalTitle.textContent = titleElement.textContent.trim();
  }
}


function init() {
  const button = createButton();
 const modal = createModal();


  document.body.appendChild(button);
  document.body.appendChild(modal);
 

  button.addEventListener('click', toggleModal);
  
  

  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', toggleModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  });
  
}




if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}