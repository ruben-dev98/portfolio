import { Card, CardContent, Typography } from "@mui/material";
import { studies } from "../../assets/assets";


const StudiesComponent = () => {

    return (
        <>
            <h1 id="studies">Mis Estudios</h1>
            <section className="section__studies">
                {studies &&
                    studies.map((study, index) => {
                        return (
                            <Card sx={{ maxWidth: 450 }} key={index}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {study.name}<br/>{study.org} 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {study.date} <br/> {study.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
            </section>
        </>
    );
}

export default StudiesComponent;