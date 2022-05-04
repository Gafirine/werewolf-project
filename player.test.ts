import { addNewPlayer, createRoster, Player } from "./player";
import { HunterRole, RoleName, VillagerRole } from "./roles";

describe("Test Player Creation", () => {
  test("It should create a player", () => {
    const player = new Player("myName", "an-id", RoleName.VILLAGER);

    expect(player).not.toBeNull();
  });

  test("It should create a hunter", () => {
    const player = new Player("myName", "an-id", RoleName.HUNTER);

    expect(player.role.name).toEqual(RoleName.HUNTER);

    expect((player.role as HunterRole).hasShot).toEqual(false);
  });

  test("Creating player should increase the number of players", () => {
    const rosterSize = 8;
    let players: Player[] = [];
    let availableRoles = createRoster(rosterSize);

    addNewPlayer(players, availableRoles, "my player", "123456");

    expect(players).toHaveLength(1);
    expect(availableRoles).toHaveLength(rosterSize - 1);
  });
});

describe("roles initialisation", () => {
  test("There should be the same amount of player than roles.", () => {
    expect(createRoster(7)).toHaveLength(7);
    expect(createRoster(7)).toContain(RoleName.WITCH);
    expect(createRoster(7)).toContain(RoleName.WEREWOLF);
    expect(createRoster(7)).toContain(RoleName.HUNTER);
  });
});
