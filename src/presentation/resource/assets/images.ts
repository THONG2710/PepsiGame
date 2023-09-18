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
  export const ICON_BACK = 'icon_back.png';
  export const CURTAIN_LEFT_BIG_IMG = 'curtain_left_big.png';
  export const CAKE_IMG = 'cake.png';
  export const BLUE_FLOWER_IMG = 'blue_flower.png';
  export const CURTAIN_DECORD_IMG = 'curtain_decord.png';  
  export const GODEN_FLOWER_IMG = 'goden_flower.png'; 
  export const ICON_LOGOUT_IMG = 'icon_logout.png'; 
  export const RED_FLOWER_IMG = 'red_flower.png'; 
  export const NET_RIGHT_IMG = 'net_fight.png'; 
  export const NET_I_IMG = 'net_i.png'; 
  export const NET_L_IMG = 'net_l.png';
  export const DECORDLEFT_IMG = 'decordLeft.png';
  export const DECORDRIGHT_IMG = 'decord_right.png';
  export const DRUM_IMG = 'drum.png';
  export const DECORDBOTTOM_IMG = 'decordBottom.png';
  export const LIGHT_BLUE_FLOWER_IMG = 'light_blue_flower.png';
  export const HEAD_IMG = 'head.png';
  export const YELLOW_FLOWER2_IMG = 'yellow_flower2.png';
  export const YELLOW_FLOWER3_IMG = 'yellow_flower3.png';
  export const FIREWORK_IMG = 'fireWork.png';
  export const BOTTOM_IMG = 'bottom.png';
  export const ARROW_UP_IMG = 'arrow_up.png';
  export const BANG_IMG = 'bang.png';
  export const PEPSIAN_IMG = 'PepsiAn.png';
  export const POPUP_BOTTOM_LEFT_IMG = 'popupBottomLeft.png';
  export const POPUP_BOTTOM_RIGHT_IMG = 'popupBottomRight.png';
  export const AQUATER_IMG = 'aquarter.png';
  export const BALLLEFT_IMG = 'ballLeft.png';

  export const getImageUrl = (path: string) => {
    try {
      const [url, setUrl] = useState<string>('https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fvi.pngtree.com%2Ffreepng%2Fgolden-creative-ray-element_4677062.html&psig=AOvVaw39k-SLbomQVlq2JFSwcOIy&ust=1694232905455000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCH3MWTmoEDFQAAAAAdAAAAABAP');
      const getUrl = async () => {
        const ref = storage().ref(path);
        const url = await ref.getDownloadURL();
        if (url) setUrl(url);
      };
      getUrl();
      return url;
    } catch (error) {
      console.error("Error getting image URL:", error);
    }
  };