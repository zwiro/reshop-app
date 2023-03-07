export type DataType = {
  id: number
  category: string
  subcategory?: string
  product: string
  name: string
  sizes: string[]
  description: string
  colors: string[]
  images: string[]
  price: number
}

export type CartItem = {
  id: number
  name: string
  category: string
  subcategory?: string
  product: string
  size: string
  color: string
  image: string
  price: number
  count: number
}

export type SubcategoriesType = {
  name: string
  path: string
  isChecked: boolean
}

export type CategoriesType = {
  name: string
  subcategories?: SubcategoriesType[]
  path?: string
  isChecked?: boolean
}
