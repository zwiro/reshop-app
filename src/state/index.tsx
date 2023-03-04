import { createContext, useReducer } from "react"
import data from "../shopData"
import { DataTypes } from "../shopData"

type State = {
  items: DataTypes[]
  cart: DataTypes[]
  filters: string[]
}

type Action =
  | { type: "ADD_TO_CART"; payload: { item: DataTypes } }
  | { type: "REMOVE_FROM_CART"; payload: { itemId: number } }
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
  SORT: "SORT",
  ADD_FILTER: "ADD_FILTER",
  REMOVE_FILTER: "REMOVE FILTER",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.itemId
      )
      return {
        ...state,
        cart: updatedCart,
      }
    case "SORT":
      const sortedItems = [...state.items].sort((a, b) => {
        if (action.payload.option === "priceDesc") {
          return a.price - b.price
        } else if (action.payload.option === "priceAsc") {
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
  items: DataTypes[]
  cart: DataTypes[]
  filters: string[]
  addToCart: (item: DataTypes) => void
  removeFromCart: (itemId: number) => void
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
  sortBy: () => {},
  addFilter: () => {},
  removeFilter: () => {},
})

type Props = {
  children: React.ReactNode
}

export const ItemsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (item: DataTypes) => {
    dispatch({ type: "ADD_TO_CART", payload: { item } })
  }

  const removeFromCart = (itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { itemId } })
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
    sortBy,
    addFilter,
    removeFilter,
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
