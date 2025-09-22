import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { Navigation } from "../components/nav";
import { VolunteerForm } from "./volunteer-form";
import { redirect } from "next/navigation";

export default async function VolunteerPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-space-haze uppercase">
              Cebu Hacktoberfest 2025
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-7xl">
              VOLUNTEER APPLICATION
            </h1>
            <p className="mt-6 text-lg text-space-dust max-w-2xl mx-auto">
              Join our team of amazing volunteers and help make Hacktoberfest Cebu 2025 unforgettable!
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-space-haze">
              <span>→</span>
              <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/VOLUNTEER</span>
            </div>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg text-left">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-melrose mb-2">Event Coordination</h3>
              <p className="text-sm text-space-dust mb-4">
                Help organize and coordinate events, manage registrations, and ensure smooth operations.
              </p>
              <ul className="text-xs text-space-dust/80 space-y-1 list-disc list-inside">
                <li>Registration desk</li>
                <li>Attendee support</li>
                <li>Schedule management</li>
              </ul>
            </div>

            <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg text-left">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-melrose mb-2">Technical Mentorship</h3>
              <p className="text-sm text-space-dust mb-4">
                Guide participants, answer technical questions, and help with project development.
              </p>
              <ul className="text-xs text-space-dust/80 space-y-1 list-disc list-inside">
                <li>Code reviews</li>
                <li>Technical guidance</li>
                <li>Workshop assistance</li>
              </ul>
            </div>

            <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg text-left">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-lg font-semibold text-melrose mb-2">Content Creation</h3>
              <p className="text-sm text-space-dust mb-4">
                Capture moments, create social media content, and document the event.
              </p>
              <ul className="text-xs text-space-dust/80 space-y-1 list-disc list-inside">
                <li>Photography</li>
                <li>Video coverage</li>
                <li>Social media</li>
              </ul>
            </div>

            <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg text-left">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-melrose mb-2">Workshop Facilitation</h3>
              <p className="text-sm text-space-dust mb-4">
                Lead or assist in conducting workshops, talks, and learning sessions.
              </p>
              <ul className="text-xs text-space-dust/80 space-y-1 list-disc list-inside">
                <li>Session hosting</li>
                <li>Q&A moderation</li>
                <li>Material preparation</li>
              </ul>
            </div>

            <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg text-left">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-melrose mb-2">Community Outreach</h3>
              <p className="text-sm text-space-dust mb-4">
                Connect with schools, organizations, and communities to spread awareness.
              </p>
              <ul className="text-xs text-space-dust/80 space-y-1 list-disc list-inside">
                <li>Partnership building</li>
                <li>Campus ambassadors</li>
                <li>Community engagement</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-violet/20 to-lavender/20 border border-blue-violet/30 rounded-lg">
            <h2 className="text-2xl font-bold text-space-white mb-4">Why Volunteer?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-melrose mb-2">Build Network</h3>
                <p className="text-sm text-space-dust">
                  Connect with developers, designers, and tech enthusiasts in Cebu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-melrose mb-2">Gain Experience</h3>
                <p className="text-sm text-space-dust">
                  Learn event management, mentorship, and community building skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-melrose mb-2">Give Back</h3>
                <p className="text-sm text-space-dust">
                  Help grow the local tech community and support aspiring developers.
                </p>
              </div>
            </div>
          </div>


          <VolunteerForm userEmail={claims?.email || undefined} />
        </div>
      </div>
    </div>
  );
}