import { Player } from "./player";

/**
 * function that count votes
 * @param players array of players
 * @returns a dictionnary of playerId-number of opposed votes
 */
export function countVotes(players: Player[]): Record<string, number> {
  let votes: Record<string, number> = {};
  // initialize vote count for each player
  players.forEach((player) => {
    votes[player.id] = 0;
  });
  // for each voter add to the vote count of the voted
  for (let player of players) {
    let vote = player.vote;
    if (vote != null) {
      votes[vote] += 1;
    }
  }

  return votes;
}
/**
 * If a player has more votes => his id i returned
 * If there are exaequo => return null
 * If no player => return null
 */
export function getMaxVoted(
  playersVoted: Record<string, number>
): string | null {
  let playerMostVotedId: string | null = null;
  let maxVote = 0;
  let voteEquality: boolean = false;

  for (let [playerId, vote] of Object.entries(playersVoted)) {
    if (vote > maxVote) {
      maxVote = vote;
      playerMostVotedId = playerId;
    } else if (vote === maxVote) {
      voteEquality = true;
    }
  }

  if (voteEquality === true) {
    return null;
  }

  return playerMostVotedId;
}
