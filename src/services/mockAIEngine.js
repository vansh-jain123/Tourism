// ============================================================
// Mock AI Engine — Full Travel Planner & Content Creator
// ============================================================
import { EXTRA_CITIES } from './extraCities';

const CITY_DATA = {
  paris: {
    name: "Paris",
    country: "France",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Eiffel Tower", desc: "The iconic iron lattice tower standing 330m tall, offering panoramic views of Paris from its observation decks.", fee: "€26.80", bestTime: "Early morning or sunset for golden-hour views", imagePrompt: "A cinematic wide-angle view of the Eiffel Tower at golden hour, warm orange sky, ultra realistic, 4K, travel photography style" },
      { name: "Louvre Museum", desc: "The world's largest art museum housing over 35,000 works including the Mona Lisa and Venus de Milo.", fee: "€22", bestTime: "Wednesday or Friday evenings (less crowded)", imagePrompt: "The glass pyramid of the Louvre Museum reflecting sunset, dramatic clouds, ultra realistic, 4K, architectural photography" },
      { name: "Sacré-Cœur Basilica", desc: "A stunning white-domed basilica atop Montmartre hill with breathtaking views of the city skyline.", fee: "Free (dome €7)", bestTime: "Early morning for fewer crowds", imagePrompt: "Sacré-Cœur Basilica from the Montmartre steps, blue sky, cherry blossoms, dreamy travel photography, 4K" },
      { name: "Notre-Dame Cathedral", desc: "A masterpiece of French Gothic architecture currently undergoing restoration after the 2019 fire.", fee: "Free", bestTime: "Morning light for best photos", imagePrompt: "Notre-Dame Cathedral exterior with Seine River in foreground, soft morning light, cinematic, 4K" },
      { name: "Champs-Élysées & Arc de Triomphe", desc: "The most famous avenue in the world leading to the monumental Arc de Triomphe.", fee: "Arc: €16", bestTime: "Evening for illuminated views", imagePrompt: "Champs-Élysées at night with car light trails leading to Arc de Triomphe, long exposure, cinematic, 4K" },
      { name: "Palace of Versailles", desc: "The opulent former royal residence with stunning gardens, Hall of Mirrors, and grand fountains.", fee: "€21", bestTime: "Tuesday–Saturday, early morning", imagePrompt: "Palace of Versailles Hall of Mirrors with golden sunlight streaming through windows, ultra detailed, 4K" },
      { name: "Musée d'Orsay", desc: "Housed in a former railway station, this museum showcases Impressionist and Post-Impressionist masterpieces.", fee: "€16", bestTime: "Thursday evenings for late opening", imagePrompt: "Interior of Musée d'Orsay with its giant clock window, travelers silhouetted, atmospheric, 4K" },
    ],
    hotels: [
      { name: "Hôtel Le Petit Paris", price: 120, location: "5th Arrondissement, Latin Quarter", features: ["Free WiFi", "Breakfast Included", "AC", "Boutique Design"], rating: 4.3 },
      { name: "Maison Mère", price: 180, location: "9th Arrondissement, near Opéra", features: ["Free WiFi", "Restaurant", "Bar", "AC", "Gym"], rating: 4.6 },
      { name: "Hôtel des Arts Montmartre", price: 95, location: "18th Arrondissement, Montmartre", features: ["Free WiFi", "AC", "City Views", "24h Reception"], rating: 4.1 },
      { name: "Le Pavillon de la Reine", price: 350, location: "3rd Arrondissement, Le Marais", features: ["Spa", "Garden", "Free WiFi", "AC", "Fine Dining"], rating: 4.8 },
      { name: "Ibis Paris Tour Eiffel", price: 110, location: "15th Arrondissement, near Eiffel Tower", features: ["Free WiFi", "AC", "Bar", "24h Reception"], rating: 3.9 },
      { name: "Hôtel Fabric", price: 160, location: "11th Arrondissement, Oberkampf", features: ["Free WiFi", "AC", "Industrial Chic Design", "Bar"], rating: 4.4 },
    ],
    food: {
      dishes: ["Croissants & Pain au Chocolat", "Coq au Vin", "Crêpes", "French Onion Soup", "Ratatouille", "Crème Brûlée"],
      restaurants: [
        { name: "Le Bouillon Chartier", specialty: "Classic French Brasserie", priceRange: "€10–€25", desc: "Historic 1896 brasserie serving affordable traditional French cuisine" },
        { name: "L'As du Fallafel", specialty: "Middle Eastern / Falafel", priceRange: "€7–€15", desc: "Legendary falafel spot in the Marais district" },
        { name: "Pink Mamma", specialty: "Italian-French Fusion", priceRange: "€15–€35", desc: "Instagram-famous multi-floor Italian restaurant" },
        { name: "Café de Flore", specialty: "French Café Classics", priceRange: "€12–€30", desc: "Iconic literary café in Saint-Germain-des-Prés" },
      ]
    },
    reelScript: {
      hook: "POV: You just landed in the most romantic city on Earth ✈️🇫🇷",
      voiceover: [
        "Start your morning with fresh croissants at a sidewalk café...",
        "Then head to the Eiffel Tower before the crowds arrive.",
        "Lose yourself in the Louvre — yes, the Mona Lisa is smaller than you think.",
        "Wander through Montmartre's cobblestone streets like a local.",
        "End the night with crème brûlée and a view of the Seine.",
        "Paris isn't just a city. It's a feeling."
      ],
      scenes: [
        "Close-up of croissant being torn apart, steam rising",
        "Slow-motion walking toward Eiffel Tower, morning light",
        "Quick cuts of art inside the Louvre, ending on Mona Lisa",
        "Handheld walking footage through narrow Montmartre streets",
        "Dessert close-up, then pull back to reveal river at night"
      ],
      textOverlays: ["Day 1 in Paris 🇫🇷", "The Mona Lisa IRL 🎨", "Hidden streets of Montmartre", "French food hits different 🥐", "Save this for your Paris trip ✈️"]
    },
    captions: [
      "Paris was a good idea. ✨🗼",
      "Falling in love with every corner of this city 🇫🇷❤️",
      "Croissants for breakfast, Eiffel Tower for dessert 🥐🗼"
    ],
    hashtags: ["#Paris", "#ParisTravel", "#EiffelTower", "#VisitParis", "#TravelFrance", "#Wanderlust", "#ParisianLife", "#TravelReels", "#ExploreEurope", "#FrenchVibes", "#Montmartre", "#TravelGram", "#InstaTravel", "#BucketList", "#GoldenHour"]
  },

  tokyo: {
    name: "Tokyo",
    country: "Japan",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    attractions: [
      { name: "Senso-ji Temple", desc: "Tokyo's oldest and most significant Buddhist temple, located in the vibrant Asakusa district.", fee: "Free", bestTime: "Early morning (6–7 AM) for empty shots", imagePrompt: "Senso-ji Temple gate (Kaminarimon) at sunrise, red lantern glowing, misty morning, ultra realistic, 4K" },
      { name: "Shibuya Crossing", desc: "The world's busiest pedestrian crossing — up to 3,000 people cross at once.", fee: "Free", bestTime: "Evening for neon-lit atmosphere", imagePrompt: "Aerial view of Shibuya Crossing at night, neon lights reflecting on wet streets, long exposure, 4K" },
      { name: "Meiji Shrine", desc: "A serene Shinto shrine nestled in a lush forest, dedicated to Emperor Meiji.", fee: "Free", bestTime: "Weekday mornings", imagePrompt: "Torii gate of Meiji Shrine with forest path, dappled sunlight, peaceful atmosphere, 4K" },
      { name: "Tokyo Skytree", desc: "At 634m, it's the tallest structure in Japan with observation decks offering 360° city views.", fee: "¥2,100–¥3,100", bestTime: "Sunset for day-to-night transition", imagePrompt: "Tokyo Skytree illuminated against twilight sky, city lights below, cinematic composition, 4K" },
      { name: "Tsukiji Outer Market", desc: "A bustling market offering the freshest sushi, street food, and Japanese culinary delights.", fee: "Free", bestTime: "Morning (7–10 AM)", imagePrompt: "Close-up of fresh sushi being prepared at Tsukiji Market, steam and vibrant colors, food photography, 4K" },
      { name: "Akihabara Electric Town", desc: "The epicenter of anime, manga, and electronics culture with multi-story arcades.", fee: "Free", bestTime: "Afternoon to evening", imagePrompt: "Neon-lit streets of Akihabara with anime billboards and crowds, cyberpunk aesthetic, 4K" },
      { name: "Imperial Palace Gardens", desc: "Beautiful gardens surrounding the Emperor's residence, offering a peaceful retreat.", fee: "Free", bestTime: "Spring (cherry blossom season)", imagePrompt: "Imperial Palace moat with cherry blossoms in full bloom, reflection in water, dreamy, 4K" },
    ],
    hotels: [
      { name: "UNPLAN Shinjuku", price: 45, location: "Shinjuku, central Tokyo", features: ["Free WiFi", "Co-working Space", "Lounge", "Shared Kitchen"], rating: 4.2 },
      { name: "Hotel Gracery Shinjuku", price: 130, location: "Kabukichō, Shinjuku", features: ["Free WiFi", "AC", "Restaurant", "Famous Godzilla Head"], rating: 4.4 },
      { name: "Mitsui Garden Hotel Ginza", price: 180, location: "Ginza district", features: ["Free WiFi", "Onsen Bath", "AC", "Restaurant", "Gym"], rating: 4.5 },
      { name: "The Prince Gallery Tokyo", price: 350, location: "Kioicho, near Akasaka", features: ["Luxury Spa", "Sky Lounge", "Fine Dining", "Free WiFi", "Skyline Views"], rating: 4.8 },
      { name: "Sakura Hotel Ikebukuro", price: 55, location: "Ikebukuro", features: ["Free WiFi", "24h Café", "Laundry", "Multilingual Staff"], rating: 3.8 },
      { name: "Mimaru Tokyo Ueno", price: 100, location: "Ueno, near park & museums", features: ["Free WiFi", "Kitchen Suite", "AC", "Family Rooms"], rating: 4.3 },
    ],
    food: {
      dishes: ["Ramen", "Sushi & Sashimi", "Tempura", "Takoyaki", "Matcha Desserts", "Wagyu Beef"],
      restaurants: [
        { name: "Ichiran Ramen", specialty: "Tonkotsu Ramen", priceRange: "¥900–¥1,500", desc: "Famous solo-booth ramen chain with customizable broth" },
        { name: "Sushi Dai (Toyosu)", specialty: "Omakase Sushi", priceRange: "¥4,000–¥6,000", desc: "Legendary sushi counter at Toyosu Fish Market" },
        { name: "Afuri", specialty: "Yuzu Shio Ramen", priceRange: "¥1,000–¥1,800", desc: "Trendy ramen spot known for citrus-infused broth" },
        { name: "Gonpachi Nishi-Azabu", specialty: "Yakitori & Soba", priceRange: "¥3,000–¥6,000", desc: "The restaurant that inspired the Kill Bill fight scene" },
      ]
    },
    reelScript: {
      hook: "Tokyo is NOT what you expected 🇯🇵🤯",
      voiceover: [
        "Morning starts at Senso-ji temple — pure magic at sunrise.",
        "Fresh sushi for breakfast? Only in Tokyo.",
        "Cross the world's busiest intersection — Shibuya Crossing.",
        "Get lost in Akihabara's neon-lit anime paradise.",
        "End with ramen so good it'll ruin every other bowl for you.",
        "Tokyo isn't a destination. It's a different dimension."
      ],
      scenes: [
        "Slow-motion incense smoke at Senso-ji, morning light",
        "Close-up of sushi chef's hands at Tsukiji Market",
        "Time-lapse of Shibuya Crossing from above",
        "Quick cuts of anime stores, arcades, maid cafés",
        "Steam rising from a bowl of ramen, chopsticks lifting noodles"
      ],
      textOverlays: ["5 AM at a Tokyo Temple 🛕", "Freshest sushi on Earth 🍣", "Shibuya madness 🚶‍♂️", "Anime heaven 🎮", "This ramen changed my life 🍜"]
    },
    captions: [
      "Lost in translation, found in Tokyo 🇯🇵✨",
      "From temples to tech — Tokyo does it all 🏯⚡",
      "A city where tradition meets the future 🗼🌸"
    ],
    hashtags: ["#Tokyo", "#Japan", "#TokyoTravel", "#VisitJapan", "#Shibuya", "#JapanTrip", "#Wanderlust", "#TravelAsia", "#TokyoFood", "#Ramen", "#SakuraSeason", "#TravelReels", "#InstaTravel", "#ExploreJapan", "#Anime"]
  },

  newyork: {
    name: "New York City",
    country: "USA",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Statue of Liberty", desc: "The iconic symbol of freedom standing on Liberty Island in New York Harbor.", fee: "$24 (ferry + pedestal)", bestTime: "Morning for fewer crowds", imagePrompt: "Statue of Liberty at golden hour with Manhattan skyline behind, dramatic sky, cinematic, 4K" },
      { name: "Central Park", desc: "An 843-acre urban oasis offering lakes, trails, and stunning architecture in the heart of Manhattan.", fee: "Free", bestTime: "Spring or fall for foliage", imagePrompt: "Central Park Bow Bridge in autumn, golden leaves reflecting in lake, ultra realistic, 4K" },
      { name: "Times Square", desc: "The dazzling crossroads of the world, lit by massive digital billboards and Broadway marquees.", fee: "Free", bestTime: "Evening for full neon experience", imagePrompt: "Times Square at night, rain-slicked streets reflecting neon signs, cinematic mood, 4K" },
      { name: "Empire State Building", desc: "The Art Deco masterpiece offering 360° views from the 86th-floor observation deck.", fee: "$44", bestTime: "Sunset for day-to-night transition", imagePrompt: "Empire State Building observation deck view at sunset, warm golden light, panoramic, 4K" },
      { name: "Brooklyn Bridge", desc: "A stunning suspension bridge connecting Manhattan and Brooklyn with a pedestrian walkway.", fee: "Free", bestTime: "Sunrise for golden light and empty walkway", imagePrompt: "Walking across Brooklyn Bridge at sunrise, Manhattan skyline in background, cinematic, 4K" },
      { name: "The Metropolitan Museum of Art", desc: "One of the world's greatest museums with over 2 million works spanning 5,000 years.", fee: "$30 (suggested donation)", bestTime: "Weekday mornings", imagePrompt: "The Met Museum grand hall interior, natural light streaming in, architectural photography, 4K" },
      { name: "Top of the Rock", desc: "Observation deck atop Rockefeller Center with unobstructed views of Central Park and the skyline.", fee: "$43", bestTime: "Sunset", imagePrompt: "View from Top of the Rock with Central Park stretching north, golden hour, panoramic, 4K" },
      { name: "9/11 Memorial & Museum", desc: "A moving tribute to the victims of the September 11 attacks, featuring reflecting pools.", fee: "Memorial: Free, Museum: $28", bestTime: "Late afternoon", imagePrompt: "9/11 Memorial reflecting pools at dusk, soft light, emotional atmosphere, respectful composition, 4K" },
    ],
    hotels: [
      { name: "Pod 51 Hotel", price: 100, location: "Midtown East, Manhattan", features: ["Free WiFi", "Rooftop Bar", "AC", "Modern Design"], rating: 4.0 },
      { name: "citizenM New York Times Square", price: 180, location: "Times Square", features: ["Free WiFi", "24h Food", "Smart Rooms", "Rooftop Bar"], rating: 4.5 },
      { name: "The Jane Hotel", price: 120, location: "West Village", features: ["Free WiFi", "Historic Charm", "Bar", "Views"], rating: 4.1 },
      { name: "1 Hotel Brooklyn Bridge", price: 350, location: "Brooklyn waterfront", features: ["Spa", "Pool", "Eco-Luxury", "Skyline Views", "Restaurant"], rating: 4.7 },
      { name: "MOXY NYC Times Square", price: 150, location: "Times Square", features: ["Free WiFi", "Bar", "Gym", "Vibrant Design"], rating: 4.3 },
      { name: "Arlo Midtown", price: 160, location: "Hell's Kitchen", features: ["Free WiFi", "Rooftop", "AC", "Restaurant", "Modern"], rating: 4.4 },
    ],
    food: {
      dishes: ["New York Pizza", "Bagels with Lox", "Cheesecake", "Pastrami Sandwich", "Hot Dogs", "Chopped Cheese"],
      restaurants: [
        { name: "Joe's Pizza", specialty: "Classic NY Slice", priceRange: "$3–$8", desc: "The quintessential New York pizza experience since 1975" },
        { name: "Katz's Delicatessen", specialty: "Pastrami & Corned Beef", priceRange: "$15–$30", desc: "Legendary deli serving hand-carved pastrami since 1888" },
        { name: "Los Tacos No. 1", specialty: "Mexican Street Tacos", priceRange: "$4–$12", desc: "Best tacos in NYC, located in Chelsea Market" },
        { name: "Peter Luger Steak House", specialty: "Dry-Aged Steak", priceRange: "$50–$120", desc: "Brooklyn's iconic steakhouse, Michelin-rated since 1887" },
      ]
    },
    reelScript: {
      hook: "72 hours in New York City — here's everything I did 🗽🍕",
      voiceover: [
        "Start with a sunrise walk across the Brooklyn Bridge.",
        "Grab a $1 pizza slice — yes, it's actually that good.",
        "Central Park in fall? Straight out of a movie.",
        "Watch the city light up from Top of the Rock.",
        "End the night in Times Square — it never sleeps.",
        "New York doesn't just live up to the hype. It IS the hype."
      ],
      scenes: [
        "Walking POV across Brooklyn Bridge, golden sunrise",
        "Close-up of New York pizza slice fold and bite",
        "Drone-style sweep over Central Park autumn leaves",
        "Time-lapse from Top of the Rock, day to night",
        "Spinning shot in Times Square surrounded by neon"
      ],
      textOverlays: ["Sunrise on the Bridge 🌅", "NYC Pizza > Everything 🍕", "Central Park vibes 🍂", "City that never sleeps 🌃", "Save this NYC guide 📌"]
    },
    captions: [
      "If I can make it here, I can make it anywhere 🗽✨",
      "New York stole my heart and my wallet — worth it 🫶🏙️",
      "Pizza, skylines, and zero sleep. That's New York, baby 🍕🌃"
    ],
    hashtags: ["#NYC", "#NewYorkCity", "#Manhattan", "#TimesSquare", "#VisitNYC", "#BrooklynBridge", "#TravelUSA", "#Wanderlust", "#CentralPark", "#NYCFood", "#TravelReels", "#Cityscape", "#InstaTravel", "#BucketList", "#NewYork"]
  },

  dubai: {
    name: "Dubai",
    country: "UAE",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    attractions: [
      { name: "Burj Khalifa", desc: "The world's tallest building at 828m, offering observation decks with jaw-dropping views.", fee: "AED 169–399", bestTime: "Sunset for golden hour views", imagePrompt: "Burj Khalifa at sunset, golden light reflecting on glass facade, dramatic sky, ultra realistic, 4K" },
      { name: "Dubai Mall & Fountain", desc: "The world's largest mall with 1,200+ stores and the mesmerizing Dubai Fountain show.", fee: "Free (fountain show)", bestTime: "Evening for fountain shows (every 30 min)", imagePrompt: "Dubai Fountain show at night with Burj Khalifa in background, water jets illuminated, cinematic, 4K" },
      { name: "Palm Jumeirah", desc: "The iconic man-made island shaped like a palm tree, home to luxury resorts and beaches.", fee: "Free (monorail AED 30)", bestTime: "Late afternoon for beach sunset", imagePrompt: "Aerial view of Palm Jumeirah island at golden hour, turquoise water, luxury villas, drone photography, 4K" },
      { name: "Dubai Marina", desc: "A stunning waterfront district with skyscrapers, restaurants, and a beautiful promenade.", fee: "Free", bestTime: "Evening for illuminated skyline", imagePrompt: "Dubai Marina at blue hour, illuminated skyscrapers reflected in water, long exposure, 4K" },
      { name: "Desert Safari", desc: "Thrilling dune bashing, camel rides, and a traditional Bedouin camp dinner under the stars.", fee: "AED 150–300", bestTime: "Late afternoon (4 PM pickup)", imagePrompt: "Dubai desert safari during golden hour, sand dunes, lone camel silhouette, warm tones, cinematic, 4K" },
      { name: "Museum of the Future", desc: "A stunning torus-shaped building showcasing future technologies and immersive experiences.", fee: "AED 149", bestTime: "Morning for fewer crowds", imagePrompt: "Museum of the Future exterior with Arabic calligraphy facade, dramatic lighting, futuristic architecture, 4K" },
    ],
    hotels: [
      { name: "Rove Downtown", price: 80, location: "Downtown Dubai, near Burj Khalifa", features: ["Free WiFi", "Pool", "AC", "24h Dining"], rating: 4.2 },
      { name: "Gevora Hotel", price: 120, location: "Sheikh Zayed Road", features: ["Free WiFi", "Pool", "Gym", "Restaurant", "Tallest Hotel in World"], rating: 4.3 },
      { name: "Atlantis The Palm", price: 400, location: "Palm Jumeirah", features: ["Waterpark", "Aquarium", "Beach", "Spa", "Fine Dining"], rating: 4.7 },
      { name: "JA Ocean View Hotel", price: 150, location: "JBR Beach", features: ["Free WiFi", "Beach Access", "Pool", "AC", "Restaurant"], rating: 4.4 },
      { name: "Premier Inn Dubai Al Jaddaf", price: 50, location: "Al Jaddaf (Culture Village)", features: ["Free WiFi", "AC", "Restaurant", "Pool"], rating: 4.0 },
      { name: "Address Downtown", price: 300, location: "Downtown Dubai", features: ["Spa", "Pool", "Fine Dining", "Fountain View", "Free WiFi"], rating: 4.8 },
    ],
    food: {
      dishes: ["Shawarma", "Al Machboos", "Luqaimat", "Kunafa", "Camel Burger", "Arabic Mezze"],
      restaurants: [
        { name: "Al Ustad Special Kabab", specialty: "Persian Kebabs", priceRange: "AED 30–70", desc: "A legendary local gem serving kebabs since 1978" },
        { name: "Ravi Restaurant", specialty: "Pakistani Cuisine", priceRange: "AED 15–40", desc: "Dubai's most famous budget restaurant" },
        { name: "At.mosphere (Burj Khalifa)", specialty: "Fine Dining", priceRange: "AED 400–800", desc: "The world's highest restaurant on the 122nd floor" },
        { name: "Operation Falafel", specialty: "Lebanese Street Food", priceRange: "AED 20–50", desc: "Modern take on classic Middle Eastern street food" },
      ]
    },
    reelScript: {
      hook: "Dubai is UNREAL — watch this 🤯🇦🇪",
      voiceover: [
        "Start 828 meters above the ground at Burj Khalifa.",
        "The Dubai Fountain? Better than any concert you've been to.",
        "Desert safari — dune bashing hits different at sunset.",
        "The Palm Jumeirah exists. That's it. That's the flex.",
        "End with shawarma that costs less than your coffee back home.",
        "Dubai isn't the future. The future is trying to be Dubai."
      ],
      scenes: [
        "POV stepping out onto Burj Khalifa observation deck",
        "Slow-motion Dubai Fountain jets against night sky",
        "Action cam inside SUV during dune bashing",
        "Drone sweep over Palm Jumeirah",
        "Close-up of shawarma being wrapped at street stall"
      ],
      textOverlays: ["828m above ground 🏙️", "Free fountain show 💧", "Desert vibes 🐪", "Man-made island 🌴", "Best shawarma ever 🌯"]
    },
    captions: [
      "Dubai: where reality looks like CGI 🏙️✨",
      "From desert sands to the tallest building on Earth 🐪🏗️",
      "Living the dream, 828 meters up 🌆🇦🇪"
    ],
    hashtags: ["#Dubai", "#VisitDubai", "#BurjKhalifa", "#DubaiLife", "#UAE", "#TravelDubai", "#PalmJumeirah", "#DesertSafari", "#LuxuryTravel", "#DubaiMall", "#Wanderlust", "#TravelReels", "#InstaTravel", "#MiddleEast", "#DubaiVibes"]
  },

  goa: {
    name: "Goa",
    country: "India",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    attractions: [
      { name: "Baga Beach", desc: "One of Goa's most popular beaches known for its vibrant nightlife, water sports, and shacks.", fee: "Free", bestTime: "November to February", imagePrompt: "Baga Beach at sunset, golden sand, colorful beach shacks, people silhouetted, warm tones, 4K" },
      { name: "Basilica of Bom Jesus", desc: "A UNESCO World Heritage Site housing the remains of St. Francis Xavier, built in 1605.", fee: "Free", bestTime: "Morning for peaceful visits", imagePrompt: "Basilica of Bom Jesus exterior, Portuguese colonial architecture, warm sunlight, heritage photography, 4K" },
      { name: "Dudhsagar Falls", desc: "A magnificent four-tiered waterfall cascading 310m, one of India's tallest waterfalls.", fee: "₹400 (jeep safari)", bestTime: "Monsoon season (June–September)", imagePrompt: "Dudhsagar Falls surrounded by lush green forest, mist rising, dramatic waterfall photography, 4K" },
      { name: "Fort Aguada", desc: "A well-preserved 17th-century Portuguese fort offering panoramic views of the Arabian Sea.", fee: "Free", bestTime: "Late afternoon for sunset", imagePrompt: "Fort Aguada lighthouse with Arabian Sea panorama, golden hour, cinematic wide-angle, 4K" },
      { name: "Anjuna Flea Market", desc: "A colorful Wednesday market offering handicrafts, jewelry, clothes, and local street food.", fee: "Free", bestTime: "Wednesdays, morning to afternoon", imagePrompt: "Colorful stalls at Anjuna Flea Market, bohemian vibes, vibrant textiles, street photography, 4K" },
      { name: "Palolem Beach", desc: "A crescent-shaped beach in South Goa known for serene waters and laid-back atmosphere.", fee: "Free", bestTime: "Early morning or sunset", imagePrompt: "Palolem Beach crescent shape from hilltop, turquoise water, coconut palms, tropical paradise, 4K" },
    ],
    hotels: [
      { name: "Zostel Goa (Calangute)", price: 10, location: "Calangute", features: ["Free WiFi", "Pool", "Common Lounge", "Events"], rating: 4.1 },
      { name: "La Gulls Court", price: 40, location: "Baga, North Goa", features: ["Free WiFi", "Pool", "AC", "Restaurant", "Near Beach"], rating: 4.0 },
      { name: "Acron Waterfront Resort", price: 70, location: "Baga River", features: ["Free WiFi", "Pool", "River View", "Restaurant", "Spa"], rating: 4.4 },
      { name: "W Goa", price: 200, location: "Vagator, North Goa", features: ["Infinity Pool", "Beach Access", "Spa", "Fine Dining", "DJ Nights"], rating: 4.7 },
      { name: "The Postcard Velha Goa", price: 250, location: "Candolim", features: ["Luxury Boutique", "Pool", "Fine Dining", "Heritage Design"], rating: 4.8 },
      { name: "Resort Rio", price: 55, location: "Arpora, North Goa", features: ["Free WiFi", "Water Park", "Pool", "AC", "Multi-Cuisine Restaurant"], rating: 4.2 },
    ],
    food: {
      dishes: ["Fish Curry Rice", "Prawn Balchão", "Bebinca", "Pork Vindaloo", "Xacuti", "Feni (Local Spirit)"],
      restaurants: [
        { name: "Fisherman's Wharf", specialty: "Goan Seafood", priceRange: "₹400–₹1,200", desc: "Iconic waterfront restaurant serving authentic Goan cuisine" },
        { name: "Britto's (Baga)", specialty: "Multi-Cuisine Beach Dining", priceRange: "₹300–₹800", desc: "Legendary beach shack on Baga Beach" },
        { name: "Gunpowder", specialty: "South Indian & Goan Fusion", priceRange: "₹350–₹900", desc: "Hidden gem in Assagao known for inventive cooking" },
        { name: "Thalassa", specialty: "Greek Cuisine with Sea View", priceRange: "₹500–₹1,500", desc: "Clifftop restaurant in Vagator with stunning sunset views" },
      ]
    },
    reelScript: {
      hook: "Goa on a budget? Here's exactly how 🏖️🇮🇳💰",
      voiceover: [
        "Wake up to the sound of waves at your beach shack.",
        "Rent a scooter for 300 rupees and explore the whole coast.",
        "Fresh fish curry rice — the real Goan experience.",
        "Sunset at Fort Aguada hits different.",
        "End the night at a beach party under the stars.",
        "Goa isn't just a trip. It's a vibe."
      ],
      scenes: [
        "Morning POV opening beach shack curtains to ocean view",
        "Riding scooter along coastal road, palm trees",
        "Close-up of fish curry being served on banana leaf",
        "Golden sunset time-lapse from Fort Aguada",
        "Bonfire on beach with fairy lights and music"
      ],
      textOverlays: ["Beach mornings 🌊", "₹300 scooter rental 🛵", "Goan food > Everything 🐟", "Sunset magic 🌅", "Save this Goa guide 📌"]
    },
    captions: [
      "Sun, sand, and seafood — Goa never disappoints 🏖️🐟",
      "Lost somewhere between the beach and the bar 🌴🍹",
      "Goa state of mind ☀️✌️"
    ],
    hashtags: ["#Goa", "#GoaVibes", "#GoaTravel", "#BeachLife", "#IndiaTravel", "#GoaBeach", "#Wanderlust", "#TravelIndia", "#GoaFood", "#Baga", "#TravelReels", "#InstaTravel", "#BeachVibes", "#SunsetLovers", "#GoaDiaries"]
  }
};

// Merge all city data
const ALL_CITIES = { ...CITY_DATA, ...EXTRA_CITIES };

// Match city input to our database
function matchCity(input) {
  const lower = input.toLowerCase().replace(/[^a-z]/g, '');
  // Indian cities
  if (lower.includes('nainital')) return ALL_CITIES.nainital;
  if (lower.includes('delhi') || lower.includes('newdelhi')) return ALL_CITIES.delhi;
  if (lower.includes('dehradun') || lower.includes('doon')) return ALL_CITIES.dehradun;
  if (lower.includes('jaipur') || lower.includes('pinkcity')) return ALL_CITIES.jaipur;
  if (lower.includes('manali')) return ALL_CITIES.manali;
  if (lower.includes('goa')) return ALL_CITIES.goa;
  if (lower.includes('bangalore') || lower.includes('bengaluru')) return ALL_CITIES.bangalore;
  if (lower.includes('lucknow')) return ALL_CITIES.lucknow;
  if (lower.includes('varanasi') || lower.includes('banaras') || lower.includes('kashi')) return ALL_CITIES.varanasi;
  if (lower.includes('ayodhya')) return ALL_CITIES.ayodhya;
  if (lower.includes('mumbai') || lower.includes('bombay')) return ALL_CITIES.mumbai;
  if (lower.includes('kolkata') || lower.includes('calcutta')) return ALL_CITIES.kolkata;
  if (lower.includes('chennai') || lower.includes('madras')) return ALL_CITIES.chennai;
  // World cities
  if (lower.includes('paris') || lower.includes('france')) return ALL_CITIES.paris;
  if (lower.includes('tokyo') || lower.includes('japan') || lower.includes('kyoto')) return ALL_CITIES.tokyo;
  if (lower.includes('newyork') || lower.includes('nyc') || lower.includes('manhattan')) return ALL_CITIES.newyork;
  if (lower.includes('dubai') || lower.includes('uae')) return ALL_CITIES.dubai;
  if (lower.includes('london') || lower.includes('uk') || lower.includes('england')) return ALL_CITIES.london;
  if (lower.includes('bali') || lower.includes('indonesia')) return ALL_CITIES.bali;
  if (lower.includes('bangkok') || lower.includes('thailand')) return ALL_CITIES.bangkok;
  // Default
  return ALL_CITIES.paris;
}

function generateBudgetBreakdown(budget, city, budgetStrategy = 'Moderate') {
  const numBudget = parseInt(budget.toString().replace(/[^0-9]/g, '')) || 1500;
  
  let pStay = 0.40, pFood = 0.25, pTravel = 0.20, pEntry = 0.10;

  if (budgetStrategy === 'Frugal') {
    pStay = 0.25; pFood = 0.25; pTravel = 0.35; pEntry = 0.10;
  } else if (budgetStrategy === 'Luxury') {
    pStay = 0.50; pFood = 0.30; pTravel = 0.10; pEntry = 0.05;
  }

  const stay = Math.round(numBudget * pStay);
  const food = Math.round(numBudget * pFood);
  const travel = Math.round(numBudget * pTravel);
  const entryFees = Math.round(numBudget * pEntry);
  const misc = numBudget - stay - food - travel - entryFees;

  return {
    total: numBudget,
    breakdown: [
      { category: "Accommodation", amount: stay, percent: 40, icon: "🏨" },
      { category: "Food & Dining", amount: food, percent: 25, icon: "🍽️" },
      { category: "Local Transport", amount: travel, percent: 20, icon: "🚕" },
      { category: "Entry Fees & Activities", amount: entryFees, percent: 10, icon: "🎟️" },
      { category: "Miscellaneous", amount: misc, percent: 5, icon: "🛍️" },
    ]
  };
}

function generateItinerary(cityData, customDays = 3) {
  const attractions = [...cityData.attractions];
  const restaurants = [...cityData.food.restaurants];
  const days = parseInt(customDays) || 3;
  const itinerary = [];
  let aIdx = 0;
  let rIdx = 0;

  for (let i = 1; i <= days; i++) {
    const dayPlan = [];
    let time = 9;

    dayPlan.push({ time: `${time}:00 AM`, type: 'food', title: 'Breakfast & Local Coffee', desc: `Start the day right with local flavors.`, duration: '1 hr stay' });
    time += 1; // 1 hour for breakfast

    if (aIdx < attractions.length) {
      dayPlan.push({ time: `${time}:00 AM`, type: 'attraction', title: attractions[aIdx].name, desc: attractions[aIdx].desc, duration: '1 hr stay' });
      aIdx++;
    }
    time += 2; // 1 hr stay + 1 hr commute buffer

    let lunchTime = time > 12 ? time - 12 : time;
    let ampm = time >= 12 ? 'PM' : 'AM';
    if (rIdx < restaurants.length) {
      dayPlan.push({ time: `${lunchTime}:00 ${ampm}`, type: 'food', title: `Lunch at ${restaurants[rIdx].name}`, desc: restaurants[rIdx].desc, duration: '1 hr stay' });
      rIdx++;
    } else {
      dayPlan.push({ time: `${lunchTime}:00 ${ampm}`, type: 'food', title: `Local Lunch Spot`, desc: `Try some local ${cityData.food.dishes[0] || 'specialties'}`, duration: '1 hr stay' });
    }
    time += 2;

    let afterTime = time > 12 ? time - 12 : time;
    if (aIdx < attractions.length) {
      dayPlan.push({ time: `${afterTime}:00 PM`, type: 'attraction', title: attractions[aIdx].name, desc: attractions[aIdx].desc, duration: '1 hr stay' });
      aIdx++;
    }
    time += 2;
    
    let dinnerTime = time > 12 ? time - 12 : time;
    if (rIdx < restaurants.length) {
      dayPlan.push({ time: `${dinnerTime}:00 PM`, type: 'food', title: `Dinner at ${restaurants[rIdx].name}`, desc: restaurants[rIdx].desc, duration: '1 hr stay' });
      rIdx++;
    }

    itinerary.push({ day: i, schedule: dayPlan });
  }
  return itinerary;
}

export const generateTravelPlan = async (cityName, budget, tripDays, travelMode, budgetStrategy) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const city = matchCity(cityName);
      const budgetData = generateBudgetBreakdown(budget, city, budgetStrategy);

      // Add image API integration using Pollinations (free, fast, AI-generated, no key required)
      const enhancedAttractions = city.attractions.map(a => ({
        ...a,
        image: `https://image.pollinations.ai/prompt/${encodeURIComponent(city.name + ' ' + a.name + ' landmark high quality scenic travel photography')}`
      }));

      const enhancedHotels = city.hotels.map(h => ({
        ...h,
        image: `https://image.pollinations.ai/prompt/${encodeURIComponent(city.name + ' ' + h.name + ' luxury hotel room interior')}`
      }));

      const enhancedRestaurants = city.food.restaurants.map(r => ({
        ...r,
        image: `https://image.pollinations.ai/prompt/${encodeURIComponent('delicious ' + r.specialty + ' food photography plating')}`
      }));

      // Generate Hidden Gems dynamically if not present
      const hiddenGems = city.hiddenGems || [
        { name: `Secret Alley in ${city.name}`, desc: `A beautiful lesser-known pathway filled with local artisans.`, fee: "Free", bestTime: "Late Afternoon", imagePrompt: `hidden secret alley in ${city.name}, local culture, rustic, 4K` },
        { name: `${city.name} Panoramic Viewpoint`, desc: `A hilltop spot that most tourists miss, perfect for sunsets.`, fee: "Free", bestTime: "Sunset", imagePrompt: `hidden panoramic viewpoint in ${city.name}, breathtaking sunset, 4K` },
        { name: `Old Town Cafe ${city.name}`, desc: `The oldest local cafe tucked away from the main streets.`, fee: "$", bestTime: "Morning", imagePrompt: `vintage local cafe in ${city.name}, authentic vibe, 4K` }
      ];

      const enhancedHiddenGems = hiddenGems.map(h => ({
        ...h,
        image: `https://image.pollinations.ai/prompt/${encodeURIComponent((h.imagePrompt || h.name) + ' realistic travel photography')}`
      }));

      const cityDataWithImages = {
        ...city,
        attractions: enhancedAttractions,
        hotels: enhancedHotels,
        hiddenGems: enhancedHiddenGems,
        food: { ...city.food, restaurants: enhancedRestaurants }
      };

      const itinerary = generateItinerary(cityDataWithImages, tripDays);

      resolve({
        city: cityDataWithImages.name,
        country: cityDataWithImages.country,
        heroImage: cityDataWithImages.heroImage,
        attractions: cityDataWithImages.attractions,
        hotels: cityDataWithImages.hotels,
        food: cityDataWithImages.food,
        budget: budgetData,
        hiddenGems: cityDataWithImages.hiddenGems,
        reelScript: cityDataWithImages.reelScript,
        captions: cityDataWithImages.captions,
        hashtags: cityDataWithImages.hashtags,
        itinerary: itinerary
      });
    }, 2000);
  });
};
