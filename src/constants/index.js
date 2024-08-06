import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: food1,
    name: "Vegan Sandwich",
    price: "$200.20",
  },
  {
    imgURL: food2,
    name: "Blueberry Pancakes",
    price: "$210.20",
  },
  {
    imgURL: food3,
    name: "Strawberry pancakes",
    price: "$220.20",
  },
  {
    imgURL: food4,
    name: "Blueberry Pie",
    price: "$230.20",
  },
  {
    imgURL: food5,
    name: "Blueberry Cream Pie",
    price: "$200.20",
  },
  {
    imgURL: food6,
    name: "Cherry Muffin",
    price: "$210.20",
  },
  {
    imgURL: food7,
    name: "Fruit Cake",
    price: "$220.20",
  },
  {
    imgURL: food8,
    name: "Chocolate cake",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "X Force 1", link: "/" },
      { name: "Max Fit 1", link: "/" },
      { name: "Split Wave 1", link: "/" },
      { name: "Pressure Fit 2", link: "/" },
      { name: "X-Fit Racer", link: "/" },
      { name: "Monster Quill", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@xfit.com", link: "mailto:customer@xfit.com" },
      { name: "+92554862344", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
