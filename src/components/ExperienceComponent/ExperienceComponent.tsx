import { Card, CardContent, Typography } from "@mui/material";
import { experiencie } from "../../assets/assets";


const ExperienceComponent = () => {


    return (
        <>
            <h1 id="experience">Mi Experiencia Laboral</h1>
            <section className="section__experience">
                {experiencie &&
                    experiencie.map((exp, index) => {
                        return (
                            <Card sx={{ maxWidth: 450 }} key={index}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {exp.name}<br/>{exp.org} 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
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