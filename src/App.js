import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Youtube, 
  Sparkles, 
  Play, 
  BookOpen, 
  Flame, 
  Mail, 
  Instagram,
  ChevronRight,
  ExternalLink,
  FileText,
  Menu,
  X,
  Send
} from 'lucide-react';

const CONTACT_EMAIL = 'vedicloresyt@gmail.com';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@vedicloresyt';
const INSTAGRAM_URL = 'https://www.instagram.com/vedic_lores/?hl=en';
const getYoutubeSearchUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`Vedic Lores ${query}`)}`;

export default function VedicLoresPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentLoreIndex, setCurrentLoreIndex] = useState(0);
  
  // Videos page states
  const [videoFilter, setVideoFilter] = useState('all');

  // Scripture page states
  const [selectedScripture, setSelectedScripture] = useState('gita');
  const [selectedChapter, setSelectedChapter] = useState(0);

  // Contact form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTopicRequest = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && topic.trim()) {
      const subject = `Video Topic Request: ${topic.trim()}`;
      const body = [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        `Requested topic: ${topic.trim()}`,
        '',
        'Lore details and reference sources:',
        details.trim() || 'No additional details provided.'
      ].join('\n');

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setTopic('');
      setDetails('');
    }
  };

  // Nav helper to change page & scroll to top
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shlokas = [
    {
      verse: "धर्मो रक्षति रक्षितः ।",
      translit: "Dharmo Rakshati Rakshitah",
      translation: "Dharma protects those who protect it.",
      source: "Mahabharata",
      lore: "A central tenet of Sanatan ethos, teaching that when we uphold ethical duties, justice, and righteousness, that very righteousness stands as our ultimate shield against chaos."
    },
    {
      verse: "सत्यमेव जयते नानृतम् ।",
      translit: "Satyameva Jayate Nānritam",
      translation: "Truth alone triumphs, not untruth.",
      source: "Mundaka Upanishad",
      lore: "A timeless declaration that although falsehood may offer temporary gains, the ultimate structural reality of the universe (Satya) is what survives and prevails."
    },
    {
      verse: "तमसो मा ज्योतिर्गमय ।",
      translit: "Tamaso Mā Jyotirgamaya",
      translation: "Lead me from darkness to light.",
      source: "Brihadaranyaka Upanishad",
      lore: "A sacred invocation representing the eternal human quest for knowledge, seeking to be guided away from the darkness of ignorance (Agyana) and into the light of spiritual awareness."
    },
    {
      verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
      translit: "Karmany-evādhikāraste Mā Phaleshu Kadāchana",
      translation: "You have a right to perform your duty, but not to its fruits.",
      source: "Bhagavad Gita (2.47)",
      lore: "Shri Krishna instructs Arjuna on Nishkama Karma—the art of action without anxiety over the results, highlighting that pure dedication to the work itself leads to true mastery."
    }
  ];

  const floatingShlokas = [
    { text: "सत्यं वद धर्मं चर", top: "12%", left: "8%", rotate: "-12deg" },
    { text: "धर्मो रक्षति रक्षितः", top: "25%", left: "75%", rotate: "15deg" },
    { text: "तमसो मा ज्योतिर्गमय", top: "45%", left: "5%", rotate: "-8deg" },
    { text: "वसुधैव कुटुम्बकम्", top: "60%", left: "80%", rotate: "10deg" },
    { text: "सत्यमेव जयते", top: "78%", left: "10%", rotate: "-15deg" },
    { text: "कृण्वन्तो विश्वमार्यम्", top: "85%", left: "70%", rotate: "8deg" }
  ];

  const actualVideos = [
    {
      title: "Why Shivji Wore a Demon's Skin? The Krittivasa Story of Gajasur",
      desc: "The Krittivasa story of Mahadev and Gajasur, exploring one of Shiva's fierce and symbolic forms.",
      duration: "3:00",
      query: "Krittivasa Gajasur",
      videoUrl: "https://youtu.be/pO3w0HbMZLU",
      thumbnail: "https://img.youtube.com/vi/pO3w0HbMZLU/hqdefault.jpg",
      category: "deities",
      isFeatured: true
    },
    {
      title: "Hanuman x Mahadev Fusion Form? The Mystery of HanuBhairav Explained",
      desc: "A lore-focused explanation of HanuBhairav and the mysterious connection between Hanuman ji and Mahadev.",
      duration: "4:30",
      query: "HanuBhairav",
      videoUrl: "https://youtu.be/ZNfVWz1HpYQ",
      thumbnail: "https://img.youtube.com/vi/ZNfVWz1HpYQ/hqdefault.jpg",
      category: "deities",
      isFeatured: true
    },
    {
      title: "The Rise of Shivaji Maharaj | Childhood, First Victory & Birth of Swarajya | Episode 2",
      desc: "The early journey of Chhatrapati Shivaji Maharaj, from childhood courage to the first steps of Swarajya.",
      duration: "4:57",
      query: "Shivaji Maharaj Episode 2",
      videoUrl: "https://youtu.be/CvFrgVE7zkE",
      thumbnail: "https://img.youtube.com/vi/CvFrgVE7zkE/hqdefault.jpg",
      category: "samrajya",
      isFeatured: true
    },
    {
      title: "PAWANKHIND (Official Anime Trailer) | The Legendary Last Stand of Baji Prabhu",
      desc: "The legendary last stand of Baji Prabhu Deshpande at Pawankhind, told as a cinematic anime trailer.",
      duration: "1:05",
      query: "Pawankhind",
      videoUrl: "https://youtu.be/jE1DZVmabLQ",
      thumbnail: "https://img.youtube.com/vi/jE1DZVmabLQ/hqdefault.jpg",
      category: "samrajya",
      isFeatured: true
    },
    {
      title: "Maruti: The Last Sanjeevni | EP1 The Lost Child | Kalki Era Dystopian Anime",
      desc: "In a dark dystopian future where faith is forbidden and temples are erased, a child escapes death under the mystery of Maruti.",
      duration: "4:09",
      query: "Maruti Last Sanjeevni",
      videoUrl: "https://youtu.be/x7nsAUaTBXg",
      thumbnail: "https://img.youtube.com/vi/x7nsAUaTBXg/hqdefault.jpg",
      category: "deities",
      isFeatured: true
    },
    {
      title: "डाकू से महर्षि तक — वाल्मीकि की अनसुनी गाथा | The Hidden Story of Ramayana's Author",
      desc: "The untold transformation of Valmiki, from feared dacoit to Maharishi and author of the Ramayana.",
      duration: "4:23",
      query: "Valmiki Ramayana Author",
      videoUrl: "https://youtu.be/7uqkB6hCzlU",
      thumbnail: "https://img.youtube.com/vi/7uqkB6hCzlU/hqdefault.jpg",
      category: "itihasa",
      isFeatured: true
    },
    {
      title: "Bhairav: The Fierce Manifestation of Shiva",
      desc: "Deciphering the profound metaphysics and ancient legends of Lord Bhairav, the protector of holy Kashi.",
      duration: "5:10",
      query: "Bhairav",
      category: "deities",
      isFeatured: false
    },
    {
      title: "Chhatrapati Shivaji Maharaj: Tactics of the Tiger",
      desc: "An analysis of the guerrilla military tactics, fort architectures, and administrative systems created by the Maratha Emperor.",
      duration: "8:45",
      query: "Shivaji",
      category: "samrajya",
      isFeatured: false
    },
    {
      title: "Dashavatara: Evolution and Devolution of Consciousness",
      desc: "Exploring how the ten incarnations of Lord Vishnu correlate with biological evolution and the shifts in human consciousness.",
      duration: "7:15",
      query: "Avatar",
      category: "puranas",
      isFeatured: false
    },
    {
      title: "Hanuman Chalisa: Meaning & Cosmic Energy",
      desc: "A spiritual and grammatical breakdown of Tulsidas's epic verses, celebrating Hanuman's mystical powers and courage.",
      duration: "4:30",
      query: "Hanuman",
      category: "deities",
      isFeatured: false
    }
  ];

  const scriptureCards = [
    {
      title: 'Valmiki Ramayan',
      subtitle: 'Original Sanskrit epic of Shri Rama.',
      pdfLink: 'https://www.gutenberg.org/ebooks/24869',
      accent: 'from-amber-500/40 via-orange-700/25 to-rose-900/40'
    },
    {
      title: 'Mahabharata',
      subtitle: 'The great Itihasa of dharma and Kurukshetra.',
      pdfLink: 'https://www.sacred-texts.com/hin/maha/index.htm',
      accent: 'from-red-500/35 via-amber-700/25 to-stone-900/40'
    },
    {
      title: 'Puranas',
      subtitle: 'Legends, cosmology, temples, and sacred histories. Starts with Vishnu Purana.',
      pdfLink: 'https://www.sacred-texts.com/hin/vp/index.htm',
      accent: 'from-emerald-500/30 via-amber-700/25 to-zinc-900/40'
    },
    {
      title: 'Vedas',
      subtitle: 'Foundational hymns and Vedic knowledge traditions.',
      pdfLink: 'https://www.sacred-texts.com/hin/index.htm',
      accent: 'from-sky-500/30 via-amber-700/25 to-slate-900/40'
    },
    {
      title: 'Hanuman Chalisa',
      subtitle: 'Tulsidas ji\'s beloved forty-verse hymn.',
      pdfLink: 'https://greenmesg.org/stotras/hanuman/hanuman_chalisa.php',
      accent: 'from-orange-500/40 via-red-700/25 to-zinc-900/40'
    },
    {
      title: 'Ram Stuti Stotram',
      subtitle: 'Devotional praise dedicated to Shri Rama.',
      pdfLink: 'https://navbharattimes.indiatimes.com/speakingtree/holistic-healing/shri-ram-stuti-lyrics-in-hindi-shri-ramchandra-kripalu-bhajman/articleshow/106901228.cms',
      accent: 'from-yellow-500/35 via-orange-700/25 to-stone-900/40'
    },
    {
      title: 'Bajrang Baan',
      subtitle: 'A powerful prayer to Bajrangbali.',
      pdfLink: 'https://navbharattimes.indiatimes.com/astro/religion-rituals/arti-bhajan/aarti-hanuman-ji-ki-bajrang-vaan/articleshow/91101837.cms',
      accent: 'from-red-600/40 via-orange-700/25 to-neutral-950/40'
    },
    {
      title: 'Hanuman Stotram by Samarth Ramdas',
      subtitle: 'Also known as Maruti Stotra in the Ramdas tradition.',
      pdfLink: 'https://navbharattimes.indiatimes.com/astro/religion-rituals/arti-bhajan/maruti-stotra-lyrics-in-hindi/articleshow/120476892.cms',
      accent: 'from-lime-500/30 via-orange-700/25 to-zinc-950/40'
    }
  ];

  // Scriptures Reading Database
  const scripturesDb = {
    gita: {
      name: "Srimad Bhagavad Gita",
      tagline: "Shri Krishna's dialogue with Arjuna on the battlefield of Kurukshetra.",
      externalLink: "https://www.holy-bhagavad-gita.org/",
      chapters: [
        {
          chapterName: "Chapter 1: Arjuna Vishada Yoga",
          chapterDesc: "The Grief of Arjuna—setting the stage for civilizational dialogue.",
          verses: [
            {
              number: "Verse 1",
              sanskrit: "धृतराष्ट्र उवाच ।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥",
              translit: "dhṛtarāṣṭra uvāca |\ndharmakṣetre kurukṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||",
              translation: "Dhritarashtra said: O Sanjaya, assembled in the holy land of Kurukshetra, eager to fight, what did my sons and the sons of Pandu do?"
            },
            {
              number: "Verse 21",
              sanskrit: "अर्जुन उवाच ।\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ॥",
              translit: "arjuna uvāca |\nsenayorubhayormadhye rathaṃ sthāpaya me'cyuta ||",
              translation: "Arjuna said: O Infallible One (Achyuta), please place my chariot between the two armies."
            },
            {
              number: "Verse 47",
              sanskrit: "सञ्जय उवाच ।\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् ।\nविसृज्य सशरं चापं शोकसंविग्नमानसः ॥",
              translit: "sañjaya uvāca |\nevamuktvārjunaḥ saṅkhye rathopastha upāviśat |\nvisṛjya saśaraṃ cāpaṃ śokasaṃvignamānasaḥ ||",
              translation: "Sanjaya said: Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sank onto the seat of his chariot, his mind overcome with grief."
            }
          ]
        },
        {
          chapterName: "Chapter 2: Sankhya Yoga",
          chapterDesc: "The Path of Selfless Wisdom and the Immortality of the Soul.",
          verses: [
            {
              number: "Verse 7",
              sanskrit: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः ।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥",
              translit: "kārpaṇyadoṣopahatasvabhāvaḥ pṛcchāmi tvāṃ dharmasammūḍhacetāḥ |\nyacchreyaḥ syānniścitaṃ brūhi tanme śiṣyaste'haṃ śādhi māṃ tvāṃ prapannam ||",
              translation: "My natural heart is overcome by weakness, and my mind is confused about my duty (Dharma). I ask You: tell me decisively what is best for me. I am Your disciple; teach me, who has taken refuge in You."
            },
            {
              number: "Verse 20",
              sanskrit: "न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥",
              translit: "na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato'yaṃ purāṇo na hanyate hanyamāne śarīre ||",
              translation: "The Soul is never born, nor does it ever die; nor, having once existed, does it ever cease to be. The Soul is unborn, eternal, immortal, and primeval. It is not destroyed when the body is slain."
            },
            {
              number: "Verse 47",
              sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
              translit: "karmaṇyevādhikāraste mā phaleṣu kadācana |\nmā karmaphalaheturbhūrmā te saṅgo'stvakarmaṇi ||",
              translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to inaction."
            }
          ]
        }
      ]
    },
    ramayana: {
      name: "Valmiki Ramayana",
      tagline: "The original epic history of the ideal human, Shri Rama, by Sage Valmiki.",
      externalLink: "https://www.valmikiramayan.net/",
      chapters: [
        {
          chapterName: "Bala Kanda: Chapter 1",
          chapterDesc: "Samkshepa Ramayana—Sage Narada outlines Rama's virtues to Valmiki.",
          verses: [
            {
              number: "Verse 1",
              sanskrit: "तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥",
              translit: "tapaḥsvādhyāyanirataṃ tapasvī vāgvidāṃ veram |\nnāradaṃ paripapraccha vālmīkirmunipuṅgavam ||",
              translation: "The ascetic Sage Valmiki enquired of Sage Narada, who is ever engaged in penance and study of scriptures, and who is the preeminent among the masters of speech."
            },
            {
              number: "Verse 8",
              sanskrit: "धर्मज्ञः सत्यसन्धश्च प्रजानां च हिते रतः ।\nयशस्वी ज्ञानसम्पन्नः शुचिर्वश्यः समाधिमान् ॥",
              translit: "dharmajñaḥ satyasandhaśca prajānāṃ ca hite rataḥ |\nyaśasvī jñānasampannaḥ śucirvaśyaḥ samādhimān ||",
              translation: "He (Shri Rama) is a knower of Dharma, speaker of truth, dedicated to the welfare of all subjects, illustrious, full of wisdom, pure, self-controlled, and meditative."
            },
            {
              number: "Verse 18",
              sanskrit: "समुद्र इव गाम्भीर्ये धैर्येण हिमवानिव ।\nविष्णुना सदृशो वीर्ये सोमवत्प्रियदर्शनः ॥",
              translit: "samudra iva gāmbhīrye dhairyeṇa himavāniva |\nviṣṇunā sadṛṣo vīrye somavatpriyadarśanaḥ ||",
              translation: "He (Shri Rama) is like the ocean in gravity, like the Himalayas in fortitude, comparable to Lord Vishnu in prowess, and as pleasing to look at as the full moon."
            }
          ]
        }
      ]
    },
    upanishads: {
      name: "Isha Upanishad",
      tagline: "One of the oldest Upanishads, revealing the divine nature of the cosmos.",
      externalLink: "https://www.wisdomlib.org/hinduism/upanishad",
      chapters: [
        {
          chapterName: "Mantra 1 to 2",
          chapterDesc: "Divine omnipresence, selfless action, and spiritual contentment.",
          verses: [
            {
              number: "Mantra 1",
              sanskrit: "ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
              translit: "īśā vāsyamidaṃ sarvaṃ yatkiñca jagatyāṃ jagat |\nten tyakten bhuñjīthā mā gṛdhaḥ kasyasviddhanam ||",
              translation: "All this—whatever moves on this earth—is enveloped by the Divine Lord. Protect yourself or enjoy through renunciation; do not covet the wealth of anyone else."
            },
            {
              number: "Mantra 2",
              sanskrit: "कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः ।\nएवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥",
              translit: "kurvanneveha karmāṇi jijīviṣecchataṃ samāḥ |\nevaṃ tvayi nānyatheto'sti na karma lipyate nare ||",
              translation: "By performing righteous deeds here, one should wish to live a hundred years. If you live thus, there is no other way than this; action does not cling to a man."
            }
          ]
        }
      ]
    }
  };

  const currentScriptureData = scripturesDb[selectedScripture];
  const currentChapterData = currentScriptureData.chapters[selectedChapter] || currentScriptureData.chapters[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0402] via-[#210903] to-[#0c0402] text-amber-50 font-outfit overflow-x-hidden relative selection:bg-amber-600 selection:text-white">
      
      {/* Sticky Header Navbar */}
      <nav className="sticky top-0 bg-[#0d0503]/90 backdrop-blur-md border-b border-amber-900/20 z-50 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <div onClick={() => navigateTo('home')} className="flex items-center space-x-3 cursor-pointer group">
            <img 
              src="/logo.jpg" 
              alt="Vedic Lores" 
              className="w-10 h-10 rounded-full border border-amber-500/40 group-hover:border-amber-400 group-hover:scale-105 transition-all"
            />
            <span className="text-xl font-bold font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 group-hover:text-amber-400 transition-colors">
              Vedic Lores
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-cinzel text-sm uppercase tracking-wider font-semibold">
            <button 
              onClick={() => navigateTo('home')} 
              className={`hover:text-amber-400 transition-colors ${currentPage === 'home' ? 'nav-link-active' : 'text-amber-200/70'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('videos')} 
              className={`hover:text-amber-400 transition-colors ${currentPage === 'videos' ? 'nav-link-active' : 'text-amber-200/70'}`}
            >
              Videos
            </button>
            <button 
              onClick={() => navigateTo('scriptures')} 
              className={`hover:text-amber-400 transition-colors ${currentPage === 'scriptures' ? 'nav-link-active' : 'text-amber-200/70'}`}
            >
              Read Scriptures
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`hover:text-amber-400 transition-colors ${currentPage === 'contact' ? 'nav-link-active' : 'text-amber-200/70'}`}
            >
              Request Topic
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-gradient-to-r from-fuchsia-700 to-rose-600 hover:from-fuchsia-600 hover:to-rose-500 text-white font-cinzel font-bold text-xs px-4 py-2 rounded-lg transition-all duration-300 shadow-md shadow-rose-950/20"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href={YOUTUBE_CHANNEL_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-cinzel font-bold text-xs px-4 py-2 rounded-lg transition-all duration-300 shadow-md shadow-red-950/20"
            >
              <Youtube className="w-4 h-4" />
              <span>Watch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-amber-400 hover:text-amber-200 p-1.5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#160a06]/95 border-b border-amber-900/30 font-cinzel px-4 py-4 flex flex-col space-y-4 shadow-xl text-center uppercase tracking-wider text-sm font-semibold animate-fade-in">
            <button 
              onClick={() => navigateTo('home')} 
              className={`py-1.5 hover:text-amber-400 ${currentPage === 'home' ? 'text-amber-400' : 'text-amber-200/80'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('videos')} 
              className={`py-1.5 hover:text-amber-400 ${currentPage === 'videos' ? 'text-amber-400' : 'text-amber-200/80'}`}
            >
              Videos
            </button>
            <button 
              onClick={() => navigateTo('scriptures')} 
              className={`py-1.5 hover:text-amber-400 ${currentPage === 'scriptures' ? 'text-amber-400' : 'text-amber-200/80'}`}
            >
              Read Scriptures
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`py-1.5 hover:text-amber-400 ${currentPage === 'contact' ? 'text-amber-400' : 'text-amber-200/80'}`}
            >
              Request Topic
            </button>
            
            <a 
              href={YOUTUBE_CHANNEL_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 bg-gradient-to-r from-red-750 to-orange-600 py-2.5 rounded-xl text-white font-bold text-xs"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 bg-gradient-to-r from-fuchsia-700 to-rose-600 py-2.5 rounded-xl text-white font-bold text-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        )}
      </nav>

      {/* Golden Rising Embers (Sparks) Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(35)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const delay = Math.random() * 12;
          const duration = Math.random() * 8 + 8;
          return (
            <div
              key={i}
              className="absolute bg-gradient-to-t from-amber-500 to-orange-500 rounded-full opacity-40 filter blur-[0.5px] animate-rise"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                bottom: `-10px`
              }}
            />
          );
        })}
      </div>

      {/* Saffron Glow Mouse Follower */}
      <div
        className="fixed w-72 h-72 sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-amber-500/10 to-orange-700/10 rounded-full blur-[80px] pointer-events-none z-0 transition-transform duration-1000 ease-out hidden sm:block"
        style={{
          transform: `translate(${mousePosition.x - 225}px, ${mousePosition.y - 225}px)`,
        }}
      />

      {/* Floating Faded Ancient Shloka Watermarks */}
      {floatingShlokas.map((s, i) => (
        <div
          key={i}
          className="absolute text-amber-500/5 font-cinzel font-bold text-base sm:text-2xl select-none pointer-events-none hidden md:block transform"
          style={{
            top: s.top,
            left: s.left,
            transform: `rotate(${s.rotate})`
          }}
        >
          {s.text}
        </div>
      ))}

      {/* Page Content Rendering */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 flex flex-col items-center justify-between min-h-[calc(100vh-70px)] animate-fade-in-page">
        
        {currentPage === 'home' && (
          <div className="w-full flex flex-col items-center space-y-12">
            
            {/* Hero Brand Board */}
            <div className="text-center mt-6">
              {/* Spinning Ring Logo Frame */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                  <img 
                    src="/logo.jpg"
                    alt="Vedic Lores Logo"
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-amber-500/40 shadow-2xl relative z-10"
                    style={{ filter: 'drop-shadow(0 15px 30px rgba(217, 119, 6, 0.25))' }}
                  />
                  <div 
                    className="absolute -inset-2 border border-dashed border-amber-500/25 rounded-full z-0 pointer-events-none"
                    style={{ animation: 'spin 40s linear infinite' }}
                  />
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-orange-500 mb-3 leading-tight filter drop-shadow-sm">
                Vedic Lores
              </h2>
              
              <div className="flex items-center justify-center mb-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500" />
                <Flame className="w-4 h-4 mx-3 text-amber-500 animate-flicker" />
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500" />
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-amber-200/90 mb-3 max-w-2xl px-4 font-light font-lora italic">
                Reliving the sacred epics, history, legends, and timeless wisdom of ancient Sanatan India through digital storytelling.
              </p>
            </div>

            <div className="w-full max-w-4xl px-2">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#24110a]/60 to-[#120703]/80 border border-amber-500/20 p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-cinzel">Civilizational Wisdom</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-amber-100 mt-1">Featured Sacred Shloka</h3>
                </div>

                <div className="min-h-[160px] flex flex-col justify-center items-center text-center px-2 py-4 bg-[#140804]/50 border border-amber-950 rounded-xl relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2c130b] px-3 py-0.5 rounded-full border border-amber-950 text-[10px] text-amber-400 font-cinzel font-bold">
                    Source: {shlokas[currentLoreIndex].source}
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400/90 font-lora mb-3 tracking-wide filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
                    {shlokas[currentLoreIndex].verse}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-amber-200/50 italic mb-2 font-mono">
                    "{shlokas[currentLoreIndex].translit}"
                  </p>
                  
                  <p className="text-sm sm:text-base font-semibold text-amber-100 max-w-xl mb-3">
                    "{shlokas[currentLoreIndex].translation}"
                  </p>
                  
                  <p className="text-xs sm:text-sm text-amber-200/60 leading-relaxed max-w-2xl border-t border-amber-900/20 pt-3">
                    {shlokas[currentLoreIndex].lore}
                  </p>
                </div>

                <div className="flex justify-center mt-6">
                  <button 
                    onClick={() => setCurrentLoreIndex((prev) => (prev + 1) % shlokas.length)}
                    className="group flex items-center space-x-2 bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-amber-600/30 hover:from-amber-600/50 hover:to-orange-600/40 text-amber-300 hover:text-white border border-amber-500/30 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 font-cinzel"
                  >
                    <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Seek Another Wisdom</span>
                    <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-2">
              <div 
                onClick={() => navigateTo('videos')} 
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[#1c0c07]/40 backdrop-blur-md border border-amber-900/30 p-6 hover:border-amber-500/50 transition-all hover:scale-[1.02] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-750 to-orange-600 mb-4 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-white fill-white/20" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-200 group-hover:text-amber-400 transition-colors">Video Archives</h4>
                <p className="text-xs text-amber-200/50 leading-relaxed font-light mt-1.5">
                  Browse our animated videos on Lord Rama, Pawankhind, and traditional folktales.
                </p>
              </div>

              <div 
                onClick={() => navigateTo('scriptures')} 
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[#1c0c07]/40 backdrop-blur-md border border-amber-900/30 p-6 hover:border-amber-500/50 transition-all hover:scale-[1.02] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-600 to-amber-500 mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-200 group-hover:text-amber-400 transition-colors">Scripture Portal</h4>
                <p className="text-xs text-amber-200/50 leading-relaxed font-light mt-1.5">
                  Read Srimad Bhagavad Gita, Valmiki Ramayana, and Upanishads directly on our web portal.
                </p>
              </div>

              <div 
                onClick={() => navigateTo('contact')} 
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[#1c0c07]/40 backdrop-blur-md border border-amber-900/30 p-6 hover:border-amber-500/50 transition-all hover:scale-[1.02] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-600 to-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-200 group-hover:text-amber-400 transition-colors">Request a Video</h4>
                <p className="text-xs text-amber-200/50 leading-relaxed font-light mt-1.5">
                  Have an epic story or historical king in mind? Submit your topic proposal directly to us.
                </p>
              </div>
            </div>

            {/* Featured Videos Showcase - PAWANKHIND, HANU BHAIRAV, MAHARAJ, RAMA */}
            <div className="w-full max-w-4xl px-2">
              <div className="relative overflow-hidden rounded-2xl bg-[#1c0c07]/50 backdrop-blur-lg border border-amber-500/20 p-6 sm:p-8 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold font-cinzel text-amber-200 flex items-center">
                      <Youtube className="w-5 h-5 mr-2.5 text-amber-500" />
                      Featured Video Spotlights
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/50 mt-1">Epic tales from history and scriptures.</p>
                  </div>
                  <button 
                    onClick={() => navigateTo('videos')} 
                    className="text-xs font-semibold font-cinzel text-amber-400 hover:text-amber-200 flex items-center gap-1 group"
                  >
                    <span>Explore Library</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {actualVideos.filter(v => v.isFeatured).map((vid, idx) => (
                    <a 
                      key={idx}
                      href={vid.videoUrl || getYoutubeSearchUrl(vid.query)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block rounded-xl overflow-hidden bg-[#24110a]/50 border border-amber-900/40 p-4 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative aspect-video w-full rounded-lg bg-[#0e0503] flex items-center justify-center border border-amber-950 overflow-hidden mb-3">
                        {vid.thumbnail && (
                          <img
                            src={vid.thumbnail}
                            alt={`${vid.title} thumbnail`}
                            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-[#2c130b]/20 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-red-600/90 text-white flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 shadow-lg shadow-black/55 transition-all duration-300">
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] text-amber-200 px-1.5 py-0.5 rounded font-mono font-semibold">
                          {vid.duration}
                        </span>
                      </div>

                      <h4 className="font-bold text-amber-200 font-cinzel text-xs leading-snug group-hover:text-amber-400 transition-colors duration-300 mb-1">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-amber-200/50 leading-relaxed font-light">
                        {vid.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Civilization Wisdom / Shloka cycler */}
            
          </div>
        )}

        {currentPage === 'videos' && (
          <div className="w-full flex flex-col items-center space-y-8">
            <div className="text-center max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-bold font-cinzel tracking-wider text-amber-200 mb-2">Video Archives</h2>
              <p className="text-xs sm:text-sm text-amber-200/50 font-light">
                Explore our full digital series detailing Maratha warfare, epic Ramayana lore, and cosmic representations.
              </p>
            </div>

            {/* Tag Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
              {[
                { id: 'all', label: 'All Sagas' },
                { id: 'itihasa', label: 'Itihasa (Epics)' },
                { id: 'puranas', label: 'Puranas' },
                { id: 'samrajya', label: 'Imperial Dynasties' },
                { id: 'deities', label: 'Deities & Protectors' }
              ].map(tag => (
                <button
                  key={tag.id}
                  onClick={() => setVideoFilter(tag.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-cinzel tracking-wider border transition-all ${
                    videoFilter === tag.id
                      ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                      : 'bg-amber-950/20 border-amber-900/30 text-amber-400 hover:bg-amber-900/20'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-2">
              {actualVideos
                .filter(v => videoFilter === 'all' || v.category === videoFilter)
                .map((vid, idx) => (
                  <a 
                    key={idx}
                    href={vid.videoUrl || getYoutubeSearchUrl(vid.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-xl overflow-hidden bg-[#24110a]/50 border border-amber-900/40 p-4 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-video w-full rounded-lg bg-[#0e0503] flex items-center justify-center border border-amber-950 overflow-hidden mb-3">
                      {vid.thumbnail && (
                        <img
                          src={vid.thumbnail}
                          alt={`${vid.title} thumbnail`}
                          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-[#2c130b]/20 group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-red-600/90 text-white flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 shadow-lg shadow-black/55 transition-all duration-300">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] text-amber-200 px-1.5 py-0.5 rounded font-mono font-semibold">
                        {vid.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-amber-500 font-cinzel">
                        {vid.category === 'itihasa' && 'Epic (Itihasa)'}
                        {vid.category === 'puranas' && 'Purana Lore'}
                        {vid.category === 'samrajya' && 'Maratha / Dynasty'}
                        {vid.category === 'deities' && 'Deity / Guardian'}
                      </span>
                    </div>

                    <h4 className="font-bold text-amber-200 font-cinzel text-xs leading-snug group-hover:text-amber-400 transition-colors duration-300 mb-1">
                      {vid.title}
                    </h4>
                    <p className="text-[11px] text-amber-200/50 leading-relaxed font-light">
                      {vid.desc}
                    </p>
                  </a>
                ))}
            </div>

            {/* Footer Prompt */}
            <div className="text-center pt-4">
              <p className="text-xs text-amber-200/40">Can't find a topic you want to watch?</p>
              <button 
                onClick={() => navigateTo('contact')}
                className="text-xs font-cinzel font-bold text-amber-400 hover:text-amber-200 underline mt-1"
              >
                Submit a video topic request here
              </button>
            </div>
          </div>
        )}

        {currentPage === 'scriptures' && (
          <div className="w-full flex flex-col items-center space-y-8">
            
            {/* Banner block */}
            <div className="relative w-full max-w-4xl h-44 sm:h-52 rounded-2xl overflow-hidden border border-amber-900/30 flex items-center justify-center text-center px-4">
              <div className="absolute inset-0 bg-black/70 z-10" />
              <img 
                src="/img/scripture_banner.png" 
                alt="Palm leaf manuscript" 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 filter blur-[0.5px]"
              />
              <div className="relative z-20">
                <h2 className="text-2xl sm:text-4xl font-bold font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-500">
                  Sanskrit Granthalaya
                </h2>
                <p className="text-xs sm:text-sm text-amber-200/80 max-w-lg mt-2 font-lora italic font-light">
                  "Read sacred treatises directly online on our platform, translated verse by verse."
                </p>
              </div>
            </div>

            <div className="w-full max-w-5xl">
              <div className="mb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 px-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-cinzel tracking-wide text-amber-100">
                    Scripture Library
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200/55 mt-1">
                    Open readable scripture and stotram documents directly from each card.
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 font-cinzel">
                  8 texts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {scriptureCards.map((item) => (
                  <a
                    key={item.title}
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-lg bg-[#160906]/70 border border-amber-900/35 shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60"
                  >
                    <div className="relative h-32 overflow-hidden bg-[#0f0704]">
                      <img
                        src="/img/scripture_banner.png"
                        alt={`${item.title} manuscript`}
                        className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#160906] to-transparent" />
                      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-md border border-amber-400/30 bg-black/35 text-amber-200 backdrop-blur-sm">
                        <BookOpen className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="min-h-[2.5rem] text-sm font-bold leading-snug text-amber-100 font-cinzel">
                        {item.title}
                      </h4>
                      <p className="mt-2 min-h-[2.5rem] text-xs leading-relaxed text-amber-100/55">
                        {item.subtitle}
                      </p>
                      <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-amber-500/35 bg-amber-500/10 px-3 py-2 text-xs font-bold text-amber-200 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                        <FileText className="h-3.5 w-3.5" />
                        <span>Open Document</span>
                        <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Scripture & Chapter Selection Panel */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl justify-center items-center">
              {/* Scripture selection button tabs */}
              <div className="flex gap-2">
                {[
                  { id: 'gita', label: 'Bhagavad Gita' },
                  { id: 'ramayana', label: 'Ramayana' },
                  { id: 'upanishads', label: 'Isha Upanishad' }
                ].map(sc => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedScripture(sc.id);
                      setSelectedChapter(0);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold font-cinzel tracking-wider border transition-all ${
                      selectedScripture === sc.id
                        ? 'bg-amber-600 border-amber-500 text-white shadow'
                        : 'bg-[#1c0c07]/50 border-amber-950 text-amber-400 hover:bg-[#2c130b]/30'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>

              {/* Chapter dropdown selector */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-cinzel font-semibold text-amber-500/80">Select Chapter:</span>
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(Number(e.target.value))}
                  className="bg-[#140804] border border-amber-900/50 rounded-xl px-3 py-1.5 text-xs text-amber-200 focus:outline-none focus:border-amber-500 font-cinzel font-semibold cursor-pointer"
                >
                  {scripturesDb[selectedScripture].chapters.map((ch, idx) => (
                    <option key={idx} value={idx} className="bg-[#140804] text-amber-200">
                      {ch.chapterName.split(':')[0]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reading Board (Parchment scroll effect) */}
            <div className="w-full max-w-4xl relative overflow-hidden rounded-2xl bg-parchment border-double-amber p-6 sm:p-10 shadow-2xl scripture-scroller">
              
              <div className="text-center border-b border-amber-950/80 pb-6 mb-8 relative">
                <div className="absolute top-0 right-0 text-amber-500/5 font-cinzel font-bold text-4xl select-none uppercase">
                  {selectedScripture}
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500 font-bold font-cinzel bg-amber-950/50 border border-amber-900/30 px-3 py-0.5 rounded">
                  {currentScriptureData.name}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold font-cinzel text-amber-200 mt-2 tracking-wide">
                  {currentChapterData.chapterName}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/50 font-lora italic mt-1 bg-amber-950/20 py-1 max-w-xl mx-auto rounded border-l border-r border-amber-900/30">
                  {currentChapterData.chapterDesc}
                </p>
              </div>

              {/* Verses scroller */}
              <div className="space-y-12">
                {currentChapterData.verses.map((vs, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center border-b border-amber-950/30 pb-10 last:border-0 last:pb-0">
                    <span className="text-xs font-bold font-cinzel text-amber-500 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/20 mb-4">
                      {vs.number}
                    </span>

                    {/* Sanskrit Shloka Text */}
                    <div className="text-lg sm:text-2xl font-extrabold text-amber-300/90 font-lora mb-3 tracking-wide leading-loose whitespace-pre-line shloka-text">
                      {vs.sanskrit}
                    </div>

                    {/* Transliteration */}
                    <p className="text-xs sm:text-sm text-amber-200/40 italic font-mono max-w-2xl px-2 leading-relaxed mb-3">
                      {vs.translit}
                    </p>

                    {/* Translation */}
                    <p className="text-sm sm:text-base font-semibold text-amber-100 max-w-2xl leading-relaxed bg-[#120502]/45 px-4 py-3 rounded-lg border border-amber-950/40">
                      "{vs.translation}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Read full edition citation */}
              <div className="mt-12 pt-6 border-t border-amber-950/80 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
                <div>
                  <h4 className="text-xs font-bold font-cinzel text-amber-300">Looking for the full, unabridged scripture?</h4>
                  <p className="text-[11px] text-amber-200/50 mt-0.5">You can read complete translations and commentaries on official archives.</p>
                </div>
                <a
                  href={currentScriptureData.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-1.5 bg-amber-600/20 border border-amber-500/30 rounded-xl px-4 py-2 text-xs font-bold text-amber-300 hover:bg-amber-600/40 hover:text-white transition-all duration-300"
                >
                  <span>Open Full Text</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="w-full flex flex-col items-center space-y-8 max-w-xl mx-auto">
            <div className="text-center max-w-md">
              <h2 className="text-2xl sm:text-4xl font-bold font-cinzel tracking-wider text-amber-200 mb-2">Request a Video Saga</h2>
              <p className="text-xs sm:text-sm text-amber-200/50 font-light leading-relaxed">
                Do you have an ancient king, general, scripture segment, or mythological event in mind that we should cover? Fill out the proposal form below.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex items-center justify-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-100"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {isSubmitted ? (
              <div className="w-full relative overflow-hidden rounded-2xl bg-parchment border-double-amber p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center justify-center animate-fade-in">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                <div className="w-16 h-16 rounded-full bg-amber-950/50 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-6 shadow-inner animate-pulse">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-cinzel text-amber-200 mb-2">
                  Sabhā Proposal Received
                </h3>
                <p className="text-sm font-lora italic text-amber-300 mb-6">"कल्याणमस्तु | May righteousness and prosperity prevail."</p>
                <p className="text-xs sm:text-sm text-amber-200/60 leading-relaxed max-w-sm mb-6">
                  Thank you for suggesting this topic. We have added it to our scriptwriting review cards and will notify you if we produce it.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-cinzel font-bold text-xs hover:from-amber-500 hover:to-orange-500 transition-all shadow"
                >
                  Submit Another Topic
                </button>
              </div>
            ) : (
              <div className="w-full relative overflow-hidden rounded-2xl bg-[#1c0c07]/45 border border-amber-900/30 p-6 sm:p-8 shadow-xl">
                <form onSubmit={handleTopicRequest} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold font-cinzel text-amber-500 uppercase mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-amber-950/15 border border-amber-900/50 text-amber-100 placeholder:text-amber-500/25 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-cinzel text-amber-500 uppercase mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-amber-950/15 border border-amber-900/50 text-amber-100 placeholder:text-amber-500/25 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-cinzel text-amber-500 uppercase mb-2">Requested Video Topic</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Martyrdom of Tanaji Malusare..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-amber-950/15 border border-amber-900/50 text-amber-100 placeholder:text-amber-500/25 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-cinzel text-amber-500 uppercase mb-2">Lore Details & Reference Sources</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Briefly describe the story, king, or scripture segment. Add links to scriptures or history books if you have any..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-amber-950/15 border border-amber-900/50 text-amber-100 placeholder:text-amber-500/25 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-cinzel font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Proposal to Sabha</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Global Footer Citation */}
        <div className="mt-12 text-center text-[10px] sm:text-xs text-amber-500/30 font-cinzel uppercase tracking-widest pb-4 w-full border-t border-amber-950/10 pt-4">
          <span>© 2026 Vedic Lores • Dharmo Rakshati Rakshitah</span>
        </div>

      </div>

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060201] to-transparent pointer-events-none z-0" />
    </div>
  );
}
