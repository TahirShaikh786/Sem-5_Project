import Scotland from "../assets/tour/Scotland.png";
import Singapore from "../assets/popular/Discover Singapore.png";
import Bora from "../assets/tour/bora.png";
import Jaipur from "../assets/tour/Jaipur.png";
import London from "../assets/tour/London.png";
import Africa from "../assets/tour/Africa.png";
import Hawaii from "../assets/tour/Hawaii.png";
import Dubai from "../assets/tour/dubaitour.jpg";

const tours = [
  {
    id: 0,
    tilte: "Discover Singapore",
    image: Singapore,
    location: "European Way, United Kingdom",
    category: ["Escorted Tour", "Rail Tour"],
    days: "5 days - 4 nights",
    descr:
      "Singapore, a vibrant city-state in Southeast Asia, is renowned for its multicultural heritage, stunning skyline, and green spaces. A tour of Singapore offers a blend of modernity and tradition, with attractions like the iconic Marina Bay Sands, Gardens by the Bay, and the historic neighborhoods of Chinatown and Little India. Visitors can enjoy a variety of cuisines, shop in bustling markets and luxury malls, and explore the city's rich history and cultural diversity. The city's efficient public transport system makes it easy to navigate, ensuring a seamless travel experience.",
    price: 9999,
    afterDiscount: 7999,
    rating: 3,
    reviews: 5,
  },
  {
    id: 1,
    tilte: "Discover Dubai",
    image: Dubai,
    location: "The beauty of Dubai Marina, Dubai",
    category: ["River Cruise", "Tour & Cruise"],
    days: "2 days - 1 nights",
    descr:
      "Dubai, a bustling metropolis in the United Arab Emirates, is renowned for its blend of modernity and traditional culture. The city is a marvel of architectural innovation, boasting iconic structures such as the Burj Khalifa, the world's tallest building, and the distinctive sail-shaped Burj Al Arab hotel. These landmarks not only define the city's skyline but also symbolize its status as a global hub of luxury and innovation.\n Dubai is a city that constantly reinvents itself, blending the old with the new to create a vibrant and dynamic urban landscape that caters to a global audience.",
    price: 20000,
    afterDiscount: 18999,
    rating: 4,
    reviews: 9,
  },
  {
    id: 2,
    tilte: "Discover Bora",
    image: Bora,
    location: "Bora Bora, French Polynesia",
    category: ["Escorted Tour", "River Cruise"],
    days: "2 days - 1 nights",
    descr:
      " Bora, located in the South Pacific Ocean, is part of French Polynesia and is renowned for its stunning natural beauty and luxurious resorts. The island is characterized by its crystal-clear lagoons, lush greenery, and the iconic overwater bungalows that offer unparalleled views of the ocean and the surrounding coral reefs.\n The island's geography features a volcanic peak, Mount Otemanu, which is a popular vantage point for panoramic views of the island and its lagoon. Bora Bora's main village, Vaitape, offers a glimpse into the local culture and lifestyle, with opportunities to explore local markets and enjoy the vibrant marine life through activities like snorkeling and scuba diving.",
    price: 15999,
    afterDiscount: 14999,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    tilte: "ScotLand",
    image: Scotland,
    location: "Carlton hill in Edinburgh, Scotland",
    descr:
      " Scotland is renowned for its rich cultural heritage, stunning landscapes, and vibrant cities. The country offers a plethora of attractions ranging from historic castles and whisky distilleries to wildlife farms and museums, making it a perfect destination for a day out or a longer break. Scotland's nightlife and food scene are also thriving, particularly in cities like Edinburgh, which boasts a diverse and lively nightlife scene. Additionally, Scotland's natural beauty, including its highlands and islands, provides numerous opportunities for outdoor activities such as hiking, fishing, and kayaking. Whether you're interested in history, culture, or outdoor adventures, Scotland has something to offer for every visitor.",
    category: ["River Cruise", "Rail Tour"],
    days: "3days - 2nights",
    price: 25000,
    afterDiscount: 22000,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    tilte: "India",
    image: Jaipur,
    location: "Jal Mahal Palace, Jaipur",
    descr:
      " India is a country of immense cultural richness and diversity, offering a plethora of experiences for travelers. From its ancient historical sites like the Taj Mahal and the Red Fort in Delhi, to its vibrant cultural festivals such as Holi and Diwali, India is a land of contrasts and deep-rooted traditions. The country's cuisine, which varies significantly from region to region, is a highlight, with dishes like biryani, dal makhani, and paneer butter masala being popular favorites.\n The natural landscapes of India are equally captivating, ranging from the serene beaches of Goa to the rugged terrain of the Himalayas. Wildlife enthusiasts can explore national parks like Periyar, which is home to a variety of flora and fauna, including elephants and tigers.",
    category: ["River Cruise", "Tour & Cruise"],
    days: "2 days - 1 nights",
    price: 10000,
    afterDiscount: 8000,
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    tilte: "London",
    image: London,
    location: "London's Westminster Bridge",
    descr:
      " London, the capital and largest city of the United Kingdom, is a global metropolis that has been a major settlement for nearly 2,000 years. It is located on the River Thames in southeast England, at the head of a 50-mile (80 km) estuary down to the North Sea. The city is known for its rich history, cultural diversity, and significant influence in finance, politics, and the arts.\nLondon is divided into several districts, each with its own character and attractions. Central London, for example, includes iconic landmarks such as the British Museum, the Tower of London, and the National Gallery. The City of London, historically the financial heart of the city, is now a mix of modern skyscrapers and historic buildings. Other notable areas include Covent Garden, known for its shopping and entertainment, and Notting Hill, famous for its vibrant carnival and diverse population.",
    category: ["Escorted Tour", "Tour & Cruise"],
    days: "5 days - 4 nights",
    price: 20000,
    afterDiscount: 18999,
    rating: 3,
    reviews: 12,
  },
  {
    id: 6,
    tilte: "South Africa",
    image: Africa,
    location: "Kruger National Park, South Africa",
    descr:
      " South Africa, officially known as the Republic of South Africa, is a country located at the southern tip of Africa. It is bordered by Namibia to the northwest, Botswana and Zimbabwe to the north, Mozambique and Eswatini to the northeast and east, and Lesotho, which is completely surrounded by South African territory. South Africa's coastline stretches along the South Atlantic and Indian Oceans, covering a total of 2,798 kilometers.\nThe country is divided into nine provinces and is known for its rich cultural diversity, with official languages reflecting its multicultural heritage. South Africa's capital cities include Pretoria as the administrative capital, Cape Town as the legislative capital, and Bloemfontein as the judicial capital1.",
    category: ["Escorted Tour", "Wildlife"],
    days: "1 day - 1 night",
    price: 15000,
    afterDiscount: 12000,
    rating: 5,
    reviews: 18,
  },
  {
    id: 7,
    tilte: "Hawaii",
    image: Hawaii,
    location: "Honolulu's Magic Island, Waikiki Beach",
    descr:
      " Hawaii, officially known as the State of Hawaii, is a group of islands in the central Pacific Ocean. It is the only U.S. state located outside North America, and it comprises eight main islands: Hawaii (the Big Island), Maui, Oahu, Kauai, Molokai, Lanai, Niihau, and Kahoolawe. The state capital is Honolulu, located on the island of Oahu.\nHawaii is known for its diverse natural landscapes, including volcanic mountains, lush rainforests, and beautiful beaches. The islands are home to a variety of ecosystems, supporting a rich biodiversity of flora and fauna. The Hawaiian Islands are also renowned for their active volcanoes, with the Hawaii Volcanoes National Park on the Big Island offering visitors a glimpse into the volcanic activity that formed the islands.\nThe culture of Hawaii is a unique blend of indigenous Hawaiian traditions and influences from various other cultures, including American, Asian, and European. The Hawaiian language, music, dance (hula), and arts are integral parts of the local culture. The state celebrates its heritage with events like the Merrie Monarch Festival, which showcases traditional Hawaiian music and hula performances.",
    category: ["River Cruise", "Tour & Cruise"],
    days: "1 day - 1 night",
    price: 20000,
    afterDiscount: 16999,
    rating: 4,
    reviews: 22,
  },
];

export default tours;
