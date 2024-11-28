import { Text, type TextProps, StyleSheet, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { ThemedText } from './ThemedText';
import React from 'react';

export type ThemedButtonProps = TouchableOpacityProps & {
  bgColor?: string;
  txtColor?: string;
  txt: string;
  my?: number,
  mx?: number,
  icon?: React.ReactNode;
};

export function ThemedButton({
  style,
  bgColor,
  txtColor,
  my = 0,
  mx = 0,
  txt,
  icon,
}: ThemedButtonProps) {
  

  return (
    <TouchableOpacity
     style={[ 
      styles.btnContainer, 
      bgColor && { backgroundColor: bgColor },  
      mx ? {marginHorizontal: mx} : undefined,
      my  ? {marginVertical: my} : undefined,
      style
    ]}>
      <ThemedText style={{ color: txtColor ? txtColor : '#fff'}}>{txt}</ThemedText>
      {icon && icon}
    </TouchableOpacity>    
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#9900ef",
    borderRadius: 8,
    flexDirection: 'row',
  },
  // fontColor: {
  //   color: txtColor ? txtColor : '#fff',
  // }  
});
