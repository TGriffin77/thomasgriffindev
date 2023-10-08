function ProjectBox(props: any) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="project-box"
      rel="noreferrer"
    >
      <img src={props.src} alt={props.alt}></img>
      <p>{props.description}</p>
    </a>
  );
}

export default ProjectBox;
