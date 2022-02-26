import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

interface Product {
  image: string;
  name: string;
  quantityAvailable: number;
}

interface CartItem {
  id: number;
  product: Product;
  price: number;
  quantity: number;
  total: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateItems: (
      state: CartState,
      action: PayloadAction<CartItem[]>
    ): void => {
      state.items = action.payload;
    },
    addItem: (state: CartState, action: PayloadAction<CartItem>): void => {
      const index: number = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.items[index].quantity += 1;

        return;
      }

      state.items.push(action.payload);
    },
    removeItem: (state: CartState, action: PayloadAction<number>): void => {
      const index: number = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (index == -1) {
        return;
      }

      state.items.splice(action.payload, 1);
    },
    incrementQuantity: (
      state: CartState,
      action: PayloadAction<number>
    ): void => {
      const temp: CartItem | undefined = state.items.find(
        (item) => item.id === action.payload
      );

      if (temp && temp.quantity < temp.product.quantityAvailable) {
        temp.quantity = temp?.quantity + 1;
      }
    },
    decrementQuantity: (
      state: CartState,
      action: PayloadAction<number>
    ): void => {
      const temp: CartItem | undefined = state.items.find(
        (item) => item.id === action.payload
      );

      if (temp && temp.quantity > 1) {
        temp.quantity = temp?.quantity - 1;
      }
    }
  }
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
