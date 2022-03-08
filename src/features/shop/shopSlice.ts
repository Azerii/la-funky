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

export interface Alert {
  msg: string;
  type: string;
  status: Boolean;
}

export interface Location {
  id: string;
  name: string;
  price: Boolean;
}

export interface DeliveryAddress {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  deliveryLocationId?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

interface ShopState {
  currentProduct: Product;
  categories: Category[];
  brands: Brand[];
  tags: Tag[];
  loading: Boolean;
  locations: Location[];
  deliveryAddress: DeliveryAddress;
  orderDetails: any;
  alert: Alert;
}

// Define the initial state using that type
const initialState: ShopState = {
  currentProduct: {},
  categories: [],
  brands: [],
  tags: [],
  loading: false,
  locations: [],
  deliveryAddress: {},
  orderDetails: {},
  alert: {
    msg: '',
    type: '',
    status: false
  }
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
    },
    setLocations: (
      state: ShopState,
      action: PayloadAction<Location[]>
    ): void => {
      state.locations = action.payload;
    },
    setLoading: (state: ShopState, action: PayloadAction<Boolean>): void => {
      state.loading = action.payload;
    },
    setDeliveryAddress: (
      state: ShopState,
      action: PayloadAction<DeliveryAddress>
    ): void => {
      state.deliveryAddress = action.payload;
    },
    setOrderDetails: (state: ShopState, action: PayloadAction<any>): void => {
      state.orderDetails = action.payload;
    },
    setAlert: (state: ShopState, action: PayloadAction<Alert>): void => {
      state.alert = action.payload;
    }
  }
});

export const {
  setCurrentProduct,
  setCategories,
  setBrands,
  setTags,
  setLocations,
  setDeliveryAddress,
  setOrderDetails
} = shopSlice.actions;

export default shopSlice.reducer;
