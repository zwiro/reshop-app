import { createContext, useReducer } from "react"
import { CartItem, DataType } from "../types"
import data from "../shopData"

type State = {
  items: DataType[]
  cart: CartItem[]
  filters: string[]
}

type Action =
  | { type: "ADD_TO_CART"; payload: { item: CartItem } }
  | {
      type: "REMOVE_FROM_CART"
      payload: { itemId: number; color: string; size: string }
    }
  | {
      type: "REMOVE_ONE_FROM_CART"
      payload: { itemId: number; color: string; size: string }
    }
  | {
      type: "ADD_ONE_TO_CART"
      payload: { itemId: number; color: string; size: string }
    }
  | { type: "SORT"; payload: { option: string } }
  | { type: "ADD_FILTER"; payload: { filter: string } }
  | { type: "REMOVE_FILTER"; payload: { filter: string } }

const initialState: State = {
  items: data,
  cart: [],
  filters: [],
}

const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  ADD_ONE_TO_CART: "ADD_ONE_TO_CART",
  SORT: "SORT",
  ADD_FILTER: "ADD_FILTER",
  REMOVE_FILTER: "REMOVE FILTER",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        !state.cart.find(
          (item) =>
            item.id === action.payload.item.id &&
            item.color === action.payload.item.color &&
            item.size === action.payload.item.size
        )
      ) {
        return {
          ...state,
          cart: [...state.cart, action.payload.item],
        }
      } else {
        const updatedCart = state.cart.map((item) => {
          if (
            item.id === action.payload.item.id &&
            item.color === action.payload.item.color &&
            item.size === action.payload.item.size
          ) {
            return {
              ...item,
              count: item.count + 1,
            }
          } else {
            return item
          }
        })
        return {
          ...state,
          cart: updatedCart,
        }
      }
    case "REMOVE_FROM_CART":
      if (action.payload) {
        const updatedCart = state.cart.filter(
          (item) =>
            item.id !== action.payload.itemId ||
            item.color !== action.payload.color ||
            item.size !== action.payload.size
        )
        return {
          ...state,
          cart: updatedCart,
        }
      }
    case "REMOVE_ONE_FROM_CART":
      const updatedCartRemoved = state.cart.map((item) => {
        if (
          item.id === action.payload.itemId &&
          item.color === action.payload.color &&
          item.size === action.payload.size &&
          item.count > 1
        ) {
          return {
            ...item,
            count: item.count - 1,
          }
        } else return item
      })
      return {
        ...state,
        cart: updatedCartRemoved,
      }
    case "ADD_ONE_TO_CART":
      const updatedCartAdded = state.cart.map((item) => {
        if (
          item.id === action.payload.itemId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          return {
            ...item,
            count: item.count + 1,
          }
        } else return item
      })
      return {
        ...state,
        cart: updatedCartAdded,
      }
    case "SORT":
      const sortedItems = [...state.items].sort((a, b) => {
        if (action.payload.option === "priceAsc") {
          return a.price - b.price
        } else if (action.payload.option === "priceDesc") {
          return b.price - a.price
        }
        return 0
      })
      return {
        ...state,
        items: sortedItems,
      }
    case "ADD_FILTER":
      return {
        ...state,
        filters: [...state.filters, action.payload.filter],
      }
    case "REMOVE_FILTER":
      const updatedFilters = state.filters.filter(
        (filter) => filter !== action.payload.filter
      )
      return {
        ...state,
        filters: updatedFilters,
      }
    default:
      return state
  }
}

type ItemsContextType = {
  items: DataType[]
  cart: CartItem[]
  filters: string[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: number, color: string, size: string) => void
  removeOneFromCart: (itemId: number, color: string, size: string) => void
  addOneToCart: (itemId: number, color: string, size: string) => void
  sortBy: (option: string) => void
  addFilter: (filter: string) => void
  removeFilter: (filter: string) => void
}

export const ItemsContext = createContext<ItemsContextType>({
  items: data,
  cart: [],
  filters: [],
  addToCart: () => {},
  removeFromCart: () => {},
  removeOneFromCart: () => {},
  addOneToCart: () => {},
  sortBy: () => {},
  addFilter: () => {},
  removeFilter: () => {},
})

type Props = {
  children: React.ReactNode
}

export const ItemsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: { item } })
  }

  const removeFromCart = (itemId: number, color: string, size: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { itemId, color, size } })
  }

  const removeOneFromCart = (itemId: number, color: string, size: string) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: { itemId, color, size } })
  }

  const addOneToCart = (itemId: number, color: string, size: string) => {
    dispatch({ type: "ADD_ONE_TO_CART", payload: { itemId, color, size } })
  }

  const sortBy = (option: string) => {
    dispatch({ type: "SORT", payload: { option } })
  }

  const addFilter = (filter: string) => {
    dispatch({ type: "ADD_FILTER", payload: { filter } })
  }

  const removeFilter = (filter: string) => {
    dispatch({ type: "REMOVE_FILTER", payload: { filter } })
  }

  const value = {
    items: state.items,
    cart: state.cart,
    filters: state.filters,
    addToCart,
    removeFromCart,
    removeOneFromCart,
    addOneToCart,
    sortBy,
    addFilter,
    removeFilter,
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
