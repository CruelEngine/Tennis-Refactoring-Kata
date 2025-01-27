import { Player } from './Player';
import { TennisGame } from './TennisGame';


export class TennisGame1 implements TennisGame {
  private player1: Player;
  private player2: Player;


  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1.incrementScore();
    else
      this.player2.incrementScore();
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this.player1.score === this.player2.score) {
      switch (this.player1.score) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;

      }
    }
    else if (this.player1.score >= 4 || this.player2.score >= 4) {
      const minusResult: number = this.player1.score - this.player2.score;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.player1.score;
        else { score += '-'; tempScore = this.player2.score; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }
}
