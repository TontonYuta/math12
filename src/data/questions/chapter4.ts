import { Topic } from '../../types';

export const chapter4Topics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Thu thập và mô tả dữ liệu',
    description: 'Nhận biết loại dữ liệu, cách thu thập, phân loại và trình bày dữ liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-1-1',
        text: 'Dữ liệu về chiều cao của học sinh trong lớp là loại dữ liệu nào?',
        options: ['Dữ liệu định tính', 'Dữ liệu định lượng', 'Dữ liệu phân loại', 'Dữ liệu kí hiệu'],
        correctAnswerIndex: 1,
        explanation: 'Chiều cao là đại lượng đo được bằng số nên là dữ liệu định lượng.'
      },
      {
        id: 'q4-1-2',
        text: 'Dữ liệu về nhóm máu của học sinh là loại dữ liệu nào?',
        options: ['Dữ liệu định tính', 'Dữ liệu định lượng', 'Dữ liệu liên tục', 'Dữ liệu số học'],
        correctAnswerIndex: 0,
        explanation: 'Nhóm máu được phân theo loại A, B, AB, O nên là dữ liệu định tính.'
      },
      {
        id: 'q4-1-3',
        text: 'Bảng thống kê dùng để làm gì?',
        options: [
          'Sắp xếp và trình bày dữ liệu một cách có hệ thống',
          'Thay thế hoàn toàn cho biểu đồ',
          'Chỉ dùng cho dữ liệu định tính',
          'Chỉ dùng cho dữ liệu định lượng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng thống kê giúp tổ chức dữ liệu rõ ràng, dễ quan sát và xử lí.'
      },
      {
        id: 'q4-1-4',
        text: 'Một ví dụ về dữ liệu định lượng rời rạc là:',
        options: ['Số học sinh trong lớp', 'Cân nặng của học sinh', 'Nhiệt độ trong ngày', 'Chiều dài bàn học'],
        correctAnswerIndex: 0,
        explanation: 'Số học sinh là số đếm nên thuộc dữ liệu định lượng rời rạc.'
      },
      {
        id: 'q4-1-5',
        text: 'Một ví dụ về dữ liệu định lượng liên tục là:',
        options: ['Số bàn trong lớp', 'Số học sinh nữ', 'Thời gian chạy 100m', 'Số quyển sách'],
        correctAnswerIndex: 2,
        explanation: 'Thời gian chạy có thể nhận nhiều giá trị thực nên là dữ liệu liên tục.'
      },
      {
        id: 'q4-1-6',
        text: 'Khi thu thập dữ liệu, bước đầu tiên thường là:',
        options: ['Vẽ biểu đồ', 'Xác định mục tiêu thu thập', 'Tính trung bình cộng', 'Tính phương sai'],
        correctAnswerIndex: 1,
        explanation: 'Muốn thu thập dữ liệu hiệu quả cần xác định rõ mục tiêu và nội dung cần khảo sát.'
      },
      {
        id: 'q4-1-7',
        text: 'Phương pháp nào sau đây là một cách thu thập dữ liệu?',
        options: ['Điều tra bằng phiếu hỏi', 'Lập phương trình', 'Lấy đạo hàm', 'Dựng đồ thị hàm số'],
        correctAnswerIndex: 0,
        explanation: 'Điều tra bằng phiếu hỏi là một phương pháp phổ biến để thu thập dữ liệu.'
      },
      {
        id: 'q4-1-8',
        text: 'Nếu muốn khảo sát môn học yêu thích của học sinh, ta nên thu thập dữ liệu nào?',
        options: ['Định tính', 'Định lượng liên tục', 'Định lượng rời rạc', 'Dữ liệu đo đạc'],
        correctAnswerIndex: 0,
        explanation: 'Môn học yêu thích là tên nhóm, không phải số đo, nên là dữ liệu định tính.'
      },
      {
        id: 'q4-1-9',
        text: 'Tần số của một giá trị là:',
        options: [
          'Số lần giá trị đó xuất hiện trong mẫu số liệu',
          'Giá trị lớn nhất của mẫu',
          'Giá trị trung bình của mẫu',
          'Hiệu giữa số lớn nhất và nhỏ nhất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tần số cho biết một giá trị xuất hiện bao nhiêu lần trong bộ dữ liệu.'
      },
      {
        id: 'q4-1-10',
        text: 'Mẫu số liệu là:',
        options: [
          'Tập hợp các giá trị thu thập được',
          'Chỉ một giá trị lớn nhất',
          'Một công thức tính toán',
          'Một loại biểu đồ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mẫu số liệu là toàn bộ các dữ liệu thu được từ khảo sát hoặc quan sát.'
      }
    ]
  },
  {
    id: 'c4-t2',
    title: 'Bảng tần số và biểu đồ',
    description: 'Lập bảng tần số, tần suất và đọc các dạng biểu đồ thống kê.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-2-1',
        text: 'Tần suất của một giá trị được tính bằng:',
        options: [
          'Tần số chia cho kích thước mẫu',
          'Tần số nhân với kích thước mẫu',
          'Giá trị chia cho số phần tử',
          'Số phần tử chia cho tần số'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tần suất bằng tần số chia cho tổng số quan sát.'
      },
      {
        id: 'q4-2-2',
        text: 'Nếu một lớp có 40 học sinh, trong đó 10 học sinh thích môn Toán, thì tần suất là:',
        options: ['0,1', '0,2', '0,25', '0,4'],
        correctAnswerIndex: 2,
        explanation: 'Tần suất là 10/40 = 0,25.'
      },
      {
        id: 'q4-2-3',
        text: 'Biểu đồ cột thích hợp để biểu diễn:',
        options: [
          'So sánh số lượng giữa các nhóm',
          'Sự thay đổi liên tục theo thời gian',
          'Mối liên hệ giữa hai đại lượng',
          'Chỉ các dữ liệu hình học'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ cột rất phù hợp để so sánh quy mô giữa các nhóm dữ liệu.'
      },
      {
        id: 'q4-2-4',
        text: 'Biểu đồ đoạn thẳng thường dùng để biểu diễn:',
        options: [
          'Sự thay đổi của dữ liệu theo thời gian',
          'Cơ cấu thành phần',
          'Tỉ lệ phần trăm theo hình quạt',
          'Phân loại màu sắc'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ đoạn thẳng thường dùng để thể hiện xu hướng biến động theo thời gian.'
      },
      {
        id: 'q4-2-5',
        text: 'Biểu đồ hình quạt thích hợp để biểu diễn:',
        options: [
          'Cơ cấu, tỉ lệ các thành phần trong tổng thể',
          'Giá trị lớn nhất của dữ liệu',
          'Mối liên hệ hàm số',
          'Khoảng biến thiên'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ quạt tròn cho thấy tỉ trọng của từng phần trong toàn bộ.'
      },
      {
        id: 'q4-2-6',
        text: 'Nếu một nhóm chiếm 20% tổng thể thì góc ở tâm của quạt tròn là:',
        options: ['36°', '54°', '72°', '90°'],
        correctAnswerIndex: 2,
        explanation: 'Góc ở tâm là 20% của 360°, tức là 72°.'
      },
      {
        id: 'q4-2-7',
        text: 'Tổng các tần suất trong một mẫu số liệu bằng:',
        options: ['0', '1', '10', '100'],
        correctAnswerIndex: 1,
        explanation: 'Tổng các tần suất luôn bằng 1, hay 100% nếu tính theo phần trăm.'
      },
      {
        id: 'q4-2-8',
        text: 'Bảng tần số giúp ta biết:',
        options: [
          'Số lần xuất hiện của từng giá trị',
          'Chính xác công thức hàm số',
          'Đạo hàm của dữ liệu',
          'Phương trình mặt phẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng tần số liệt kê các giá trị và số lần xuất hiện tương ứng.'
      },
      {
        id: 'q4-2-9',
        text: 'Trong các dạng sau, dạng nào không phải là biểu đồ thống kê thông dụng?',
        options: ['Biểu đồ cột', 'Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt', 'Biểu đồ nghiệm phương trình'],
        correctAnswerIndex: 3,
        explanation: '“Biểu đồ nghiệm phương trình” không phải là dạng biểu diễn thống kê thông dụng.'
      },
      {
        id: 'q4-2-10',
        text: 'Nếu tần suất của một nhóm là 0,4 thì tỉ lệ phần trăm của nhóm đó là:',
        options: ['4%', '40%', '0,4%', '400%'],
        correctAnswerIndex: 1,
        explanation: 'Đổi từ tần suất sang phần trăm bằng cách nhân với 100: 0,4 = 40%.'
      }
    ]
  },
  {
    id: 'c4-t3',
    title: 'Các số đặc trưng đo xu thế trung tâm',
    description: 'Tính số trung bình, trung vị và mốt của mẫu số liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-3-1',
        text: 'Số trung bình cộng của các số 2, 4, 6, 8 là:',
        options: ['4', '5', '6', '20'],
        correctAnswerIndex: 1,
        explanation: 'Trung bình cộng là $(2+4+6+8)/4 = 5$.'
      },
      {
        id: 'q4-3-2',
        text: 'Trung vị của dãy số 1, 3, 5, 7, 9 là:',
        options: ['3', '5', '7', '9'],
        correctAnswerIndex: 1,
        explanation: 'Dãy đã sắp xếp và có 5 phần tử, nên trung vị là giá trị đứng giữa: 5.'
      },
      {
        id: 'q4-3-3',
        text: 'Mốt của dãy số 2, 2, 3, 4, 4, 4, 5 là:',
        options: ['2', '3', '4', '5'],
        correctAnswerIndex: 2,
        explanation: 'Mốt là giá trị xuất hiện nhiều nhất, ở đây là 4.'
      },
      {
        id: 'q4-3-4',
        text: 'Ý nghĩa của số trung bình cộng là:',
        options: [
          'Đại diện cho mức độ trung tâm của dữ liệu',
          'Là giá trị xuất hiện nhiều nhất',
          'Là giá trị lớn nhất',
          'Là hiệu của số lớn nhất và nhỏ nhất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Số trung bình cộng là một số đo xu thế trung tâm của mẫu số liệu.'
      },
      {
        id: 'q4-3-5',
        text: 'Với dãy số 2, 4, 6, 8 thì trung vị là:',
        options: ['4', '5', '6', '7'],
        correctAnswerIndex: 1,
        explanation: 'Có 4 phần tử nên trung vị là trung bình cộng của hai số giữa: $(4+6)/2 = 5$.'
      },
      {
        id: 'q4-3-6',
        text: 'Nếu tất cả các giá trị trong mẫu đều bằng nhau thì:',
        options: [
          'Số trung bình, trung vị, mốt đều bằng nhau',
          'Ba đại lượng luôn khác nhau',
          'Chỉ có trung vị xác định',
          'Không có mốt'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi mọi giá trị bằng nhau, các số đo trung tâm đều trùng giá trị đó.'
      },
      {
        id: 'q4-3-7',
        text: 'Dãy số nào sau đây có mốt là 1?',
        options: ['1, 1, 2, 3', '1, 2, 2, 3', '1, 2, 3, 4', '0, 2, 2, 2'],
        correctAnswerIndex: 0,
        explanation: 'Trong dãy 1, 1, 2, 3 thì số 1 xuất hiện nhiều nhất.'
      },
      {
        id: 'q4-3-8',
        text: 'Số trung bình cộng của 3, 5, 7 là:',
        options: ['4', '5', '6', '7'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $(3+5+7)/3 = 5$.'
      },
      {
        id: 'q4-3-9',
        text: 'Trung vị của dãy số 2, 3, 3, 5, 8, 9, 10 là:',
        options: ['3', '5', '8', '6'],
        correctAnswerIndex: 1,
        explanation: 'Dãy có 7 phần tử, số đứng giữa là phần tử thứ 4, bằng 5.'
      },
      {
        id: 'q4-3-10',
        text: 'Mốt của dãy số 1, 2, 2, 3, 3 là:',
        options: ['1', '2', '3', '2 và 3'],
        correctAnswerIndex: 3,
        explanation: 'Cả 2 và 3 đều xuất hiện 2 lần, là nhiều nhất, nên dãy có hai mốt.'
      }
    ]
  },
  {
    id: 'c4-t4',
    title: 'Các số đặc trưng đo mức độ phân tán',
    description: 'Tính khoảng biến thiên và nhận biết ý nghĩa độ phân tán của dữ liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-4-1',
        text: 'Khoảng biến thiên của mẫu số liệu là:',
        options: [
          'Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất',
          'Tổng của giá trị lớn nhất và nhỏ nhất',
          'Giá trị trung bình của mẫu',
          'Số phần tử của mẫu'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khoảng biến thiên được tính bằng số lớn nhất trừ số nhỏ nhất.'
      },
      {
        id: 'q4-4-2',
        text: 'Cho dãy số 2, 5, 7, 10. Khoảng biến thiên là:',
        options: ['5', '7', '8', '12'],
        correctAnswerIndex: 2,
        explanation: 'Khoảng biến thiên là $10 - 2 = 8$.'
      },
      {
        id: 'q4-4-3',
        text: 'Khoảng biến thiên càng lớn thì:',
        options: [
          'Dữ liệu càng phân tán',
          'Dữ liệu càng tập trung',
          'Mốt càng lớn',
          'Trung vị bằng trung bình'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khoảng biến thiên lớn cho thấy dữ liệu trải rộng hơn.'
      },
      {
        id: 'q4-4-4',
        text: 'Nếu mọi giá trị trong mẫu đều bằng nhau thì khoảng biến thiên bằng:',
        options: ['0', '1', '-1', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Khi giá trị lớn nhất bằng giá trị nhỏ nhất thì khoảng biến thiên bằng 0.'
      },
      {
        id: 'q4-4-5',
        text: 'Cho dãy số 4, 4, 4, 4. Khoảng biến thiên là:',
        options: ['0', '4', '8', '16'],
        correctAnswerIndex: 0,
        explanation: 'Giá trị lớn nhất và nhỏ nhất đều bằng 4, nên khoảng biến thiên bằng 0.'
      },
      {
        id: 'q4-4-6',
        text: 'Cho hai mẫu có cùng số trung bình, mẫu nào phân tán hơn?',
        options: [
          'Mẫu có khoảng biến thiên lớn hơn',
          'Mẫu có khoảng biến thiên nhỏ hơn',
          'Hai mẫu luôn như nhau',
          'Không thể so sánh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi so sánh sơ bộ độ phân tán, mẫu có khoảng biến thiên lớn hơn thường phân tán hơn.'
      },
      {
        id: 'q4-4-7',
        text: 'Cho dãy số 1, 2, 3, 4, 5. Khoảng biến thiên là:',
        options: ['3', '4', '5', '6'],
        correctAnswerIndex: 1,
        explanation: 'Khoảng biến thiên là $5 - 1 = 4$.'
      },
      {
        id: 'q4-4-8',
        text: 'Một số đo cho biết mức độ trải rộng của dữ liệu là:',
        options: ['Khoảng biến thiên', 'Mốt', 'Trung vị', 'Tần suất'],
        correctAnswerIndex: 0,
        explanation: 'Khoảng biến thiên là số đo đơn giản phản ánh độ trải rộng của dữ liệu.'
      },
      {
        id: 'q4-4-9',
        text: 'Nếu giá trị nhỏ nhất là 12 và khoảng biến thiên là 8 thì giá trị lớn nhất là:',
        options: ['4', '8', '20', '96'],
        correctAnswerIndex: 2,
        explanation: 'Giá trị lớn nhất = giá trị nhỏ nhất + khoảng biến thiên = 12 + 8 = 20.'
      },
      {
        id: 'q4-4-10',
        text: 'Cho dãy số 6, 9, 11, 15. Khoảng biến thiên là:',
        options: ['6', '7', '8', '9'],
        correctAnswerIndex: 3,
        explanation: 'Khoảng biến thiên là $15 - 6 = 9$.'
      }
    ]
  },
  {
    id: 'c4-t5',
    title: 'Ôn tập chương Phân tích và xử lí dữ liệu',
    description: 'Củng cố các khái niệm, bảng biểu, biểu đồ và các số đặc trưng của mẫu số liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-5-1',
        text: 'Dữ liệu nào sau đây là dữ liệu định tính?',
        options: ['Màu mắt', 'Chiều cao', 'Khối lượng', 'Nhiệt độ'],
        correctAnswerIndex: 0,
        explanation: 'Màu mắt được phân loại theo nhóm, không phải số đo.'
      },
      {
        id: 'q4-5-2',
        text: 'Dữ liệu nào sau đây là dữ liệu định lượng?',
        options: ['Loại xe', 'Nhóm máu', 'Điểm kiểm tra', 'Môn học yêu thích'],
        correctAnswerIndex: 2,
        explanation: 'Điểm kiểm tra là dữ liệu dạng số, nên là dữ liệu định lượng.'
      },
      {
        id: 'q4-5-3',
        text: 'Số trung bình cộng của 4, 6, 8 là:',
        options: ['5', '6', '7', '8'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $(4+6+8)/3 = 6$.'
      },
      {
        id: 'q4-5-4',
        text: 'Trung vị của dãy số 2, 4, 6, 8, 10 là:',
        options: ['4', '5', '6', '8'],
        correctAnswerIndex: 2,
        explanation: 'Dãy có 5 phần tử nên trung vị là số đứng giữa, bằng 6.'
      },
      {
        id: 'q4-5-5',
        text: 'Mốt của dãy số 1, 2, 2, 2, 3 là:',
        options: ['1', '2', '3', 'Không có'],
        correctAnswerIndex: 1,
        explanation: 'Số 2 xuất hiện nhiều nhất nên là mốt.'
      },
      {
        id: 'q4-5-6',
        text: 'Khoảng biến thiên của dãy số 3, 7, 8, 12 là:',
        options: ['7', '8', '9', '15'],
        correctAnswerIndex: 2,
        explanation: 'Khoảng biến thiên là $12 - 3 = 9$.'
      },
      {
        id: 'q4-5-7',
        text: 'Nếu một giá trị xuất hiện 6 lần trong mẫu có 30 phần tử thì tần suất là:',
        options: ['0,2', '0,25', '0,3', '0,5'],
        correctAnswerIndex: 0,
        explanation: 'Tần suất là $6/30 = 0,2$.'
      },
      {
        id: 'q4-5-8',
        text: 'Biểu đồ nào phù hợp nhất để biểu diễn cơ cấu tỉ lệ thành phần?',
        options: ['Biểu đồ cột', 'Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt', 'Biểu đồ hàm số'],
        correctAnswerIndex: 2,
        explanation: 'Biểu đồ hình quạt thích hợp để biểu diễn cơ cấu tỉ lệ trong tổng thể.'
      },
      {
        id: 'q4-5-9',
        text: 'Tổng các tần suất của mẫu số liệu bằng:',
        options: ['0', '1', '10', '100'],
        correctAnswerIndex: 1,
        explanation: 'Tổng các tần suất luôn bằng 1.'
      },
      {
        id: 'q4-5-10',
        text: 'Mục đích chính của phân tích dữ liệu là:',
        options: [
          'Rút ra thông tin hữu ích từ dữ liệu',
          'Chỉ để vẽ biểu đồ',
          'Chỉ để lập bảng',
          'Thay thế hoàn toàn suy luận'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phân tích dữ liệu giúp hiểu dữ liệu và rút ra kết luận có ý nghĩa.'
      }
    ]
  }
];