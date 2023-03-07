import { DataType } from "./types"

const data: DataType[] = [
  {
    id: 1,
    category: "Clothing",
    subcategory: "T-Shirts",
    product: "t-shirt",
    name: "Plain T-shirt",
    sizes: ["S", "M", "XL"],
    description:
      "Unleash your inner fashionista with our premium quality T-shirts! Crafted with soft and breathable fabric, our T-shirts are designed to keep you comfortable all day long. Choose from a wide range of trendy colors and styles to match your personal style. Whether you're looking for a classic crew neck or a trendy graphic tee, our collection has got you covered. Elevate your wardrobe with our stylish T-shirts and make a fashion statement that's sure to turn heads!",
    colors: ["white", "black", "red"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1599255068390-206e0d068539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1520911858363-ce639c052a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 23,
  },
  {
    id: 2,
    category: "Clothing",
    subcategory: "Hoodies",
    product: "hoodie",
    name: "Graphic Print Hoodie",
    sizes: ["XS", "M", "L", "XL", "XXL"],
    description:
      "Stay cozy and stylish with our premium quality hoodies! Made with ultra-soft and comfortable fabric, our hoodies are perfect for chilly days or lazy weekends. Whether you prefer a classic pullover style or a trendy zip-up design, our collection has something for everyone. Choose from a variety of colors and patterns to match your personal style, and enjoy the added convenience of front pockets and adjustable drawstrings. Perfect for layering or wearing on its own, our hoodies are a must-have for any fashion-forward wardrobe. Upgrade your casual look with our stylish hoodies and stay comfortable and cozy all season long!",
    colors: ["white", "black"],
    images: [
      "https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    price: 48,
  },
  {
    id: 3,
    category: "Clothing",
    subcategory: "Sweaters",
    product: "jumper",
    name: "Warm jumper",
    sizes: ["M", "L", "XXL"],
    description:
      "Get ready for cooler weather with our stylish jumpers! Made with high-quality materials, our jumpers are designed to keep you warm and comfortable without sacrificing style. Choose from a variety of colours and patterns to find the perfect look for you, whether you prefer a classic crewneck or a trendy oversized fit. Our jumpers are perfect for layering over a t-shirt or under a jacket, making them a versatile addition to any wardrobe. With features like ribbed cuffs and a soft, breathable fabric, you'll love wearing our jumpers all season long. Upgrade your cold-weather style with our fashionable and comfortable jumpers today!",
    colors: ["pink", "beige"],
    images: [
      "https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1623393807211-3d70dc56395c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 43,
  },
  {
    id: 4,
    category: "Clothing",
    subcategory: "Jackets",
    product: "jacket",
    name: "Quilted Jacket",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay warm and stylish with our quilted jacket. Made with a durable outer shell and a cozy inner lining, this jacket is perfect for cooler temperatures. The quilted design adds a trendy touch, while the zippered pockets keep your essentials secure. Available in a range of colours to suit any outfit, our quilted jacket is a versatile addition to your wardrobe.",
    colors: ["black", "navy", "olive"],
    images: [
      "https://images.unsplash.com/photo-1551318181-655e9748c0a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1548712370-806c729f72ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1547222246-6d68a0f35395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
    ],
    price: 75,
  },
  {
    id: 5,
    category: "Clothing",
    subcategory: "Dresses",
    product: "dress",
    name: "Floral Print Dress",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Add some feminine flair to your wardrobe with our floral print dress. The lightweight fabric and flowy silhouette make this dress perfect for any occasion, from a picnic in the park to a night out with friends. The floral print adds a touch of romance, while the adjustable waist tie creates a flattering silhouette. Available in a range of sizes and colours, our floral print dress is a must-have for any fashion-forward woman.",
    colors: ["pink", "blue", "green"],
    images: [
      "https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1556437298-3c544908b65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      "https://images.unsplash.com/photo-1552923410-f561a49581c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 55,
  },
  {
    id: 6,
    category: "Clothing",
    subcategory: "Jeans",
    product: "jeans",
    name: "High-Waisted Skinny Jeans",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Our high-waisted skinny jeans are a wardrobe staple. Made with a stretchy denim fabric, these jeans are both comfortable and flattering. The high waist creates a slimming effect, while the skinny leg adds a trendy touch. Available in a range of sizes and colours, our high-waisted skinny jeans are a must-have for any fashion-forward woman.",
    colors: ["black", "dark blue", "light blue"],
    images: [
      "https://images.unsplash.com/photo-1519617231457-270d2289b926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1508272954429-7ebca1d1b8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1605170496448-dc99fd4c3872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    ],
    price: 65,
  },
  {
    id: 7,
    category: "Clothing",
    subcategory: "Sweaters",
    product: "sweater",
    name: "Cable-Knit Sweater",
    sizes: ["S", "M", "L"],
    description:
      "Stay cozy and stylish with our cable-knit sweater. Made with a soft, warm fabric, this sweater is perfect for cooler temperatures. The cable-knit design adds a classic touch, while the crewneck collar creates a polished look. Available in a range of colours to suit any outfit, our cable-knit sweater is a versatile addition to your wardrobe.",
    colors: ["cream", "grey", "burgundy"],
    images: [
      "https://images.unsplash.com/photo-1629580626780-7fe7fb0523e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/flagged/photo-1574666744315-f07d66a6f8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    ],
    price: 50,
  },
  {
    id: 8,
    category: "Clothing",
    subcategory: "Blazers",
    product: "blazer",
    name: "Structured Blazer",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Elevate any outfit with our structured blazer. Made with a high-quality fabric and a tailored fit, this blazer is perfect for both casual and formal occasions. The notched lapel and single-button closure add a touch of sophistication, while the functional pockets provide practicality. Available in a range of sizes and colours, our structured blazer is a versatile addition to any wardrobe.",
    colors: ["black", "navy", "grey"],
    images: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
    ],
    price: 95,
  },
  {
    id: 9,
    category: "Clothing",
    subcategory: "T-Shirts",
    product: "t-shirt",
    name: "Graphic Print T-Shirt",
    sizes: ["M", "L", "XL"],
    description:
      "Make a statement with our graphic print t-shirt. Made with a soft, comfortable fabric, this t-shirt features a bold graphic print that's sure to turn heads. The crewneck collar and short sleeves make it perfect for warmer weather, while the relaxed fit adds a casual touch. Available in a range of sizes and colours, our graphic print t-shirt is a must-have for any fashion-forward man.",
    colors: ["white", "black"],
    images: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1603065881771-8aa5eb1ed8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80",
    ],
    price: 25,
  },
  {
    id: 10,
    category: "Clothing",
    subcategory: "Skirts",
    product: "skirt",
    name: "Pleated Midi Skirt",
    sizes: ["S", "M", "L"],
    description:
      "Add some elegance to your wardrobe with our pleated midi skirt. Made with a flowy fabric and a flattering A-line silhouette, this skirt is perfect for any occasion. The pleated design adds a touch of femininity, while the midi length creates a modest yet stylish look. Available in a range of sizes and colours, our pleated midi skirt is a versatile addition to any wardrobe.",
    colors: ["black"],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80",
    ],
    price: 60,
  },
  {
    id: 11,
    category: "Clothing",
    subcategory: "Shorts",
    product: "shorts",
    name: "Shorts",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Stay cool and stylish with our denim shorts. Made with a durable denim fabric, these shorts are perfect for warmer weather. The high waist and cuffed hem create a flattering silhouette, while the classic denim design adds a touch of casualness. Available in a range of sizes and colours, our denim shorts are a must-have for any fashion-forward woman.",
    colors: ["light blue", "dark blue"],
    images: [
      "https://images.unsplash.com/photo-1533690722797-a8b7aa2a2e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1600101828777-4eddd30db2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 40,
  },
  {
    id: 12,
    category: "Clothing",
    subcategory: "Coats",
    product: "coat",
    name: "Wool Blend Coat",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay warm and fashionable with our wool blend coat. Made with a high-quality wool blend fabric, this coat is perfect for cooler temperatures. The tailored fit and notched lapel create a polished look, while the functional pockets provide practicality. Available in a range of sizes and colours, our wool blend coat is a versatile addition to your wardrobe.",
    colors: ["camel", "black", "grey"],
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1581954768700-06ff9c582704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
      "https://images.unsplash.com/photo-1612462766564-895ea3388d2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    price: 120,
  },
  {
    id: 13,
    category: "Footwear",
    subcategory: "Sneakers",
    product: "sneakers",
    name: "Low-Top Sneakers",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    description:
      "Get ready for any casual occasion with our low-top sneakers. Made with a breathable and durable canvas upper, these sneakers are designed for comfort and style. The lace-up design and low-top cut make them versatile enough to wear with jeans or shorts. Available in a range of sizes and colours, our low-top sneakers are perfect for any fashion-forward man.",
    colors: ["black", "white"],
    images: [
      "https://images.unsplash.com/photo-1639140730904-b9d7d7d40fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    ],
    price: 50,
  },
  {
    id: 14,
    category: "Footwear",
    subcategory: "Boots",
    product: "boots",
    name: "Leather Chelsea Boots",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    description:
      "Stay stylish and comfortable with our leather Chelsea boots. Made with a high-quality leather upper and a durable rubber sole, these boots are designed to last. The slip-on design and elasticated side panels make them easy to wear, while the classic Chelsea boot design adds a touch of sophistication. Available in a range of sizes and colours, our leather Chelsea boots are a must-have for any fashion-forward man.",
    colors: ["black", "brown"],
    images: [
      "https://images.unsplash.com/photo-1524087689795-d449b477c4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80",
      "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    price: 120,
  },
  {
    id: 15,
    category: "Footwear",
    subcategory: "Flats",
    product: "flats",
    name: "Ballet Flats",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Add some elegance to your wardrobe with our ballet flats. Made with a soft and flexible leather upper, these flats are designed for comfort and style. The simple design and slip-on style make them versatile enough to wear with dresses or jeans. Available in a range of sizes and colours, our ballet flats are a must-have for any fashion-forward woman.",
    colors: ["tan"],
    images: [
      "https://images.unsplash.com/photo-1592554536753-6d811a6ff52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 60,
  },
  {
    id: 16,
    category: "Footwear",
    subcategory: "Sandals",
    product: "sandals",
    name: "Strappy Sandals",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Stay cool and stylish with our strappy sandals. Made with a comfortable and durable faux leather upper and a sturdy rubber sole, these sandals are perfect for warmer weather. The strappy design adds a touch of femininity, while the adjustable ankle strap ensures a perfect fit. Available in a range of sizes and colours, our strappy sandals are a must-have for any fashion-forward woman.",
    colors: ["black"],
    images: [
      "https://images.unsplash.com/photo-1605445175147-8d2340ea9065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 35,
  },
  {
    id: 17,
    category: "Footwear",
    subcategory: "Heels",
    product: "heels",
    name: "Classic Stiletto Heels",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Elevate any outfit with our classic stiletto heels. Made with a high-quality faux leather upper and a sturdy heel, these heels are designed for comfort and style. The classic design and pointed toe add a touch of sophistication, while the ankle strap ensures a secure fit. Available in a range of sizes and colours, our stiletto heels are a must-have for any fashion-forward woman.",
    colors: ["black", "red"],
    images: [
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1611233299310-f6276ff55307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 74,
  },
  {
    id: 18,
    category: "Accessories",
    product: "scarf",
    name: "Cashmere Scarf",
    sizes: ["One Size"],
    description:
      "Stay warm and stylish with our luxurious cashmere scarf. Made with high-quality cashmere wool, this scarf is soft, comfortable, and perfect for cooler weather. The classic design and neutral colour make it easy to pair with any outfit, while the large size allows for versatile styling. Whether you wear it as a scarf or a shawl, our cashmere scarf is sure to become a staple in your winter wardrobe.",
    colors: ["grey", "camel"],
    images: [
      "https://images.unsplash.com/photo-1601498089678-ba42dc32b01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1675117414845-148db0a96915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 90,
  },
  {
    id: 19,
    category: "Accessories",
    product: "hat",
    name: "Fedora Hat",
    sizes: ["S/M", "L/XL"],
    description:
      "Add some sophistication to your outfit with our classic fedora hat. Made with a durable wool felt, this hat is designed to last. The timeless design and neutral colour make it easy to pair with any outfit, while the inner sweatband ensures a comfortable fit. Available in two sizes, our fedora hat is a must-have for any fashion-forward man.",
    colors: ["black", "grey"],
    images: [
      "https://images.unsplash.com/photo-1495041845204-feee5b0bda50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 65,
  },
  {
    id: 20,
    category: "Accessories",
    product: "watch",
    name: "Leather Strap Watch",
    sizes: ["One Size"],
    description:
      "Stay on time and on trend with our leather strap watch. Made with a durable stainless steel case and a genuine leather strap, this watch is designed to last. The classic design and minimalist dial make it easy to pair with any outfit, while the water-resistant construction ensures you can wear it anywhere. Our leather strap watch is the perfect accessory for any fashion-forward man or woman.",
    colors: ["black", "brown"],
    images: [
      "https://images.unsplash.com/photo-1517439100123-220bd1ac8014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1667854792753-26ec904c0295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 120,
  },
  {
    id: 21,
    category: "Accessories",
    product: "belt",
    name: "Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Add some sophistication to your outfit with our leather belt. Made with high-quality leather and a durable buckle, this belt is designed to last. The classic design and neutral colour make it easy to pair with any outfit, while the adjustable sizing ensures a perfect fit. Our leather belt is the perfect accessory for any fashion-forward man.",
    colors: ["brown"],
    images: [
      "https://images.unsplash.com/photo-1623393807193-e095f7944161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    price: 45,
  },
  {
    id: 22,
    category: "Accessories",
    product: "sunglasses",
    name: "Aviator Sunglasses",
    sizes: ["One Size"],
    description:
      "Stay cool and stylish with our aviator sunglasses. Made with a durable metal frame and polarized lenses, these sunglasses are designed for comfort and style. The classic aviator design and neutral colour make them easy to pair with any outfit, while the polarized lenses provide clear vision in bright sunlight. Our aviator sunglasses are the perfect accessory for any fashion-forward man or woman.",
    colors: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    price: 75,
  },
]

export default data
