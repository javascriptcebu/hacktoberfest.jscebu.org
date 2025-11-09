import { NavWrapper } from "../components/nav-wrapper";
import { EventsContent } from "./events-content";
import { Footer } from "../components/footer";

export default function EventsPage() {
  return (
    <div className="relative">
      <NavWrapper />
      <EventsContent />
      <Footer/>
    </div>
  );
}
