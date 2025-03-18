// // This component fire circle create
// "use client"
// import React, { useEffect, useState } from "react";

// const createFirefly = () => ({
//     id: Math.random(),
//     top: `${Math.random()*100}%`,
//     left: `${Math.random()*100}%`,
//     animationDuration: `${Math.random()*5 + 5}s`,
// })

// const FireFliesBackground = () => {

//     const [fireflies, setFireflies] = useState([]);

//     useEffect(() => {
//         const addFireflyPeriodically = () =>{
//             const newFirefly = createFirefly();
//             setFireflies(currentFireflies => 
//                 [
//                     ...currentFireflies.slice(-14),
//                      newFirefly
//                 ]);
//         }
//         const interval = setInterval(addFireflyPeriodically, 1000);
//         return () => clearInterval(interval);
//     },[])

//     return (
//         <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//             {
//                 fireflies.map((firefly)=>{
//                     return(
//                         <div
//                          key={firefly.id}
//                         className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
//                         style={{
//                             top: firefly.top,
//                             left: firefly.left,
//                             animation:`move ${firefly.animationDuration} infinite alternate`
//                         }}
//                         ></div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default FireFliesBackground;





"use client"
import React, { useEffect, useState } from "react";

const createBinary = () => ({
  id: Math.random(),
  top: `${-10}%`, // Start above the screen
  left: `${Math.random() * 100}%`,
  // animationDuration: `${Math.random() * 3 + 3}s`, // Vary animation speed
  animationDuration: `${Math.random() * 8 + 5}s`,

  value: Math.random() > 0.5 ? '0' : '1', // Random 0 or 1
});

const BinaryBackground = () => {
  const [binaries, setBinaries] = useState([]);

  useEffect(() => {
    const addBinary = () => {
      const count = Math.floor(Math.random() * 3) + 1; // Add 1-3 binaries at a time
      const newBinaries = Array.from({ length: count }, createBinary);
      
      setBinaries(current => [
        ...current.slice(-50), // Keep maximum 50 elements
        ...newBinaries,
      ]);
    };

    const interval = setInterval(addBinary, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {binaries.map((binary) => (
        <div
          key={binary.id}
          className="absolute text-green-500 opacity-70 font-mono text-sm glitch-text"
          style={{
            top: binary.top,
            left: binary.left,
            animation: `fall ${binary.animationDuration} linear infinite`,
            textShadow: '0 0 5px #00ff00'
          }}
        >
          {binary.value}
        </div>
      ))}
      
      <style jsx global>{`
        // @keyframes fall {
        //   0% {
        //     transform: translateY(-100%);
        //     opacity: 0;
        //   }
        //   3% {
        //     opacity: 1;
        //   }
        //   90% {
        //     opacity: 1;
        //   }
        //   100% {
        //     transform: translateY(110vh);
        //     opacity: 0;
        //   }
        // }

        // .glitch-text {
        //   animation: glitch 1s linear infinite;
        // }

        // @keyframes glitch {
        //   2% {
        //     transform: translate(2px, 0);
        //   }
        //   4% {
        //     transform: translate(-1px, 0);
        //   }
        //   6% {
        //     transform: translate(0, 0);
        //   }
        //   32% {
        //     transform: translate(0, 0);
        //   }
        //   34% {
        //     transform: translate(1px, 0);
        //   }
        //   36% {
        //     transform: translate(-2px, 0);
        //   }
        //   38% {
        //     transform: translate(0, 0);
        //   }
        // }
        @keyframes fall {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        5% {
          opacity: 1;
        }
        95% {
          opacity: 1;
        }
        100% {
          transform: translateY(110vh);
          opacity: 0;
        }
      }

      `}</style>
    </div>
  );
};

export default BinaryBackground;