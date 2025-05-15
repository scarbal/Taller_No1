// src/components/ProjectTable.tsx
import React, { useEffect, useState } from 'react';
import { ProjectRow } from './ProjectRow';
import { ProjectCard } from './projectCard';
import './ProjectTable.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Project {
  type: string;
  description: string;
  tags: string[];
  members: string[];
  stars: number;
  forks: number;
  updated: string;
}

export const ProjectTable: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const data: Project[] = querySnapshot.docs.map(doc => doc.data() as Project);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-table">
      {selectedProject ? (
        <ProjectCard project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : (
        <>
          <div className="header">
            <input type="text" placeholder="Search public projects" className="search-input" />
            <div className="filters">
              <button className="text-blue-600 font-medium">All</button>
              <button>Featured</button>
              <button>Trending</button>
              <button>Popular</button>
              <button>Recently updated</button>
              <button>Add filter</button>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Members</th>
                <th>Stars</th>
                <th>Forks</th>
                <th>Last updated</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <ProjectRow
                  key={idx}
                  {...project}
                  members={project.members.length}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
