let myInterpreter;
function parse() {
  var code = window.jar.toString();
  var options = {
    'presets': ['es2015']
  };
  code = Babel.transform(code, options).code;
  myInterpreter = new Interpreter(code, initDom);
}

function runButton() {
  parse();
  if (myInterpreter.run()) {
    setTimeout(runButton, 100);
  }
}

function disable(disabled) {
  document.getElementById('runButton').disabled = disabled;
}
document.addEventListener('DOMContentLoaded', e => {
  window.jar = CodeJar(document.querySelector('#code'), hljs.highlightElement)
})
