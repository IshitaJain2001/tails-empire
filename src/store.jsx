



// import { Provider } from "react-redux";
// import { createStore } from "redux";
// const initialState= {
//     listofItems:["aquarium","filter","water filter","air filter","husky","dog","cat","shepherd","shitzu","dog collar","collar","collars","dog collars","dogs","cat collars","cats","bowls","dog bowls","cat bowls",
//       "leash","bowl","tub","bath tub"
//     ],
//     wordsearched:[],
// itemCount:0,
//     isHome:false,
//     isBack:false,
//     productadded:[],
//     productprices:[],
// userAdded:"",
// isRegistered:false,
// }
// const reducerfn=(state=initialState,action)=>{
//   console.log(action)
  
// switch(action.type){
//           case "SEARCH_ITEMS":
//             const searched= action.payload.trim()
//             if(searched === "" ){
//           return {
//                 ...state,
//                 wordsearched: [],
//               };
              
             
//             }


//   const filteredItems = state.listofItems.filter((item) =>
//     item.toLowerCase().includes(searched.toLowerCase())
//   );
//   return {
//     ...state,
//     wordsearched: filteredItems,
//   };

//   case "NAVIGATOR":
//     return{
//       ...state,
//       isHome:action.payload.isHome,
//       isBack:action.payload.isBack,
//     }

           
//         case "ITEM_ADDED"   : return{
//           ...state,
//           itemCount:state.itemCount+1,
//           productadded:  [...state.productadded, action.payload.item],
//           productprices:  [...state.productprices, action.payload.pay],
//         } 

//      case 'user registered':return{
//       ...state,
//       userAdded:action.payload,
//       isRegistered:true
//      }
//           default: return state
//         }
//       };

//  const store=createStore(reducerfn)

// export const StoreProvider=({children})=>{
//    return <Provider store={store}>{children}</Provider>
// }


import { Provider } from "react-redux";
import { createStore } from "redux";

// Load Redux state from localStorage (if available)
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.warn("Could not load state from localStorage:", error);
    return undefined;
  }
};

// Save Redux state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.warn("Could not save state to localStorage:", error);
  }
};

// Initial State
const initialState = {
  listofItems: [
    "aquarium", "filter", "water filter", "air filter", "husky", "dog", "cat",
    "shepherd", "shitzu", "dog collar", "collar", "collars", "dog collars",
    "dogs", "cat collars", "cats", "bowls", "dog bowls", "cat bowls", "leash",
    "bowl", "tub", "bath tub"
  ],
  wordsearched: [],
  itemCount: 0,
  isHome: false,
  isBack: false,
  productadded: [],
  productprices: [],
  userAdded: "",
  isRegistered: false,
};

// Reducer function
const reducerfn = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SEARCH_ITEMS":
      const searched = action.payload.trim();
      if (searched === "") {
        return { ...state, wordsearched: [] };
      }
      const filteredItems = state.listofItems.filter((item) =>
        item.toLowerCase().includes(searched.toLowerCase())
      );
      return { ...state, wordsearched: filteredItems };

    case "NAVIGATOR":
      return {
        ...state,
        isHome: action.payload.isHome,
        isBack: action.payload.isBack,
      };

    case "ITEM_ADDED":
      return {
        ...state,
        itemCount: state.itemCount + 1,
        productadded: [...state.productadded, action.payload.item],
        productprices: [...state.productprices, action.payload.pay],
      };

    case "user registered":
      return {
        ...state,
        userAdded: action.payload,
        isRegistered: true,
      };

    default:
      return state;
  }
};

// Create Redux store with persisted state (if available)
const persistedState = loadFromLocalStorage();
const store = createStore(reducerfn, persistedState);

// Subscribe to store updates to save to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

// StoreProvider component to wrap the app with Redux store
export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};





