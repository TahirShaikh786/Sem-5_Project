require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js");
const blogRoute = require("./router/blog-router.js");
const adminRoute = require("./router/admin-router.js");
const paymentRoute = require("./router/payment-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middleware/error-middleware.js");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/blog", blogRoute);
app.use("/api/admin", adminRoute);
app.use("/api/payment", paymentRoute);

let data = [
  {
    createdAt: "2024-08-18T02:15:02.942Z",
    title: "USA",
    description: [
      {
        text: "Planning a trip to the United States offers a blend of experiences that cater to every kind of traveler, from the culture enthusiast to the adventure seeker. Whether you're strolling through the bustling streets of New York City, soaking in the historical richness of Washington D.C., or marveling at the architectural wonders of Chicago, the USA promises an urban adventure like no other. Each city has its own unique charm and character, offering an array of world-class museums, iconic landmarks, and vibrant neighborhoods waiting to be explored.",
      },
      {
        text1:
          "For those who love nature and outdoor activities, the USA is a paradise. The country's diverse landscapes range from the majestic Rocky Mountains to the sprawling deserts of Arizona, and from the serene beaches of Florida to the lush forests of the Pacific Northwest. National parks like Yellowstone, the Grand Canyon, and Yosemite offer breathtaking scenery, incredible wildlife, and endless opportunities for hiking, camping, and photography. Whether you prefer skiing in the winter or surfing in the summer, there's no shortage of adventure in the great American outdoors.",
      },
      {
        text2:
          "Food lovers will find themselves in a culinary haven as they explore the USA. Each region boasts its own specialties, from the deep-dish pizzas of Chicago to the seafood feasts of New England. The country's multicultural population has led to a diverse food scene, with everything from food trucks to fine dining. Don't miss out on the chance to indulge in southern comfort food, sample authentic Mexican dishes in California, or enjoy a classic New York bagel. A journey through America is also a journey through its varied and flavorful cuisine.",
      },
      {
        text3:
          "The USA is also a shopper's dream, with everything from high-end fashion in Los Angeles and New York to unique local boutiques in small towns across the country. Visitors can explore massive shopping malls, outlet centers, and quirky street markets, ensuring they find the perfect souvenirs and gifts. Whether you're looking for luxury brands or handcrafted items, shopping in the USA is a diverse and exciting experience.",
      },
    ],
    image: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/c2/bc.jpg",
      "https://img.traveltriangle.com/apac/attachments/pictures/1105923/original/Reflecting_Pool_in_Washington__DC.jpg",
    ],
    id: "1",
  },
  {
    createdAt: "2024-08-18T00:49:28.158Z",
    title: "INDIA",
    description: [
      {
        text: "Embark on a journey through India, a land of diverse landscapes, rich history, and vibrant cultures, where every corner offers a new adventure. Our curated India trip invites you to explore the majestic palaces of Rajasthan, the serene backwaters of Kerala, the spiritual ghats of Varanasi, and the bustling markets of Delhi. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, India is a country that promises to captivate your senses and leave you with unforgettable memories.",
      },
      {
        text: "Discover the architectural marvels of the Mughal era as you visit the iconic Taj Mahal, a symbol of eternal love, and the imposing Red Fort in Agra. Journey through the colorful cities of Jaipur, Udaipur, and Jodhpur, where centuries-old palaces and forts stand as a testament to India’s regal past. As you wander through narrow lanes filled with the aroma of street food and the vibrant hues of traditional textiles, you’ll find yourself immersed in the local culture.",
      },
      {
        text: "For nature lovers, India offers an unparalleled experience. Witness the lush greenery of Kerala’s tea plantations, cruise through the tranquil backwaters, or trek through the rugged terrains of the Himalayas. Wildlife enthusiasts can embark on thrilling safaris in the national parks of Ranthambore and Jim Corbett, home to the majestic Bengal tiger and a variety of other exotic species.",
      },
      {
        text: "India is also a spiritual haven, where ancient traditions and practices are still very much alive. Visit the sacred temples of South India, experience the evening aarti on the banks of the Ganges in Varanasi, or meditate in the peaceful ashrams of Rishikesh. Whether you seek spiritual enlightenment or simply a moment of peace, India’s spiritual destinations offer a profound and transformative experience.",
      },
      {
        text: "Our India trip is more than just a vacation; it’s an opportunity to explore a country where history, culture, nature, and spirituality come together in a harmonious blend. With carefully planned itineraries, expert guides, and comfortable accommodations, we ensure that your journey through India is as enriching as it is enjoyable. Let us take you on a voyage of discovery, where the wonders of India await you at every turn.",
      },
    ],
    image: [
      "https://www.tourmyindia.com/imagess/tajmahal.webp",
      "https://newdelhi.net/wp-content/uploads/2021/08/new-delhi.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknVTougWW-z-7uCn7YJoWG6jG9BbTwhKiDg&s",
    ],
    id: "2",
  },
  {
    createdAt: "2024-08-18T00:49:28.158Z",
    title: "DUBAI",
    description: [
      {
        text: "Embark on an unforgettable journey to Dubai, a city where tradition meets modernity in the most spectacular ways. This dazzling metropolis, known for its iconic skyline, offers an array of experiences that cater to every traveler’s desire. Whether you're a thrill-seeker, a culture enthusiast, or a luxury aficionado, Dubai promises an adventure like no other. From soaring skyscrapers to tranquil deserts, your Dubai trip will be a blend of excitement and relaxation.",
      },
      {
        text: "Start your Dubai adventure with a visit to the Burj Khalifa, the tallest building in the world. Ascend to the observation deck and marvel at the breathtaking panoramic views of the city. Just a short walk away, you’ll find the Dubai Mall, a shopping paradise with over 1,200 retail outlets, an indoor aquarium, and an ice rink. For a taste of culture, explore the historic Al Fahidi neighborhood, where the Dubai Museum offers insights into the city's rich heritage.",
      },
      {
        text: "No trip to Dubai is complete without experiencing its stunning desert landscapes. Embark on a desert safari, where you can indulge in dune bashing, camel riding, and a traditional Bedouin-style dinner under the stars. The desert also offers a serene contrast to the bustling city, making it a perfect spot for stargazing or enjoying the tranquility of the golden sands.",
      },
      {
        text: "For those seeking luxury and relaxation, Dubai’s world-class resorts and beaches provide the ultimate getaway. Relax at the Palm Jumeirah, an artificial archipelago that is home to some of the most luxurious hotels and spas. Whether you’re lounging on the pristine beaches, enjoying water sports, or dining at gourmet restaurants, the Palm promises a lavish experience.",
      },
      {
        text: "Dubai also offers a vibrant nightlife, with an array of fine dining restaurants, chic rooftop bars, and lively nightclubs. End your day with a stroll along the Dubai Marina, where the city’s glittering skyline reflects off the water, or catch a show at the Dubai Opera. With its blend of adventure, culture, and luxury, Dubai is a destination that promises memories to last a lifetime.",
      },
    ],
    image: [
      "https://www.tourmyindia.com/imagess/tajmahal.webp",
      "https://newdelhi.net/wp-content/uploads/2021/08/new-delhi.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknVTougWW-z-7uCn7YJoWG6jG9BbTwhKiDg&s",
    ],
    id: "3",
  },
];

// Define the endpoint to get all data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Define the endpoint to get data by ID
app.get("/api/data/:id", (req, res) => {
  const { id } = req.params;
  const item = data.find((d) => d.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
  });
});
