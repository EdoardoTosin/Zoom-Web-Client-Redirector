// If `prefers-color-scheme` is not supported, fall back to light mode.
if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
  document.documentElement.style.display = 'none';
  document.head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="../css/light.css" onload="document.documentElement.style.display = \'\'">'
  );
}
