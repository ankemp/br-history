import { Pipe, PipeTransform } from '@angular/core';

import { Match } from '../models/match';

@Pipe({
  name: 'reduceStat'
})
export class ReduceStatPipe implements PipeTransform {

  private reduceStat(match: Match, stat: string, playerId: string): number {
    const participant = match.rosters.map(roster => {
      return roster.participants.find(p => (p.player.id === playerId));
    }).filter(Boolean).pop();
    return participant.stats[stat];
  }

  private reduceStats(matches: Match[], stat: string, playerId: string, average = false): number {
    let s = 0;
    s = matches.reduce((acc, match) => {
      acc += this.reduceStat(match, stat, playerId);
      return acc;
    }, 0);
    if (average) {
      s = Math.round(s /= matches.length);
    }
    return s;
  }

  transform(matches: Match | Match[], stat: string, playerId: string, average?: string): number {
    if (Array.isArray(matches)) {
      return this.reduceStats(matches, stat, playerId, (average === 'average'));
    }
    return this.reduceStat(matches, stat, playerId);
  }

}
