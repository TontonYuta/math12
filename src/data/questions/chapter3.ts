import { Topic } from '../../types';
import { chapter3ExamTopics } from './chapter3-exams';

export const chapter3CoreTopics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Tọa độ điểm và vectơ trong không gian',
    description: 'Xác định tọa độ điểm, tọa độ vectơ và các phép toán vectơ trong không gian Oxyz.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Trong không gian $Oxyz$, cho $A(1;2;3)$ và $B(4;0;-1)$. Tọa độ vectơ $\\overrightarrow{AB}$ là:',
        options: ['$(3;-2;-4)$', '$(5;2;2)$', '$(-3;2;4)$', '$(3;2;-4)$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\overrightarrow{AB}=(4-1;0-2;-1-3)=(3;-2;-4)$.'
      },
      {
        id: 'q3-1-2',
        text: 'Trong không gian $Oxyz$, cho vectơ $\\vec{u}=(2;-1;3)$ và $\\vec{v}=(1;4;-2)$. Khi đó $\\vec{u}+\\vec{v}$ bằng:',
        options: ['$(3;3;1)$', '$(1;-5;5)$', '$(2;4;3)$', '$(3;-3;1)$'],
        correctAnswerIndex: 0,
        explanation: 'Cộng từng tọa độ: $\\vec{u}+\\vec{v}=(2+1;-1+4;3+(-2))=(3;3;1)$.'
      },
      {
        id: 'q3-1-3',
        text: 'Trong không gian $Oxyz$, cho $M(2;-1;4)$ và $N(0;3;2)$. Tọa độ trung điểm của đoạn thẳng $MN$ là:',
        options: ['$(1;1;3)$', '$(2;2;6)$', '$(1;-2;1)$', '$(0;1;2)$'],
        correctAnswerIndex: 0,
        explanation: 'Trung điểm $I$ của $MN$ có tọa độ $\\left(\\dfrac{2+0}{2};\\dfrac{-1+3}{2};\\dfrac{4+2}{2}\\right)=(1;1;3)$.'
      },
      {
        id: 'q3-1-4',
        text: 'Cho vectơ $\\vec{u}=(1;2;2)$. Độ dài của $\\vec{u}$ là:',
        options: ['$3$', '$\\sqrt{5}$', '$2$', '$\\sqrt{7}$'],
        correctAnswerIndex: 0,
        explanation: '$|\\vec{u}|=\\sqrt{1^2+2^2+2^2}=\\sqrt{9}=3$.'
      },
      {
        id: 'q3-1-5',
        text: 'Trong không gian $Oxyz$, cho $A(1;0;2)$, $B(3;1;4)$, $C(5;2;6)$. Khẳng định nào đúng?',
        options: [
          '$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương',
          '$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ vuông góc',
          '$A, B, C$ không thẳng hàng',
          '$\\overrightarrow{AB}=\\overrightarrow{AC}$'
        ],
        correctAnswerIndex: 0,
        explanation: '$\\overrightarrow{AB}=(2;1;2)$, $\\overrightarrow{AC}=(4;2;4)=2\\overrightarrow{AB}$ nên hai vectơ cùng phương.'
      },
      {
        id: 'q3-1-6',
        text: 'Cho hai điểm $A(-1;2;0)$ và $B(3;-2;4)$. Khoảng cách $AB$ bằng:',
        options: ['$4\\sqrt{3}$', '$6$', '$2\\sqrt{5}$', '$\\sqrt{48}$'],
        correctAnswerIndex: 0,
        explanation: '$AB=\\sqrt{(3+1)^2+(-2-2)^2+(4-0)^2}=\\sqrt{16+16+16}=4\\sqrt{3}$.'
      },
      {
        id: 'q3-1-7',
        text: 'Cho $\\vec{u}=(1;2;3)$ và $\\vec{v}=(-2;1;0)$. Tích vô hướng $\\vec{u}\\cdot\\vec{v}$ bằng:',
        options: ['$0$', '$1$', '$-2$', '$3$'],
        correctAnswerIndex: 0,
        explanation: '$\\vec{u}\\cdot\\vec{v}=1\\cdot(-2)+2\\cdot1+3\\cdot0=0$.'
      },
      {
        id: 'q3-1-8',
        text: 'Hai vectơ $\\vec{u}=(1;2;3)$ và $\\vec{v}=(-2;1;0)$ có tính chất gì?',
        options: ['Vuông góc', 'Cùng phương', 'Bằng nhau', 'Đối nhau'],
        correctAnswerIndex: 0,
        explanation: 'Vì $\\vec{u}\\cdot\\vec{v}=0$ nên hai vectơ vuông góc.'
      },
      {
        id: 'q3-1-9',
        text: 'Điểm nào sau đây thuộc trục $Oz$?',
        options: ['$(0;0;2)$', '$(0;2;0)$', '$(2;0;0)$', '$(1;1;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Điểm thuộc trục $Oz$ có dạng $(0;0;z)$.'
      },
      {
        id: 'q3-1-10',
        text: 'Trong không gian $Oxyz$, gốc tọa độ $O$ có tọa độ là:',
        options: ['$(0;0;0)$', '$(1;0;0)$', '$(0;1;0)$', '$(0;0;1)$'],
        correctAnswerIndex: 0,
        explanation: 'Gốc tọa độ trong hệ trục $Oxyz$ là điểm $O(0;0;0)$.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Phương trình mặt cầu',
    description: 'Xác định tâm, bán kính và lập phương trình mặt cầu trong không gian.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Mặt cầu tâm $I(1;2;3)$ bán kính $R=2$ có phương trình là:',
        options: [
          '$(x-1)^2+(y-2)^2+(z-3)^2=4$',
          '$(x+1)^2+(y+2)^2+(z+3)^2=4$',
          '$(x-1)^2+(y-2)^2+(z-3)^2=2$',
          '$x^2+y^2+z^2=4$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phương trình mặt cầu tâm $I(a;b;c)$ bán kính $R$ là $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.'
      },
      {
        id: 'q3-2-2',
        text: 'Mặt cầu $(x-2)^2+(y+1)^2+(z-4)^2=9$ có tâm là:',
        options: ['$(2;-1;4)$', '$(-2;1;-4)$', '$(2;1;4)$', '$(3;-1;4)$'],
        correctAnswerIndex: 0,
        explanation: 'So sánh với dạng chuẩn, tâm mặt cầu là $I(2;-1;4)$.'
      },
      {
        id: 'q3-2-3',
        text: 'Mặt cầu $(x-2)^2+(y+1)^2+(z-4)^2=9$ có bán kính là:',
        options: ['$3$', '$9$', '$\\sqrt{3}$', '$2$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $R^2=9$ nên $R=3$.'
      },
      {
        id: 'q3-2-4',
        text: 'Phương trình nào sau đây là phương trình của một mặt cầu?',
        options: [
          '$x^2+y^2+z^2-2x+4y-6z+10=0$',
          '$x^2+y^2-z^2=1$',
          '$x+y+z=3$',
          '$x^2+y^2+z=1$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phương trình mặt cầu có dạng $x^2+y^2+z^2+ax+by+cz+d=0$ với điều kiện bán kính thực dương.'
      },
      {
        id: 'q3-2-5',
        text: 'Mặt cầu $x^2+y^2+z^2-2x-4y+6z-2=0$ có tâm là:',
        options: ['$(1;2;-3)$', '$(-1;-2;3)$', '$(1;-2;3)$', '$(2;4;-6)$'],
        correctAnswerIndex: 0,
        explanation: 'Hoàn thành bình phương: $(x-1)^2+(y-2)^2+(z+3)^2=16$, nên tâm là $(1;2;-3)$.'
      },
      {
        id: 'q3-2-6',
        text: 'Mặt cầu $x^2+y^2+z^2-2x-4y+6z-2=0$ có bán kính là:',
        options: ['$4$', '$2$', '$16$', '$\\sqrt{14}$'],
        correctAnswerIndex: 0,
        explanation: 'Từ dạng chuẩn $(x-1)^2+(y-2)^2+(z+3)^2=16$, suy ra bán kính $R=4$.'
      },
      {
        id: 'q3-2-7',
        text: 'Mặt cầu tâm $O(0;0;0)$ đi qua điểm $M(1;2;2)$ có phương trình là:',
        options: [
          '$x^2+y^2+z^2=9$',
          '$x^2+y^2+z^2=5$',
          '$x^2+y^2+z^2=3$',
          '$(x-1)^2+(y-2)^2+(z-2)^2=9$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta có $OM=\\sqrt{1^2+2^2+2^2}=3$, nên mặt cầu có phương trình $x^2+y^2+z^2=9$.'
      },
      {
        id: 'q3-2-8',
        text: 'Điểm nào sau đây nằm trên mặt cầu $x^2+y^2+z^2=9$?',
        options: ['$(1;2;2)$', '$(2;2;2)$', '$(3;1;0)$', '$(0;0;2)$'],
        correctAnswerIndex: 0,
        explanation: 'Thay vào ta có $1^2+2^2+2^2=9$, nên điểm $(1;2;2)$ thuộc mặt cầu.'
      },
      {
        id: 'q3-2-9',
        text: 'Mặt cầu có đường kính $AB$ với $A(1;1;1)$, $B(3;3;3)$ có tâm là:',
        options: ['$(2;2;2)$', '$(1;1;1)$', '$(3;3;3)$', '$(4;4;4)$'],
        correctAnswerIndex: 0,
        explanation: 'Tâm mặt cầu là trung điểm của đường kính $AB$, nên là $(2;2;2)$.'
      },
      {
        id: 'q3-2-10',
        text: 'Mặt cầu có đường kính $AB$ với $A(1;1;1)$, $B(3;3;3)$ có bán kính là:',
        options: ['$\\sqrt{3}$', '$2\\sqrt{3}$', '$3$', '$\\dfrac{\\sqrt{3}}{2}$'],
        correctAnswerIndex: 0,
        explanation: '$AB=\\sqrt{(3-1)^2+(3-1)^2+(3-1)^2}=2\\sqrt{3}$ nên bán kính bằng $\\dfrac{AB}{2}=\\sqrt{3}$.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'Phương trình mặt phẳng',
    description: 'Nhận biết vectơ pháp tuyến, lập phương trình mặt phẳng và xét vị trí tương đối.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Mặt phẳng có vectơ pháp tuyến $\\vec{n}=(2;-1;3)$ đi qua điểm $M(1;0;2)$ có phương trình là:',
        options: [
          '$2(x-1)-(y-0)+3(z-2)=0$',
          '$2x-y+3z=0$',
          '$x-2y+3z=1$',
          '$2(x+1)-y+3(z+2)=0$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phương trình mặt phẳng qua $M(x_0;y_0;z_0)$, có pháp tuyến $(A;B;C)$ là $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.'
      },
      {
        id: 'q3-3-2',
        text: 'Phương trình tổng quát của mặt phẳng có dạng:',
        options: ['$Ax+By+Cz+D=0$', '$ax+by+c=0$', '$x^2+y^2+z^2=R^2$', '$\\dfrac{x}{a}+\\dfrac{y}{b}=1$'],
        correctAnswerIndex: 0,
        explanation: 'Mặt phẳng trong không gian có phương trình tổng quát dạng $Ax+By+Cz+D=0$ với $A^2+B^2+C^2\\ne 0$.'
      },
      {
        id: 'q3-3-3',
        text: 'Vectơ nào sau đây là một vectơ pháp tuyến của mặt phẳng $2x-y+3z-5=0$?',
        options: ['$(2;-1;3)$', '$(2;1;3)$', '$(1;2;3)$', '$(-2;1;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Vectơ pháp tuyến của mặt phẳng $Ax+By+Cz+D=0$ là $\\vec{n}=(A;B;C)$.'
      },
      {
        id: 'q3-3-4',
        text: 'Mặt phẳng nào đi qua điểm $A(1;2;3)$?',
        options: ['$x+y+z-6=0$', '$x+y+z-5=0$', '$2x-y+z+1=0$', '$x-2y+3z=0$'],
        correctAnswerIndex: 0,
        explanation: 'Thay tọa độ $A$ vào: $1+2+3-6=0$, nên mặt phẳng này đi qua $A$.'
      },
      {
        id: 'q3-3-5',
        text: 'Hai mặt phẳng song song khi:',
        options: [
          'Các vectơ pháp tuyến cùng phương',
          'Các vectơ pháp tuyến vuông góc',
          'Chúng có một điểm chung',
          'Một mặt phẳng chứa mặt phẳng kia'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng song song thì các vectơ pháp tuyến của chúng cùng phương.'
      },
      {
        id: 'q3-3-6',
        text: 'Hai mặt phẳng vuông góc khi:',
        options: [
          'Các vectơ pháp tuyến vuông góc',
          'Các vectơ pháp tuyến cùng phương',
          'Chúng không có điểm chung',
          'Chúng đều đi qua gốc tọa độ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng vuông góc khi tích vô hướng của hai vectơ pháp tuyến bằng 0.'
      },
      {
        id: 'q3-3-7',
        text: 'Mặt phẳng nào sau đây song song với mặt phẳng $x-2y+z-1=0$?',
        options: ['$2x-4y+2z+3=0$', '$x+2y-z+1=0$', '$x-2y-z=0$', '$2x+y+z=0$'],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng song song có các hệ số của $x,y,z$ tỉ lệ. Ở đây $(2;-4;2)=2(1;-2;1)$.'
      },
      {
        id: 'q3-3-8',
        text: 'Khoảng cách từ điểm $M(x_0;y_0;z_0)$ đến mặt phẳng $Ax+By+Cz+D=0$ bằng:',
        options: [
          '$\\dfrac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$',
          '$|Ax_0+By_0+Cz_0+D|$',
          '$\\sqrt{A^2+B^2+C^2}$',
          '$Ax_0+By_0+Cz_0+D$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức khoảng cách từ một điểm đến mặt phẳng.'
      },
      {
        id: 'q3-3-9',
        text: 'Khoảng cách từ điểm $M(1;2;3)$ đến mặt phẳng $x+y+z-1=0$ là:',
        options: ['$\\dfrac{5}{\\sqrt{3}}$', '$\\sqrt{3}$', '$5$', '$\\dfrac{1}{\\sqrt{3}}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $d=\\dfrac{|1+2+3-1|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{5}{\\sqrt{3}}$.'
      },
      {
        id: 'q3-3-10',
        text: 'Mặt phẳng đi qua ba điểm không thẳng hàng thì:',
        options: [
          'Xác định duy nhất',
          'Không xác định',
          'Có vô số mặt phẳng',
          'Luôn song song với mặt phẳng $Oxy$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ba điểm không thẳng hàng xác định duy nhất một mặt phẳng.'
      }
    ]
  },
  {
    id: 'c3-t4',
    title: 'Phương trình đường thẳng trong không gian',
    description: 'Lập phương trình tham số của đường thẳng, xác định vectơ chỉ phương và xét vị trí tương đối.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q3-4-1',
        text: 'Đường thẳng đi qua $M(1;2;3)$ và có vectơ chỉ phương $\\vec{u}=(2;-1;4)$ có phương trình tham số là:',
        options: [
          '$\\begin{cases}x=1+2t\\\\y=2-t\\\\z=3+4t\\end{cases}$',
          '$\\begin{cases}x=1+t\\\\y=2-2t\\\\z=3+4t\\end{cases}$',
          '$\\begin{cases}x=2+t\\\\y=1-t\\\\z=3+4t\\end{cases}$',
          '$\\begin{cases}x=1+2t\\\\y=2+t\\\\z=3-4t\\end{cases}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng qua $M(x_0;y_0;z_0)$, có vectơ chỉ phương $(a;b;c)$ có dạng $x=x_0+at, y=y_0+bt, z=z_0+ct$.'
      },
      {
        id: 'q3-4-2',
        text: 'Một vectơ chỉ phương của đường thẳng $\\dfrac{x-1}{2}=\\dfrac{y+2}{-1}=\\dfrac{z}{3}$ là:',
        options: ['$(2;-1;3)$', '$(1;2;3)$', '$(2;1;3)$', '$(1;-2;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Từ phương trình chính tắc, vectơ chỉ phương là $\\vec{u}=(2;-1;3)$.'
      },
      {
        id: 'q3-4-3',
        text: 'Điểm nào sau đây thuộc đường thẳng $\\begin{cases}x=1+t\\\\y=2-t\\\\z=3+2t\\end{cases}$?',
        options: ['$(2;1;5)$', '$(1;2;4)$', '$(0;1;3)$', '$(3;0;4)$'],
        correctAnswerIndex: 0,
        explanation: 'Lấy $t=1$ ta được điểm $(2;1;5)$ thuộc đường thẳng.'
      },
      {
        id: 'q3-4-4',
        text: 'Đường thẳng đi qua hai điểm $A(1;0;2)$ và $B(3;1;4)$ có một vectơ chỉ phương là:',
        options: ['$(2;1;2)$', '$(1;3;2)$', '$(3;1;4)$', '$(-2;1;2)$'],
        correctAnswerIndex: 0,
        explanation: '$\\overrightarrow{AB}=(3-1;1-0;4-2)=(2;1;2)$ là một vectơ chỉ phương của đường thẳng $AB$.'
      },
      {
        id: 'q3-4-5',
        text: 'Hai đường thẳng song song khi:',
        options: [
          'Các vectơ chỉ phương cùng phương',
          'Các vectơ chỉ phương vuông góc',
          'Chúng có một điểm chung',
          'Chúng cùng đi qua gốc tọa độ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng song song thì các vectơ chỉ phương của chúng cùng phương.'
      },
      {
        id: 'q3-4-6',
        text: 'Đường thẳng vuông góc với mặt phẳng khi:',
        options: [
          'Vectơ chỉ phương của đường thẳng cùng phương với vectơ pháp tuyến của mặt phẳng',
          'Vectơ chỉ phương của đường thẳng vuông góc với vectơ pháp tuyến của mặt phẳng',
          'Đường thẳng nằm trong mặt phẳng',
          'Đường thẳng song song với mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng vuông góc với mặt phẳng khi vectơ chỉ phương của nó cùng phương với vectơ pháp tuyến của mặt phẳng.'
      },
      {
        id: 'q3-4-7',
        text: 'Đường thẳng nào sau đây song song với đường thẳng có vectơ chỉ phương $\\vec{u}=(1;2;3)$?',
        options: [
          'Đường thẳng có vectơ chỉ phương $(2;4;6)$',
          'Đường thẳng có vectơ chỉ phương $(1;2;2)$',
          'Đường thẳng có vectơ chỉ phương $(3;2;1)$',
          'Đường thẳng có vectơ chỉ phương $(0;1;1)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng song song thì các vectơ chỉ phương cùng phương. Ta có $(2;4;6)=2(1;2;3)$.'
      },
      {
        id: 'q3-4-8',
        text: 'Đường thẳng $d$ đi qua $A(1;2;3)$ và vuông góc với mặt phẳng $(P): x-y+2z-4=0$ có một vectơ chỉ phương là:',
        options: ['$(1;-1;2)$', '$(1;1;2)$', '$(2;1;-1)$', '$(1;0;2)$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $d\\perp(P)$ nên vectơ chỉ phương của $d$ cùng phương với pháp tuyến của $(P)$ là $(1;-1;2)$.'
      },
      {
        id: 'q3-4-9',
        text: 'Trong phương trình tham số của đường thẳng, tham số thường kí hiệu là:',
        options: ['$t$', '$x$', '$a$', '$n$'],
        correctAnswerIndex: 0,
        explanation: 'Tham số trong phương trình tham số của đường thẳng thường được kí hiệu là $t$.'
      },
      {
        id: 'q3-4-10',
        text: 'Hai đường thẳng cắt nhau thì:',
        options: [
          'Chúng có ít nhất một điểm chung',
          'Chúng song song',
          'Các vectơ chỉ phương luôn vuông góc',
          'Chúng cùng nằm trên một mặt cầu'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng cắt nhau khi chúng có một điểm chung.'
      }
    ]
  },
  {
    id: 'c3-t5',
    title: 'Vị trí tương đối trong không gian',
    description: 'Xét quan hệ giữa điểm, đường thẳng, mặt phẳng; tính góc và khoảng cách cơ bản trong không gian.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Nibwpe-MEA4&list=RDNibwpe-MEA4&start_radio=1',
    questions: [
      {
        id: 'q3-5-1',
        text: 'Cho hai mặt phẳng $(P): x+y+z-1=0$ và $(Q): 2x+2y+2z+3=0$. Hai mặt phẳng này:',
        options: ['Song song', 'Vuông góc', 'Cắt nhau', 'Trùng nhau'],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng có các vectơ pháp tuyến cùng phương: $(2;2;2)=2(1;1;1)$, nhưng không trùng nhau nên song song.'
      },
      {
        id: 'q3-5-2',
        text: 'Cho hai mặt phẳng $(P): x+y+z=0$ và $(Q): x-y=0$. Góc giữa hai mặt phẳng bằng góc giữa:',
        options: [
          'Hai vectơ pháp tuyến của chúng',
          'Hai vectơ chỉ phương bất kì',
          'Hai trục tọa độ',
          'Một đường thẳng bất kì trong mỗi mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Góc giữa hai mặt phẳng được xác định bằng góc giữa hai vectơ pháp tuyến của chúng.'
      },
      {
        id: 'q3-5-3',
        text: 'Cho đường thẳng $d$ có vectơ chỉ phương $\\vec{u}$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\\vec{n}$. Điều kiện để $d$ song song với $(P)$ là:',
        options: [
          '$\\vec{u}\\cdot\\vec{n}=0$',
          '$\\vec{u}$ cùng phương $\\vec{n}$',
          '$\\vec{u}=\\vec{n}$',
          '$|\\vec{u}|=|\\vec{n}|$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng song song với mặt phẳng khi vectơ chỉ phương của đường thẳng vuông góc với pháp tuyến của mặt phẳng.'
      },
      {
        id: 'q3-5-4',
        text: 'Điều kiện để đường thẳng $d$ vuông góc với mặt phẳng $(P)$ là:',
        options: [
          'Vectơ chỉ phương của $d$ cùng phương với vectơ pháp tuyến của $(P)$',
          'Vectơ chỉ phương của $d$ vuông góc với vectơ pháp tuyến của $(P)$',
          '$d$ song song với $(P)$',
          '$d$ nằm trong $(P)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng vuông góc mặt phẳng khi vectơ chỉ phương của nó cùng phương với pháp tuyến của mặt phẳng.'
      },
      {
        id: 'q3-5-5',
        text: 'Cho điểm $M(1;1;1)$ và mặt phẳng $(P): x+y+z-6=0$. Điểm $M$ nằm ở vị trí nào đối với $(P)$?',
        options: ['Không thuộc mặt phẳng', 'Thuộc mặt phẳng', 'Là pháp tuyến của mặt phẳng', 'Là tâm mặt cầu'],
        correctAnswerIndex: 0,
        explanation: 'Thay vào phương trình mặt phẳng: $1+1+1-6=-3\\ne0$, nên $M$ không thuộc mặt phẳng.'
      },
{
  id: 'q3-5-6',
  text: 'Cho điểm $A(1;2;3)$ và mặt phẳng $(P): x+2y-z+7=0$. Điểm $A$ có thuộc $(P)$ không?',
  options: ['Có', 'Không', 'Không xác định', 'Chỉ khi $z=0$'],
  correctAnswerIndex: 1,
  explanation: 'Thay tọa độ $A$ vào phương trình mặt phẳng: $1+2\\cdot2-3+7=9\\ne 0$, nên điểm $A$ không thuộc $(P)$.'
},
      {
        id: 'q3-5-7',
        text: 'Khoảng cách từ điểm đến mặt phẳng luôn là một số:',
        options: ['Không âm', 'Âm', 'Luôn bằng 0', 'Có thể âm hoặc dương'],
        correctAnswerIndex: 0,
        explanation: 'Khoảng cách là đại lượng hình học nên luôn không âm.'
      },
      {
        id: 'q3-5-8',
        text: 'Nếu hai đường thẳng có vectơ chỉ phương không cùng phương và có một điểm chung thì chúng:',
        options: ['Cắt nhau', 'Song song', 'Trùng nhau', 'Chéo nhau'],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng không cùng phương mà có điểm chung thì cắt nhau.'
      },
      {
        id: 'q3-5-9',
        text: 'Trong không gian, hai đường thẳng không cắt nhau và không song song thì gọi là:',
        options: ['Chéo nhau', 'Trùng nhau', 'Vuông góc', 'Đối xứng'],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng không cắt nhau và không song song được gọi là hai đường thẳng chéo nhau.'
      },
      {
        id: 'q3-5-10',
        text: 'Cho hai vectơ pháp tuyến $\\vec{n}_1=(1;0;0)$, $\\vec{n}_2=(0;1;0)$. Hai mặt phẳng tương ứng:',
        options: ['Vuông góc', 'Song song', 'Trùng nhau', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Vì $\\vec{n}_1\\cdot\\vec{n}_2=0$ nên hai vectơ pháp tuyến vuông góc, do đó hai mặt phẳng vuông góc.'
      }
    ]
  }
];

export const chapter3Topics: Topic[] = [
  ...chapter3CoreTopics,
  ...chapter3ExamTopics
];