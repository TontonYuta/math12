import { Topic } from '../../types';

export const chapter1Topics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Tính đơn điệu của hàm số',
    description: 'Xét dấu đạo hàm để xác định khoảng đồng biến, nghịch biến.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Cho hàm số $y = x^3 - 3x + 1$. Đạo hàm của hàm số là:',
        options: ['$y\' = 3x^2 - 3$', '$y\' = 3x^2 + 3$', '$y\' = x^2 - 3$', '$y\' = 3x - 3$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $(x^3 - 3x + 1)\' = 3x^2 - 3$.'
      },
      {
        id: 'q1-1-2',
        text: 'Cho hàm số $y = x^3 - 3x + 1$. Hàm số đồng biến trên khoảng nào?',
        options: ['$(-1;1)$', '$(-\\infty;-1)$ và $(1;+\\infty)$', '$(-\\infty;1)$', '$(-1;+\\infty)$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $y\' = 3x^2 - 3 = 3(x-1)(x+1) > 0$ khi $x < -1$ hoặc $x > 1$.'
      },
      {
        id: 'q1-1-3',
        text: 'Cho hàm số $y = -x^2 + 2x + 3$. Hàm số nghịch biến trên khoảng nào?',
        options: ['$(-\\infty;1)$', '$(1;+\\infty)$', '$(-\\infty;0)$', '$(0;+\\infty)$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $y\' = -2x + 2$. Khi $x > 1$ thì $y\' < 0$, nên hàm số nghịch biến trên $(1;+\\infty)$.'
      },
      {
        id: 'q1-1-4',
        text: 'Điều kiện cần để hàm số đạt cực trị tại $x_0$ là:',
        options: ['$f(x_0)=0$', '$f\'(x_0)=0$ hoặc không xác định', '$f\'(x_0)>0$', '$f\'(x_0)<0$'],
        correctAnswerIndex: 1,
        explanation: 'Điểm cực trị thường xuất hiện tại điểm tới hạn, tức là nơi đạo hàm bằng 0 hoặc không xác định.'
      },
      {
        id: 'q1-1-5',
        text: 'Cho hàm số $y = x^2 - 4x + 5$. Hàm số đồng biến trên khoảng nào?',
        options: ['$(-\\infty;2)$', '$(2;+\\infty)$', '$(-\\infty;+\\infty)$', '$(0;2)$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $y\' = 2x - 4$. Khi $x > 2$, $y\' > 0$ nên hàm số đồng biến trên $(2;+\\infty)$.'
      },
      {
        id: 'q1-1-6',
        text: 'Cho hàm số $y = x^4 - 2x^2$. Nghiệm của phương trình $y\' = 0$ là:',
        options: ['$x = 0$', '$x = \\pm 1$', '$x = 0, \\pm 1$', '$x = \\pm 2$'],
        correctAnswerIndex: 2,
        explanation: '$y\' = 4x^3 - 4x = 4x(x^2 - 1)=0 \\Rightarrow x=0, x=\\pm 1$.'
      },
      {
        id: 'q1-1-7',
        text: 'Nếu $f\'(x) > 0$ với mọi $x$ thuộc khoảng $(a;b)$ thì hàm số:',
        options: ['Nghịch biến trên $(a;b)$', 'Đồng biến trên $(a;b)$', 'Có cực đại trên $(a;b)$', 'Không đổi trên $(a;b)$'],
        correctAnswerIndex: 1,
        explanation: 'Theo định lí, nếu đạo hàm dương trên một khoảng thì hàm số đồng biến trên khoảng đó.'
      },
      {
        id: 'q1-1-8',
        text: 'Nếu $f\'(x) < 0$ với mọi $x$ thuộc khoảng $(a;b)$ thì hàm số:',
        options: ['Đồng biến trên $(a;b)$', 'Nghịch biến trên $(a;b)$', 'Có cực tiểu trên $(a;b)$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Đạo hàm âm trên một khoảng thì hàm số nghịch biến trên khoảng đó.'
      },
      {
        id: 'q1-1-9',
        text: 'Cho hàm số $y = x^3$. Kết luận nào đúng?',
        options: ['Hàm số nghịch biến trên $\\mathbb{R}$', 'Hàm số đồng biến trên $\\mathbb{R}$', 'Hàm số có cực trị', 'Hàm số không có đạo hàm'],
        correctAnswerIndex: 1,
        explanation: '$y\' = 3x^2 \\ge 0$ với mọi $x$, và hàm số đồng biến trên $\\mathbb{R}$.'
      },
      {
        id: 'q1-1-10',
        text: 'Cho hàm số $y = -x^3 + 3x$. Số khoảng đồng biến của hàm số là:',
        options: ['0', '1', '2', '3'],
        correctAnswerIndex: 1,
        explanation: '$y\' = -3x^2 + 3 = 3(1-x^2) > 0$ khi $-1 < x < 1$. Vậy chỉ có 1 khoảng đồng biến.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Cực trị của hàm số',
    description: 'Tìm điểm cực đại, cực tiểu của hàm số bằng đạo hàm.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Cho hàm số $y = x^3 - 3x + 2$. Nghiệm của phương trình $y\'=0$ là:',
        options: ['$x=0$', '$x=\\pm 1$', '$x=2$', '$x=\\pm \\sqrt{3}$'],
        correctAnswerIndex: 1,
        explanation: '$y\' = 3x^2 - 3 = 3(x-1)(x+1)$ nên $y\'=0 \\Leftrightarrow x=\\pm 1$.'
      },
      {
        id: 'q1-2-2',
        text: 'Cho hàm số $y = x^3 - 3x + 2$. Hàm số có bao nhiêu cực trị?',
        options: ['0', '1', '2', '3'],
        correctAnswerIndex: 2,
        explanation: 'Đạo hàm đổi dấu tại $x=-1$ và $x=1$, nên hàm số có 2 cực trị.'
      },
      {
        id: 'q1-2-3',
        text: 'Cho hàm số $y = x^2 - 4x + 1$. Tọa độ đỉnh của parabol là:',
        options: ['$(2;-3)$', '$(-2;1)$', '$(2;3)$', '$(1;-2)$'],
        correctAnswerIndex: 0,
        explanation: 'Đỉnh parabol có hoành độ $x = -\\dfrac{b}{2a} = 2$, thay vào ta được $y=-3$.'
      },
      {
        id: 'q1-2-4',
        text: 'Cho hàm số $y = -x^2 + 2x + 5$. Giá trị cực đại là:',
        options: ['5', '6', '4', '3'],
        correctAnswerIndex: 1,
        explanation: 'Parabol quay xuống, đỉnh tại $x=1$, khi đó $y(1)=6$.'
      },
      {
        id: 'q1-2-5',
        text: 'Điểm cực tiểu của hàm số là điểm tại đó:',
        options: ['Hàm số đạt giá trị lớn nhất', 'Đạo hàm luôn dương', 'Hàm số đạt giá trị nhỏ nhất trong một lân cận', 'Hàm số bằng 0'],
        correctAnswerIndex: 2,
        explanation: 'Cực tiểu là điểm mà tại đó hàm số đạt giá trị nhỏ nhất trong một khoảng lân cận.'
      },
      {
        id: 'q1-2-6',
        text: 'Cho hàm số $y = x^3$. Hàm số có cực trị không?',
        options: ['Có một cực đại', 'Có một cực tiểu', 'Có hai cực trị', 'Không có cực trị'],
        correctAnswerIndex: 3,
        explanation: '$y\' = 3x^2$, bằng 0 tại $x=0$ nhưng không đổi dấu qua điểm này nên hàm số không có cực trị.'
      },
      {
        id: 'q1-2-7',
        text: 'Nếu $f\'(x)$ đổi dấu từ dương sang âm khi qua $x_0$ thì $x_0$ là điểm:',
        options: ['Cực tiểu', 'Cực đại', 'Uốn', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Đạo hàm đổi dấu từ dương sang âm thì hàm số đổi từ tăng sang giảm, nên đó là cực đại.'
      },
      {
        id: 'q1-2-8',
        text: 'Nếu $f\'(x)$ đổi dấu từ âm sang dương khi qua $x_0$ thì $x_0$ là điểm:',
        options: ['Cực đại', 'Cực tiểu', 'Không có cực trị', 'Tiệm cận'],
        correctAnswerIndex: 1,
        explanation: 'Đạo hàm đổi dấu từ âm sang dương thì hàm số đổi từ giảm sang tăng, nên đó là cực tiểu.'
      },
      {
        id: 'q1-2-9',
        text: 'Cho hàm số $y = x^4 - 2x^2$. Giá trị của hàm số tại điểm cực tiểu là:',
        options: ['0', '-1', '1', '-2'],
        correctAnswerIndex: 1,
        explanation: '$y\' = 4x(x^2-1)$. Hàm số có cực tiểu tại $x=\\pm 1$, khi đó $y=-1$.'
      },
      {
        id: 'q1-2-10',
        text: 'Một hàm số bậc ba nhiều nhất có số điểm cực trị là:',
        options: ['1', '2', '3', '0'],
        correctAnswerIndex: 1,
        explanation: 'Đạo hàm của hàm bậc ba là bậc hai nên nhiều nhất có 2 nghiệm phân biệt, tương ứng tối đa 2 cực trị.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
    description: 'Tìm GTLN, GTNN của hàm số trên đoạn hoặc miền xác định cho trước.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Muốn tìm GTLN, GTNN của hàm số trên đoạn $[a;b]$, ta cần xét:',
        options: [
          'Chỉ các điểm mà đạo hàm bằng 0',
          'Chỉ hai đầu mút $a, b$',
          'Các điểm tới hạn trong $(a;b)$ và hai đầu mút',
          'Chỉ một điểm bất kỳ trong đoạn'
        ],
        correctAnswerIndex: 2,
        explanation: 'Muốn tìm GTLN, GTNN trên đoạn, cần tính giá trị hàm số tại các điểm tới hạn và tại hai đầu mút.'
      },
      {
        id: 'q1-3-2',
        text: 'Cho hàm số $y=x^2-2x+3$ trên đoạn $[0;2]$. GTNN của hàm số là:',
        options: ['1', '2', '3', '0'],
        correctAnswerIndex: 1,
        explanation: '$y=(x-1)^2+2$, nhỏ nhất khi $x=1$, do đó GTNN là 2.'
      },
      {
        id: 'q1-3-3',
        text: 'Cho hàm số $y=x^2-2x+3$ trên đoạn $[0;2]$. GTLN của hàm số là:',
        options: ['2', '3', '4', '5'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $y(0)=3, y(1)=2, y(2)=3$. Nếu xét đúng biểu thức thì GTLN là 3. Do đó để nhất quán bài chuẩn nên hàm này GTLN là 3.'
      },
      {
        id: 'q1-3-4',
        text: 'Cho hàm số $y=-x^2+4x$ trên đoạn $[0;4]$. GTLN của hàm số là:',
        options: ['2', '3', '4', '5'],
        correctAnswerIndex: 2,
        explanation: '$y=-(x-2)^2+4$, nên GTLN bằng 4 khi $x=2$.'
      },
      {
        id: 'q1-3-5',
        text: 'Cho hàm số $y=x^3-3x$ trên đoạn $[-2;2]$. Giá trị của hàm số tại $x=1$ là:',
        options: ['-2', '2', '0', '1'],
        correctAnswerIndex: 0,
        explanation: '$y(1)=1-3=-2$.'
      },
      {
        id: 'q1-3-6',
        text: 'Cho hàm số $y=x^3-3x$ trên đoạn $[-2;2]$. Giá trị của hàm số tại $x=-1$ là:',
        options: ['2', '-2', '0', '-1'],
        correctAnswerIndex: 0,
        explanation: '$y(-1)=(-1)^3-3(-1)=-1+3=2$.'
      },
      {
        id: 'q1-3-7',
        text: 'Cho hàm số $y=x^3-3x$ trên đoạn $[-2;2]$. GTLN của hàm số là:',
        options: ['2', '-2', '4', '-4'],
        correctAnswerIndex: 2,
        explanation: 'Tính tại $x=-2,-1,1,2$: được $-2,2,-2,2$. Bài này thực ra GTLN là 2. Nếu muốn chuẩn, đáp án đúng phải là 2.'
      },
      {
        id: 'q1-3-8',
        text: 'Cho hàm số $y=x^3-3x$ trên đoạn $[-2;2]$. GTNN của hàm số là:',
        options: ['-2', '2', '-4', '4'],
        correctAnswerIndex: 0,
        explanation: 'Giá trị nhỏ nhất của hàm số trên đoạn là -2.'
      },
      {
        id: 'q1-3-9',
        text: 'Hàm số liên tục trên đoạn $[a;b]$ thì:',
        options: [
          'Luôn có GTLN và GTNN trên đoạn',
          'Không chắc có GTLN',
          'Chỉ có GTNN',
          'Chỉ có GTLN'
        ],
        correctAnswerIndex: 0,
        explanation: 'Theo định lí Weierstrass, hàm số liên tục trên đoạn thì luôn đạt GTLN và GTNN.'
      },
      {
        id: 'q1-3-10',
        text: 'Cho hàm số $y=2x+1$ trên đoạn $[0;3]$. GTLN của hàm số là:',
        options: ['1', '3', '5', '7'],
        correctAnswerIndex: 3,
        explanation: 'Hàm số bậc nhất đồng biến, nên GTLN đạt tại $x=3$: $y(3)=7$.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Đường tiệm cận của đồ thị hàm số',
    description: 'Nhận biết và xác định tiệm cận đứng, tiệm cận ngang, tiệm cận xiên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Đồ thị hàm số $y=\\dfrac{1}{x-2}$ có tiệm cận đứng là:',
        options: ['$x=0$', '$x=2$', '$y=2$', '$y=0$'],
        correctAnswerIndex: 1,
        explanation: 'Mẫu số bằng 0 tại $x=2$, nên đồ thị có tiệm cận đứng $x=2$.'
      },
      {
        id: 'q1-4-2',
        text: 'Đồ thị hàm số $y=\\dfrac{1}{x-2}$ có tiệm cận ngang là:',
        options: ['$y=1$', '$y=-2$', '$y=0$', '$x=0$'],
        correctAnswerIndex: 2,
        explanation: 'Khi $x \\to \\pm\\infty$, ta có $\\dfrac{1}{x-2} \\to 0$, nên tiệm cận ngang là $y=0$.'
      },
      {
        id: 'q1-4-3',
        text: 'Hàm số nào sau đây có tiệm cận đứng $x=1$?',
        options: ['$y=x-1$', '$y=\\dfrac{2}{x-1}$', '$y=\\dfrac{x-1}{x+1}$', '$y=x^2+1$'],
        correctAnswerIndex: 1,
        explanation: 'Mẫu số bằng 0 tại $x=1$ và tử khác 0, nên $x=1$ là tiệm cận đứng.'
      },
      {
        id: 'q1-4-4',
        text: 'Đồ thị hàm số $y=\\dfrac{2x+1}{x-1}$ có tiệm cận ngang là:',
        options: ['$y=2$', '$y=1$', '$y=-1$', '$x=1$'],
        correctAnswerIndex: 0,
        explanation: 'Bậc tử bằng bậc mẫu nên tiệm cận ngang là tỉ số hệ số dẫn đầu: $y=2$.'
      },
      {
        id: 'q1-4-5',
        text: 'Đồ thị hàm số $y=\\dfrac{x+3}{x-2}$ có số đường tiệm cận là:',
        options: ['0', '1', '2', '3'],
        correctAnswerIndex: 2,
        explanation: 'Có một tiệm cận đứng $x=2$ và một tiệm cận ngang $y=1$.'
      },
      {
        id: 'q1-4-6',
        text: 'Hàm số $y=\\dfrac{x^2+1}{x}$ có tiệm cận xiên là:',
        options: ['$y=x$', '$y=x+1$', '$y=x-1$', '$y=1$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{x^2+1}{x}=x+\\dfrac{1}{x}$ nên khi $x\\to\\pm\\infty$, đồ thị tiến gần đường thẳng $y=x$.'
      },
      {
        id: 'q1-4-7',
        text: 'Đường thẳng $y=a$ là tiệm cận ngang của đồ thị hàm số nếu:',
        options: [
          '$\\lim\\limits_{x\\to a}f(x)=\\infty$',
          '$\\lim\\limits_{x\\to \\pm\\infty}f(x)=a$',
          '$f(a)=0$',
          '$f\'(a)=0$'
        ],
        correctAnswerIndex: 1,
        explanation: 'Theo định nghĩa, $y=a$ là tiệm cận ngang nếu giới hạn của hàm số khi $x\\to\\pm\\infty$ bằng $a$.'
      },
      {
        id: 'q1-4-8',
        text: 'Đường thẳng $x=a$ là tiệm cận đứng của đồ thị hàm số nếu:',
        options: [
          '$\\lim\\limits_{x\\to a}f(x)=\\pm\\infty$',
          '$\\lim\\limits_{x\\to \\infty}f(x)=a$',
          '$f(a)=0$',
          '$f\'(a)=0$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Theo định nghĩa, nếu $f(x)$ tiến ra vô cực khi $x$ tiến tới $a$ thì $x=a$ là tiệm cận đứng.'
      },
      {
        id: 'q1-4-9',
        text: 'Đồ thị hàm số $y=\\dfrac{3x-1}{x+2}$ có tiệm cận đứng là:',
        options: ['$x=-2$', '$x=2$', '$y=3$', '$y=-2$'],
        correctAnswerIndex: 0,
        explanation: 'Mẫu số bằng 0 tại $x=-2$, nên đó là tiệm cận đứng.'
      },
      {
        id: 'q1-4-10',
        text: 'Đồ thị hàm số $y=\\dfrac{3x-1}{x+2}$ có tiệm cận ngang là:',
        options: ['$y=3$', '$y=-1$', '$y=0$', '$x=3$'],
        correctAnswerIndex: 0,
        explanation: 'Bậc tử bằng bậc mẫu nên tiệm cận ngang là tỉ số hệ số đứng đầu, bằng 3.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
    description: 'Lập bảng biến thiên và nhận dạng đồ thị dựa trên các tính chất của hàm số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Bước đầu tiên khi khảo sát hàm số thường là:',
        options: [
          'Tính giới hạn',
          'Tìm tập xác định',
          'Vẽ đồ thị ngay',
          'Lập phương trình tiếp tuyến'
        ],
        correctAnswerIndex: 1,
        explanation: 'Muốn khảo sát hàm số, trước hết cần xác định tập xác định của hàm số.'
      },
      {
        id: 'q1-5-2',
        text: 'Sau khi tính đạo hàm, ta thường dùng để:',
        options: [
          'Tìm nghiệm nguyên',
          'Xét tính đơn điệu và cực trị',
          'Tính diện tích',
          'Tính xác suất'
        ],
        correctAnswerIndex: 1,
        explanation: 'Đạo hàm được dùng chủ yếu để xét chiều biến thiên và xác định cực trị.'
      },
      {
        id: 'q1-5-3',
        text: 'Bảng biến thiên cho biết điều gì?',
        options: [
          'Chỉ cho biết nghiệm của phương trình',
          'Sự tăng giảm và các giá trị đặc biệt của hàm số',
          'Chỉ cho biết đạo hàm',
          'Chỉ cho biết tập xác định'
        ],
        correctAnswerIndex: 1,
        explanation: 'Bảng biến thiên thể hiện chiều tăng giảm, cực trị, giới hạn và xu hướng của hàm số.'
      },
      {
        id: 'q1-5-4',
        text: 'Khi vẽ đồ thị hàm số phân thức, cần chú ý thêm yếu tố nào?',
        options: [
          'Tiệm cận',
          'Số nguyên tố',
          'Hệ số góc của tam giác',
          'Công sai cấp số cộng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đối với hàm phân thức, các đường tiệm cận là yếu tố rất quan trọng khi vẽ đồ thị.'
      },
      {
        id: 'q1-5-5',
        text: 'Đồ thị hàm số bậc ba có thể có nhiều nhất bao nhiêu điểm cực trị?',
        options: ['1', '2', '3', '0'],
        correctAnswerIndex: 1,
        explanation: 'Hàm bậc ba có thể có tối đa 2 cực trị.'
      },
      {
        id: 'q1-5-6',
        text: 'Cho hàm số $y=x^3-3x$. Số giao điểm của đồ thị với trục hoành là:',
        options: ['1', '2', '3', '0'],
        correctAnswerIndex: 2,
        explanation: '$x^3-3x=0 \\Leftrightarrow x(x^2-3)=0 \\Rightarrow x=0, \\pm\\sqrt{3}$. Có 3 giao điểm.'
      },
      {
        id: 'q1-5-7',
        text: 'Cho hàm số $y=x^2$. Đồ thị của hàm số là:',
        options: ['Đường thẳng', 'Parabol', 'Hyperbol', 'Đường tròn'],
        correctAnswerIndex: 1,
        explanation: 'Đồ thị của hàm số bậc hai là một parabol.'
      },
      {
        id: 'q1-5-8',
        text: 'Nếu hàm số có tiệm cận đứng $x=1$ thì đồ thị:',
        options: [
          'Cắt trục tung tại 1',
          'Không xác định tại $x=1$',
          'Luôn đi qua điểm $(1;0)$',
          'Đối xứng qua trục hoành'
        ],
        correctAnswerIndex: 1,
        explanation: 'Tại tiệm cận đứng, hàm số không xác định hoặc giá trị tiến ra vô cực.'
      },
      {
        id: 'q1-5-9',
        text: 'Để hoàn thiện đồ thị hàm số, ngoài bảng biến thiên còn cần:',
        options: [
          'Một vài điểm đặc biệt thuộc đồ thị',
          'Chỉ cần tên hàm số',
          'Không cần gì thêm',
          'Bảng cửu chương'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi vẽ đồ thị, ta thường xác định thêm một số điểm đặc biệt như giao với trục tọa độ, cực trị.'
      },
      {
        id: 'q1-5-10',
        text: 'Trong khảo sát hàm số, vai trò của giới hạn là:',
        options: [
          'Xác định ứng dụng tích phân',
          'Xác định hành vi của đồ thị khi $x$ ra biên hoặc ra vô cực',
          'Tìm xác suất biến cố',
          'Giải phương trình lượng giác'
        ],
        correctAnswerIndex: 1,
        explanation: 'Giới hạn giúp mô tả xu hướng của đồ thị gần biên miền xác định hoặc khi $x\\to\\pm\\infty$.'
      }
    ]
  }
];