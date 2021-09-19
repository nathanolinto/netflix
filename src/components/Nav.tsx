import { useState, useEffect } from "react";

export function Nav() {
    const [show, setShow] = useState(false);

    function transitionNavBar() {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])


    return (
        <div
            className={`flex fixed top-0 px-5 py-5 w-full z-10 transition-all ease-in duration-500 ${show && "bg-black"}`}
        >  {/* nav */}
            <div className="flex justify-between w-full "> {/* nav contents */}

                <img
                    className="pl-5 cursor-pointer"
                    style={{ width: "80px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt=""
                />


                <img
                    className="cursor-pointer"
                    style={{ width: "30px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />

            </div>
        </div>
    )
}

// export function Nav() {
//     return (
//         <div
//             className="flex fixed top-0 p-5 w-full z-10 bg-black"
//             style={{ height: "30px" }}
//         >  {/* nav */}
//             <div className="flex justify-between w-full"> {/* nav contents */}
//                 <img
//                     className="fixed left-0  object-contain pl-5 cursor-pointer"
//                     style={{ width: "80px" }}
//                     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
//                     alt=""
//                 />

//                 <img
//                     className="fixed right-5 cursor-pointer"
//                     style={{ width: "30px" }}
//                     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//                     alt=""
//                 />
//             </div>
//         </div>
//     )
// }

