import { createContext, useReducer } from "react"
import data from "../shopData"
import { DataTypes } from "../shopData"

type State = {
  items: DataTypes[]
  cart: DataTypes[]
}

type Action =
  | { type: "ADD_TO_CART"; payload: { item: DataTypes } }
  | { type: "REMOVE_FROM_CART"; payload: { itemId: number } }
  | { type: "SORT"; payload: { option: string } }

const initialState: State = {
  items: data,
  cart: [],
}

const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SORT: "SORT",
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
    default:
      return state
  }
}

type ItemsContextType = {
  items: DataTypes[]
  cart: DataTypes[]
  addToCart: (item: DataTypes) => void
  removeFromCart: (itemId: number) => void
  sortBy: (option: string) => void
}

export const ItemsContext = createContext<ItemsContextType>({
  items: data,
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  sortBy: () => {},
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

  const value = {
    items: state.items,
    cart: state.cart,
    addToCart,
    removeFromCart,
    sortBy,
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
