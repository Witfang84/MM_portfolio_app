import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div
        className={styles.imageArea}
        style={{ '--card-color': project.color } as React.CSSProperties}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.companyBadge}>{project.company}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
