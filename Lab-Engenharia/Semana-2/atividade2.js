function atualizarRelogio() {
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();
  
    // Formata os valores para sempre terem dois dígitos
    minuto = minuto.toString().padStart(2, "0");
    segundo = segundo.toString().padStart(2, "0");
  
    document.body.innerHTML = `<h1>Agora são ${hora}:${minuto}:${segundo}</h1>`;
  
    // Atualiza o relógio a cada segundo
    setTimeout(atualizarRelogio, 1000);
  }
  
  // Inicia o relógio
  atualizarRelogio();
  