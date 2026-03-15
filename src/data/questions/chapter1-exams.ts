import { Topic } from '../../types';

export const chapter1ExamTopics: Topic[] = [
{
  id: 'c1-e1',
  title: 'Đề số 1 - Tổng ôn chương hàm số',
  description: 'Đề luyện tập chương ứng dụng đạo hàm.',
  questions: [
    {
      id: 'c1-e1-q1',
      type: 'single-choice',
      text: 'Cho hàm số $y=-x^3+3x^2-3x+2$. Khẳng định nào sau đây đúng?',
      options: [
        'Hàm số đồng biến trên $\\mathbb{R}$.',
        'Hàm số nghịch biến trên $\\mathbb{R}$.',
        'Hàm số đồng biến trên khoảng $(-\\infty;1)$ và nghịch biến trên khoảng $(1;+\\infty)$.',
        'Hàm số nghịch biến trên khoảng $(-\\infty;1)$ và đồng biến trên khoảng $(1;+\\infty)$.'
      ],
      correctAnswerIndex: 1,
      explanation: 'Ta có $y\'=-3(x-1)^2\\le 0$ với mọi $x$, nên hàm số nghịch biến trên $\\mathbb{R}$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q2',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ có đồ thị như hình bên. Hàm số đã cho đồng biến trên khoảng nào trong các khoảng dưới đây?',
      options: ['$(0;2)$', '$(1;+\\infty)$', '$(-\\infty;1)$', '$(-2;1)$'],
      correctAnswerIndex: 1,
      explanation: 'Dựa vào chiều tăng của đồ thị, hàm số đồng biến trên $(1;+\\infty)$.',
      images: [
        {
          src: '/question-assets/c1/de1/p1-q2.png',
          alt: 'Đồ thị câu 2 đề 1',
          caption: 'Hình minh họa câu 2'
        }
      ],
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q3',
      type: 'single-choice',
      text: 'Đồ thị hàm số $y=\\dfrac{3x-1}{x+2}$ có đường tiệm cận đứng là:',
      options: ['$x=-2$', '$y=-2$', '$y=3$', '$x=3$'],
      correctAnswerIndex: 0,
      explanation: 'Mẫu số bằng 0 tại $x=-2$, nên tiệm cận đứng là $x=-2$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q4',
      type: 'single-choice',
      text: 'Hàm số nào sau đây không có điểm cực trị?',
      options: ['$y=x^2$', '$y=x^3$', '$y=x^4$', '$y=-x^2$'],
      correctAnswerIndex: 1,
      explanation: 'Hàm số $y=x^3$ có đạo hàm bằng 0 tại $x=0$ nhưng không đổi dấu, nên không có cực trị.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q5',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ có bảng biến thiên như sau. Điểm cực đại của hàm số đã cho là:',
      options: ['$x=-7$', '$x=-4$', '$x=-3$', '$x=-6$'],
      correctAnswerIndex: 0,
      explanation: 'Điểm cực đại xuất hiện tại nơi đạo hàm đổi dấu từ dương sang âm, nên là $x=-7$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q6',
      type: 'single-choice',
      text: 'Giá trị lớn nhất của hàm số $y=x^4-2x^2+15$ trên đoạn $[-3;2]$ là:',
      options: ['54', '78', '48', '6'],
      correctAnswerIndex: 1,
      explanation: 'So sánh tại các đầu mút và các điểm tới hạn, GTLN là $78$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 4,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q7',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đồ thị bên dưới. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số trên đoạn $[1;3]$. Giá trị của $M+m$ bằng:',
      options: ['4', '-6', '-2', '-4'],
      correctAnswerIndex: 3,
      explanation: 'Đọc trên đồ thị, giá trị lớn nhất và nhỏ nhất trên đoạn $[1;3]$ cho tổng bằng $-4$.',
      images: [
        {
          src: '/question-assets/c1/de1/p1-q7.png',
          alt: 'Đồ thị câu 7 đề 1',
          caption: 'Hình minh họa câu 7'
        }
      ],
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q8',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ có bảng biến thiên như sau. Hỏi đồ thị của hàm số đã cho có tất cả bao nhiêu đường tiệm cận đứng và tiệm cận ngang?',
      options: ['4', '1', '2', '3'],
      correctAnswerIndex: 3,
      explanation: 'Theo bảng biến thiên, có 1 tiệm cận đứng và 2 tiệm cận ngang, tổng là 3.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q9',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ có đạo hàm $f\'(x)=\\dfrac{x(x-1)^3}{(x+2)^4}$. Số điểm cực trị của hàm số đã cho là:',
      options: ['0', '1', '2', '3'],
      correctAnswerIndex: 3,
      explanation: 'Theo đáp án chuẩn của đề là D.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q10',
      type: 'single-choice',
      text: 'Cho hàm số $y=f(x)$ liên tục và nghịch biến trên $[1;3]$. Khẳng định nào sau đây đúng?',
      options: [
        'Giá trị lớn nhất trên $[1;3]$ là $f(3)$.',
        'Giá trị nhỏ nhất trên $[1;3]$ là $f(2)$.',
        'Giá trị lớn nhất trên $[1;3]$ là $f(1)$.',
        'Giá trị nhỏ nhất trên $[1;3]$ là $f(1)$.'
      ],
      correctAnswerIndex: 2,
      explanation: 'Hàm nghịch biến trên đoạn nên giá trị lớn nhất đạt tại đầu trái $x=1$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q11',
      type: 'single-choice',
      text: 'Hàm số nào dưới đây nghịch biến trên $\\mathbb{R}$?',
      options: ['$y=x^2$', '$y=\\dfrac{2x+1}{x-1}$', '$y=-x^3-2x$', '$y=x^3$'],
      correctAnswerIndex: 2,
      explanation: 'Ta có $y\'=-3x^2-2<0$ với mọi $x\\in\\mathbb{R}$.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q12',
      type: 'single-choice',
      text: 'Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ bên. Số điểm cực trị của hàm số đã cho là:',
      options: ['2', '3', '0', '1'],
      correctAnswerIndex: 0,
      explanation: 'Theo hình vẽ và đáp án chuẩn của đề, hàm số có 2 điểm cực trị.',
      images: [
        {
          src: '/question-assets/c1/de1/p1-q12.png',
          alt: 'Đồ thị câu 12 đề 1',
          caption: 'Hình minh họa câu 12'
        }
      ],
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 5,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q13',
      type: 'true-false',
      text: 'Cho hàm số $f(x)=x^3-3x+91$. Xét tính đúng sai của các phát biểu sau.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Hàm số đã cho có đạo hàm là $f\'(x)=3x^2-3$.',
        'Phương trình $f\'(x)=0$ có tập nghiệm là $S=\\{1\\}$.',
        '$f(1)=89$.',
        'Giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-2;2]$ bằng $89$.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'Đáp án phần II của Câu 1 là Đ, S, Đ, Đ.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 6,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q14',
      type: 'true-false',
      text: 'Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị của đạo hàm $y=f\'(x)$ như hình vẽ. Xét tính đúng sai của các phát biểu sau.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        '$f\'(x)=0$ khi $x=0$ hoặc $x=1$.',
        'Hàm số $y=f(x)$ nghịch biến trên $(0;1)$.',
        'Hàm số $y=f(x)$ có 2 điểm cực trị.',
        '$f\\left(\\dfrac{1}{2}\\right)>f(1)$.'
      ],
      trueFalseAnswers: [true, false, true, false],
      explanation: 'Đáp án phần II của Câu 2 là Đ, S, Đ, S.',
      images: [
        {
          src: '/question-assets/c1/de1/p2-q2.png',
          alt: 'Đồ thị đạo hàm câu đúng sai số 2',
          caption: 'Hình minh họa cho câu đúng/sai'
        }
      ],
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 6,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q15',
      type: 'short-answer',
      text: 'Đồ thị hàm số $y=\\dfrac{-2x^2+x+4}{x+1}$ có phương trình đường tiệm cận xiên là $y=-2x+b$. Tìm giá trị của $b$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '2',
      explanation: 'Theo bảng đáp án phần III của Đề 1, Câu 1 có đáp án là 2.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 7,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q16',
      type: 'short-answer',
      text: 'Số điểm cực trị của hàm số $y=(x^2-2x)e^x$ là bao nhiêu?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '2',
      explanation: 'Theo bảng đáp án phần III của Đề 1, Câu 4 có đáp án là 2.',
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 7,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    },
    {
      id: 'c1-e1-q17',
      type: 'short-answer',
      text: 'Một người nông dân đứng ở góc A của hình chữ nhật ABCD, với AD = 2 km và AB = 6 km, muốn đi đến C nhanh nhất như hình vẽ. Hỏi điểm E phải cách D bao xa để tổng thời gian di chuyển là ngắn nhất? (Làm tròn đến hàng phần trăm).',
      options: [],
      correctAnswerIndex: 0,
      answerText: '1,18',
      explanation: 'Theo bảng đáp án phần III của Đề 1, Câu 6 có đáp án là 1,18.',
      images: [
        {
          src: '/question-assets/c1/de1/p3-q6.png',
          alt: 'Hình minh họa câu trả lời ngắn số 6',
          caption: 'Hình chữ nhật và đường đi tối ưu'
        }
      ],
      source: {
        title: '30 đề tổng ôn tập chương ứng dụng đạo hàm',
        page: 8,
        exam: 'Đề số 1',
        provider: 'PDF'
      }
    }
  ]
},
  {
    id: 'c1-e2',
    title: 'Đề số 2 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c1-e3',
    title: 'Đề số 3 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c1-e4',
    title: 'Đề số 4 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c1-e5',
    title: 'Đề số 5 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c1-e6',
    title: 'Đề số 6 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c1-e7',
    title: 'Đề số 7 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c1-e8',
    title: 'Đề số 8 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c1-e9',
    title: 'Đề số 9 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c1-e10',
    title: 'Đề số 10 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 10 vào đây
    ]
  },
  {
    id: 'c1-e11',
    title: 'Đề số 11 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 11 vào đây
    ]
  },
  {
    id: 'c1-e12',
    title: 'Đề số 12 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 12 vào đây
    ]
  },
  {
    id: 'c1-e13',
    title: 'Đề số 13 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 13 vào đây
    ]
  },
  {
    id: 'c1-e14',
    title: 'Đề số 14 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 14 vào đây
    ]
  },
  {
    id: 'c1-e15',
    title: 'Đề số 15 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 15 vào đây
    ]
  },
  {
    id: 'c1-e16',
    title: 'Đề số 16 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 16 vào đây
    ]
  },
  {
    id: 'c1-e17',
    title: 'Đề số 17 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 17 vào đây
    ]
  },
  {
    id: 'c1-e18',
    title: 'Đề số 18 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 18 vào đây
    ]
  },
  {
    id: 'c1-e19',
    title: 'Đề số 19 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 19 vào đây
    ]
  },
  {
    id: 'c1-e20',
    title: 'Đề số 20 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 20 vào đây
    ]
  },
  {
    id: 'c1-e21',
    title: 'Đề số 21 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 21 vào đây
    ]
  },
  {
    id: 'c1-e22',
    title: 'Đề số 22 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 22 vào đây
    ]
  },
  {
    id: 'c1-e23',
    title: 'Đề số 23 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 23 vào đây
    ]
  },
  {
    id: 'c1-e24',
    title: 'Đề số 24 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 24 vào đây
    ]
  },
  {
    id: 'c1-e25',
    title: 'Đề số 25 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 25 vào đây
    ]
  },
  {
    id: 'c1-e26',
    title: 'Đề số 26 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 26 vào đây
    ]
  },
  {
    id: 'c1-e27',
    title: 'Đề số 27 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 27 vào đây
    ]
  },
  {
    id: 'c1-e28',
    title: 'Đề số 28 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 28 vào đây
    ]
  },
  {
    id: 'c1-e29',
    title: 'Đề số 29 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 29 vào đây
    ]
  },
  {
    id: 'c1-e30',
    title: 'Đề số 30 - Tổng ôn chương hàm số',
    description: 'Đề luyện tập chương ứng dụng đạo hàm.',
    questions: [
      // dán đề 30 vào đây
    ]
  }
];