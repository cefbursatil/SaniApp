import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('odonts.db')

export const init = () => {
    return promise = new Promise ((resolve,reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS odonts (
                    id INTEGER PRIMARY KEY NOT NULL,
                    nombre TEXT NOT NULL,
                    image TEXT NOT NULL,
                    especialidad TEXT NOT NULL,
                    direccion TEX NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
                [],
                () => { resolve()},
                (_,err) => { reject(err)}
            );
        })
    })
}

export const insertOdontList = (
    odontArray
) => {
    console.log("YEAH1")
    return promise = new Promise ((resolve,reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM odonts',
                [],
                () => { resolve()},
                (_,err) => { reject(err)}
            );
            console.log("YEAH")
            odontArray.map((item =>            
                tx.executeSql(
                    `INSERT INTO odonts (nombre, image, especialidad, direccion, lat, lng)
                     VALUES (?,?,?,?,?,?)`,
                    [item.nombre,item.image,item.especialidad,item.direccion,item.lat,item.long],
                    () => { resolve()},
                    (_,err) => { reject(err)}
                )
            ))
        })
        
    })
    
}

export const fetchData = () => {
    return promise = new Promise ((resolve,reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
               `SELECT * FROM odonts`,
               [],
               () => { resolve()},
               (_,err) => { reject(err)}     
            )})})}