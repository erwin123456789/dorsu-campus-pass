import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { StudentCardProps } from '../types/student';
import { StatusBadge } from './StatusBadge';

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  isActive,
}) => {
  return (
    <View style={styles.card}>

      <View style={styles.studentRow}>

        <Image
          source={{ uri: student.avatarUrl }}
          style={styles.avatar}
        />

        <View style={styles.details}>

          <Text style={styles.name}>
            {student.name}
          </Text>

          <Text style={styles.id}>
            ID: <Text style={styles.idValue}>
              {student.idNumber}
            </Text>
          </Text>

          <Text style={styles.program}>
            {student.program}
          </Text>

          <Text style={styles.year}>
            {student.yearLevel} — {student.section}
          </Text>

        </View>

      </View>

      <StatusBadge isActive={isActive} />

      <Text style={styles.campus}>
        Campus: {student.campus}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 13,
    marginBottom: 11,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#00839D',
    marginRight: 12,
  },

  details: {
    flex: 1,
  },

  name: {
    color: '#172033',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 3,
  },

  id: {
    color: '#007D99',
    fontSize: 9,
    fontWeight: '700',
    marginBottom: 2,
  },

  idValue: {
    fontWeight: '900',
    fontStyle: 'italic',
  },

  program: {
    color: '#3F4D63',
    fontSize: 9,
    marginBottom: 2,
  },

  year: {
    color: '#718096',
    fontSize: 9,
  },

  campus: {
    color: '#718096',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 8,
  },
});