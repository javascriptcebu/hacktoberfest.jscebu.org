"use client";

import { useState, useEffect } from "react";
import { Card } from "../components/card";

interface Submission {
  id: string;
  title: string;
  description: string;
  repository: string;
  url?: string;
  image?: string;
  email: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  year: number;
}

export function AdminPanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/submissions");
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      } else {
        throw new Error("Failed to fetch submissions");
      }
    } catch (err) {
      setError("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (submissionId: string, status: "approved" | "rejected") => {
    try {
      const response = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ submissionId, status }),
      });

      if (response.ok) {
        // Update local state
        setSubmissions(prev => 
          prev.map(sub => 
            sub.id === submissionId ? { ...sub, status } : sub
          )
        );
      } else {
        throw new Error("Failed to update status");
      }
    } catch (err) {
      setError("Failed to update submission status");
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const filteredSubmissions = submissions.filter(sub => 
    filter === "all" ? true : sub.status === filter
  );

  if (loading) {
    return (
      <Card>
        <div className="p-8 text-center">
          <p className="text-zinc-400">Loading submissions...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <div className="p-8 text-center">
          <p className="text-red-400">{error}</p>
          <button 
            onClick={fetchSubmissions}
            className="mt-4 px-4 py-2 bg-zinc-800 text-zinc-100 rounded hover:bg-zinc-700"
          >
            Retry
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter tabs */}
      <div className="flex gap-2">
        {["all", "pending", "approved", "rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as typeof filter)}
            className={`px-4 py-2 rounded-md capitalize ${
              filter === status
                ? "bg-zinc-100 text-zinc-900"
                : "bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {status} ({submissions.filter(s => status === "all" ? true : s.status === status).length})
          </button>
        ))}
      </div>

      {/* Submissions list */}
      {filteredSubmissions.length === 0 ? (
        <Card>
          <div className="p-8 text-center">
            <p className="text-zinc-400">No {filter === "all" ? "" : filter} submissions found.</p>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id}>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {submission.title}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Submitted by {submission.email} on{" "}
                      {new Date(submission.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-md ${
                    submission.status === "approved" ? "bg-green-900 text-green-300" :
                    submission.status === "rejected" ? "bg-red-900 text-red-300" :
                    "bg-yellow-900 text-yellow-300"
                  }`}>
                    {submission.status}
                  </span>
                </div>

                <p className="text-zinc-300">{submission.description}</p>

                <div className="space-y-2">
                  <div>
                    <span className="text-zinc-500 text-sm">Repository: </span>
                    <a 
                      href={submission.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-zinc-100 underline"
                    >
                      {submission.repository}
                    </a>
                  </div>
                  {submission.url && (
                    <div>
                      <span className="text-zinc-500 text-sm">Live URL: </span>
                      <a 
                        href={submission.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-zinc-100 underline"
                      >
                        {submission.url}
                      </a>
                    </div>
                  )}
                  {submission.image && (
                    <div>
                      <span className="text-zinc-500 text-sm">Image: </span>
                      <a 
                        href={submission.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-zinc-100 underline"
                      >
                        {submission.image}
                      </a>
                    </div>
                  )}
                </div>

                {submission.status === "pending" && (
                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={() => updateSubmissionStatus(submission.id, "approved")}
                      className="px-4 py-2 bg-green-800 text-green-100 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateSubmissionStatus(submission.id, "rejected")}
                      className="px-4 py-2 bg-red-800 text-red-100 rounded hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}