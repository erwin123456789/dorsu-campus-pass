export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  section: string;
  avatarUrl: string;
  campus: string;
  email?: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
  activeLabel?: string;
  suspendedLabel?: string;
}

export interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}