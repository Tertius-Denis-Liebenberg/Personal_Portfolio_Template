import { Acomplishments } from "@/components/home/acomplishments/acomplishments.component";
import { Education } from "@/components/home/education/education.component";
import { Experience } from "@/components/home/experience/experience.component";
import { Skills } from "@/components/home/skills/skills.component";

export default function Home() {
  return <div className="bg-container-overlay-custom">
    <div className="container-fluid py-8">
      <div className="container mx-auto text-center">
        <h1 className="sub-heading lg:text-6xl text-2xl">About Me</h1>
        <div className="p-14 mb-10">
          <h3 className="text-stone-200 lg:text-lg text-sm">
            I am a friendly and hard-working software developer with a strong passion for both Web Development, Artificial Intelligence and Robotics. My eagerness to learn new technologies and my creative approach to problem-solving have consistently driven me to achieve ambitious goals. As a disciplined team player, I thrive in collaborative environments where I can contribute to innovative projects and support my colleagues. My dedication to continuous improvement and my commitment to excellence ensure that I always deliver high-quality work.
          </h3>
        </div>
        <h1 className="sub-heading lg:text-6xl text-2xl">Work Experience</h1>
        <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
          <Experience/>
        </div>
        <h1 className="sub-heading lg:text-6xl text-2xl">Education</h1>
        <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
          <Education/>
        </div>
        <h1 className="sub-heading lg:text-6xl text-2xl">My Skills</h1>
        <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
          <Skills/>
        </div>
        <h1 className="sub-heading lg:text-6xl text-2xl">My Acomplishments</h1>
        <div className="md:px-14 px-8 py-10 mb-10 text-stone-200">
          <Acomplishments/>
        </div>
      </div>
    </div>
  </div>
}
