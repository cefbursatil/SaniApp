
import { GeneralContext } from "../../context/GeneralContext";
import React,{ useState,useContext,useEffect } from "react";
import { getFirestore1 } from "../../Services/getFirestore1";
const initialState= () =>{
    const [result,setResult] = useState([]);
    const {setLoading} = useContext(GeneralContext)
    console.log("Yeah");

    const task = new Promise((resolve,reject) => {
        
            const db =getFirestore1();
            console.log(db)
            db.collection('odontologos').get()
            .then(resp => resolve(resp.docs.map(it => ({img:"https://fabriziodellapollaodontologo.com/wp-content/uploads/2020/01/001-1-%C2%BFA-Qu%C3%A9-Se-Dedica-Un-Odont%C3%B3logo-1024x683.jpg",id2:it.id,...it.data()}))))
           
        //acá indico que quiero que este setTimeout demore 3 segundos
    })
    
    useEffect(()=> {
        
        if(!result){
            setLoading(true)
            task.then((res,err)=>{
                if(err) console.log(err)
                setResult(res)
                setLoading(false);
                console.log("RESULTADO")
                console.log(res)
            }).catch((error) =>{
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
    },[result]);

    const final={
        odontologos: result,
        selected:null,
        filteredOdont:[],
    };
    return final;
}

const ListReducer = (state=initialState,action) => {
    console.log("Yeah");
    console.log(state);
    return state;
}
export default ListReducer;