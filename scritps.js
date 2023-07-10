function myFunction() {
    let nro1, total = 0;
    let categoria = document.getElementById('selectCategoria').value;
    nro1 = document.getElementById('inputNumer1').value;
    if (categoria == 'estudiante') {
        total = parseInt(nro1) * 0.8;
    }
    if (categoria == 'trainee') {
        total = parseInt(nro1) * 0.5;
    }
    if (categoria == 'junior') {
        total = parseInt(nro1) * 0.15;
    }
    document.getElementById('staticTotal').innerHTML = total;
  }
  
  function limpiarForm() {
    console.log(document.getElementById('selectCategoria').value);
    document.getElementById('my-form').reset();
    document.getElementById('staticTotal').innerHTML = "$";
  }
  document.getElementById('my-form').addEventListener('submit', myFunction);