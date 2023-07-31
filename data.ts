

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
    title: "Salad dish with grilled chicken",
    desc: "Garnished with  red and yellow bell peppers, cherry tomatoes, red onions, cucumbers, olives, chickpeas, feta cheese and a green dressing.",
    img: "/dish1.webp",
    price: 6300,
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
    title: "salad dish with chickpeas",
    desc: "Garnished with tomatoes, cucumbers, and avocado. Added also are grilled vegetables, eggplant and zucchini.",
    img: "/dish2.jpeg",
    price: 5800,
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
    title: "combo salad",
    desc: "Garnished with grilled chicken, chickpeas, red cabbage, red bell peppers, red onions, cucumbers, cherry tomatoes, and mixed greens.",
    img: "/dish4.jpeg",
    price: 8000,
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
    title: "Supa salad",
    desc: "Garnished with cherry tomatoes, chickpeas, avocado, red onion, cucumber, bell peppers, and quinoa.",
    img: "/dish5.jpeg",
    price: 8100,
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
    title: "falafel salad",
    desc: "Garnished with falafel, cherry tomatoes, chickpeas, avocado, olives, and roasted zucchini.",
    img: "/dish6.jpeg",
    price: 7500,
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
    title: "arugula salad",
    desc: "Garnished with arugula, sliced avocado, sliced yellow squash, sliced red onion, sliced carrots, cherry tomatoes, sliced almonds, and sliced garlic.",
    img: "/dish7.jpeg",
    price: 7000,
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
    slug: "standard-salad",
    title: "Standard Salad",
    // desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg1.webp",
    color: "white",
  },
  {
    id: 2,
    slug: "fruity-salad",
    title: "Fruity Salad",
    // desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg2.webp",
    color: "green-600",
  },
  {
    id: 3,
    slug: "chicken-salad",
    title: "Chiken Salad",
    // desc: "jjf nnghgb nvbbg bfbfghdjd nnvbvb nvbvbf ",
    img: "/menubg3.webp",
    color: "white",
  },
];

type Orders = {
  id: string;
  date: string;
  price: number;
  status: string;
  product: string;
}[];

export const order: Orders = [
  {
    id: "3654-0987-1253-4091",
    date: "May 12, 2023",
    price: 23400,
    product: "/dish1.webp",
    status: "Delivered",
  },
  {
    id: "3654-0987-1253-4092",
    date: "May 29, 2023",
    price: 23400,
    product: "/dish2.jpeg",
    status: "Delivered",
  },
  {
    id: "3654-0987-1253-4093",
    date: "Jun 02, 2023",
    price: 23400,
    product: "/dish3.jpeg",
    status: "Delivered",
  },
  {
    id: "3654-0987-1253-4094",
    date: "Jun 12, 2023",
    price: 23400,
    product: "/dish4.jpeg",
    status: "Delivered",
  },
];
