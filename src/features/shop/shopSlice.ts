import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  [x: string]: any;
}

export interface Category {
  [x: string]: any;
}

export interface Brand {
  [x: string]: any;
}

export interface Tag {
  [x: string]: any;
}

interface ShopState {
  currentProduct: Product;
  categories: Category[];
  brands: Brand[];
  tags: Tag[];
}

// Define the initial state using that type
const initialState: ShopState = {
  currentProduct: {},
  categories: [],
  brands: [],
  tags: []
};

export const shopSlice = createSlice({
  name: 'shop',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentProduct: (
      state: ShopState,
      action: PayloadAction<Product>
    ): void => {
      state.currentProduct = action.payload;
    },
    setCategories: (
      state: ShopState,
      action: PayloadAction<Category[]>
    ): void => {
      state.categories = action.payload;
    },
    setBrands: (state: ShopState, action: PayloadAction<Brand[]>): void => {
      state.brands = action.payload;
    },
    setTags: (state: ShopState, action: PayloadAction<Tag[]>): void => {
      state.tags = action.payload;
    }
  }
});

export const { setCurrentProduct, setCategories, setBrands, setTags } =
  shopSlice.actions;

export default shopSlice.reducer;
