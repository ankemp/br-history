import { Pipe, PipeTransform } from '@angular/core';

import { environment } from 'environments/environment';

@Pipe({
  name: 'assetRoute'
})
export class AssetRoutePipe implements PipeTransform {

  transform(assetPath: string, folders: string, ext: string): string {
    let path = `${environment.assetsRoute}`;
    if (folders) {
      path += `/${folders}`;
    }
    path += `/${assetPath}.${ext}`;
    return path;
  }

}
