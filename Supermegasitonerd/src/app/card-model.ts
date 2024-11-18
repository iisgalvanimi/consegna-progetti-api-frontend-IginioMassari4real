export interface Card {
    name: string;
    set_name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    image_uris: {
      normal: string;
    };
  }