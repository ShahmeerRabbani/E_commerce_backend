import dotenv from 'dotenv';
dotenv.config(); 

export const Store = [
  {
    id: 1,
    name: "Slim-Fit Cotton T-Shirt",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image1.jpg`,
    rating: {
      rate: 4.6,
      review: 290,
      count: 360,
    },
    price: `${290}.00`,
    quantity: 1,
  },
  {
    id: 2,
    name: "Oversized Graphic Hoodie",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image2.jpg`,
    rating: {
      rate: 1.5,
      review: 156,
      count: 230,
    },
    price: `${130}.00`,
    quantity: 1,
  },
  {
    id: 3,
    name: "Regular-Fit Denim Shirt",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image3.jpg`,
    rating: {
      rate: 5,
      review: 126,
      count: 60,
    },
    price: `${350}.00`,
    quantity: 1,
  },
  {
    id: 4,
    name: "Skinny Stretchable Jeans",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image4.jpg`,
    rating: {
      rate: 4.1,
      review: 867,
      count: 223,
    },
    price: `${499}.00`,
    quantity: 1,
  },
  {
    id: 5,
    name: "Relaxed-Fit Casual Chinos",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image5.jpg`,
    rating: {
      rate: 3.2,
      review: 345,
      count: 94,
    },
    price: `${150}.00`,
    quantity: 1,
  },
  {
    id: 6,
    name: "Crew Neck Wool Sweater",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image6.jpg`,
    rating: {
      rate: 3.9,
      review: 234,
      count: 240,
    },
    price: `${650}.00`,
    quantity: 1,
  },
  {
    id: 7,
    name: "Waterproof Puffer Jacket",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image7.jpg`,
    rating: {
      rate: 1.9,
      review: 267,
      count: 200,
    },
    price: `${199}.00`,
    quantity: 1,
  },
  {
    id: 8,
    name: "Single-Breasted Tailored Blazer",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image8.jpg`,
    rating: {
      rate: 3.9,
      review: 187,
      count: 500,
    },
    price: `${230}.00`,
    quantity: 1,
  },
  {
    id: 9,
    name: "Three-Piece Formal Suit",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image9.jpg`,
    rating: {
      rate: 3.2,
      review: 136,
      count: 290,
    },
    price: `${450}.00`,
    quantity: 1,
  },
  {
    id: 10,
    name: "Knee-Length Cargo Shorts",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image10.jpg`,
    rating: {
      rate: 4.5,
      review: 897,
      count: 150,
    },
    price: `${199}.00`,
    quantity: 1,
  },
  {
    id: 11,
    name: "Moisture-Wicking Track Pants",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image11.jpg`,
    rating: {
      rate: 1.6,
      review: 532,
      count: 240,
    },
    price: `${370}.00`,
    quantity: 1,
  },
  {
    id: 12,
    name: "Classic Striped Polo Shirt",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image12.jpg`,
    rating: {
      rate: 2.6,
      review: 343,
      count: 60,
    },
    price: `${329}.00`,
    quantity: 1,
  },
  {
    id: 13,
    name: "Chunky Knit Wool Cardigan",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image13.jpg`,
    rating: {
      rate: 5,
      review: 762,
      count: 100,
    },
    price: `${299}.00`,
    quantity: 1,
  },
  {
    id: 14,
    name: "Double-Breasted Wool Overcoat",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image14.jpg`,
    rating: {
      rate: 4,
      review: 198,
      count: 540,
    },
    price: `${149}.00`,
    quantity: 1,
  },
  {
    id: 15,
    name: "Breathable Sleeveless Tank Top",
    image: `${process.env.BASE_URL || 'http://localhost:3000' }/uploads/image15.jpg`,
    rating: {
      rate: 3.2,
      review: 299,
      count: 30,
    },
    price: `${490}.00`,
    quantity: 1,
  },
];
