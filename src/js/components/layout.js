export const layout = (classList, ...children) => {
  const el = document.createElement('div');
  el.classList.add('container');

  children.forEach(child => {
    if (child instanceof HTMLElement) {
      el.append(child);
    } else if (typeof child === 'string') {
      el.innerHTML = children;
    }
  });

  if (classList) {
    el.classList.add(classList);
  }

  return el;
};
