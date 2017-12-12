import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToMin'
})
export class SecToMinPipe implements PipeTransform {

  transform(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    return `${minutes}m ${seconds}s`;
  }

}
