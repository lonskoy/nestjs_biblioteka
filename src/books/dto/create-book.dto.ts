export class CreateBookDto {
    readonly name: string;
    readonly type: string;
    readonly author: string;
    readonly numberOfPages: number;
    readonly statusInRead: boolean;
    readonly reader: number;
  }