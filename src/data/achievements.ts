import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'Khởi đầu nan',
    description: 'Hoàn thành topic đầu tiên',
    icon: '🌱',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 1
  },
  {
    id: 'warm-up',
    title: 'Làm nóng máy',
    description: 'Hoàn thành 5 topic',
    icon: '🔥',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 5
  },
  {
    id: 'steady',
    title: 'Chăm chỉ',
    description: 'Hoàn thành 10 topic',
    icon: '⭐',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 10
  },
  {
    id: 'half-way',
    title: 'Nửa chặng đường',
    description: 'Hoàn thành 15 topic',
    icon: '🚀',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 15
  },
  {
    id: 'master',
    title: 'Đại cao thủ',
    description: 'Hoàn thành 25 topic',
    icon: '💎',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 25
  },
  {
    id: 'legend',
    title: 'Huyền thoại Toán 12',
    description: 'Hoàn thành toàn bộ 30 topic',
    icon: '👑',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 30
  },
  {
    id: 'all-round',
    title: 'Toàn diện',
    description: 'Hoàn thành ít nhất 1 topic ở cả 6 chương',
    icon: '🎯',
    condition: (progress) => {
      const topics = Object.keys(progress.completedTopics);
      return topics.some(id => id.startsWith('c1-')) &&
             topics.some(id => id.startsWith('c2-')) &&
             topics.some(id => id.startsWith('c3-')) &&
             topics.some(id => id.startsWith('c4-')) &&
             topics.some(id => id.startsWith('c5-')) &&
             topics.some(id => id.startsWith('c6-'));
    }
  },
  {
    id: 'chapter-1-master',
    title: 'Bá chủ Chương I',
    description: 'Hoàn thành toàn bộ 5 topic Chương I',
    icon: '📘',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c1-')).length >= 5
  },
  {
    id: 'chapter-2-master',
    title: 'Bá chủ Chương II',
    description: 'Hoàn thành toàn bộ 5 topic Chương II',
    icon: '📗',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c2-')).length >= 5
  },
  {
    id: 'chapter-3-master',
    title: 'Bá chủ Chương III',
    description: 'Hoàn thành toàn bộ 5 topic Chương III',
    icon: '📙',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c3-')).length >= 5
  },
  {
    id: 'chapter-4-master',
    title: 'Bá chủ Chương IV',
    description: 'Hoàn thành toàn bộ 5 topic Chương IV',
    icon: '📕',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c4-')).length >= 5
  },
  {
    id: 'chapter-5-master',
    title: 'Bá chủ Chương V',
    description: 'Hoàn thành toàn bộ 5 topic Chương V',
    icon: '🎲',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c5-')).length >= 5
  },
  {
    id: 'chapter-6-master',
    title: 'Bá chủ Chương VI',
    description: 'Hoàn thành toàn bộ 5 topic Chương VI',
    icon: '🧠',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter(id => id.startsWith('c6-')).length >= 5
  }
];