import React from 'react';
import { ScanCounterProps } from '../types/student';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';


export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
  onSuspend,
  isActive,
  showPeer,
  onPeerDemo,
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Campus Gate Verification Log
      </Text>

      <View style={styles.counterBox}>

        <Text style={styles.counterLabel}>
          Today's Gate Entries:
        </Text>

        <Text style={styles.counterValue}>
          {count}
        </Text>

      </View>

      <View style={styles.buttonRow}>

        <Pressable
          style={({ pressed }) => [
            styles.scanButton,
            pressed && styles.pressed,
          ]}
          onPress={onScan}
        >
          <Text style={styles.scanText}>
            +1 Scan at Gate
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.pressed,
          ]}
          onPress={onReset}
        >
          <Text style={styles.resetText}>
            Reset Scans
          </Text>
        </Pressable>

      </View>

      <Pressable
        style={({ pressed }) => [
          styles.suspendButton,
          pressed && styles.pressed,
        ]}
        onPress={onSuspend}
      >
        <Text style={styles.suspendText}>
          ⚠ {isActive
            ? 'Simulate Pass Suspension'
            : 'Reactivate Student Pass'}
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.peerButton,
          pressed && styles.pressed,
        ]}
        onPress={onPeerDemo}
      >
        <Text style={styles.peerText}>
          {showPeer
            ? 'Hide Peer Demo'
            : 'Show Peer Component Demo'}
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 13,
    marginBottom: 0,
  },

  title: {
    color: '#172033',
    fontSize: 11,
    fontWeight: '900',
    marginBottom: 12,
  },

  counterBox: {
    height: 41,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9E2ED',
    backgroundColor: '#F8FAFC',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 10,
    marginBottom: 9,
  },

  counterLabel: {
    color: '#536176',
    fontSize: 9,
  },

  counterValue: {
    color: '#007E99',
    fontSize: 20,
    fontWeight: '900',
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 9,
  },

  scanButton: {
    flex: 1,
    height: 27,
    borderRadius: 6,
    backgroundColor: '#00839D',

    justifyContent: 'center',
    alignItems: 'center',
  },

  scanText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },

  resetButton: {
    flex: 1,
    height: 27,
    borderRadius: 6,
    backgroundColor: '#E0E6EF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  resetText: {
    color: '#344054',
    fontSize: 9,
    fontWeight: '700',
  },

  suspendButton: {
    height: 29,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FF7777',
    backgroundColor: '#FFE1E1',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 9,
  },

  suspendText: {
    color: '#A82323',
    fontSize: 9,
    fontWeight: '900',
  },

  peerButton: {
    height: 26,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C8D4E2',

    justifyContent: 'center',
    alignItems: 'center',
  },

  peerText: {
    color: '#00758F',
    fontSize: 9,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.65,
  },
});