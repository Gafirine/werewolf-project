import { Player } from "./player";

export enum RoleName {
  HUNTER,
  VILLAGER,
  WEREWOLF,
  WITCH,
}

// Should be an abstract class
export class Role {
  name: RoleName;
  constructor() {
    this.name = RoleName.VILLAGER;
  }
}

export class VillagerRole extends Role {
  constructor() {
    super();
    this.name = RoleName.VILLAGER;
  }
}

export class WerewolfRole extends Role {
  targetId: string | null;

  constructor() {
    super();
    this.name = RoleName.WEREWOLF;
    this.targetId = null;
  }

  chooseTarget(target: Player) {
    if (target.alive === true) {
      this.targetId = target.id;
    }
  }

  unTargetAll() {
    this.targetId = null;
  }
}

enum Potion {
  LIFE,
  DEATH,
}

export class WitchRole extends Role {
  hasLifePotion: boolean;
  hasDeathPotion: boolean;
  targetLifeId: string | null;
  targetDeathId: string | null;

  constructor() {
    super();
    this.name = RoleName.WITCH;
    this.hasLifePotion = true;
    this.hasDeathPotion = true;
    this.targetLifeId = null;
    this.targetDeathId = null;
  }

  usePotion(target: Player, potion: Potion) {
    if (potion === Potion.LIFE) {
      if (target.alive === false) {
        this.targetLifeId = target.id;
        this.hasLifePotion = false;
      }
    }

    if (potion === Potion.DEATH) {
      if (target.alive === true) {
        this.targetDeathId = target.id;
        this.hasDeathPotion = false;
      }
    }
  }

  unTargetAll() {
    this.targetDeathId = null;
    this.targetLifeId = null;
  }
}

export class HunterRole extends Role {
  hasShot: boolean;
  targetId: string | null;

  constructor() {
    super();
    this.name = RoleName.HUNTER;
    this.hasShot = false;
    this.targetId = null;
  }

  shoot(target: Player) {
    if (target.alive && this.hasShot === false) {
      this.targetId = target.id;
      this.hasShot = true;
    }
  }

  unTargetAll() {
    this.targetId = null;
  }
}
