// src/components/ProjectRow.tsx
import React from 'react';

interface ProjectProps {
  type: string;
  description: string;
  tags: string[];
  members: number;
  stars: number;
  forks: number;
  updated: string;
  onClick: () => void;
}

export const ProjectRow: React.FC<ProjectProps> = ({
  type,
  description,
  tags,
  members,
  stars,
  forks,
  updated,
  onClick,
}) => {
  return (
    <tr className="border-b text-sm hover:bg-gray-50 cursor-pointer" onClick={onClick}>
      <td className="p-4 font-medium">{type}</td>
      <td>{description}</td>
      <td>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className="flex -space-x-2">
          {Array.from({ length: members }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </td>
      <td>{stars}</td>
      <td>{forks}</td>
      <td>{updated}</td>
    </tr>
  );
};
