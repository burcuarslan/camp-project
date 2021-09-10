import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer   //tüm reducerlerin bir yerde toplayıp app'ye hepsini tek tek eklemek zorunda kalmadan rootReducer dosyasını App'ye ekleyerek işimizi hallederiz
})

export default rootReducer;