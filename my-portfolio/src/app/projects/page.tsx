import { Projects } from "@/components/projects/projects.component";

export default function ProjectsPage(){
	return <div className="bg-container-overlay-custom">
    <div className="container-fluid py-8">
      <div className="container mx-auto text-center">
        <h1 className="sub-heading lg:text-6xl text-2xl">My Projects</h1>
        <div className="md:px-0 px-8 py-10 mb-10">
          <Projects/>
        </div>
      </div>
    </div>
  </div>
}