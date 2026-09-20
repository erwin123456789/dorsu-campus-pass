import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';


import {
  mainStudent,
  peerStudent,
} from './src/data/students';

export default function App() {

  const [gateScans, setGateScans] =
    useState<number>(0);

  const [isActive, setIsActive] =
    useState<boolean>(true);

  const [showPeer, setShowPeer] =
    useState<boolean>(true);

  const handleScan = () => {
    setGateScans(
      (previous) => previous + 1
    );
  };

  const handleReset = () => {
    setGateScans(0);
  };

  const handleSuspend = () => {
    setIsActive(
      (previous) => !previous
    );
  };

  const handlePeerDemo = () => {
    setShowPeer(
      (previous) => !previous
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#111A2C"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* PHONE TOP */}

        <View style={styles.phoneTop}>
          <View style={styles.camera} />
        </View>

        {/* APP SCREEN */}

        <View style={styles.screen}>

          {/* UNIVERSITY HEADER */}

          <View style={styles.header}>

            <Text style={styles.university}>
              DAVAO ORIENTAL STATE UNIVERSITY
            </Text>

            <Text style={styles.faculty}>
              FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
            </Text>

            <View style={styles.passBadge}>

              <Text style={styles.passText}>
                OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027
              </Text>

            </View>

          </View>

          {/* MAIN STUDENT */}

          <StudentCard
            student={mainStudent}
            isActive={isActive}
          />

          {/* COUNTER */}

          <ScanCounter
            count={gateScans}
            onScan={handleScan}
            onReset={handleReset}
            onSuspend={handleSuspend}
            isActive={isActive}
            showPeer={showPeer}
            onPeerDemo={handlePeerDemo}
          />

          {/* PEER COMPONENT DEMO */}

          {showPeer && (
            <View style={styles.peerContainer}>

              <Text style={styles.peerTitle}>
                PEER PROPS DEMO:
              </Text>

              <StudentCard
                student={peerStudent}
                isActive={true}
              />

            </View>
          )}

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#111A2C',
  },

  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#111A2C',
  },

  phoneTop: {
    height: 20,
    backgroundColor: '#111A2C',

    justifyContent: 'center',
    alignItems: 'center',
  },

  camera: {
    width: 75,
    height: 20,
    backgroundColor: '#030712',

    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  screen: {
    flex: 1,

    backgroundColor: '#F1F5F9',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingHorizontal: 7,
    paddingTop: 13,
    paddingBottom: 20,
  },

  header: {
    backgroundColor: '#087F97',

    borderRadius: 15,

    paddingTop: 14,
    paddingBottom: 13,

    paddingHorizontal: 7,

    borderBottomWidth: 2,
    borderBottomColor: '#FF8A00',

    alignItems: 'center',

    marginBottom: 13,
  },

  university: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },

  faculty: {
    color: '#E8F8FA',
    fontSize: 7,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
  },

  passBadge: {
    backgroundColor: '#0057D9',

    borderRadius: 3,

    paddingHorizontal: 5,
    paddingVertical: 3,

    marginTop: 10,
  },

  passText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '800',
  },

  peerContainer: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 0,
  },

  peerTitle: {
    position: 'absolute',
    zIndex: 20,

    left: 26,
    top: 20,

    color: '#00758F',
    fontSize: 8,
    fontWeight: '900',
  },

});