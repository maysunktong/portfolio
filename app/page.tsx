import HeroBanner from "../components/HeroBanner";
import Header from "../components/ui/Header";
import WorkGallery from "../components/WorkGallery";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Header text="Selected Works" />
      <WorkGallery />
    </>
  );
}
