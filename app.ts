import { __String } from "typescript";
import { Player } from "./player";
import {
  HunterRole,
  Role,
  RoleName,
  VillagerRole,
  WerewolfRole,
  WitchRole,
} from "./roles";
import { shuffle } from "./utils";

let players: Player[] = [];

enum Phase {
  DAY,
  NIGHT,
  TWILIGHT,
}
