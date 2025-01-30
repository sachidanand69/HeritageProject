// import {Marquee} from "@/components/Marquee";
//
// const NavigationBar = () =>{
//     return (
//         <div className="grid place-content-center">
//             <Marquee gap={48}>
//                 <div className="flex gap-12">
//                     <p className="text-4xl font-bold">Welcome to Heritage Health TPA </p>
//                     {/*<p className="text-4xl font-bold text-shadow shadow-red-500 text-black">*/}
//                     {/*    Heritage Health TPA*/}
//                     {/*</p>*/}
//                 </div>
//             </Marquee>
//              {/*<Marquee gap={48} direction={1} speed={50}>*/}
//              {/*    <div className="flex gap-12">*/}
//              {/*        <p className="text-7xl font-bold">Framer</p>*/}
//             {/*        <p className="text-7xl font-bold text-shadow shadow-red-500 text-black">*/}
//              {/*            Motion*/}
//              {/*        </p>*/}
//           {/*    </div>*/}
//              {/*</Marquee>*/}
//         </div>
//     )
// }
//
// export default NavigationBar;

import { Marquee } from "@/components/Marquee";

const NavigationBar = () => {
    return (
        <div className="flex place-content-center">
            {/* Box wrapper for the Marquee */}
            <div className="border-4 border-gray-800 rounded-md shadow-lg overflow-hidden" style={{backgroundColor:"black",color:"white", width: "80%" }}>
                <Marquee gap={48}>
                    <div className="flex gap-12">
                        <p className="text-2xl font-bold">Welcome to Heritage Health TPA </p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default NavigationBar;
