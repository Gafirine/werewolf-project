import {
  Role,
  RoleName,
  HunterRole,
  VillagerRole,
  WerewolfRole,
  WitchRole,
} from "./roles";
import { shuffle } from "./utils";

export class Player {
  alive: boolean;
  name: string;
  id: string;
  role: Role;
  vote: string | null;
  constructor(name: string, id: string, role: RoleName) {
    this.alive = true;
    this.name = name;
    this.id = id;
    this.vote = null;

    switch (role) {
      case RoleName.HUNTER:
        this.role = new HunterRole();
        break;
      case RoleName.VILLAGER:
        this.role = new VillagerRole();
        break;
      case RoleName.WEREWOLF:
        this.role = new WerewolfRole();
        break;
      case RoleName.WITCH:
        this.role = new WitchRole();
        break;
    }
  }

  voteAgainst(target: Player) {
    if (!this.alive || !target.alive) {
      this.vote = null;
      return;
    }

    this.vote = target.id;
  }
}

export function createRoster(nbPlayer: number): RoleName[] {
  //creating base roles
  let rosterRoles: RoleName[] = [
    RoleName.HUNTER,
    RoleName.WEREWOLF,
    RoleName.WEREWOLF,
    RoleName.WITCH,
  ];

  // creating villagers for extra players
  if (nbPlayer > rosterRoles.length) {
    let nbNonAssignedRole = nbPlayer - rosterRoles.length;
    for (let i = 0; i < nbNonAssignedRole; i++) {
      rosterRoles.push(RoleName.VILLAGER);
    }
  }

  //shuffle the roles
  shuffle(rosterRoles);

  return rosterRoles;
}

function getAvailableRole(availableRoles: RoleName[]): RoleName | undefined {
  return availableRoles.pop();
}

function giveBackAvailableRole(
  availableRoles: RoleName[],
  role: RoleName
): void {
  availableRoles.push(role);
  shuffle(availableRoles);
}

export function addNewPlayer(
  players: Player[],
  availableRoles: RoleName[],
  name: string,
  id: string
): void {
  let role = getAvailableRole(availableRoles);
  if (role == null) {
    return;
  }

  let newPlayer = new Player(name, id, role);
  players.push(newPlayer);
}
