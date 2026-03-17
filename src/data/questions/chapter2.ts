import { Topic } from '../../types';
import { chapter2ExamTopics } from './chapter2-exams';

export const chapter2CoreTopics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Nguyên hàm',
    description: 'Tìm nguyên hàm cơ bản và vận dụng các tính chất của nguyên hàm.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Nguyên hàm của hàm số $f(x)=x^2$ là:',
        options: ['$\\dfrac{x^3}{3}+C$', '$2x+C$', '$x^3+C$', '$\\dfrac{x^2}{2}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $\\left(\\dfrac{x^3}{3}\\right)\' = x^2$ nên $\\int x^2\\,dx = \\dfrac{x^3}{3}+C$.'
      },
      {
        id: 'q2-1-2',
        text: 'Nguyên hàm của hàm số $f(x)=\\cos x$ là:',
        options: ['$\\sin x + C$', '$-\\sin x + C$', '$\\tan x + C$', '$-\\cos x + C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(\\sin x)\' = \\cos x$ nên $\\int \\cos x\\,dx = \\sin x + C$.'
      },
      {
        id: 'q2-1-3',
        text: 'Nguyên hàm của hàm số $f(x)=\\dfrac{1}{x}$ là:',
        options: ['$\\ln x + C$', '$\\ln|x| + C$', '$\\dfrac{1}{x^2}+C$', '$x\\ln x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ với $x\\ne 0$.'
      },
      {
        id: 'q2-1-4',
        text: 'Cho $F(x)$ là một nguyên hàm của $f(x)$ trên $I$. Khi đó:',
        options: ['$F\'(x)=f(x)$', ['$F(x)=f\'(x)$'][0], '$F\'\'(x)=f(x)$', '$f\'(x)=F(x)$'],
        correctAnswerIndex: 0,
        explanation: 'Theo định nghĩa, $F(x)$ là nguyên hàm của $f(x)$ nếu $F\'(x)=f(x)$ trên khoảng đang xét.'
      },
      {
        id: 'q2-1-5',
        text: 'Nguyên hàm của hàm số $f(x)=e^x$ là:',
        options: ['$e^x + C$', '$xe^x + C$', '$\\ln|x| + C$', '$e^{x+1} + C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(e^x)\' = e^x$ nên $\\int e^x\\,dx = e^x + C$.'
      },
      {
        id: 'q2-1-6',
        text: 'Nguyên hàm của hàm số $f(x)=2x-3$ là:',
        options: ['$x^2-3x+C$', '$2x^2-3+C$', '$x^2-3+C$', '$2x-3x+C$'],
        correctAnswerIndex: 0,
        explanation: 'Ta tính từng phần: $\\int(2x-3)dx=\\int2x\\,dx-\\int3\\,dx=x^2-3x+C$.'
      },
      {
        id: 'q2-1-7',
        text: 'Cho $\\int f(x)\\,dx = F(x)+C$. Mệnh đề nào đúng?',
        options: [
          'Mọi nguyên hàm của $f(x)$ sai khác nhau một hằng số',
          'Mọi nguyên hàm của $f(x)$ đều bằng nhau',
          'Nguyên hàm của $f(x)$ là duy nhất',
          'Nguyên hàm của $f(x)$ luôn bằng $f\'(x)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các nguyên hàm của cùng một hàm số chỉ khác nhau một hằng số cộng.'
      },
      {
        id: 'q2-1-8',
        text: 'Nguyên hàm của hàm số $f(x)=\\sin x$ là:',
        options: ['$\\cos x + C$', '$-\\cos x + C$', '$\\tan x + C$', '$\\cot x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $(-\\cos x)\' = \\sin x$ nên $\\int \\sin x\\,dx = -\\cos x + C$.'
      },
      {
        id: 'q2-1-9',
        text: 'Nếu $\\int f(x)\\,dx = x^3 + C$ thì $f(x)$ bằng:',
        options: ['$3x^2$', '$x^2$', '$3x$', '$x^3$'],
        correctAnswerIndex: 0,
        explanation: 'Lấy đạo hàm hai vế, ta được $f(x)=(x^3)\'=3x^2$.'
      },
      {
        id: 'q2-1-10',
        text: 'Nguyên hàm của hàm số $f(x)=\\dfrac{1}{\\cos^2 x}$ là:',
        options: ['$\\sin x + C$', '$\\tan x + C$', '$-\\cot x + C$', '$\\cos x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $(\\tan x)\' = \\dfrac{1}{\\cos^2 x}$ nên $\\int \\dfrac{1}{\\cos^2 x}\\,dx = \\tan x + C$.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Các phương pháp tính nguyên hàm',
    description: 'Vận dụng đổi biến số và từng phần để tính nguyên hàm.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Tính $\\int (2x+1)^3\\,dx$ bằng cách đặt $u=2x+1$. Kết quả là:',
        options: ['$\\dfrac{(2x+1)^4}{8}+C$', '$\\dfrac{(2x+1)^4}{4}+C$', '$\\dfrac{(2x+1)^3}{3}+C$', '$\\dfrac{(2x+1)^2}{2}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Đặt $u=2x+1 \\Rightarrow du=2dx \\Rightarrow dx=\\dfrac{du}{2}$. Khi đó $\\int (2x+1)^3dx=\\dfrac12\\int u^3du=\\dfrac{u^4}{8}+C$.'
      },
      {
        id: 'q2-2-2',
        text: 'Công thức nguyên hàm từng phần là:',
        options: [
          '$\\int u\\,dv = uv - \\int v\\,du$',
          '$\\int u\\,dv = uv + \\int v\\,du$',
          '$\\int u\\,dv = du\\,dv - uv$',
          '$\\int u\\,dv = \\dfrac{u}{v}+C$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức nguyên hàm từng phần quen thuộc.'
      },
      {
        id: 'q2-2-3',
        text: 'Tính $\\int x e^x\\,dx$. Kết quả đúng là:',
        options: ['$xe^x + C$', '$e^x(x-1)+C$', '$e^x(x+1)+C$', '$x^2e^x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Dùng từng phần với $u=x$, $dv=e^xdx$, ta được $\\int xe^xdx=xe^x-\\int e^xdx=e^x(x-1)+C$.'
      },
      {
        id: 'q2-2-4',
        text: 'Đặt $u=\\ln x$ thường thích hợp khi tính nguyên hàm nào sau đây?',
        options: ['$\\int \\ln x\\,dx$', '$\\int e^x\\,dx$', '$\\int \\cos x\\,dx$', '$\\int x^2\\,dx$'],
        correctAnswerIndex: 0,
        explanation: 'Với $\\int \\ln x\\,dx$, ta thường dùng từng phần: đặt $u=\\ln x$, $dv=dx$.'
      },
      {
        id: 'q2-2-5',
        text: 'Tính $\\int \\dfrac{1}{2x+3}\\,dx$. Kết quả là:',
        options: ['$\\ln|2x+3|+C$', '$\\dfrac{1}{2}\\ln|2x+3|+C$', '$\\dfrac{1}{2x+3}+C$', '$2\\ln|2x+3|+C$'],
        correctAnswerIndex: 1,
        explanation: 'Đặt $u=2x+3$, $du=2dx$, nên $\\int \\dfrac{1}{2x+3}dx=\\dfrac12\\int \\dfrac{1}{u}du=\\dfrac12\\ln|u|+C$.'
      },
      {
        id: 'q2-2-6',
        text: 'Tính $\\int x\\cos x\\,dx$. Kết quả là:',
        options: ['$x\\sin x + \\cos x + C$', '$x\\sin x - \\cos x + C$', '$\\sin x + C$', '$x\\cos x + \\sin x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Dùng từng phần với $u=x$, $dv=\\cos xdx$, ta được $\\int x\\cos xdx=x\\sin x-\\int \\sin xdx=x\\sin x+\\cos x+C$.'
      },
      {
        id: 'q2-2-7',
        text: 'Tính $\\int \\sin(3x)\\,dx$. Kết quả là:',
        options: ['$-\\dfrac{1}{3}\\cos(3x)+C$', '$\\dfrac{1}{3}\\cos(3x)+C$', '$-3\\cos(3x)+C$', '$\\sin(3x)+C$'],
        correctAnswerIndex: 0,
        explanation: 'Đặt $u=3x$, ta được $\\int \\sin(3x)dx=\\dfrac13\\int \\sin u\\,du=-\\dfrac13\\cos u+C$.'
      },
{
  id: 'q2-2-8',
  text: 'Tính $\\int (x+1)e^x\\,dx$. Kết quả là:',
  options: ['$xe^x + C$', '$(x+1)e^x + C$', '$e^x + C$', '$x^2e^x + C$'],
  correctAnswerIndex: 0,
  explanation: 'Ta có $\\int (x+1)e^xdx=\\int xe^xdx+\\int e^xdx=e^x(x-1)+e^x+C=xe^x+C$.'
},
      {
        id: 'q2-2-9',
        text: 'Nguyên hàm nào sau đây thường nên dùng phương pháp đổi biến số?',
        options: ['$\\int (x^2+1)^5\\cdot 2x\\,dx$', '$\\int x\\ln x\\,dx$', '$\\int xe^x\\,dx$', '$\\int \\ln x\\,dx$'],
        correctAnswerIndex: 0,
        explanation: 'Biểu thức có dạng $f(u)u\'$, rất thích hợp đặt $u=x^2+1$.'
      },
      {
        id: 'q2-2-10',
        text: 'Tính $\\int \\dfrac{x}{x^2+1}\\,dx$. Kết quả là:',
        options: ['$\\ln(x^2+1)+C$', '$\\dfrac{1}{2}\\ln(x^2+1)+C$', '$\\dfrac{x^2}{2}+C$', '$\\arctan x + C$'],
        correctAnswerIndex: 1,
        explanation: 'Đặt $u=x^2+1$, $du=2xdx$, nên $\\int \\dfrac{x}{x^2+1}dx=\\dfrac12\\int \\dfrac{1}{u}du=\\dfrac12\\ln(x^2+1)+C$.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Tích phân',
    description: 'Hiểu định nghĩa, tính chất và tính tích phân xác định.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $[a;b]$ thì:',
        options: [
          '$\\int_a^b f(x)dx = F(b)-F(a)$',
          '$\\int_a^b f(x)dx = F(a)-F(b)$',
          '$\\int_a^b f(x)dx = F(a)+F(b)$',
          '$\\int_a^b f(x)dx = f(b)-f(a)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Theo công thức Newton - Leibniz, $\\int_a^b f(x)dx = F(b)-F(a)$.'
      },
      {
        id: 'q2-3-2',
        text: 'Giá trị của tích phân $\\int_0^1 x\\,dx$ là:',
        options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\int_0^1 xdx=\\left.\\dfrac{x^2}{2}\\right|_0^1=\\dfrac12$.'
      },
      {
        id: 'q2-3-3',
        text: 'Giá trị của tích phân $\\int_1^2 3x^2\\,dx$ là:',
        options: ['7', '8', '9', '6'],
        correctAnswerIndex: 0,
        explanation: 'Nguyên hàm của $3x^2$ là $x^3$, nên $\\int_1^2 3x^2dx=2^3-1^3=7$.'
      },
      {
        id: 'q2-3-4',
        text: 'Tính chất đúng của tích phân là:',
        options: [
          '$\\int_a^a f(x)dx=0$',
          '$\\int_a^a f(x)dx=1$',
          '$\\int_a^a f(x)dx=f(a)$',
          '$\\int_a^a f(x)dx=a$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tích phân trên đoạn có hai cận bằng nhau luôn bằng 0.'
      },
      {
        id: 'q2-3-5',
        text: 'Ta có $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$. Đây là tính chất:',
        options: ['Đổi cận tích phân', 'Tuyến tính', 'Cộng đoạn', 'Nguyên hàm'],
        correctAnswerIndex: 0,
        explanation: 'Khi đổi chỗ hai cận tích phân, tích phân đổi dấu.'
      },
      {
        id: 'q2-3-6',
        text: 'Giá trị của tích phân $\\int_0^{\\pi} \\sin x\\,dx$ là:',
        options: ['0', '1', '2', '$\\pi$'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\int_0^{\\pi}\\sin xdx=\\left.-\\cos x\\right|_0^{\\pi}=1-(-1)=2$.'
      },
      {
        id: 'q2-3-7',
        text: 'Giá trị của tích phân $\\int_0^1 (2x+1)\\,dx$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation: 'Nguyên hàm là $x^2+x$, nên $\\int_0^1(2x+1)dx=(1+1)-0=2$.'
      },
      {
        id: 'q2-3-8',
        text: 'Nếu $f(x)\\ge 0$ trên $[a;b]$ thì:',
        options: [
          '$\\int_a^b f(x)dx \\ge 0$',
          '$\\int_a^b f(x)dx < 0$',
          '$\\int_a^b f(x)dx = 0$',
          '$\\int_a^b f(x)dx$ không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tích phân của hàm không âm trên đoạn là một số không âm.'
      },
      {
        id: 'q2-3-9',
        text: 'Giá trị của tích phân $\\int_0^2 1\\,dx$ là:',
        options: ['$0$', '$1$', '$2$', '$3$'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\int_0^2 1\\,dx = 2-0 = 2$.'
      },
      {
        id: 'q2-3-10',
        text: 'Nếu $\\int_a^b f(x)dx = 5$ thì $\\int_b^a f(x)dx$ bằng:',
        options: ['$5$', '$-5$', '$0$', '$10$'],
        correctAnswerIndex: 1,
        explanation: 'Đổi cận làm đổi dấu tích phân, nên $\\int_b^a f(x)dx=-5$.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'Ứng dụng tích phân tính diện tích hình phẳng',
    description: 'Tính diện tích miền hình phẳng giới hạn bởi đồ thị các hàm số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q2-4-1',
        text: 'Diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục hoành và hai đường thẳng $x=a$, $x=b$ với $f(x)\\ge 0$ trên $[a;b]$ là:',
        options: [
          '$S=\\int_a^b f(x)dx$',
          '$S=-\\int_a^b f(x)dx$',
          '$S=\\left|f(b)-f(a)\\right|$',
          '$S=f(a)+f(b)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi $f(x)\\ge 0$ trên đoạn, diện tích đúng bằng tích phân xác định.'
      },
      {
        id: 'q2-4-2',
        text: 'Diện tích hình phẳng giới hạn bởi $y=f(x)$ và trục hoành trên $[a;b]$ trong trường hợp tổng quát là:',
        options: [
          '$S=\\int_a^b f(x)dx$',
          '$S=\\int_a^b |f(x)|dx$',
          '$S=\\left|\\int_a^b f(x)dx\\right|$',
          '$S=f(b)-f(a)$'
        ],
        correctAnswerIndex: 1,
        explanation: 'Diện tích luôn không âm nên phải lấy giá trị tuyệt đối của hàm dưới dấu tích phân.'
      },
      {
        id: 'q2-4-3',
        text: 'Diện tích miền giới hạn bởi đồ thị $y=x$, trục hoành, trục tung và đường thẳng $x=1$ là:',
        options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$\\dfrac{3}{2}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $S=\\int_0^1 xdx=\\dfrac12$.'
      },
      {
        id: 'q2-4-4',
        text: 'Diện tích miền giới hạn bởi đồ thị $y=x^2$, trục hoành và các đường $x=0$, $x=1$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$1$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $S=\\int_0^1 x^2dx=\\left.\\dfrac{x^3}{3}\\right|_0^1=\\dfrac13$.'
      },
      {
        id: 'q2-4-5',
        text: 'Diện tích miền giới hạn bởi hai đồ thị $y=x$ và $y=x^2$ trên đoạn $[0;1]$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$1$'],
        correctAnswerIndex: 0,
        explanation: 'Trên $[0;1]$, ta có $x\\ge x^2$, nên $S=\\int_0^1(x-x^2)dx=\\dfrac12-\\dfrac13=\\dfrac16$.'
      },
      {
        id: 'q2-4-6',
        text: 'Muốn tính diện tích giới hạn bởi hai đồ thị $y=f(x)$ và $y=g(x)$ trên $[a;b]$, công thức đúng là:',
        options: [
          '$S=\\int_a^b [f(x)-g(x)]dx$',
          '$S=\\int_a^b |f(x)-g(x)|dx$',
          '$S=f(b)-g(a)$',
          '$S=\\left|f(a)-g(b)\\right|$'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trong trường hợp tổng quát, diện tích được tính bằng tích phân của giá trị tuyệt đối hiệu hai hàm.'
      },
      {
        id: 'q2-4-7',
        text: 'Diện tích miền giới hạn bởi $y=2x$, trục hoành, $x=0$, $x=2$ là:',
        options: ['$2$', '$4$', '$6$', '$8$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $S=\\int_0^2 2xdx=\\left.x^2\\right|_0^2=4$.'
      },
      {
        id: 'q2-4-8',
        text: 'Diện tích luôn là một số:',
        options: ['Âm', 'Không âm', 'Nhỏ hơn 0', 'Luôn bằng 0'],
        correctAnswerIndex: 1,
        explanation: 'Diện tích hình học không thể âm.'
      },
      {
        id: 'q2-4-9',
        text: 'Nếu hai đồ thị cắt nhau trong khoảng đang xét thì khi tính diện tích ta thường:',
        options: [
          'Bỏ qua giao điểm',
          'Chia miền thành các khoảng nhỏ theo giao điểm',
          'Chỉ lấy cận trái',
          'Chỉ lấy cận phải'
        ],
        correctAnswerIndex: 1,
        explanation: 'Ta cần chia miền theo các giao điểm để xác định hàm nằm trên, hàm nằm dưới trên từng khoảng.'
      },
      {
        id: 'q2-4-10',
        text: 'Diện tích miền giới hạn bởi $y=1-x$, trục hoành, trục tung là:',
        options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$\\dfrac{3}{2}$'],
        correctAnswerIndex: 0,
        explanation: 'Miền này là tam giác vuông có hai cạnh góc vuông bằng 1 nên diện tích bằng $\\dfrac12$. Cũng có thể tính bằng $\\int_0^1(1-x)dx=\\dfrac12$.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Ứng dụng tích phân tính thể tích vật thể',
    description: 'Tính thể tích khối tròn xoay và vận dụng công thức tích phân vào hình học.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=f(x)\\ge 0$ trên $[a;b]$ quanh trục $Ox$ được tính bởi công thức:',
        options: [
          '$V=\\pi\\int_a^b [f(x)]^2dx$',
          '$V=\\int_a^b f(x)dx$',
          '$V=2\\pi\\int_a^b f(x)dx$',
          '$V=\\pi\\int_a^b f(x)dx$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức thể tích khối tròn xoay quanh trục $Ox$.'
      },
      {
        id: 'q2-5-2',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=x$, $x=0$, $x=1$, quay quanh trục $Ox$ là:',
        options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$', '$\\pi$', '$2\\pi$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $V=\\pi\\int_0^1 x^2dx=\\pi\\cdot\\dfrac13=\\dfrac{\\pi}{3}$.'
      },
      {
        id: 'q2-5-3',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=1$, $x=0$, $x=2$, quay quanh trục $Ox$ là:',
        options: ['$2\\pi$', '$\\pi$', '$4\\pi$', '$8\\pi$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $V=\\pi\\int_0^2 1^2dx=\\pi\\cdot2=2\\pi$.'
      },
      {
        id: 'q2-5-4',
        text: 'Trong công thức $V=\\pi\\int_a^b [f(x)]^2dx$, biểu thức $[f(x)]^2$ xuất hiện vì:',
        options: [
          'Diện tích thiết diện vuông góc với trục quay là hình tròn bán kính $f(x)$',
          'Để dễ tính toán hơn',
          'Do quy ước ngẫu nhiên',
          'Vì nguyên hàm luôn có bình phương'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mỗi lát cắt vuông góc với trục quay là một hình tròn có diện tích $\\pi[f(x)]^2$.'
      },
      {
        id: 'q2-5-5',
        text: 'Thể tích khối tròn xoay luôn là một số:',
        options: ['Âm', 'Không âm', 'Luôn bằng 0', 'Có thể âm hoặc dương'],
        correctAnswerIndex: 1,
        explanation: 'Thể tích là đại lượng hình học nên luôn không âm.'
      },
      {
        id: 'q2-5-6',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=x^2$, $x=0$, $x=1$, quay quanh trục $Ox$ là:',
        options: ['$\\dfrac{\\pi}{5}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$', '$\\pi$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $V=\\pi\\int_0^1 x^4dx=\\pi\\cdot\\dfrac15=\\dfrac{\\pi}{5}$.'
      },
      {
        id: 'q2-5-7',
        text: 'Nếu bán kính đáy của mỗi lát cắt là $r(x)$ thì thể tích khối tròn xoay quanh trục $Ox$ có dạng:',
        options: [
          '$V=\\pi\\int_a^b r^2(x)dx$',
          '$V=\\int_a^b r(x)dx$',
          '$V=2\\pi\\int_a^b r(x)dx$',
          '$V=\\pi\\int_a^b r(x)dx$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Diện tích mỗi lát cắt là $\\pi r^2(x)$, nên thể tích là tích phân của biểu thức đó.'
      },
      {
        id: 'q2-5-8',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=2$, $x=1$, $x=3$, quay quanh trục $Ox$ là:',
        options: ['$4\\pi$', '$8\\pi$', '$12\\pi$', '$16\\pi$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $V=\\pi\\int_1^3 2^2dx=4\\pi(3-1)=8\\pi$.'
      },
      {
        id: 'q2-5-9',
        text: 'Khi quay hình chữ nhật có chiều cao $r$ và chiều rộng $h$ quanh một cạnh song song với chiều cao, thể tích khối tạo thành là:',
        options: [
          'Thể tích hình trụ $V=\\pi r^2h$',
          'Thể tích hình nón $V=\\dfrac13\\pi r^2h$',
          'Diện tích hình tròn $S=\\pi r^2$',
          'Diện tích xung quanh hình trụ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khối nhận được là hình trụ có bán kính $r$ và chiều cao $h$, nên $V=\\pi r^2h$.'
      },
      {
        id: 'q2-5-10',
        text: 'Ứng dụng chính của tích phân trong hình học ở chương này là:',
        options: [
          'Tính diện tích và thể tích',
          'Giải phương trình bậc hai',
          'Tìm đạo hàm cấp hai',
          'Chứng minh bất đẳng thức'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trong chương này, tích phân được ứng dụng chủ yếu để tính diện tích hình phẳng và thể tích vật thể.'
      }
    ]
  }
];

export const chapter2Topics: Topic[] = [
  ...chapter2CoreTopics,
  ...chapter2ExamTopics
];