import Header from "@/components/Header";
import { createContext, useContext, useEffect, useState } from "react";

// type StoreContextType = {
//     options: { value: number; label: string }[];
// };
export const StoreContext=createContext<any>(undefined);

const StoreContextProvider=({children}:{
    children: React.ReactNode;
  })=>{

       const [links, setlinks]=useState<string>("");
       const [details,setDetails]=useState([{}]);
       const [hospitalList,setHospitalList]=useState();
       const [login,setLogin]=useState(false);

       const [options,setOptions]=useState<{ value: number; label: string }[]>( [{ value: 1, label: "ICICI Lamboard GIC LTD" },
        { value: 2, label: "IFFCO-TOKIO"}, 
        { value: 3, label: "Indian Bank Association [In National Insurance Company]"}, 
        { value: 4, label: "Indian Bank Association [In United India Insurance]"}, 
        { value: 5, label: "National Insurance Company"}, 
        { value: 6, label: "New India Insurance"}, 
        { value: 7, label: "Royal Sundaram"}, 
        { value: 8, label: "SBI General Insurance"}, 
        { value: 9, label: "Star Health Insurance"}, 
        { value: 10, label: "TATA AIG General Insurance"}, 
        { value: 11, label: "The Oriental Insurance Company Ltd"}, 
        { value: 12, label: "United India Insurance"}
        ])

        const [corporateBankOptions,setCorporateBankOptions]=useState<{ value: number; label: string }[]>( [{ value: 1, label: "ICICI Lamboard GIC LTD" },
            { value: 2, label: "IFFCO-TOKIO"}, 
            { value: 3, label: "Indian Bank Association [In National Insurance Company]"}, 
            { value: 4, label: "Indian Bank Association [In United India Insurance]"}, 
            { value: 5, label: "National Insurance Company"}, 
            { value: 6, label: "New India Insurance"}, 
            { value: 7, label: "Royal Sundaram"}, 
            { value: 8, label: "SBI General Insurance"}, 
            { value: 9, label: "Star Health Insurance"}, 
            { value: 10, label: "TATA AIG General Insurance"}, 
            { value: 11, label: "The Oriental Insurance Company Ltd"}, 
            { value: 12, label: "United India Insurance"}
            ])

    const contextValue = {options,links,setlinks,details,setDetails,login,setLogin,hospitalList,setHospitalList} ;

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;

export function useAppContext(){
    return useContext(StoreContext);
}