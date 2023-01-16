document.addEventListener('DOMContentLoaded', e => {
  const codeElement = document.getElementById('code');
  const jar = CodeJar(codeElement, hljs.highlightElement);
  function getCode() {
    var code = jar.toString();
    var options = {
      'presets': ['es2015']
    };
    return Babel.transform(code, options).code;
  }

  function updateHandler() {
    document.getElementById('calculate').remove();
    let button = document.createElement('button');
    button.id = 'calculate';
    button.innerHTML = 'Calculate';
    button.class = 'calculate';

    document.getElementById('calculateContainer').prepend(button);
    const scriptText = `document.getElementById('calculate').addEventListener('click', () => { ${getCode()}; document.getElementById('result').style.visibility = 'visible'; });`;
    const oldScript = document.getElementById('scriptContainer');

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }

    const newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = scriptText;
    document.body.appendChild(newScript);
  }

  updateHandler();
  document.getElementById('updateCode').addEventListener('click', () => {
    updateHandler();
    document.getElementById('calculate').addEventListener('click', window.runCode)
  });
});
