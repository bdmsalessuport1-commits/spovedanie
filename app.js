const sections = [
    {
        id: 'intro',
        badge: 'Introducere',
        title: 'Spovadă Generală',
        subtitle: 'Lăudat să fie Isus! Mărturisesc lui Dumnezeu Atotputernicul și Sfinției Voastre, Părinte, păcatele mele.',
        type: 'form',
        fields: [
            { id: 'ultima_spovada', label: 'Ultima oară m-am spovedit acum...', placeholder: 'ex: 3 luni, 1 an, 2 săptămâni', type: 'text' },
            { id: 'pocainta_impusa', label: 'Am făcut pocăința impusă?', type: 'radio', options: ['Da', 'Nu'] },
            { id: 'spovada_generala', label: 'Fac o spovadă generală începând cu...', placeholder: 'ex: ultimii 5 ani, de la prima spovedanie', type: 'text', hint: 'Completați doar dacă faceți o spovadă generală' }
        ]
    },
    {
        id: 'spovezi_precedente',
        badge: 'Spovezi Precedente',
        title: 'Spovezi Precedente',
        subtitle: 'Examinarea spovedaniilor anterioare',
        type: 'checklist',
        items: [
            { id: 'sp1', text: 'Nu am făcut spovezi bune (lipsa pregătirii sau a hotărârii)', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'sp2', text: 'Am ascuns păcate de moarte fiindcă îmi era rușine', detail: true, detailPlaceholder: 'La câte spovezi...' },
            { id: 'sp3', text: 'M-am împărtășit de mai multe ori după o spovedanie rea', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'sp4', text: 'M-am împărtășit având păcate de moarte', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'sp5', text: 'Am uitat să mărturisesc păcate de moarte, pe care nu le-am spus nici mai târziu', detail: true, detailPlaceholder: 'Care păcate...' },
            { id: 'sp6', text: 'M-am împărtășit fără să țin postul euharistic (cel puțin o oră înainte de a primi Sfânta Împărtășanie), prin omisiune sau voluntar', detail: false }
        ]
    },
    {
        id: 'porunca_1',
        badge: 'Porunca I',
        title: 'Eu sunt Domnul Dumnezeul tău, să nu ai alți dumnezei în afară de Mine, să nu-ți faci chip cioplit ca să te închini lui!',
        subtitle: 'Prima poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p1_1', text: 'Nu m-am rugat dimineața și/sau seara', detail: true, detailPlaceholder: 'Cât de des...' },
            { id: 'p1_2', text: 'Nu am dat atenție rugăciunilor când le-am făcut', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_3', text: 'Nu m-am purtat cu respect în Biserică: am vorbit, am râs', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_4', text: 'Am vorbit de rău despre religie, despre preoți, despre persoanele consacrate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_5', text: 'M-am descurajat în timpul încercărilor', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_6', text: 'M-am îndoit de credință sau de religie', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_7', text: 'Am fost superstițios', detail: true, detailPlaceholder: 'În ce fel...' },
            { id: 'p1_8', text: 'M-am încrezut în astrologie, în cărți, în prezicătorii viitorului', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_9', text: 'L-am încurajat și pe semenul meu pe această cale', detail: false },
            { id: 'p1_10', text: 'M-am încrezut în științele oculte (spiritism, vodoo, magie neagră etc.)', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_11', text: 'Am practicat meditația transcendentală', detail: false },
            { id: 'p1_12', text: 'M-am încrezut în secte', detail: true, detailPlaceholder: 'Specificați care...' }
        ]
    },
    {
        id: 'porunca_2',
        badge: 'Porunca II',
        title: 'Să nu iei numele Domnului Dumnezeului tău în zadar!',
        subtitle: 'A doua poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p2_1', text: 'Am înjurat de lucruri sfinte', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p2_2', text: 'Am blestemat', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p2_3', text: 'Am jurat strâmb', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'porunca_3', badge: 'Porunca III',
        title: 'Adu-ți aminte să sfințești ziua Domnului!',
        subtitle: 'A treia poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p3_1', text: 'Am lipsit duminica sau în sărbătorile de poruncă de la Sfânta Liturghie, fără vreun motiv grav, din vina mea', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p3_2', text: 'Am întârziat din vina mea la Liturghie', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p3_3', text: 'Am asistat la Liturghie fără a mă ruga, nu am fost atent și evlavios la Liturghie', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_4', text: 'Am lucrat duminica fără necesitate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_5', text: 'Nu am sfințit zilele de penitență după cum cere Biserica', detail: false }
        ]
    },
    {
        id: 'porunca_4', badge: 'Porunca IV',
        title: 'Cinstește pe tatăl tău și pe mama ta!',
        subtitle: 'A patra poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p4_1', text: 'Nu i-am ascultat pe părinți, i-am enervat, i-am supărat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_2', text: 'I-am bombănit pe părinți, nu i-am ajutat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_3', text: 'M-am supărat cu frații și surorile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_4', text: 'Nu i-am instruit, stăpânit, supravegheat pe copiii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_5', text: 'M-am purtat rău cu copiii, i-am bătut', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'porunca_5', badge: 'Porunca V',
        title: 'Să nu ucizi!', subtitle: 'A cincea poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p5_1', text: 'Am ținut ură, dispreț, dușmănie față de aproapele', detail: true, detailPlaceholder: 'Față de cine...' },
            { id: 'p5_2', text: 'I-am dorit răul aproapelui, am vrut să mă răzbun', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_3', text: 'Nu am vrut să iert', detail: true, detailPlaceholder: 'Pe cine, i-am iertat acum da/nu...' },
            { id: 'p5_4', text: 'Am insultat, am bătut, am rănit pe aproapele meu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_5', text: 'Am dat sfaturi rele, exemple rele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_6', text: 'Am neglijat faptul de a fi un bun apostol față de aproapele meu', detail: false }
        ]
    },
    {
        id: 'porunca_6_9', badge: 'Poruncile VI și IX',
        title: 'Să nu faci fapte necurate! Să nu poftești femeia/bărbatul aproapelui tău!',
        subtitle: 'A șasea și a noua poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p6_1', text: 'Am consimțit gândurilor necurate, fără a face fapte necurate', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p6_2', text: 'Am acceptat dorințe necurate fără a face fapte necurate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_3', text: 'Am privit cu dorințe păcătoase trupul meu sau al altora, imagini', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_4', text: 'Am avut atingeri necurate cu bărbați sau cu femei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_5', text: 'Am citit cărți imorale, reviste imorale, le-am dat și altora', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_6', text: 'Am vorbit murdar, am spus glume murdare', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p6_7', text: 'M-am uitat la filme imorale, la spectacole murdare', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_8', text: 'M-am îmbrăcat într-un mod indecent și/sau provocator', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_9', text: 'Am luat parte la jocuri indecente', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_10', text: 'Am trăit în concubinaj, am frecventat și/sau am trăit cu un bărbat/femeie căsătorită', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_11', text: 'Am comis adulter', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_12', text: 'Am îndeplinit actul căsătoriei într-un mod egoist fără să-mi fac griji de binele soțului/soției', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_13', text: 'Am comis fapte împotriva castității conjugale: singur, cu alții, contra naturii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_14', text: 'M-am făcut vinovat de prejudiciile fecundității (contracepție, sterilizare etc.)', detail: true, detailPlaceholder: 'Specificați...' },
            { id: 'p6_15', text: 'Am folosit contraceptive (prezervative, pastile, sterilete etc.)', detail: true, detailPlaceholder: 'Specificați...' },
            { id: 'p6_16', text: 'L-am împins pe aproapele meu și/sau l-am încurajat la contracepție sau la avort', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_17', text: 'Am făcut avort', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'porunca_7_10', badge: 'Poruncile VII și X',
        title: 'Să nu furi! Să nu poftești casa aproapelui tău!',
        subtitle: 'A șaptea și a zecea poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p7_1', text: 'Am furat', detail: true, detailPlaceholder: 'Ce, am dat înapoi da/nu, pot să dau înapoi...' },
            { id: 'p7_2', text: 'Am refuzat să dau înapoi ceea ce furasem', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_3', text: 'Am făcut pagube, nu am reparat paguba făcută', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_4', text: 'Am ajutat la furt, am încurajat la furt', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_5', text: 'Am păstrat, stricat, dat și/sau vândut obiecte care nu îmi aparțineau', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_6', text: 'Am cumpărat obiecte despre care știam că erau furate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_7', text: 'Am comis o fraudă în salariul lucrătorilor mei sau mai multe fraude', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_8', text: 'Am copiat la școală, am trișat la examene', detail: true, detailPlaceholder: 'De câte ori...' }
        ]
    },
    {
        id: 'porunca_8', badge: 'Porunca VIII',
        title: 'Să nu mărturisești strâmb împotriva aproapelui tău!',
        subtitle: 'A opta poruncă a lui Dumnezeu', type: 'checklist',
        items: [
            { id: 'p8_1', text: 'Am mințit', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p8_2', text: 'Am vorbit de rău pe alții și nu era adevărat (calomnie)', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_3', text: 'Am judecat pe nedrept, am ascultat voluntar calomnii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_4', text: 'Nu am îndreptat paguba făcută aproapelui meu prin vorbele și exemplele mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_5', text: 'Am spus altora păcate ușoare sau de moarte pe care aproapele meu le-a comis', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'poruncile_bisericii', badge: 'Poruncile Bisericii',
        title: 'Poruncile Bisericii', subtitle: 'Obligații față de Sfânta Biserică Catolică', type: 'checklist',
        items: [
            { id: 'pb_1', text: 'Nu m-am spovedit și nu m-am împărtășit în timpul Sfintelor Paști', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_2', text: 'Am neglijat frecventarea sacramentelor', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_3', text: 'Nu am ținut postul', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_4', text: 'Nu am fost duminica la Liturghie din vina mea', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'pb_5', text: 'Din egoism, nu am contribuit la întreținerea Bisericii', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'virtuti_teologale', badge: 'Virtuți Teologale',
        title: 'Virtutile Teologale', subtitle: 'Credința, Speranța, Dragostea', type: 'checklist',
        items: [
            { id: 'vt_1', text: 'Nu am crezut în dragostea lui Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_2', text: 'Nu am avut încredere în Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_3', text: 'Nu am fost milostiv față de aproapele meu (în sentimentele mele, în cuvintele mele, în faptele mele: antipatie, ură, înjurături, clevetire, dispreț)', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },
    {
        id: 'virtuti_cardinale', badge: 'Virtuți Cardinale',
        title: 'Virtutile Cardinale', subtitle: 'Prudența, Dreptatea, Puterea-Tăria, Cumpătarea, Înțelepciunea', type: 'checklist',
        items: [
            { id: 'vc_1', text: 'Nu am fost atent în judecățile mele, în deciziile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_2', text: 'Nu i-am ascultat pe părinții mei, pe superiorii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_3', text: 'Mi-a lipsit puterea lăsându-mă dus la descurajare, neacceptând suferința', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_4', text: 'Nu am fost cumpătat: în mâncare, somn, plăcerile legitime', detail: true, detailPlaceholder: 'Specificați...' }
        ]
    },
    {
        id: 'pacate_capitale', badge: 'Păcate Capitale',
        title: 'Păcatele Capitale', subtitle: 'Mândria, Avariția, Invidia, Mânia, Lăcomia, Lenea, Desfrâul', type: 'checklist',
        items: [
            { id: 'pc_1', text: 'Am fost orgolios, pretențios, mândru', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_2', text: 'M-am mândrit ca să mi se aducă laude', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_3', text: 'Nu am vrut să-mi recunosc greșelile, am ținut prea mult la ideile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_4', text: 'Am fost închis față de punctul de vedere al celorlalți', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_5', text: 'Am refuzat să fiu milostiv din cauza dragostei față de bani', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_6', text: 'Mi-am risipit banii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_7', text: 'Am fost gelos față de aproapele meu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_8', text: 'M-am întristat de binele altora, m-am bucurat de răul care li se întâmplă', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_9', text: 'M-am enervat', detail: true, detailPlaceholder: 'De câte ori, în ce context...' },
            { id: 'pc_10', text: 'Am comis exces în mâncare', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_11', text: 'Am comis exces în băutură, m-am îmbătat', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'pc_12', text: 'Mi-am făcut rău sănătății prin fumat sau prin droguri', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_13', text: 'Am fost leneș să mă trezesc, să-mi fac datoria stării mele de viață, să-mi fac datoria religioasă', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    }
];

const state = { currentStep: 0, totalSteps: sections.length, answers: {} };

const app = {
    start() {
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('question-screen').classList.add('active');
        this.render();
        window.scrollTo(0, 0);
    },
    render() {
        const section = sections[state.currentStep];
        const container = document.getElementById('question-container');
        const progress = ((state.currentStep + 1) / state.totalSteps) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = (state.currentStep + 1) + ' / ' + state.totalSteps;
        document.getElementById('btn-prev').disabled = state.currentStep === 0;
        document.getElementById('btn-next').textContent = state.currentStep === state.totalSteps - 1 ? 'Finalizează \u2720' : 'Continuă \u2192';
        let html = '';
        html += '<span class="section-badge">' + section.badge + '</span>';
        html += '<h2 class="section-title">' + section.title + '</h2>';
        if (section.subtitle) html += '<p class="section-subtitle">' + section.subtitle + '</p>';
        if (section.type === 'form') html += this.renderForm(section);
        else if (section.type === 'checklist') html += this.renderChecklist(section);
        container.style.animation = 'none';
        container.offsetHeight;
        container.style.animation = 'slideIn 0.4s ease';
        container.innerHTML = html;
        this.bindEvents(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    renderForm(section) {
        let html = '';
        section.fields.forEach(field => {
            const savedValue = state.answers[field.id] || '';
            html += '<div class="input-group">';
            html += '<label for="' + field.id + '">' + field.label + '</label>';
            if (field.type === 'text') {
                html += '<input type="text" id="' + field.id + '" placeholder="' + (field.placeholder || '') + '" value="' + savedValue + '">';
                if (field.hint) html += '<p class="hint">' + field.hint + '</p>';
            } else if (field.type === 'radio') {
                html += '<div class="radio-group">';
                field.options.forEach(opt => {
                    const selected = savedValue === opt ? ' selected' : '';
                    html += '<div class="radio-option' + selected + '" data-field="' + field.id + '" data-value="' + opt + '">' + opt + '</div>';
                });
                html += '</div>';
            }
            html += '</div>';
        });
        return html;
    },
    renderChecklist(section) {
        let html = '';
        section.items.forEach(item => {
            const isChecked = state.answers[item.id] && state.answers[item.id].checked;
            const detailValue = (state.answers[item.id] && state.answers[item.id].detail) || '';
            const checkedClass = isChecked ? ' checked' : '';
            html += '<div class="question-item' + checkedClass + '" data-id="' + item.id + '">';
            html += '<div class="question-item-header"><div class="custom-checkbox"></div>';
            html += '<span class="question-label">' + item.text + '</span></div>';
            if (item.detail) {
                html += '<div class="detail-field"><textarea placeholder="' + (item.detailPlaceholder || 'Adăugați detalii...') + '" rows="1">' + detailValue + '</textarea></div>';
            }
            html += '</div>';
        });
        return html;
    },
    bindEvents(section) {
        if (section.type === 'form') {
            section.fields.forEach(field => {
                if (field.type === 'text') {
                    const el = document.getElementById(field.id);
                    if (el) el.addEventListener('input', (e) => { state.answers[field.id] = e.target.value; });
                }
            });
            document.querySelectorAll('.radio-option').forEach(el => {
                el.addEventListener('click', function() {
                    const fieldId = this.dataset.field;
                    state.answers[fieldId] = this.dataset.value;
                    document.querySelectorAll('.radio-option[data-field="' + fieldId + '"]').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        } else if (section.type === 'checklist') {
            document.querySelectorAll('.question-item').forEach(el => {
                const id = el.dataset.id;
                el.querySelector('.question-item-header').addEventListener('click', () => {
                    const isNowChecked = !el.classList.contains('checked');
                    el.classList.toggle('checked');
                    if (!state.answers[id]) state.answers[id] = { checked: false, detail: '' };
                    state.answers[id].checked = isNowChecked;
                    if (isNowChecked) { const ta = el.querySelector('textarea'); if (ta) setTimeout(() => ta.focus(), 350); }
                });
                const textarea = el.querySelector('textarea');
                if (textarea) {
                    textarea.addEventListener('input', (e) => {
                        if (!state.answers[id]) state.answers[id] = { checked: true, detail: '' };
                        state.answers[id].detail = e.target.value;
                        e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px';
                    });
                    textarea.addEventListener('click', (e) => e.stopPropagation());
                }
            });
        }
    },
    next() {
        if (state.currentStep < state.totalSteps - 1) { state.currentStep++; this.render(); }
        else { document.getElementById('question-screen').classList.remove('active'); document.getElementById('end-screen').classList.add('active'); window.scrollTo(0, 0); }
    },
    prev() { if (state.currentStep > 0) { state.currentStep--; this.render(); } },
    restart() { state.currentStep = 0; state.answers = {}; document.getElementById('end-screen').classList.remove('active'); document.getElementById('start-screen').classList.add('active'); window.scrollTo(0, 0); },
    generatePDF() {
        const container = document.getElementById('pdf-content');
        container.innerHTML = this.buildPdfHtml();
        container.style.display = 'block';
        const today = new Date();
        const dateStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
        const opt = {
            margin: [15, 18, 20, 18], filename: 'Spovedanie_' + dateStr + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };
        html2pdf().set(opt).from(container).save().then(() => { container.style.display = 'none'; container.innerHTML = ''; });
    },
    buildPdfHtml() {
        let html = '<style>* { margin: 0; padding: 0; box-sizing: border-box; } body, div, p, h1, h2, h3, span, li, ul { font-family: "Crimson Text", "Georgia", "Times New Roman", serif; color: #2C1810; line-height: 1.6; } .pdf-wrapper { width: 100%; padding: 5px; } .pdf-header { text-align: center; margin-bottom: 20px; } .pdf-header h1 { font-size: 22px; color: #6B1D2A; letter-spacing: 2px; margin-bottom: 5px; } .pdf-cross { font-size: 28px; color: #C9A84C; margin: 8px 0; } .pdf-hr { border: none; border-top: 2px solid #C9A84C; margin: 12px 0; } .pdf-hr-thin { border: none; border-top: 1px solid #E8D5A0; margin: 10px 0; } .pdf-info { margin-bottom: 15px; } .pdf-info h3 { font-size: 12px; color: #6B1D2A; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; } .pdf-info p { font-size: 11px; margin-bottom: 3px; padding-left: 10px; } .pdf-section { margin-bottom: 14px; page-break-inside: avoid; } .pdf-section-title { font-size: 12px; font-weight: bold; color: #6B1D2A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; padding-bottom: 4px; border-bottom: 1px solid #E8D5A0; } .pdf-section-subtitle { font-size: 10px; font-style: italic; color: #5A3E2B; margin-bottom: 8px; } .pdf-item { font-size: 11px; margin-bottom: 4px; padding-left: 12px; text-indent: -12px; } .pdf-item-bullet { color: #6B1D2A; font-weight: bold; } .pdf-item-detail { font-size: 10px; font-style: italic; color: #5A3E2B; padding-left: 20px; margin-bottom: 4px; } .pdf-act { border: 1.5px solid #C9A84C; border-radius: 6px; padding: 15px 18px; margin: 15px 0; text-align: justify; } .pdf-act h2 { font-size: 14px; color: #6B1D2A; text-align: center; margin-bottom: 10px; } .pdf-act p { font-size: 11px; font-style: italic; line-height: 1.7; } .pdf-amin { text-align: right; font-weight: bold; font-style: italic; color: #6B1D2A; font-size: 12px; margin-top: 8px; } .pdf-closing { font-size: 10px; font-style: italic; color: #5A3E2B; margin: 12px 0; text-align: justify; } .pdf-footer { text-align: center; font-size: 13px; font-weight: bold; color: #6B1D2A; margin-top: 18px; letter-spacing: 1px; } .pdf-page-footer { text-align: center; font-size: 8px; color: #999; margin-top: 20px; padding-top: 8px; border-top: 1px solid #eee; }</style>';
        html += '<div class="pdf-wrapper"><div class="pdf-header"><div class="pdf-cross">\u2720</div><h1>SPOVAD\u0102 GENERAL\u0102</h1><p style="font-size:11px;color:#8B7355;font-style:italic;">Lista p\u0103catelor pentru Sf\u00e2nta Spovedanie</p></div><hr class="pdf-hr">';
        if (state.answers['ultima_spovada'] || state.answers['pocainta_impusa'] || state.answers['spovada_generala']) {
            html += '<div class="pdf-info"><h3>Informa\u021bii Generale</h3>';
            if (state.answers['ultima_spovada']) html += '<p><strong>Ultima spovedanie:</strong> ' + this.escapeHtml(state.answers['ultima_spovada']) + '</p>';
            if (state.answers['pocainta_impusa']) html += '<p><strong>Poc\u0103in\u021ba impus\u0103 f\u0103cut\u0103:</strong> ' + this.escapeHtml(state.answers['pocainta_impusa']) + '</p>';
            if (state.answers['spovada_generala']) html += '<p><strong>Spovad\u0103 general\u0103 \u00eencep\u00e2nd cu:</strong> ' + this.escapeHtml(state.answers['spovada_generala']) + '</p>';
            html += '</div><hr class="pdf-hr-thin">';
        }
        for (let i = 1; i < sections.length; i++) {
            const section = sections[i];
            const checkedItems = section.items.filter(item => state.answers[item.id] && state.answers[item.id].checked);
            if (checkedItems.length === 0) continue;
            html += '<div class="pdf-section"><div class="pdf-section-title">' + this.escapeHtml(section.badge) + '</div>';
            if (section.badge.includes('Porunca') || section.badge.includes('Poruncile')) html += '<div class="pdf-section-subtitle">' + this.escapeHtml(section.title) + '</div>';
            checkedItems.forEach(item => {
                html += '<div class="pdf-item"><span class="pdf-item-bullet">\u2022</span> ' + this.escapeHtml(item.text) + '</div>';
                const detail = state.answers[item.id] && state.answers[item.id].detail;
                if (detail && detail.trim()) html += '<div class="pdf-item-detail">\u2192 ' + this.escapeHtml(detail.trim()) + '</div>';
            });
            html += '</div>';
        }
        html += '<hr class="pdf-hr"><div class="pdf-act"><h2>Act de C\u0103in\u021b\u0103</h2><p>Doamne, Dumnezeul meu, m\u0103 c\u0103iesc din toat\u0103 inima de toate p\u0103catele mele \u0219i le ur\u0103sc mai presus de toate, pentru c\u0103 prin ele am pierdut harul T\u0103u \u0219i \u00cemp\u0103r\u0103\u021bia cerurilor \u0219i m-am f\u0103cut vrednic de pedeapsa ve\u0219nic\u0103 a iadului. Dar mai mult m\u0103 c\u0103iesc pentru c\u0103, p\u0103c\u0103tuind, Te-am m\u00e2niat pe Tine, P\u0103rintele meu, M\u00e2ntuitorul meu \u0219i Dumnezeul meu, at\u00e2t de mare \u0219i at\u00e2t de bun. Pentru aceasta, m\u0103 hot\u0103r\u0103sc, cu ajutorul harului T\u0103u, s\u0103 nu mai p\u0103c\u0103tuiesc \u0219i s\u0103 fug de orice prilej de p\u0103cat.</p><p class="pdf-amin">Amin.</p></div>';
        html += '<p class="pdf-closing">M\u0103 \u00eenvinuiesc \u0219i de p\u0103catele pe care nu le \u0219tiu, de care nu \u00eemi aduc aminte, cele din toat\u0103 via\u021ba mea \u0219i de tot ceea ce L-ar fi sup\u0103rat pe Domnul. M\u0103 \u00eenvinuiesc a\u0219a cum m\u0103 \u0219tie Domnul vinovat.</p>';
        html += '<div class="pdf-footer">FIE ISUS IUBIT DE C\u0102TRE TOATE INIMILE!</div>';
        html += '<div class="pdf-page-footer">Spovad\u0103 General\u0103 \u2014 Ghid de examinare a con\u0219tiin\u021bei</div></div>';
        return html;
    },
    escapeHtml(text) { const div = document.createElement('div'); div.appendChild(document.createTextNode(text)); return div.innerHTML; }
};

document.addEventListener('keydown', (e) => {
    const qs = document.getElementById('question-screen');
    if (!qs.classList.contains('active')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'Enter') app.next();
    else if (e.key === 'ArrowLeft') app.prev();
});
