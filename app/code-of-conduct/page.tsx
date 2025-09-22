import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { AnimatedCard } from "../components/animated-card";
import { ScrollAnimation } from "../components/scroll-animation";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Code of Conduct for Hacktoberfest Cebu 2025 - Our commitment to fostering an inclusive and respectful community.",
};

export default function CodeOfConductPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 pb-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
              Code of Conduct
            </h1>
            <p className="text-zinc-400">
              Our pledge to foster an inclusive and welcoming community
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          <AnimatedCard delay={0.1}>
            <div className="p-8 bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Our Commitment</h2>
              <p className="text-zinc-300 leading-relaxed">
                Hacktoberfest Cebu is dedicated to providing a harassment-free experience for everyone,
                regardless of age, body size, disability, ethnicity, sex characteristics, gender identity
                and expression, level of experience, education, socio-economic status, nationality,
                personal appearance, race, religion, or sexual identity and orientation.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                We pledge to act and interact in ways that contribute to an open, welcoming, diverse,
                inclusive, and healthy community.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Expected Behavior</h2>
              <p className="text-zinc-400 mb-4">
                All participants, speakers, sponsors, and volunteers are expected to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-zinc-400">
                <li>
                  <strong className="text-zinc-300">Be Respectful:</strong> Value each other's ideas,
                  styles, and viewpoints. Disagreement is no excuse for poor manners.
                </li>
                <li>
                  <strong className="text-zinc-300">Be Inclusive:</strong> Welcome and support people
                  of all backgrounds and identities. Use inclusive language.
                </li>
                <li>
                  <strong className="text-zinc-300">Be Collaborative:</strong> Work together effectively,
                  share knowledge, and help others learn and grow.
                </li>
                <li>
                  <strong className="text-zinc-300">Be Professional:</strong> Maintain professionalism
                  in all interactions, both online and offline.
                </li>
                <li>
                  <strong className="text-zinc-300">Be Empathetic:</strong> Understand and respect
                  different perspectives and experiences.
                </li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Unacceptable Behavior</h2>
              <p className="text-zinc-400 mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              <ul className="list-disc list-inside space-y-3 text-zinc-400">
                <li>Violence, threats of violence, or violent language directed against another person</li>
                <li>Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes and language</li>
                <li>Posting or displaying sexually explicit or violent material</li>
                <li>Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability</li>
                <li>Inappropriate photography or recording without consent</li>
                <li>Inappropriate physical contact without consent</li>
                <li>Unwelcome sexual attention, including sexualized comments or jokes</li>
                <li>Deliberate intimidation, stalking, or following (online or in person)</li>
                <li>Sustained disruption of community events, including talks and presentations</li>
                <li>Advocating for, or encouraging, any of the above behavior</li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Online Community Standards</h2>
              <div className="space-y-4">
                <p className="text-zinc-400">
                  In our online spaces (Discord, GitHub, social media), we additionally expect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li>Stay on topic and keep discussions relevant</li>
                  <li>No spam, excessive self-promotion, or off-topic content</li>
                  <li>Respect others' time and attention</li>
                  <li>Give credit where credit is due</li>
                  <li>Ask for consent before sharing others' personal information</li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Consequences of Unacceptable Behavior</h2>
              <p className="text-zinc-400 mb-4">
                Unacceptable behavior will not be tolerated. Anyone asked to stop unacceptable behavior
                is expected to comply immediately. If a participant engages in unacceptable behavior,
                organizers may take any action they deem appropriate, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li>Warning the offender</li>
                <li>Temporary suspension from the event or online platforms</li>
                <li>Permanent expulsion from the event without refund (if applicable)</li>
                <li>Banning from future Hacktoberfest Cebu events</li>
                <li>Reporting to local law enforcement when appropriate</li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Reporting Violations</h2>
              <div className="space-y-4">
                <p className="text-zinc-400">
                  If you experience or witness unacceptable behavior, or have any other concerns,
                  please report it as soon as possible:
                </p>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">During Events</h3>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>Find an organizer or volunteer (wearing event badges)</li>
                    <li>Visit the registration/help desk</li>
                    <li>Call or text the emergency contact number provided at registration</li>
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Online</h3>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>
                      Email:{" "}
                      <a href="mailto:conduct@hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                        conduct@hacktoberfest.jscebu.org
                      </a>
                    </li>
                    <li>Direct message an admin on Discord</li>
                    <li>Use the report feature on the platform where the violation occurred</li>
                  </ul>
                </div>

                <p className="text-zinc-400">
                  All reports will be handled with discretion and confidentiality. We will respect
                  your privacy and safety throughout the process.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Scope</h2>
              <p className="text-zinc-400 leading-relaxed">
                This Code of Conduct applies to all Hacktoberfest Cebu spaces, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 mt-4">
                <li>All event venues and activities</li>
                <li>Online platforms (Discord, GitHub, social media)</li>
                <li>Event-related social gatherings</li>
                <li>One-on-one communications pertaining to community business</li>
              </ul>
              <p className="text-zinc-400 mt-4">
                This code also applies when an individual is representing the community in public spaces.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Attribution</h2>
              <p className="text-zinc-400 leading-relaxed">
                This Code of Conduct is adapted from the{" "}
                <a
                  href="https://www.contributor-covenant.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Contributor Covenant
                </a>
                , version 2.1, and the{" "}
                <a
                  href="https://www.rust-lang.org/policies/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Rust Code of Conduct
                </a>
                .
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8 bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Questions?</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                If you have questions about this Code of Conduct, please contact us:
              </p>
              <div className="space-y-2 text-zinc-200">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:conduct@hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                    conduct@hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                    hacktoberfest.jscebu.org
                  </a>
                </p>
              </div>
              <p className="text-zinc-300 mt-6 font-semibold">
                Together, let's build an inclusive and welcoming tech community in Cebu! 🧡
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}