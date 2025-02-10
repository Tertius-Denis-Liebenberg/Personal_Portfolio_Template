import { Gallery } from "@/components/gallery/gallery.component";

export default function GalleryPage(){
	return <div className="container-fluid bg-stone-950 py-8">
    <div className="container mx-auto text-center">
      <h1 className="sub-heading">My Gallery</h1>
      <div className="md:px-0 px-8 py-10 mb-10">
        <Gallery/>
      </div>
    </div>
  </div>
}