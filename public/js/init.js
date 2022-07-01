'use strict';
(() => {
  const base = '/';
  const version = '0.0.0';
  const cssList = ['css/chunk-vendors', 'css/app'];
  const jsList = ['js/chunk-vendors', 'js/app'];
  const headElement = document.getElementsByTagName('head')[0];

  function loadCSS(list) {
    list.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${base}${url}.${version}.css`;
      headElement.appendChild(link);
    });
  }

  function loadScript(list) {
    list.forEach((url) => {
      const script = document.createElement('script');
      script.src = `${base}${url}.${version}.js`;
      headElement.appendChild(script);
    });
  }

  loadCSS(cssList);
  loadScript(jsList);
})();
