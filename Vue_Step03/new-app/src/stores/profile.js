import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//States
//this is the state of the module
export const store=new Vuex.Store({
    state:{
        profiles:[]

    },
    getters:{
        //Getters
        //returns some particular data from the store
        GET_PROFILES:state=>{
            return state.profiles;

        }


    },
    mutations:{
       //Mutations
        //write data to store or mutate state
        SET_PROFILES(state,profiles){
            state.profiles=profiles;
        },
        ADD_PROFILE(state,profile){
            state.profiles.push(profile);
        }
    },
    actions:{
        //Actions
        //any functinality before mutating
        LOAD_PROFILES({commit},api){
           api.get("profile").then(res=>{
               commit("SET_PROFILES",res.data)
            
        });

    }
}

});










