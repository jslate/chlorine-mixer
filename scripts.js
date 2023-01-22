document.addEventListener('DOMContentLoaded', e => {
  const codeElement = document.getElementById('code');
  const jar = CodeJar(codeElement, hljs.highlightElement);

  document.getElementById('exercises').querySelectorAll('code').forEach((element) => { CodeJar(element, hljs.highlightElement)  });
  CodeJar(document.querySelector('#explanation code'), hljs.highlightElement);
  // return; // TO_START_EDITING: remove the first two slashes at the beginning of this line

  function updateHandler() {
    document.getElementById('calculate').remove();
    let button = document.createElement('button');
    button.id = 'calculate';
    button.innerHTML = 'Calculate';
    button.class = 'calculate';

    document.getElementById('calculateContainer').prepend(button);
    const scriptText = `document.getElementById('calculate').addEventListener('click', () => { ${jar.toString()}; document.getElementById('result').style.display = 'block'; });`;
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

  document.querySelectorAll('.solve').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const solutionCodeElement = document.getElementById(link.dataset.exerciseId);
      jar.updateCode(solutionCodeElement.innerText);
      updateHandler();
    })
  })
});
