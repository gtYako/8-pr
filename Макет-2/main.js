document.addEventListener('DOMContentLoaded', () => {
  // Элементы управления
  const elements = {
    modalBtn: document.getElementById('modalBtn'),
    tourModalBtn: document.getElementById('tourModalBtn'),
    modalWrapper: document.getElementById('modalWrapper'),
    tourModalWrapper: document.getElementById('tourModalWrapper'),
    closeModal: document.getElementById('closeModal'),
    closeTourModal: document.getElementById('closeTourModal'),
    switches: document.querySelectorAll('.switch'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    tourForm: document.getElementById('tourForm'),
    contactMethods: document.querySelectorAll('.contact-method')
  };

  // Состояние приложения
  const state = {
    currentForm: 'login'
  };

  // Функции
  const openModal = () => {
    elements.modalWrapper.style.display = 'flex';
    renderForm();
  };

  const openTourModal = () => {
    elements.tourModalWrapper.style.display = 'flex';
    elements.tourForm.style.display = 'block';
  };

  const closeModal = (wrapper) => {
    wrapper.style.display = 'none';
  };

  const setForm = (formType) => {
    state.currentForm = formType;
    renderForm();
  };

  const renderForm = () => {
    // Обновляем кнопки
    elements.switches.forEach(sw => {
      sw.classList.toggle('active-switch', sw.dataset.form === state.currentForm);
    });

    // Обновляем видимость форм
    elements.loginForm.style.display = state.currentForm === 'login' ? 'block' : 'none';
    elements.registerForm.style.display = state.currentForm === 'register' ? 'block' : 'none';
  };

  // Назначение обработчиков событий
  elements.modalBtn.addEventListener('click', openModal);
  elements.tourModalBtn.addEventListener('click', openTourModal);
  
  elements.closeModal.addEventListener('click', () => closeModal(elements.modalWrapper));
  elements.closeTourModal.addEventListener('click', () => closeModal(elements.tourModalWrapper));
  
  elements.modalWrapper.addEventListener('click', (e) => {
    if (e.target === elements.modalWrapper) closeModal(elements.modalWrapper);
  });
  
  elements.tourModalWrapper.addEventListener('click', (e) => {
    if (e.target === elements.tourModalWrapper) closeModal(elements.tourModalWrapper);
  });

  elements.switches.forEach(sw => {
    sw.addEventListener('click', () => setForm(sw.dataset.form));
  });

  // Обработчики для выбора способа связи
  elements.contactMethods.forEach(method => {
    method.addEventListener('click', () => {
      elements.contactMethods.forEach(m => m.classList.remove('selected'));
      method.classList.add('selected');
    });
  });

  // Инициализация
  renderForm();
});