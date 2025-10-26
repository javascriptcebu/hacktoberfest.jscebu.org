"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { SubmittedProject } from "../projects/utils";

interface EditProjectModalProps {
  project: SubmittedProject;
  onClose: () => void;
  onSave: (project: SubmittedProject) => void;
}

export function EditProjectModal({ project, onClose, onSave }: EditProjectModalProps) {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    repository: project.repository,
    url: project.url || "",
    image: project.image || "",
    specialNote: project.specialNote || "",
    techStack: project.techStack || "",
    lookingFor: project.lookingFor || "",
    category: project.category || "",
  });

  const [teamMembers, setTeamMembers] = useState(
    project.teamMembers || []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...project,
      ...formData,
      teamMembers: project.projectType === "hackathon" ? teamMembers : undefined,
    });
  };

  const handleTeamMemberChange = (index: number, field: "name" | "email" | "github" | "role", value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value,
    };
    setTeamMembers(updatedMembers);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: "", email: "", github: "", role: "" }]);
    }
  };

  const removeTeamMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-lg shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-zinc-900 border-b border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-100">Edit Project</h2>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-zinc-200 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-200 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="specialNote" className="block text-sm font-medium text-zinc-200 mb-2">
              Special Note <span className="text-xs text-zinc-500">(New field - visible on project page)</span>
            </label>
            <textarea
              id="specialNote"
              rows={3}
              value={formData.specialNote}
              onChange={(e) => setFormData({ ...formData, specialNote: e.target.value })}
              placeholder="Add any special instructions, announcements, or notes for contributors..."
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="repository" className="block text-sm font-medium text-zinc-200 mb-2">
              Repository URL *
            </label>
            <input
              type="url"
              id="repository"
              required
              value={formData.repository}
              onChange={(e) => setFormData({ ...formData, repository: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-sm font-medium text-zinc-200 mb-2">
              Live Demo URL
            </label>
            <input
              type="url"
              id="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-zinc-200 mb-2">
              Project Image URL
            </label>
            <input
              type="url"
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="URL to project screenshot or logo"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="techStack" className="block text-sm font-medium text-zinc-200 mb-2">
              Tech Stack
            </label>
            <input
              type="text"
              id="techStack"
              value={formData.techStack}
              onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              placeholder="e.g., React, Node.js, PostgreSQL"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-zinc-200 mb-2">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile Application</option>
              <option value="desktop">Desktop Application</option>
              <option value="library">Library/Framework</option>
              <option value="tool">Developer Tool</option>
              <option value="game">Game</option>
              <option value="ai">AI/Machine Learning</option>
              <option value="blockchain">Blockchain/Web3</option>
              <option value="iot">IoT</option>
              <option value="other">Other</option>
            </select>
          </div>

          {project.projectType === "existing" && (
            <div>
              <label htmlFor="lookingFor" className="block text-sm font-medium text-zinc-200 mb-2">
                Looking for Contributors to Help With
              </label>
              <textarea
                id="lookingFor"
                rows={3}
                value={formData.lookingFor}
                onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                placeholder="e.g., Documentation, Bug fixes, New features, Testing"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
              />
            </div>
          )}

          {project.projectType === "hackathon" && (
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-2">
                Team Members
              </label>
              <div className="space-y-3">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                      className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, "email", e.target.value)}
                      className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => removeTeamMember(index)}
                      className="px-3 py-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {teamMembers.length < 4 && (
                  <button
                    type="button"
                    onClick={addTeamMember}
                    className="text-sm text-lavender hover:text-melrose transition-colors"
                  >
                    + Add Team Member
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-zinc-800">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-md font-medium hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}