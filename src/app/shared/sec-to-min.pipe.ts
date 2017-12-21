import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToMin'
})
export class SecToMinPipe implements PipeTransform {

  transform(duration: number): string {
    let minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    if (minutes > 90) {
      const hours = Math.floor(minutes / 60);
      minutes = minutes - (hours * 60);
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m ${seconds}s`;
  }

}
