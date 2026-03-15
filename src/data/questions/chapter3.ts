import { Topic } from '../../types';

export const chapter3Topics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Toạ độ điểm và vectơ trong không gian',
    description: 'Ôn tập toạ độ điểm, vectơ và các phép toán cơ bản trong không gian Oxyz.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Trong không gian Oxyz, toạ độ của vectơ $\\overrightarrow{AB}$ với $A(1;2;3)$, $B(4;0;5)$ là:',
        options: ['$(3;-2;2)$', '$(5;2;8)$', '$(-3;2;-2)$', '$(3;2;2)$'],
        correctAnswerIndex: 0,
        explanation: '$\\overrightarrow{AB}=(4-1;0-2;5-3)=(3;-2;2)$.'
      },
      {
        id: 'q3-1-2',
        text: 'Cho vectơ $\\vec{u}=(1;2;-1)$ và $\\vec{v}=(3;-1;4)$. Khi đó $\\vec{u}+\\vec{v}$ bằng:',
        options: ['$(4;1;3)$', '$(2;3;-5)$', '$(3;1;4)$', '$(4;-3;3)$'],
        correctAnswerIndex: 0,
        explanation: 'Cộng theo từng toạ độ: $(1+3;2+(-1);-1+4)=(4;1;3)$.'
      },
      {
        id: 'q3-1-3',
        text: 'Tích vô hướng của hai vectơ $\\vec{u}=(1;2;3)$ và $\\vec{v}=(2;0;-1)$ là:',
        options: ['-1', '2', '5', '8'],
        correctAnswerIndex: 0,
        explanation: '$\\vec{u}\\cdot\\vec{v}=1\\cdot2+2\\cdot0+3\\cdot(-1)=2-3=-1$.'
      },
      {
        id: 'q3-1-4',
        text: 'Độ dài của vectơ $\\vec{u}=(2;-1;2)$ là:',
        options: ['$3$', '$\\sqrt{5}$', '$\\sqrt{9}$', '$2\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation: '$|\\vec{u}|=\\sqrt{2^2+(-1)^2+2^2}=\\sqrt{9}=3$.'
      },
      {
        id: 'q3-1-5',
        text: 'Hai vectơ vuông góc khi nào?',
        options: [
          'Khi tích vô hướng của chúng bằng 0',
          'Khi tổng toạ độ bằng 0',
          'Khi chúng cùng phương',
          'Khi độ dài của chúng bằng nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai vectơ khác vectơ-không vuông góc khi tích vô hướng bằng 0.'
      },
      {
        id: 'q3-1-6',
        text: 'Cho $A(1;0;2)$ và $B(3;4;2)$. Độ dài đoạn thẳng $AB$ bằng:',
        options: ['$2\\sqrt{5}$', '$\\sqrt{20}$', '$4$', '$5$'],
        correctAnswerIndex: 0,
        explanation: '$AB=\\sqrt{(3-1)^2+(4-0)^2+(2-2)^2}=\\sqrt{4+16}=2\\sqrt{5}$.'
      },
      {
        id: 'q3-1-7',
        text: 'Trung điểm của đoạn thẳng nối $A(1;2;3)$ và $B(3;4;5)$ là:',
        options: ['$(2;3;4)$', '$(4;6;8)$', '$(1;2;2)$', '$(2;2;2)$'],
        correctAnswerIndex: 0,
        explanation: 'Trung điểm có toạ độ là trung bình cộng từng toạ độ: $\\left(\\frac{1+3}{2};\\frac{2+4}{2};\\frac{3+5}{2}\\right)=(2;3;4)$.'
      },
      {
        id: 'q3-1-8',
        text: 'Cho vectơ $\\vec{u}=(2;4;6)$. Một vectơ cùng phương với $\\vec{u}$ là:',
        options: ['$(1;2;3)$', '$(2;3;4)$', '$(4;2;6)$', '$(0;4;6)$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $(1;2;3)=\\dfrac12(2;4;6)$ nên hai vectơ cùng phương.'
      },
      {
        id: 'q3-1-9',
        text: 'Nếu $\\vec{u}=(a;b;c)$ thì $|\\vec{u}|$ bằng:',
        options: ['$\\sqrt{a^2+b^2+c^2}$', '$a+b+c$', '$a^2+b^2+c^2$', '$\\sqrt{a+b+c}$'],
        correctAnswerIndex: 0,
        explanation: 'Độ dài vectơ trong không gian được tính bởi công thức $|\\vec{u}|=\\sqrt{a^2+b^2+c^2}$.'
      },
      {
        id: 'q3-1-10',
        text: 'Cho $A(1;1;1)$, $B(2;3;4)$. Toạ độ điểm $M$ sao cho $\\overrightarrow{AM}=\\overrightarrow{AB}$ là:',
        options: ['$(2;3;4)$', '$(1;2;3)$', '$(3;4;5)$', '$(0;-1;-2)$'],
        correctAnswerIndex: 0,
        explanation: 'Vì $\\overrightarrow{AM}=\\overrightarrow{AB}$ nên $M$ trùng với điểm $B$.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Phương trình mặt phẳng',
    description: 'Viết và nhận biết phương trình mặt phẳng trong không gian.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Phương trình tổng quát của mặt phẳng có dạng:',
        options: ['$Ax+By+Cz+D=0$', '$ax+by+c=0$', '$y=ax+b$', '$\\dfrac{x}{a}+\\dfrac{y}{b}=1$'],
        correctAnswerIndex: 0,
        explanation: 'Trong không gian, phương trình tổng quát của mặt phẳng là $Ax+By+Cz+D=0$ với $A,B,C$ không đồng thời bằng 0.'
      },
      {
        id: 'q3-2-2',
        text: 'Vectơ pháp tuyến của mặt phẳng $(P): 2x-y+3z-5=0$ là:',
        options: ['$(2;-1;3)$', '$(2;1;3)$', '$(-2;1;-3)$', '$(1;2;3)$'],
        correctAnswerIndex: 0,
        explanation: 'Vectơ pháp tuyến của mặt phẳng $Ax+By+Cz+D=0$ là $(A;B;C)$.'
      },
      {
        id: 'q3-2-3',
        text: 'Mặt phẳng đi qua điểm $M(1;2;3)$ và có vectơ pháp tuyến $\\vec{n}=(2;-1;1)$ có phương trình là:',
        options: [
          '$2(x-1)-(y-2)+(z-3)=0$',
          '$2x-y+z=0$',
          '$x-2y+z+1=0$',
          '$2x+y-z=0$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phương trình mặt phẳng qua $M(x_0,y_0,z_0)$ và có VTPT $\\vec{n}=(A;B;C)$ là $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.'
      },
      {
        id: 'q3-2-4',
        text: 'Điểm nào sau đây thuộc mặt phẳng $(P): x+y+z-6=0$?',
        options: ['$(1;2;3)$', '$(1;1;1)$', '$(2;2;1)$', '$(0;0;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Thay vào: $1+2+3-6=0$, nên điểm $(1;2;3)$ thuộc mặt phẳng.'
      },
      {
        id: 'q3-2-5',
        text: 'Hai mặt phẳng song song khi nào?',
        options: [
          'Hai vectơ pháp tuyến cùng phương',
          'Hai vectơ pháp tuyến vuông góc',
          'Chúng có một điểm chung',
          'Chúng có hai điểm chung'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng song song thì các vectơ pháp tuyến của chúng cùng phương.'
      },
      {
        id: 'q3-2-6',
        text: 'Hai mặt phẳng vuông góc khi nào?',
        options: [
          'Hai vectơ pháp tuyến vuông góc',
          'Hai vectơ pháp tuyến cùng phương',
          'Hai mặt phẳng có cùng phương trình',
          'Hai mặt phẳng không có điểm chung'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng vuông góc khi các vectơ pháp tuyến của chúng vuông góc.'
      },
      {
        id: 'q3-2-7',
        text: 'Mặt phẳng $(Oxy)$ có phương trình là:',
        options: ['$z=0$', '$x=0$', '$y=0$', '$x+y+z=0$'],
        correctAnswerIndex: 0,
        explanation: 'Mọi điểm trên mặt phẳng $(Oxy)$ đều có tung độ không gian thứ ba bằng 0, tức là $z=0$.'
      },
      {
        id: 'q3-2-8',
        text: 'Mặt phẳng $(Oxz)$ có phương trình là:',
        options: ['$y=0$', '$x=0$', '$z=0$', '$x+y=0$'],
        correctAnswerIndex: 0,
        explanation: 'Mặt phẳng $(Oxz)$ gồm các điểm có $y=0$.'
      },
      {
        id: 'q3-2-9',
        text: 'Mặt phẳng $(Oyz)$ có phương trình là:',
        options: ['$x=0$', '$y=0$', '$z=0$', '$x+y+z=0$'],
        correctAnswerIndex: 0,
        explanation: 'Mặt phẳng $(Oyz)$ gồm các điểm có $x=0$.'
      },
      {
        id: 'q3-2-10',
        text: 'Khoảng cách từ điểm $M(x_0;y_0;z_0)$ đến mặt phẳng $Ax+By+Cz+D=0$ được tính bằng:',
        options: [
          '$\\dfrac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$',
          '$|Ax_0+By_0+Cz_0+D|$',
          '$\\sqrt{A^2+B^2+C^2}$',
          '$\\dfrac{Ax_0+By_0+Cz_0+D}{A+B+C}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là công thức chuẩn tính khoảng cách từ điểm đến mặt phẳng.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'Phương trình đường thẳng trong không gian',
    description: 'Viết phương trình tham số và xác định vectơ chỉ phương của đường thẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Phương trình tham số của đường thẳng đi qua $M_0(x_0;y_0;z_0)$ và có vectơ chỉ phương $\\vec{u}=(a;b;c)$ là:',
        options: [
          '$\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}$',
          '$Ax+By+Cz+D=0$',
          '$\\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$',
          '$x^2+y^2+z^2=1$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là dạng phương trình tham số chuẩn của đường thẳng trong không gian.'
      },
      {
        id: 'q3-3-2',
        text: 'Vectơ nào là một vectơ chỉ phương của đường thẳng $\\begin{cases}x=1+2t\\\\y=3-t\\\\z=4+5t\\end{cases}$?',
        options: ['$(2;-1;5)$', '$(1;3;4)$', '$(2;1;5)$', '$(1;-1;1)$'],
        correctAnswerIndex: 0,
        explanation: 'Các hệ số của tham số $t$ cho vectơ chỉ phương là $(2;-1;5)$.'
      },
      {
        id: 'q3-3-3',
        text: 'Đường thẳng $d$ đi qua điểm nào sau đây: $\\begin{cases}x=1+2t\\\\y=3-t\\\\z=4+5t\\end{cases}$?',
        options: ['$(1;3;4)$', '$(2;3;4)$', '$(1;2;4)$', '$(0;0;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Cho $t=0$ thì ta được điểm $(1;3;4)$ thuộc đường thẳng.'
      },
      {
        id: 'q3-3-4',
        text: 'Hai đường thẳng song song khi nào?',
        options: [
          'Hai vectơ chỉ phương cùng phương',
          'Hai vectơ pháp tuyến cùng phương',
          'Hai đường thẳng cắt nhau',
          'Hai đường thẳng có cùng một điểm'
        ],
        correctAnswerIndex: 0,
        explanation: 'Điều kiện cần cơ bản để hai đường thẳng song song là các vectơ chỉ phương cùng phương.'
      },
      {
        id: 'q3-3-5',
        text: 'Hai đường thẳng vuông góc khi nào?',
        options: [
          'Hai vectơ chỉ phương vuông góc',
          'Hai vectơ chỉ phương cùng phương',
          'Hai đường thẳng không cắt nhau',
          'Hai đường thẳng trùng nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu hai đường thẳng cắt nhau và vectơ chỉ phương vuông góc thì hai đường thẳng vuông góc.'
      },
      {
        id: 'q3-3-6',
        text: 'Đường thẳng đi qua $A(1;2;3)$ và có vectơ chỉ phương $\\vec{u}=(1;0;-1)$ có phương trình tham số là:',
        options: [
          '$\\begin{cases}x=1+t\\\\y=2\\\\z=3-t\\end{cases}$',
          '$\\begin{cases}x=1+t\\\\y=2+t\\\\z=3-t\\end{cases}$',
          '$\\begin{cases}x=t\\\\y=2\\\\z=3-t\\end{cases}$',
          '$\\begin{cases}x=1\\\\y=2+t\\\\z=3-t\\end{cases}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Thay trực tiếp điểm đi qua và vectơ chỉ phương vào dạng phương trình tham số.'
      },
      {
        id: 'q3-3-7',
        text: 'Một điểm thuộc đường thẳng $\\begin{cases}x=2-t\\\\y=1+3t\\\\z=-1+t\\end{cases}$ khi $t=1$ là:',
        options: ['$(1;4;0)$', '$(3;4;0)$', '$(1;3;1)$', '$(2;1;-1)$'],
        correctAnswerIndex: 0,
        explanation: 'Thay $t=1$ vào ta được $(x,y,z)=(1;4;0)$.'
      },
      {
        id: 'q3-3-8',
        text: 'Nếu một đường thẳng có vectơ chỉ phương $\\vec{u}=(2;4;6)$ thì một vectơ chỉ phương khác của nó là:',
        options: ['$(1;2;3)$', '$(2;2;2)$', '$(4;6;8)$', '$(0;4;6)$'],
        correctAnswerIndex: 0,
        explanation: 'Mọi vectơ khác 0 cùng phương với vectơ chỉ phương đều là vectơ chỉ phương của đường thẳng.'
      },
      {
        id: 'q3-3-9',
        text: 'Đường thẳng song song với trục $Ox$ có thể nhận vectơ chỉ phương nào?',
        options: ['$(1;0;0)$', '$(0;1;0)$', '$(0;0;1)$', '$(1;1;0)$'],
        correctAnswerIndex: 0,
        explanation: 'Trục $Ox$ có phương là vectơ $(1;0;0)$.'
      },
      {
        id: 'q3-3-10',
        text: 'Đường thẳng song song với trục $Oz$ có thể nhận vectơ chỉ phương nào?',
        options: ['$(0;0;1)$', '$(1;0;0)$', '$(0;1;0)$', '$(1;1;1)$'],
        correctAnswerIndex: 0,
        explanation: 'Trục $Oz$ có phương là vectơ $(0;0;1)$.'
      }
    ]
  },
  {
    id: 'c3-t4',
    title: 'Vị trí tương đối trong không gian',
    description: 'Xét vị trí tương đối giữa điểm, đường thẳng và mặt phẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q3-4-1',
        text: 'Điểm $M(1;2;3)$ có thuộc mặt phẳng $(P): x+y+z-6=0$ không?',
        options: ['Có', 'Không', 'Chưa đủ dữ kiện', 'Chỉ khi $z=2$'],
        correctAnswerIndex: 0,
        explanation: 'Thay vào phương trình mặt phẳng: $1+2+3-6=0$, nên $M$ thuộc $(P)$.'
      },
      {
        id: 'q3-4-2',
        text: 'Đường thẳng song song với mặt phẳng khi nào?',
        options: [
          'Vectơ chỉ phương của đường thẳng vuông góc với vectơ pháp tuyến của mặt phẳng',
          'Vectơ chỉ phương cùng phương với vectơ pháp tuyến',
          'Đường thẳng cắt mặt phẳng',
          'Đường thẳng nằm trong mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu $\\vec{u}\\cdot\\vec{n}=0$ thì đường thẳng có phương song song với mặt phẳng.'
      },
      {
        id: 'q3-4-3',
        text: 'Đường thẳng vuông góc với mặt phẳng khi nào?',
        options: [
          'Vectơ chỉ phương của đường thẳng cùng phương với vectơ pháp tuyến của mặt phẳng',
          'Vectơ chỉ phương vuông góc với vectơ pháp tuyến',
          'Đường thẳng nằm trong mặt phẳng',
          'Đường thẳng song song với mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đường thẳng vuông góc với mặt phẳng khi vectơ chỉ phương của nó cùng phương với vectơ pháp tuyến của mặt phẳng.'
      },
      {
        id: 'q3-4-4',
        text: 'Hai mặt phẳng cắt nhau theo:',
        options: ['Một đường thẳng', 'Một điểm', 'Một đoạn thẳng', 'Không cắt nhau'],
        correctAnswerIndex: 0,
        explanation: 'Trong không gian, hai mặt phẳng phân biệt không song song thì cắt nhau theo một đường thẳng.'
      },
      {
        id: 'q3-4-5',
        text: 'Nếu hai mặt phẳng có vectơ pháp tuyến không cùng phương thì chúng:',
        options: ['Cắt nhau', 'Song song', 'Trùng nhau', 'Vuông góc với mọi đường thẳng'],
        correctAnswerIndex: 0,
        explanation: 'Hai mặt phẳng có VTPT không cùng phương thì không song song, nên chúng cắt nhau theo một đường thẳng.'
      },
      {
        id: 'q3-4-6',
        text: 'Một đường thẳng và một mặt phẳng có thể có nhiều nhất bao nhiêu điểm chung nếu đường thẳng không nằm trong mặt phẳng?',
        options: ['1', '2', '0', 'Vô số'],
        correctAnswerIndex: 0,
        explanation: 'Nếu đường thẳng không nằm trong mặt phẳng thì hoặc cắt tại một điểm, hoặc song song và không có điểm chung.'
      },
      {
        id: 'q3-4-7',
        text: 'Nếu hai đường thẳng có một điểm chung và hai vectơ chỉ phương không cùng phương thì chúng:',
        options: ['Cắt nhau', 'Song song', 'Trùng nhau', 'Chéo nhau'],
        correctAnswerIndex: 0,
        explanation: 'Có điểm chung và không cùng phương thì hai đường thẳng cắt nhau.'
      },
      {
        id: 'q3-4-8',
        text: 'Hai đường thẳng chéo nhau là hai đường thẳng:',
        options: [
          'Không đồng phẳng và không cắt nhau',
          'Cùng phương nhưng không trùng',
          'Cắt nhau nhưng không vuông góc',
          'Nằm trong cùng một mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai đường thẳng chéo nhau là hai đường không song song, không cắt nhau và không đồng phẳng.'
      },
      {
        id: 'q3-4-9',
        text: 'Nếu điểm $M$ không thuộc mặt phẳng $(P)$ thì khoảng cách từ $M$ đến $(P)$:',
        options: ['Là một số dương', 'Bằng 0', 'Là số âm', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Khoảng cách hình học luôn không âm, và khi điểm không nằm trên mặt phẳng thì khoảng cách dương.'
      },
      {
        id: 'q3-4-10',
        text: 'Nếu khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ bằng 0 thì:',
        options: ['Điểm $M$ thuộc $(P)$', 'Điểm $M$ không thuộc $(P)$', 'Điểm $M$ nằm trên trục $Ox$', 'Mặt phẳng $(P)$ đi qua gốc toạ độ'],
        correctAnswerIndex: 0,
        explanation: 'Khoảng cách từ điểm tới mặt phẳng bằng 0 khi và chỉ khi điểm nằm trên mặt phẳng đó.'
      }
    ]
  },
  {
    id: 'c3-t5',
    title: 'Ôn tập chương Phương pháp toạ độ trong không gian',
    description: 'Củng cố các công thức và kĩ năng giải bài tập tổng hợp trong không gian Oxyz.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q3-5-1',
        text: 'Cho $A(1;2;3)$, $B(4;6;3)$. Toạ độ $\\overrightarrow{AB}$ là:',
        options: ['$(3;4;0)$', '$(5;8;6)$', '$(-3;-4;0)$', '$(3;3;0)$'],
        correctAnswerIndex: 0,
        explanation: '$\\overrightarrow{AB}=(4-1;6-2;3-3)=(3;4;0)$.'
      },
      {
        id: 'q3-5-2',
        text: 'Độ dài của vectơ $\\vec{u}=(3;4;0)$ là:',
        options: ['5', '7', '4', '3'],
        correctAnswerIndex: 0,
        explanation: '$|\\vec{u}|=\\sqrt{3^2+4^2+0^2}=5$.'
      },
      {
        id: 'q3-5-3',
        text: 'Mặt phẳng có vectơ pháp tuyến $\\vec{n}=(1;2;3)$ là mặt phẳng nào?',
        options: ['$x+2y+3z-1=0$', '$x+y+z=0$', '$2x+3y+z=0$', '$x-2y+3z=0$'],
        correctAnswerIndex: 0,
        explanation: 'Mặt phẳng có VTPT $(1;2;3)$ phải có các hệ số của $x,y,z$ tỉ lệ với $(1;2;3)$.'
      },
      {
        id: 'q3-5-4',
        text: 'Đường thẳng nào sau đây có vectơ chỉ phương $(1;2;3)$?',
        options: [
          '$\\begin{cases}x=1+t\\\\y=2+2t\\\\z=3+3t\\end{cases}$',
          '$\\begin{cases}x=1+2t\\\\y=2+t\\\\z=3+3t\\end{cases}$',
          '$\\begin{cases}x=t\\\\y=2+t\\\\z=3+t\\end{cases}$',
          '$\\begin{cases}x=1+t\\\\y=2+t\\\\z=3+2t\\end{cases}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hệ số của tham số $t$ chính là toạ độ của vectơ chỉ phương.'
      },
      {
        id: 'q3-5-5',
        text: 'Điểm nào thuộc mặt phẳng $2x+y-z+1=0$?',
        options: ['$(0;-1;0)$', '$(1;1;1)$', '$(0;0;0)$', '$(1;0;1)$'],
        correctAnswerIndex: 0,
        explanation: 'Thay $(0;-1;0)$ vào: $2\\cdot0+(-1)-0+1=0$, nên điểm thuộc mặt phẳng.'
      },
      {
        id: 'q3-5-6',
        text: 'Khoảng cách từ điểm $O(0;0;0)$ đến mặt phẳng $x+y+z-3=0$ là:',
        options: ['$\\sqrt{3}$', '$\\dfrac{3}{\\sqrt{3}}$', '$3$', '$1$'],
        correctAnswerIndex: 1,
        explanation: '$d=\\dfrac{|0+0+0-3|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{3}{\\sqrt{3}}$.'
      },
      {
        id: 'q3-5-7',
        text: 'Hai vectơ $\\vec{u}=(1;0;1)$ và $\\vec{v}=(1;0;-1)$ có vuông góc không?',
        options: ['Có', 'Không', 'Cùng phương', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: '$\\vec{u}\\cdot\\vec{v}=1\\cdot1+0\\cdot0+1\\cdot(-1)=0$, nên vuông góc.'
      },
      {
        id: 'q3-5-8',
        text: 'Nếu một đường thẳng có vectơ chỉ phương $\\vec{u}$ và một mặt phẳng có vectơ pháp tuyến $\\vec{n}$ sao cho $\\vec{u}$ cùng phương với $\\vec{n}$ thì:',
        options: [
          'Đường thẳng vuông góc với mặt phẳng',
          'Đường thẳng song song với mặt phẳng',
          'Đường thẳng nằm trong mặt phẳng',
          'Đường thẳng cắt mặt phẳng theo mọi điểm'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vectơ chỉ phương cùng phương với vectơ pháp tuyến là điều kiện để đường thẳng vuông góc với mặt phẳng.'
      },
      {
        id: 'q3-5-9',
        text: 'Trong không gian Oxyz, giao tuyến của hai mặt phẳng phân biệt không song song là:',
        options: ['Một đường thẳng', 'Một điểm', 'Một mặt phẳng', 'Một đoạn thẳng'],
        correctAnswerIndex: 0,
        explanation: 'Đây là tính chất cơ bản của hai mặt phẳng phân biệt không song song.'
      },
      {
        id: 'q3-5-10',
        text: 'Công thức toạ độ trung điểm của đoạn thẳng $AB$ với $A(x_1;y_1;z_1)$, $B(x_2;y_2;z_2)$ là:',
        options: [
          '$\\left(\\dfrac{x_1+x_2}{2};\\dfrac{y_1+y_2}{2};\\dfrac{z_1+z_2}{2}\\right)$',
          '$\\left(x_1+x_2;y_1+y_2;z_1+z_2\\right)$',
          '$\\left(\\dfrac{x_1-x_2}{2};\\dfrac{y_1-y_2}{2};\\dfrac{z_1-z_2}{2}\\right)$',
          '$\\left(x_1x_2;y_1y_2;z_1z_2\\right)$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trung điểm được tính bằng trung bình cộng các toạ độ tương ứng của hai đầu mút.'
      }
    ]
  }
];