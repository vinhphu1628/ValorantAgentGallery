import breach from "./breach.png";
import brimstone from "./brimstone.png";
import cypher from "./cypher.png";
import jett from "./jett.png";
import omen from "./omen.png";
import phoenix from "./phoenix.png";
import raze from "./raze.png";
import reyna from "./reyna.png";
import sage from "./sage.png";
import sova from "./sova.png";
import viper from "./viper.png";

const images = {
  breach,
  brimstone,
  cypher,
  jett,
  omen,
  phoenix,
  raze,
  reyna,
  sage,
  sova,
  viper,
};

function getImgByKey(key) {
  return images[key];
}

export default getImgByKey;
