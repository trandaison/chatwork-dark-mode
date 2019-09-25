const initToggle = () => {
  /* activate dark mode by default */
  let isDarkModeActivated = true;
  if (localStorage.getItem('DARK_MODE_ENABLE') === null) {
    localStorage.setItem('DARK_MODE_ENABLE', true)
  } else {
    isDarkModeActivated = localStorage.getItem('DARK_MODE_ENABLE') === 'true';
  }

  const togglerExists = document.querySelector('.toggle-dark-theme');
  if (togglerExists) {
    // eslint-disable-next-line
    console.log('EXISTING', togglerExists);
    return false;
  }

  const parrent = document.querySelector('.globalHeader__navigation');
  if (!parrent) {
    // eslint-disable-next-line
    console.log('PARRENT NOT FOUND', parrent);
    return false;
  }

  const span = document.createElement('span');
  span.classList.add('slider', 'round');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'toggle-dark-theme');
  input.checked = isDarkModeActivated;
  document.body.classList.toggle('default-theme', !input.checked);
  const onInputChangeHandler = () => {
    isDarkModeActivated = !isDarkModeActivated;
    document.body.classList.toggle('default-theme', !isDarkModeActivated);
    localStorage.setItem('DARK_MODE_ENABLE', isDarkModeActivated);
  };
  input.addEventListener('change', onInputChangeHandler);

  const label = document.createElement('label');
  label.classList.add('switch');
  label.appendChild(input);
  label.appendChild(span);

  const div = document.createElement('div');
  div.classList.add('toggle-dark-theme');
  div.innerHTML = 'Dark mode';
  div.appendChild(label);

  parrent.prepend(div);

  return input;
};

setTimeout(initToggle, 6000);
