import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { GetProductData } from '../apis/products'
import { FETCH_STATUS } from "../constant";

export interface ProductState {
  status: FETCH_STATUS;
  data: GetProductData | null;
}

const initialState: ProductState = {
  status: FETCH_STATUS.SUCCESS,
  data: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  }
});

export const dataProducts = (state: RootState) => state.product.data;

export const { setData } = productSlice.actions;
export default productSlice.reducer;