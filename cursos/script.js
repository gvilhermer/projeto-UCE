  /* ─── LESSON DATA ─── */
  const lessons = [
    { num: 1, title: "Introdução à fotografia", sub: "Entendendo sua câmera",
      body: "Aprenda os fundamentos da fotografia: abertura, velocidade do obturador e ISO. Entenda o triângulo de exposição e como ele afeta cada imagem." },
    { num: 2, title: "Tipos de Câmeras e Lentes", sub: "Escolhendo o equipamento ideal",
      body: "Compare câmeras DSLR, mirrorless e compactas. Descubra as diferenças entre lentes grande-angular, teleobjetivas e prime, e qual usar em cada situação." },
    { num: 3, title: "Composição Fotográfica", sub: "Enquadramento e regra dos terços",
      body: "Domine a regra dos terços, linhas de fuga, simetria e outros elementos compositivos que transformam uma foto comum em uma imagem impactante." },
    { num: 4, title: "Iluminação", sub: "Como usar luz natural e artificial",
      body: "Da hora dourada ao estúdio: aprenda a ler e modelar a luz, usar refletores, difusores e posicionamentos de flash para resultados profissionais." },
    { num: 5, title: "Modos de Câmera", sub: "Manual, automático e semiautomático",
      body: "Entenda quando usar os modos P, Av, Tv e M. Ganhe controle total sobre sua câmera e pare de depender do modo automático." },
    { num: 6, title: "Ambientes Externos", sub: "Dicas para luz do dia",
      body: "Como fotografar em ambientes externos com luz natural variável. Técnicas para controlar sombras duras, gerir o céu estourado e captar a magia da hora dourada." },
    { num: 7, title: "Ambientes Internos", sub: "Controle de iluminação e sombras",
      body: "Estratégias para fotografar em ambientes com pouca luz. Flash externo, ISO alto, lentes luminosas e técnicas de bounce para resultados nítidos e naturais." },
    { num: 8, title: "Fotografia de Retrato", sub: "Poses, expressão e enquadramento",
      body: "Aprenda a dirigir o modelo, escolher o enquadramento ideal, trabalhar a profundidade de campo e criar retratos que transmitem emoção e personalidade." },
  ];
 
  const list = document.getElementById('lessonList');
 
  lessons.forEach(l => {
    const item = document.createElement('div');
    item.className = 'lesson-item';
    item.innerHTML = `
      <div class="lesson-header">
        <span class="lesson-num">${l.num}.</span>
        <div class="lesson-title">
          <strong>${l.title}</strong>
          <span> – ${l.sub}</span>
        </div>
        <div class="lesson-icon">
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="lesson-body">
        <div class="lesson-body-inner">${l.body}</div>
      </div>`;
 
    item.querySelector('.lesson-header').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.lesson-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
 
    list.appendChild(item);
  });