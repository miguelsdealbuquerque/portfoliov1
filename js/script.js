// ── SPA navigation ──────────────────────────────────────────
    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + id).classList.add('active');

      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === id);
      });

      window.scrollTo({ top: 0, behavior: 'instant' });

      // close mobile menu
      document.getElementById('navLinks').classList.remove('open');
      const toggle = document.getElementById('navToggle');
      toggle.setAttribute('aria-expanded', 'false');

      return false;
    }

    // ── Sticky header glassmorphism ─────────────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── Mobile menu toggle ──────────────────────────────────────
    document.getElementById('navToggle').addEventListener('click', function () {
      const links = document.getElementById('navLinks');
      const isOpen = links.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen);
    });

    // close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
      });
    });

    // ── Scroll to home content ──────────────────────────────────
    function scrollToSection() {
      document.getElementById('home-content').scrollIntoView({ behavior: 'smooth' });
    }

    // ── Game detail data ────────────────────────────────────────
    const GAMES = {
      pantanal2d: {
        title: 'Pantanal World 2D',
        img: 'PantanalWorld2D.jpg',
        badge: 'Educativo · Puzzle · Palavras',
        meta: [
          { label: 'Engine', value: 'GameMaker Studio' },
          { label: 'Papel', value: 'Direção de Áudio · Sound Design' },
          { label: 'Ano', value: '2024–2025' },
          { label: 'Org.', value: 'LEDES/UFMS · PET Sistemas' },
        ],
        desc: `<p>Jogo educativo de palavras ambientado no bioma do Pantanal. O jogador explora o cenário descobrindo e nomeando mais de <strong>27 animais catalogados em pixel art</strong> — da Onça-Pintada ao Tuiuiú — em 3 níveis de dificuldade progressiva.</p>
               <p>Projeto indicado à premiação na trilha da <strong>COP-15 no INTEGRA 2025/UFMS</strong> e registrado no INPI com o Processo nº <strong>BR512025006815-8</strong>. Desenvolvido em colaboração com o <strong>LEDES</strong> e o <strong>PET Sistemas</strong> usando GameMaker Studio.</p>
               <p>Responsável pela <strong>direção de áudio completa</strong>: trilha adaptativa, efeitos sonoros de fauna e ambiente, e integração com FMOD Studio.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Sound Design', 'Trilha Adaptativa', 'SFX', 'Pixel Art', 'Educativo', 'LEDES/UFMS'],
        links: []
      },
      teseu: {
        title: 'A Odisseia de Teseu',
        img: "Theseus' Odyssey.jpg",
        badge: 'GameMaker · Sound Design',
        meta: [
          { label: 'Engine', value: 'GameMaker Studio' },
          { label: 'Papel', value: 'Direção de Áudio · Sound Design' },
          { label: 'Ano', value: '2023–2024' },
          { label: 'Org.', value: 'LEDES/UFMS' },
        ],
        desc: `<p>Jogo de aventura mitológica ambientado na Grécia Antiga. Responsável pelo <strong>sound design completo</strong>: composição de trilha adaptativa sincronizada com o estado do jogo, criação e implementação de SFX via <strong>FMOD Studio</strong>, e integração com o motor GameMaker.</p>
               <p>A trilha sonora usa técnicas de <strong>áudio 3D e variação paramétrica</strong> para reforçar a narrativa — batalhas, exploração de templos e momentos de tensão têm identidade sonora distintas que se mesclam conforme o contexto.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Trilha Adaptativa', 'Áudio 3D', 'Sound Design', 'SFX', 'LEDES/UFMS'],
        links: []
      },
      museu: {
        title: 'Museu das Mulheres (des)Conhecidas',
        img: 'Museu das mulheres.jpg',
        badge: 'GameMaker · Sound Design',
        meta: [
          { label: 'Engine', value: 'GameMaker Studio' },
          { label: 'Papel', value: 'Direção de Áudio · Sound Design' },
          { label: 'Org.', value: 'LEDES/UFMS' },
        ],
        desc: `<p>Jogo com temática cultural e histórica, explorando narrativas de mulheres invisibilizadas. Fui responsável pela <strong>direção de áudio e sound design</strong>, criando uma identidade sonora que complementa a proposta artística e educativa do projeto.</p>
               <p>Desenvolvido no laboratório <strong>LEDES/UFMS</strong>, o projeto combina GameMaker Studio com pipeline de áudio via FMOD Studio para implementação dinâmica.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Sound Design', 'Direção de Áudio', 'LEDES/UFMS', 'Temática Cultural'],
        links: []
      },
      blueberry: {
        title: 'BlueberryScape',
        img: 'Blueberryscape.jpeg',
        badge: 'GameMaker · Game Design & Code',
        meta: [
          { label: 'Engine', value: 'GameMaker Studio' },
          { label: 'Papel', value: 'Programação · Game Design · Narrativa' },
          { label: 'Ano', value: '2022' },
          { label: 'Evento', value: 'Side Quest 2022 — IFMS' },
        ],
        desc: `<p>Primeiro jogo que desenvolvi. Ajude a <strong>Blueberry</strong>, uma arande azul, a escapar da cozinha malvada e finalmente se plantar no jardim! Submissão para a <strong>Side Quest 2022</strong> do IFMS.</p>
               <p>Minha contribuição foi o <strong>código completo do sistema de menus</strong>, a concepção do game design e toda a "narrativa" do jogo. Um ponto de virada que mostrou que unir código e criatividade era o caminho certo.</p>`,
        tags: ['GameMaker Studio', 'Game Design', 'Programação', 'Narrativa', 'Game Jam', 'IFMS', 'Side Quest 2022'],
        links: [
          { label: 'Ver no itch.io', href: 'https://itch.io/jam/side-quest-2022/rate/1736623', secondary: false }
        ]
      },
      trocadalho: {
        title: 'Trocadalho',
        img: 'trocadalho.png',
        badge: 'Unity · Sound Design',
        meta: [
          { label: 'Engine', value: 'Unity' },
          { label: 'Papel', value: 'Sound Design · Foley · Música' },
          { label: 'Ano', value: '2024' },
          { label: 'Evento', value: 'Global Game Jam 2024 — SEBRAE Living Lab' },
        ],
        desc: `<p>Global Game Jam 2024 no <strong>SEBRAE Living Lab</strong>, Campo Grande. O modificador especial do jam: <em>todos os sons do jogo deveriam ser feitos com a boca</em>.</p>
               <p>Em parceria com <strong>Diogo</strong>, gravamos músicas, risadas, assobios melódicos e todos os efeitos sonoros usando apenas vozes e sons bucais. Também gravamos uma versão do <strong>tema do Mickey Mouse</strong> (domínio público desde 2024), mixamos tudo e entregamos ao time em 3 dias.</p>
               <p>Foi minha <strong>primeira experiência prática com sound design</strong> para jogos — e provavelmente o projeto mais divertido que já fiz.</p>`,
        tags: ['Unity', 'Sound Design', 'Foley', 'Música Vocal', 'Global Game Jam', 'Game Jam', '3 dias'],
        links: []
      },
      burnthedead: {
        title: 'Burn the Dead',
        img: 'burnthedead.png',
        badge: 'GameMaker · Música · SFX · Roteiro',
        meta: [
          { label: 'Engine', value: 'GameMaker Studio' },
          { label: 'Papel', value: 'Música · SFX · Roteiro' },
          { label: 'Ano', value: '2025' },
          { label: 'Evento', value: 'GameJam+ 2025' },
        ],
        desc: `<p>Beat 'em Up 2.5D Steampunk-Gótico com elementos Roguelite. Ambientado em <strong>Tirana</strong>, cidade devastada por uma praga, segue <strong>Avulli</strong>, engenheira mecânica traída pelo governo que usa Pressão de Vapor como mecânica central de combate.</p>
               <p>Fui responsável pela <strong>trilha sonora original</strong>, todos os efeitos sonoros e pelo roteiro do jogo — definindo a lore, os personagens e o arco narrativo dentro dos 3 dias do jam.</p>
               <p>A identidade sonora mistura industrial, dark orchestral e elementos eletrônicos para reforçar o universo steampunk-gótico.</p>`,
        tags: ['GameMaker Studio', 'Música Original', 'SFX', 'Roteiro', 'Lore', 'GameJam+', 'Steampunk', 'Roguelite'],
        links: []
      }
    };

    function populateDetail(g, backPage, backLabel) {
      document.getElementById('gd-hero-img').src = g.img;
      document.getElementById('gd-hero-img').alt = g.title;
      document.getElementById('gd-title').textContent = g.title;
      document.getElementById('gd-badge').textContent = g.badge;

      // back button
      const backBtn = document.getElementById('gd-back-btn');
      backBtn.textContent = '← ' + backLabel;
      backBtn.onclick = () => showPage(backPage);

      // meta pills
      const metaEl = document.getElementById('gd-meta');
      metaEl.innerHTML = g.meta.map(m =>
        `<span class="game-detail-meta-pill"><strong>${m.label}</strong>${m.value}</span>`
      ).join('');

      document.getElementById('gd-desc').innerHTML = g.desc;

      // tags
      document.getElementById('gd-tags').innerHTML = g.tags.map(t =>
        `<span class="game-detail-tag">${t}</span>`
      ).join('');

      // links
      const linksEl = document.getElementById('gd-links');
      const linksLabel = document.getElementById('gd-links-label');
      if (g.links && g.links.length > 0) {
        linksLabel.style.display = 'block';
        linksEl.innerHTML = g.links.map(l =>
          `<a href="${l.href}" target="_blank" rel="noopener" class="game-detail-link${l.secondary ? ' secondary' : ''}">${l.label} ↗</a>`
        ).join('');
      } else {
        linksLabel.style.display = 'none';
        linksEl.innerHTML = '';
      }

      showPage('game-detail');
    }


    // ── Music detail data ───────────────────────────────────────
    const MUSIC = {
      wbme01: {
        title: 'WBME #01 — Intimate Backyard',
        img: 'WBME.jpg',
        badge: 'House / Deep House',
        meta: [
          { label: 'Projeto', value: 'World By My Eyes (WBME)' },
          { label: 'Papel', value: 'DJ · Curador · Direção Artística' },
          { label: 'Ano', value: '2025' },
          { label: 'Estilo', value: 'House Music · Deep House' },
        ],
        desc: `<p>Primeiro set gravado do projeto <strong>World By My Eyes</strong> — iniciativa musical independente que reúne sets de House e Deep House em ambientes intimistas e fora do comum.</p>
               <p>O conceito do WBME é levar a música eletrônica para contextos que normalmente não a recebem: quintais, terraços, espaços abertos. O <strong>#01 — Intimate Backyard</strong> foi gravado em um ambiente doméstico com piscina, misturando trilhas de Deep House atmosférico com House clássico de Chicago.</p>
               <p>Toda a seleção e mixagem foi feita ao vivo, sem edição posterior de transições — o que está no vídeo é o que aconteceu.</p>`,
        tags: ['House Music', 'Deep House', 'DJ Set', 'Ao Vivo', 'WBME', 'World By My Eyes', 'Produção Independente'],
        links: [
          { label: '▶ Assistir no YouTube', href: 'https://www.youtube.com/watch?v=dei1bRAy9zE', secondary: false },
          { label: 'Ouvir no SoundCloud', href: 'https://soundcloud.com/m-g-l', secondary: true }
        ]
      }
    };


    // ── i18n ────────────────────────────────────────────────────
    const browserLang = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    let currentLang = browserLang.startsWith('pt') ? 'pt' : 'en';

    const T = {
      pt: {
        // nav
        nav_home: 'Início', nav_about: 'Sobre', nav_games: 'Games',
        nav_music: 'Música', nav_research: 'Pesquisa', nav_contact: 'Contato', nav_help: 'Ajuda',
        // hero
        hero_tagline: 'Sound Design · <span style="color:var(--mint)">Música</span> · Pesquisa Acadêmica',
        hero_scroll: 'Scroll',
        hero_cta_games: 'Ver Game Audio',
        // home section
        home_label: 'quem é M.G.L',
        home_title: 'Som que atravessa<br/><em>telas e pistas</em>',
        home_p1: 'Natural de Petrópolis (RJ), sou <strong>Game Sound Director</strong>, DJ e produtor musical — pesquisador pela FACOM/UFMS e integrante do LEDES. Desde 2021 construo experiências sonoras: trilhas de videogames, sets de House Music e pesquisa acadêmica sobre o processo de criação de áudio para jogos indie.',
        home_quote: '<em>"A batida não é apenas som, mas combustível e a música, uma forma de salvação."</em>',
        home_cta_games: 'Games', home_cta_music: 'Música', home_cta_research: 'Pesquisa',
        home_cards_label: '// Destaques',
        // games page
        games_label: 'jogos',
        games_subtitle: 'Projetos de jogos — como <strong>Game Sound Director</strong> no LEDES e como desenvolvedor/game designer em game jams. Middleware principal: <strong>FMOD Studio</strong> com <strong>Godot 4</strong>.',
        games_proj_label: '// Projetos',
        games_dev_label: '// Em Desenvolvimento',
        // music page
        music_label: 'DJ · Produção · Audiovisual',
        music_subtitle: 'House Music como paixão, produção como linguagem, WBME como projeto. Três frentes que se alimentam.',
        music_highlight: '// Destaque',
        // sobre page
        sobre_label: 'sobre mim',
        sobre_title: 'De onde vem o <em>som</em><br/>e onde vai o código',
        // pesquisa page
        pesquisa_label: 'academia & ciência',
        pesquisa_title: 'Pesquisa <em>acadêmica</em>',
        pesquisa_subtitle: 'Trajetória no LEDES, TCC sobre áudio em jogos indie e preparação para o mestrado internacional.',
        // contato page
        contato_label: 'fale comigo',
        contato_title: 'Vamos <em>conversar</em>',
        contato_subtitle: 'Aberto a colaborações em projetos de jogos, sound design, música, pesquisa acadêmica ou para tocar na sua próxima festa.',
        form_name_label: 'Nome',
        form_name_ph: 'Seu nome completo',
        form_email_label: 'E-mail',
        form_email_ph: 'seu@email.com',
        form_assunto_label: 'Assunto',
        form_assunto_ph: 'Selecione um assunto',
        form_opt1: 'Colaboração em jogo / áudio',
        form_opt2: 'DJ para evento / festa',
        form_opt3: 'Projeto musical / WBME',
        form_opt4: 'Pesquisa acadêmica',
        form_opt5: 'Outros',
        form_msg_label: 'Mensagem',
        form_msg_ph: 'Conta o que você tem em mente...',
        form_btn: 'Enviar mensagem',
        form_success_title: 'Mensagem enviada!',
        form_success_p: 'Fico feliz com o contato. Retorno em breve.',
        // ajuda page
        ajuda_label: 'IHC · Heurísticas de Nielsen',
        ajuda_title: 'Decisões de <em>design</em><br/>fundamentadas',
        // game detail
        gd_back_games: 'Voltar para Games',
        gd_back_music: 'Voltar para Música',
        gd_tags_label: '// Tags',
        gd_links_label: '// Links',
        // meta labels
        meta_engine: 'Engine', meta_role: 'Papel', meta_year: 'Ano',
        meta_org: 'Org.', meta_event: 'Evento', meta_project: 'Projeto',
        meta_style: 'Estilo',
        // footer
        footer: 'Feito com cuidado por <span>M.G.L</span> · FACOM/UFMS · 2025',
      },
      en: {
        // nav
        nav_home: 'Home', nav_about: 'About', nav_games: 'Games',
        nav_music: 'Music', nav_research: 'Research', nav_contact: 'Contact', nav_help: 'Help',
        // hero
        hero_tagline: 'Sound Design · <span style="color:var(--mint)">Music</span> · Academic Research',
        hero_scroll: 'Scroll',
        hero_cta_games: 'Game Audio',
        // home section
        home_label: 'who is M.G.L',
        home_title: 'Sound that crosses<br/><em>screens and dancefloors</em>',
        home_p1: 'From Petrópolis (RJ), I\'m a <strong>Game Sound Director</strong>, DJ and music producer — researcher at FACOM/UFMS and member of the LEDES lab. Since 2021 I\'ve been building sonic experiences: video game soundtracks, House Music sets and academic research on audio production for indie games.',
        home_quote: '<em>"The beat is not just sound, but fuel — and music, a form of salvation."</em>',
        home_cta_games: 'Games', home_cta_music: 'Music', home_cta_research: 'Research',
        home_cards_label: '// Highlights',
        // games page
        games_label: 'games',
        games_subtitle: 'Game projects — as <strong>Game Sound Director</strong> at LEDES and as developer/game designer at game jams. Main middleware: <strong>FMOD Studio</strong> with <strong>Godot 4</strong>.',
        games_proj_label: '// Projects',
        games_dev_label: '// In Development',
        // music page
        music_label: 'DJ · Production · Audiovisual',
        music_subtitle: 'House Music as passion, production as language, WBME as the project. Three fronts that feed each other.',
        music_highlight: '// Featured',
        // sobre page
        sobre_label: 'about me',
        sobre_title: 'Where the <em>sound</em> comes from<br/>and where the code goes',
        // pesquisa page
        pesquisa_label: 'academia & science',
        pesquisa_title: 'Academic <em>research</em>',
        pesquisa_subtitle: 'Journey through LEDES, thesis on audio for indie games, and preparation for an international master\'s degree.',
        // contato page
        contato_label: 'get in touch',
        contato_title: 'Let\'s <em>talk</em>',
        contato_subtitle: 'Open to collaborations on game projects, sound design, music, academic research, or to play at your next party.',
        form_name_label: 'Name',
        form_name_ph: 'Your full name',
        form_email_label: 'E-mail',
        form_email_ph: 'your@email.com',
        form_assunto_label: 'Subject',
        form_assunto_ph: 'Select a subject',
        form_opt1: 'Game / audio collaboration',
        form_opt2: 'DJ for event / party',
        form_opt3: 'Music project / WBME',
        form_opt4: 'Academic research',
        form_opt5: 'Other',
        form_msg_label: 'Message',
        form_msg_ph: 'Tell me what\'s on your mind...',
        form_btn: 'Send message',
        form_success_title: 'Message sent!',
        form_success_p: 'Happy to hear from you. I\'ll get back to you soon.',
        // ajuda page
        ajuda_label: 'HCI · Nielsen\'s Heuristics',
        ajuda_title: 'Grounded <em>design</em><br/>decisions',
        // game detail
        gd_back_games: 'Back to Games',
        gd_back_music: 'Back to Music',
        gd_tags_label: '// Tags',
        gd_links_label: '// Links',
        // meta labels
        meta_engine: 'Engine', meta_role: 'Role', meta_year: 'Year',
        meta_org: 'Org.', meta_event: 'Event', meta_project: 'Project',
        meta_style: 'Style',
        // footer
        footer: 'Crafted with care by <span>M.G.L</span> · FACOM/UFMS · 2025',
      }
    };

    // English versions of game/music data
    const GAMES_EN = {
      pantanal2d: {
        title: 'Pantanal World 2D', badge: 'Educational · Puzzle · Words',
        meta: [ { label:'Engine', value:'GameMaker Studio' }, { label:'Role', value:'Audio Director · Sound Design' }, { label:'Year', value:'2024–2025' }, { label:'Org.', value:'LEDES/UFMS · PET Sistemas' } ],
        desc: `<p>Educational word game set in the Pantanal biome. Players explore the scenery discovering and naming over <strong>27 animals illustrated in pixel art</strong> — from the Jaguar to the Jabiru Stork — across 3 difficulty levels.</p>
               <p>Nominated for the <strong>COP-15 track at INTEGRA 2025/UFMS</strong> and registered with INPI under process <strong>BR512025006815-8</strong>. Developed in collaboration with <strong>LEDES</strong> and <strong>PET Sistemas</strong> using GameMaker Studio.</p>
               <p>Responsible for the <strong>complete audio direction</strong>: adaptive soundtrack, wildlife and ambient sound effects, and FMOD Studio integration.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Sound Design', 'Adaptive Soundtrack', 'SFX', 'Pixel Art', 'Educational', 'LEDES/UFMS']
      },
      teseu: {
        title: "Theseus' Odyssey", badge: 'GameMaker · Sound Design',
        meta: [ { label:'Engine', value:'GameMaker Studio' }, { label:'Role', value:'Audio Director · Sound Design' }, { label:'Year', value:'2023–2024' }, { label:'Org.', value:'LEDES/UFMS' } ],
        desc: `<p>Mythological adventure game set in Ancient Greece. Responsible for the <strong>complete sound design</strong>: composing an adaptive soundtrack synchronized with game state, creating and implementing SFX via <strong>FMOD Studio</strong>, and integration with the GameMaker engine.</p>
               <p>The soundtrack uses <strong>3D audio and parametric variation</strong> techniques to reinforce the narrative — battles, temple exploration and tension moments have distinct sonic identities that blend contextually.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Adaptive Soundtrack', '3D Audio', 'Sound Design', 'SFX', 'LEDES/UFMS']
      },
      museu: {
        title: 'Museum of (Un)known Women', badge: 'GameMaker · Sound Design',
        meta: [ { label:'Engine', value:'GameMaker Studio' }, { label:'Role', value:'Audio Director · Sound Design' }, { label:'Org.', value:'LEDES/UFMS' } ],
        desc: `<p>A culturally and historically themed game exploring narratives of overlooked women. I was responsible for the <strong>audio direction and sound design</strong>, creating a sonic identity that complements the project's artistic and educational intent.</p>
               <p>Developed at the <strong>LEDES/UFMS</strong> lab, combining GameMaker Studio with a FMOD Studio audio pipeline for dynamic implementation.</p>`,
        tags: ['GameMaker Studio', 'FMOD Studio', 'Sound Design', 'Audio Direction', 'LEDES/UFMS', 'Cultural Theme']
      },
      blueberry: {
        title: 'BlueberryScape', badge: 'GameMaker · Game Design & Code',
        meta: [ { label:'Engine', value:'GameMaker Studio' }, { label:'Role', value:'Programming · Game Design · Narrative' }, { label:'Year', value:'2022' }, { label:'Event', value:'Side Quest 2022 — IFMS' } ],
        desc: `<p>My first game. Help <strong>Blueberry</strong>, a blueberry, escape the evil kitchen and plant herself in the garden! Submission for the <strong>Side Quest 2022</strong> jam at IFMS.</p>
               <p>My contribution was the <strong>complete menu system code</strong>, the game design concept, and all the "narrative" of the game. A turning point that showed that merging code and creativity was the right path.</p>`,
        tags: ['GameMaker Studio', 'Game Design', 'Programming', 'Narrative', 'Game Jam', 'IFMS', 'Side Quest 2022'],
        links: [ { label: 'Play on itch.io', href: 'https://itch.io/jam/side-quest-2022/rate/1736623', secondary: false } ]
      },
      trocadalho: {
        title: 'Trocadalho', badge: 'Unity · Sound Design',
        meta: [ { label:'Engine', value:'Unity' }, { label:'Role', value:'Sound Design · Foley · Music' }, { label:'Year', value:'2024' }, { label:'Event', value:'Global Game Jam 2024 — SEBRAE Living Lab' } ],
        desc: `<p>Global Game Jam 2024 at <strong>SEBRAE Living Lab</strong>, Campo Grande. The special jam modifier: <em>all sounds in the game had to be made with the mouth</em>.</p>
               <p>Together with <strong>Diogo</strong>, we recorded music, laughter, melodic whistling and all sound effects using only voices and mouth sounds. We also recorded a version of the <strong>Mickey Mouse theme</strong> (public domain since 2024), mixed everything and delivered to the team in 3 days.</p>
               <p>It was my <strong>first hands-on experience with game sound design</strong> — and probably the most fun project I've ever worked on.</p>`,
        tags: ['Unity', 'Sound Design', 'Foley', 'Vocal Music', 'Global Game Jam', 'Game Jam', '3 days']
      },
      burnthedead: {
        title: 'Burn the Dead', badge: 'GameMaker · Music · SFX · Script',
        meta: [ { label:'Engine', value:'GameMaker Studio' }, { label:'Role', value:'Music · SFX · Script' }, { label:'Year', value:'2025' }, { label:'Event', value:'GameJam+ 2025' } ],
        desc: `<p>2.5D Steampunk-Gothic Beat 'em Up with Roguelite elements. Set in <strong>Tirana</strong>, a city ravaged by plague, following <strong>Avulli</strong>, a mechanical engineer betrayed by the government who uses Steam Pressure as the core combat mechanic.</p>
               <p>I was responsible for the <strong>original soundtrack</strong>, all sound effects and the game's script — defining the lore, characters and narrative arc within 3 days of the jam.</p>
               <p>The sonic identity blends industrial, dark orchestral and electronic elements to reinforce the steampunk-gothic universe.</p>`,
        tags: ['GameMaker Studio', 'Original Music', 'SFX', 'Script', 'Lore', 'GameJam+', 'Steampunk', 'Roguelite']
      }
    };

    const MUSIC_EN = {
      wbme01: {
        title: 'WBME #01 — Intimate Backyard', badge: 'House / Deep House',
        meta: [ { label:'Project', value:'World By My Eyes (WBME)' }, { label:'Role', value:'DJ · Curator · Artistic Direction' }, { label:'Year', value:'2025' }, { label:'Style', value:'House Music · Deep House' } ],
        desc: `<p>First recorded set from the <strong>World By My Eyes</strong> project — an independent music initiative bringing House and Deep House sets to intimate and unusual settings.</p>
               <p>The WBME concept is to bring electronic music to contexts that don't normally receive it: backyards, rooftops, open spaces. <strong>#01 — Intimate Backyard</strong> was recorded in a home setting with a pool, blending atmospheric Deep House tracks with classic Chicago House.</p>
               <p>The entire selection and mixing was done live, with no post-edit of transitions — what's in the video is what happened.</p>`,
        tags: ['House Music', 'Deep House', 'DJ Set', 'Live', 'WBME', 'World By My Eyes', 'Independent Production'],
        links: [ { label: '▶ Watch on YouTube', href: 'https://www.youtube.com/watch?v=dei1bRAy9zE', secondary: false }, { label: 'Listen on SoundCloud', href: 'https://soundcloud.com/m-g-l', secondary: true } ]
      }
    };

    function setLang(lang) {
      currentLang = lang;
      const t = T[lang];

      // toggle buttons
      document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
      document.getElementById('btn-en').classList.toggle('active', lang === 'en');

      // nav links via data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
      });

      // hero tagline (has HTML)
      const taglineEl = document.querySelector('.hero-tagline');
      if (taglineEl) taglineEl.innerHTML = t.hero_tagline;

      // hero scroll
      const scrollEl = document.querySelector('.hero-scroll span');
      if (scrollEl) scrollEl.textContent = t.hero_scroll;

      // hero CTA (main hero button)
      const heroCta = document.querySelector('#hero .hero-cta');
      if (heroCta) heroCta.textContent = t.hero_cta_games;

      // home section
      const homePage = document.getElementById('page-home');
      if (homePage) {
        const labels = homePage.querySelectorAll('.section-label');
        if (labels[0]) labels[0].textContent = t.home_label;
        const h2 = homePage.querySelector('.home-intro-text h2');
        if (h2) h2.innerHTML = t.home_title;
        const ps = homePage.querySelectorAll('.home-intro-text > p:not(.section-label)');
        if (ps[0]) ps[0].innerHTML = t.home_p1;
        if (ps[1]) ps[1].innerHTML = t.home_quote;
        // CTA buttons (only the intro ones, not the hero CTA)
        const ctaBtns = homePage.querySelectorAll('.home-intro-text .hero-cta');
        if (ctaBtns[0]) ctaBtns[0].textContent = t.home_cta_games;
        if (ctaBtns[1]) ctaBtns[1].textContent = t.home_cta_music;
        if (ctaBtns[2]) ctaBtns[2].textContent = t.home_cta_research;
        const cardsLabel = homePage.querySelector('.cards-label');
        if (cardsLabel) cardsLabel.textContent = t.home_cards_label;
      }

      // games page
      const gamesPage = document.getElementById('page-gameaudio');
      if (gamesPage) {
        const sl = gamesPage.querySelector('.section-label');
        if (sl) sl.textContent = t.games_label;
        const ss = gamesPage.querySelector('.section-subtitle');
        if (ss) ss.innerHTML = t.games_subtitle;
        const cls = gamesPage.querySelectorAll('.cards-label');
        if (cls[0]) cls[0].textContent = t.games_proj_label;
        if (cls[1]) cls[1].textContent = t.games_dev_label;
      }

      // music page
      const musicPage = document.getElementById('page-musica');
      if (musicPage) {
        const sl = musicPage.querySelector('.section-label');
        if (sl) sl.textContent = t.music_label;
        const ss = musicPage.querySelector('.section-subtitle');
        if (ss) ss.textContent = t.music_subtitle;
        const cl = musicPage.querySelector('.cards-label');
        if (cl) cl.textContent = t.music_highlight;
      }

      // sobre page
      const sobrePage = document.getElementById('page-sobre');
      if (sobrePage) {
        const sl = sobrePage.querySelector('.section-label');
        if (sl) sl.textContent = t.sobre_label;
        const h2 = sobrePage.querySelector('.section-title');
        if (h2) h2.innerHTML = t.sobre_title;
      }

      // pesquisa page
      const pesquisaPage = document.getElementById('page-pesquisa');
      if (pesquisaPage) {
        const sl = pesquisaPage.querySelector('.section-label');
        if (sl) sl.textContent = t.pesquisa_label;
        const h2 = pesquisaPage.querySelector('.section-title');
        if (h2) h2.innerHTML = t.pesquisa_title;
        const ss = pesquisaPage.querySelector('.section-subtitle');
        if (ss) ss.textContent = t.pesquisa_subtitle;
      }

      // contato page
      const contatoPage = document.getElementById('page-contato');
      if (contatoPage) {
        const sl = contatoPage.querySelector('.section-label');
        if (sl) sl.textContent = t.contato_label;
        const h2 = contatoPage.querySelector('.section-title');
        if (h2) h2.innerHTML = t.contato_title;
        const ss = contatoPage.querySelector('.section-subtitle');
        if (ss) ss.textContent = t.contato_subtitle;
        // form
        const nameLabel = contatoPage.querySelector('label[for="contact-name"]');
        if (nameLabel) nameLabel.textContent = t.form_name_label;
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.placeholder = t.form_name_ph;
        const emailLabel = contatoPage.querySelector('label[for="contact-email"]');
        if (emailLabel) emailLabel.textContent = t.form_email_label;
        const emailInput = document.getElementById('contact-email');
        if (emailInput) emailInput.placeholder = t.form_email_ph;
        const assuntoLabel = contatoPage.querySelector('label[for="contact-assunto"]');
        if (assuntoLabel) assuntoLabel.textContent = t.form_assunto_label;
        const sel = document.getElementById('contact-assunto');
        if (sel) {
          sel.options[0].text = t.form_assunto_ph;
          sel.options[1].text = t.form_opt1;
          sel.options[2].text = t.form_opt2;
          sel.options[3].text = t.form_opt3;
          sel.options[4].text = t.form_opt4;
          sel.options[5].text = t.form_opt5;
        }
        const msgLabel = contatoPage.querySelector('label[for="contact-msg"]');
        if (msgLabel) msgLabel.textContent = t.form_msg_label;
        const msgTA = document.getElementById('contact-msg');
        if (msgTA) msgTA.placeholder = t.form_msg_ph;
        const sendBtn = contatoPage.querySelector('button[onclick="submitForm()"]');
        if (sendBtn) sendBtn.textContent = t.form_btn;
      }

      // ajuda page
      const ajudaPage = document.getElementById('page-ajuda');
      if (ajudaPage) {
        const sl = ajudaPage.querySelector('.section-label');
        if (sl) sl.textContent = t.ajuda_label;
        const h2 = ajudaPage.querySelector('.section-title');
        if (h2) h2.innerHTML = t.ajuda_title;
      }

      // footers
      document.querySelectorAll('footer').forEach(f => f.innerHTML = t.footer);

      // game detail page labels
      const gdTagsLabels = document.querySelectorAll('.game-detail-section-label');
      if (gdTagsLabels[0]) gdTagsLabels[0].textContent = t.gd_tags_label;
    }

    function showGame(id) {
      const g = currentLang === 'en' && GAMES_EN[id]
        ? { ...GAMES[id], ...GAMES_EN[id], links: GAMES_EN[id].links ?? GAMES[id].links }
        : GAMES[id];
      if (!g) return;
      const backLabel = T[currentLang].gd_back_games;
      populateDetail(g, 'gameaudio', backLabel);
    }

    function showMusic(id) {
      const m = currentLang === 'en' && MUSIC_EN[id]
        ? { ...MUSIC[id], ...MUSIC_EN[id] }
        : MUSIC[id];
      if (!m) return;
      const backLabel = T[currentLang].gd_back_music;
      populateDetail(m, 'musica', backLabel);
    }

    // ── Form submission ─────────────────────────────────────────
    function submitForm() {
      const name    = document.getElementById('contact-name').value.trim();
      const email   = document.getElementById('contact-email').value.trim();
      const assunto = document.getElementById('contact-assunto').value;
      const msg     = document.getElementById('contact-msg').value.trim();

      // basic validation
      if (!name || !email || !assunto || !msg) {
        const first = [
          { el: document.getElementById('contact-name'),    val: name },
          { el: document.getElementById('contact-email'),   val: email },
          { el: document.getElementById('contact-assunto'), val: assunto },
          { el: document.getElementById('contact-msg'),     val: msg }
        ].find(f => !f.val);
        if (first) {
          first.el.focus();
          first.el.style.borderColor = 'var(--danger)';
          setTimeout(() => first.el.style.borderColor = '', 2000);
        }
        return;
      }

      document.getElementById('contact-form-wrap').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    }

    // ── Keyboard trap: nav-links on mobile ──────────────────────
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
        document.getElementById('navToggle').focus();
      }
    });

    // ── Hero slideshow ──────────────────────────────────────────
    (function () {
      const slides = Array.from(document.querySelectorAll('.hero-slide'));
      if (!slides.length) return;
      let current = 0;

      function next() {
        const prev = current;
        current = (current + 1) % slides.length;
        const nextSlide = slides[current];

        // restart KB animation cleanly via class toggle
        nextSlide.classList.remove('active');
        requestAnimationFrame(() => requestAnimationFrame(() => {
          nextSlide.classList.add('active');
          setTimeout(() => slides[prev].classList.remove('active'), 2000);
        }));
      }

      setInterval(next, 6000);
    })();

    // ── Apply detected language on load (after all declarations) ─
    setLang(currentLang);