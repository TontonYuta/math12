import { Topic } from '../../types';

export const chapter6Topics: Topic[] = [
  {
    id: 'c6-t1',
    title: 'Phép thử ngẫu nhiên và không gian mẫu',
    description: 'Nhận biết phép thử, kết quả có thể xảy ra và xác định không gian mẫu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q6-1-1',
        text: 'Gieo một con xúc xắc cân đối một lần. Số phần tử của không gian mẫu là:',
        options: ['4', '5', '6', '8'],
        correctAnswerIndex: 2,
        explanation: 'Không gian mẫu là $\\{1,2,3,4,5,6\\}$ nên có 6 phần tử.'
      },
      {
        id: 'q6-1-2',
        text: 'Tung một đồng xu một lần. Không gian mẫu là:',
        options: ['$\\{S, N\\}$', '$\\{0,1,2\\}$', '$\\{1,2,3,4,5,6\\}$', '$\\{\\text{chẵn, lẻ}\\}$'],
        correctAnswerIndex: 0,
        explanation: 'Kết quả có thể là sấp hoặc ngửa.'
      },
      {
        id: 'q6-1-3',
        text: 'Tung đồng xu hai lần. Số phần tử của không gian mẫu là:',
        options: ['2', '3', '4', '6'],
        correctAnswerIndex: 2,
        explanation: 'Các kết quả là $(S,S),(S,N),(N,S),(N,N)$ nên có 4 phần tử.'
      },
      {
        id: 'q6-1-4',
        text: 'Gieo đồng thời hai con xúc xắc cân đối. Số phần tử của không gian mẫu là:',
        options: ['12', '18', '24', '36'],
        correctAnswerIndex: 3,
        explanation: 'Mỗi xúc xắc có 6 khả năng, nên tổng số kết quả là $6\\cdot 6 = 36$.'
      },
      {
        id: 'q6-1-5',
        text: 'Rút ngẫu nhiên 1 thẻ từ 10 thẻ được đánh số từ 1 đến 10. Số phần tử của không gian mẫu là:',
        options: ['5', '10', '20', '100'],
        correctAnswerIndex: 1,
        explanation: 'Có 10 thẻ khác nhau nên có 10 kết quả có thể xảy ra.'
      },
      {
        id: 'q6-1-6',
        text: 'Biến cố là:',
        options: [
          'Một tập con của không gian mẫu',
          'Một phần tử bất kỳ không thuộc không gian mẫu',
          'Giá trị trung bình của phép thử',
          'Một công thức tính xác suất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố là tập hợp các kết quả thuận lợi trong không gian mẫu.'
      },
      {
        id: 'q6-1-7',
        text: 'Biến cố chắc chắn là biến cố:',
        options: [
          'Trùng với không gian mẫu',
          'Không có phần tử nào',
          'Chỉ có 1 phần tử',
          'Có xác suất bằng 0'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố chắc chắn luôn xảy ra nên chính là toàn bộ không gian mẫu.'
      },
      {
        id: 'q6-1-8',
        text: 'Biến cố không thể là biến cố:',
        options: [
          'Rỗng',
          'Trùng với không gian mẫu',
          'Có mọi phần tử',
          'Có xác suất bằng 1'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố không thể không chứa kết quả nào nên là tập rỗng.'
      },
      {
        id: 'q6-1-9',
        text: 'Gieo một con xúc xắc. Biến cố A: “ra số chẵn” có các phần tử là:',
        options: ['$\\{1,3,5\\}$', '$\\{2,4,6\\}$', '$\\{2,3,4\\}$', '$\\{1,2,3\\}$'],
        correctAnswerIndex: 1,
        explanation: 'Các mặt chẵn là 2, 4, 6.'
      },
      {
        id: 'q6-1-10',
        text: 'Gieo một con xúc xắc. Biến cố B: “ra số lớn hơn 4” có số phần tử là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Các kết quả lớn hơn 4 là 5 và 6 nên có 2 phần tử.'
      }
    ]
  },
  {
    id: 'c6-t2',
    title: 'Xác suất của biến cố',
    description: 'Tính xác suất của biến cố trong mô hình đồng khả năng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q6-2-1',
        text: 'Trong mô hình đồng khả năng, xác suất của biến cố A được tính bởi:',
        options: [
          '$P(A)=\\dfrac{n(A)}{n(\\Omega)}$',
          '$P(A)=n(A)+n(\\Omega)$',
          '$P(A)=\\dfrac{n(\\Omega)}{n(A)}$',
          '$P(A)=n(A)\\cdot n(\\Omega)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xác suất bằng số phần tử thuận lợi chia cho số phần tử của không gian mẫu.'
      },
      {
        id: 'q6-2-2',
        text: 'Gieo một con xúc xắc. Xác suất để ra số 5 là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Chỉ có 1 kết quả thuận lợi trong 6 kết quả đồng khả năng.'
      },
      {
        id: 'q6-2-3',
        text: 'Gieo một con xúc xắc. Xác suất để ra số chẵn là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation: 'Có 3 kết quả thuận lợi là 2,4,6 trên 6 kết quả nên xác suất là $3/6=1/2$.'
      },
      {
        id: 'q6-2-4',
        text: 'Tung một đồng xu cân đối hai lần. Xác suất để có đúng một lần ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 1,
        explanation: 'Các kết quả thuận lợi là $(N,S)$ và $(S,N)$, có 2 trên 4 kết quả.'
      },
      {
        id: 'q6-2-5',
        text: 'Gieo đồng thời hai con xúc xắc. Xác suất để tổng số chấm bằng 7 là:',
        options: ['$\\dfrac{1}{12}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{7}{36}$'],
        correctAnswerIndex: 1,
        explanation: 'Các cặp thuận lợi là $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ nên có 6 trên 36 kết quả, bằng $1/6$.'
      },
      {
        id: 'q6-2-6',
        text: 'Giá trị của xác suất luôn thuộc khoảng:',
        options: ['$(-\\infty;+\\infty)$', '$[0;1]$', '$[1;+\\infty)$', '$(-1;1)$'],
        correctAnswerIndex: 1,
        explanation: 'Xác suất luôn nằm trong đoạn từ 0 đến 1.'
      },
      {
        id: 'q6-2-7',
        text: 'Nếu biến cố A chắc chắn thì $P(A)$ bằng:',
        options: ['0', '$\\dfrac{1}{2}$', '1', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: 'Biến cố chắc chắn luôn xảy ra nên có xác suất bằng 1.'
      },
      {
        id: 'q6-2-8',
        text: 'Nếu biến cố A không thể thì $P(A)$ bằng:',
        options: ['0', '1', '$\\dfrac{1}{2}$', 'Âm'],
        correctAnswerIndex: 0,
        explanation: 'Biến cố không thể không bao giờ xảy ra nên xác suất bằng 0.'
      },
      {
        id: 'q6-2-9',
        text: 'Rút ngẫu nhiên 1 thẻ từ các số 1 đến 10. Xác suất rút được số nguyên tố là:',
        options: ['$\\dfrac{1}{5}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 1,
        explanation: 'Các số nguyên tố là 2,3,5,7 nên có 4 kết quả thuận lợi trên 10 kết quả, xác suất là $4/10=2/5$.'
      },
      {
        id: 'q6-2-10',
        text: 'Rút ngẫu nhiên 1 học sinh từ 20 học sinh, trong đó có 8 nữ. Xác suất chọn được học sinh nữ là:',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{1}{2}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất là $8/20=2/5$.'
      }
    ]
  },
  {
    id: 'c6-t3',
    title: 'Quy tắc cộng xác suất',
    description: 'Tính xác suất của hợp hai biến cố bằng quy tắc cộng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q6-3-1',
        text: 'Công thức cộng xác suất của hai biến cố A, B là:',
        options: [
          '$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$',
          '$P(A\\cup B)=P(A)+P(B)$',
          '$P(A\\cup B)=P(A)P(B)$',
          '$P(A\\cup B)=P(A)-P(B)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức cộng xác suất tổng quát cho hai biến cố.'
      },
      {
        id: 'q6-3-2',
        text: 'Nếu A và B xung khắc thì:',
        options: [
          '$P(A\\cup B)=P(A)+P(B)$',
          '$P(A\\cup B)=P(A)P(B)$',
          '$P(A\\cup B)=P(A)-P(B)$',
          '$P(A\\cup B)=0$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì $A\\cap B=\\varnothing$ nên $P(A\\cap B)=0$, công thức rút gọn còn tổng hai xác suất.'
      },
      {
        id: 'q6-3-3',
        text: 'Gieo một con xúc xắc. Gọi A: “ra số chẵn”, B: “ra số lớn hơn 4”. Khi đó $P(A\\cup B)$ bằng:',
        options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 2,
        explanation: 'A={2,4,6}, B={5,6} nên $A\\cup B={2,4,5,6}$, có 4 kết quả trên 6, xác suất là $2/3$.'
      },
      {
        id: 'q6-3-4',
        text: 'Nếu $P(A)=0,4$, $P(B)=0,5$, $P(A\\cap B)=0,2$ thì $P(A\\cup B)$ bằng:',
        options: ['0,5', '0,6', '0,7', '0,9'],
        correctAnswerIndex: 2,
        explanation: '$P(A\\cup B)=0,4+0,5-0,2=0,7$.'
      },
      {
        id: 'q6-3-5',
        text: 'Nếu hai biến cố A, B xung khắc và $P(A)=0,3$, $P(B)=0,2$ thì $P(A\\cup B)$ bằng:',
        options: ['0,1', '0,5', '0,6', '0,9'],
        correctAnswerIndex: 1,
        explanation: 'Vì xung khắc nên xác suất hợp bằng tổng: $0,3+0,2=0,5$.'
      },
      {
        id: 'q6-3-6',
        text: 'Biến cố “A hoặc B xảy ra” được biểu diễn bởi:',
        options: ['$A\\cap B$', '$A\\cup B$', '$\\overline{A}$', '$\\varnothing$'],
        correctAnswerIndex: 1,
        explanation: '“A hoặc B xảy ra” là hợp của hai biến cố.'
      },
      {
        id: 'q6-3-7',
        text: 'Nếu $A \\subset B$ thì $A\\cup B$ bằng:',
        options: ['A', 'B', '$A\\cap B$', '$\\varnothing$'],
        correctAnswerIndex: 1,
        explanation: 'Nếu A là tập con của B thì hợp của chúng chính là B.'
      },
      {
        id: 'q6-3-8',
        text: 'Gieo một con xúc xắc. Xác suất để ra số chẵn hoặc số chia hết cho 3 là:',
        options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 2,
        explanation: 'A={2,4,6}, B={3,6} nên $A\\cup B={2,3,4,6}$, có 4 kết quả trên 6 nên xác suất là $2/3$.'
      },
      {
        id: 'q6-3-9',
        text: 'Nếu $P(A\\cup B)=P(A)+P(B)$ thì có thể kết luận:',
        options: ['A và B xung khắc', 'A và B độc lập', 'A chứa B', 'B chứa A'],
        correctAnswerIndex: 0,
        explanation: 'Điều này xảy ra khi $P(A\\cap B)=0$, tức là hai biến cố xung khắc.'
      },
      {
        id: 'q6-3-10',
        text: 'Trong công thức cộng xác suất, phần bị trừ đi là:',
        options: [
          '$P(A\\cap B)$',
          '$P(A\\cup B)$',
          '$P(\\overline{A})$',
          '$P(\\overline{B})$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta phải trừ $P(A\\cap B)$ để tránh tính trùng phần giao.'
      }
    ]
  },
  {
    id: 'c6-t4',
    title: 'Biến cố đối và quy tắc nhân xác suất',
    description: 'Sử dụng biến cố đối và quy tắc nhân trong các bài toán xác suất cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q6-4-1',
        text: 'Công thức xác suất của biến cố đối là:',
        options: [
          '$P(\\overline{A})=1-P(A)$',
          '$P(\\overline{A})=P(A)$',
          '$P(\\overline{A})=1+P(A)$',
          '$P(\\overline{A})=\\dfrac{1}{P(A)}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố đối của A là phần còn lại trong không gian mẫu, nên xác suất bằng 1 trừ xác suất của A.'
      },
      {
        id: 'q6-4-2',
        text: 'Nếu $P(A)=0,3$ thì $P(\\overline{A})$ bằng:',
        options: ['0,3', '0,7', '1,3', '-0,3'],
        correctAnswerIndex: 1,
        explanation: '$P(\\overline{A})=1-0,3=0,7$.'
      },
      {
        id: 'q6-4-3',
        text: 'Biến cố đối của biến cố “ra số chẵn” khi gieo một con xúc xắc là:',
        options: ['Ra số nguyên tố', 'Ra số lẻ', 'Ra số lớn hơn 3', 'Ra số nhỏ hơn 6'],
        correctAnswerIndex: 1,
        explanation: 'Tập đối của {2,4,6} trong không gian mẫu {1,2,3,4,5,6} là {1,3,5}.'
      },
      {
        id: 'q6-4-4',
        text: 'Quy tắc nhân xác suất cho hai biến cố độc lập là:',
        options: [
          '$P(A\\cap B)=P(A)P(B)$',
          '$P(A\\cap B)=P(A)+P(B)$',
          '$P(A\\cap B)=P(A)-P(B)$',
          '$P(A\\cap B)=\\dfrac{P(A)}{P(B)}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Với hai biến cố độc lập, xác suất đồng thời xảy ra bằng tích các xác suất.'
      },
      {
        id: 'q6-4-5',
        text: 'Tung hai đồng xu cân đối. Xác suất để cả hai cùng ra ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 0,
        explanation: 'Mỗi đồng xu ra ngửa với xác suất $1/2$, độc lập nhau nên xác suất cả hai ngửa là $1/2\\cdot1/2=1/4$.'
      },
      {
        id: 'q6-4-6',
        text: 'Gieo hai con xúc xắc cân đối. Xác suất để cả hai cùng ra số 6 là:',
        options: ['$\\dfrac{1}{36}$', '$\\dfrac{1}{12}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Mỗi xúc xắc ra 6 với xác suất $1/6$, độc lập nên xác suất đồng thời là $1/36$.'
      },
      {
        id: 'q6-4-7',
        text: 'Nếu xác suất bắn trúng của hai phát bắn độc lập lần lượt là 0,8 và 0,7 thì xác suất cả hai cùng trúng là:',
        options: ['0,15', '0,56', '0,75', '1,5'],
        correctAnswerIndex: 1,
        explanation: 'Do độc lập nên xác suất là $0,8\\cdot0,7=0,56$.'
      },
      {
        id: 'q6-4-8',
        text: 'Nếu xác suất một bóng đèn hỏng là 0,02 thì xác suất bóng đèn không hỏng là:',
        options: ['0,98', '0,02', '1,02', '0,5'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất biến cố đối là $1-0,02=0,98$.'
      },
      {
        id: 'q6-4-9',
        text: 'Một cách hay để tính xác suất “ít nhất một lần xảy ra” là:',
        options: [
          'Tính biến cố đối rồi lấy 1 trừ đi',
          'Cộng tất cả xác suất tùy ý',
          'Luôn nhân các xác suất',
          'Luôn lấy số lớn nhất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nhiều bài toán “ít nhất một” được giải nhanh bằng biến cố đối “không có lần nào”.'
      },
      {
        id: 'q6-4-10',
        text: 'Tung 3 đồng xu cân đối. Xác suất để có ít nhất một lần ra ngửa là:',
        options: ['$\\dfrac{1}{8}$', '$\\dfrac{3}{8}$', '$\\dfrac{7}{8}$', '$1$'],
        correctAnswerIndex: 2,
        explanation: 'Biến cố đối là cả 3 lần đều sấp, có xác suất $(1/2)^3=1/8$. Do đó xác suất cần tìm là $1-1/8=7/8$.'
      }
    ]
  },
  {
    id: 'c6-t5',
    title: 'Ôn tập chương Các quy tắc tính xác suất',
    description: 'Củng cố không gian mẫu, xác suất, quy tắc cộng, quy tắc nhân và biến cố đối.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q6-5-1',
        text: 'Tung đồng thời hai con xúc xắc cân đối. Số phần tử của không gian mẫu là:',
        options: ['12', '24', '36', '48'],
        correctAnswerIndex: 2,
        explanation: 'Mỗi xúc xắc có 6 khả năng nên tổng số kết quả là $6\\cdot6=36$.'
      },
      {
        id: 'q6-5-2',
        text: 'Gieo một con xúc xắc. Xác suất để ra số nguyên tố là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation: 'Các số nguyên tố là 2,3,5 nên có 3 kết quả thuận lợi trên 6 kết quả, xác suất là $1/2$.'
      },
      {
        id: 'q6-5-3',
        text: 'Nếu $P(A)=0,6$ thì $P(\\overline{A})$ bằng:',
        options: ['0,4', '0,6', '1,6', '0'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất biến cố đối là $1-0,6=0,4$.'
      },
      {
        id: 'q6-5-4',
        text: 'Nếu $P(A)=0,4$, $P(B)=0,3$ và A, B xung khắc thì $P(A\\cup B)$ bằng:',
        options: ['0,1', '0,7', '0,12', '1'],
        correctAnswerIndex: 1,
        explanation: 'Do xung khắc nên $P(A\\cup B)=P(A)+P(B)=0,7$.'
      },
      {
        id: 'q6-5-5',
        text: 'Nếu A, B độc lập, $P(A)=0,5$, $P(B)=0,2$ thì $P(A\\cap B)$ bằng:',
        options: ['0,1', '0,3', '0,5', '0,7'],
        correctAnswerIndex: 0,
        explanation: 'Với hai biến cố độc lập, xác suất giao bằng tích: $0,5\\cdot0,2=0,1$.'
      },
      {
        id: 'q6-5-6',
        text: 'Tung 2 đồng xu cân đối. Xác suất để hai lần khác mặt nhau là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 1,
        explanation: 'Các kết quả khác mặt là $(S,N)$ và $(N,S)$, có 2 trên 4 kết quả nên xác suất là $1/2$.'
      },
      {
        id: 'q6-5-7',
        text: 'Gieo một con xúc xắc. Xác suất để ra số nhỏ hơn 3 hoặc lớn hơn 5 là:',
        options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 1,
        explanation: 'Các kết quả thuận lợi là 1,2,6 nên có 3 trên 6 kết quả, xác suất là $1/2$.'
      },
      {
        id: 'q6-5-8',
        text: 'Tung 3 đồng xu cân đối. Xác suất để cả 3 cùng ra sấp là:',
        options: ['$\\dfrac{1}{8}$', '$\\dfrac{1}{4}$', '$\\dfrac{3}{8}$', '$\\dfrac{7}{8}$'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất là $(1/2)^3=1/8$.'
      },
      {
        id: 'q6-5-9',
        text: 'Một biến cố có xác suất 1 thì đó là:',
        options: ['Biến cố không thể', 'Biến cố chắc chắn', 'Biến cố đối', 'Biến cố xung khắc'],
        correctAnswerIndex: 1,
        explanation: 'Biến cố có xác suất 1 là biến cố chắc chắn.'
      },
      {
        id: 'q6-5-10',
        text: 'Một biến cố có xác suất 0 thì đó là:',
        options: ['Biến cố chắc chắn', 'Biến cố độc lập', 'Biến cố không thể', 'Biến cố hợp'],
        correctAnswerIndex: 2,
        explanation: 'Biến cố có xác suất 0 là biến cố không thể.'
      }
    ]
  }
];