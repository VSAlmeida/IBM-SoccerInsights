export interface Entities {
    'type': string,
    'text': string,
    'mentions': [
      {
        'text': string,
        'location': [
          number,
          number
        ]
      }
    ],
    'count': number,
    'confidence': number
   }