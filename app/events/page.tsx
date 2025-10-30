import { NavWrapper } from "../components/nav-wrapper";
import { EventsContent } from "./events-content";

export default function EventsPage() {
  return (
    <div className="relative pb-16">
      <NavWrapper />
      <EventsContent />
    </div>
  );
}
