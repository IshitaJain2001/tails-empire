import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState= {
    listofItems:["aquarium","filter","water filter","air filter","husky","dog","cat","shepherd"],
    wordsearched:[],

}
const reducerfn=(state=initialState,action)=>{
switch(action.type){

          case "SEARCH_ITEMS":
            if(action.payload){
              const filteredItems = state.listofItems.filter((item) =>
                item.toLowerCase().includes(action.payload.toLowerCase())
              );
              return {
                ...state,
                wordsearched: filteredItems,
              };
            }
            return {
              ...state,
              wordsearched: [],
            };
           
      
          default:
          
           return state
        }
      };
 const store=createStore(reducerfn)

export const StoreProvider=({children})=>{
   return <Provider store={store}>{children}</Provider>
}





