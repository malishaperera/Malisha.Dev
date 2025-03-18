import Image from "next/image";
import bg from "../../public/background/back1.jpeg";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Background Image */}
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-20"
      />

      {/* Navigation */}
      <div className="w-full">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center px-4">
        {/* Animated Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-600 mb-4 animate-float">
          Hello🤖
        </h1>
        
        {/* Animated Title */}
        <p className="text-2xl md:text-4xl text-cyan-500 animate-fade-in">
          Welcome to My Portfolio
        </p>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* {[...Array(50)].map((_, i) => (*/}
          {/*  <div*/}
          {/*    key={i}*/}
          {/*    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle"*/}
          {/*    style={{*/}
          {/*      left: `${Math.random() * 100}%`,*/}
          {/*      top: `${Math.random() * 100}%`,*/}
          {/*      animationDelay: `${i * 0.1}s`*/}
          {/*    }}*/}
          {/*  />*/}
          {/*/!*))}*!///blue fire*/}
          
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-15 -z-20" />
    </main>
  );
}