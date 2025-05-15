// src/components/ProjectCard.tsx
import React from 'react';
import './ProjectCard.css';

interface Project {
  type: string;
  description: string;
  tags: string[];
  members: string[];
  stars: number;
  forks: number;
  updated: string;
}

interface ProjectCardProps {
  project: Project;
  onClose: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClose }) => {
  const firstMember = project.members[0] || 'unknown';
  const projectLink = `https://github.com/${firstMember}/${project.type}`;

  return (
    <div className="project-card-container">
      <div className="project-card-title">{project.type}</div>

      <div className="project-card-section">
        <strong>Description:</strong>
        <p>{project.description}</p>
      </div>

      <div className="project-card-section">
        <strong>Tags:</strong>
        <div className="project-card-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-card-section">
        <strong>Members:</strong>
        <div className="project-card-members">
          {project.members.map((member, idx) => (
            <span key={idx}>{member}</span>
          ))}
        </div>
      </div>

      <div className="project-card-section project-card-stats">
        <div><strong>⭐ Stars:</strong> {project.stars}</div>
        <div><strong>🍴 Forks:</strong> {project.forks}</div>
        <div><strong>📅 Last Updated:</strong> {project.updated}</div>
      </div>

      <div className="project-card-section">
        <strong>🔗 Link:</strong>
        <p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            {projectLink}
          </a>
        </p>
      </div>

      <div className="project-card-buttons">
        <button className="project-card-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
