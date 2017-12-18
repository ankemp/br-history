import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../environments/environment';

@Pipe({
  name: 'assetRoute'
})
export class AssetRoutePipe implements PipeTransform {

  transform(assetPath: string, folders: string, ext: string): string {
    return `${environment.assetsRoute}/${folders}/${assetPath}.${ext}`;
  }

}
