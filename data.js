import Wizard from "./images/wizard.png";
import Orc from "./images/orc.png";
import Demon from "./images/demon.png";
import Goblin from "./images/goblin.png";

const characterData = {
  hero: {
    name: "Wizard",
    avatar: Wizard,
    health: 60,
    diceCount: 3,
    currentDiceScore: [],
  },
  orc: {
    name: "Orc",
    avatar: Orc,
    health: 30,
    diceCount: 1,
    currentDiceScore: [],
  },
  demon: {
    name: "Demon",
    avatar: Demon,
    health: 25,
    diceCount: 2,
    currentDiceScore: [],
  },
  goblin: {
    name: "Goblin",
    avatar: Goblin,
    health: 20,
    diceCount: 3,
    currentDiceScore: [],
  },
};

export default characterData;
