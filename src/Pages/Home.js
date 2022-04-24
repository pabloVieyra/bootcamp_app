import { useState } from "react";
import TitleCard from "../components/TitleCard";
import Navbar from "../components/Navbar";
import MuiCard from "../components/MuiCard";
import Footer from "../components/Footer";

// import StandardImageList from "./components/StandardImageList";

import "../App.css";

function Home() {
  const [count, setCount] = useState(0);

  const sigImg = (count) => {
    setCount(count + 1);
    if (count > 2) {
      setCount(0);
    }
  };

  const posImg = (count) => {
    setCount(count - 1);
    if (count < 1) {
      setCount(2);
    }
  };

  return (
    <div>
      <section className="main-container">
        <TitleCard
          title={"Explora el mundo"}
          subtitle={"y conoce lo que te espera"}
        ></TitleCard>

        <article className="container">
          <h2>Animales:</h2>
          <p>
            En esta categoria se vera una pequenia parte de los animales que
            existen en el mundo.<br></br>Por que estos animales? Porque son los
            favoritos del autor de la pagina :D
          </p>
          <section className="container-3-grids">
            <div className="container-card">
              <MuiCard
                imgLink={
                  "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                }
                imgAlt={"Gatito"}
                title={"Gatito"}
                parragraph={
                  "Aqui se puede ver un gatito, a punto de tirarse a la camara"
                }
                infoLink={
                  "https://es.wikipedia.org/wiki/Felis_silvestris_catus"
                }
              ></MuiCard>
            </div>

            <div className="container-card">
              <MuiCard
                imgLink={
                  "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/163599221/1200"
                }
                imgAlt={"Cuervito"}
                title={"Cuervito"}
                parragraph={
                  "Aqui se puede ver un cuervito, volando como si nada"
                }
                infoLink={"https://es.wikipedia.org/wiki/Corvus_corax"}
              ></MuiCard>
            </div>

            <div className="container-card">
              <MuiCard
                imgLink={
                  "https://petapixel.com/assets/uploads/2021/10/babybarnowl-800x533.jpg"
                }
                imgAlt={"Lechuzita"}
                title={"Lechuzita"}
                parragraph={"Aqui se puede ver una lechuzita, bebe, corriendo"}
                infoLink={"https://es.wikipedia.org/wiki/Lechuza"}
              ></MuiCard>
            </div>
          </section>
          <p className="additionalInfo">
            Para saber mas sobre distintos animales presione{" "}
            <a
              href="https://www.youtube.com/watch?v=c1s3Iekns9k"
              target="_blank"
              rel="noreferrer"
            >
              Aqui
            </a>
            .
          </p>

          <h2>Plantas y Vegetacion:</h2>
          <p>
            El mundo y la naturaleza esta repleto de vegetacion y una grandisima
            variedad de plantas, de las cuales es seguro decir, no todas las
            plantas son aptas para el consumo, o siquiera para el tacto, por
            ende, tenga cuidado y sea muy cuidadoso. Las plantas peligrosas
            seran marcadas con un '!' luego de su nombre.
          </p>
          {/* A partir de aca, lo hago como HTML normal porque no supe hacerlo con MUI ni los componentes de React, por ende, voy a hacer uno solo, la idea era hacer mas */}
          <div className="InfoCard">
            {/* Clase con grid 65% 35%*/}
            <div>
              <h2>
                <a
                  href="https://es.wikipedia.org/wiki/Lilium_candidum"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lilium{" "}
                </a>
                -!
              </h2>
              <div className="linea"></div>
              <p>
                Posee un tallo subterráneo bulboso y otro aéreo herbáceo,
                provisto de numerosas hojas.<br></br>
                Flores aparentes, hermafroditas, actinomorfas, y trímeras;
                situadas en la terminación del escapo o tallo herbáceo,
                presentan un periantio de seis tépalos blancos, libres entre sí,
                provistos de nectarios.<br></br>Androceo formado por seis
                estambres y gineceo de ovario súpero (los demás verticilos se
                insertan en el receptáculo por debajo de aquel: flores
                hipoginas), tricarpelar y pluriovulado.<br></br>El fruto es una
                cápsula de dehiscencia loculicida. Las semillas maduras tienen
                color pálido.
              </p>
            </div>
            <div>
              {/* Clase con manejo de la imagen para que quede bien*/}

              {count === 0 ? (
                <img
                  className="IC-Img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/01-Lilium_candidum-Madonna_lily.JPG/220px-01-Lilium_candidum-Madonna_lily.JPG"
                  alt="Lilium candidum madonna lily"
                ></img>
              ) : count === 1 ? (
                <img
                  className="IC-Img"
                  src="https://live.staticflickr.com/5119/5800753294_d6c85bdc1f_b.jpg"
                  alt="Lilium candidum Roja"
                ></img>
              ) : (
                <img
                  className="IC-Img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Q70crn4-KUHQYE5vQHcgXQ_1Cz7t5PMErg&usqp=CAU"
                  alt="Lilium candidum conjunto"
                ></img>
              )}

              {/* Aca hay un boton para cambiar de imagen :D */}
              <section style={{ display: "flex" }}>
                <button
                  type="button"
                  style={{ margin: "10px" }}
                  onClick={() => sigImg(count)}
                >
                  Siguiente Imagen
                </button>
                <button
                  type="button"
                  style={{ margin: "10px" }}
                  onClick={() => posImg(count)}
                >
                  Anterior Imagen
                </button>
              </section>
            </div>
          </div>
        </article>
        {/* <article className="ImgList">
          <StandardImageList></StandardImageList>
        </article> */}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
