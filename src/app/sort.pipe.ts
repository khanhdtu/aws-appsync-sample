import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [any], ...args: unknown[]): any {
    const sorted = value.sort(
      (a, b) => {
        const aDate = new Date(a.createdAt) as any;
        const bDate = new Date(b.createdAt) as any;
        return (bDate - aDate);
      }
    );
    return sorted;
  }

}
