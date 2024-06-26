import { projects } from "../../assets/assets";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, Link } from '@mui/material';

const ProjectsComponent = () => {
    return (
        <>
            <h1 id="projects">Proyectos</h1>
            <section className="section__projects">
                {projects &&
                    projects.map((project, index) => {
                        return (
                            <Card key={index}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.img}
                                    alt="photo project"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {project.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={project.links.github}>Github</Link>
                                    <Link href={project.links.deploy}>Despliegue</Link>
                                </CardActions>
                            </Card>
                        )
                    })}
            </section>
        </>
    );
}

export default ProjectsComponent;