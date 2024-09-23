import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState= {
    listofItems:["aquarium","filter","water filter","air filter","husky","dog","cat","shepherd"],
    wordsearched:[],

}
const reducerfn=(state=initialState,action)=>{
switch(action.type){

          case "SEARCH_ITEMS":
           
            const filteredItems = state.listofItems.filter((item) =>
              item.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
              ...state,
              wordsearched: filteredItems, // Update searched words list
            };
      
          default:
            return state;
        }
      };
 const store=createStore(reducerfn)

export const StoreProvider=({children})=>{
   return <Provider store={store}>{children}</Provider>
}



