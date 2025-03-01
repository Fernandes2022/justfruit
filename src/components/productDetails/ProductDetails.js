import product1 from '../../assets/product__1.webp'
import rating from '../../assets/rating-35.png'
import  product2 from '../../assets/product__2.webp'
import product3 from '../../assets/product__3.webp'
import product4 from '../../assets/product__4.webp'
import product5 from '../../assets/product__5.webp'


import category1 from '../../assets/category__1.webp'
import category2 from '../../assets/category__2.webp'
import category3 from '../../assets/category__3.webp'
import category4 from '../../assets/category__4.webp'
import category5 from '../../assets/category__5.webp'
import category6 from '../../assets/category__6.webp'


export const category = [
 {
 title: 'Fresh Fruits',
 much: '3 Products',
 image: category1
},
 {
 title: 'Fresh Vegs',
 much: '4 Products',
 image: category2
},
 {
 title: 'Canned Foods',
 much: '5 Products',
 image: category3
},
 {
 title: 'Bread & Bakery',
 much: '6 Products',
 image: category4
},
 {
 title: 'Fishes',
 much: '8 Products',
 image: category5
},
 {
 title: 'Eggs & Dairy',
 much: '4 Products',
 image: category6
},
]

const products = [
 {
  id: 1,
  title: 'Dried Mango',
  image: product1,
  price: 400,
  rating: rating
 },
 {
  id: 2,
  title: 'Crunchy Crisps',
  image: product2,
  price: 300,
  rating: rating
 },
 {
  id: 3,
  title: 'Jewel Crawries',
  image: product3,
  price: 200,
  rating: rating
 },
 {
  id: 4,
  title: 'Almond Organic',
  image: product4,
  price: 100,
  rating: rating
 },
 {
  id: 5,
  title: 'Tomatoes',
  image: product5,
  price: 400,
  rating: rating
 },
 {
  id: 6,
  title: 'Fruit Pack',
  image: category1,
  price: 600,
  rating: rating
 },
 {
  id: 7,
  title: 'Kellogy Noodles',
  image: category2,
  price: 250,
  rating: rating
 }
]


export default products;