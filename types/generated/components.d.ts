import type { Schema, Struct } from '@strapi/strapi';

export interface CommonImageWithAlt extends Struct.ComponentSchema {
  collectionName: 'components_common_image_with_alts';
  info: {
    displayName: 'ImageWithAlt';
    icon: 'emotionHappy';
  };
  attributes: {
    Alt: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.image-with-alt': CommonImageWithAlt;
    }
  }
}
