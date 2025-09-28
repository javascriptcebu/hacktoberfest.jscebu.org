"use client";

import { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";
import { Users, Calendar, Mail, Phone, CheckCircle, Clock, XCircle, FileText, Loader2 } from "lucide-react";

interface MyVolunteerClientProps {
  isAuthenticated: boolean;
  userEmail?: string;
  userName?: string;
  onSignOut?: () => Promise<void>;
}

interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  availability: string;
  skills?: string;
  motivation: string;
  github?: string;
  linkedin?: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  year: number;
}

const roleDisplayNames: Record<string, string> = {
  "speaker-coordinator": "Speaker Coordinator",
  "emcee": "Emcee/Host",
  "opensource-coordinator": "Open Source Coordinator",
  "judging-committee": "Judging Committee",
  "raffle-committee": "Raffle Committee",
  "marketing": "Marketing Team",
  "creatives": "Creatives/Design Team",
  "photographer": "Photographer",
  "socmed": "Social Media Team",
  "tech-team": "Tech Team (Audio/Video)",
  "livestreaming": "Livestreaming Team",
  "logistics": "Logistics Team",
  "registration": "Registration Team",
  "any": "Any Role (Flexible)"
};

export function MyVolunteerClient({
  isAuthenticated,
  userEmail,
  userName,
  onSignOut,
}: MyVolunteerClientProps) {
  const [applications, setApplications] = useState<VolunteerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/my-volunteer-applications", {
        method: "GET",
      });

      if (response.status === 401) {
        // User not authenticated
        window.location.href = "/signin?redirect=/my-volunteer";
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch volunteer applications");
      }

      const data = await response.json();
      setApplications(data.applications || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: {
        icon: CheckCircle,
        text: "Approved",
        className: "text-green-400 bg-green-900/50 border-green-800",
      },
      pending: {
        icon: Clock,
        text: "Under Review",
        className: "text-yellow-400 bg-yellow-900/50 border-yellow-800",
      },
      rejected: {
        icon: XCircle,
        text: "Not Selected",
        className: "text-red-400 bg-red-900/50 border-red-800",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full ${config.className}`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
        <Navigation
          isAuthenticated={isAuthenticated}
          userEmail={userEmail}
          userName={userName}
          onSignOut={onSignOut}
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-lavender" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <Navigation
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        userName={userName}
        onSignOut={onSignOut}
      />

      <div className="px-6 pt-20 pb-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-space-white sm:text-4xl">
            My Volunteer Application
          </h1>
          <p className="mt-4 text-space-dust">
            Track your volunteer application status for Hacktoberfest 2025
          </p>
        </div>

        {error && (
          <Card>
            <div className="p-6 text-center">
              <p className="text-red-400">{error}</p>
              <button
                onClick={fetchApplications}
                className="mt-4 px-4 py-2 bg-lavender text-void rounded-md hover:bg-melrose transition-colors"
              >
                Try Again
              </button>
            </div>
          </Card>
        )}

        {!error && applications.length === 0 ? (
          <Card>
            <div className="p-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-space-haze" />
              <h3 className="text-lg font-semibold text-space-white mb-2">
                No volunteer application yet
              </h3>
              <p className="text-space-dust mb-6">
                Join our team of amazing volunteers for Hacktoberfest 2025!
              </p>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Apply as Volunteer
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {applications.map((application) => (
              <Card key={application.id}>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-5 h-5 text-lavender" />
                        <h3 className="text-xl font-bold text-space-white">
                          {roleDisplayNames[application.role] || application.role}
                        </h3>
                        {getStatusBadge(application.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-melrose" />
                            <div>
                              <span className="text-space-haze">Applied as: </span>
                              <span className="text-space-white">{application.name}</span>
                            </div>
                          </div>
                          {application.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-melrose" />
                              <div>
                                <span className="text-space-haze">Phone: </span>
                                <span className="text-space-white">{application.phone}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-melrose" />
                            <div>
                              <span className="text-space-haze">Applied on: </span>
                              <span className="text-space-white">
                                {new Date(application.submittedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-space-haze">Availability: </span>
                            <span className="text-space-white">{application.availability}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expandable details */}
                      <details className="mt-4">
                        <summary className="cursor-pointer text-lavender hover:text-melrose text-sm">
                          View Application Details
                        </summary>
                        <div className="mt-4 p-4 bg-east-bay/30 rounded-lg border border-blue-violet/30 space-y-4">
                          {application.skills && (
                            <div>
                              <h4 className="font-semibold text-melrose mb-1">Technical Skills:</h4>
                              <p className="text-sm text-space-dust">{application.skills}</p>
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold text-melrose mb-1">Experience:</h4>
                            <p className="text-sm text-space-dust whitespace-pre-wrap">{application.experience}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-melrose mb-1">Motivation:</h4>
                            <p className="text-sm text-space-dust whitespace-pre-wrap">{application.motivation}</p>
                          </div>
                        </div>
                      </details>

                      {application.status === "approved" && (
                        <div className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                          <p className="text-green-400 font-medium mb-2">🎉 Congratulations!</p>
                          <p className="text-sm text-space-dust">
                            Your application has been approved. We'll contact you soon with more details about your volunteer role.
                          </p>
                        </div>
                      )}

                      {application.status === "pending" && (
                        <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                          <p className="text-yellow-400 font-medium mb-2">⏳ Application Under Review</p>
                          <p className="text-sm text-space-dust">
                            We're currently reviewing your application. We'll notify you once a decision has been made.
                          </p>
                        </div>
                      )}

                      {application.status === "rejected" && (
                        <div className="mt-4 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                          <p className="text-red-400 font-medium mb-2">Thank You for Applying</p>
                          <p className="text-sm text-space-dust">
                            While we couldn't select you for this role, we appreciate your interest. Please consider applying for other opportunities or joining us as an attendee!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg">
          <h2 className="text-lg font-semibold text-melrose mb-3">Need Help?</h2>
          <p className="text-sm text-space-dust mb-4">
            If you have questions about your volunteer application or role, feel free to reach out:
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:volunteer@hacktoberfest.jscebu.org" className="flex items-center gap-2 text-lavender hover:text-melrose">
              <Mail className="w-4 h-4" />
              volunteer@hacktoberfest.jscebu.org
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}