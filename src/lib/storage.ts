import type { TrackId } from '@/data/mockData';
import { buildStudent } from '@/data/mockData';
import type { Student } from '@/data/mockData';

const TRACK_KEY = 'abtalks_track';
const NAME_KEY = 'abtalks_name';
const STUDENT_KEY = 'abtalks_student_state';

export function saveTrack(track: TrackId): void {
  localStorage.setItem(TRACK_KEY, track);
}

export function getSavedTrack(): TrackId | null {
  const v = localStorage.getItem(TRACK_KEY);
  return v as TrackId | null;
}

export function getSavedName(): string | null {
  return localStorage.getItem(NAME_KEY);
}

export function getOnboardedStudent(): Student {
  const track = getSavedTrack();
  const name = getSavedName();
  const overrides: Partial<Student> = {};

  if (name) {
    overrides.name = name;
    overrides.avatarInitials = name.slice(0, 2).toUpperCase();
  }
  if (track) {
    const trackLabels: Record<TrackId, string> = {
      fullstack: 'Full Stack Development',
      aiml: 'AI / ML',
      cybersecurity: 'Cybersecurity',
      appdev: 'App Development',
      uiux: 'UI/UX + Frontend',
    };
    overrides.track = trackLabels[track];
  }
  return buildStudent(overrides);
}

export function hasOnboarded(): boolean {
  return !!localStorage.getItem(TRACK_KEY);
}

// Persist runtime student state (freeze/recovery changes)
export function saveStudentState(s: Student): void {
  try {
    localStorage.setItem(STUDENT_KEY, JSON.stringify(s));
  } catch {
    /* ignore quota */
  }
}

export function loadStudentState(): Student | null {
  try {
    const raw = localStorage.getItem(STUDENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Student;
  } catch {
    return null;
  }
}
