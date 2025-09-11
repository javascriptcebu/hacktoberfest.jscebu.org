"use client";

import { useState } from "react";
import { Card } from "../components/card";

interface SubmissionFormProps {
  userEmail?: string;
}

export function SubmissionForm({ userEmail }: SubmissionFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    repository: "",
    url: "",
    image: "",
    email: userEmail || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Project submitted successfully! We'll review it and get back to you soon.",
        });
        setFormData({
          title: "",
          description: "",
          repository: "",
          url: "",
          image: "",
          email: userEmail || "",
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message: errorData.error || "Failed to submit project. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border border-green-800 text-green-400"
                : "bg-red-900/20 border border-red-800 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-2">
            Project Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="Enter your project title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="Describe your project, what it does, and what makes it special"
          />
        </div>

        <div>
          <label htmlFor="repository" className="block text-sm font-medium text-zinc-300 mb-2">
            Repository URL *
          </label>
          <input
            type="url"
            id="repository"
            name="repository"
            value={formData.repository}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="https://github.com/username/project"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-zinc-300 mb-2">
            Live URL <span className="text-zinc-500">(optional)</span>
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="https://your-project.com"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-zinc-300 mb-2">
            Image URL <span className="text-zinc-500">(optional)</span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="https://example.com/image.png"
          />
          <p className="mt-1 text-xs text-zinc-500">
            A screenshot or logo for your project. We recommend uploading to GitHub or similar.
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
            Contact Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-zinc-100 text-zinc-900 py-2 px-4 rounded-md font-medium hover:bg-zinc-200 disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Project"}
          </button>
        </div>

        <div className="text-sm text-zinc-500">
          <p>
            By submitting your project, you agree that:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your project is open source and available on GitHub</li>
            <li>You have the rights to submit this project</li>
            <li>Your submission may be reviewed and moderated before publication</li>
          </ul>
        </div>
      </form>
    </Card>
  );
}