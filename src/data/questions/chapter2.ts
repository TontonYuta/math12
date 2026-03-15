import { Topic } from '../../types';

export const chapter2Topics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Nguyên hàm',
    description: 'Khái niệm nguyên hàm và các công thức nguyên hàm cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Nguyên hàm của hàm số $f(x)=2x$ là:',
        options: ['$x^2 + C$', '$2x^2 + C$', '$x + C$', '$2 + C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(x^2)\' = 2x$ nên $\\int 2x\\,dx = x^2 + C$.'
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
        options: ['$\\ln x + C$', '$\\ln|x| + C$', '$\\dfrac{1}{x^2}+C$', '$x+C$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ với $x \\ne 0$.'
      },
      {
        id: 'q2-1-4',
        text: 'Nguyên hàm của hàm số $f(x)=x^3$ là:',
        options: ['$\\dfrac{x^4}{4}+C$', '$4x^2+C$', '$x^4+C$', '$\\dfrac{x^3}{3}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Áp dụng công thức $\\int x^n dx = \\dfrac{x^{n+1}}{n+1}+C$ với $n\\ne -1$.'
      },
      {
        id: 'q2-1-5',
        text: 'Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì:',
        options: ['$F\'(x)=f(x)$', '$f\'(x)=F(x)$', '$F(x)=f(x)$', '$F(x)$ là đạo hàm của $f(x)$'],
        correctAnswerIndex: 0,
        explanation: 'Theo định nghĩa, $F(x)$ là nguyên hàm của $f(x)$ khi và chỉ khi $F\'(x)=f(x)$.'
      },
      {
        id: 'q2-1-6',
        text: 'Nguyên hàm của hàm số $f(x)=e^x$ là:',
        options: ['$e^x + C$', '$xe^x + C$', '$\\ln|x| + C$', '$\\dfrac{1}{e^x}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(e^x)\' = e^x$ nên $\\int e^x dx = e^x + C$.'
      },
      {
        id: 'q2-1-7',
        text: 'Nguyên hàm của hàm số $f(x)=0$ là:',
        options: ['$0$', '$1$', '$C$', '$x+C$'],
        correctAnswerIndex: 2,
        explanation: 'Vì đạo hàm của một hằng số bằng 0 nên nguyên hàm của 0 là $C$.'
      },
      {
        id: 'q2-1-8',
        text: 'Nguyên hàm của hàm số $f(x)=5$ là:',
        options: ['$5x+C$', '$x+5$', '$5+C$', '$\\dfrac{5}{x}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\int 5dx = 5x+C$.'
      },
      {
        id: 'q2-1-9',
        text: 'Nguyên hàm của hàm số $f(x)=\\sin x$ là:',
        options: ['$\\cos x+C$', '$-\\cos x+C$', '$-\\sin x+C$', '$\\tan x+C$'],
        correctAnswerIndex: 1,
        explanation: 'Vì $(-\\cos x)\' = \\sin x$ nên $\\int \\sin x dx = -\\cos x + C$.'
      },
      {
        id: 'q2-1-10',
        text: 'Trong các hàm số sau, hàm số nào là một nguyên hàm của $f(x)=3x^2$?',
        options: ['$x^3$', '$x^2$', '$3x$', '$x^3+1$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(x^3)\' = 3x^2$. Hàm $x^3+1$ cũng đúng, nhưng nếu chọn một đáp án đơn thì $x^3$ là phù hợp.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Các phương pháp tính nguyên hàm',
    description: 'Tính nguyên hàm bằng đổi biến số và từng phần.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Phương pháp đổi biến số thường dùng khi biểu thức dưới dấu tích phân có dạng:',
        options: [
          ['$f(ax+b)$', '$u\'(x)f(u(x))$'],
          ['Chỉ là đa thức', 'Chỉ là hàm lượng giác'],
          ['Chỉ là phân thức', 'Chỉ là hàm mũ'],
          ['Mọi hàm số đều như nhau', 'Không có quy tắc']
        ][0],
        correctAnswerIndex: 1,
        explanation: 'Phương pháp đổi biến số thường áp dụng tốt cho dạng $u\'(x)f(u(x))$.'
      },
      {
        id: 'q2-2-2',
        text: 'Tính $\\int (2x+1)^5 dx$ bằng cách đặt $u=2x+1$. Khi đó $du$ bằng:',
        options: ['$dx$', '$2dx$', '$5dx$', '$(2x+1)dx$'],
        correctAnswerIndex: 1,
        explanation: 'Nếu $u=2x+1$ thì $du=2dx$.'
      },
      {
        id: 'q2-2-3',
        text: 'Công thức nguyên hàm từng phần là:',
        options: [
          ['$\\int u dv = uv - \\int v du$', '$\\int u dv = uv + \\int v du$'],
          ['$\\int u dv = du \\cdot dv$', '$\\int u dv = uv$'],
          ['$\\int u dv = u+v$', '$\\int u dv = u-v$'],
          ['$\\int u dv = \\dfrac{u}{v}$', '$\\int u dv = \\dfrac{v}{u}$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Công thức nguyên hàm từng phần là $\\int u\\,dv = uv - \\int v\\,du$.'
      },
      {
        id: 'q2-2-4',
        text: 'Tính $\\int 2x\\cos(x^2)dx$. Đặt $u=x^2$, ta được kết quả là:',
        options: ['$\\sin(x^2)+C$', '$\\cos(x^2)+C$', '$2\\sin x + C$', '$x^2\\sin x + C$'],
        correctAnswerIndex: 0,
        explanation: 'Đặt $u=x^2 \\Rightarrow du=2x dx$, nên $\\int 2x\\cos(x^2)dx=\\int \\cos u\\,du=\\sin u + C=\\sin(x^2)+C$.'
      },
      {
        id: 'q2-2-5',
        text: 'Tính $\\int x e^x dx$ bằng từng phần, chọn $u$ thích hợp là:',
        options: ['$u=x$', '$u=e^x$', '$u=dx$', '$u=1$'],
        correctAnswerIndex: 0,
        explanation: 'Khi dùng từng phần, thường chọn $u=x$ để đạo hàm đơn giản hơn.'
      },
      {
        id: 'q2-2-6',
        text: 'Kết quả của $\\int x e^x dx$ là:',
        options: ['$(x-1)e^x+C$', '$(x+1)e^x+C$', '$xe^x+C$', '$e^x+C$'],
        correctAnswerIndex: 0,
        explanation: 'Dùng từng phần: $\\int xe^x dx = xe^x - \\int e^x dx = xe^x - e^x + C = (x-1)e^x + C$.'
      },
      {
        id: 'q2-2-7',
        text: 'Tính $\\int \\ln x\\,dx$ bằng từng phần, một cách chọn là:',
        options: ['$u=\\ln x, dv=dx$', '$u=dx, dv=\\ln x$', '$u=x, dv=\\ln x dx$', '$u=1, dv=\\ln x dx$'],
        correctAnswerIndex: 0,
        explanation: 'Chọn $u=\\ln x$ thì $du=\\dfrac{1}{x}dx$, còn $dv=dx$ thì $v=x$.'
      },
      {
        id: 'q2-2-8',
        text: 'Kết quả của $\\int \\ln x\\,dx$ là:',
        options: ['$x\\ln x - x + C$', '$\\ln|x|+C$', '$x\\ln x + C$', '$\\dfrac{1}{x}+C$'],
        correctAnswerIndex: 0,
        explanation: 'Dùng từng phần: $\\int \\ln x dx = x\\ln x - \\int dx = x\\ln x - x + C$.'
      },
      {
        id: 'q2-2-9',
        text: 'Tính $\\int \\dfrac{1}{2x+3}dx$ được:',
        options: ['$\\ln|2x+3|+C$', '$\\dfrac{1}{2}\\ln|2x+3|+C$', '$2\\ln|2x+3|+C$', '$\\dfrac{1}{2x+3}+C$'],
        correctAnswerIndex: 1,
        explanation: 'Đặt $u=2x+3 \\Rightarrow du=2dx$, do đó $\\int \\dfrac{1}{2x+3}dx = \\dfrac{1}{2}\\ln|2x+3|+C$.'
      },
      {
        id: 'q2-2-10',
        text: 'Phương pháp từng phần đặc biệt hữu ích khi tính nguyên hàm của:',
        options: [
          ['Tích của đa thức với hàm mũ, lượng giác hoặc logarit', 'Chỉ các hàm hằng'],
          ['Chỉ phân thức', 'Chỉ căn thức'],
          ['Chỉ hàm bậc nhất', 'Chỉ hàm hữu tỉ đơn giản'],
          ['Không áp dụng được', 'Mọi trường hợp']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Nguyên hàm từng phần hay dùng với tích của đa thức và các hàm như $e^x, \\sin x, \\cos x, \\ln x$.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Tích phân',
    description: 'Khái niệm tích phân xác định và các tính chất cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $[a;b]$ thì:',
        options: [
          ['$\\int_a^b f(x)dx = F(b)-F(a)$', '$\\int_a^b f(x)dx = F(a)-F(b)$'],
          ['$\\int_a^b f(x)dx = f(b)-f(a)$', '$\\int_a^b f(x)dx = 0$'],
          ['$\\int_a^b f(x)dx = F(a)+F(b)$', '$\\int_a^b f(x)dx = F(a)F(b)$'],
          ['$\\int_a^b f(x)dx = b-a$', '$\\int_a^b f(x)dx = a-b$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Theo công thức Newton-Leibniz: $\\int_a^b f(x)dx = F(b)-F(a)$.'
      },
      {
        id: 'q2-3-2',
        text: 'Giá trị của $\\int_0^1 x\\,dx$ là:',
        options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$0$'],
        correctAnswerIndex: 0,
        explanation: '$\\int_0^1 xdx = \\left[\\dfrac{x^2}{2}\\right]_0^1 = \\dfrac{1}{2}$.'
      },
      {
        id: 'q2-3-3',
        text: 'Giá trị của $\\int_0^\\pi \\sin x\\,dx$ là:',
        options: ['0', '1', '2', '$\\pi$'],
        correctAnswerIndex: 2,
        explanation: '$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = 1-(-1)=2$.'
      },
      {
        id: 'q2-3-4',
        text: 'Tính chất nào sau đây đúng?',
        options: [
          ['$\\int_a^a f(x)dx = 0$', '$\\int_a^a f(x)dx = 1$'],
          ['$\\int_a^a f(x)dx = f(a)$', '$\\int_a^a f(x)dx = a$'],
          ['$\\int_a^a f(x)dx = -1$', '$\\int_a^a f(x)dx = 2$'],
          ['$\\int_a^a f(x)dx = \\infty$', '$\\int_a^a f(x)dx$ không xác định']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Tích phân trên đoạn có hai cận trùng nhau luôn bằng 0.'
      },
      {
        id: 'q2-3-5',
        text: 'Giá trị của $\\int_1^2 3dx$ là:',
        options: ['1', '2', '3', '6'],
        correctAnswerIndex: 2,
        explanation: '$\\int_1^2 3dx = 3(2-1)=3$.'
      },
      {
        id: 'q2-3-6',
        text: 'Nếu đổi chỗ cận tích phân thì:',
        options: [
          ['Đổi dấu tích phân', 'Giữ nguyên giá trị'],
          ['Giá trị tăng gấp đôi', 'Giá trị bằng 0'],
          ['Không đổi với mọi hàm', 'Chỉ đúng với hàm dương'],
          ['Chỉ đổi dấu khi hàm âm', 'Không có quy tắc']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$.'
      },
      {
        id: 'q2-3-7',
        text: 'Giá trị của $\\int_0^2 (x+1)dx$ là:',
        options: ['2', '3', '4', '6'],
        correctAnswerIndex: 2,
        explanation: '$\\int_0^2 (x+1)dx = \\left[\\dfrac{x^2}{2}+x\\right]_0^2 = 2+2=4$.'
      },
      {
        id: 'q2-3-8',
        text: 'Nếu $f(x)\\ge 0$ trên $[a;b]$ thì $\\int_a^b f(x)dx$:',
        options: ['Âm', 'Không âm', 'Luôn bằng 0', 'Luôn dương'],
        correctAnswerIndex: 1,
        explanation: 'Nếu hàm số không âm trên đoạn thì tích phân của nó trên đoạn đó không âm.'
      },
      {
        id: 'q2-3-9',
        text: 'Giá trị của $\\int_0^1 e^x dx$ là:',
        options: ['$e-1$', '$e$', '$1-e$', '$0$'],
        correctAnswerIndex: 0,
        explanation: '$\\int_0^1 e^x dx = [e^x]_0^1 = e-1$.'
      },
      {
        id: 'q2-3-10',
        text: 'Công thức nào sau đây đúng?',
        options: [
          ['$\\int_a^b [f(x)+g(x)]dx = \\int_a^b f(x)dx + \\int_a^b g(x)dx$', '$\\int_a^b [f(x)+g(x)]dx = \\int_a^b f(x)dx \\cdot \\int_a^b g(x)dx$'],
          ['$\\int_a^b [f(x)+g(x)]dx = f(a)+g(b)$', '$\\int_a^b [f(x)+g(x)]dx = 0$'],
          ['$\\int_a^b [f(x)+g(x)]dx = f(b)+g(a)$', '$\\int_a^b [f(x)+g(x)]dx = 1$'],
          ['$\\int_a^b [f(x)+g(x)]dx = (b-a)(f+g)$', '$\\int_a^b [f(x)+g(x)]dx$ không tách được']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Tích phân có tính tuyến tính: tích phân của tổng bằng tổng các tích phân.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'Ứng dụng của tích phân',
    description: 'Tính diện tích hình phẳng và thể tích khối tròn xoay.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q2-4-1',
        text: 'Diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục hoành và hai đường thẳng $x=a, x=b$ là:',
        options: [
          ['$\\int_a^b |f(x)|dx$', '$\\int_a^b f(x)dx$'],
          ['$f(b)-f(a)$', '$|f(b)-f(a)|$'],
          ['$\\int_a^b f\'(x)dx$', '$\\int_a^b x f(x)dx$'],
          ['$\\pi \\int_a^b f(x)dx$', '$\\pi \\int_a^b f^2(x)dx$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Diện tích phải không âm nên dùng công thức $S=\\int_a^b |f(x)|dx$.'
      },
      {
        id: 'q2-4-2',
        text: 'Diện tích hình phẳng giới hạn bởi đồ thị $y=x$, trục hoành, $x=0$ và $x=2$ là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: '$S=\\int_0^2 xdx = \\left[\\dfrac{x^2}{2}\\right]_0^2 = 2$.'
      },
      {
        id: 'q2-4-3',
        text: 'Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=f(x)\\ge 0$ quanh trục $Ox$ là:',
        options: [
          ['$V=\\pi\\int_a^b f^2(x)dx$', '$V=\\int_a^b f(x)dx$'],
          ['$V=2\\pi\\int_a^b f(x)dx$', '$V=\\pi\\int_a^b f(x)dx$'],
          ['$V=\\int_a^b |f(x)|dx$', '$V=\\pi(f(b)-f(a))$'],
          ['$V=\\int_a^b x^2dx$', '$V=\\pi\\int_a^b x f(x)dx$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Công thức thể tích khối tròn xoay quanh trục $Ox$ là $V=\\pi\\int_a^b [f(x)]^2dx$.'
      },
      {
        id: 'q2-4-4',
        text: 'Thể tích khối tròn xoay sinh bởi miền giới hạn bởi $y=x$, $x=0$, $x=1$ quay quanh trục $Ox$ là:',
        options: ['$\\dfrac{\\pi}{3}$', '$\\pi$', '$\\dfrac{1}{3}$', '$\\dfrac{2\\pi}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$V=\\pi\\int_0^1 x^2dx = \\pi\\left[\\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{\\pi}{3}$.'
      },
      {
        id: 'q2-4-5',
        text: 'Diện tích hình phẳng giới hạn bởi $y=x^2$, trục hoành, $x=0$, $x=1$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$1$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation: '$S=\\int_0^1 x^2dx = \\left[\\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{1}{3}$.'
      },
      {
        id: 'q2-4-6',
        text: 'Nếu đồ thị cắt trục hoành trên đoạn $[a;b]$ thì khi tính diện tích ta phải:',
        options: [
          ['Chia đoạn và lấy trị tuyệt đối từng phần', 'Tính trực tiếp $\\int_a^b f(x)dx$'],
          ['Luôn lấy cận lớn trừ cận nhỏ', 'Không cần xét dấu'],
          ['Chỉ lấy giá trị tại đầu mút', 'Chỉ cần vẽ hình'],
          ['Bỏ qua phần âm', 'Nhân đôi tích phân']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Khi hàm đổi dấu, phải chia khoảng theo các giao điểm với trục hoành và lấy trị tuyệt đối để tính diện tích.'
      },
      {
        id: 'q2-4-7',
        text: 'Diện tích hình phẳng luôn là một số:',
        options: ['Âm', 'Không âm', 'Nguyên', 'Hữu tỉ'],
        correctAnswerIndex: 1,
        explanation: 'Diện tích là đại lượng hình học nên luôn không âm.'
      },
      {
        id: 'q2-4-8',
        text: 'Thể tích khối tròn xoay luôn là một số:',
        options: ['Âm', 'Không âm', 'Nguyên', 'Âm hoặc dương'],
        correctAnswerIndex: 1,
        explanation: 'Thể tích là đại lượng hình học nên luôn không âm.'
      },
      {
        id: 'q2-4-9',
        text: 'Diện tích hình phẳng giới hạn bởi $y=1-x$, trục hoành, $x=0$, $x=1$ là:',
        options: ['$\\dfrac{1}{2}$', '$1$', '$2$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$S=\\int_0^1 (1-x)dx = \\left[x-\\dfrac{x^2}{2}\\right]_0^1 = \\dfrac{1}{2}$.'
      },
      {
        id: 'q2-4-10',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=\\sqrt{x}$, $x=0$, $x=1$, trục hoành quay quanh $Ox$ là:',
        options: ['$\\dfrac{\\pi}{2}$', '$\\pi$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{\\pi}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $f(x)=\\sqrt{x}$ nên $f^2(x)=x$. Do đó $V=\\pi\\int_0^1 xdx=\\pi\\cdot \\dfrac{1}{2}=\\dfrac{\\pi}{2}$.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Ôn tập chương Nguyên hàm và Tích phân',
    description: 'Củng cố công thức, kĩ năng tính nguyên hàm, tích phân và ứng dụng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          ['Mọi nguyên hàm của cùng một hàm số chỉ sai khác nhau một hằng số', 'Mọi nguyên hàm đều giống hệt nhau'],
          ['Nguyên hàm là đạo hàm', 'Nguyên hàm không liên quan đến đạo hàm'],
          ['Một hàm số chỉ có một nguyên hàm', 'Nguyên hàm không có hằng số $C$'],
          ['Tích phân xác định có hằng số $C$', 'Tích phân không xác định không có $C$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Các nguyên hàm của cùng một hàm số chỉ khác nhau một hằng số cộng.'
      },
      {
        id: 'q2-5-2',
        text: 'Kết quả của $\\int (3x^2+2)dx$ là:',
        options: ['$x^3+2x+C$', '$3x^3+2x+C$', '$x^3+2+C$', '$x^2+2x+C$'],
        correctAnswerIndex: 0,
        explanation: '$\\int 3x^2dx = x^3$ và $\\int 2dx = 2x$, nên kết quả là $x^3+2x+C$.'
      },
      {
        id: 'q2-5-3',
        text: 'Kết quả của $\\int_0^2 2x dx$ là:',
        options: ['2', '4', '6', '8'],
        correctAnswerIndex: 1,
        explanation: '$\\int_0^2 2x dx = [x^2]_0^2 = 4$.'
      },
      {
        id: 'q2-5-4',
        text: 'Kết quả của $\\int_1^e \\dfrac{1}{x}dx$ là:',
        options: ['0', '1', '$e$', '$\\ln e + \\ln 1$'],
        correctAnswerIndex: 1,
        explanation: '$\\int_1^e \\dfrac{1}{x}dx = [\\ln|x|]_1^e = 1-0=1$.'
      },
      {
        id: 'q2-5-5',
        text: 'Nguyên hàm của $f(x)=\\dfrac{1}{\\cos^2 x}$ là:',
        options: ['$\\tan x + C$', '$\\cot x + C$', '$\\sin x + C$', '$-\\tan x + C$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $(\\tan x)\' = \\dfrac{1}{\\cos^2 x}$.'
      },
      {
        id: 'q2-5-6',
        text: 'Kết quả của $\\int_0^1 (2x+3)dx$ là:',
        options: ['3', '4', '5', '6'],
        correctAnswerIndex: 1,
        explanation: '$\\int_0^1 (2x+3)dx = [x^2+3x]_0^1 = 1+3=4$.'
      },
      {
        id: 'q2-5-7',
        text: 'Diện tích hình phẳng giới hạn bởi $y=2x$, trục hoành, $x=0$, $x=1$ là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 0,
        explanation: '$S=\\int_0^1 2x dx = [x^2]_0^1 = 1$.'
      },
      {
        id: 'q2-5-8',
        text: 'Thể tích khối tròn xoay tạo bởi miền giới hạn bởi $y=x^2$, $x=0$, $x=1$, trục hoành quanh $Ox$ là:',
        options: ['$\\dfrac{\\pi}{5}$', '$\\dfrac{\\pi}{3}$', '$\\pi$', '$\\dfrac{\\pi}{2}$'],
        correctAnswerIndex: 0,
        explanation: '$V=\\pi\\int_0^1 x^4 dx = \\pi\\left[\\dfrac{x^5}{5}\\right]_0^1 = \\dfrac{\\pi}{5}$.'
      },
      {
        id: 'q2-5-9',
        text: 'Trong các biểu thức sau, biểu thức nào đúng?',
        options: [
          ['$\\int_a^b kf(x)dx = k\\int_a^b f(x)dx$', '$\\int_a^b kf(x)dx = \\int_a^b f(x)dx + k$'],
          ['$\\int_a^b kf(x)dx = \\dfrac{1}{k}\\int_a^b f(x)dx$', '$\\int_a^b kf(x)dx = k+f(x)$'],
          ['$\\int_a^b kf(x)dx = a+b$', '$\\int_a^b kf(x)dx = ab$'],
          ['$\\int_a^b kf(x)dx = kf(b)-kf(a)$', '$\\int_a^b kf(x)dx = 0$']
        ][0],
        correctAnswerIndex: 0,
        explanation: 'Tính chất tuyến tính: có thể đưa hằng số nhân ra ngoài dấu tích phân.'
      },
      {
        id: 'q2-5-10',
        text: 'Công cụ chính để tính chính xác tích phân xác định là:',
        options: ['Bảng biến thiên', 'Công thức Newton-Leibniz', 'Định lí Viète', 'Đạo hàm cấp hai'],
        correctAnswerIndex: 1,
        explanation: 'Để tính tích phân xác định, công cụ cơ bản nhất là công thức Newton-Leibniz.'
      }
    ]
  }
];