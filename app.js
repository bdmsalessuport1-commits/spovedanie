/* ============================================
   SPOVEDANIE GENERALA - APLICATIE INTERACTIVA
   ============================================ */

// ============ DATA: Toate sectiunile si intrebarile ============
const sections = [
    // ---- SECTIUNEA 0: INTRODUCERE ----
    {
        id: 'intro',
        badge: 'Introducere',
        title: 'Spovadă Generală',
        subtitle: 'Lăudat să fie Isus! Mărturisesc lui Dumnezeu Atotputernicul și Sfinției Voastre, Părinte, păcatele mele.',
        type: 'form',
        fields: [
            { id: 'ultima_spovada', label: 'Data ultimei spovedanii:', type: 'date' },
            { id: 'pocainta_impusa', label: 'Am făcut pocăința impusă?', type: 'radio', options: ['Da', 'Nu'] },
            { id: 'spovada_generala', label: 'Fac o spovadă generală începând cu...', placeholder: 'ex: ultimii 5 ani, de la prima spovedanie', type: 'text', hint: 'Completați doar dacă faceți o spovadă generală' }
        ]
    },

    // ---- SECTIUNEA 1: SPOVEZI PRECEDENTE ----
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

    // ---- SECTIUNEA 2: PORUNCA 1 ----
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

    // ---- SECTIUNEA 3: PORUNCA 2 ----
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

    // ---- SECTIUNEA 4: PORUNCA 3 ----
    {
        id: 'porunca_3',
        badge: 'Porunca III',
        title: 'Adu-ți aminte să sfințești ziua Domnului!',
        subtitle: 'A treia poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p3_1', text: 'Am lipsit duminica sau în sărbătorile de poruncă de la Sfânta Liturghie, fără vreun motiv grav, din vina mea', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p3_2', text: 'Am întârziat din vina mea la Liturghie', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p3_3', text: 'Am asistat la Liturghie fără a mă ruga, nu am fost atent și evlavios la Liturghie', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_4', text: 'Am lucrat duminica fără necesitate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_5', text: 'Nu am sfințit zilele de penitență după cum cere Biserica', detail: false }
        ]
    },

    // ---- SECTIUNEA 5: PORUNCA 4 ----
    {
        id: 'porunca_4',
        badge: 'Porunca IV',
        title: 'Cinstește pe tatăl tău și pe mama ta!',
        subtitle: 'A patra poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p4_1', text: 'Nu i-am ascultat pe părinți, i-am enervat, i-am supărat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_2', text: 'I-am bombănit pe părinți, nu i-am ajutat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_3', text: 'M-am supărat cu frații și surorile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_4', text: 'Nu i-am instruit, stăpânit, supravegheat pe copiii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_5', text: 'M-am purtat rău cu copiii, i-am bătut', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 6: PORUNCA 5 ----
    {
        id: 'porunca_5',
        badge: 'Porunca V',
        title: 'Să nu ucizi!',
        subtitle: 'A cincea poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p5_1', text: 'Am ținut ură, dispreț, dușmănie față de aproapele', detail: true, detailPlaceholder: 'Față de cine...' },
            { id: 'p5_2', text: 'I-am dorit răul aproapelui, am vrut să mă răzbun', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_3', text: 'Nu am vrut să iert', detail: true, detailPlaceholder: 'Pe cine, i-am iertat acum da/nu...' },
            { id: 'p5_4', text: 'Am insultat, am bătut, am rănit pe aproapele meu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_5', text: 'Am dat sfaturi rele, exemple rele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_6', text: 'Am neglijat faptul de a fi un bun apostol față de aproapele meu', detail: false }
        ]
    },

    // ---- SECTIUNEA 7: PORUNCA 6 si 9 ----
    {
        id: 'porunca_6_9',
        badge: 'Poruncile VI și IX',
        title: 'Să nu faci fapte necurate! Să nu poftești femeia/bărbatul aproapelui tău!',
        subtitle: 'A șasea și a noua poruncă a lui Dumnezeu',
        type: 'checklist',
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

    // ---- SECTIUNEA 8: PORUNCA 7 si 10 ----
    {
        id: 'porunca_7_10',
        badge: 'Poruncile VII și X',
        title: 'Să nu furi! Să nu poftești casa aproapelui tău!',
        subtitle: 'A șaptea și a zecea poruncă a lui Dumnezeu',
        type: 'checklist',
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

    // ---- SECTIUNEA 9: PORUNCA 8 ----
    {
        id: 'porunca_8',
        badge: 'Porunca VIII',
        title: 'Să nu mărturisești strâmb împotriva aproapelui tău!',
        subtitle: 'A opta poruncă a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p8_1', text: 'Am mințit', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'p8_2', text: 'Am vorbit de rău pe alții și nu era adevărat (calomnie)', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_3', text: 'Am judecat pe nedrept, am ascultat voluntar calomnii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_4', text: 'Nu am îndreptat paguba făcută aproapelui meu prin vorbele și exemplele mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_5', text: 'Am spus altora păcate ușoare sau de moarte pe care aproapele meu le-a comis', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 10: PORUNCILE BISERICII ----
    {
        id: 'poruncile_bisericii',
        badge: 'Poruncile Bisericii',
        title: 'Poruncile Bisericii',
        subtitle: 'Obligații față de Sfânta Biserică Catolică',
        type: 'checklist',
        items: [
            { id: 'pb_1', text: 'Nu m-am spovedit și nu m-am împărtășit în timpul Sfintelor Paști', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_2', text: 'Am neglijat frecventarea sacramentelor', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_3', text: 'Nu am ținut postul', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_4', text: 'Nu am fost duminica la Liturghie din vina mea', detail: true, detailPlaceholder: 'De câte ori...' },
            { id: 'pb_5', text: 'Din egoism, nu am contribuit la întreținerea Bisericii', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 11: VIRTUTILE TEOLOGALE ----
    {
        id: 'virtuti_teologale',
        badge: 'Virtuți Teologale',
        title: 'Virtutile Teologale',
        subtitle: 'Credința, Speranța, Dragostea',
        type: 'checklist',
        items: [
            { id: 'vt_1', text: 'Nu am crezut în dragostea lui Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_2', text: 'Nu am avut încredere în Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_3', text: 'Nu am fost milostiv față de aproapele meu (în sentimentele mele, în cuvintele mele, în faptele mele: antipatie, ură, înjurături, clevetire, dispreț)', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 12: VIRTUTILE CARDINALE ----
    {
        id: 'virtuti_cardinale',
        badge: 'Virtuți Cardinale',
        title: 'Virtutile Cardinale',
        subtitle: 'Prudența, Dreptatea, Puterea-Tăria, Cumpătarea, Înțelepciunea',
        type: 'checklist',
        items: [
            { id: 'vc_1', text: 'Nu am fost atent în judecățile mele, în deciziile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_2', text: 'Nu i-am ascultat pe părinții mei, pe superiorii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_3', text: 'Mi-a lipsit puterea lăsându-mă dus la descurajare, neacceptând suferința', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_4', text: 'Nu am fost cumpătat: în mâncare, somn, plăcerile legitime', detail: true, detailPlaceholder: 'Specificați...' }
        ]
    },

    // ---- SECTIUNEA 13: PACATELE CAPITALE ----
    {
        id: 'pacate_capitale',
        badge: 'Păcate Capitale',
        title: 'Păcatele Capitale',
        subtitle: 'Mândria, Avariția, Invidia, Mânia, Lăcomia, Lenea, Desfrâul',
        type: 'checklist',
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
            { id: 'pc_12', text: 'Mi-am făcut rău sănății prin fumat sau prin droguri', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_13', text: 'Am fost leneș să mă trezesc, să-mi fac datoria stării mele de viață, să-mi fac datoria religioasă', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    }
];

// ============ APP STATE ============
const state = {
    currentStep: 0,
    totalSteps: sections.length,
    answers: {} // stores all user input
};

// ============ APP LOGIC ============
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

        // Update progress
        const progress = ((state.currentStep + 1) / state.totalSteps) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = (state.currentStep + 1) + ' / ' + state.totalSteps;

        // Update navigation buttons
        document.getElementById('btn-prev').disabled = state.currentStep === 0;
        document.getElementById('btn-next').textContent = state.currentStep === state.totalSteps - 1 ? 'Finalizează ✝' : 'Continuă →';

        // Build content
        let html = '';
        html += `<span class="section-badge">${section.badge}</span>`;
        html += `<h2 class="section-title">${section.title}</h2>`;
        if (section.subtitle) {
            html += `<p class="section-subtitle">${section.subtitle}</p>`;
        }

        if (section.type === 'form') {
            html += this.renderForm(section);
        } else if (section.type === 'checklist') {
            html += this.renderChecklist(section);
        }

        // Apply animation
        container.style.animation = 'none';
        container.offsetHeight; // trigger reflow
        container.style.animation = 'slideIn 0.4s ease';
        container.innerHTML = html;

        // Bind events after render
        this.bindEvents(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderForm(section) {
        let html = '';
        section.fields.forEach(field => {
            const savedValue = state.answers[field.id] || '';
            html += '<div class="input-group">';
            html += `<label for="${field.id}">${field.label}</label>`;

            if (field.type === 'date') {
                html += `<input type="date" id="${field.id}" value="${savedValue}">`;
                if (field.hint) {
                    html += `<p class="hint">${field.hint}</p>`;
                }
            } else if (field.type === 'text') {
                html += `<input type="text" id="${field.id}" placeholder="${field.placeholder || ''}" value="${savedValue}">`;
                if (field.hint) {
                    html += `<p class="hint">${field.hint}</p>`;
                }
            } else if (field.type === 'radio') {
                html += '<div class="radio-group">';
                field.options.forEach(opt => {
                    const selected = savedValue === opt ? ' selected' : '';
                    html += `<div class="radio-option${selected}" data-field="${field.id}" data-value="${opt}">${opt}</div>`;
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

            html += `<div class="question-item${checkedClass}" data-id="${item.id}">`;
            html += '<div class="question-item-header">';
            html += '<div class="custom-checkbox"></div>';
            html += `<span class="question-label">${item.text}</span>`;
            html += '</div>';

            if (item.detail) {
                html += '<div class="detail-field">';
                html += `<textarea placeholder="${item.detailPlaceholder || 'Adăugați detalii...'}" rows="1">${detailValue}</textarea>`;
                html += '</div>';
            }

            html += '</div>';
        });
        return html;
    },

    bindEvents(section) {
        if (section.type === 'form') {
            // Text inputs
            section.fields.forEach(field => {
                if (field.type === 'text' || field.type === 'date') {
                    const el = document.getElementById(field.id);
                    if (el) {
                        el.addEventListener('input', (e) => {
                            state.answers[field.id] = e.target.value;
                        });
                        el.addEventListener('change', (e) => {
                            state.answers[field.id] = e.target.value;
                        });
                    }
                }
            });

            // Radio options
            document.querySelectorAll('.radio-option').forEach(el => {
                el.addEventListener('click', function () {
                    const fieldId = this.dataset.field;
                    const value = this.dataset.value;
                    state.answers[fieldId] = value;

                    // Update visual
                    document.querySelectorAll(`.radio-option[data-field="${fieldId}"]`).forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            });

        } else if (section.type === 'checklist') {
            document.querySelectorAll('.question-item').forEach(el => {
                const id = el.dataset.id;

                // Click on header to toggle
                const header = el.querySelector('.question-item-header');
                header.addEventListener('click', () => {
                    const isNowChecked = !el.classList.contains('checked');
                    el.classList.toggle('checked');

                    if (!state.answers[id]) {
                        state.answers[id] = { checked: false, detail: '' };
                    }
                    state.answers[id].checked = isNowChecked;

                    // Focus textarea if checking and has detail
                    if (isNowChecked) {
                        const textarea = el.querySelector('textarea');
                        if (textarea) {
                            setTimeout(() => textarea.focus(), 350);
                        }
                    }
                });

                // Textarea input
                const textarea = el.querySelector('textarea');
                if (textarea) {
                    textarea.addEventListener('input', (e) => {
                        if (!state.answers[id]) {
                            state.answers[id] = { checked: true, detail: '' };
                        }
                        state.answers[id].detail = e.target.value;

                        // Auto-resize
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    });

                    // Prevent click from propagating to header
                    textarea.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
            });
        }
    },

    next() {
        if (state.currentStep < state.totalSteps - 1) {
            state.currentStep++;
            this.render();
        } else {
            // Go to end screen
            document.getElementById('question-screen').classList.remove('active');
            document.getElementById('end-screen').classList.add('active');
            window.scrollTo(0, 0);
        }
    },

    prev() {
        if (state.currentStep > 0) {
            state.currentStep--;
            this.render();
        }
    },

    restart() {
        state.currentStep = 0;
        state.answers = {};
        document.getElementById('end-screen').classList.remove('active');
        document.getElementById('start-screen').classList.add('active');
        window.scrollTo(0, 0);
    },

    // ============ PDF GENERATION (html2pdf.js — cu diacritice) ============
    generatePDF() {
        const container = document.getElementById('pdf-content');
        container.innerHTML = this.buildPdfHtml();
        container.style.display = 'block';

        const today = new Date();
        const dateStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

        const opt = {
            margin:       [15, 18, 20, 18],
            filename:     'Spovedanie_' + dateStr + '.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2pdf().set(opt).from(container).save().then(() => {
            container.style.display = 'none';
            container.innerHTML = '';
        });
    },

    buildPdfHtml() {
        let html = '';

        // Inline styles for PDF rendering
        const styles = `
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body, div, p, h1, h2, h3, span, li, ul {
                    font-family: 'Crimson Text', 'Georgia', 'Times New Roman', serif;
                    color: #2C1810;
                    line-height: 1.6;
                }
                .pdf-wrapper { width: 100%; padding: 5px; }
                .pdf-header { text-align: center; margin-bottom: 20px; }
                .pdf-header h1 {
                    font-size: 22px; color: #6B1D2A; letter-spacing: 2px;
                    margin-bottom: 5px;
                }
                .pdf-cross { font-size: 28px; color: #C9A84C; margin: 8px 0; }
                .pdf-hr {
                    border: none; border-top: 2px solid #C9A84C;
                    margin: 12px 0;
                }
                .pdf-hr-thin {
                    border: none; border-top: 1px solid #E8D5A0;
                    margin: 10px 0;
                }
                .pdf-info { margin-bottom: 15px; }
                .pdf-info h3 {
                    font-size: 12px; color: #6B1D2A; text-transform: uppercase;
                    letter-spacing: 1px; margin-bottom: 6px;
                }
                .pdf-info p { font-size: 11px; margin-bottom: 3px; padding-left: 10px; }
                .pdf-section { margin-bottom: 14px; page-break-inside: avoid; }
                .pdf-section-title {
                    font-size: 12px; font-weight: bold; color: #6B1D2A;
                    text-transform: uppercase; letter-spacing: 0.5px;
                    margin-bottom: 4px; padding-bottom: 4px;
                    border-bottom: 1px solid #E8D5A0;
                }
                .pdf-section-subtitle {
                    font-size: 10px; font-style: italic; color: #5A3E2B;
                    margin-bottom: 8px;
                }
                .pdf-item {
                    font-size: 11px; margin-bottom: 4px; padding-left: 12px;
                    text-indent: -12px;
                }
                .pdf-item-bullet { color: #6B1D2A; font-weight: bold; }
                .pdf-item-detail {
                    font-size: 10px; font-style: italic; color: #5A3E2B;
                    padding-left: 20px; margin-bottom: 4px;
                }
                .pdf-act {
                    border: 1.5px solid #C9A84C; border-radius: 6px;
                    padding: 15px 18px; margin: 15px 0; text-align: justify;
                }
                .pdf-act h2 {
                    font-size: 14px; color: #6B1D2A; text-align: center;
                    margin-bottom: 10px;
                }
                .pdf-act p { font-size: 11px; font-style: italic; line-height: 1.7; }
                .pdf-amin {
                    text-align: right; font-weight: bold; font-style: italic;
                    color: #6B1D2A; font-size: 12px; margin-top: 8px;
                }
                .pdf-closing {
                    font-size: 10px; font-style: italic; color: #5A3E2B;
                    margin: 12px 0; text-align: justify;
                }
                .pdf-footer {
                    text-align: center; font-size: 13px; font-weight: bold;
                    color: #6B1D2A; margin-top: 18px; letter-spacing: 1px;
                }
                .pdf-page-footer {
                    text-align: center; font-size: 8px; color: #999;
                    margin-top: 20px; padding-top: 8px;
                    border-top: 1px solid #eee;
                }
            </style>
        `;

        html += styles;
        html += '<div class="pdf-wrapper">';

        // ---- HEADER ----
        html += '<div class="pdf-header">';
        html += '<div class="pdf-cross">&#10013;</div>';
        html += '<h1>SPOVADĂ GENERALĂ</h1>';
        html += '<p style="font-size:11px;color:#8B7355;font-style:italic;">Lista păcatelor pentru Sfânta Spovedanie</p>';
        html += '</div>';
        html += '<hr class="pdf-hr">';

        // ---- INTRO DATA ----
        if (state.answers['ultima_spovada'] || state.answers['pocainta_impusa'] || state.answers['spovada_generala']) {
            html += '<div class="pdf-info">';
            html += '<h3>Informații Generale</h3>';
            if (state.answers['ultima_spovada']) {
                html += '<p><strong>Ultima spovedanie:</strong> ' + this.escapeHtml(state.answers['ultima_spovada']) + '</p>';
            }
            if (state.answers['pocainta_impusa']) {
                html += '<p><strong>Pocăința impusă făcută:</strong> ' + this.escapeHtml(state.answers['pocainta_impusa']) + '</p>';
            }
            if (state.answers['spovada_generala']) {
                html += '<p><strong>Spovadă generală începând cu:</strong> ' + this.escapeHtml(state.answers['spovada_generala']) + '</p>';
            }
            html += '</div>';
            html += '<hr class="pdf-hr-thin">';
        }

        // ---- SECTIONS ----
        for (let i = 1; i < sections.length; i++) {
            const section = sections[i];
            const checkedItems = section.items.filter(item =>
                state.answers[item.id] && state.answers[item.id].checked
            );

            if (checkedItems.length === 0) continue;

            html += '<div class="pdf-section">';
            html += '<div class="pdf-section-title">' + this.escapeHtml(section.badge) + '</div>';

            // Show full commandment title for commandment sections
            if (section.badge.includes('Porunca') || section.badge.includes('Poruncile')) {
                html += '<div class="pdf-section-subtitle">' + this.escapeHtml(section.title) + '</div>';
            }

            checkedItems.forEach(item => {
                html += '<div class="pdf-item"><span class="pdf-item-bullet">&#8226;</span> ' + this.escapeHtml(item.text) + '</div>';

                const detail = state.answers[item.id] && state.answers[item.id].detail;
                if (detail && detail.trim()) {
                    html += '<div class="pdf-item-detail">&#8594; ' + this.escapeHtml(detail.trim()) + '</div>';
                }
            });

            html += '</div>';
        }

        // ---- ACT DE CAINTA ----
        html += '<hr class="pdf-hr">';
        html += '<div class="pdf-act">';
        html += '<h2>Act de Căință</h2>';
        html += '<p>Doamne, Dumnezeul meu, mă căiesc din toată inima de toate păcatele mele și le ';
        html += 'urăsc mai presus de toate, pentru că prin ele am pierdut harul Tău și Împărăția ';
        html += 'cerurilor și m-am făcut vrednic de pedeapsa veșnică a iadului. Dar mai mult mă ';
        html += 'căiesc pentru că, păcătuind, Te-am mâniat pe Tine, Părintele meu, Mântuitorul ';
        html += 'meu și Dumnezeul meu, atât de mare și atât de bun. Pentru aceasta, mă hotărăsc, ';
        html += 'cu ajutorul harului Tău, să nu mai păcătuiesc și să fug de orice prilej de păcat.</p>';
        html += '<p class="pdf-amin">Amin.</p>';
        html += '</div>';

        // ---- CLOSING ----
        html += '<p class="pdf-closing">Mă învinuiesc și de păcatele pe care nu le știu, de care nu îmi aduc aminte, ';
        html += 'cele din toată viața mea și de tot ceea ce L-ar fi supărat pe Domnul. ';
        html += 'Mă învinuiesc așa cum mă știe Domnul vinovat.</p>';

        html += '<div class="pdf-footer">FIE ISUS IUBIT DE CĂTRE TOATE INIMILE!</div>';

        html += '<div class="pdf-page-footer">Spovadă Generală — Ghid de examinare a conștiinței</div>';

        html += '</div>'; // close pdf-wrapper
        return html;
    },

    // ============ LEGAL PAGES ============
    showLegal(page) {
        const modal = document.getElementById('legal-modal');
        const body = document.getElementById('legal-body');
        body.innerHTML = this.getLegalContent(page);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    closeLegal() {
        document.getElementById('legal-modal').style.display = 'none';
        document.body.style.overflow = '';
    },

    getLegalContent(page) {
        const contents = {
            cookies: `
                <h2>Politica de Cookies</h2>
                <p><strong>Ultima actualizare:</strong> Martie 2026</p>
                <h3>Ce sunt cookie-urile?</h3>
                <p>Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră de către browser-ul web atunci când vizitați un site.</p>
                <h3>Folosim cookie-uri?</h3>
                <p><strong>Nu.</strong> Această aplicație nu utilizează cookie-uri de niciun fel. Nu folosim cookie-uri de tracking, cookie-uri analitice, cookie-uri publicitare sau orice alt tip de cookie.</p>
                <h3>Stocarea datelor</h3>
                <p>Aplicația funcționează exclusiv în browser-ul dumneavoastră. Nicio informație nu este transmisă către servere externe. Toate datele introduse rămân pe dispozitivul dumneavoastră și sunt șterse automat la închiderea paginii.</p>
                <h3>Servicii terțe</h3>
                <p>Aplicația încarcă fonturi de la Google Fonts și o bibliotecă JavaScript de la Cloudflare CDN. Aceste servicii pot avea propriile politici de confidențialitate. Nu transmitem nicio informație personală către aceste servicii.</p>
            `,
            termeni: `
                <h2>Termeni și Condiții</h2>
                <p><strong>Ultima actualizare:</strong> Martie 2026</p>
                <h3>1. Descrierea serviciului</h3>
                <p>Această aplicație este un ghid interactiv gratuit pentru examinarea conștiinței, destinat pregătirii pentru Sacramentul Spovedaniei în ritul catolic. Aplicația nu înlocuiește îndrumarea spirituală a unui preot.</p>
                <h3>2. Utilizarea aplicației</h3>
                <p>Aplicația este oferită gratuit și poate fi utilizată de orice persoană. Nu este necesară crearea unui cont sau furnizarea de date personale.</p>
                <h3>3. Responsabilitate</h3>
                <p>Conținutul aplicației are caracter orientativ și urmează structura tradițională a examinării conștiinței din tradiția catolică. Aplicația nu oferă sfaturi teologice personalizate. Pentru îndrumare spirituală, vă recomandăm să consultați un preot.</p>
                <h3>4. Proprietate intelectuală</h3>
                <p>Structura examinării conștiinței urmează învățătura tradițională a Bisericii Catolice. Codul sursă al aplicației și designul sunt protejate prin dreptul de autor.</p>
                <h3>5. Lipsa garanțiilor</h3>
                <p>Aplicația este furnizată „așa cum este", fără garanții de niciun fel. Nu garantăm disponibilitatea neîntreruptă a serviciului.</p>
                <h3>6. Modificări</h3>
                <p>Ne rezervăm dreptul de a modifica acești termeni în orice moment. Continuarea utilizării aplicației constituie acceptarea termenilor actualizați.</p>
            `,
            confidentialitate: `
                <h2>Politica de Confidențialitate</h2>
                <p><strong>Ultima actualizare:</strong> Martie 2026</p>
                <h3>1. Principiul nostru fundamental</h3>
                <p><strong>Nu colectăm, nu stocăm și nu transmitem nicio informație personală.</strong> Respectăm profund intimitatea actului spovedaniei și am conceput această aplicație cu confidențialitatea totală ca prioritate absolută.</p>
                <h3>2. Ce date colectăm?</h3>
                <p><strong>Niciuna.</strong> Aplicația nu solicită nume, adresă de e-mail, număr de telefon sau orice altă informație de identificare personală.</p>
                <h3>3. Unde sunt stocate datele introduse?</h3>
                <p>Toate informațiile pe care le introduceți (răspunsurile la întrebări, detaliile completate) există <strong>exclusiv în memoria browser-ului dumneavoastră</strong>, pe dispozitivul dumneavoastră. La închiderea paginii sau la reîncărcarea ei, toate datele sunt șterse automat și definitiv.</p>
                <h3>4. PDF-ul generat</h3>
                <p>Documentul PDF este generat local, pe dispozitivul dumneavoastră, fără a transmite date către vreun server. Fișierul se salvează direct pe dispozitivul dumneavoastră. Sunteți singurul responsabil pentru securitatea acestui fișier.</p>
                <h3>5. Tracking și analiză</h3>
                <p>Nu folosim Google Analytics, Facebook Pixel sau orice alt instrument de tracking. Nu monitorizăm comportamentul utilizatorilor. Nu avem acces la statistici despre utilizarea aplicației.</p>
                <h3>6. Transmitere către terți</h3>
                <p>Nu transmitem date către terți din simplu motiv că nu avem nicio dată de transmis. Nu avem baze de date, servere de stocare sau sisteme de analiză.</p>
                <h3>7. Contact</h3>
                <p>Pentru orice întrebare legată de confidențialitate, ne puteți contacta prin intermediul repository-ului GitHub al proiectului.</p>
            `
        };
        return contents[page] || '<p>Pagină negăsită.</p>';
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }
};

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    const questionScreen = document.getElementById('question-screen');
    if (!questionScreen.classList.contains('active')) return;

    // Don't intercept if user is typing in an input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'Enter') {
        app.next();
    } else if (e.key === 'ArrowLeft') {
        app.prev();
    }
});
