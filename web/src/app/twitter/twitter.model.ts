export interface Twitter {
  'created_at': string,
  'id': number,
  'id_str':string,
  'text': string,
  'truncated': boolean,
  'entities': {
    'hashtags': [
      {
        'text': string,
        'indices': [
          number,
          number
        ]
      }
    ],
    'symbols': [],
    'user_mentions': [],
    'urls': [
      {
        'url': string,
        'expanded_url': string,
        'display_url': string,
        'indices': [
          number,
          number
        ]
      }
    ]
  },
  'metadata': {
    'iso_language_code': string,
    'result_type': string
  },
  'source': string,
  'in_reply_to_status_id': string,
  'in_reply_to_status_id_str': string,
  'in_reply_to_user_id': string,
  'in_reply_to_user_id_str': string,
  'in_reply_to_screen_name': string,
  'user': {
    'id': number,
    'id_str': string,
    'name': string,
    'screen_name': string,
    'location': string,
    'description': string,
    'url': string,
    'entities': {
      'description': {
        'urls': []
      }
    },
    'protected': boolean,
    'followers_count': number,
    'friends_count': number,
    'listed_count': number,
    'created_at': string,
    'favourites_count': number,
    'utc_offset': string,
    'time_zone': string,
    'geo_enabled': boolean,
    'verified': boolean,
    'statuses_count': number,
    'lang': string,
    'contributors_enabled': boolean,
    'is_translator': boolean,
    'is_translation_enabled': boolean,
    'profile_background_color': string,
    'profile_background_image_url': string,
    'profile_background_image_url_https': string,
    'profile_background_tile': boolean,
    'profile_image_url': string,
    'profile_image_url_https': string,
    'profile_banner_url': string,
    'profile_link_color': string,
    'profile_sidebar_border_color': string,
    'profile_sidebar_fill_color': string,
    'profile_text_color': string,
    'profile_use_background_image': boolean,
    'has_extended_profile': boolean,
    'default_profile': boolean,
    'default_profile_image': boolean,
    'following': boolean,
    'follow_request_sent': boolean,
    'notifications': boolean,
    'translator_type': string
  },
  'geo': string,
  'coordinates': string,
  'place': string,
  'contributors': string,
  'is_quote_status': boolean,
  'retweet_count': number,
  'favorite_count': number,
  'favorited': boolean,
  'retweeted': boolean,
  'possibly_sensitive': boolean,
  'lang': string
}
