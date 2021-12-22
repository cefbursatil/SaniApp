export const SELECT_ODONT ='SELECT_ODONT';
export const UPDATE_ODONT ='UPDATE_ODONT';
export const LOAD_ODONT ='LOAD_ODONT';
import { insertOdontList } from "../../db";
export const selectedOdont = (id) => ({
    type: SELECT_ODONT,
    odontID: id,
})

// export const UpdateOdont = (odont) => ({
//     type: UPDATE_ODONT,
//     list: odont,
// }
// )
export const UpdateOdont = (odont) => {
    console.log("BEFORE DISPATCH RETURN");
    return async dispatch => {
        console.log("BEFORE DISPATCH0");
        try {

            
            console.log("BEFORE DISPATCH");
            const result = await insertOdontList(
                odont
            );
            console.log(result);
            dispatch({
                type: UPDATE_ODONT,
                list: odont,
            })
        }catch(err) {
            console.log(err.message);
            throw err;
        }
    };
}
export const loadOdonts = () => {
    return async dispatch => {
        try {
            const result = await fetchData()
            console.log(result)
            dispatch({
                type: LOAD_ODONT,
                list: result.rows._array,
            })
        } catch(err) { 
            throw err;
        }
    }
}
