
import { GeneralContext } from "../../context/GeneralContext";
import React,{ useState,useContext,useEffect } from "react";
import { getFirestore1 } from "../../Services/getFirestore1";
import { SELECT_ODONT } from "../actions/list.actions";
import { UPDATE_ODONT } from "../actions/list.actions";
const initialState= {
        odontologos: [],
        selected:null,
        filteredOdont:[],

}

const ListReducer = (state=initialState,action) => {
    switch(action.type){
        case SELECT_ODONT:
            return{
                ...state,
                filteredOdont: state.odontologos.filter(o=> o.id==action.odontID)
            };
        case UPDATE_ODONT:
            return{
                ...state,
                odontologos: action.list,
            };
        default:
            return state;

    }
    return state;
}
export default ListReducer;