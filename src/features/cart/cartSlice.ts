import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  image: string;
  name: string;
  quantityAvailable: number;
  price: number;
  quantity: number;
  total: number;
  variants?: {
    size?: string;
    color?: string;
  };
}

interface CartState {
  items: CartItem[];
  subTotal: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  subTotal: 0
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

      let tempSubtotal = 0;

      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;
        state.items[index].total =
          state.items[index].price * state.items[index].quantity;

        state.items.forEach((item: CartItem) => {
          tempSubtotal += item.total;
        });

        state.subTotal = tempSubtotal;
        return;
      }

      state.items.push(action.payload);

      state.items.forEach((item: CartItem) => {
        tempSubtotal += item.total;
      });

      state.subTotal = tempSubtotal;
    },
    removeItem: (state: CartState, action: PayloadAction<number>): void => {
      const index: number = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (index == -1) {
        return;
      }

      state.items.splice(index, 1);

      let tempSubtotal = 0;

      state.items.forEach((item: CartItem) => {
        tempSubtotal += item.total;
      });

      state.subTotal = tempSubtotal;
    },
    incrementQuantity: (
      state: CartState,
      action: PayloadAction<number>
    ): void => {
      const temp: CartItem | undefined = state.items.find(
        (item) => item.id === action.payload
      );

      if (temp && temp.quantity < temp.quantityAvailable) {
        const index: number = state.items.findIndex(
          (item) => item.id === action.payload
        );

        state.items[index].quantity += 1;
        state.items[index].total =
          state.items[index].price * state.items[index].quantity;

        let tempSubtotal = 0;

        state.items.forEach((item: CartItem) => {
          tempSubtotal += item.total;
        });

        state.subTotal = tempSubtotal;
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
        const index: number = state.items.findIndex(
          (item) => item.id === action.payload
        );

        state.items[index].quantity -= 1;
        state.items[index].total =
          state.items[index].price * state.items[index].quantity;

        let tempSubtotal = 0;

        state.items.forEach((item: CartItem) => {
          tempSubtotal += item.total;
        });

        state.subTotal = tempSubtotal;
      }
    }
  }
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
