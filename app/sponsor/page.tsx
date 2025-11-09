import { NavWrapper } from "../components/nav-wrapper";
import { SponsorContent } from "./sponsor-content";
import { Footer } from "../components/footer"

export default function SponsorPage() {
  return (
    <div className="relative">
      <NavWrapper />
      <SponsorContent />
      <Footer/>
    </div>
  );
}
