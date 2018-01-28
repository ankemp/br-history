import { Pipe, PipeTransform } from '@angular/core';

import { TooltipData } from '@app/models';

@Pipe({
  name: 'ttParse'
})
export class TtParsePipe implements PipeTransform {

  private getUnitType(data: TooltipData): string {
    switch (data.UnitType) {
      case 'ModifierPercent':
        return `${data.Value}%`;

      case 'Second':
        return `${data.Value}s`;

      default:
        return data.Value;
    }
  }

  private replace(tooltip: string, s: string, data: TooltipData): string {
    if (!!data) {
      tooltip = tooltip.replace(s, this.getUnitType(data));
    }
    return tooltip;
  }

  transform(tooltip: string, data: TooltipData[]): string {
    let newTooltip = tooltip;
    const matches = tooltip.match(/\{[a-z]*\}/g);
    if (!!matches) {
      matches.map(s => {
        const fStr = s.replace('{', '').replace('}', '');
        const rpl = data.find(f => f.Name.toLocaleLowerCase() === fStr);
        newTooltip = this.replace(newTooltip, s, rpl);
      });
    }
    return newTooltip;
  }

}
