import { Card, CardContent, Typography } from "@mui/material";
import { experiencie } from "../../assets/assets";


const ExperienceComponent = () => {


    return (
        <>
            <h1 id="experiences">Mi Experiencia Laboral</h1>
            <section className="section__experience">
                {experiencie &&
                    experiencie.map((exp, index) => {
                        return (
                            <Card key={index}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {exp.name}<br/>{exp.org} 
                                    </Typography>
                                    <Typography variant="body2">
                                        {exp.date}<br/>{exp.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
            </section>
        </>
    );
}

export default ExperienceComponent;