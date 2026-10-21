// ==========================================================================
// ENKAIMAR E.I.R.L. (RUC 20616132823) — Lógica Interactiva (Estilo Oliga #441351)
// ==========================================================================

const HERO_SLIDES = [
  {
    bg: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_slider_1.jpg',
    eyebrow: 'ENKAIMAR E.I.R.L. ES SU SOCIO ESTRATÉGICO EN EXPORTACIÓN MINERA DESDE LIMA, PERÚ',
    title: 'MINERÍA <span class="amp">&amp;</span> EXPORTACIÓN GLOBAL',
    desc: 'Comercialización internacional, acopio selectivo y embarque marítimo (FOB Callao / Chancay y CIF) de concentrados de Cobre, Zinc, Plomo-Plata, Oro, Hierro y Antimonio con certificación SGS. Sede ejecutiva: <strong>Dos de Mayo 305, Miraflores, Lima - Perú</strong>.'
  },
  {
    bg: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_slider_2.jpg',
    eyebrow: 'RUC 20616132823 · SEDE EJECUTIVA EN AV. DOS DE MAYO 305, MIRAFLORES - LIMA',
    title: 'CONCENTRADOS <span class="amp">&amp;</span> ALTA LEY',
    desc: 'Despachos continuos en contenedores de 20\' DV (Big Bags ONU) y carga a granel hacia fundiciones y refinerías en Asia-Pacífico, Unión Europea y las Américas con trazabilidad 100% verificada.'
  }
];

let currentSlideIndex = 0;

function changeHeroSlide(direction) {
  currentSlideIndex = (currentSlideIndex + direction + HERO_SLIDES.length) % HERO_SLIDES.length;
  const slide = HERO_SLIDES[currentSlideIndex];
  const heroEl = document.getElementById('heroSlider');
  const eyebrowEl = document.getElementById('heroEyebrow');
  const titleEl = document.getElementById('heroTitle');
  const descEl = document.getElementById('heroDesc');

  if (heroEl) heroEl.style.backgroundImage = `url('${slide.bg}')`;
  if (eyebrowEl) eyebrowEl.innerHTML = slide.eyebrow;
  if (titleEl) titleEl.innerHTML = slide.title;
  if (descEl) descEl.innerHTML = slide.desc;
}

// Catálogo de Minerales de Exportación — ENKAIMAR E.I.R.L.
const MINERALS_DATA = [
  {
    id: 'cobre',
    category: 'concentrado',
    name: 'Concentrado de Cobre (Cu)',
    symbol: 'Cu 26%–32%',
    hsCode: 'HS: 2603.00.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_service_1.jpg',
    shortDesc: 'Concentrado de sulfuros de cobre por flotación con altos créditos de oro y plata para fundiciones globales.',
    port: 'FOB Callao / Chancay · CIF',
    moisture: 'Humedad máx: < 8.5% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Sede Corporativa': 'Av. Dos de Mayo 305, Miraflores, Lima - Perú',
      'Ley Principal de Cobre (Cu)': '26.00% – 32.00% mín.',
      'Plata Pagable (Ag)': '80 – 350 g/TMS',
      'Oro Pagable (Au)': '1.5 – 8.0 g/TMS',
      'Humedad Límite (TML)': '< 8.5% – 9.0% H₂O',
      'Partida Arancelaria Perú': '2603.00.00.00',
      'Modalidad de Embarque': 'Big Bags 1.2 - 1.5 TM en Contenedor 20\' DV o Granel',
      'Certificación de Calidad': 'SGS del Perú / Inspectorate / Alfred H Knight'
    }
  },
  {
    id: 'zinc',
    category: 'concentrado',
    name: 'Concentrado de Zinc (Zn)',
    symbol: 'Zn 48%–54%',
    hsCode: 'HS: 2608.00.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_service_2.jpg',
    shortDesc: 'Sulfuro de zinc limpio y homogenizado con bajo contenido de hierro y sílice, óptimo para refinerías electrolíticas.',
    port: 'FOB Callao / Chancay · CIF',
    moisture: 'Humedad máx: < 8.5% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Ley Principal de Zinc (Zn)': '48.00% – 54.00% mín.',
      'Contenido de Plata (Ag)': '60 – 200 g/TMS',
      'Hierro (Fe) / Sílice (SiO₂)': 'Fe < 8.0% | SiO₂ < 3.5%',
      'Humedad Promedio': '7.5% – 8.5% H₂O',
      'Partida Arancelaria Perú': '2608.00.00.00',
      'Formato de Despacho': 'Big Bags ONU 1.2 TM en Contenedores 20\' Heavy',
      'Capacidad de Suministro': '500 – 3,000 TMS / mes'
    }
  },
  {
    id: 'plomo',
    category: 'concentrado',
    name: 'Concentrado Plomo-Plata',
    symbol: 'Pb 50%–62%',
    hsCode: 'HS: 2607.00.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_service_3.jpg',
    shortDesc: 'Concentrado galénico polimetálico enriquecido con altos valores pagables de plata (Ag) y oro (Au).',
    port: 'FOB Callao · CIF Asia / UE',
    moisture: 'Humedad máx: < 8.0% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Ley Principal de Plomo (Pb)': '50.00% – 62.00%',
      'Ley de Plata (Ag)': '1,200 – 4,500 g/TMS (40 – 150 oz/TM)',
      'Ley de Oro (Au)': '2.0 – 10.0 g/TMS',
      'Humedad Máxima': '< 8.00% H₂O',
      'Partida Arancelaria Perú': '2607.00.00.00',
      'Embalaje': 'Big Bags laminados con liner interno precintados',
      'Certificación': 'Ensayo al Fuego (Au/Ag) + ICP en laboratorio SGS'
    }
  },
  {
    id: 'hierro',
    category: 'industrial',
    name: 'Mineral de Hierro (Fe)',
    symbol: 'Fe 62%–65.5%',
    hsCode: 'HS: 2601.11.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_service_4.jpg',
    shortDesc: 'Hematita y magnetita calibrada (Sinter Feed y Lump Ore) de alta ley y bajas impurezas para siderúrgicas.',
    port: 'FOB Callao / Chancay / Matarani',
    moisture: 'Humedad máx: < 6.0% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Ley de Hierro Total (Fe)': '62.00% – 65.50%',
      'Fósforo (P) y Azufre (S)': 'P < 0.06% | S < 0.05%',
      'Granulometría': 'Sinter Feed (0–10 mm) / Lump (10–40 mm)',
      'Humedad Libre': '< 6.00% H₂O',
      'Partida Arancelaria Perú': '2601.11.00.00',
      'Modalidad de Embarque': 'Granel (Bulk Vessel) o Contenedores 20\' DV'
    }
  },
  {
    id: 'oro',
    category: 'precioso',
    name: 'Mineral Aurífero & Doré (Au)',
    symbol: 'Au Alta Ley',
    hsCode: 'HS: 2616.90.10.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_blog_1.jpg',
    shortDesc: 'Concentrado aurífero de flotación y barras Doré con 100% trazabilidad legal REINFO/MINEM y SUNAT.',
    port: 'Callao (Marítimo) / Lima LIM',
    moisture: 'Trazabilidad 100% REINFO',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Concentrado Aurífero': '35.0 – 120.0 g/TMS Au',
      'Pureza Barras Doré': '85% – 92% Au + Ag',
      'Cumplimiento Legal': '100% REINFO Vigente / Concesión Minera / SUNAT',
      'Muestreo y Ensaye': 'Ensayo al Fuego por triplicado (SGS / AHK)',
      'Partida Arancelaria': '2616.90.10.00 / 7108.12.00.00',
      'Forma de Pago': 'Carta de Crédito Irrevocable (L/C) / Liquidación en Refinería'
    }
  },
  {
    id: 'antimonio',
    category: 'concentrado',
    name: 'Concentrado de Antimonio',
    symbol: 'Sb 45%–58%',
    hsCode: 'HS: 2617.10.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_blog_2.jpg',
    shortDesc: 'Sulfuro de antimonio (estibina) selecto para la industria de retardantes de flama, baterías y aleaciones.',
    port: 'FOB Callao · CIF Global',
    moisture: 'Humedad máx: < 6.5% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Ley de Antimonio (Sb)': '45.00% – 58.00% mín.',
      'Arsénico (As) / Plomo (Pb)': 'As < 0.50% | Pb < 0.60%',
      'Presentación': 'Concentrado de flotación o mineral en roca selecto (Lump)',
      'Partida Arancelaria Perú': '2617.10.00.00',
      'Embalaje': 'Big Bags de 1.0 TM en Contenedor 20\' DV'
    }
  },
  {
    id: 'molibdeno',
    category: 'precioso',
    name: 'Concentrado de Molibdeno',
    symbol: 'Mo 48%–52%',
    hsCode: 'HS: 2613.90.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_blog_3.jpg',
    shortDesc: 'Molibdenita de alta pureza para aceros especiales, superaleaciones e industria química internacional.',
    port: 'FOB Callao · CIF Destino',
    moisture: 'Humedad máx: < 5.0% TMH',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Ley de Molibdeno (Mo)': '48.00% – 52.00% mín.',
      'Cobre (Cu) / Fósforo (P)': 'Cu < 0.50% | P < 0.05%',
      'Partida Arancelaria Perú': '2613.90.00.00',
      'Empaque de Exportación': 'Maxi-sacos impermeables de 1.0 TM o cilindros metálicos'
    }
  },
  {
    id: 'baritina',
    category: 'industrial',
    name: 'Baritina Grado API 4.20',
    symbol: 'BaSO₄ 92%+',
    hsCode: 'HS: 2511.10.00.00',
    image: 'https://demo.themexbd.com/sk/oliga/wp-content/uploads/2024/06/ol_blog_4.jpg',
    shortDesc: 'Sulfato de bario natural con densidad ≥ 4.20 g/cm³ bajo norma API Spec 13A para perforación energética.',
    port: 'FOB Callao / Paita · CIF',
    moisture: 'Gravedad Específica ≥ 4.20',
    specs: {
      'Exportador Oficial': 'ENKAIMAR E.I.R.L. (RUC 20616132823)',
      'Gravedad Específica': '4.20 – 4.28 g/cm³ (Norma API 13A)',
      'Sulfato de Bario (BaSO₄)': '> 92.00% mín.',
      'Presentación': 'En roca (Crude Ore 0-150 mm) o Malla 325',
      'Partida Arancelaria Perú': '2511.10.00.00',
      'Mercados Principales': 'Golfo de México (Houston), Brasil, Medio Oriente'
    }
  }
];

let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderMineralCards();
  setupFilterButtons();
});

function renderMineralCards() {
  const grid = document.getElementById('mineralCardsGrid');
  if (!grid) return;

  const list = MINERALS_DATA.filter(m => activeFilter === 'all' || m.category === activeFilter);

  grid.innerHTML = list.map(m => `
    <article class="oliga-service-card">
      <div>
        <div class="service-img-wrap">
          <img src="${m.image}" alt="${m.name}" loading="lazy" />
          <span class="mineral-grade-tag">${m.symbol}</span>
          <span class="mineral-hs-tag">${m.hsCode}</span>
        </div>
        <div class="service-card-body">
          <h3><a href="#servicios" onclick="event.preventDefault(); openMineralById('${m.id}')">${m.name}</a></h3>
          <p>${m.shortDesc}</p>
          <div class="service-specs-pill">
            <strong>Embarque:</strong> ${m.port}<br/>
            <strong>Control:</strong> ${m.moisture}
          </div>
          <button class="read-more-oliga" onclick="openMineralById('${m.id}')">
            ...VER FICHA TÉCNICA...
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFilterButtons() {
  const btns = document.querySelectorAll('.oliga-filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderMineralCards();
    });
  });
}

function openMineralById(id) {
  const mineral = MINERALS_DATA.find(m => m.id === id);
  if (!mineral) return;

  const modal = document.getElementById('mineralModal');
  const title = document.getElementById('modalTitle');
  const sub = document.getElementById('modalSubLabel');
  const body = document.getElementById('modalBody');
  const quoteBtn = document.getElementById('modalQuoteBtn');

  title.textContent = `${mineral.name} — [${mineral.symbol}]`;
  sub.textContent = `FICHA TÉCNICA DE EXPORTACIÓN · ${mineral.hsCode}`;

  const rows = Object.entries(mineral.specs).map(([k, v]) => `
    <tr>
      <th>${k}</th>
      <td>${v}</td>
    </tr>
  `).join('');

  body.innerHTML = `
    <p style="margin-bottom:14px; color:#444;">${mineral.shortDesc}</p>
    <table class="oliga-spec-table">
      <tbody>
        ${rows}
      </tbody>
    </table>
    <div style="background:#fff7ed; border-left:4px solid #f06423; padding:12px 16px; font-size:13.5px; color:#333;">
      <strong>Garantía ENKAIMAR E.I.R.L. (RUC 20616132823):</strong> Todos nuestros embarques incluyen Certificado de Análisis Químico, Humedad y Peso emitido en puerto peruano previo al despacho.
    </div>
  `;

  quoteBtn.onclick = () => {
    closeMineralModal();
    const sel = document.getElementById('rfqMineral');
    if (sel) {
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value.toLowerCase().includes(mineral.id)) {
          sel.selectedIndex = i;
          break;
        }
      }
    }
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  };

  modal.classList.remove('hidden');
}

function closeMineralModal() {
  const modal = document.getElementById('mineralModal');
  if (modal) modal.classList.add('hidden');
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('mineralModal');
  if (e.target === modal) closeMineralModal();
});

function toggleFaq(btnEl) {
  const item = btnEl.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(el => {
    if (el !== item) {
      el.classList.remove('open');
      const icon = el.querySelector('.faq-question span:last-child');
      if (icon) icon.textContent = '+';
    }
  });
  item.classList.toggle('open');
  const icon = item.querySelector('.faq-question span:last-child');
  if (icon) icon.textContent = item.classList.contains('open') ? '−' : '+';
}

function submitOligaQuote(event) {
  event.preventDefault();
  const company = document.getElementById('rfqCompany').value.trim();
  const person = document.getElementById('rfqPerson').value.trim();
  const email = document.getElementById('rfqEmail').value.trim();
  const phone = document.getElementById('rfqPhone').value.trim();
  const mineral = document.getElementById('rfqMineral').value;
  const tonnage = document.getElementById('rfqTonnage').value.trim();
  const message = document.getElementById('rfqMessage').value.trim();

  const code = 'ENK-' + Math.floor(100000 + Math.random() * 900000);
  const subject = encodeURIComponent(`[Cotización ${code}] ${mineral} - ${company}`);
  const body = encodeURIComponent(
`Señores ENKAIMAR E.I.R.L. (RUC 20616132823)
Av. Dos de Mayo 305, Miraflores, Lima - Perú

Solicitamos cotización formal de exportación con los siguientes datos:

- Código RFQ: ${code}
- Empresa: ${company}
- Contacto: ${person}
- Email: ${email}
- Teléfono: ${phone}
- Mineral: ${mineral}
- Volumen / Incoterm: ${tonnage}
- Especificaciones adicionales: ${message || 'Estándar de exportación'}

Atentamente,
${person}
${company}`
  );

  const resBox = document.getElementById('oligaRfqResult');
  resBox.style.display = 'block';
  resBox.innerHTML = `
    <strong>✓ Solicitud #${code} preparada para ENKAIMAR E.I.R.L.</strong><br/>
    <span style="display:block; margin: 6px 0 10px;">Mineral: <strong>${mineral}</strong> (${tonnage})</span>
    <a href="mailto:comercial@enkaimar.com?cc=exportaciones@enkaimar.com&subject=${subject}&body=${body}" class="btn-oliga" style="padding:8px 18px; font-size:14px;">
      Enviar por Correo a comercial@enkaimar.com →
    </a>
  `;
}
