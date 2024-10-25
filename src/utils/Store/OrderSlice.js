import { createSlice } from "@reduxjs/toolkit";

const OrderlistSlice = createSlice({
    name: "OrderList",
    initialState: {
        orderlist: []
    },
    reducers: {
        getOrderList: (state, action) => {
            const obj = state.orderlist.find(item => item._id === action.payload._id);
            if(!obj){
                state.orderlist.push(action.payload);
            }
        }
    }
})

export const { getOrderList } = OrderlistSlice.actions;
export default OrderlistSlice.reducer;