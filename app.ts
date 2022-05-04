import { __String } from "typescript";
import { Player } from "./src/player";
import {
  HunterRole,
  Role,
  RoleName,
  VillagerRole,
  WerewolfRole,
  WitchRole,
} from "./src/roles";
import { shuffle } from "./src/utils";

let players: Player[] = [];

enum Phase {
  DAY,
  NIGHT,
  TWILIGHT,
}
