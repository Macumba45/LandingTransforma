import { FC, memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MainContainer,
  TitleContainer,
  VideoContainer,
  VideoUrl,
  Span,
  SpanBold,
} from "./styles";

const Video: FC = () => {
  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.05, // retrasa el inicio de la animación medio segundo
        staggerChildren: 0.04, // retrasa el inicio de cada letra 0.1 segundos
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50, // desplaza cada letra hacia abajo mientras está oculta
    },
    visible: {
      opacity: 1,
      y: 0, // devuelve cada letra a su posición original
    },
  };

  const [shouldScale, setShouldScale] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldScale(true);
      setTimeout(() => {
        setShouldScale(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <motion.span variants={letterVariants}>Como</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>crear</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>un</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>puesto</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>de</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>trabajo</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>de</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>entre</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}><SpanBold>500€ a 1000€</SpanBold></motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>por</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>fin</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>de</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>semana</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>en</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>menos</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>de</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>90 días</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>en</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>el</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>sector</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>del</motion.span>
          <motion.span variants={letterVariants}> </motion.span>
          <motion.span variants={letterVariants}>bienestar</motion.span>
        </motion.div>
        <AnimatePresence>
          <Span
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              color: "#fbfbfb",
              scale: shouldScale ? 1.1 : 1,
            }}
            transition={{ duration: 2 }}
          >
            ¡Pide tu cita ya!
          </Span>
        </AnimatePresence>
      </TitleContainer>
      <VideoUrl
        poster="https://virginiahidalgo.es/wp-content/uploads/2022/08/virginia-escenario.png"
        style={{ height: "600px" }}
        src="/videos/myvideo.mp4"
        controls
      />
    </MainContainer>
  );
};

export default memo(Video);
