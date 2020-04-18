import { IPost } from 'app/shared/model/jhipsterSampleApplication/post.model';

export interface ITag {
  id?: number;
  name?: string;
  posts?: IPost[];
}

export class Tag implements ITag {
  constructor(public id?: number, public name?: string, public posts?: IPost[]) {}
}
