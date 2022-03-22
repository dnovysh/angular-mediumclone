import {Injectable} from "@angular/core";

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localstorage', e)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }
}
