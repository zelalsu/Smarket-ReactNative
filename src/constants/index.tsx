import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const window = {
  height,
  width,
};

export const basketBottomHeight = 220;

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';
