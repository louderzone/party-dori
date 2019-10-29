/**
 * Metadata of a party
 */
export class Party {
  /**
   * The unique identifier of a party
   */
  id: string;

  /**
   * The unique identifier of the host
   * (e.g. Twitter ID)
   */
  host: string;

  /**
   * The message to be shared
   */
  message: string;
}
