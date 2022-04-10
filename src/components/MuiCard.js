import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import ImageIcon from "@mui/icons-material/Image";

const MuiCard = ({ imgLink, imgAlt, title, parragraph, infoLink }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="150" image={imgLink} alt={imgAlt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {parragraph}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={infoLink}
            target="_blank"
            variant="contained"
            endIcon={<InfoIcon />}
          >
            Aprender mas
          </Button>

          <Button
            size="small"
            href={imgLink}
            target="_blank"
            variant="outlined"
            endIcon={<ImageIcon />}
          >
            Ver Imagen
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MuiCard;
