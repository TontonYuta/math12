import { Topic } from '../../types';
import { chapter5ExamTopics } from './chapter5-exams';

export const chapter5CoreTopics: Topic[] = [
  {
    id: 'c5-t1',
    title: 'Biến cố và xác suất có điều kiện',
    description: 'Nhận biết biến cố, xác suất có điều kiện và ý nghĩa của nó.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q5-1-1',
        text: 'Xác suất có điều kiện $P(A|B)$ được hiểu là:',
        options: [
          'Xác suất của A khi biết B đã xảy ra',
          'Xác suất của B khi biết A đã xảy ra',
          'Tổng xác suất của A và B',
          'Hiệu xác suất của A và B'
        ],
        correctAnswerIndex: 0,
        explanation: 'Theo định nghĩa, $P(A|B)$ là xác suất xảy ra biến cố A với điều kiện biến cố B đã xảy ra.'
      },
      {
        id: 'q5-1-2',
        text: 'Công thức xác suất có điều kiện là:',
        options: [
          '$P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$ với $P(B)>0$',
          '$P(A|B)=\\dfrac{P(A)}{P(B)}$',
          '$P(A|B)=P(A\\cup B)$',
          '$P(A|B)=P(A)P(B)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức định nghĩa của xác suất có điều kiện.'
      },
      {
        id: 'q5-1-3',
        text: 'Điều kiện để xác định $P(A|B)$ là:',
        options: ['$P(B)>0$', '$P(A)>0$', '$P(A)=1$', '$P(B)=1$'],
        correctAnswerIndex: 0,
        explanation: 'Muốn tính $P(A|B)$ thì mẫu số $P(B)$ phải khác 0.'
      },
      {
        id: 'q5-1-4',
        text: 'Nếu $P(A\\cap B)=0,2$ và $P(B)=0,5$ thì $P(A|B)$ bằng:',
        options: ['0,1', '0,2', '0,4', '0,7'],
        correctAnswerIndex: 2,
        explanation: '$P(A|B)=\\dfrac{0,2}{0,5}=0,4$.'
      },
      {
        id: 'q5-1-5',
        text: 'Nếu biết biến cố B đã xảy ra thì không gian xét xác suất được thu hẹp vào:',
        options: ['B', 'A', '$A\\cup B$', '$A\\cap B$'],
        correctAnswerIndex: 0,
        explanation: 'Khi biết B xảy ra, ta chỉ xét các kết quả thuộc biến cố B.'
      },
      {
        id: 'q5-1-6',
        text: 'Nếu $A \\subset B$ và $P(B)>0$ thì $P(A|B)$ bằng:',
        options: [
          '$\\dfrac{P(A)}{P(B)}$',
          '$\\dfrac{P(B)}{P(A)}$',
          '$P(A)+P(B)$',
          '$1-P(A)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì $A \\subset B$ nên $A\\cap B=A$, do đó $P(A|B)=\\dfrac{P(A)}{P(B)}$.'
      },
      {
        id: 'q5-1-7',
        text: 'Nếu $A$ và $B$ xung khắc, $P(B)>0$ thì $P(A|B)$ bằng:',
        options: ['0', '1', '$P(A)$', '$P(B)$'],
        correctAnswerIndex: 0,
        explanation: 'Hai biến cố xung khắc thì $A\\cap B=\\varnothing$, nên $P(A\\cap B)=0$.'
      },
      {
        id: 'q5-1-8',
        text: 'Nếu $P(A|B)=1$ thì điều đó có nghĩa là:',
        options: [
          'Khi B xảy ra thì A chắc chắn xảy ra',
          'A và B độc lập',
          'A không thể xảy ra',
          'B không thể xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: '$P(A|B)=1$ nghĩa là trong điều kiện B xảy ra, A xảy ra chắc chắn.'
      },
      {
        id: 'q5-1-9',
        text: 'Nếu $P(A|B)=0$ thì điều đó có nghĩa là:',
        options: [
          'Khi B xảy ra thì A không xảy ra',
          'A chắc chắn xảy ra',
          'B luôn xảy ra',
          'A và B bằng nhau'
        ],
        correctAnswerIndex: 0,
        explanation: '$P(A|B)=0$ nghĩa là trong điều kiện B xảy ra, A không thể xảy ra.'
      },
      {
        id: 'q5-1-10',
        text: 'Trong công thức $P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$, tử số biểu diễn:',
        options: [
          'Xác suất để cả A và B cùng xảy ra',
          'Xác suất để A hoặc B xảy ra',
          'Xác suất để B không xảy ra',
          'Xác suất của không gian mẫu'
        ],
        correctAnswerIndex: 0,
        explanation: '$P(A\\cap B)$ là xác suất giao của hai biến cố, tức cả A và B cùng xảy ra.'
      }
    ]
  },
  {
    id: 'c5-t2',
    title: 'Công thức nhân xác suất',
    description: 'Tính xác suất giao của hai biến cố bằng công thức nhân.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q5-2-1',
        text: 'Công thức nhân xác suất đúng là:',
        options: [
          '$P(A\\cap B)=P(B)P(A|B)$',
          '$P(A\\cap B)=P(A)+P(B)$',
          '$P(A\\cap B)=P(A)-P(B)$',
          '$P(A\\cap B)=\\dfrac{P(A)}{P(B)}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Công thức nhân xác suất: $P(A\\cap B)=P(B)P(A|B)=P(A)P(B|A)$.'
      },
      {
        id: 'q5-2-2',
        text: 'Nếu $P(B)=0,4$ và $P(A|B)=0,5$ thì $P(A\\cap B)$ bằng:',
        options: ['0,2', '0,4', '0,8', '0,9'],
        correctAnswerIndex: 0,
        explanation: '$P(A\\cap B)=P(B)P(A|B)=0,4\\cdot0,5=0,2$.'
      },
      {
        id: 'q5-2-3',
        text: 'Nếu $P(A)=0,6$ và $P(B|A)=0,3$ thì $P(A\\cap B)$ bằng:',
        options: ['0,18', '0,2', '0,3', '0,9'],
        correctAnswerIndex: 0,
        explanation: '$P(A\\cap B)=P(A)P(B|A)=0,6\\cdot0,3=0,18$.'
      },
      {
        id: 'q5-2-4',
        text: 'Trong phép rút thẻ, công thức nhân xác suất thường dùng khi:',
        options: [
          'Xét nhiều bước liên tiếp',
          'Chỉ có một biến cố',
          'Không có điều kiện',
          'Không gian mẫu rỗng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi một thí nghiệm gồm nhiều bước liên tiếp, công thức nhân xác suất được dùng rất nhiều.'
      },
      {
        id: 'q5-2-5',
        text: 'Nếu $P(A\\cap B)=P(A)P(B)$ thì A và B được gọi là:',
        options: ['Độc lập', 'Xung khắc', 'Đối nhau', 'Bổ sung'],
        correctAnswerIndex: 0,
        explanation: 'Đây là dấu hiệu nhận biết hai biến cố độc lập.'
      },
      {
        id: 'q5-2-6',
        text: 'Nếu A và B độc lập thì công thức nào đúng?',
        options: [
          '$P(A|B)=P(A)$',
          '$P(A|B)=P(B)$',
          '$P(A|B)=P(A\\cap B)$',
          '$P(A|B)=1-P(A)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai biến cố độc lập nghĩa là việc biết B xảy ra không làm thay đổi xác suất của A.'
      },
      {
        id: 'q5-2-7',
        text: 'Gieo một con xúc xắc. Gọi A: “ra số chẵn”, B: “ra số lớn hơn 3”. Khi đó $P(A\\cap B)$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation: 'A={2,4,6}, B={4,5,6} nên $A\\cap B={4,6}$ có 2 kết quả trên 6, nên xác suất là $2/6=1/3$.'
      },
      {
        id: 'q5-2-8',
        text: 'Rút liên tiếp 2 bi không hoàn lại. Xác suất bước sau thường phụ thuộc vào:',
        options: [
          'Kết quả bước trước',
          'Màu của hộp',
          'Thời gian thực hiện',
          'Thứ tự viết phép tính'
        ],
        correctAnswerIndex: 0,
        explanation: 'Do không hoàn lại, thành phần trong hộp thay đổi nên xác suất ở bước sau phụ thuộc kết quả trước.'
      },
      {
        id: 'q5-2-9',
        text: 'Nếu $P(A)=0,5$ và $P(A|B)=0,5$ thì điều này gợi ý rằng:',
        options: [
          'B có thể độc lập với A',
          'A và B xung khắc',
          'B chắc chắn xảy ra',
          'A là biến cố không thể'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi $P(A|B)=P(A)$ thì đó là dấu hiệu của tính độc lập.'
      },
      {
        id: 'q5-2-10',
        text: 'Công thức $P(A\\cap B)=P(A)P(B|A)$ cho biết:',
        options: [
          'Xác suất đồng thời xảy ra được tính bằng xác suất A nhân với xác suất B khi biết A',
          'Xác suất của hợp hai biến cố',
          'Xác suất đối của A',
          'Công thức cộng xác suất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là diễn giải trực tiếp của công thức nhân xác suất.'
      }
    ]
  },
  {
    id: 'c5-t3',
    title: 'Biến cố độc lập',
    description: 'Nhận biết và vận dụng tính độc lập của hai biến cố.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q5-3-1',
        text: 'Hai biến cố A và B độc lập khi:',
        options: [
          '$P(A\\cap B)=P(A)P(B)$',
          '$P(A\\cup B)=P(A)+P(B)$',
          '$A\\cap B=\\varnothing$',
          '$A=B$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là định nghĩa chuẩn của hai biến cố độc lập.'
      },
      {
        id: 'q5-3-2',
        text: 'Nếu A và B độc lập, $P(A)=0,2$, $P(B)=0,5$ thì $P(A\\cap B)$ bằng:',
        options: ['0,1', '0,2', '0,3', '0,7'],
        correctAnswerIndex: 0,
        explanation: '$P(A\\cap B)=P(A)P(B)=0,2\\cdot0,5=0,1$.'
      },
      {
        id: 'q5-3-3',
        text: 'Nếu A và B độc lập thì:',
        options: [
          '$P(A|B)=P(A)$',
          '$P(A|B)=P(B)$',
          '$P(A|B)=0$',
          '$P(A|B)=1$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biết B xảy ra không làm thay đổi xác suất của A.'
      },
      {
        id: 'q5-3-4',
        text: 'Hai biến cố xung khắc và đều có xác suất dương thì:',
        options: ['Không thể độc lập', 'Luôn độc lập', 'Luôn bằng nhau', 'Luôn đối nhau'],
        correctAnswerIndex: 0,
        explanation: 'Nếu xung khắc thì $P(A\\cap B)=0$, nhưng nếu cả hai có xác suất dương thì $P(A)P(B)>0$, nên không độc lập.'
      },
      {
        id: 'q5-3-5',
        text: 'Gieo đồng xu hai lần. A: “lần 1 ra ngửa”, B: “lần 2 ra ngửa”. A và B là:',
        options: ['Độc lập', 'Xung khắc', 'Đối nhau', 'Phụ thuộc hoàn toàn'],
        correctAnswerIndex: 0,
        explanation: 'Kết quả lần gieo thứ nhất không ảnh hưởng tới lần thứ hai, nên hai biến cố độc lập.'
      },
      {
        id: 'q5-3-6',
        text: 'Nếu $P(A)=0,4$, $P(B)=0,5$, $P(A\\cap B)=0,2$ thì A và B:',
        options: ['Độc lập', 'Xung khắc', 'Đối nhau', 'Không thể so sánh'],
        correctAnswerIndex: 0,
        explanation: 'Vì $P(A)P(B)=0,4\\cdot0,5=0,2=P(A\\cap B)$ nên A và B độc lập.'
      },
      {
        id: 'q5-3-7',
        text: 'Nếu A và B độc lập thì xác suất để cả hai cùng xảy ra:',
        options: [
          'Bằng tích xác suất của từng biến cố',
          'Bằng tổng xác suất của từng biến cố',
          'Luôn bằng 0',
          'Luôn bằng 1'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tính độc lập cho phép tính giao bằng tích.'
      },
      {
        id: 'q5-3-8',
        text: 'Trong gieo xúc xắc, A: “ra số chẵn”, B: “ra số lớn hơn 4”. Khi đó $P(A)$ bằng:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Các số chẵn là 2, 4, 6 nên có 3 kết quả thuận lợi trên 6 kết quả.'
      },
      {
        id: 'q5-3-9',
        text: 'Trong gieo xúc xắc, A: “ra số chẵn”, B: “ra số lớn hơn 4”. Khi đó $P(B)$ bằng:',
        options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Các số lớn hơn 4 là 5 và 6 nên xác suất là $2/6=1/3$.'
      },
      {
        id: 'q5-3-10',
        text: 'Trong ví dụ trên, $P(A\\cap B)$ bằng:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$A\\cap B$ chỉ gồm kết quả 6, nên xác suất là $1/6$.'
      }
    ]
  },
  {
    id: 'c5-t4',
    title: 'Công thức xác suất toàn phần và Bayes',
    description: 'Làm quen công thức xác suất toàn phần và công thức Bayes ở mức cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q5-4-1',
        text: 'Nếu $B_1, B_2$ là hai biến cố xung khắc, tạo thành một phân hoạch của không gian mẫu thì:',
        options: [
          '$P(A)=P(A|B_1)P(B_1)+P(A|B_2)P(B_2)$',
          '$P(A)=P(A|B_1)+P(A|B_2)$',
          '$P(A)=P(B_1)+P(B_2)$',
          '$P(A)=P(A\\cap B_1)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là trường hợp đơn giản của công thức xác suất toàn phần.'
      },
      {
        id: 'q5-4-2',
        text: 'Công thức Bayes dùng để:',
        options: [
          'Tính xác suất ngược từ xác suất có điều kiện',
          'Tính tổng hai xác suất',
          'Tính đạo hàm của xác suất',
          'Tính trung bình cộng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Công thức Bayes cho phép tính $P(B_i|A)$ khi đã biết $P(A|B_i)$.'
      },
      {
        id: 'q5-4-3',
        text: 'Trong công thức Bayes, mẫu số thường được tính bằng:',
        options: [
          'Công thức xác suất toàn phần',
          'Công thức cộng xác suất',
          'Công thức nhân đôi',
          'Định lí Viète'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mẫu số của Bayes là $P(A)$, thường được tính bằng công thức xác suất toàn phần.'
      },
      {
        id: 'q5-4-4',
        text: 'Nếu có hai hộp chứa bi và chọn ngẫu nhiên một hộp rồi lấy một viên bi, bài toán này thường liên quan đến:',
        options: [
          'Xác suất toàn phần và Bayes',
          'Đạo hàm cấp hai',
          'Tiệm cận của hàm số',
          'Tích phân từng phần'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là mô hình kinh điển của xác suất toàn phần và Bayes.'
      },
      {
        id: 'q5-4-5',
        text: 'Công thức Bayes cho $B_1$ có dạng:',
        options: [
          '$P(B_1|A)=\\dfrac{P(B_1)P(A|B_1)}{P(A)}$',
          '$P(B_1|A)=P(B_1)P(A)$',
          '$P(B_1|A)=\\dfrac{P(A)}{P(B_1)}$',
          '$P(B_1|A)=P(A|B_1)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là dạng chuẩn của công thức Bayes.'
      },
      {
        id: 'q5-4-6',
        text: 'Trong Bayes, tử số $P(B_1)P(A|B_1)$ chính là:',
        options: [
          '$P(A\\cap B_1)$',
          '$P(A\\cup B_1)$',
          '$P(A)-P(B_1)$',
          '$P(A|B_1)+P(B_1)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Theo công thức nhân xác suất, $P(B_1)P(A|B_1)=P(A\\cap B_1)$.'
      },
      {
        id: 'q5-4-7',
        text: 'Xác suất toàn phần giúp tính:',
        options: [
          'Xác suất của một biến cố thông qua các trường hợp phân hoạch',
          'Xác suất đối',
          'Khoảng biến thiên',
          'Phương trình đường thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta chia không gian thành các trường hợp để cộng xác suất tương ứng.'
      },
      {
        id: 'q5-4-8',
        text: 'Nếu $B_1, B_2, B_3$ là một phân hoạch thì tổng $P(B_1)+P(B_2)+P(B_3)$ bằng:',
        options: ['1', '0', '3', 'Phụ thuộc A'],
        correctAnswerIndex: 0,
        explanation: 'Các biến cố trong phân hoạch xung khắc đôi một và hợp của chúng là toàn bộ không gian mẫu.'
      },
      {
        id: 'q5-4-9',
        text: 'Muốn dùng Bayes để tính $P(B|A)$ thì trước hết cần biết:',
        options: [
          '$P(A|B)$ và $P(B)$',
          'Chỉ $P(A)$',
          'Chỉ $P(B)$',
          'Chỉ $P(A\\cup B)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bayes dựa trên xác suất tiên nghiệm $P(B)$ và xác suất có điều kiện $P(A|B)$.'
      },
      {
        id: 'q5-4-10',
        text: 'Một ứng dụng quen thuộc của Bayes là:',
        options: [
          'Bài toán kiểm tra, chẩn đoán và suy luận ngược',
          'Tính đạo hàm của đa thức',
          'Khảo sát hàm số',
          'Vẽ biểu đồ quạt'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bayes thường dùng trong bài toán suy luận ngược từ kết quả quan sát được.'
      }
    ]
  },
  {
    id: 'c5-t5',
    title: 'Ôn tập chương Xác suất có điều kiện',
    description: 'Củng cố công thức, nhận biết biến cố độc lập và vận dụng xác suất có điều kiện.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q5-5-1',
        text: 'Nếu $P(A\\cap B)=0,15$ và $P(B)=0,3$ thì $P(A|B)$ bằng:',
        options: ['0,2', '0,3', '0,5', '0,45'],
        correctAnswerIndex: 2,
        explanation: '$P(A|B)=\\dfrac{0,15}{0,3}=0,5$.'
      },
      {
        id: 'q5-5-2',
        text: 'Nếu $P(A)=0,4$, $P(B|A)=0,5$ thì $P(A\\cap B)$ bằng:',
        options: ['0,2', '0,4', '0,5', '0,9'],
        correctAnswerIndex: 0,
        explanation: '$P(A\\cap B)=P(A)P(B|A)=0,4\\cdot0,5=0,2$.'
      },
      {
        id: 'q5-5-3',
        text: 'Nếu A và B độc lập, $P(A)=0,7$, $P(B)=0,2$ thì $P(A\\cap B)$ là:',
        options: ['0,14', '0,2', '0,5', '0,9'],
        correctAnswerIndex: 0,
        explanation: 'Vì độc lập nên $P(A\\cap B)=P(A)P(B)=0,14$.'
      },
      {
        id: 'q5-5-4',
        text: 'Nếu A và B độc lập thì $P(A|B)$ bằng:',
        options: ['$P(A)$', '$P(B)$', '$P(A\\cap B)$', '$1-P(A)$'],
        correctAnswerIndex: 0,
        explanation: 'Đây là tính chất cơ bản của hai biến cố độc lập.'
      },
      {
        id: 'q5-5-5',
        text: 'Nếu A và B xung khắc, $P(B)>0$ thì $P(A|B)$ bằng:',
        options: ['0', '1', '$P(A)$', '$P(B)$'],
        correctAnswerIndex: 0,
        explanation: 'Do $A\\cap B=\\varnothing$ nên xác suất giao bằng 0.'
      },
      {
        id: 'q5-5-6',
        text: 'Công thức nào là công thức Bayes?',
        options: [
          '$P(B|A)=\\dfrac{P(B)P(A|B)}{P(A)}$',
          '$P(B|A)=P(A)P(B)$',
          '$P(B|A)=P(A\\cup B)$',
          '$P(B|A)=P(A)-P(B)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là dạng chuẩn của công thức Bayes.'
      },
      {
        id: 'q5-5-7',
        text: 'Công thức xác suất toàn phần giúp tính:',
        options: [
          '$P(A)$ qua các trường hợp phân hoạch',
          '$P(A\\cap B)$ trực tiếp không điều kiện',
          'Giá trị trung bình',
          'Phương sai'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xác suất toàn phần cho phép tính xác suất của A qua các trường hợp chia theo phân hoạch.'
      },
      {
        id: 'q5-5-8',
        text: 'Trong phép thử nhiều bước không hoàn lại, xác suất ở bước sau thường:',
        options: [
          'Phụ thuộc vào bước trước',
          'Luôn không đổi',
          'Luôn bằng 1',
          'Luôn bằng 0'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì kết quả trước làm thay đổi thành phần đối tượng còn lại.'
      },
      {
        id: 'q5-5-9',
        text: 'Một dấu hiệu để nhận biết hai biến cố độc lập là:',
        options: [
          '$P(A\\cap B)=P(A)P(B)$',
          '$P(A\\cup B)=P(A)+P(B)$',
          '$A\\cap B=\\varnothing$',
          '$A=B$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là tiêu chuẩn kiểm tra tính độc lập thường dùng nhất.'
      },
      {
        id: 'q5-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Tính xác suất khi đã có thông tin điều kiện',
          'Khảo sát đồ thị hàm số',
          'Tính tích phân',
          'Giải phương trình không gian'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào xác suất có điều kiện, công thức nhân, tính độc lập và Bayes.'
      }
    ]
  }
];

export const chapter5Topics: Topic[] = [
  ...chapter5CoreTopics,
  ...chapter5ExamTopics
];