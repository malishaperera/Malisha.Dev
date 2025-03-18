import Image from "next/image";
import bg from "../../../../public/background/about3.jpeg";
import ProjectList from "@/components/projects";
import { projectsData } from "@/app/data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/staff"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      {/* this home background img */}
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

        <div className="sticky top-0 z-50 bg-gradient-to-b to-transparent backdrop-blur-sm border-b border-gray-800">
            <h1 className="text-4xl sm:text-5xl font-bold  text-center py-8 drop-shadow-lg">
                My All Projects
            </h1>

        </div>

        <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          {/* <Staff /> */}
        </RenderModel>
      </div>
    </>
  );
}