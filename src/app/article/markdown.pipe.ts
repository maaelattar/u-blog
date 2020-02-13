import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  transform(content: any, ...args: any[]): any {
    return marked(content, { sanitize: true });
  }
}
