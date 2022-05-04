import { getMaxVoted } from "../src/vote";

describe("test voting system ", () => {
  test("should return correct vote value", () => {
    let normalVotes = {
      a: 1,
      b: 2,
      c: 3,
    };

    let exAequoVotes = {
      a: 1,
      b: 2,
      c: 2,
    };

    let emptyVotes = {};

    let zeroVotes = {
      a: 0,
      b: 0,
      c: 0,
    };

    expect(getMaxVoted(normalVotes)).toEqual("c");
    expect(getMaxVoted(exAequoVotes)).toEqual(null);
    expect(getMaxVoted(emptyVotes)).toEqual(null);
    expect(getMaxVoted(zeroVotes)).toEqual(null);
  });
});
