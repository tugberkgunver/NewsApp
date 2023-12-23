import React from 'react';
import {Image} from 'react-native';
import styles from './BannerImage.style';

const BannerImage = ({bannerImages}) => {
  return bannerImages.map(banner => (
    <Image style={styles.bannerImage} source={{uri: banner.imageUrl}} />
  ));
};

export default BannerImage;
