import storage from '@react-native-firebase/storage';
import React from 'react';
import { useState } from 'react';


  export const LIGHT_LEAK_IMG = 'light_leak.png';
  export const CURTAIN_IMG = 'curtain.png';
  export const DECORATIVE_MESH_LEFT_IMG = 'decorative_mesh_left.png';
  export const DECORATIVE_MESH_RIGHT_IMG = 'decorative_mesh_right.png';
  export const NET = 'net.png';
  export const FLOWER = 'flower.png';
  export const CURTAIN_BOTTOM_RIGHT_IMG = 'curtain_bottom_right.png';
  export const CURTAIN_LEFT_MORE_IMG = 'curtain_left_more.png';
  export const ALITLE_NET_IMG = 'alittle_net.png';
  export const GOLDEN_IMG = 'golden.png';
  export const CHECKBOX_IMG = 'Checkbox.png';
  export const CURTAIN_BOTTOM_LEFT_SMALL_IMG = 'curtain_bottom_left_small.png';
  export const CURTAIN_BOTTOM_RIGHT_SMALL_IMG = 'curtain_bottom_right_small.png';
  export const RED_NET_IMG = 'red_net.png';
  export const CURTAIN_BOTTOM_LEFT_SMALL_DARK_IMG = 'curtain_bottom_left_small_dark.png';
  export const CURTAIN_BOTTOM_RIGHT_SMALL__DARK_IMG = 'curtain_bottom_right_small_dark.png';
  export const CURTAIN_BOTTOM_LEFT_SMALL_LIGHT_IMG = 'curtain_bottom_left_small_light.png';
  export const CURTAIN_BOTTOM_RIGHT_SMALL__LIGHT_IMG = 'curtain_bottom_right_small_light.png';
  export const PEPSI_IMG = 'pepsi.png';

  export const getImageUrl = (path: string) => {
    try {
      const [url, setUrl] = useState<string>('https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fvi.pngtree.com%2Ffreepng%2Fgolden-creative-ray-element_4677062.html&psig=AOvVaw39k-SLbomQVlq2JFSwcOIy&ust=1694232905455000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCH3MWTmoEDFQAAAAAdAAAAABAP');
      const getUrl = async () => {
        const result = await storage().ref(path).getDownloadURL();
        if (result) setUrl(result);
      };
      getUrl();
      return url;
    } catch (error) {
      console.error("Error getting image URL:", error);
    }
  };