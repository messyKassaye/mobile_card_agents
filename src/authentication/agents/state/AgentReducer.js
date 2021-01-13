import {combineReducers} from "redux";
import BankAccountReducer from "./reducer/BankAccountReducer";
import BankReducer from "./reducer/BankReducer";
import CardPriceReducer from "./reducer/CardPriceReducer";
import CardRequestPaymentReducer from "./reducer/CardRequestPaymentReducer";
import CardRequestReducer from "./reducer/CardRequestReducer";
import CardsReducer from "./reducer/CardsReducer";
import CardTypeReducer from "./reducer/CardTypeReducer";
import CompanyReducer from "./reducer/CompanyReducer";
import PrintReducer from "./reducer/PrintReducer";

export default combineReducers({
    cardTypeReducer:CardTypeReducer,
    printReducer:PrintReducer,
    bankAccountReducer:BankAccountReducer,
    cardRequestReducer:CardRequestReducer,
    cardPriceReducer:CardPriceReducer,
    cardRequestPaymentReducer:CardRequestPaymentReducer,
    cardsReducer:CardsReducer,
    companyReducer:CompanyReducer
})