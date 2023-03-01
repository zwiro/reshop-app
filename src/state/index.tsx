import { createContext, useReducer } from "react"
import { DataTypes } from "../shopData"

// enum ItemsActionType {
//   ADD_ITEM = "ADD_ITEM",
//   REMOVE_ITEM = "REMOVE_ITEM",
// }

// interface ItemsAction {
//   type: ItemsActionType
//   payload: { item: DataTypes }
// }

type State = {
  items: DataTypes[]
}

type Action =
  | { type: "ADD_ITEM"; payload: { item: DataTypes } }
  | { type: "REMOVE_ITEM"; payload: { itemId: number } }

const initialState: State = {
  items: [],
}

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload.item],
      }
    case "REMOVE_ITEM":
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.itemId
      )
      return {
        items: updatedItems,
      }
    default:
      return state
  }
}

type ItemsContextType = {
  items: DataTypes[]
  addItem: (item: DataTypes) => void
  removeItem: (itemId: number) => void
}

const ItemsContext = createContext<ItemsContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
})

type Props = {
  children: React.ReactNode
}

export const ItemsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (item: DataTypes) => {
    dispatch({ type: "ADD_ITEM", payload: { item } })
  }

  const removeItem = (itemId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { itemId } })
  }

  const value = {
    items: state.items,
    addItem,
    removeItem,
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
