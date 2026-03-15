import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';
import { chapter5Topics } from './questions/chapter5';
import { chapter6Topics } from './questions/chapter6';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHƯƠNG I: ỨNG DỤNG ĐẠO HÀM',
    description: 'Khảo sát và vẽ đồ thị của hàm số',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHƯƠNG II: NGUYÊN HÀM VÀ TÍCH PHÂN',
    description: 'Nguyên hàm, tích phân và ứng dụng',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHƯƠNG III: TOẠ ĐỘ TRONG KHÔNG GIAN',
    description: 'Phương pháp toạ độ trong không gian Oxyz',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHƯƠNG IV: PHÂN TÍCH VÀ XỬ LÍ DỮ LIỆU',
    description: 'Biểu diễn, phân tích và đọc hiểu dữ liệu',
    topics: chapter4Topics,
  },
  {
    id: 'c5',
    title: 'CHƯƠNG V: XÁC SUẤT CÓ ĐIỀU KIỆN',
    description: 'Các khái niệm và bài toán xác suất có điều kiện',
    topics: chapter5Topics,
  },
  {
    id: 'c6',
    title: 'CHƯƠNG VI: CÁC QUY TẮC TÍNH XÁC SUẤT',
    description: 'Quy tắc cộng, quy tắc nhân và ứng dụng',
    topics: chapter6Topics,
  }
];