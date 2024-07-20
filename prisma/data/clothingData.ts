import { Prisma, Gender, Size, Color } from '@prisma/client';

const clothesData: Prisma.ClothingCreateInput[] = [
  // Women
  {
    name: 'ZARA Floral Summer Dress',
    gender: Gender.FEMALE,
    description:
      'This ZARA dress features a beautiful floral print perfect for summer. It is made with lightweight and breathable fabric, ensuring comfort throughout the day. The A-line cut and adjustable straps provide a flattering fit for all body types.',
    category: {
      connect: { id: 5 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.PINK,
          imageUrl:
            '/clothing/women/zara-floral-summer-dress/zara-dress-pink.jpg',
          inventory: {
            create: [
              {
                size: Size.S,
                quantity: 8,
                priceInCents: 5999,
              },
              {
                size: Size.M,
                quantity: 10,
                priceInCents: 5999,
              },
              {
                size: Size.L,
                quantity: 10,
                priceInCents: 5999,
              },
            ],
          },
        },
        {
          color: Color.ORANGE,
          imageUrl:
            '/clothing/women/zara-floral-summer-dress/zara-dress-orange.jpg',
          inventory: {
            create: [
              {
                size: Size.S,
                quantity: 8,
                priceInCents: 5999,
              },
              {
                size: Size.M,
                quantity: 10,
                priceInCents: 5999,
              },
              {
                size: Size.L,
                quantity: 10,
                priceInCents: 5999,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'H&M Wide-Cut Pull-On Pants',
    gender: Gender.FEMALE,
    description:
      'These wide-cut pull-on pants from H&M are designed for comfort and style. Made with a soft and flowy fabric, they feature an elastic waistband and side pockets for added convenience. The wide-leg design offers a relaxed fit and a trendy look.',
    category: {
      connect: { id: 3 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl:
            '/clothing/women/hm-wide-cut-pull-on-pants/hm-wide-cut-pants-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 3999 },
              { size: Size.M, quantity: 12, priceInCents: 3999 },
              { size: Size.L, quantity: 12, priceInCents: 3999 },
            ],
          },
        },
        {
          color: Color.GRAY,
          imageUrl:
            '/clothing/women/hm-wide-cut-pull-on-pants/hm-wide-cut-pants-gray.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 3999 },
              { size: Size.M, quantity: 12, priceInCents: 3999 },
              { size: Size.L, quantity: 12, priceInCents: 3999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'ADIDAS Essentials Slim 3-Stripes Tee',
    gender: Gender.FEMALE,
    description:
      'This Adidas tee features the iconic 3-stripes design for a sporty and stylish look. Made with soft and stretchy fabric, it offers comfort and flexibility for workouts or casual wear. The slim fit and crew neck design provide a flattering silhouette.',
    category: {
      connect: { id: 1 },
    },
    subcategory: {
      connect: { id: 1 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl:
            '/clothing/women/adidas-essentials-slim-tee/adidas-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2499 },
              { size: Size.M, quantity: 12, priceInCents: 2499 },
              { size: Size.L, quantity: 12, priceInCents: 2499 },
            ],
          },
        },
        {
          color: Color.PINK,
          imageUrl:
            '/clothing/women/adidas-essentials-slim-tee/adidas-pink.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2499 },
              { size: Size.M, quantity: 12, priceInCents: 2499 },
              { size: Size.L, quantity: 12, priceInCents: 2499 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'ADIDAS Adicolor Classics Long Sleeve Tee',
    gender: Gender.FEMALE,
    description:
      'This Adidas long sleeve tee features a classic design with the iconic trefoil logo. Made with soft and comfortable fabric, it offers a relaxed fit and a casual look. The ribbed crew neck and cuffs provide a snug and secure feel.',
    category: {
      connect: { id: 1 },
    },
    subcategory: {
      connect: { id: 2 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl:
            '/clothing/women/adidas-adicolor-long-sleeve-tee/adidas-long-sleeve.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 0, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
              { size: Size.XL, quantity: 12, priceInCents: 3999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'H&M Low Waist Denim Skirt',
    gender: Gender.FEMALE,
    description:
      'This H&M low waist skirt is made from high-quality denim and features a classic design. It has a slight stretch for added comfort and a perfect fit. The skirt has a button and zip closure, five-pocket styling, and a raw hem for a trendy look.',
    category: {
      connect: { id: 6 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLUE,
          imageUrl: '/clothing/women/hm-low-waist-skirt/hm-skirt-blue.jpeg',
          inventory: {
            create: [
              { size: Size.S, quantity: 12, priceInCents: 2999 },
              { size: Size.M, quantity: 15, priceInCents: 2999 },
              { size: Size.L, quantity: 15, priceInCents: 2999 },
            ],
          },
        },
        {
          color: Color.BLACK,
          imageUrl: '/clothing/women/hm-low-waist-skirt/hm-skirt-black.jpeg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 12, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'H&M High Waist Skinny Jeans',
    gender: Gender.FEMALE,
    description:
      'These high waist skinny jeans from H&M offer a sleek and flattering fit. Made with stretch denim for comfort, they feature a zip fly and button closure, and classic five-pocket styling.',
    category: {
      connect: { id: 2 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLUE,
          imageUrl:
            '/clothing/women/hm-high-waist-skinny-jeans/hm-jeans-blue.jpeg',
          inventory: {
            create: [
              { size: Size.S, quantity: 20, priceInCents: 3999 },
              { size: Size.M, quantity: 25, priceInCents: 3999 },
              { size: Size.L, quantity: 25, priceInCents: 3999 },
            ],
          },
        },
        {
          color: Color.BLACK,
          imageUrl:
            '/clothing/women/hm-high-waist-skinny-jeans/hm-jeans-black.jpeg',
          inventory: {
            create: [
              { size: Size.S, quantity: 18, priceInCents: 3999 },
              { size: Size.M, quantity: 22, priceInCents: 3999 },
              { size: Size.L, quantity: 22, priceInCents: 3999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'GAP Cotton Shirt',
    gender: Gender.FEMALE,
    description:
      'This cotton shirt from GAP is perfect for both casual and office wear. Made from soft and breathable cotton, it features a relaxed fit with button closure and a classic collar.',
    category: {
      connect: { id: 7 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.WHITE,
          imageUrl: '/clothing/women/gap-cotton-shirt/gap-shirt-white.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 15, priceInCents: 2499 },
              { size: Size.M, quantity: 20, priceInCents: 2499 },
              { size: Size.L, quantity: 20, priceInCents: 2499 },
            ],
          },
        },
        {
          color: Color.BLACK,
          imageUrl: '/clothing/women/gap-cotton-shirt/gap-shirt-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 12, priceInCents: 2499 },
              { size: Size.M, quantity: 16, priceInCents: 2499 },
              { size: Size.L, quantity: 16, priceInCents: 2499 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Protest Day Dress',
    gender: Gender.FEMALE,
    description:
      'This day dress from Protest is designed to hug your curves in all the right places. Made with a stretchy fabric blend, it features a scoop neckline and short sleeves design for a chic look.',
    category: {
      connect: { id: 5 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/women/protest-day-dress/day-dress-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 0, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
            ],
          },
        },
        {
          color: Color.GREEN,
          imageUrl: '/clothing/women/protest-day-dress/day-dress-green.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 12, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
            ],
          },
        },
        {
          color: Color.PINK,
          imageUrl: '/clothing/women/protest-day-dress/day-dress-pink.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 12, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'MANGO Faux Leather Jacket',
    gender: Gender.FEMALE,
    description:
      'This faux leather jacket from MANGO adds a chic touch to any outfit. It features a zip closure, multiple pockets, and a fitted design, making it perfect for a stylish and edgy look.',
    category: {
      connect: { id: 4 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/women/mango-jacket/mango-jacket-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 5999 },
              { size: Size.M, quantity: 7, priceInCents: 5999 },
              { size: Size.L, quantity: 7, priceInCents: 5999 },
            ],
          },
        },
      ],
    },
  },

  // Men
  {
    name: 'NIKE regular fit T-shirt',
    gender: Gender.MALE,
    description:
      'This Nike tee offers classic comfort in a plain jersey fabric. The crew neck and straight hem keep it simple, while the quilted details on the hem add a touch of unique style. Soft cotton with a slightly relaxed fit ensures all-day comfort.',
    category: {
      connect: { id: 1 },
    },
    subcategory: {
      connect: { id: 1 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl:
            '/clothing/men/nike-regular-fit-tshirt/nike-tshirt-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 1999 },
              { size: Size.M, quantity: 12, priceInCents: 1999 },
              { size: Size.L, quantity: 12, priceInCents: 1999 },
            ],
          },
        },
        {
          color: Color.WHITE,
          imageUrl:
            '/clothing/men/nike-regular-fit-tshirt/nike-tshirt-white.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 13, priceInCents: 1999 },
              { size: Size.M, quantity: 32, priceInCents: 1999 },
              { size: Size.L, quantity: 26, priceInCents: 2199 },
            ],
          },
        },
        {
          color: Color.RED,
          imageUrl: '/clothing/men/nike-regular-fit-tshirt/nike-tshirt-red.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 13, priceInCents: 1999 },
              { size: Size.M, quantity: 32, priceInCents: 1999 },
              { size: Size.L, quantity: 26, priceInCents: 2199 },
            ],
          },
        },
      ],
    },
  },
  {
    name: "LEVI'S Classic Jeans",
    gender: Gender.MALE,
    description:
      "These classic Levi's jeans are made with durable denim and feature a timeless design. They offer a comfortable fit with a slight stretch and are perfect for everyday wear. The jeans have a button and zip closure, five-pocket styling, and a straight leg cut.",
    category: {
      connect: { id: 2 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLUE,
          imageUrl: '/clothing/men/levis-classic-jeans/levis-jeans-blue.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 20, priceInCents: 6999 },
              { size: Size.M, quantity: 25, priceInCents: 6999 },
              { size: Size.L, quantity: 25, priceInCents: 6999 },
            ],
          },
        },
        {
          color: Color.BLACK,
          imageUrl: '/clothing/men/levis-classic-jeans/levis-jeans-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 15, priceInCents: 6999 },
              { size: Size.M, quantity: 20, priceInCents: 6999 },
              { size: Size.L, quantity: 20, priceInCents: 6999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'ADIDAS slim fit Joggers',
    gender: Gender.MALE,
    description:
      'These Adidas joggers offer a sleek and modern look with a slim fit design. Made with a soft and stretchy fabric, they provide comfort and flexibility for everyday wear. The elastic waistband and drawstring closure ensure a secure and adjustable fit. Complete with side pockets and a logo detail for added style.',
    category: {
      connect: { id: 8 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/men/adidas-joggers/adidas-joggers-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 8, priceInCents: 3999 },
              { size: Size.M, quantity: 10, priceInCents: 3999 },
              { size: Size.L, quantity: 10, priceInCents: 3999 },
              { size: Size.XL, quantity: 2, priceInCents: 4999 },
            ],
          },
        },
        {
          color: Color.BLUE,
          imageUrl: '/clothing/men/adidas-joggers/adidas-joggers-blue.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 3999 },
              { size: Size.M, quantity: 12, priceInCents: 3999 },
              { size: Size.L, quantity: 12, priceInCents: 3999 },
              { size: Size.XL, quantity: 2, priceInCents: 4999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'PUMA graphic print Hoodie',
    gender: Gender.MALE,
    description:
      'This Puma hoodie features a bold graphic print for a stylish and eye-catching look. Made with a soft and cozy fabric, it provides warmth and comfort on cooler days. The hood with drawstring closure offers added protection against the elements. Complete with a kangaroo pocket and ribbed cuffs and hem for a snug fit.',
    category: {
      connect: { id: 9 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/men/puma-hoodie/puma-hoodie-black.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 4999 },
              { size: Size.M, quantity: 8, priceInCents: 4999 },
              { size: Size.L, quantity: 8, priceInCents: 4999 },
              { size: Size.XL, quantity: 8, priceInCents: 4999 },
            ],
          },
        },
        {
          color: Color.GRAY,
          imageUrl: '/clothing/men/puma-hoodie/puma-hoodie-gray.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 12, priceInCents: 4999 },
              { size: Size.M, quantity: 10, priceInCents: 4999 },
              { size: Size.L, quantity: 10, priceInCents: 4999 },
              { size: Size.XL, quantity: 10, priceInCents: 4999 },
            ],
          },
        },
        {
          color: Color.WHITE,
          imageUrl: '/clothing/men/puma-hoodie/puma-hoodie-white.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 4999 },
              { size: Size.M, quantity: 8, priceInCents: 4999 },
              { size: Size.L, quantity: 8, priceInCents: 4999 },
              { size: Size.XL, quantity: 8, priceInCents: 4999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'UNIQLO classic button-down Shirt',
    gender: Gender.MALE,
    description:
      'This classic button-down shirt from Uniqlo is perfect for both casual and formal occasions. Made with high-quality cotton, it features a regular fit, button cuffs, and a crisp collar. Available in multiple colors to suit your style.',
    category: {
      connect: { id: 7 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.GRAY,
          imageUrl: '/clothing/men/uniqlo-shirt/uniqlo-shirt-gray.jpg',
          inventory: {
            create: [
              { size: Size.S, quantity: 10, priceInCents: 2999 },
              { size: Size.M, quantity: 12, priceInCents: 2999 },
              { size: Size.L, quantity: 12, priceInCents: 2999 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'THE NORTH FACE Winter Jacket',
    gender: Gender.MALE,
    description:
      'This winter jacket from The North Face provides superior warmth and protection against the elements. Made with a waterproof outer layer and insulated lining, it features multiple pockets and a hood for added convenience.',
    category: {
      connect: { id: 4 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/men/tnf-jacket/winter-jacket-black.jpg',
          inventory: {
            create: [
              { size: Size.M, quantity: 8, priceInCents: 12000 },
              { size: Size.L, quantity: 10, priceInCents: 12000 },
              { size: Size.XL, quantity: 10, priceInCents: 12000 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'TERREX Hiking Pants',
    gender: Gender.MALE,
    description:
      'These hiking pants from Terrex are designed for outdoor adventures. Made with durable, water-resistant fabric, they feature multiple pockets, an adjustable waistband, and a comfortable fit.',
    category: {
      connect: { id: 3 },
    },
    clothingVariations: {
      create: [
        {
          color: Color.BLACK,
          imageUrl: '/clothing/men/terrex-hiking-pants/hiking-pants.jpg',
          inventory: {
            create: [
              { size: Size.M, quantity: 8, priceInCents: 4999 },
              { size: Size.L, quantity: 10, priceInCents: 4999 },
              { size: Size.XL, quantity: 10, priceInCents: 4999 },
            ],
          },
        },
      ],
    },
  },
];

export default clothesData;
