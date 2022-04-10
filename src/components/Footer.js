import React from "react";
import "./Footer.css";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <IconButton
        aria-label="whatsapp"
        href="https://www.youtube.com/watch?v=iik25wqIuFo"
        target="_blank"
        className="component"
      >
        <WhatsAppIcon />
      </IconButton>

      <IconButton
        aria-label="email"
        href="mailto:juancvazquez600@gmail.com"
        target="_blank"
        className="component"
      >
        <EmailIcon />
      </IconButton>

      <IconButton
        aria-label="instagram"
        href="https://www.instagram.com/juancv60/"
        target="_blank"
        className="component"
      >
        <InstagramIcon />
      </IconButton>

      <IconButton
        aria-label="twitter"
        href="https://twitter.com/JuanCVazquez600"
        target="_blank"
        className="component"
      >
        <TwitterIcon />
      </IconButton>

      <section className="container-two-grids">
        <article className="footer-text">
          Esta pagina fue creada co la intension de ser entregada como tarea a
          Pablo para poder progresar con las clases del bootcamp de desarrollo
          web.
          <br></br>
          Los integrantes de este mismo grupo son llamados:
          <ul>
            <li>Pablo</li>
            <li>Ezequiel</li>
            <li>Miguel el Pana</li>
            <li>Juancito pito chico</li>
          </ul>
        </article>

        <article className="footer-text">
          Esta pagina fue creada principalmente con Material UI (MUI).
          <br></br>
          Para saber mas sobre MUI haga click{" "}
          <a href="https://www.mui.com" rel="noreferrer" target="_blank">
            Aqui
          </a>
          <br></br>
          Los componentes principalmente usados en esta pagina fueron, en orden:
          <ol>
            <li>AppBar</li>
            <li>Buttons</li>
            <li>Cards</li>
          </ol>
        </article>
      </section>
    </div>
  );
};

export default Footer;
