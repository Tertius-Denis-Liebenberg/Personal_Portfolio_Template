import { Acomplishments } from "@/components/home/acomplishments/acomplishments.component";
import { Education } from "@/components/home/education/education.component";
import { Experience } from "@/components/home/experience/experience.component";
import { Skills } from "@/components/home/skills/skills.component";

export default function Home() {
  return <div className="container-fluid bg-stone-950 py-8">
    <div className="container mx-auto text-center">
      <h1 className="sub-heading">About Me</h1>
      <div className="p-14 mb-10">
        <h3 className="description-text text-stone-200">
          I am a friendly and hard-working employee with a strong passion for both my job.
        </h3>
      </div>
      <h1 className="sub-heading">Work Experience</h1>
      <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
        <Experience/>
      </div>
      <h1 className="sub-heading">Education</h1>
      <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
        <Education/>
      </div>
      <h1 className="sub-heading">My Skills</h1>
      <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
        <Skills/>
      </div>
      <h1 className="sub-heading">My Acomplishments</h1>
      <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
        <Acomplishments/>
      </div>
    </div>
  </div>
}
