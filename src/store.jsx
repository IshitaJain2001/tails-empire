import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState= {
    listofItems:["aquarium","filter","water filter","air filter","husky","dog","cat","shepherd","shitzu","dog collar","collar","collars","dog collars","dogs","cat collars","cats","bowls","dog bowls","cat bowls",
      "leash","bowl","tub","bath tub"
    ],
    wordsearched:[],
itemCount:0
}
const reducerfn=(state=initialState,action)=>{
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

           
            
           
      
          default: return state
        }
      };
 const store=createStore(reducerfn)

export const StoreProvider=({children})=>{
   return <Provider store={store}>{children}</Provider>
}





