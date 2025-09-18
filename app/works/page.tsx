import Header from "../../components/ui/Header";
import WorkGallery from "../../components/WorkGallery";

export default function WorkGalleryPage() {
  return (
    <div>
      <Header text="Selected Works" />
      <p className="font-mono pt-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem molestias sit veritatis, similique fuga odit adipisci obcaecati laboriosam animi!</p>
      <WorkGallery />
    </div>
  );
}
