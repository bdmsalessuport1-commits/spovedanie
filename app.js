/* ============================================
   SPOVEDANIE GENERALA - APLICATIE INTERACTIVA
   ============================================ */

// ============ DATA: Toate sectiunile si intrebarile ============
const sections = [
    // ---- SECTIUNEA 0: INTRODUCERE ----
    {
        id: 'intro',
        badge: 'Introducere',
        title: 'SpovadÄ GeneralÄ',
        subtitle: 'LÄudat sÄ fie Isus! MÄrturisesc lui Dumnezeu Atotputernicul Èi SfinÈiei Voastre, PÄrinte, pÄcatele mele.',
        type: 'form',
        fields: [
            { id: 'ultima_spovada', label: 'Data ultimei spovedanii:', type: 'date' },
            { id: 'pocainta_impusa', label: 'Am fÄcut pocÄinÈa impusÄ?', type: 'radio', options: ['Da', 'Nu'] },
            { id: 'spovada_generala', label: 'Fac o spovadÄ generalÄ Ã®ncepÃ¢nd cu...', placeholder: 'ex: ultimii 5 ani, de la prima spovedanie', type: 'text', hint: 'CompletaÈi doar dacÄ faceÈi o spovadÄ generalÄ' }
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
            { id: 'sp1', text: 'Nu am fÄcut spovezi bune (lipsa pregÄtirii sau a hotÄrÃ¢rii)', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'sp2', text: 'Am ascuns pÄcate de moarte fiindcÄ Ã®mi era ruÈine', detail: true, detailPlaceholder: 'La cÃ¢te spovezi...' },
            { id: 'sp3', text: 'M-am Ã®mpÄrtÄÈit de mai multe ori dupÄ o spovedanie rea', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'sp4', text: 'M-am Ã®mpÄrtÄÈit avÃ¢nd pÄcate de moarte', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'sp5', text: 'Am uitat sÄ mÄrturisesc pÄcate de moarte, pe care nu le-am spus nici mai tÃ¢rziu', detail: true, detailPlaceholder: 'Care pÄcate...' },
            { id: 'sp6', text: 'M-am Ã®mpÄrtÄÈit fÄrÄ sÄ Èin postul euharistic (cel puÈin o orÄ Ã®nainte de a primi SfÃ¢nta ÃmpÄrtÄÈanie), prin omisiune sau voluntar', detail: false }
        ]
    },

    // ---- SECTIUNEA 2: PORUNCA 1 ----
    {
        id: 'porunca_1',
        badge: 'Porunca I',
        title: 'Eu sunt Domnul Dumnezeul tÄu, sÄ nu ai alÈi dumnezei Ã®n afarÄ de Mine, sÄ nu-Èi faci chip cioplit ca sÄ te Ã®nchini lui!',
        subtitle: 'Prima poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p1_1', text: 'Nu m-am rugat dimineaÈa Èi/sau seara', detail: true, detailPlaceholder: 'CÃ¢t de des...' },
            { id: 'p1_2', text: 'Nu am dat atenÈie rugÄciunilor cÃ¢nd le-am fÄcut', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_3', text: 'Nu m-am purtat cu respect Ã®n BisericÄ: am vorbit, am rÃ¢s', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_4', text: 'Am vorbit de rÄu despre religie, despre preoÈi, despre persoanele consacrate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_5', text: 'M-am descurajat Ã®n timpul Ã®ncercÄrilor', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_6', text: 'M-am Ã®ndoit de credinÈÄ sau de religie', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_7', text: 'Am fost superstiÈios', detail: true, detailPlaceholder: 'Ãn ce fel...' },
            { id: 'p1_8', text: 'M-am Ã®ncrezut Ã®n astrologie, Ã®n cÄrÈi, Ã®n prezicÄtorii viitorului', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_9', text: 'L-am Ã®ncurajat Èi pe semenul meu pe aceastÄ cale', detail: false },
            { id: 'p1_10', text: 'M-am Ã®ncrezut Ã®n ÈtiinÈele oculte (spiritism, vodoo, magie neagrÄ etc.)', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p1_11', text: 'Am practicat meditaÈia transcendentalÄ', detail: false },
            { id: 'p1_12', text: 'M-am Ã®ncrezut Ã®n secte', detail: true, detailPlaceholder: 'SpecificaÈi care...' }
        ]
    },

    // ---- SECTIUNEA 3: PORUNCA 2 ----
    {
        id: 'porunca_2',
        badge: 'Porunca II',
        title: 'SÄ nu iei numele Domnului Dumnezeului tÄu Ã®n zadar!',
        subtitle: 'A doua poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p2_1', text: 'Am Ã®njurat de lucruri sfinte', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p2_2', text: 'Am blestemat', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p2_3', text: 'Am jurat strÃ¢mb', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 4: PORUNCA 3 ----
    {
        id: 'porunca_3',
        badge: 'Porunca III',
        title: 'Adu-Èi aminte sÄ sfinÈeÈti ziua Domnului!',
        subtitle: 'A treia poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p3_1', text: 'Am lipsit duminica sau Ã®n sÄrbÄtorile de poruncÄ de la SfÃ¢nta Liturghie, fÄrÄ vreun motiv grav, din vina mea', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p3_2', text: 'Am Ã®ntÃ¢rziat din vina mea la Liturghie', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p3_3', text: 'Am asistat la Liturghie fÄrÄ a mÄ ruga, nu am fost atent Èi evlavios la Liturghie', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_4', text: 'Am lucrat duminica fÄrÄ necesitate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p3_5', text: 'Nu am sfinÈit zilele de penitenÈÄ dupÄ cum cere Biserica', detail: false }
        ]
    },

    // ---- SECTIUNEA 5: PORUNCA 4 ----
    {
        id: 'porunca_4',
        badge: 'Porunca IV',
        title: 'CinsteÈte pe tatÄl tÄu Èi pe mama ta!',
        subtitle: 'A patra poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p4_1', text: 'Nu i-am ascultat pe pÄrinÈi, i-am enervat, i-am supÄrat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_2', text: 'I-am bombÄnit pe pÄrinÈi, nu i-am ajutat', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_3', text: 'M-am supÄrat cu fraÈii Èi surorile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_4', text: 'Nu i-am instruit, stÄpÃ¢nit, supravegheat pe copiii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p4_5', text: 'M-am purtat rÄu cu copiii, i-am bÄtut', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 6: PORUNCA 5 ----
    {
        id: 'porunca_5',
        badge: 'Porunca V',
        title: 'SÄ nu ucizi!',
        subtitle: 'A cincea poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p5_1', text: 'Am Èinut urÄ, dispreÈ, duÈmÄnie faÈÄ de aproapele', detail: true, detailPlaceholder: 'FaÈÄ de cine...' },
            { id: 'p5_2', text: 'I-am dorit rÄul aproapelui, am vrut sÄ mÄ rÄzbun', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_3', text: 'Nu am vrut sÄ iert', detail: true, detailPlaceholder: 'Pe cine, i-am iertat acum da/nu...' },
            { id: 'p5_4', text: 'Am insultat, am bÄtut, am rÄnit pe aproapele meu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_5', text: 'Am dat sfaturi rele, exemple rele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p5_6', text: 'Am neglijat faptul de a fi un bun apostol faÈÄ de aproapele meu', detail: false }
        ]
    },

    // ---- SECTIUNEA 7: PORUNCA 6 si 9 ----
    {
        id: 'porunca_6_9',
        badge: 'Poruncile VI Èi IX',
        title: 'SÄ nu faci fapte necurate! SÄ nu pofteÈti femeia/bÄrbatul aproapelui tÄu!',
        subtitle: 'A Èasea Èi a noua poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p6_1', text: 'Am consimÈit gÃ¢ndurilor necurate, fÄrÄ a face fapte necurate', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p6_2', text: 'Am acceptat dorinÈe necurate fÄrÄ a face fapte necurate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_3', text: 'Am privit cu dorinÈe pÄcÄtoase trupul meu sau al altora, imagini', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_4', text: 'Am avut atingeri necurate cu bÄrbaÈi sau cu femei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_5', text: 'Am citit cÄrÈi imorale, reviste imorale, le-am dat Èi altora', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_6', text: 'Am vorbit murdar, am spus glume murdare', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p6_7', text: 'M-am uitat la filme imorale, la spectacole murdare', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_8', text: 'M-am Ã®mbrÄcat Ã®ntr-un mod indecent Èi/sau provocator', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_9', text: 'Am luat parte la jocuri indecente', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_10', text: 'Am trÄit Ã®n concubinaj, am frecventat Èi/sau am trÄit cu un bÄrbat/femeie cÄsÄtoritÄ', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_11', text: 'Am comis adulter', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_12', text: 'Am Ã®ndeplinit actul cÄsÄtoriei Ã®ntr-un mod egoist fÄrÄ sÄ-mi fac griji de binele soÈului/soÈiei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_13', text: 'Am comis fapte Ã®mpotriva castitÄÈii conjugale: singur, cu alÈii, contra naturii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_14', text: 'M-am fÄcut vinovat de prejudiciile fecunditÄÈii (contracepÈie, sterilizare etc.)', detail: true, detailPlaceholder: 'SpecificaÈi...' },
            { id: 'p6_15', text: 'Am folosit contraceptive (prezervative, pastile, sterilete etc.)', detail: true, detailPlaceholder: 'SpecificaÈi...' },
            { id: 'p6_16', text: 'L-am Ã®mpins pe aproapele meu Èi/sau l-am Ã®ncurajat la contracepÈie sau la avort', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p6_17', text: 'Am fÄcut avort', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 8: PORUNCA 7 si 10 ----
    {
        id: 'porunca_7_10',
        badge: 'Poruncile VII Èi X',
        title: 'SÄ nu furi! SÄ nu pofteÈti casa aproapelui tÄu!',
        subtitle: 'A Èaptea Èi a zecea poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p7_1', text: 'Am furat', detail: true, detailPlaceholder: 'Ce, am dat Ã®napoi da/nu, pot sÄ dau Ã®napoi...' },
            { id: 'p7_2', text: 'Am refuzat sÄ dau Ã®napoi ceea ce furasem', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_3', text: 'Am fÄcut pagube, nu am reparat paguba fÄcutÄ', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_4', text: 'Am ajutat la furt, am Ã®ncurajat la furt', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_5', text: 'Am pÄstrat, stricat, dat Èi/sau vÃ¢ndut obiecte care nu Ã®mi aparÈineau', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_6', text: 'Am cumpÄrat obiecte despre care Ètiam cÄ erau furate', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_7', text: 'Am comis o fraudÄ Ã®n salariul lucrÄtorilor mei sau mai multe fraude', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p7_8', text: 'Am copiat la ÈcoalÄ, am triÈat la examene', detail: true, detailPlaceholder: 'De cÃ¢te ori...' }
        ]
    },

    // ---- SECTIUNEA 9: PORUNCA 8 ----
    {
        id: 'porunca_8',
        badge: 'Porunca VIII',
        title: 'SÄ nu mÄrturiseÈti strÃ¢mb Ã®mpotriva aproapelui tÄu!',
        subtitle: 'A opta poruncÄ a lui Dumnezeu',
        type: 'checklist',
        items: [
            { id: 'p8_1', text: 'Am minÈit', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'p8_2', text: 'Am vorbit de rÄu pe alÈii Èi nu era adevÄrat (calomnie)', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_3', text: 'Am judecat pe nedrept, am ascultat voluntar calomnii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_4', text: 'Nu am Ã®ndreptat paguba fÄcutÄ aproapelui meu prin vorbele Èi exemplele mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'p8_5', text: 'Am spus altora pÄcate uÈoare sau de moarte pe care aproapele meu le-a comis', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 10: PORUNCILE BISERICII ----
    {
        id: 'poruncile_bisericii',
        badge: 'Poruncile Bisericii',
        title: 'Poruncile Bisericii',
        subtitle: 'ObligaÈii faÈÄ de SfÃ¢nta BisericÄ CatolicÄ',
        type: 'checklist',
        items: [
            { id: 'pb_1', text: 'Nu m-am spovedit Èi nu m-am Ã®mpÄrtÄÈit Ã®n timpul Sfintelor PaÈti', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_2', text: 'Am neglijat frecventarea sacramentelor', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_3', text: 'Nu am Èinut postul', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pb_4', text: 'Nu am fost duminica la Liturghie din vina mea', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'pb_5', text: 'Din egoism, nu am contribuit la Ã®ntreÈinerea Bisericii', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 11: VIRTUTILE TEOLOGALE ----
    {
        id: 'virtuti_teologale',
        badge: 'VirtuÈi Teologale',
        title: 'Virtutile Teologale',
        subtitle: 'CredinÈa, SperanÈa, Dragostea',
        type: 'checklist',
        items: [
            { id: 'vt_1', text: 'Nu am crezut Ã®n dragostea lui Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_2', text: 'Nu am avut Ã®ncredere Ã®n Dumnezeu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vt_3', text: 'Nu am fost milostiv faÈÄ de aproapele meu (Ã®n sentimentele mele, Ã®n cuvintele mele, Ã®n faptele mele: antipatie, urÄ, Ã®njurÄturi, clevetire, dispreÈ)', detail: true, detailPlaceholder: 'Detalii...' }
        ]
    },

    // ---- SECTIUNEA 12: VIRTUTILE CARDINALE ----
    {
        id: 'virtuti_cardinale',
        badge: 'VirtuÈi Cardinale',
        title: 'Virtutile Cardinale',
        subtitle: 'PrudenÈa, Dreptatea, Puterea-TÄria, CumpÄtarea, ÃnÈelepciunea',
        type: 'checklist',
        items: [
            { id: 'vc_1', text: 'Nu am fost atent Ã®n judecÄÈile mele, Ã®n deciziile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_2', text: 'Nu i-am ascultat pe pÄrinÈii mei, pe superiorii mei', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_3', text: 'Mi-a lipsit puterea lÄsÃ¢ndu-mÄ dus la descurajare, neacceptÃ¢nd suferinÈa', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'vc_4', text: 'Nu am fost cumpÄtat: Ã®n mÃ¢ncare, somn, plÄcerile legitime', detail: true, detailPlaceholder: 'SpecificaÈi...' }
        ]
    },

    // ---- SECTIUNEA 13: PACATELE CAPITALE ----
    {
        id: 'pacate_capitale',
        badge: 'PÄcate Capitale',
        title: 'PÄcatele Capitale',
        subtitle: 'MÃ¢ndria, AvariÈia, Invidia, MÃ¢nia, LÄcomia, Lenea, DesfrÃ¢ul',
        type: 'checklist',
        items: [
            { id: 'pc_1', text: 'Am fost orgolios, pretenÈios, mÃ¢ndru', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_2', text: 'M-am mÃ¢ndrit ca sÄ mi se aducÄ laude', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_3', text: 'Nu am vrut sÄ-mi recunosc greÈelile, am Èinut prea mult la ideile mele', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_4', text: 'Am fost Ã®nchis faÈÄ de punctul de vedere al celorlalÈi', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_5', text: 'Am refuzat sÄ fiu milostiv din cauza dragostei faÈÄ de bani', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_6', text: 'Mi-am risipit banii', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_7', text: 'Am fost gelos faÈÄ de aproapele meu', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_8', text: 'M-am Ã®ntristat de binele altora, m-am bucurat de rÄul care li se Ã®ntÃ¢mplÄ', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_9', text: 'M-am enervat', detail: true, detailPlaceholder: 'De cÃ¢te ori, Ã®n ce context...' },
            { id: 'pc_10', text: 'Am comis exces Ã®n mÃ¢ncare', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_11', text: 'Am comis exces Ã®n bÄuturÄ, m-am Ã®mbÄtat', detail: true, detailPlaceholder: 'De cÃ¢te ori...' },
            { id: 'pc_12', text: 'Mi-am fÄcut rÄu sÄnÄtÄÈii prin fumat sau prin droguri', detail: true, detailPlaceholder: 'Detalii...' },
            { id: 'pc_13', text: 'Am fost leneÈ sÄ mÄ trezesc, sÄ-mi fac datoria stÄrii mele de viaÈÄ, sÄ-mi fac datoria religioasÄ', detail: true, detailPlaceholder: 'Detalii...' }
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
        document.getElementById('btn-next').textContent = state.currentStep === state.totalSteps - 1 ? 'FinalizeazÄ â' : 'ContinuÄ â';

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
                html += `<textarea placeholder="${item.detailPlaceholder || 'AdÄugaÈi detalii...'}" rows="1">${detailValue}</textarea>`;
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

    // ============ PDF GENERATION (html2pdf.js â cu diacritice) ============
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
        html += '<h1>SPOVADÄ GENERALÄ</h1>';
        html += '<p style="font-size:11px;color:#8B7355;font-style:italic;">Lista pÄcatelor pentru SfÃ¢nta Spovedanie</p>';
        html += '</div>';
        html += '<hr class="pdf-hr">';

        // ---- INTRO DATA ----
        if (state.answers['ultima_spovada'] || state.answers['pocainta_impusa'] || state.answers['spovada_generala']) {
            html += '<div class="pdf-info">';
            html += '<h3>InformaÈii Generale</h3>';
            if (state.answers['ultima_spovada']) {
                html += '<p><strong>Ultima spovedanie:</strong> ' + this.escapeHtml(state.answers['ultima_spovada']) + '</p>';
            }
            if (state.answers['pocainta_impusa']) {
                html += '<p><strong>PocÄinÈa impusÄ fÄcutÄ:</strong> ' + this.escapeHtml(state.answers['pocainta_impusa']) + '</p>';
            }
            if (state.answers['spovada_generala']) {
                html += '<p><strong>SpovadÄ generalÄ Ã®ncepÃ¢nd cu:</strong> ' + this.escapeHtml(state.answers['spovada_generala']) + '</p>';
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
        html += '<h2>Act de CÄinÈÄ</h2>';
        html += '<p>Doamne, Dumnezeul meu, mÄ cÄiesc din toatÄ inima de toate pÄcatele mele Èi le ';
        html += 'urÄsc mai presus de toate, pentru cÄ prin ele am pierdut harul TÄu Èi ÃmpÄrÄÈia ';
        html += 'cerurilor Èi m-am fÄcut vrednic de pedeapsa veÈnicÄ a iadului. Dar mai mult mÄ ';
        html += 'cÄiesc pentru cÄ, pÄcÄtuind, Te-am mÃ¢niat pe Tine, PÄrintele meu, MÃ¢ntuitorul ';
        html += 'meu Èi Dumnezeul meu, atÃ¢t de mare Èi atÃ¢t de bun. Pentru aceasta, mÄ hotÄrÄsc, ';
        html += 'cu ajutorul harului TÄu, sÄ nu mai pÄcÄtuiesc Èi sÄ fug de orice prilej de pÄcat.</p>';
        html += '<p class="pdf-amin">Amin.</p>';
        html += '</div>';

        // ---- CLOSING ----
        html += '<p class="pdf-closing">MÄ Ã®nvinuiesc Èi de pÄcatele pe care nu le Ètiu, de care nu Ã®mi aduc aminte, ';
        html += 'cele din toatÄ viaÈa mea Èi de tot ceea ce L-ar fi supÄrat pe Domnul. ';
        html += 'MÄ Ã®nvinuiesc aÈa cum mÄ Ètie Domnul vinovat.</p>';

        html += '<div class="pdf-footer">FIE ISUS IUBIT DE CÄTRE TOATE INIMILE!</div>';

        html += '<div class="pdf-page-footer">SpovadÄ GeneralÄ â Ghid de examinare a conÈtiinÈei</div>';

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
                <p>Cookie-urile sunt fiÈiere mici de text stocate pe dispozitivul dumneavoastrÄ de cÄtre browser-ul web atunci cÃ¢nd vizitaÈi un site.</p>
                <h3>Folosim cookie-uri?</h3>
                <p><strong>Nu.</strong> AceastÄ aplicaÈie nu utilizeazÄ cookie-uri de niciun fel. Nu folosim cookie-uri de tracking, cookie-uri analitice, cookie-uri publicitare sau orice alt tip de cookie.</p>
                <h3>Stocarea datelor</h3>
                <p>AplicaÈia funcÈioneazÄ exclusiv Ã®n browser-ul dumneavoastrÄ. Nicio informaÈie nu este transmisÄ cÄtre servere externe. Toate datele introduse rÄmÃ¢n pe dispozitivul dumneavoastrÄ Èi sunt Èterse automat la Ã®nchiderea paginii.</p>
                <h3>Servicii terÈe</h3>
                <p>AplicaÈia Ã®ncarcÄ fonturi de la Google Fonts Èi o bibliotecÄ JavaScript de la Cloudflare CDN. Aceste servicii pot avea propriile politici de confidenÈialitate. Nu transmitem nicio informaÈie personalÄ cÄtre aceste servicii.</p>
            `,
            termeni: `
                <h2>Termeni Èi CondiÈii</h2>
                <p><strong>Ultima actualizare:</strong> Martie 2026</p>
                <h3>1. Descrierea serviciului</h3>
                <p>AceastÄ aplicaÈie este un ghid interactiv gratuit pentru examinarea conÈtiinÈei, destinat pregÄtirii pentru Sacramentul Spovedaniei Ã®n ritul catolic. AplicaÈia nu Ã®nlocuieÈte Ã®ndrumarea spiritualÄ a unui preot.</p>
                <h3>2. Utilizarea aplicaÈiei</h3>
                <p>AplicaÈia este oferitÄ gratuit Èi poate fi utilizatÄ de orice persoanÄ. Nu este necesarÄ crearea unui cont sau furnizarea de date personale.</p>
                <h3>3. Responsabilitate</h3>
                <p>ConÈinutul aplicaÈiei are caracter orientativ Èi urmeazÄ structura tradiÈionalÄ a examinÄrii conÈtiinÈei din tradiÈia catolicÄ. AplicaÈia nu oferÄ sfaturi teologice personalizate. Pentru Ã®ndrumare spiritualÄ, vÄ recomandÄm sÄ consultaÈi un preot.</p>
                <h3>4. Proprietate intelectualÄ</h3>
                <p>Structura examinÄrii conÈtiinÈei urmeazÄ Ã®nvÄÈÄtura tradiÈionalÄ a Bisericii Catolice. Codul sursÄ al aplicaÈiei Èi designul sunt protejate prin dreptul de autor.</p>
                <h3>5. Lipsa garanÈiilor</h3>
                <p>AplicaÈia este furnizatÄ âaÈa cum este", fÄrÄ garanÈii de niciun fel. Nu garantÄm disponibilitatea neÃ®ntreruptÄ a serviciului.</p>
                <h3>6. ModificÄri</h3>
                <p>Ne rezervÄm dreptul de a modifica aceÈti termeni Ã®n orice moment. Continuarea utilizÄrii aplicaÈiei constituie acceptarea termenilor actualizaÈi.</p>
            `,
            confidentialitate: `
                <h2>Politica de ConfidenÈialitate</h2>
                <p><strong>Ultima actualizare:</strong> Martie 2026</p>
                <h3>1. Principiul nostru fundamental</h3>
                <p><strong>Nu colectÄm, nu stocÄm Èi nu transmitem nicio informaÈie personalÄ.</strong> RespectÄm profund intimitatea actului spovedaniei Èi am conceput aceastÄ aplicaÈie cu confidenÈialitatea totalÄ ca prioritate absolutÄ.</p>
                <h3>2. Ce date colectÄm?</h3>
                <p><strong>Niciuna.</strong> AplicaÈia nu solicitÄ nume, adresÄ de e-mail, numÄr de telefon sau orice altÄ informaÈie de identificare personalÄ.</p>
                <h3>3. Unde sunt stocate datele introduse?</h3>
                <p>Toate informaÈiile pe care le introduceÈi (rÄspunsurile la Ã®ntrebÄri, detaliile completate) existÄ <strong>exclusiv Ã®n memoria browser-ului dumneavoastrÄ</strong>, pe dispozitivul dumneavoastrÄ. La Ã®nchiderea paginii sau la reÃ®ncÄrcarea ei, toate datele sunt Èterse automat Èi definitiv.</p>
                <h3>4. PDF-ul generat</h3>
                <p>Documentul PDF este generat local, pe dispozitivul dumneavoastrÄ, fÄrÄ a transmite date cÄtre vreun server. FiÈierul se salveazÄ direct pe dispozitivul dumneavoastrÄ. SunteÈi singurul responsabil pentru securitatea acestui fiÈier.</p>
                <h3>5. Tracking Èi analizÄ</h3>
                <p>Nu folosim Google Analytics, Facebook Pixel sau orice alt instrument de tracking. Nu monitorizÄm comportamentul utilizatorilor. Nu avem acces la statistici despre utilizarea aplicaÈiei.</p>
                <h3>6. Transmitere cÄtre terÈi</h3>
                <p>Nu transmitem date cÄtre terÈi din simplu motiv cÄ nu avem nicio datÄ de transmis. Nu avem baze de date, servere de stocare sau sisteme de analizÄ.</p>
                <h3>7. Contact</h3>
                <p>Pentru orice Ã®ntrebare legatÄ de confidenÈialitate, ne puteÈi contacta prin intermediul repository-ului GitHub al proiectului.</p>
            `
        };
        return contents[page] || '<p>PaginÄ negÄsitÄ.</p>';
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
