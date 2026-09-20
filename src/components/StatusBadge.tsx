import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive,
}) => {
  return (
    <View
      style={[
        styles.badge,
        isActive
          ? styles.activeBadge
          : styles.suspendedBadge,
      ]}
    >
      <View
        style={[
          styles.dot,
          isActive
            ? styles.activeDot
            : styles.suspendedDot,
        ]}
      />

      <Text
        style={[
          styles.text,
          isActive
            ? styles.activeText
            : styles.suspendedText,
        ]}
      >
        {isActive
          ? 'STATUS: VERIFIED ACTIVE PASS'
          : 'STATUS: PASS SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 27,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeBadge: {
    backgroundColor: '#D9FBE5',
    borderColor: '#57E38C',
  },

  suspendedBadge: {
    backgroundColor: '#FFE1E1',
    borderColor: '#FF7777',
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 7,
  },

  activeDot: {
    backgroundColor: '#149447',
  },

  suspendedDot: {
    backgroundColor: '#C62828',
  },

  text: {
    fontSize: 10,
    fontWeight: '800',
  },

  activeText: {
    color: '#17743A',
  },

  suspendedText: {
    color: '#B42323',
  },
});