import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Party } from 'src/models/party';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor() { }

  /**
   * Gets an active session of the party from the socket service
   *
   * TODO: Use socket to check for existence and fetch party details. Create if not exists
   *
   * @param id The unique identifier of a on-going party
   */
  getParty(id: string): Observable<Party> {
    const party = new Party();
    party.id = id;
    party.host = 'Kano';
    return of(party);
  }
}
