



import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState= {
    listofItems:["aquarium","filter","water filter","air filter","husky","dog","cat","shepherd","shitzu","dog collar","collar","collars","dog collars","dogs","cat collars","cats","bowls","dog bowls","cat bowls",
      "leash","bowl","tub","bath tub"
    ],
    wordsearched:[],
itemCount:0,
    isHome:false,
    isBack:false,
    productadded:[],
    productprices:[],
userAdded:"",
isRegistered:false,
}
const reducerfn=(state=initialState,action)=>{
  console.log(action)
  
switch(action.type){
          case "SEARCH_ITEMS":
            const searched= action.payload.trim()
            if(searched === "" ){
          return {
                ...state,
                wordsearched: [],
              };
              
             
            }


  const filteredItems = state.listofItems.filter((item) =>
    item.toLowerCase().includes(searched.toLowerCase())
  );
  return {
    ...state,
    wordsearched: filteredItems,
  };

  case "NAVIGATOR":
    return{
      ...state,
      isHome:action.payload.isHome,
      isBack:action.payload.isBack,
    }

           
        case "ITEM_ADDED"   : return{
          ...state,
          itemCount:state.itemCount+1,
          productadded:  [...state.productadded, action.payload.item],
          productprices:  [...state.productprices, action.payload.pay],
        } 

     case 'user registered':return{
      ...state,
      userAdded:action.payload,
      isRegistered:true
     }
          default: return state
        }
      };

 const store=createStore(reducerfn)

export const StoreProvider=({children})=>{
   return <Provider store={store}>{children}</Provider>
}







