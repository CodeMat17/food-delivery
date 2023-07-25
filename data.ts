type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish1.webp",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 2,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish2.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 3,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish3.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish4.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 5,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish5.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 6,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish6.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 7,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 2,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 3,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
  {
    id: 5,
    title: "Spicy Arrabbiata",
    desc: "fgfgfh bbfgb bdbdg bc bfgjd bbfjjf jjfkdkd kfkkf kdkdkd.",
    img: "/dish7.jpeg",
    price: 2000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 400,
      },
      {
        title: "Large",
        additionalPrice: 700,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Home Food",
  desc: "This is the perfect home food for you, family and friends",
  img: "/dish7.jpeg",
  price: 5000,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pasta",
    title: "Italian Pasta",
    desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg1.webp",
    color: "white",
  },
  {
    id: 2,
    slug: "pasta",
    title: "Italian Pasta",
    desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg2.webp",
    color: "green-600",
  },
  {
    id: 3,
    slug: "pasta",
    title: "Italian Pasta",
    desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg3.webp",
    color: "white",
  },
];
