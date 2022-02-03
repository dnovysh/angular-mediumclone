import {Injectable} from "@angular/core";

@Injectable()
export class UtilsService {
  range = (start: number, end: number): number[] =>
    [...Array(end - start + 1).keys()].map(el => el + start)
}
