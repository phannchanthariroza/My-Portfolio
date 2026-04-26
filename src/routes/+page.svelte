<script>
  import { base } from '$app/paths';

  let lang = 'en';
  let theme = 'dark';
  let showIntro = true;
  let selectedProject = null;

  function handleTiltMove(event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -12;

    element.style.setProperty('--tilt-x', `${x}deg`);
    element.style.setProperty('--tilt-y', `${y}deg`);
  }

  function resetTilt(event) {
    const element = event.currentTarget;
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  }

  function enterPortfolio() {
    showIntro = false;
  }

  function openProjectPreview(project) {
    selectedProject = project;
  }

  function closeProjectPreview() {
    selectedProject = null;
  }

  function handlePreviewKeydown(event) {
    if (event.key === 'Escape') {
      closeProjectPreview();
    }
  }

  const i18n = {
    en: {
      metaTitle: 'Phann Chanthariroza | Web Developer Portfolio',
      metaDescription:
        'Web developer portfolio of Phann Chanthariroza featuring projects, frontend skills, and development tools.',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      introKicker: 'SOFTWARE DEVELOPMENT STUDENT • AUPP',
      introTitle: "Welcome to Roza'portfolio",
      introText:
        'I am Roza, a university student developer focused on practical projects, clean UI, and steady growth through teamwork.',
      introTag1: 'University Projects',
      introTag2: 'Frontend Focus',
      introTag3: 'Creative Problem Solving',
      introButton: 'Enter Portfolio',
      heroTitle: 'I build modern, responsive websites and practical software products.',
      heroIntro:
        'Software Development junior at AUPP focused on frontend engineering, clean interfaces, and real-world applications powered by data and AI.',
      seeProjects: 'See Projects',
      hireMe: 'Hire Me',
      downloadCv: 'Download CV',
      heroStat1Label: 'Projects',
      heroStat2Label: 'Core tools',
      aboutKicker: 'ABOUT',
      aboutTitle: 'Strong foundation, growth mindset, and product thinking.',
      aboutP1:
        'I enjoy translating ideas into interfaces users can understand quickly. I care about visual clarity, reusable code, and good developer workflow.',
      aboutP2:
        'I am hardworking, flexible, and collaborative. My goal is to become a professional web developer who ships reliable products and keeps learning fast.',
      skillsKicker: 'SKILLS & TOOLS',
      skillsTitle: 'What I use to build web products.',
      frontTitle: 'Frontend Development',
      backTitle: 'Programming & Backend',
      flowTitle: 'Developer Workflow',
      projectsKicker: 'PROJECTS',
      projectsTitle: 'Selected work and experiments.',
      projectsNote: 'All projects below were completed as group coursework at university.',
      github: 'GitHub',
      liveDemo: 'Live Demo',
      eduKicker: 'EDUCATION',
      eduTitle: 'American University of Phnom Penh (AUPP)',
      eduDesc: 'Bachelor of Software Development • 2023 - Present',
      highKicker: 'HIGHLIGHTS',
      processKicker: 'PROCESS',
      processTitle: 'How I approach building products.',
      process1: '1. Learn the problem and plan the structure.',
      process2: '2. Design a clean interface and build in small steps.',
      process3: '3. Test, refine, and make it easy to use.',
      servicesKicker: 'SERVICES',
      servicesTitle: 'What I can build for you.',
      service1Title: 'Responsive websites',
      service1Desc: 'Landing pages, portfolios, and business websites that feel polished on every screen.',
      service2Title: 'Interactive web apps',
      service2Desc: 'Dashboards, tools, and product experiences with thoughtful UX and clean state handling.',
      service3Title: 'AI and data projects',
      service3Desc: 'Practical projects using Python, ML, and computer vision for real-world use cases.',
      contactKicker: 'CONTACT',
      contactTitle: 'Let’s work together on your next project.',
      footer: '© 2026 Phann Chanthariroza • Web Developer Portfolio'
    },
    jp: {
      metaTitle: 'パン・チャンタリロザ | Web開発ポートフォリオ',
      metaDescription:
        'パン・チャンタリロザのWeb開発ポートフォリオ。プロジェクト、フロントエンドスキル、開発ツールを紹介。',
      navAbout: '自己紹介',
      navSkills: 'スキル',
      navProjects: 'プロジェクト',
      navContact: '連絡先',
      introKicker: 'ソフトウェア開発専攻 • AUPP',
      introTitle: '丁寧なWeb体験をつくる。',
      introText: '私はRozaです。大学で学びながら、実践的なプロジェクトと分かりやすいUIづくりに取り組んでいます。',
      introTag1: '大学プロジェクト',
      introTag2: 'フロントエンド重視',
      introTag3: '創造的な問題解決',
      introButton: 'ポートフォリオへ',
      heroTitle: 'モダンでレスポンシブなWebサイトと実用的なソフトウェアを開発します。',
      heroIntro:
        'AUPPのソフトウェア開発専攻。フロントエンド設計、分かりやすいUI、AIを活用した実践的なアプリ開発に注力しています。',
      seeProjects: 'プロジェクトを見る',
      hireMe: '連絡する',
      downloadCv: '履歴書をダウンロード',
      heroStat1Label: 'プロジェクト',
      heroStat2Label: '主要ツール',
      aboutKicker: '自己紹介',
      aboutTitle: '基礎力、成長マインド、そしてプロダクト思考。',
      aboutP1:
        'アイデアを、ユーザーがすぐ理解できるUIへ変換することが得意です。見やすさ、再利用可能なコード、効率的な開発フローを大切にしています。',
      aboutP2:
        '勤勉さ、柔軟性、協調性を強みに、信頼できるWebプロダクトを届ける開発者を目指しています。',
      skillsKicker: 'スキルとツール',
      skillsTitle: 'Web開発で使用している技術。',
      frontTitle: 'フロントエンド開発',
      backTitle: 'プログラミングとバックエンド',
      flowTitle: '開発ワークフロー',
      projectsKicker: 'プロジェクト',
      projectsTitle: '主な制作物と実験プロジェクト。',
      projectsNote: '以下のプロジェクトは、大学の授業でチームとして取り組んだものです。',
      github: 'GitHub',
      liveDemo: 'デモ',
      eduKicker: '学歴',
      eduTitle: 'American University of Phnom Penh (AUPP)',
      eduDesc: 'ソフトウェア開発学士 • 2023 - 現在',
      highKicker: '実績',
      processKicker: 'プロセス',
      processTitle: '制作時の進め方。',
      process1: '1. 課題を理解し、構成を設計する。',
      process2: '2. 分かりやすいUIを作り、少しずつ実装する。',
      process3: '3. テストして磨き込み、使いやすく仕上げる。',
      servicesKicker: 'サービス',
      servicesTitle: '提供できるもの。',
      service1Title: 'レスポンシブWebサイト',
      service1Desc: 'どの画面でも整って見える、洗練されたランディングページやポートフォリオ。',
      service2Title: 'インタラクティブなWebアプリ',
      service2Desc: '丁寧なUXと状態管理を備えたダッシュボードやツール。',
      service3Title: 'AI・データ系プロジェクト',
      service3Desc: 'Python、ML、画像認識を使った実用的なプロジェクト。',
      contactKicker: '連絡先',
      contactTitle: '次のプロジェクトを一緒に作りましょう。',
      footer: '© 2026 パン・チャンタリロザ • Web開発ポートフォリオ'
    },
    kh: {
      metaTitle: 'ផាន់ ចាន់ថារីរ៉ូហ្សា | ផតហ្វូលីយ៉ូអ្នកអភិវឌ្ឍន៍វេប',
      metaDescription:
        'ផតហ្វូលីយ៉ូអ្នកអភិវឌ្ឍន៍វេបរបស់ ផាន់ ចាន់ថារីរ៉ូហ្សា បង្ហាញគម្រោង ជំនាញ frontend និងឧបករណ៍អភិវឌ្ឍន៍។',
      navAbout: 'អំពីខ្ញុំ',
      navSkills: 'ជំនាញ',
      navProjects: 'គម្រោង',
      navContact: 'ទំនាក់ទំនង',
      introKicker: 'និស្សិត Software Development • AUPP',
      introTitle: 'បង្កើតបទពិសោធន៍វេបដែលមានគុណភាព។',
      introText: 'ខ្ញុំឈ្មោះ Roza។ ខ្ញុំជានិស្សិតសាកលវិទ្យាល័យដែលផ្តោតលើគម្រោងអនុវត្តន៍ UI ច្បាស់ និងការអភិវឌ្ឍជាបន្តបន្ទាប់។',
      introTag1: 'គម្រោងក្រុមសាកលវិទ្យាល័យ',
      introTag2: 'ផ្តោតលើ Frontend',
      introTag3: 'ដោះស្រាយបញ្ហាដោយច្នៃប្រឌិត',
      introButton: 'ចូលមើលផតហ្វូលីយ៉ូ',
      heroTitle: 'ខ្ញុំបង្កើតគេហទំព័រទំនើប ឆ្លើយតបល្អ និងផលិតផលសូហ្វវែរ​ដែលអាចប្រើបានពិត។',
      heroIntro:
        'ខ្ញុំជានិស្សិតឆ្នាំទី៣ ផ្នែក Software Development នៅ AUPP ផ្តោតលើ frontend, UI ស្អាត និងកម្មវិធីអនុវត្តជាក់ស្តែងដែលប្រើទិន្នន័យ និង AI។',
      seeProjects: 'មើលគម្រោង',
      hireMe: 'ជួលខ្ញុំ',
      downloadCv: 'ទាញយក CV',
      heroStat1Label: 'គម្រោង',
      heroStat2Label: 'ឧបករណ៍សំខាន់',
      aboutKicker: 'អំពីខ្ញុំ',
      aboutTitle: 'មូលដ្ឋានរឹងមាំ ចិត្តគំនិតអភិវឌ្ឍ និងការគិតជាផលិតផល។',
      aboutP1:
        'ខ្ញុំចូលចិត្តបម្លែងគំនិតទៅជាចំណុចប្រទាក់ដែលអ្នកប្រើយល់បានលឿន។ ខ្ញុំផ្តោតលើភាពច្បាស់ ស្អាត កូដអាចប្រើឡើងវិញ និងលំហូរការងារល្អ។',
      aboutP2:
        'ខ្ញុំខិតខំប្រឹងប្រែង បត់បែនល្អ និងធ្វើការជាក្រុមបានល្អ។ គោលដៅគឺក្លាយជាអ្នកអភិវឌ្ឍន៍វេបវិជ្ជាជីវៈ។',
      skillsKicker: 'ជំនាញ និងឧបករណ៍',
      skillsTitle: 'អ្វីដែលខ្ញុំប្រើសម្រាប់បង្កើតផលិតផលវេប។',
      frontTitle: 'ការអភិវឌ្ឍន៍ Frontend',
      backTitle: 'Programming និង Backend',
      flowTitle: 'លំហូរការងារអភិវឌ្ឍន៍',
      projectsKicker: 'គម្រោង',
      projectsTitle: 'គម្រោងសំខាន់ៗ និងការសាកល្បង។',
      projectsNote: 'គម្រោងខាងក្រោមទាំងអស់ គឺការងារក្រុមក្នុងមុខវិជ្ជានៅសាកលវិទ្យាល័យ។',
      github: 'GitHub',
      liveDemo: 'មើលដេម៉ូ',
      eduKicker: 'ការសិក្សា',
      eduTitle: 'American University of Phnom Penh (AUPP)',
      eduDesc: 'បរិញ្ញាបត្រ Software Development • 2023 - បច្ចុប្បន្ន',
      highKicker: 'សមិទ្ធផល',
      processKicker: 'លំហូរការងារ',
      processTitle: 'របៀបដែលខ្ញុំបង្កើតផលិតផល។',
      process1: '1. ស្វែងយល់ពីបញ្ហា និងរៀបចំរចនាសម្ព័ន្ធ។',
      process2: '2. រចនា UI ស្អាត និងអភិវឌ្ឍជាដំណាក់កាល។',
      process3: '3. សាកល្បង កែតម្រូវ និងធ្វើឱ្យងាយប្រើ។',
      servicesKicker: 'សេវាកម្ម',
      servicesTitle: 'អ្វីដែលខ្ញុំអាចសាងសង់ជូនអ្នក។',
      service1Title: 'គេហទំព័រឆ្លើយតបល្អ',
      service1Desc: 'Landing pages, portfolios និងគេហទំព័រអាជីវកម្មដែលមើលទៅស្អាតលើគ្រប់អេក្រង់។',
      service2Title: 'Web apps អន្តរកម្ម',
      service2Desc: 'Dashboard, tools និងបទពិសោធន៍ផលិតផលដែលមាន UX ល្អ និង state ត្រឹមត្រូវ។',
      service3Title: 'គម្រោង AI និងទិន្នន័យ',
      service3Desc: 'គម្រោងជាក់ស្តែងដោយប្រើ Python, ML និង computer vision សម្រាប់ប្រើប្រាស់ពិត។',
      contactKicker: 'ទំនាក់ទំនង',
      contactTitle: 'តោះធ្វើការលើគម្រោងបន្ទាប់របស់អ្នកជាមួយគ្នា។',
      footer: '© 2026 ផាន់ ចាន់ថារីរ៉ូហ្សា • ផតហ្វូលីយ៉ូអ្នកអភិវឌ្ឍន៍វេប'
    }
  };

  const projects = [
    {
      title: {
        en: 'Food Recommendation System',
        jp: '食品推薦システム',
        kh: 'ប្រព័ន្ធណែនាំម្ហូបអាហារ'
      },
      image: `${base}/assets/food-rec.png`,
      desc: {
        en: 'Personalized meal suggestions based on preferences and dietary requirements.',
        jp: '好みや食事要件に基づいて個別に食事を提案するシステム。',
        kh: 'ណែនាំមុខម្ហូបផ្ទាល់ខ្លួនតាមចំណូលចិត្ត និងតម្រូវការអាហារ។'
      },
      note: {
        en: 'University group project completed with classmates in a course module.',
        jp: '大学の授業内で、クラスメイトと共同で進めたグループプロジェクトです。',
        kh: 'នេះជាគម្រោងក្រុមក្នុងមុខវិជ្ជា ដែលខ្ញុំធ្វើជាមួយមិត្តរួមថ្នាក់នៅសាកលវិទ្យាល័យ។'
      },
      stack: ['Python', 'ML', 'UX'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'Food Expiry Tracker',
        jp: '食品期限トラッカー',
        kh: 'កម្មវិធីតាមដានកាលបរិច្ឆេទផុតកំណត់អាហារ'
      },
      image: `${base}/assets/food-expiry.png`,
      desc: {
        en: 'Tracks shelf life and notifies users before products expire.',
        jp: '保存期限を追跡し、期限前に通知します。',
        kh: 'តាមដានអាយុកាលទុក និងជូនដំណឹងមុនថ្ងៃផុតកំណត់។'
      },
      note: {
        en: 'University group project completed with classmates in a course module.',
        jp: '大学の授業内で、クラスメイトと共同で進めたグループプロジェクトです。',
        kh: 'នេះជាគម្រោងក្រុមក្នុងមុខវិជ្ជា ដែលខ្ញុំធ្វើជាមួយមិត្តរួមថ្នាក់នៅសាកលវិទ្យាល័យ។'
      },
      stack: ['Web App', 'Notifications', 'Data'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'Plant Disease Detection',
        jp: '植物病害検出',
        kh: 'ការរកឃើញជំងឺរុក្ខជាតិ'
      },
      image: `${base}/assets/plant.png`,
      desc: {
        en: 'Computer vision model to classify disease patterns in leaves.',
        jp: '葉の病害パターンを分類するコンピュータビジョンモデル。',
        kh: 'ប្រើ Computer Vision ដើម្បីចាត់ថ្នាក់លំនាំជំងឺលើស្លឹក។'
      },
      note: {
        en: 'University group project completed with classmates in a course module.',
        jp: '大学の授業内で、クラスメイトと共同で進めたグループプロジェクトです。',
        kh: 'នេះជាគម្រោងក្រុមក្នុងមុខវិជ្ជា ដែលខ្ញុំធ្វើជាមួយមិត្តរួមថ្នាក់នៅសាកលវិទ្យាល័យ។'
      },
      stack: ['OpenCV', 'TensorFlow', 'AI'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'Weather Checking App',
        jp: '天気確認アプリ',
        kh: 'កម្មវិធីពិនិត្យអាកាសធាតុ'
      },
      image: `${base}/assets/weather.png`,
      desc: {
        en: 'Real-time weather dashboard with API integration and clean UI.',
        jp: 'API連携によるリアルタイム天気ダッシュボード。',
        kh: 'ផ្ទាំងព័ត៌មានអាកាសធាតុពេលវេលាពិតជាមួយការភ្ជាប់ API។'
      },
      note: {
        en: 'University group project completed with classmates in a course module.',
        jp: '大学の授業内で、クラスメイトと共同で進めたグループプロジェクトです。',
        kh: 'នេះជាគម្រោងក្រុមក្នុងមុខវិជ្ជា ដែលខ្ញុំធ្វើជាមួយមិត្តរួមថ្នាក់នៅសាកលវិទ្យាល័យ។'
      },
      stack: ['JavaScript', 'API', 'Responsive'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'Parking Lot Detector',
        jp: '駐車場検出システム',
        kh: 'ប្រព័ន្ធរកឃើញចំណតរថយន្ត'
      },
      image: `${base}/assets/parking.png`,
      desc: {
        en: 'IoT-focused prototype for parking-space availability monitoring.',
        jp: '駐車スペースの空き状況を監視するIoTプロトタイプ。',
        kh: 'គំរូ IoT សម្រាប់តាមដានកន្លែងចតរថយន្តទំនេរ។'
      },
      note: {
        en: 'University group research project. I worked on research and concept planning; full implementation is not completed yet.',
        jp: '大学のグループ研究プロジェクトです。私は調査と企画を担当し、フル実装はまだ完了していません。',
        kh: 'នេះជាគម្រោងស្រាវជ្រាវជាក្រុមនៅសាកលវិទ្យាល័យ។ ខ្ញុំបានធ្វើផ្នែកស្រាវជ្រាវ និងរៀបចំគំនិត ប៉ុន្តែការអនុវត្តពេញលេញនៅមិនទាន់រួចរាល់។'
      },
      stack: ['IoT', 'Vision', 'Prototype'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'E-commerce Platform',
        jp: 'ECプラットフォーム',
        kh: 'វេទិកាពាណិជ្ជកម្មអេឡិចត្រូនិក'
      },
      image: `${base}/assets/ecomerce.png`,
      desc: {
        en: 'Responsive storefront with practical product browsing experience.',
        jp: '商品閲覧がしやすいレスポンシブなストアフロント。',
        kh: 'ហាងអនឡាញឆ្លើយតបល្អដែលងាយស្រួលរុករកផលិតផល។'
      },
      note: {
        en: 'University group design project. I focused on wireframes and UI flow; this project is currently design-only.',
        jp: '大学のグループ設計プロジェクトです。私はワイヤーフレームとUIフローを担当し、現在は設計段階のみです。',
        kh: 'នេះជាគម្រោងរចនាជាក្រុមនៅសាកលវិទ្យាល័យ។ ខ្ញុំផ្តោតលើ wireframe និង UI flow ហើយបច្ចុប្បន្ននៅតែជាផ្នែករចនាប៉ុណ្ណោះ។'
      },
      stack: ['Frontend', 'UI', 'Product'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'AI Recipe Generator',
        jp: 'AIレシピジェネレーター',
        kh: 'កម្មវិធីបង្កើតរូបមន្តម្ហូបដោយ AI'
      },
      image: `${base}/assets/receipe.png`,
      desc: {
        en: 'Generates recipe ideas from available ingredients.',
        jp: '手元の材料からレシピ案を生成。',
        kh: 'បង្កើតគំនិតរូបមន្តម្ហូបពីគ្រឿងផ្សំដែលមាន។'
      },
      note: {
        en: 'University group project completed with classmates in a course module.',
        jp: '大学の授業内で、クラスメイトと共同で進めたグループプロジェクトです。',
        kh: 'នេះជាគម្រោងក្រុមក្នុងមុខវិជ្ជា ដែលខ្ញុំធ្វើជាមួយមិត្តរួមថ្នាក់នៅសាកលវិទ្យាល័យ។'
      },
      stack: ['AI Logic', 'Web', 'User Input'],
      github: '#',
      demo: '#'
    },
    {
      title: {
        en: 'Button Counter',
        jp: 'ボタンカウンター',
        kh: 'កម្មវិធីរាប់ប៊ូតុង'
      },
      image: `${base}/assets/buttoncounter.png`,
      desc: {
        en: 'Simple counter app to practice state updates and interactive UI behavior.',
        jp: '状態更新とインタラクティブUIを練習するためのシンプルなカウンターアプリ。',
        kh: 'កម្មវិធីរាប់លេខសាមញ្ញ សម្រាប់ហាត់ state update និងអន្តរកម្ម UI។'
      },
      stack: ['Svelte', 'State', 'UI'],
      github: 'https://github.com/pich-reamrachna/quiz-game',
      demo: 'https://button-counter-kohl.vercel.app/'
    },
    {
      title: {
        en: 'Japanese Quiz Game',
        jp: '日本語クイズ',
        kh: 'ហ្គេមសំណួរភាសាជប៉ុន'
      },
      image: `${base}/assets/quizgame.png`,
      desc: {
        en: 'Quiz game focused on Japanese language practice with interactive questions.',
        jp: '日本語の練習に焦点を当てた、インタラクティブなクイズゲーム。',
        kh: 'ហ្គេមសំណួរសម្រាប់ហាត់ភាសាជប៉ុន ជាមួយសំណួរអន្តរកម្ម។'
      },
      stack: ['Quiz', 'JavaScript', 'Learning App'],
      github: 'https://github.com/pich-reamrachna/quiz-game',
      demo: 'https://quiz-game-flame-alpha.vercel.app/'
    },
    {
      title: {
        en: 'SNS',
        jp: 'SNS',
        kh: 'SNS'
      },
      image: `${base}/assets/sns.png`,
      desc: {
        en: 'Social media style web app for posting, viewing, and interacting with content.',
        jp: '投稿・閲覧・交流ができるSNS風Webアプリ。',
        kh: 'Web app រចនាបែបបណ្តាញសង្គម សម្រាប់បង្ហោះ មើល និងអន្តរកម្មមាតិកា។'
      },
      stack: ['Frontend', 'Social App', 'UI'],
      github: 'https://github.com/pich-reamrachna/social-media',
      demo: 'https://social-media-one-virid.vercel.app/'
    }
  ];

  const stats = [
    { value: '10+', key: 'heroStat1Label' },
    { value: '8+', key: 'heroStat2Label' }
  ];

  const processSteps = ['process1', 'process2', 'process3'];

  const services = ['service1', 'service2', 'service3'];

  const marqueeItems = ['SvelteKit', 'Frontend Design', 'Motion UI', 'AI Projects', 'JavaScript', 'Python', 'Playwright', 'ESLint'];

  $: t = i18n[lang];
</script>

<svelte:head>
  <title>{t.metaTitle}</title>
  <meta name="description" content={t.metaDescription} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class:full-intro={showIntro} class="frame">
  {#if showIntro}
    <section class="intro-screen" aria-label="Welcome screen">
      <div class="intro-weather" aria-hidden="true">
        <div class="rain-layer"></div>
        {#each Array(12) as _, i}
          <span class="soft-drop" style={`--x: ${(i * 8.3) % 100}%; --delay: ${i * 0.22}s; --scale: ${0.7 + (i % 4) * 0.12};`}></span>
        {/each}
        <span class="thunder thunder-a"></span>
        <span class="thunder thunder-b"></span>
        <span class="bird bird-a"></span>
        <span class="bird bird-b"></span>
        <span class="bird bird-c"></span>
        <div class="figure">
          <span class="figure-head"></span>
          <span class="figure-body"></span>
          <span class="figure-raincoat"></span>
        </div>
        <div class="figure figure-two">
          <span class="figure-head"></span>
          <span class="figure-body"></span>
          <span class="figure-raincoat"></span>
        </div>
        <div class="figure figure-three">
          <span class="figure-head"></span>
          <span class="figure-body"></span>
          <span class="figure-raincoat"></span>
        </div>
      </div>
      <div class="intro-copy">
        <p class="intro-label">{t.introKicker}</p>
        <h1>{t.introTitle}</h1>
        <p class="intro-text">{t.introText}</p>
        <div class="intro-tags" aria-label="Intro highlights">
          <span>{t.introTag1}</span>
          <span>{t.introTag2}</span>
          <span>{t.introTag3}</span>
        </div>
        <button class="btn intro-btn intro-action" on:click={enterPortfolio}>
          <span>{t.introButton}</span>
          <i aria-hidden="true">↗</i>
        </button>
      </div>
    </section>
  {/if}

  <div class="fx-bg" aria-hidden="true">
    <span class="orb orb-a"></span>
    <span class="orb orb-b"></span>
    <span class="grid-glow"></span>
  </div>

  <header class:behind-intro={showIntro} class="topbar">
    <div class="logo">
      <span class="dot"></span>
      <p>Phann Chanthariroza</p>
    </div>
    <nav>
      <a href="#about">{t.navAbout}</a>
      <a href="#skills">{t.navSkills}</a>
      <a href="#projects">{t.navProjects}</a>
      <a href="#contact">{t.navContact}</a>
    </nav>
    <div class="controls">
      <div class="lang-switch">
        <button class:active={lang === 'en'} on:click={() => (lang = 'en')}>EN</button>
        <button class:active={lang === 'jp'} on:click={() => (lang = 'jp')}>JP</button>
        <button class:active={lang === 'kh'} on:click={() => (lang = 'kh')}>KH</button>
      </div>
      <button class="theme-btn" on:click={() => (theme = theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  </header>

  <main class:light={theme === 'light'} class:locked={showIntro}>
    <section class="hero">
      <div class="hero-copy">
        <h1>{t.heroTitle}</h1>
        <p class="intro">{t.heroIntro}</p>
        <div class="actions">
          <a class="btn primary" href="#projects">{t.seeProjects}</a>
          <a class="btn ghost" href="mailto:phannchanthariroza301105@gmail.com">{t.hireMe}</a>
          <a class="btn ghost" href={`${base}/assets/Phann-Chanthariroza-CV.pdf`} download>{t.downloadCv}</a>
        </div>
        <div class="hero-stats">
          {#each stats as stat}
            <div>
              <strong>{stat.value}</strong>
              <span>{t[stat.key]}</span>
            </div>
          {/each}
        </div>
      </div>

      <aside class="code-card">
        <div
          class="portrait-panel tilt-card"
          role="group"
          aria-label="Profile highlight"
          on:mousemove={handleTiltMove}
          on:mouseleave={resetTilt}
        >
          <img src={`${base}/assets/profile.png`} alt="Portrait of Phann Chanthariroza" class="avatar" />
          <div class="status-pill">
            <span class="status-dot"></span>
            Building real projects as a university student
          </div>
        </div>
        <div
          class="editor-shell tilt-card"
          role="group"
          aria-label="Developer code preview"
          on:mousemove={handleTiltMove}
          on:mouseleave={resetTilt}
        >
          <div class="editor-top">
            <span></span>
            <span></span>
            <span></span>
            <strong>profile.ts</strong>
          </div>
          <div class="editor-body">
            <p><span>const</span> developer <span>=</span> <span>{'{'} </span></p>
            <p>&nbsp;&nbsp;name: <em>'Phann Chanthariroza'</em>,</p>
            <p>&nbsp;&nbsp;role: <em>'Software Development Student'</em>,</p>
            <p>&nbsp;&nbsp;focus: [<em>'Frontend'</em>, <em>'Course Projects'</em>, <em>'Teamwork'</em>],</p>
            <p>&nbsp;&nbsp;currently: <em>'Building and improving my portfolio'</em>,</p>
            <p>&nbsp;&nbsp;goal: <em>'Become a strong professional web developer'</em></p>
            <p><span>{'}'}</span>;</p>
          </div>
        </div>
      </aside>
    </section>

    <section class="marquee-panel" aria-label="featured technologies">
      <div class="marquee-track">
        {#each [...marqueeItems, ...marqueeItems] as item}
          <span>{item}</span>
        {/each}
      </div>
    </section>

    <section id="about" class="panel about">
      <div>
        <p class="kicker">{t.aboutKicker}</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutP1}</p>
        <p>{t.aboutP2}</p>
      </div>
      <img src={`${base}/assets/about-me.png`} alt="Phann working" class="about-photo" />
    </section>

    <section id="skills" class="panel">
      <div class="section-head">
        <p class="kicker">{t.skillsKicker}</p>
        <h2>{t.skillsTitle}</h2>
      </div>
      <div class="skills-grid">
        <article class="tilt-card skill-card front" on:mousemove={handleTiltMove} on:mouseleave={resetTilt}>
          <h3>{t.frontTitle}</h3>
          <ul>
            <li>SvelteKit</li>
            <li>JavaScript</li>
            <li>HTML5 / CSS3</li>
            <li>Responsive Design</li>
            <li>UI/UX Fundamentals</li>
          </ul>
          <div class="skill-meters" aria-label="Frontend proficiency meters">
            <span style="--w: 92%">SvelteKit</span>
            <span style="--w: 88%">JavaScript</span>
            <span style="--w: 84%">Responsive UI</span>
          </div>
        </article>
        <article class="tilt-card skill-card back" on:mousemove={handleTiltMove} on:mouseleave={resetTilt}>
          <h3>{t.backTitle}</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>Node.js Fundamentals</li>
            <li>API Integration</li>
            <li>OpenCV / TensorFlow Basics</li>
          </ul>
          <div class="skill-meters" aria-label="Backend proficiency meters">
            <span style="--w: 83%">Python</span>
            <span style="--w: 76%">Java</span>
            <span style="--w: 72%">API Integration</span>
          </div>
        </article>
        <article class="tilt-card skill-card flow" on:mousemove={handleTiltMove} on:mouseleave={resetTilt}>
          <h3>{t.flowTitle}</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Playwright</li>
            <li>cspell</li>
          </ul>
          <div class="skill-meters" aria-label="Workflow proficiency meters">
            <span style="--w: 90%">GitHub Workflow</span>
            <span style="--w: 82%">Code Quality</span>
            <span style="--w: 74%">Testing Setup</span>
          </div>
        </article>
      </div>
    </section>

    <section class="panel process">
      <div class="section-head">
        <p class="kicker">{t.processKicker}</p>
        <h2>{t.processTitle}</h2>
      </div>
      <div class="process-grid">
        {#each processSteps as step, index}
          <div
            class="process-step tilt-card"
            role="group"
            aria-label="Process step"
            on:mousemove={handleTiltMove}
            on:mouseleave={resetTilt}
          >
            <span class="step-id">{String(index + 1).padStart(2, '0')}</span>
            <span class="process-dot"></span>
            <p>{t[step]}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="panel services">
      <div class="section-head">
        <p class="kicker">{t.servicesKicker}</p>
        <h2>{t.servicesTitle}</h2>
      </div>
      <div class="services-grid">
        {#each services as service}
          <article class="tilt-card" on:mousemove={handleTiltMove} on:mouseleave={resetTilt}>
            <span class="service-mark"></span>
            <h3>{t[`${service}Title`]}</h3>
            <p>{t[`${service}Desc`]}</p>
            <div class="service-meta">
              {#if service === 'service1'}
                <span>Mobile-ready</span>
                <span>Clean branding</span>
              {:else if service === 'service2'}
                <span>Interactive UX</span>
                <span>Practical features</span>
              {:else}
                <span>Research-driven</span>
                <span>Real use case</span>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section id="projects" class="panel">
      <div class="section-head">
        <p class="kicker">{t.projectsKicker}</p>
        <h2>{t.projectsTitle}</h2>
        <p class="projects-note">{t.projectsNote}</p>
      </div>
      <div class="project-grid">
        {#each projects as project}
          <article class="project-card tilt-card" on:mousemove={handleTiltMove} on:mouseleave={resetTilt}>
            <button
              type="button"
              class="project-visual"
              aria-label={`Open preview for ${project.title[lang]}`}
              on:click={() => openProjectPreview(project)}
            >
              <img src={project.image} alt={project.title[lang]} />
              <span class="project-visual-hint">Click to preview</span>
            </button>
            <div class="project-body">
              <h3>{project.title[lang]}</h3>
              <p>{project.desc[lang]}</p>
              {#if project.note?.[lang]}
                <p class="project-note">{project.note[lang]}</p>
              {/if}
              <div class="tags">
                {#each project.stack as tag}
                  <span>{tag}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="panel education">
      <div class="edu-card edu-main">
        <p class="kicker">{t.eduKicker}</p>
        <h3>{t.eduTitle}</h3>
        <p>{t.eduDesc}</p>
        <div class="edu-track" aria-label="Learning timeline">
          <span style="--w: 35%">Foundation</span>
          <span style="--w: 68%">Course Projects</span>
          <span style="--w: 90%">Portfolio Growth</span>
        </div>
      </div>
      <div class="edu-card edu-highlights">
        <p class="kicker">{t.highKicker}</p>
        <ul class="highlight-list">
          <li>Best Pitch Team • Be Empowered Program</li>
          <li>2nd Place • Code for Girl Program</li>
          <li>English Interpreter & Co-leader • Korean Camp</li>
        </ul>
      </div>
    </section>

    <section id="contact" class="panel contact">
      <div class="contact-copy">
        <p class="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p class="contact-sub">I am open to internships, university collaborations, and frontend freelance opportunities.</p>
      </div>
      <div class="contact-meta">
        <div class="contact-row">
          <span>Location</span>
          <p>Phnom Penh, Cambodia</p>
        </div>
        <div class="contact-row">
          <span>Phone</span>
          <p><a href="tel:+85593268576">(+855) 93268576</a></p>
        </div>
        <div class="contact-row">
          <span>Email</span>
          <p><a href="mailto:phannchanthariroza301105@gmail.com">phannchanthariroza301105@gmail.com</a></p>
        </div>
        <div class="contact-actions">
          <a href="mailto:phannchanthariroza301105@gmail.com">Send Email</a>
          <a href="tel:+85593268576">Call Now</a>
        </div>
      </div>
    </section>
  </main>

  {#if selectedProject}
    <div
      class="project-preview-modal"
      role="dialog"
      aria-modal="true"
      aria-label={selectedProject.title[lang]}
      tabindex="0"
      on:keydown={handlePreviewKeydown}
    >
      <button type="button" class="project-preview-backdrop" aria-label="Close preview" on:click={closeProjectPreview}></button>
      <div class="project-preview-dialog">
        <button type="button" class="project-preview-close" on:click={closeProjectPreview} aria-label="Close preview">
          Close
        </button>
        <img src={selectedProject.image} alt={selectedProject.title[lang]} />
        <div class="project-preview-caption">
          <h3>{selectedProject.title[lang]}</h3>
          <p>{selectedProject.desc[lang]}</p>
        </div>
      </div>
    </div>
  {/if}

  <footer>
    <p>{t.footer}</p>
  </footer>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    font-family: 'Sora', sans-serif;
    color: #f5f3ee;
    background:
      radial-gradient(circle at 12% 16%, rgba(108, 134, 128, 0.25) 0, rgba(108, 134, 128, 0) 32%),
      radial-gradient(circle at 85% 12%, rgba(199, 133, 95, 0.24) 0, rgba(199, 133, 95, 0) 30%),
      linear-gradient(145deg, #081017 0%, #121a23 42%, #171817 100%);
    min-height: 100vh;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  .frame {
    width: min(1180px, calc(100% - 2rem));
    margin: 1rem auto 2.25rem;
    position: relative;
    perspective: 1200px;
  }

  .full-intro {
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  .intro-screen {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
      radial-gradient(circle at 30% 18%, rgba(245, 180, 142, 0.16), transparent 28%),
      radial-gradient(circle at 72% 78%, rgba(129, 191, 204, 0.08), transparent 26%),
      linear-gradient(145deg, #071018 0%, #0f1720 46%, #101616 100%);
  }

  .intro-screen::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  .intro-screen::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 55%, rgba(129, 191, 204, 0.08), transparent 34%),
      radial-gradient(circle at 50% 52%, rgba(255, 255, 255, 0.04), transparent 16%);
    mix-blend-mode: screen;
    opacity: 0.48;
    pointer-events: none;
  }

  .intro-copy {
    position: relative;
    z-index: 3;
    width: min(860px, calc(100% - 2rem));
    text-align: center;
    padding: clamp(0.5rem, 2vw, 1rem);
    animation: introRise 0.8s ease both;
  }

  .intro-copy > * {
    animation: introCopy 0.8s ease both;
  }

  .intro-copy > *:nth-child(1) {
    animation-delay: 0.1s;
  }

  .intro-copy > *:nth-child(2) {
    animation-delay: 0.22s;
  }

  .intro-copy > *:nth-child(3) {
    animation-delay: 0.34s;
  }

  .intro-copy > *:nth-child(4) {
    animation-delay: 0.46s;
  }

  .intro-copy > *:nth-child(5) {
    animation-delay: 0.56s;
  }

  .intro-copy h1 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.02;
    text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);
  }

  .intro-label {
    margin: 0 0 0.55rem;
    color: #9be0df;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 0.72rem;
    font-weight: 700;
    text-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.45);
  }

  .intro-text {
    margin: 0.9rem auto 0;
    max-width: 42ch;
    color: #e0e7ef;
    line-height: 1.7;
    text-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.42);
  }

  .intro-tags {
    margin-top: 0.9rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .intro-tags span {
    font-size: 0.72rem;
    letter-spacing: 0.02em;
    padding: 0;
    color: #dceaf4;
    border: 0;
    background: transparent;
    opacity: 0.9;
  }

  .intro-tags span:not(:last-child)::after {
    content: ' •';
    margin-left: 0.25rem;
    color: rgba(220, 234, 244, 0.75);
  }

  .intro-btn {
    margin-top: 1.35rem;
    min-width: 12.6rem;
    font-size: 0.94rem;
    border: 1px solid rgba(245, 189, 157, 0.68);
    border-radius: 999px;
    color: #2c1a11;
    background:
      linear-gradient(110deg, #f0b390, #ffd5bd 55%, #f7b184);
    box-shadow:
      0 0.9rem 1.8rem rgba(245, 171, 128, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.52rem;
    letter-spacing: 0.01em;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    animation: introButton 1s ease 0.55s both;
  }

  .intro-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%);
    transform: translateX(-120%);
    animation: introBtnShine 3.2s ease-in-out infinite;
    z-index: -1;
  }

  .intro-btn span {
    font-weight: 800;
  }

  .intro-btn i {
    font-style: normal;
    font-size: 1rem;
    line-height: 1;
    animation: introArrowBob 1.6s ease-in-out infinite;
  }

  .intro-btn:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow:
      0 1.05rem 2rem rgba(245, 171, 128, 0.36),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .intro-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .intro-weather {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .rain-layer {
    position: absolute;
    inset: -8% 0 0;
    background:
      repeating-linear-gradient(
        92deg,
        rgba(129, 191, 204, 0) 0,
        rgba(129, 191, 204, 0) 1.35rem,
        rgba(198, 233, 239, 0.18) 1.35rem,
        rgba(198, 233, 239, 0.18) 1.45rem,
        rgba(129, 191, 204, 0) 1.45rem,
        rgba(129, 191, 204, 0) 2.7rem
      );
    opacity: 0.2;
    filter: blur(0.02rem);
    animation: rainShift 1.5s linear infinite;
  }

  .soft-drop {
    position: absolute;
    left: var(--x);
    top: -12%;
    width: 0.09rem;
    height: 4.2rem;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(198, 233, 239, 0), rgba(198, 233, 239, 0.52), rgba(198, 233, 239, 0));
    opacity: 0.45;
    transform: scaleY(var(--scale));
    animation: softRain 2.8s linear infinite;
    animation-delay: var(--delay);
  }

  .thunder {
    position: absolute;
    width: 0.25rem;
    height: 26rem;
    top: 2rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 244, 199, 0.9), rgba(255, 255, 255, 0));
    opacity: 0;
    filter: blur(0.02rem) drop-shadow(0 0 1.4rem rgba(255, 238, 170, 0.5));
    animation: thunderFlash 7s linear infinite;
  }

  .thunder::before,
  .thunder::after {
    content: '';
    position: absolute;
    left: -0.25rem;
    width: 0.8rem;
    height: 0.25rem;
    border-radius: 999px;
    background: rgba(255, 244, 199, 0.92);
  }

  .thunder::before {
    top: 4rem;
    transform: rotate(24deg);
  }

  .thunder::after {
    top: 11rem;
    transform: rotate(-28deg);
  }

  .thunder-a {
    left: 24%;
    animation-delay: 1.8s;
  }

  .thunder-b {
    right: 18%;
    animation-delay: 4.5s;
    height: 20rem;
  }

  .bird {
    position: absolute;
    width: 2rem;
    height: 1rem;
    top: 16%;
    opacity: 0.85;
    animation: birdFly 12s linear infinite;
  }

  .bird::before,
  .bird::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    width: 1rem;
    height: 0.12rem;
    border-radius: 999px;
    background: rgba(230, 239, 244, 0.82);
  }

  .bird::before {
    left: 0;
    transform: rotate(28deg);
    transform-origin: right center;
  }

  .bird::after {
    right: 0;
    transform: rotate(-28deg);
    transform-origin: left center;
  }

  .bird-a {
    left: 12%;
    animation-delay: 0s;
  }

  .bird-b {
    left: 64%;
    top: 20%;
    animation-delay: 2.6s;
  }

  .bird-c {
    left: 78%;
    top: 13%;
    animation-delay: 5.3s;
  }

  .figure {
    position: absolute;
    right: 10%;
    bottom: 8%;
    width: 4rem;
    height: 8rem;
    opacity: 0.8;
    animation: figureDrift 6s ease-in-out infinite alternate;
  }

  .figure-two {
    right: 20%;
    bottom: 6%;
    transform: scale(0.72);
    opacity: 0.5;
    animation-duration: 7.2s;
  }

  .figure-three {
    right: 3%;
    bottom: 5%;
    transform: scale(0.58);
    opacity: 0.42;
    animation-duration: 8.4s;
  }

  .figure-head,
  .figure-body,
  .figure-raincoat {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(224, 231, 239, 0.88);
    box-shadow: 0 0 1.2rem rgba(129, 191, 204, 0.16);
  }

  .figure-head {
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgba(243, 178, 138, 0.92);
  }

  .figure-body {
    top: 1rem;
    width: 0.7rem;
    height: 2.4rem;
    border-radius: 999px;
  }

  .figure-raincoat {
    top: 2.1rem;
    width: 2.8rem;
    height: 3.8rem;
    border-radius: 1.4rem 1.4rem 0.8rem 0.8rem;
    background: linear-gradient(180deg, rgba(129, 191, 204, 0.9), rgba(129, 191, 204, 0.35));
    clip-path: polygon(50% 0, 100% 30%, 80% 100%, 20% 100%, 0 30%);
  }

  .behind-intro {
    filter: blur(0.2rem);
    pointer-events: none;
    user-select: none;
  }

  .locked {
    height: 100vh;
    overflow: hidden;
  }

  .fx-bg {
    position: absolute;
    inset: -2rem -2rem auto -2rem;
    height: 28rem;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(0.35rem);
    opacity: 0.6;
    animation: orbit 13s ease-in-out infinite alternate;
  }

  .orb-a {
    width: 15rem;
    height: 15rem;
    left: -2rem;
    top: 0.5rem;
    background: radial-gradient(circle at 30% 30%, #ffb188, rgba(255, 177, 136, 0.1));
  }

  .orb-b {
    width: 18rem;
    height: 18rem;
    right: -4rem;
    top: 4rem;
    background: radial-gradient(circle at 40% 40%, #81bfcc, rgba(129, 191, 204, 0.08));
    animation-duration: 16s;
  }

  .grid-glow {
    position: absolute;
    inset: 2.6rem 10% auto;
    height: 10rem;
    border-radius: 1.1rem;
    background:
      linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 1.2rem 1.2rem;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1), transparent);
    transform: perspective(800px) rotateX(48deg);
    opacity: 0.4;
  }

  .topbar {
    position: sticky;
    top: 0.6rem;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    border: 1px solid rgba(214, 219, 217, 0.18);
    border-radius: 999px;
    background: rgba(9, 13, 18, 0.82);
    backdrop-filter: blur(16px) saturate(1.15);
    box-shadow: 0 0.9rem 2.4rem rgba(0, 0, 0, 0.28);
    transform: translateZ(30px);
    animation: riseIn 0.7s ease both;
    z-index: 10;
  }

  .controls {
    display: flex;
    gap: 0.55rem;
    align-items: center;
  }

  .lang-switch {
    display: flex;
    gap: 0.22rem;
    border: 1px solid rgba(219, 228, 239, 0.16);
    border-radius: 999px;
    padding: 0.16rem;
    background: rgba(255, 255, 255, 0.03);
  }

  .lang-switch button,
  .theme-btn {
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    padding: 0.32rem 0.56rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: #d7e0ed;
    background: transparent;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }

  .lang-switch button:hover,
  .theme-btn:hover,
  nav a:hover {
    transform: translateY(-1px);
  }

  .lang-switch button.active {
    color: #1b1010;
    background: linear-gradient(120deg, #f3b28c, #f8d8c7);
  }

  .theme-btn {
    border: 1px solid rgba(219, 228, 239, 0.16);
    background: rgba(255, 255, 255, 0.03);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-weight: 700;
  }

  .logo p {
    margin: 0;
  }

  .dot {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: #f39b6d;
    box-shadow: 0 0 0.6rem #f39b6d;
  }

  nav {
    display: flex;
    gap: 1rem;
    color: #ced3dc;
    font-size: 0.95rem;
  }

  nav a {
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }

  nav a:hover {
    background: rgba(243, 155, 109, 0.12);
    color: #fff1e7;
  }

  main {
    margin-top: 1.1rem;
    display: grid;
    gap: 1rem;
    position: relative;
    z-index: 2;
  }

  .hero,
  .panel {
    border: 1px solid rgba(214, 220, 218, 0.14);
    border-radius: 1.25rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(9, 14, 20, 0.78);
    box-shadow:
      0 1.1rem 2.8rem rgba(0, 0, 0, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    transform-style: preserve-3d;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    animation: riseIn 0.65s ease both;
  }

  .hero:hover,
  .panel:hover {
    transform: translateY(-4px) rotateX(1.6deg);
    box-shadow: 0 1.4rem 3rem rgba(0, 0, 0, 0.42);
  }

  main.light .hero,
  main.light .panel {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(250, 248, 241, 0.92));
    border-color: rgba(43, 59, 55, 0.12);
  }

  main.light,
  main.light h1,
  main.light h2,
  main.light h3,
  main.light p,
  main.light li {
    color: #1b2829;
  }

  main.light .intro,
  main.light .about p,
  main.light .project-body p,
  main.light .projects-note,
  main.light .project-note,
  main.light .education p,
  main.light .contact p,
  main.light .skills-grid ul {
    color: #2c3e42;
  }

  main.light .code-card,
  main.light .skills-grid article,
  main.light .project-card,
  main.light .contact-meta {
    background: rgba(249, 251, 245, 0.95);
    border-color: rgba(66, 85, 79, 0.2);
  }

  main.light .marquee-panel {
    background: rgba(247, 248, 242, 0.8);
    border-color: rgba(43, 59, 55, 0.12);
  }

  main.light .marquee-panel::before {
    background: linear-gradient(90deg, rgba(247, 248, 242, 1), rgba(247, 248, 242, 0));
  }

  main.light .marquee-panel::after {
    background: linear-gradient(270deg, rgba(247, 248, 242, 1), rgba(247, 248, 242, 0));
  }

  main.light .marquee-track span {
    color: #223234;
    background: rgba(255, 255, 255, 0.7);
    border-color: rgba(66, 85, 79, 0.15);
  }

  main.light .status-pill {
    color: #7c4230;
    background: rgba(243, 155, 109, 0.14);
  }

  main.light .editor-shell {
    background: linear-gradient(180deg, rgba(249, 251, 245, 0.98), rgba(241, 245, 240, 0.95));
    border-color: rgba(66, 85, 79, 0.16);
  }

  main.light .editor-top {
    border-color: rgba(66, 85, 79, 0.12);
    background: rgba(255, 255, 255, 0.55);
  }

  main.light .editor-top strong,
  main.light .editor-body {
    color: #27403f;
  }

  main.light .editor-body span {
    color: #d46e3f;
  }

  main.light .editor-body em {
    color: #0c7773;
  }

  main.light .kicker {
    color: #8e4c33;
  }

  main.light .btn.ghost {
    color: #243839;
    border-color: rgba(58, 77, 73, 0.24);
    background: rgba(255, 255, 255, 0.7);
  }

  main.light .tags span {
    color: #6a3d2c;
    background: rgba(243, 155, 109, 0.18);
    border-color: rgba(198, 111, 74, 0.35);
  }

  .hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 1rem;
    padding: 1.75rem;
    position: relative;
    overflow: hidden;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: auto -7% -28% auto;
    width: 24rem;
    height: 24rem;
    background: radial-gradient(circle, rgba(243, 155, 109, 0.14), transparent 62%);
    filter: blur(20px);
    pointer-events: none;
  }

  .hero h1,
  h2,
  h3 {
    margin: 0;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.08;
    max-width: 13ch;
  }

  .kicker {
    margin: 0 0 0.55rem;
    color: #f2b08c;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .intro {
    color: #d0d7e2;
    max-width: 54ch;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .hero-stats div {
    padding: 0.75rem;
    border-radius: 0.85rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(235, 241, 255, 0.1);
  }

  .hero-stats strong {
    display: block;
    font-size: 1.1rem;
    color: #f7b18c;
    margin-bottom: 0.18rem;
  }

  .hero-stats span {
    font-size: 0.78rem;
    color: #d0d7e2;
  }

  .btn {
    border-radius: 999px;
    padding: 0.58rem 1rem;
    font-weight: 700;
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn.primary {
    background: linear-gradient(120deg, #f3b08a, #ffd1b8);
    color: #24160e;
    box-shadow: 0 0.8rem 1.6rem rgba(243, 155, 109, 0.18);
  }

  .btn.ghost {
    border-color: rgba(235, 241, 255, 0.22);
    color: #eef2f8;
    background: rgba(255, 255, 255, 0.03);
  }

  .code-card {
    border: 1px solid rgba(183, 201, 220, 0.18);
    border-radius: 1rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0)),
      linear-gradient(145deg, #111826, #0b1118);
    padding: 0.95rem;
    transform: translateZ(30px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg));
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .hero:hover .code-card {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.22);
  }

  .avatar {
    width: 100%;
    border-radius: 0.9rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-bottom: 0.7rem;
  }

  .portrait-panel {
    margin-bottom: 0.85rem;
  }

  .editor-shell {
    border-radius: 1rem;
    border: 1px solid rgba(183, 201, 220, 0.16);
    background: linear-gradient(180deg, rgba(13, 20, 31, 0.95), rgba(9, 13, 19, 0.96));
    overflow: hidden;
  }

  .editor-top {
    display: flex;
    align-items: center;
    gap: 0.38rem;
    padding: 0.75rem 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .editor-top span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #f39b6d;
    opacity: 0.75;
  }

  .editor-top span:nth-child(2) {
    background: #81bfcc;
  }

  .editor-top span:nth-child(3) {
    background: #f6d365;
  }

  .editor-top strong {
    margin-left: auto;
    color: #dce6f3;
    font-size: 0.74rem;
    letter-spacing: 0.04em;
  }

  .editor-body {
    padding: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    line-height: 1.7;
    color: #c6d2e2;
  }

  .editor-body p {
    margin: 0;
  }

  .editor-body span {
    color: #f39b6d;
  }

  .editor-body em {
    font-style: normal;
    color: #8bd0cf;
  }

  .tilt-card {
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg));
    will-change: transform;
  }

  .tilt-card:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.16);
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.45rem 0.72rem;
    margin-bottom: 0.65rem;
    border-radius: 999px;
    background: rgba(243, 155, 109, 0.14);
    border: 1px solid rgba(243, 155, 109, 0.35);
    color: #ffd8c4;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .status-dot {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: #7ee0a1;
    box-shadow: 0 0 0.6rem #7ee0a1;
  }

  .marquee-panel {
    overflow: hidden;
    border: 1px solid rgba(214, 220, 218, 0.12);
    border-radius: 999px;
    background: rgba(9, 14, 20, 0.46);
    padding: 0.55rem 0;
    position: relative;
  }

  .marquee-panel::before,
  .marquee-panel::after {
    content: '';
    position: absolute;
    top: 0;
    width: 5rem;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .marquee-panel::before {
    left: 0;
    background: linear-gradient(90deg, rgba(13, 17, 25, 1), rgba(13, 17, 25, 0));
  }

  .marquee-panel::after {
    right: 0;
    background: linear-gradient(270deg, rgba(13, 17, 25, 1), rgba(13, 17, 25, 0));
  }

  .marquee-track {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    width: max-content;
    animation: marquee 20s linear infinite;
    padding-left: 1rem;
  }

  .marquee-track span {
    display: inline-flex;
    align-items: center;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #d7e0ed;
    font-size: 0.78rem;
    font-weight: 600;
  }

  .panel {
    padding: 1.35rem;
  }

  .about {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 1rem;
    align-items: center;
  }

  .about p:first-of-type,
  .section-head {
    max-width: 60ch;
  }

  .about p {
    color: #ced5df;
    line-height: 1.72;
  }

  .about-photo {
    width: 100%;
    border-radius: 1rem;
    border: 1px solid rgba(212, 224, 211, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
  }

  .section-head {
    display: grid;
    gap: 0.18rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
    border-bottom: 1px solid rgba(214, 220, 218, 0.1);
  }

  .section-head h2 {
    font-size: clamp(1.3rem, 2.8vw, 2rem);
  }

  .skills-grid {
    margin-top: 0.8rem;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .skills-grid article {
    border: 1px solid rgba(214, 225, 220, 0.12);
    border-radius: 0.85rem;
    padding: 0.95rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(15, 23, 33, 0.8);
    transform-style: preserve-3d;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .skills-grid article:hover {
    transform: translateY(-6px) rotateX(calc(4deg + var(--tilt-y, 0deg))) rotateY(calc(-3deg + var(--tilt-x, 0deg)));
    border-color: rgba(249, 178, 138, 0.45);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .skills-grid ul {
    margin: 0.6rem 0 0;
    padding-left: 1rem;
    color: #ced5df;
  }

  .project-grid {
    margin-top: 0.8rem;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-card {
    border: 1px solid rgba(219, 231, 219, 0.12);
    border-radius: 0.95rem;
    overflow: hidden;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(15, 22, 32, 0.9);
    transform-style: preserve-3d;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .project-card:hover {
    transform: translateY(-9px) rotateX(calc(6deg + var(--tilt-y, 0deg))) rotateY(calc(-5deg + var(--tilt-x, 0deg))) scale(1.01);
    box-shadow: 0 1.3rem 2.4rem rgba(0, 0, 0, 0.28);
    border-color: rgba(249, 178, 138, 0.35);
  }
  .project-visual {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    position: relative;
    text-align: left;
  }
  .project-visual:focus-visible {
    outline: 2px solid rgba(249, 178, 138, 0.75);
    outline-offset: -2px;
  }
  .project-card img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
  }
  .project-visual-hint {
    position: absolute;
    right: 0.7rem;
    bottom: 0.7rem;
    z-index: 1;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    padding: 0.22rem 0.48rem;
    border-radius: 999px;
    color: #f6efe8;
    background: rgba(10, 16, 23, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(0.35rem);
  }
  .project-preview-modal {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: rgba(3, 8, 13, 0.78);
    backdrop-filter: blur(0.65rem);
  }

  .project-preview-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  .project-preview-dialog {
    width: min(960px, 100%);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(12, 18, 26, 0.96);
    box-shadow: 0 1.4rem 3rem rgba(0, 0, 0, 0.45);
    position: relative;
  }
  .project-preview-dialog img {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
  .project-preview-caption {
    padding: 1rem;
  }
  .project-preview-caption h3 {
    margin: 0;
    font-size: 1.1rem;
  }
  .project-preview-caption p {
    margin: 0.45rem 0 0;
    color: #c8d2de;
    line-height: 1.55;
  }
  .project-preview-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    padding: 0.38rem 0.75rem;
    background: rgba(10, 16, 23, 0.84);
    color: #f7efe6;
    cursor: pointer;
  }
  .skill-card {
    position: relative;
    overflow: hidden;
  }

  .skill-card::after {
    content: '';
    position: absolute;
    inset: auto -20% -28% auto;
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    opacity: 0.32;
    pointer-events: none;
    filter: blur(0.3rem);
  }

  .skill-card.front::after {
    background: radial-gradient(circle, rgba(243, 155, 109, 0.36), transparent 64%);
  }

  .skill-card.back::after {
    background: radial-gradient(circle, rgba(129, 191, 204, 0.34), transparent 64%);
  }

  .skill-card.flow::after {
    background: radial-gradient(circle, rgba(169, 146, 214, 0.28), transparent 64%);
  }

  .skill-meters {
    margin-top: 0.85rem;
    display: grid;
    gap: 0.42rem;
  }

  .skill-meters span {
    position: relative;
    font-size: 0.66rem;
    letter-spacing: 0.03em;
    color: #d7e3f0;
    border: 1px solid rgba(214, 225, 220, 0.16);
    border-radius: 999px;
    padding: 0.2rem 0.5rem;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
  }

  .skill-meters span::before {
    content: '';
    position: absolute;
    inset: 0;
    width: var(--w);
    background: linear-gradient(110deg, rgba(243, 155, 109, 0.34), rgba(129, 191, 204, 0.3));
    z-index: -1;
  }
  .project-card:hover img {
    transform: translateZ(34px) scale(1.04);
  }

  .project-body {
    position: relative;
    padding: 0.95rem;
    transform: translateZ(28px);
  }

  .step-id {
    position: absolute;
    top: 0.68rem;
    right: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.74rem;
    color: rgba(219, 230, 240, 0.68);
    letter-spacing: 0.06em;
  }

  .process-step::after {
    content: '';
    position: absolute;
    left: 1.14rem;
    right: 1.14rem;
    bottom: 0.72rem;
    height: 0.18rem;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(243, 155, 109, 0.5), rgba(129, 191, 204, 0.36));
    opacity: 0.46;
  }

  .service-meta {
    margin-top: 0.75rem;
    display: flex;
    gap: 0.42rem;
    flex-wrap: wrap;
  }

  .service-meta span {
    font-size: 0.68rem;
    border-radius: 999px;
    padding: 0.22rem 0.48rem;
    border: 1px solid rgba(214, 225, 220, 0.2);
    background: rgba(255, 255, 255, 0.03);
    color: #d6e1ed;
  }

  .edu-card {
    border: 1px solid rgba(214, 225, 220, 0.14);
    border-radius: 0.95rem;
    padding: 0.95rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(15, 23, 33, 0.76);
  }

  .edu-track {
    margin-top: 0.85rem;
    display: grid;
    gap: 0.45rem;
  }

  .edu-track span {
    font-size: 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(214, 225, 220, 0.18);
    padding: 0.22rem 0.5rem;
    position: relative;
    overflow: hidden;
    color: #d7e0eb;
    background: rgba(255, 255, 255, 0.02);
  }

  .edu-track span::before {
    content: '';
    position: absolute;
    inset: 0;
    width: var(--w);
    background: linear-gradient(110deg, rgba(243, 155, 109, 0.35), rgba(129, 191, 204, 0.28));
    z-index: -1;
  }

  .highlight-list {
    margin: 0.4rem 0 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.5rem;
    color: #cad3de;
  }

  .contact-sub {
    margin: 0.45rem 0 0;
    color: #c5cfdb;
    max-width: 52ch;
    line-height: 1.6;
  }

  .contact-row {
    display: grid;
    gap: 0.2rem;
    padding-bottom: 0.45rem;
    border-bottom: 1px dashed rgba(214, 226, 214, 0.16);
  }

  .contact-row span {
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8fa2b6;
  }

  .contact-row p {
    margin: 0;
    color: #e4ebf5;
    font-weight: 600;
    word-break: break-word;
  }

  .contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.48rem;
    margin-top: 0.2rem;
  }

  .contact-actions a {
    font-size: 0.74rem;
    font-weight: 700;
    padding: 0.35rem 0.62rem;
    border-radius: 999px;
    border: 1px solid rgba(249, 178, 138, 0.4);
    color: #ffd7c2;
    background: rgba(248, 163, 114, 0.12);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .contact-actions a:hover {
    transform: translateY(-1px);
    background: rgba(248, 163, 114, 0.2);
    transform: translateY(-1px);
    background: rgba(248, 163, 114, 0.2);
  }

  main.light .step-id {
    color: rgba(43, 62, 69, 0.7);
  }

  main.light .service-meta span,
  main.light .skill-meters span,
  main.light .edu-track span {
    color: #284042;
    border-color: rgba(66, 85, 79, 0.24);
    background: rgba(255, 255, 255, 0.7);
  }

  main.light .edu-card,
  main.light .contact-meta {
    background: rgba(249, 251, 245, 0.95);
    border-color: rgba(66, 85, 79, 0.2);
  }

  main.light .highlight-list,
  main.light .contact-sub {
    color: #2f4448;
  }

  main.light .contact-row span {
    color: #5f767a;
  }

  main.light .contact-row p {
    color: #1f3033;
  }

  main.light .contact-actions a {
    color: #6a3a2a;
    background: rgba(243, 155, 109, 0.18);
  }

  .project-body p {
    margin: 0.45rem 0 0;
    color: #c8d0db;
  }

  .projects-note {
    margin: 0.35rem 0 0;
    color: #c2ced9;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .project-note {
    margin-top: 0.55rem;
    font-size: 0.82rem;
    line-height: 1.5;
    color: #f0c6ac;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.7rem;
  }

  .tags span {
    font-size: 0.7rem;
    padding: 0.22rem 0.5rem;
    border-radius: 999px;
    color: #f9ddd0;
    background: rgba(249, 178, 138, 0.12);
    border: 1px solid rgba(249, 178, 138, 0.28);
  }

  .education {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .education h3 {
    margin-bottom: 0.35rem;
  }

  .education p {
    line-height: 1.65;
  }

  .process-grid {
    margin-top: 0.75rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .services-grid {
    margin-top: 0.75rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .services-grid article {
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(214, 225, 220, 0.12);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      linear-gradient(180deg, rgba(17, 26, 37, 0.92), rgba(12, 17, 26, 0.88));
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .services-grid article:hover {
    transform: translateY(-6px) rotateX(calc(4deg + var(--tilt-y, 0deg))) rotateY(calc(-4deg + var(--tilt-x, 0deg)));
    border-color: rgba(243, 155, 109, 0.45);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .service-mark {
    display: block;
    width: 2.2rem;
    height: 0.28rem;
    border-radius: 999px;
    background: linear-gradient(120deg, #f39b6d, #81bfcc);
    margin-bottom: 0.9rem;
  }

  .services-grid h3 {
    margin-bottom: 0.5rem;
  }

  .services-grid p {
    margin: 0;
    color: #cbd3df;
    line-height: 1.6;
  }

  .process-step {
    padding: 0.95rem;
    border-radius: 0.9rem;
    border: 1px solid rgba(214, 225, 220, 0.12);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(15, 23, 33, 0.82);
    min-height: 7rem;
  }

  .process-dot {
    display: block;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    background: linear-gradient(120deg, #f39b6d, #81bfcc);
    margin-bottom: 0.65rem;
    box-shadow: 0 0 1rem rgba(243, 155, 109, 0.45);
  }

  .process-step p {
    margin: 0;
    color: #d0d7e2;
    line-height: 1.55;
  }

  .education p,
  .contact p {
    color: #cad2de;
  }

  .contact {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 1rem;
    align-items: center;
  }

  .contact-meta {
    border: 1px solid rgba(214, 226, 214, 0.12);
    border-radius: 0.8rem;
    padding: 0.85rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      rgba(15, 23, 33, 0.86);
    transform: translateZ(24px);
  }

  /* Keep this block near the end so light-mode contrast wins over base dark styles. */
  main.light .process-step,
  main.light .services-grid article {
    background:
      linear-gradient(180deg, rgba(248, 250, 245, 0.98), rgba(239, 244, 239, 0.96));
    border-color: rgba(66, 85, 79, 0.22);
  }

  main.light .process-step p,
  main.light .services-grid p,
  main.light .services-grid h3 {
    color: #203233;
  }

  main.light .hero-stats div {
    background: rgba(247, 249, 243, 0.94);
    border-color: rgba(66, 85, 79, 0.22);
  }

  main.light .hero-stats strong {
    color: #bc6139;
  }

  main.light .hero-stats span {
    color: #3b4f53;
  }

  main.light .actions .btn.ghost {
    color: #203233;
    border-color: rgba(58, 77, 73, 0.3);
    background: rgba(255, 255, 255, 0.84);
  }

  footer {
    text-align: center;
    color: #9ea9b8;
    font-size: 0.9rem;
    margin-top: 1rem;
    padding-top: 0.95rem;
    border-top: 1px solid rgba(214, 220, 218, 0.08);
    animation: riseIn 0.85s ease both;
  }

  @keyframes orbit {
    from {
      transform: translateY(0) translateX(0) scale(1);
    }

    to {
      transform: translateY(1.25rem) translateX(1.1rem) scale(1.08);
    }
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(18px) translateZ(0);
    }

    to {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }

  @keyframes introRise {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes introCopy {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes introButton {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes introArrowBob {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-2px) translateX(1px);
    }
  }

  @keyframes introBtnShine {
    0%,
    35% {
      transform: translateX(-120%);
    }

    55% {
      transform: translateX(120%);
    }

    100% {
      transform: translateX(120%);
    }
  }

  @keyframes thunderFlash {
    0%,
    100% {
      opacity: 0;
      transform: scaleY(0.92);
    }

    6% {
      opacity: 0.08;
    }

    8% {
      opacity: 0.92;
      transform: scaleY(1);
    }

    12% {
      opacity: 0.16;
    }

    14% {
      opacity: 0;
    }
  }

  @keyframes birdFly {
    0% {
      transform: translateX(-12rem) translateY(0) scale(0.9);
      opacity: 0;
    }

    10% {
      opacity: 0.85;
    }

    50% {
      transform: translateX(18rem) translateY(-0.8rem) scale(1);
    }

    100% {
      transform: translateX(42rem) translateY(0.2rem) scale(0.92);
      opacity: 0;
    }
  }

  @keyframes figureDrift {
    from {
      transform: translateY(0) translateX(0);
    }

    to {
      transform: translateY(-0.5rem) translateX(0.4rem);
    }
  }

  @keyframes rainShift {
    from {
      transform: translateY(-2.2rem);
    }

    to {
      transform: translateY(2.2rem);
    }
  }

  @keyframes softRain {
    from {
      transform: translateY(-8vh) scaleY(var(--scale));
      opacity: 0;
    }

    20% {
      opacity: 0.45;
    }

    to {
      transform: translateY(105vh) scaleY(var(--scale));
      opacity: 0;
    }
  }

  @media (max-width: 980px) {
    nav {
      display: none;
    }

    .hero,
    .about,
    .skills-grid,
    .process-grid,
    .services-grid,
    .project-grid,
    .education,
    .contact {
      grid-template-columns: 1fr;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }

    .hero-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hero:hover,
    .panel:hover,
    .project-card:hover,
    .skills-grid article:hover {
      transform: translateY(-3px) rotateX(calc(var(--tilt-y, 0deg))) rotateY(calc(var(--tilt-x, 0deg)));
    }
  }

  @media (max-width: 660px) {
    .frame {
      width: min(1120px, calc(100% - 1rem));
    }

    .full-intro {
      width: 100vw;
      height: 100vh;
      margin: 0;
    }

    .hero,
    .panel {
      padding: 1rem;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }

    .hero-stats {
      grid-template-columns: 1fr;
    }

    .fx-bg {
      height: 20rem;
    }

    .marquee-track {
      animation-duration: 26s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>
