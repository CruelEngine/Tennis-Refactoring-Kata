import { Player } from './Player';
import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {
  player1Score: number = 0;
  player2Score: number = 0;

  P1res: string = '';
  P2res: string = '';

  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {

    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getScore(): string {
    let score: string = '';
    if (this.player1.score === this.player2.score && this.player1.score < 4) {
      if (this.player1.score === 0)
        score = 'Love';
      if (this.player1.score === 1)
        score = 'Fifteen';
      if (this.player1.score === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.player1.score === this.player2.score && this.player1.score >= 3)
      score = 'Deuce';

    if (this.player1.score > 0 && this.player2.score === 0) {
      if (this.player1.score === 1)
        this.P1res = 'Fifteen';
      if (this.player1.score === 2)
        this.P1res = 'Thirty';
      if (this.player1.score === 3)
        this.P1res = 'Forty';

      this.P2res = 'Love';
      score = this.P1res + '-' + this.P2res;
    }
    if (this.player2.score > 0 && this.player1.score === 0) {
      if (this.player2.score === 1)
        this.P2res = 'Fifteen';
      if (this.player2.score === 2)
        this.P2res = 'Thirty';
      if (this.player2.score === 3)
        this.P2res = 'Forty';

      this.P1res = 'Love';
      score = this.P1res + '-' + this.P2res;
    }

    if (this.player1.score > this.player2.score && this.player1.score < 4) {
      if (this.player1.score === 2)
        this.P1res = 'Thirty';
      if (this.player1.score === 3)
        this.P1res = 'Forty';
      if (this.player2.score === 1)
        this.P2res = 'Fifteen';
      if (this.player2.score === 2)
        this.P2res = 'Thirty';
      score = this.P1res + '-' + this.P2res;
    }
    if (this.player2.score > this.player1.score && this.player2.score < 4) {
      if (this.player2.score === 2)
        this.P2res = 'Thirty';
      if (this.player2.score === 3)
        this.P2res = 'Forty';
      if (this.player1.score === 1)
        this.P1res = 'Fifteen';
      if (this.player1.score === 2)
        this.P1res = 'Thirty';
      score = this.P1res + '-' + this.P2res;
    }

    if (this.player1.score > this.player2.score && this.player2.score >= 3) {
      score = 'Advantage player1';
    }

    if (this.player2.score > this.player1.score && this.player1.score >= 3) {
      score = 'Advantage player2';
    }

    if (this.player1.score >= 4 && this.player2.score >= 0 && (this.player1.score - this.player2.score) >= 2) {
      score = 'Win for player1';
    }
    if (this.player2.score >= 4 && this.player1.score >= 0 && (this.player2.score - this.player1.score) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.player1.incrementScore();
  }

  P2Score(): void {
    this.player2.incrementScore();
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}
