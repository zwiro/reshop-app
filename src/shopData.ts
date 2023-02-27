import whiteTshirt from "./assets/white-tshirt.jpg"
import blackTshirt from "./assets/black-tshirt.jpg"
import redTshirt from "./assets/red-tshirt.jpg"
import blackHoodie from "./assets/black-hoodie.jpg"
import whiteHoodie from "./assets/white-hoodie.jpg"
import pinkJumper from "./assets/pink-jumper.jpg"
import beigeJumper from "./assets/beige-jumper.jpg"
import blackJacket from "./assets/black-jacket.jpg"
import whiteJacket from "./assets/white-jacket.jpg"
import oliveJacket from "./assets/olive-jacket.jpg"
import pinkDress from "./assets/pink-dress.jpg"
import greenDress from "./assets/green-dress.jpg"
import blueDress from "./assets/blue-dress.jpg"
import blackJeans from "./assets/black-jeans.jpg"
import darkBlueJeans from "./assets/dark-blue-jeans.jpg"
import lightBlueJeans from "./assets/light-blue-jeans.jpg"
import creamSweater from "./assets/cream-sweater.jpg"
import greySweater from "./assets/grey-sweater.jpg"
import burgundySweater from "./assets/burgundy-sweater.jpg"
import blackBlazer from "./assets/black-blazer.jpg"
import greyBlazer from "./assets/grey-blazer.jpg"
import navyBlazer from "./assets/navy-blazer.jpg"
import whiteGraphicTshirt from "./assets/white-graphic-tshirt.jpg"
import blackGraphicTshirt from "./assets/black-graphic-tshirt.jpg"
import blackSkirt from "./assets/black-skirt.jpg"
import lightBlueShorts from "./assets/light-blue-shorts.jpg"
import darkBlueShorts from "./assets/dark-blue-shorts.jpg"
import camelCoat from "./assets/camel-coat.jpg"
import blackCoat from "./assets/black-coat.jpg"
import greyCoat from "./assets/grey-coat.jpg"
import blackSneakers from "./assets/black-sneakers.jpg"
import whiteSneakers from "./assets/white-sneakers.jpg"
import blackBoots from "./assets/black-boots.jpg"
import brownBoots from "./assets/brown-boots.jpg"
import tanFlats from "./assets/tan-flats.jpg"
import blackSandals from "./assets/black-sandals.jpg"
import blackHeels from "./assets/black-heels.jpg"
import redHeels from "./assets/red-heels.jpg"
import greyScarf from "./assets/grey-scarf.jpg"
import camelScarf from "./assets/camel-scarf.jpg"
import blackHat from "./assets/black-hat.jpg"
import greyHat from "./assets/grey-hat.jpg"
import blackWatch from "./assets/black-watch.jpg"
import brownWatch from "./assets/brown-watch.jpg"
import brownBelt from "./assets/brown-belt.jpg"
import goldSunglasses from "./assets/gold-sunglasses.jpg"
import silverSunglasses from "./assets/silver-sunglasses.jpg"

type DataTypes = {
  product: string
  name: string
  sizes: string[]
  description: string
  colors: string[]
  images: string[]
  price: number
}

const data: DataTypes[] = [
  {
    product: "t-shirt",
    name: "Plain T-shirt",
    sizes: ["S", "M", "XL"],
    description:
      "Unleash your inner fashionista with our premium quality T-shirts! Crafted with soft and breathable fabric, our T-shirts are designed to keep you comfortable all day long. Choose from a wide range of trendy colors and styles to match your personal style. Whether you're looking for a classic crew neck or a trendy graphic tee, our collection has got you covered. Elevate your wardrobe with our stylish T-shirts and make a fashion statement that's sure to turn heads!",
    colors: ["white", "black", "red"],
    images: [whiteTshirt, blackTshirt, redTshirt],
    price: 23,
  },
  {
    product: "hoodie",
    name: "Hoodie with graphic",
    sizes: ["XS", "M", "L", "XL", "XXL"],
    description:
      "Stay cozy and stylish with our premium quality hoodies! Made with ultra-soft and comfortable fabric, our hoodies are perfect for chilly days or lazy weekends. Whether you prefer a classic pullover style or a trendy zip-up design, our collection has something for everyone. Choose from a variety of colors and patterns to match your personal style, and enjoy the added convenience of front pockets and adjustable drawstrings. Perfect for layering or wearing on its own, our hoodies are a must-have for any fashion-forward wardrobe. Upgrade your casual look with our stylish hoodies and stay comfortable and cozy all season long!",
    colors: ["white", "black"],
    images: [whiteHoodie, blackHoodie],
    price: 48,
  },
  {
    product: "jumper",
    name: "Warm jumper",
    sizes: ["M", "L", "XXL"],
    description:
      "Get ready for cooler weather with our stylish jumpers! Made with high-quality materials, our jumpers are designed to keep you warm and comfortable without sacrificing style. Choose from a variety of colours and patterns to find the perfect look for you, whether you prefer a classic crewneck or a trendy oversized fit. Our jumpers are perfect for layering over a t-shirt or under a jacket, making them a versatile addition to any wardrobe. With features like ribbed cuffs and a soft, breathable fabric, you'll love wearing our jumpers all season long. Upgrade your cold-weather style with our fashionable and comfortable jumpers today!",
    colors: ["pink", "beige"],
    images: [pinkJumper, beigeJumper],
    price: 43,
  },
  {
    product: "jacket",
    name: "Quilted Jacket",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay warm and stylish with our quilted jacket. Made with a durable outer shell and a cozy inner lining, this jacket is perfect for cooler temperatures. The quilted design adds a trendy touch, while the zippered pockets keep your essentials secure. Available in a range of colours to suit any outfit, our quilted jacket is a versatile addition to your wardrobe.",
    colors: ["black", "navy", "olive"],
    images: [blackJacket, whiteJacket, oliveJacket],
    price: 75,
  },
  {
    product: "dress",
    name: "Floral Print Dress",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Add some feminine flair to your wardrobe with our floral print dress. The lightweight fabric and flowy silhouette make this dress perfect for any occasion, from a picnic in the park to a night out with friends. The floral print adds a touch of romance, while the adjustable waist tie creates a flattering silhouette. Available in a range of sizes and colours, our floral print dress is a must-have for any fashion-forward woman.",
    colors: ["pink", "blue", "green"],
    images: [pinkDress, blueDress, greenDress],
    price: 55,
  },
  {
    product: "jeans",
    name: "High-Waisted Skinny Jeans",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Our high-waisted skinny jeans are a wardrobe staple. Made with a stretchy denim fabric, these jeans are both comfortable and flattering. The high waist creates a slimming effect, while the skinny leg adds a trendy touch. Available in a range of sizes and colours, our high-waisted skinny jeans are a must-have for any fashion-forward woman.",
    colors: ["black", "dark blue", "light blue"],
    images: [blackJeans, darkBlueJeans, lightBlueJeans],
    price: 65,
  },
  {
    product: "sweater",
    name: "Cable-Knit Sweater",
    sizes: ["S", "M", "L"],
    description:
      "Stay cozy and stylish with our cable-knit sweater. Made with a soft, warm fabric, this sweater is perfect for cooler temperatures. The cable-knit design adds a classic touch, while the crewneck collar creates a polished look. Available in a range of colours to suit any outfit, our cable-knit sweater is a versatile addition to your wardrobe.",
    colors: ["cream", "grey", "burgundy"],
    images: [creamSweater, greySweater, burgundySweater],
    price: 50,
  },
  {
    product: "blazer",
    name: "Structured Blazer",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Elevate any outfit with our structured blazer. Made with a high-quality fabric and a tailored fit, this blazer is perfect for both casual and formal occasions. The notched lapel and single-button closure add a touch of sophistication, while the functional pockets provide practicality. Available in a range of sizes and colours, our structured blazer is a versatile addition to any wardrobe.",
    colors: ["black", "navy", "grey"],
    images: [blackBlazer, navyBlazer, greyBlazer],
    price: 95,
  },
  {
    product: "t-shirt",
    name: "Graphic Print T-Shirt",
    sizes: ["M", "L", "XL"],
    description:
      "Make a statement with our graphic print t-shirt. Made with a soft, comfortable fabric, this t-shirt features a bold graphic print that's sure to turn heads. The crewneck collar and short sleeves make it perfect for warmer weather, while the relaxed fit adds a casual touch. Available in a range of sizes and colours, our graphic print t-shirt is a must-have for any fashion-forward man.",
    colors: ["white", "black"],
    images: [whiteGraphicTshirt, blackGraphicTshirt],
    price: 25,
  },
  {
    product: "skirt",
    name: "Pleated Midi Skirt",
    sizes: ["S", "M", "L"],
    description:
      "Add some elegance to your wardrobe with our pleated midi skirt. Made with a flowy fabric and a flattering A-line silhouette, this skirt is perfect for any occasion. The pleated design adds a touch of femininity, while the midi length creates a modest yet stylish look. Available in a range of sizes and colours, our pleated midi skirt is a versatile addition to any wardrobe.",
    colors: ["black"],
    images: [blackSkirt],
    price: 60,
  },
  {
    product: "shorts",
    name: "Denim Shorts",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Stay cool and stylish with our denim shorts. Made with a durable denim fabric, these shorts are perfect for warmer weather. The high waist and cuffed hem create a flattering silhouette, while the classic denim design adds a touch of casualness. Available in a range of sizes and colours, our denim shorts are a must-have for any fashion-forward woman.",
    colors: ["light blue", "dark blue"],
    images: [lightBlueShorts, darkBlueShorts],
    price: 40,
  },
  {
    product: "coat",
    name: "Wool Blend Coat",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay warm and fashionable with our wool blend coat. Made with a high-quality wool blend fabric, this coat is perfect for cooler temperatures. The tailored fit and notched lapel create a polished look, while the functional pockets provide practicality. Available in a range of sizes and colours, our wool blend coat is a versatile addition to your wardrobe.",
    colors: ["camel", "black", "grey"],
    images: [camelCoat, blackCoat, greyCoat],
    price: 120,
  },
  {
    product: "sneakers",
    name: "Low-Top Sneakers",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    description:
      "Get ready for any casual occasion with our low-top sneakers. Made with a breathable and durable canvas upper, these sneakers are designed for comfort and style. The lace-up design and low-top cut make them versatile enough to wear with jeans or shorts. Available in a range of sizes and colours, our low-top sneakers are perfect for any fashion-forward man.",
    colors: ["black", "white"],
    images: [blackSneakers, whiteSneakers],
    price: 50,
  },
  {
    product: "boots",
    name: "Leather Chelsea Boots",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    description:
      "Stay stylish and comfortable with our leather Chelsea boots. Made with a high-quality leather upper and a durable rubber sole, these boots are designed to last. The slip-on design and elasticated side panels make them easy to wear, while the classic Chelsea boot design adds a touch of sophistication. Available in a range of sizes and colours, our leather Chelsea boots are a must-have for any fashion-forward man.",
    colors: ["black", "brown"],
    images: [blackBoots, brownBoots],
    price: 120,
  },
  {
    product: "flats",
    name: "Ballet Flats",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Add some elegance to your wardrobe with our ballet flats. Made with a soft and flexible leather upper, these flats are designed for comfort and style. The simple design and slip-on style make them versatile enough to wear with dresses or jeans. Available in a range of sizes and colours, our ballet flats are a must-have for any fashion-forward woman.",
    colors: ["tan"],
    images: [tanFlats],
    price: 60,
  },
  {
    product: "sandals",
    name: "Strappy Sandals",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Stay cool and stylish with our strappy sandals. Made with a comfortable and durable faux leather upper and a sturdy rubber sole, these sandals are perfect for warmer weather. The strappy design adds a touch of femininity, while the adjustable ankle strap ensures a perfect fit. Available in a range of sizes and colours, our strappy sandals are a must-have for any fashion-forward woman.",
    colors: ["black"],
    images: [blackSandals],
    price: 35,
  },
  {
    product: "heels",
    name: "Classic Stiletto Heels",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    description:
      "Elevate any outfit with our classic stiletto heels. Made with a high-quality faux leather upper and a sturdy heel, these heels are designed for comfort and style. The classic design and pointed toe add a touch of sophistication, while the ankle strap ensures a secure fit. Available in a range of sizes and colours, our stiletto heels are a must-have for any fashion-forward woman.",
    colors: ["black", "red"],
    images: [blackHeels, redHeels],
    price: 74,
  },
  {
    product: "scarf",
    name: "Cashmere Scarf",
    sizes: ["One Size"],
    description:
      "Stay warm and stylish with our luxurious cashmere scarf. Made with high-quality cashmere wool, this scarf is soft, comfortable, and perfect for cooler weather. The classic design and neutral colour make it easy to pair with any outfit, while the large size allows for versatile styling. Whether you wear it as a scarf or a shawl, our cashmere scarf is sure to become a staple in your winter wardrobe.",
    colors: ["grey", "camel"],
    images: [greyScarf, camelScarf],
    price: 90,
  },
  {
    product: "hat",
    name: "Fedora Hat",
    sizes: ["S/M", "L/XL"],
    description:
      "Add some sophistication to your outfit with our classic fedora hat. Made with a durable wool felt, this hat is designed to last. The timeless design and neutral colour make it easy to pair with any outfit, while the inner sweatband ensures a comfortable fit. Available in two sizes, our fedora hat is a must-have for any fashion-forward man.",
    colors: ["black", "grey"],
    images: [blackHat, greyHat],
    price: 65,
  },
  {
    product: "watch",
    name: "Leather Strap Watch",
    sizes: ["One Size"],
    description:
      "Stay on time and on trend with our leather strap watch. Made with a durable stainless steel case and a genuine leather strap, this watch is designed to last. The classic design and minimalist dial make it easy to pair with any outfit, while the water-resistant construction ensures you can wear it anywhere. Our leather strap watch is the perfect accessory for any fashion-forward man or woman.",
    colors: ["black", "brown"],
    images: [blackWatch, brownWatch],
    price: 120,
  },
  {
    product: "belt",
    name: "Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Add some sophistication to your outfit with our leather belt. Made with high-quality leather and a durable buckle, this belt is designed to last. The classic design and neutral colour make it easy to pair with any outfit, while the adjustable sizing ensures a perfect fit. Our leather belt is the perfect accessory for any fashion-forward man.",
    colors: ["brown"],
    images: [brownBelt],
    price: 45,
  },
  {
    product: "sunglasses",
    name: "Aviator Sunglasses",
    sizes: ["One Size"],
    description:
      "Stay cool and stylish with our aviator sunglasses. Made with a durable metal frame and polarized lenses, these sunglasses are designed for comfort and style. The classic aviator design and neutral colour make them easy to pair with any outfit, while the polarized lenses provide clear vision in bright sunlight. Our aviator sunglasses are the perfect accessory for any fashion-forward man or woman.",
    colors: ["gold", "silver"],
    images: [goldSunglasses, silverSunglasses],
    price: 75,
  },
]

export default data
