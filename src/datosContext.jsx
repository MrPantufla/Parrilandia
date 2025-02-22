import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const DatosContext = createContext();

function useDatos() {
    return useContext(DatosContext);

}

function DatosProvider({ children }) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        console.log("fetch")
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRu-2W5ATld73U1eu-64XFSz1xBv92IbJeLmsig0WTiQiGA-xyNXVDEMbxAZxDVhtuYjdQPr0TKMhmQ/pub?gid=0&single=true&output=csv")
            .then(response => response.text())
            .then(csvText => {
                const rows = csvText.split("\n").map(row => row.split(","));

                setRows(rows.slice(1));
            })
            .catch(error => console.error("Error al obtener los datos:", error));

    }, [])

    return (
        <DatosContext.Provider value={{
            rows
        }}>
            {children}
        </DatosContext.Provider>
    );
}

export { DatosContext, useDatos, DatosProvider };