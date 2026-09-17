import shopwaveImg from "../assets/shopwave.png";
import chatappImg from "../assets/chatapp.png";

export const projects = [
  {
    name: "Shopwave",
    tag: "E-Commerce · MERN Stack",
    description:
      "A full-stack e-commerce platform built with React, Redux Toolkit, Node.js, Express and MongoDB. Includes Cloudinary image uploads and local payment methods (JazzCash, Easypaisa, bank transfer).",
    github: "https://github.com/lubaiqa/ShopWave",
    live: "https://lubaiqa-shopwave.vercel.app/",
    image: shopwaveImg,
  },
  {
    name: "Real-Time Chat App",
    tag: "Realtime · MERN + Socket.io",
    description:
      "A real-time messaging app built with the MERN stack and Socket.io for instant, bidirectional communication. Features a colorful split-screen auth UI and a dark, teal-accented chat interface.",
    github: "https://github.com/lubaiqa/ChatApp",
    live: "lubaiqa-chatapp.vercel.app",
    image: chatappImg,
  },
];
