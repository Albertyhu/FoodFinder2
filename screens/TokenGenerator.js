import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


export function generateToken(){
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
return `'${alpha[Math.floor(Math.random() * 26)]}${alpha[Math.floor(Math.random() * 26)]}${alpha[Math.floor(Math.random() * 26)]}${alpha[Math.floor(Math.random() * 26)]}'`;
}
