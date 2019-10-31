import { Component, OnInit, Input } from '@angular/core';
import { Party } from 'src/models/party';
import { ActivatedRoute } from '@angular/router';
import { PartyService } from '../party.service';

/**
 * A party is a private room created by a host
 * Users can see details broadcasted by the host
 */
@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.sass']
})
export class PartyComponent implements OnInit {

  /**
   * The party details of the current view
   */
  @Input() party: Party;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly partyService: PartyService
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit() {
    this.getParty();
  }

  /**
   * Gets the party details from the given ID
   */
  getParty(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.partyService.getParty(id)
      .subscribe(party => this.party = party);
  }
}
