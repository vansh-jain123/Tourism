// Indian & additional World cities data
export const EXTRA_CITIES = {
  nainital: {
    name: "Nainital", country: "India",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Naini Lake", desc: "A stunning crescent-shaped natural lake surrounded by hills, perfect for boating.", fee: "₹50 (boat ride)", bestTime: "March–June, October", imagePrompt: "Naini Lake with colorful boats, misty hills reflecting in water, golden hour, 4K" },
      { name: "Naina Devi Temple", desc: "A sacred Hindu temple on the shores of Naini Lake with panoramic views.", fee: "Free", bestTime: "Early morning", imagePrompt: "Naina Devi Temple overlooking Naini Lake, morning mist, spiritual atmosphere, 4K" },
      { name: "Snow View Point", desc: "A hilltop viewpoint offering breathtaking views of the Himalayan snow-capped peaks.", fee: "₹300 (ropeway)", bestTime: "October–February for snow views", imagePrompt: "Snow View Point Nainital, panoramic Himalayan peaks, clear blue sky, cinematic, 4K" },
      { name: "Eco Cave Gardens", desc: "Interconnected caves shaped like animals, a fun adventure for families.", fee: "₹35", bestTime: "10 AM – 4 PM", imagePrompt: "Eco Cave Gardens Nainital entrance, lush green surroundings, adventure photography, 4K" },
      { name: "Tiffin Top", desc: "A scenic hilltop offering 360° views of the Kumaon hills and valleys.", fee: "Free", bestTime: "Morning for clear views", imagePrompt: "Tiffin Top Nainital, panoramic mountain vista, golden light, trekking photography, 4K" },
      { name: "Mall Road", desc: "The bustling main street lined with shops, restaurants, and cafes along the lake.", fee: "Free", bestTime: "Evening for vibrant atmosphere", imagePrompt: "Mall Road Nainital at evening, lights reflecting in lake, bustling crowd, street photography, 4K" },
    ],
    hotels: [
      { name: "The Naini Retreat", price: 80, location: "Mallital, lakeside", features: ["Lake View", "Heritage", "WiFi", "Restaurant"], rating: 4.5 },
      { name: "Zostel Nainital", price: 12, location: "Near Mall Road", features: ["WiFi", "Common Kitchen", "Mountain View"], rating: 4.2 },
      { name: "Manu Maharani", price: 60, location: "Grassmere Estate", features: ["WiFi", "Spa", "Restaurant", "Garden"], rating: 4.3 },
      { name: "The Earl's Court", price: 45, location: "Mallital", features: ["WiFi", "Lake View", "Fireplace", "Restaurant"], rating: 4.1 },
      { name: "Vikram Vintage Inn", price: 55, location: "Mallital", features: ["Heritage", "WiFi", "Garden", "Restaurant"], rating: 4.4 },
    ],
    food: {
      dishes: ["Bal Mithai", "Singodi", "Bhatt Ki Churkani", "Aloo ke Gutke", "Kafuli", "Momos"],
      restaurants: [
        { name: "Sakley's Restaurant", specialty: "Continental & Pastries", priceRange: "₹200–₹600", desc: "Iconic cafe serving cakes and continental food since decades" },
        { name: "Machan Restaurant", specialty: "North Indian & Chinese", priceRange: "₹150–₹400", desc: "Popular spot with lake views" },
        { name: "Sonam Chowmein Corner", specialty: "Street Momos & Chowmein", priceRange: "₹30–₹80", desc: "Best street momos in Nainital" },
      ]
    },
    reelScript: { hook: "Nainital in 60 seconds — pure magic 🏔️✨", voiceover: ["Wake up to misty mountains and a shimmering lake.", "Boat ride on Naini Lake — the water is like glass.", "Cable car to Snow View Point — Himalayas up close.", "End with hot momos and chai on Mall Road."], scenes: ["Misty morning lake time-lapse", "POV boating on calm lake", "Ropeway ascending with mountain backdrop", "Close-up of steaming momos"], textOverlays: ["Mountain mornings 🏔️", "Lake vibes 🚣", "Himalayan views 🏔️", "Momo therapy 🥟"] },
    captions: ["Mountains are calling and I must go 🏔️✨", "Lost in the mist of Nainital 🌫️❤️", "Lake, mountains, momos — repeat 🥟🏔️"],
    hashtags: ["#Nainital", "#Uttarakhand", "#NainiLake", "#HillStation", "#IndiaTravel", "#Mountains", "#Wanderlust", "#TravelIndia", "#Himalayas", "#TravelReels", "#InstaTravel", "#NainitalDiaries", "#ExploreIndia", "#WeekendGetaway", "#MountainVibes"]
  },

  delhi: {
    name: "Delhi", country: "India",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Red Fort", desc: "The iconic Mughal-era red sandstone fort and UNESCO World Heritage Site.", fee: "₹35 (Indians)", bestTime: "Morning for fewer crowds", imagePrompt: "Red Fort Delhi at golden hour, red sandstone walls glowing, cinematic, 4K" },
      { name: "India Gate", desc: "The 42m war memorial arch, beautifully illuminated at night.", fee: "Free", bestTime: "Evening for illumination", imagePrompt: "India Gate at twilight, warm lights, people gathering, patriotic atmosphere, 4K" },
      { name: "Qutub Minar", desc: "The tallest brick minaret in the world at 72.5m, built in 1193.", fee: "₹35", bestTime: "Morning", imagePrompt: "Qutub Minar from below looking up, intricate carvings, blue sky, architectural photography, 4K" },
      { name: "Humayun's Tomb", desc: "A stunning Mughal garden tomb that inspired the Taj Mahal.", fee: "₹35", bestTime: "Late afternoon for golden light", imagePrompt: "Humayun's Tomb with reflecting pool, symmetrical composition, golden hour, 4K" },
      { name: "Chandni Chowk", desc: "Old Delhi's legendary market street offering street food, spices, and textiles.", fee: "Free", bestTime: "Morning for shopping, evening for food", imagePrompt: "Bustling Chandni Chowk street, colorful shops, rickshaws, street photography, 4K" },
      { name: "Lotus Temple", desc: "The iconic Bahá'í House of Worship shaped like a lotus flower.", fee: "Free", bestTime: "Afternoon", imagePrompt: "Lotus Temple Delhi, white marble petals, blue sky, serene atmosphere, architectural, 4K" },
    ],
    hotels: [
      { name: "Zostel Delhi", price: 10, location: "Paharganj", features: ["WiFi", "Common Area", "Near Station"], rating: 4.0 },
      { name: "Hotel Ajanta", price: 35, location: "Arakashan Road", features: ["WiFi", "AC", "Restaurant", "24h Reception"], rating: 3.9 },
      { name: "The Claridges", price: 150, location: "Aurangzeb Road, Lutyens", features: ["Pool", "Spa", "Fine Dining", "Heritage"], rating: 4.6 },
      { name: "Bloomrooms @ Link Road", price: 40, location: "Near Metro", features: ["WiFi", "AC", "Modern Design", "Cafe"], rating: 4.2 },
      { name: "The Imperial", price: 250, location: "Janpath", features: ["Heritage Luxury", "Pool", "Spa", "Art Collection"], rating: 4.8 },
    ],
    food: {
      dishes: ["Chole Bhature", "Paranthas", "Butter Chicken", "Chaat", "Kebabs", "Kulfi"],
      restaurants: [
        { name: "Paranthe Wali Gali", specialty: "Stuffed Paranthas", priceRange: "₹50–₹150", desc: "Legendary lane in Old Delhi serving 50+ parantha varieties" },
        { name: "Karim's", specialty: "Mughlai Cuisine", priceRange: "₹200–₹600", desc: "Iconic restaurant near Jama Masjid since 1913" },
        { name: "Indian Accent", specialty: "Modern Indian Fine Dining", priceRange: "₹3,000–₹6,000", desc: "Asia's Best Restaurant award winner" },
        { name: "Natraj Dahi Bhalle Corner", specialty: "Chaat & Dahi Bhalle", priceRange: "₹40–₹100", desc: "Chandni Chowk's most famous chaat stall" },
      ]
    },
    reelScript: { hook: "Delhi is CHAOS and I'm here for it 🇮🇳🔥", voiceover: ["Start at Red Fort — Mughal history hits different.", "Chandni Chowk paranthas for breakfast will change you.", "India Gate at sunset — goosebumps guaranteed.", "End with butter chicken at Karim's."], scenes: ["Slow-mo walking through Red Fort arches", "Close-up of parantha being fried", "Time-lapse of India Gate at sunset", "Sizzling butter chicken being served"], textOverlays: ["Mughal vibes 🏰", "Delhi breakfast 🥘", "India Gate magic 🇮🇳", "Best food city 🍗"] },
    captions: ["Delhi — where every street has a story 🏙️🇮🇳", "Ate my way through Old Delhi and I'm not sorry 🍛❤️", "History, chaos, and the best food — that's Delhi 🔥"],
    hashtags: ["#Delhi", "#NewDelhi", "#DelhiFood", "#IncredibleIndia", "#RedFort", "#ChandniChowk", "#IndiaTravel", "#DelhiDiaries", "#StreetFood", "#Wanderlust", "#TravelReels", "#ExploreIndia", "#IndiaGate", "#OldDelhi", "#DelhiVibes"]
  },

  dehradun: {
    name: "Dehradun", country: "India",
    heroImage: "https://images.unsplash.com/photo-1564507592412-553d2ac8a8f8?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Robber's Cave", desc: "A natural cave formation with a river flowing through it — a unique trekking experience.", fee: "₹25", bestTime: "Morning", imagePrompt: "Robber's Cave Dehradun, river flowing through rock cave, adventure photography, 4K" },
      { name: "Sahastradhara", desc: "Thousand-fold springs cascading down limestone stalactites with therapeutic sulphur water.", fee: "₹20", bestTime: "Monsoon season", imagePrompt: "Sahastradhara waterfalls, turquoise sulphur water, lush green, nature photography, 4K" },
      { name: "Mindrolling Monastery", desc: "One of the largest Buddhist centres outside Tibet with a 60m Great Stupa.", fee: "Free", bestTime: "Morning for peaceful visit", imagePrompt: "Mindrolling Monastery Great Stupa, colorful Tibetan architecture, blue sky, 4K" },
      { name: "Rajaji National Park", desc: "A sprawling wildlife sanctuary home to elephants, tigers, and over 400 bird species.", fee: "₹150", bestTime: "November–June", imagePrompt: "Rajaji National Park, elephant in forest clearing, golden light, wildlife photography, 4K" },
      { name: "Forest Research Institute", desc: "A stunning colonial-era institute with Greco-Roman architecture and lush botanical gardens.", fee: "₹10", bestTime: "Morning", imagePrompt: "FRI Dehradun colonial building, grand columns, manicured gardens, architectural photography, 4K" },
    ],
    hotels: [
      { name: "Zostel Dehradun", price: 10, location: "Rajpur Road", features: ["WiFi", "Cafe", "Common Area"], rating: 4.1 },
      { name: "Hotel Padmini Palace", price: 30, location: "Rajpur Road", features: ["WiFi", "AC", "Restaurant", "Garden"], rating: 3.9 },
      { name: "Lemon Tree Premier", price: 70, location: "Mussoorie Diversion Road", features: ["Pool", "WiFi", "Gym", "Restaurant"], rating: 4.4 },
      { name: "JW Marriott Mussoorie Walnut Grove", price: 200, location: "Near Mussoorie", features: ["Luxury", "Spa", "Valley View", "Fine Dining"], rating: 4.7 },
    ],
    food: {
      dishes: ["Kafuli", "Phaanu", "Bal Mithai", "Jhangora Kheer", "Aloo ke Gutke", "Mandua Roti"],
      restaurants: [
        { name: "Orchard at the Mall", specialty: "Continental & Indian", priceRange: "₹300–₹800", desc: "Popular restaurant with mountain vibes" },
        { name: "Kumar's Momos", specialty: "Tibetan Momos", priceRange: "₹50–₹120", desc: "Famous momo spot near Rajpur Road" },
        { name: "Ellora's Melting Moments", specialty: "Bakery & Cakes", priceRange: "₹100–₹400", desc: "Legendary Dehradun bakery since 1956" },
      ]
    },
    reelScript: { hook: "Dehradun — the gateway to the Himalayas 🏔️", voiceover: ["Start with a walk through Robber's Cave.", "Sulphur springs at Sahastradhara — nature's spa.", "The Mindrolling Monastery will leave you speechless.", "End with momos and mountain views."], scenes: ["Walking through cave with river", "Water cascading down limestone", "Giant Buddha statue reveal", "Steaming momos with mountain backdrop"], textOverlays: ["Cave adventure 🕳️", "Natural spa 💧", "Buddhist peace 🙏", "Momo love 🥟"] },
    captions: ["Dehradun — where the mountains whisper 🏔️🌿", "Gateway to paradise starts here ✨🇮🇳", "Mountains, monasteries, and momos 🥟❤️"],
    hashtags: ["#Dehradun", "#Uttarakhand", "#Mountains", "#IndiaTravel", "#HillStation", "#Wanderlust", "#TravelReels", "#ExploreIndia", "#Himalayas", "#NorthIndia", "#WeekendTrip", "#NatureLovers", "#TravelIndia", "#DoonValley", "#MountainLife"]
  },

  jaipur: {
    name: "Jaipur", country: "India",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Amber Fort", desc: "A majestic hilltop fort with stunning blend of Hindu and Mughal architecture.", fee: "₹200", bestTime: "Morning for fewer crowds", imagePrompt: "Amber Fort Jaipur from Maota Lake, golden sandstone, dramatic sky, cinematic, 4K" },
      { name: "Hawa Mahal", desc: "The iconic five-story Palace of Winds with 953 honeycomb windows.", fee: "₹50", bestTime: "Early morning for best photos", imagePrompt: "Hawa Mahal pink facade, detailed honeycomb windows, street level view, architectural, 4K" },
      { name: "City Palace", desc: "A stunning royal palace complex blending Rajasthani and Mughal architecture.", fee: "₹500", bestTime: "10 AM – 4 PM", imagePrompt: "City Palace Jaipur courtyard, ornate doorways, peacock gate, vibrant colors, 4K" },
      { name: "Jantar Mantar", desc: "UNESCO-listed astronomical observation site with the world's largest stone sundial.", fee: "₹50", bestTime: "Afternoon", imagePrompt: "Jantar Mantar geometric instruments, dramatic shadows, architectural photography, 4K" },
      { name: "Nahargarh Fort", desc: "Hilltop fort offering panoramic sunset views over the entire Pink City.", fee: "₹50", bestTime: "Sunset", imagePrompt: "Sunset from Nahargarh Fort overlooking Jaipur city, pink and gold sky, panoramic, 4K" },
    ],
    hotels: [
      { name: "Zostel Jaipur", price: 8, location: "Near Hawa Mahal", features: ["WiFi", "Rooftop", "Common Area"], rating: 4.2 },
      { name: "Hotel Pearl Palace", price: 25, location: "Hathroi Fort", features: ["WiFi", "AC", "Rooftop Restaurant"], rating: 4.5 },
      { name: "Rambagh Palace", price: 400, location: "Bhawani Singh Road", features: ["Heritage Palace", "Pool", "Spa", "Luxury"], rating: 4.9 },
      { name: "Treebo Trend", price: 30, location: "MI Road", features: ["WiFi", "AC", "Budget", "Near Markets"], rating: 4.0 },
      { name: "Samode Haveli", price: 120, location: "Gangapole", features: ["Heritage", "Pool", "Garden", "Fine Dining"], rating: 4.6 },
    ],
    food: {
      dishes: ["Dal Baati Churma", "Laal Maas", "Ghevar", "Pyaaz Kachori", "Ker Sangri", "Lassi"],
      restaurants: [
        { name: "Laxmi Mishthan Bhandar (LMB)", specialty: "Rajasthani Thali", priceRange: "₹200–₹500", desc: "Legendary sweet shop and restaurant since 1727" },
        { name: "Bar Palladio", specialty: "Italian-Indian Fusion", priceRange: "₹800–₹2,000", desc: "Stunning blue palace setting for cocktails and Italian food" },
        { name: "Rawat Mishthan Bhandar", specialty: "Pyaaz Kachori", priceRange: "₹30–₹100", desc: "Best kachori in all of Rajasthan" },
      ]
    },
    reelScript: { hook: "The Pink City hits DIFFERENT 🩷🏰", voiceover: ["Amber Fort at sunrise — pure royalty.", "Hawa Mahal has 953 windows. I counted.", "Sunset from Nahargarh — the city turns golden.", "Dal Baati Churma for dinner. Elite taste."], scenes: ["Elephant walk at Amber Fort", "Selfie angle at Hawa Mahal", "Time-lapse sunset from hilltop", "Thali being served, steam rising"], textOverlays: ["Royal mornings 🏰", "953 windows 🪟", "Golden hour 🌇", "Rajasthani feast 🍛"] },
    captions: ["Living like royalty in the Pink City 🩷👑", "Jaipur — where every wall tells a story 🏰✨", "Fort views and royal foods 🌅🍛"],
    hashtags: ["#Jaipur", "#PinkCity", "#Rajasthan", "#IndiaTravel", "#AmberFort", "#HawaMahal", "#IncredibleIndia", "#TravelReels", "#ExploreIndia", "#Heritage", "#Wanderlust", "#RajasthanDiaries", "#InstaTravel", "#FortLife", "#DesertVibes"]
  },

  manali: {
    name: "Manali", country: "India",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Solang Valley", desc: "Adventure paradise with paragliding, skiing, and zorbing amid stunning mountain scenery.", fee: "₹500+ (activities)", bestTime: "December–February for snow", imagePrompt: "Solang Valley snow-covered, paragliders in sky, mountain backdrop, adventure photography, 4K" },
      { name: "Rohtang Pass", desc: "A high-altitude pass at 3,978m with mesmerizing snow-capped views.", fee: "₹550 (permit)", bestTime: "May–October (closed in winter)", imagePrompt: "Rohtang Pass panoramic view, snow peaks, winding road, dramatic clouds, 4K" },
      { name: "Hadimba Temple", desc: "An ancient cave temple surrounded by deodar forest, dedicated to Goddess Hadimba.", fee: "Free", bestTime: "Morning", imagePrompt: "Hadimba Temple in deodar forest, wooden pagoda style, misty morning, spiritual, 4K" },
      { name: "Old Manali", desc: "A charming village with cozy cafes, hippie vibes, and the Manu Temple.", fee: "Free", bestTime: "Evening for cafes", imagePrompt: "Old Manali cobblestone street, colorful cafes, mountains behind, bohemian vibes, 4K" },
      { name: "Jogini Waterfall", desc: "A beautiful waterfall accessible via a moderate 3km trek through apple orchards.", fee: "Free", bestTime: "Post-monsoon", imagePrompt: "Jogini Waterfall cascading down rocks, lush green forest, misty atmosphere, 4K" },
    ],
    hotels: [
      { name: "Zostel Manali", price: 8, location: "Old Manali", features: ["WiFi", "Cafe", "Mountain View"], rating: 4.3 },
      { name: "Hotel Beas", price: 25, location: "Mall Road", features: ["WiFi", "AC", "River View", "Restaurant"], rating: 4.0 },
      { name: "The Himalayan", price: 100, location: "Log Huts Area", features: ["Spa", "Pool", "Fine Dining", "Mountain View"], rating: 4.5 },
      { name: "Solang Valley Resort", price: 60, location: "Near Solang", features: ["WiFi", "Restaurant", "Adventure Desk", "Bonfire"], rating: 4.2 },
    ],
    food: {
      dishes: ["Siddu", "Thukpa", "Momos", "Trout Fish", "Babru", "Madra"],
      restaurants: [
        { name: "Lazy Dog Lounge", specialty: "Cafe & Continental", priceRange: "₹200–₹500", desc: "Cozy Old Manali cafe with mountain views" },
        { name: "Johnson's Cafe", specialty: "European & Indian", priceRange: "₹300–₹800", desc: "Heritage cafe with garden seating" },
        { name: "Drifter's Cafe", specialty: "Cafe & Backpacker Food", priceRange: "₹100–₹300", desc: "Iconic backpacker hangout" },
      ]
    },
    reelScript: { hook: "Manali will make you forget about life 🏔️☕", voiceover: ["Solang Valley — paragliding over snow.", "Old Manali cafes hit different.", "Hadimba Temple in the forest — magical.", "End with thukpa and a bonfire under the stars."], scenes: ["POV paragliding over valley", "Cafe latte art with mountain window view", "Walking through ancient temple forest", "Bonfire crackling, stars above"], textOverlays: ["Flying high 🪂", "Cafe life ☕", "Forest temple 🌲", "Starry nights ⭐"] },
    captions: ["Lost somewhere in the mountains of Manali 🏔️✨", "Cafe hopping in Old Manali is a lifestyle ☕🌿", "Snow, cafes, and zero worries 🏔️❤️"],
    hashtags: ["#Manali", "#HimachalPradesh", "#Mountains", "#OldManali", "#SolangValley", "#IndiaTravel", "#Wanderlust", "#TravelReels", "#ExploreIndia", "#HillStation", "#Adventure", "#Himalayas", "#CafeVibes", "#SnowLife", "#ManaliDiaries"]
  },

  london: {
    name: "London", country: "United Kingdom",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Big Ben & Houses of Parliament", desc: "The iconic clock tower and seat of British government on the Thames.", fee: "Free (exterior)", bestTime: "Evening for illumination", imagePrompt: "Big Ben at twilight, Thames River, golden lights reflecting, cinematic, 4K" },
      { name: "Tower of London", desc: "A 1000-year-old castle housing the Crown Jewels and rich royal history.", fee: "£33.60", bestTime: "Weekday mornings", imagePrompt: "Tower of London with Tower Bridge behind, dramatic sky, heritage photography, 4K" },
      { name: "British Museum", desc: "One of the world's greatest museums with 8 million works spanning human history.", fee: "Free", bestTime: "Weekday mornings", imagePrompt: "British Museum Great Court, glass ceiling, architectural interior, 4K" },
      { name: "Buckingham Palace", desc: "The official royal residence with the famous Changing of the Guard ceremony.", fee: "£30 (state rooms)", bestTime: "11 AM for Guard ceremony", imagePrompt: "Buckingham Palace golden gate, guards in red, sunny day, 4K" },
      { name: "London Eye", desc: "A 135m observation wheel offering stunning 360° views of the London skyline.", fee: "£32", bestTime: "Sunset", imagePrompt: "London Eye at sunset with Thames and Big Ben in background, golden light, 4K" },
      { name: "Borough Market", desc: "London's oldest and most renowned food market with global cuisine stalls.", fee: "Free", bestTime: "Saturday morning", imagePrompt: "Borough Market busy stalls, artisan food, vibrant colors, street photography, 4K" },
    ],
    hotels: [
      { name: "Generator London", price: 30, location: "King's Cross", features: ["WiFi", "Bar", "Lounge", "Events"], rating: 4.0 },
      { name: "citizenM Tower of London", price: 150, location: "Near Tower Bridge", features: ["WiFi", "Rooftop", "Smart Rooms", "24h Bar"], rating: 4.5 },
      { name: "The Savoy", price: 500, location: "The Strand", features: ["Luxury", "River View", "Spa", "Fine Dining", "Historic"], rating: 4.9 },
      { name: "Premier Inn London City", price: 80, location: "City Centre", features: ["WiFi", "AC", "Restaurant", "Budget"], rating: 4.1 },
      { name: "Z Hotel Soho", price: 100, location: "Soho", features: ["WiFi", "Cafe", "Central Location", "Compact Luxury"], rating: 4.3 },
    ],
    food: {
      dishes: ["Fish and Chips", "Full English Breakfast", "Sunday Roast", "Pie and Mash", "Afternoon Tea", "Chicken Tikka Masala"],
      restaurants: [
        { name: "Dishoom", specialty: "Bombay-style Indian", priceRange: "£10–£25", desc: "London's most beloved Indian restaurant" },
        { name: "Poppies Fish & Chips", specialty: "Traditional Fish & Chips", priceRange: "£12–£20", desc: "Award-winning classic chippie in Spitalfields" },
        { name: "Borough Market Stalls", specialty: "Global Street Food", priceRange: "£5–£15", desc: "London's foodie paradise with endless options" },
        { name: "Sketch", specialty: "Afternoon Tea & Fine Dining", priceRange: "£40–£100", desc: "Instagram-famous pink gallery with exquisite tea service" },
      ]
    },
    reelScript: { hook: "London is NOT just Big Ben 🇬🇧🤯", voiceover: ["Start with sunrise at Tower Bridge.", "Borough Market — the ultimate food tour.", "The British Museum — and it's FREE.", "Sunset on the London Eye — city at your feet."], scenes: ["Tower Bridge opening at dawn", "Food close-ups at Borough Market", "Walking through Egyptian exhibit", "London Eye pod with sunset cityscape"], textOverlays: ["London calling 🇬🇧", "Foodie paradise 🍔", "Free museum 🏛️", "Skyline views 🌇"] },
    captions: ["Cheerio from London 🇬🇧☕", "Big city, bigger dreams ✨🏙️", "London stole a pizza my heart 🍕🇬🇧"],
    hashtags: ["#London", "#VisitLondon", "#BigBen", "#TravelUK", "#LondonLife", "#BritishVibes", "#Wanderlust", "#TravelReels", "#Europe", "#InstaTravel", "#TowerBridge", "#BoroughMarket", "#LondonEye", "#ExploreMore", "#UKTravel"]
  },

  bali: {
    name: "Bali", country: "Indonesia",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Tanah Lot Temple", desc: "An ancient sea temple perched on a rocky outcrop, one of Bali's most iconic sights.", fee: "IDR 60,000", bestTime: "Sunset", imagePrompt: "Tanah Lot Temple silhouette at sunset, waves crashing, dramatic orange sky, 4K" },
      { name: "Tegallalang Rice Terraces", desc: "Stunning cascading rice paddies carved into the hillside using traditional Subak system.", fee: "IDR 15,000", bestTime: "Morning for soft light", imagePrompt: "Tegallalang rice terraces, lush green steps, morning mist, palm trees, 4K" },
      { name: "Uluwatu Temple", desc: "A cliffside temple 70m above the sea, famous for its Kecak fire dance at sunset.", fee: "IDR 50,000", bestTime: "5 PM for Kecak dance", imagePrompt: "Uluwatu Temple cliff edge, ocean below, sunset light, dramatic composition, 4K" },
      { name: "Sacred Monkey Forest", desc: "A lush forest sanctuary home to 700+ Balinese long-tailed macaques.", fee: "IDR 80,000", bestTime: "Morning", imagePrompt: "Monkey Forest Ubud, ancient stone temples covered in moss, monkeys, mystical, 4K" },
      { name: "Mount Batur Sunrise Trek", desc: "A pre-dawn 2-hour trek to the active volcano summit for a spectacular sunrise.", fee: "IDR 400,000 (guided)", bestTime: "Start at 3:30 AM", imagePrompt: "Mount Batur sunrise, clouds below summit, golden light, volcanic landscape, 4K" },
    ],
    hotels: [
      { name: "Capsule Hotel Bali", price: 15, location: "Kuta", features: ["WiFi", "Pool", "AC", "Modern"], rating: 4.0 },
      { name: "Alila Seminyak", price: 150, location: "Seminyak Beach", features: ["Beach", "Pool", "Spa", "Restaurant"], rating: 4.6 },
      { name: "The Kayon Jungle Resort", price: 100, location: "Ubud", features: ["Infinity Pool", "Jungle View", "Spa", "Yoga"], rating: 4.7 },
      { name: "COMO Uma Ubud", price: 250, location: "Ubud", features: ["Luxury", "Pool", "Spa", "Wellness"], rating: 4.8 },
      { name: "Kosta Hostel Seminyak", price: 12, location: "Seminyak", features: ["WiFi", "Pool", "Social Events", "Bar"], rating: 4.2 },
    ],
    food: {
      dishes: ["Nasi Goreng", "Babi Guling", "Sate Lilit", "Lawar", "Bebek Betutu", "Pisang Goreng"],
      restaurants: [
        { name: "Warung Babi Guling Ibu Oka", specialty: "Suckling Pig", priceRange: "IDR 50,000–100,000", desc: "Anthony Bourdain's favorite Bali restaurant" },
        { name: "Locavore", specialty: "Modern Indonesian Fine Dining", priceRange: "IDR 800,000–1,500,000", desc: "Asia's 50 Best Restaurants awardee" },
        { name: "Naughty Nuri's Warung", specialty: "BBQ Ribs & Martinis", priceRange: "IDR 80,000–200,000", desc: "Legendary Ubud BBQ spot" },
      ]
    },
    reelScript: { hook: "Bali is a real-life movie set 🌴🎬", voiceover: ["3 AM hike up Mount Batur — sunrise above the clouds.", "Rice terraces that look like a painting.", "Kecak fire dance at Uluwatu — chills.", "Finish with Nasi Goreng at a local warung for $2."], scenes: ["Sunrise reveal at volcano summit", "Walking through rice terraces, drone sweep", "Fire dancers in silhouette at sunset", "Nasi Goreng close-up at beach warung"], textOverlays: ["3 AM wake-up 🌋", "Painted terraces 🌾", "Fire dance 🔥", "$2 feast 🍛"] },
    captions: ["Bali is not a place, it's a feeling 🌴✨", "Rice terraces, temples, and sunsets — living the dream 🌅", "Lost in Bali and never coming back 🏝️❤️"],
    hashtags: ["#Bali", "#BaliLife", "#Ubud", "#Indonesia", "#TravelBali", "#Wanderlust", "#IslandLife", "#TravelReels", "#ExploreAsia", "#BaliVibes", "#RiceTerraces", "#SunsetLovers", "#BeachLife", "#InstaTravel", "#BaliTrip"]
  },

  bangkok: {
    name: "Bangkok", country: "Thailand",
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Grand Palace", desc: "A dazzling complex of temples and palaces, home to the Emerald Buddha.", fee: "฿500", bestTime: "8:30 AM opening for fewer crowds", imagePrompt: "Grand Palace Bangkok, golden spires, intricate details, blue sky, 4K" },
      { name: "Wat Arun", desc: "The Temple of Dawn with its iconic porcelain-encrusted spire on the Chao Phraya.", fee: "฿100", bestTime: "Sunset for golden glow", imagePrompt: "Wat Arun at sunset from across the river, golden spire glowing, cinematic, 4K" },
      { name: "Chatuchak Weekend Market", desc: "One of the world's largest markets with 15,000+ stalls selling everything.", fee: "Free", bestTime: "Saturday morning", imagePrompt: "Chatuchak Market colorful stalls, bustling crowds, vibrant goods, street photography, 4K" },
      { name: "Khao San Road", desc: "The legendary backpacker street with street food, bars, and electric nightlife.", fee: "Free", bestTime: "Evening", imagePrompt: "Khao San Road at night, neon signs, street food stalls, lively atmosphere, 4K" },
      { name: "Chinatown (Yaowarat)", desc: "A vibrant street food paradise and cultural hub with gold shops and temples.", fee: "Free", bestTime: "Evening for street food", imagePrompt: "Bangkok Chinatown neon-lit street, street food vendors, red lanterns, 4K" },
    ],
    hotels: [
      { name: "NapPark Hostel", price: 12, location: "Khao San Road", features: ["WiFi", "Lounge", "Social"], rating: 4.3 },
      { name: "Ibis Bangkok Riverside", price: 40, location: "Riverside", features: ["WiFi", "Pool", "River View", "Shuttle Boat"], rating: 4.1 },
      { name: "Mandarin Oriental", price: 400, location: "Riverside", features: ["Luxury", "Spa", "Pool", "Fine Dining", "Heritage"], rating: 4.9 },
      { name: "COMO Metropolitan", price: 150, location: "Sathorn", features: ["Pool", "Spa", "Gym", "Restaurant"], rating: 4.6 },
    ],
    food: {
      dishes: ["Pad Thai", "Som Tum", "Mango Sticky Rice", "Tom Yum Goong", "Green Curry", "Boat Noodles"],
      restaurants: [
        { name: "Jay Fai", specialty: "Michelin-star Street Food", priceRange: "฿600–฿1,500", desc: "The only Michelin-starred street food stall in the world" },
        { name: "Thip Samai", specialty: "Pad Thai", priceRange: "฿60–฿200", desc: "Bangkok's most famous Pad Thai since 1966" },
        { name: "Raan Jay Fai", specialty: "Crab Omelette", priceRange: "฿1,000–฿2,000", desc: "Legendary goggle-wearing chef's signature dish" },
      ]
    },
    reelScript: { hook: "Bangkok is UNREAL for the price 🇹🇭🤯", voiceover: ["Grand Palace — pure gold everywhere.", "Street Pad Thai for $1. One dollar.", "Floating markets and temple hopping.", "Rooftop cocktails overlooking the city for $5."], scenes: ["Walking into Grand Palace, golden reveal", "Pad Thai being tossed in wok, close-up", "Long-tail boat on canal, temples passing", "Rooftop bar with city skyline"], textOverlays: ["Golden temples 🛕", "$1 Pad Thai 🍜", "Canal vibes 🚣", "Rooftop views 🍸"] },
    captions: ["Bangkok — where $10 feels like $1000 💰🇹🇭", "Temple hopping and Pad Thai dropping 🍜🛕", "The city of angels never disappoints ✨🇹🇭"],
    hashtags: ["#Bangkok", "#Thailand", "#ThaiFood", "#PadThai", "#GrandPalace", "#TravelThailand", "#Wanderlust", "#StreetFood", "#TravelReels", "#ExploreAsia", "#BangkokLife", "#InstaTravel", "#WatArun", "#ThaiVibes", "#BudgetTravel"]
  },
};
