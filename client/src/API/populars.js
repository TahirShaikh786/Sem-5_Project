import Scotland from "../assets/tour/Scotland.png";
import Singapore from "../assets/popular/Discover Singapore.png";
import Bora from "../assets/tour/bora.png";
import Dubai from "../assets/tour/dubaitour.jpg"

const populars = [
  {
    id: 0,
    tilte: "Discover Singapore",
    image: Singapore,
    location: "European Way, United Kingdom",
    category: ["Escorted Tour", "Rail Tour"],
    days: "5 days - 4 nights",
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
    category: ["River Cruise", "Rail Tour"],
    days: "3days - 2nights",
    price: 25000,
    afterDiscount: 22000,
    rating: 5,
    reviews: 20,
  },
];



export default populars;