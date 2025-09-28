import Header from "../../components/ui/Header";
import WorkGallery from "../../components/WorkGallery";

export default function WorkGalleryPage() {
  return (
    <div>
      <Header text="Selected Works" />
      <p className="font-mono pt-3 pb-6">👋🏻 Welcome to my little portfolio! 👩🏻‍💻 Here you will find all the projects that I have poured my heart, creativity, and time into over 1.5 years at Futuregames School. Enjoy ✨</p>
      <WorkGallery />
    </div>
  );
}
