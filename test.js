function autocomplete(inp) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (
        arr[i].cauHoi.substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        b = document.createElement("DIV");
        b.innerHTML =
          "<strong>" + arr[i].cauHoi.substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].cauHoi.substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i].cauHoi + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;

      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

let arr = [
  {
    cauHoi: "Biến con trỏ có thể chứa",
    dapAn: "Địa chỉ vùng nhớ của một biến khác.",
  },
  {
    cauHoi:
      "Biểu thức điều kiện để kiểm tra một phần tử thứ i của mảng A có nằm trong (-5;10) là ?\n1. (A[i]  >  -5) and (A[i]  <  10)\n2. (-5  <  A[i]) and (10  <  A[i])",
    dapAn: "1 đúng, 2 đúng",
  },
  {
    cauHoi:
      'Char S[20]="aaaaaea";\n\nchar* p=strstr(S,"e");\n\nNếu địa chỉ của S là 1000, thì giá trị của p là bao nhiêu là',
    dapAn: "1005",
  },
  {
    cauHoi:
      "Cho Stack gồm 5 phần tử {12, 5, 20, 23, 25}, trong đó 25 là phần tử ở đỉnh Stack. Để lấy ra phần tử thứ 3 trong Stack ta phải làm thế nào?",
    dapAn: "POP(25), POP(23), POP(20), PUSH(23), PUSH(25)",
  },
  {
    cauHoi:
      "Cho Stack gồm 5 phần tử {12, 5, 20, 23, 25}, trong đó 25 là phần tử ở đỉnh Stack. Để lấy ra phần tử thứ 4 trong Stack ta phải làm thế nào?",
    dapAn: ["POP(23)", "POP(25),", "PUSH(25)"],
  },
  {
    cauHoi:
      'Cho biết đoạn chương trình sau có kết quả bao nhiêu:  \n\n\rvoid main()\n\n\r{\n\n\r int ints[] = { 0, 1, 2, 3 };\n\n\r int* i1 = ints + 1;\n\n\r int a = ++*i1;\n\n\r int b = a + *i1;\n\n\r printf("%d\\n", b);\n\n\r getch();\n\n\r}',
    dapAn: "4",
  },
  {
    cauHoi:
      'Cho biết đoạn chương trình sau có kết quả bao nhiêu:  \n\nvoid main()\n\n{\n\n int ints[] = { 0, 1, 2, 3 };\n\n int* i1 = ints + 1;\n\n int a = ++*i1;\n\n int b = a + *i1;\n\n printf("%d\\n", b);\n\n getch();\n\n}',
    dapAn: "4",
  },
  {
    cauHoi:
      "Cho cây nhị phân T có 70 nút cấp 2 ( có 2 con).Cây đó có bao nhiêu nút lá( không có con):",
    dapAn: "71",
  },
  {
    cauHoi:
      "Cho cây nhị phân T có chiều cao là 6( nút gốc có mức 1) . Số nút tối đa của cây là:",
    dapAn: "63",
  },
  {
    cauHoi:
      "Cho cây nhị phân T, nút có địa chỉ 19 thì có nút cha ở địa chỉ nào",
    dapAn: "9",
  },
  {
    cauHoi: "Cho cây nhị phân T, nút có địa chỉ 7 có 2 con ở địa chỉ nào:",
    dapAn: ["14", "15"],
  },
  {
    cauHoi:
      "Cho cây nhị phân T, phép duỵêt cây theo thứ tự giữa cho kết quả DBHEAFICGJ . Nếu duyệt theo thứ tự sau ta có kết quả : DHEBIFJGCA . Hãy cho biết các nút của cây con phải",
    dapAn: "ficgj",
  },
  {
    cauHoi:
      "Cho cây nhị phân T. Phép duyệt cây theo thứ tự trước cho kết quả ABDEHCFIGJ. Nếu duyệt theo thứ tự giữa ta có kết quả: DBHEAFICGJ. Hãy cho biết các nút của cây con trái",
    dapAn: "bdhe",
  },
  {
    cauHoi: "Cho cây nhị phân T. Phép duyệt thứ tự trước cho kết quả là",
    dapAn: "abdecfg",
  },
  {
    cauHoi:
      'Cho cấu trúc dữ liệu như sau:\n\n\rstruct Employee\n\n\r{ char Code[], name[];\n\n\r long Salary;\n\n\r};\n\n\rEmployee e1= { "E089", "Hoang so", 12000}, e2=e1;\n\n\rprintf("%ld",el.Salary+e2 -> Salary); cho biết kết quả của chương trình',
    dapAn: "doan ma bi loi",
  },
  {
    cauHoi:
      'Cho cấu trúc dữ liệu như sau:\n\nstruct Employee\n\n{ char Code[], name[];\n\n long Salary;\n\n};\n\nEmployee e1= { "E089", "Hoang so", 12000}, e2=e1;\n\nprintf("%ld",el.Salary+e2 - >  Salary); cho biết kết quả của chương trình',
    dapAn: "doan ma bi loi",
  },
  {
    cauHoi:
      "Cho dãy khoá 42,23,74,11,65,58,94,36\n\nLần lượt đưa dãy khoá trên vào cây nhị phân tìm kiếm. Bây giờ ta muốn tìm kiếm xem trong dãy khoá trên có khoá 105 không thì phải làm bao nhiêu phép so sánh:",
    dapAn: "3",
  },
  {
    cauHoi:
      "Cho dãy khoá 42,23,74,11,65,58,94,36\nLần lượt đưa dãy khoá trên vào cây nhị phân tìm kiếm. Bây giờ ta muốn tìm kiếm xem trong dãy khoá trên có khoá 105 không thì phải làm bao nhiêu phép so sánh:",
    dapAn: "3",
  },
  {
    cauHoi:
      "Cho dãy khoá 42,23,74,11,65,58,94,36\nLần lượt đưa dãy khoá trên vào cây nhị phân tìm kiếm. Nếu ta tìm kiếm trên cây nhị phân này thì trong trường hợp xấu nhất phải làm bao nhiêu phép so sánh",
    dapAn: "4",
  },
  {
    cauHoi:
      "Cho dãy số 27 40 -7 5 57, thực hiện bước thứ 1, khi áp dụng thuật toán sắp xếp lựa chọn để sắp xếp dãy theo thứ tự giảm, ta có được dãy mới là gì?",
    dapAn: "57  27 -7  5  40",
  },
  {
    cauHoi:
      "Cho dãy số sau: 10 11 14 32 36 43 55 57 87 97. Áp dụng phương pháp tìm kiếm nhị phân, để tìm kiếm số 10, lần phân đoạn thứ nhất của dãy sẽ là",
    dapAn: "[10 11 14 32 36]",
  },
  {
    cauHoi:
      "Cho dãy số sau: 14 32 10 43 57 87 55 36 97 11. Áp dụng phương pháp tìm kiếm tuần tự, sau bao nhiều lần thực hiện phép so sánh ta sẽ tìm thấy số 43?",
    dapAn: "4 lần",
  },
  {
    cauHoi:
      "Cho dãy số sau: 40 25 75 15 65 55 90 30 95 85. Áp dụng phương pháp sắp xếp lựa chọn, sau lượt 1 dãy sẽ được sắp xếp lại như thế nào?",
    dapAn: "15 25 75 40 65 55 90 30 95 85",
  },
  {
    cauHoi:
      "Cho dãy số sau: 40 25 75 15 65 55 90 30 95 85. Áp dụng phương pháp sắp xếp lựa chọn, sau lượt 2 dãy sẽ được sắp xếp lại như thế nào?",
    dapAn: "15 25 75 40 65 55 90 30 95 85",
  },
  {
    cauHoi:
      "Cho dãy số sau: 40 25 75 15 65 55 90 30 95 85. Áp dụng phương pháp sắp xếp lựa chọn, sau lượt 3 dãy sẽ được sắp xếp lại như thế nào?",
    dapAn: "15 25 30 40 65 55 90 75 95 85",
  },
  {
    cauHoi:
      "Cho dãy số sau: 40 25 75 15 65 55 90 30 95 85. Áp dụng phương pháp sắp xếp nhanh (Quick_Sort), sau lượt 6 dãy sẽ được sắp xếp lại như thế nào?",
    dapAn: "1 5 25 30 40 55 65 (90 75 95 85)",
  },
  {
    cauHoi:
      "Cho dãy số sau: 40 25 75 15 65 55 90 30 95 85. Áp dụng phương pháp sắp xếp nhanh (Quick_Sort), sau lượt 9 dãy sẽ được sắp xếp lại như thế nào?",
    dapAn: "1 5 25 30 40 55 65 75 85 90 (95)",
  },
  {
    cauHoi:
      "Cho dãy số {3 1 6 0 5 4 8 2 9 7}. áp dụng phương pháp sắp xếp nhanh (Quick sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {(0 1 2) 3 (5 4 8 6 9 7)}. Dãy số thu được sau lần lặp thứ ba là:",
    dapAn: "{0 1 (2) 3 (5 4 8 6 9 7)}",
  },
  {
    cauHoi:
      "Cho dãy số {3 1 6 0 5 4 8 2 9 7}. áp dụng phương pháp sắp xếp nhanh (Quick sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {(0 1 2) 3 (5 4 8 6 9 7)}. Dãy số thu được sau lần lặp thứ bốn là:",
    dapAn: "{0 1 2 3 (5 4 8 6 9 7)}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ ba là:",
    dapAn: "{0 2 4 8 5 9 6 1 3 7}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ bảy là:",
    dapAn: "{0 1 2 4 5 6 8 9 3 7}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ bốn là:",
    dapAn: "{0 2 4 5 8 9 6 1 3 7}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ chín là:",
    dapAn: "{0 1 2 3 4 5 6 7 8 9}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ hai là:",
    dapAn: "{0 2 4 8 5 9 6 1 3 7}",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ tám là:",
    dapAn: "{0 1 2 3 4 5 6 8 9 7}",
  },
  {
    cauHoi:
      "Cho dãy số {4 7 0 9 2 5 3 1 8 6}. áp dụng phương pháp sắp xếp nổi bọt (Bubble sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 7 1 9 2 5 3 6 8}. Dãy số thu được sau lần lặp thứ ba là:",
    dapAn: "{0 1 2 4 7 3 9 5 6 8}",
  },
  {
    cauHoi:
      "Cho dãy số {4 7 0 9 2 5 3 1 8 6}. áp dụng phương pháp sắp xếp nổi bọt (Bubble sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 7 1 9 2 5 3 6 8}. Dãy số thu được sau lần lặp thứ bốn là:",
    dapAn: "{0 1 2 3 4 7 5 9 6 8}",
  },
  {
    cauHoi:
      "Cho dãy số {4 7 0 9 2 5 3 1 8 6}. áp dụng phương pháp sắp xếp nổi bọt (Bubble sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 7 1 9 2 5 3 6 8}. Dãy số thu được sau lần lặp thứ năm là:",
    dapAn: "{0 1 2 3 4 5 7 6 9 8}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ ba là:",
    dapAn: "{0 1 2 6 5 7 9 3 8 4}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ bảy là:",
    dapAn: "{0 1 2 3 4 5 6 9 8 7}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ hai là:",
    dapAn: "{0 1 3 6 5 7 9 2 8 4}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ năm là:",
    dapAn: "{0 1 2 3 4 7 9 6 8 5}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ sáu là:",
    dapAn: "{0 1 2 3 4 5 9 6 8 7}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ tư là:",
    dapAn: "{0 1 2 3 6 5 7 9 8 4}",
  },
  {
    cauHoi:
      "Cho dãy số {6 1 3 0 5 7 9 2 8 4}. áp dụng phương pháp sắp xếp lựa chọn (Select sort) tăng dần, sau lần lặp đầu tiên của giải thuật ta có kết quả: {0 1 3 6 5 7 9 2 8 4}. Dãy số thu được sau lần lặp thứ tám là:",
    dapAn: "{0 1 2 3 4 5 6 7 8 9}",
  },
  {
    cauHoi:
      "Cho dãy số: 12 2 8 5 1 6 4 15 và các bước sắp xếp sau:\n\n\rBước 1: 1 2 8 5 12 6 4 15\n\n\rBước 2: 1 2 8 5 12 6 4 15\n\n\rBước 3: 1 2 4 5 12 6 8 15\n\n\rBước 4: 1 2 4 5 12 6 8 15\n\n\rBước 5: 1 2 4 5 6 12 8 15\n\n\rBước 6: 1 2 4 5 6 8 12 15\n\n\rCác bước trên dựa theo giải thuật sắp xếp  ?",
    dapAn: "select sort",
  },
  {
    cauHoi:
      "Cho giải thuật sau:\n1.C(n,n)=C(n,0)=1\n2.C(n,k)=C(n-1,k)+C(n-1,k-1) với n > k > 0\nGiá trị của C(4,2) là",
    dapAn: "6",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n\n\r1.F(1)=F(2)=1\n\n\r2.F(k)=F(k-1)+F(k-2) nếu K>2\n\n\rHãy tính F(6):",
    dapAn: "8",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n\n1.F(1)=1, F(2)=2, F(3)=2\n\n2.F(k)=F(K-1) + 2F(K-3) , K > 3\n\nHãy tính F(6)",
    dapAn: "12",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n\n1.F(1)=F(2)=1\n\n2.F(k)=F(k-1)+F(k-2) nếu K > 2\n\nHãy tính F(6):",
    dapAn: "8",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n1.F(1)=1, F(2)=2, F(3)=2\n2.F(k)=F(K-1) + 2F(K-3) , K > 3\nHãy tính F(6)",
    dapAn: "12",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n1.F(1)=F(2)=1\n2.F(k)=F(k-1)+F(k-2) nếu K > 2\nHãy tính F(6):",
    dapAn: "8",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy\n1.F(1)=F(2)=1\n2.F(k)=F(k-1)+F(k-2) nếu K > 2\nHãy tính F(7):",
    dapAn: "13",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy:\n\n\r1.F(0,a)=F(a,0)=a (0 là số không)\n\n\r2.F(m,n)=F(m-n,n) nếu m>=n\n\n\r3.F(m,n)=F(m,n-m) Nếu m=30, n = 75 thì sau khi thực hiện giải thuật ta được giá trị là",
    dapAn: "15",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy:\n\n1.F(0,a)=F(a,0)=a (0 là số không)\n\n2.F(m,n)=F(m-n,n) nếu m > =n\n\n3.F(m,n)=F(m,n-m) Nếu m=30, n = 75 thì sau khi thực hiện giải thuật ta được giá trị là",
    dapAn: "15",
  },
  {
    cauHoi:
      "Cho giải thuật đệ quy:\n1.F(0,a)=F(a,0)=a (0 là số không)\n2.F(m,n)=F(m-n,n) nếu m > =n\n3.F(m,n)=F(m,n-m) Nếu m=30, n = 75 thì sau khi thực hiện giải thuật ta được giá trị là",
    dapAn: "15",
  },
  {
    cauHoi:
      "Cho mảng 2 chiều : A={F( i j)} i là chỉ số hàng, j là chỉ số cột. Mảng A có 8 hàng, 9 cột. Lưu trữ liên tiếp mảng A ưu tiên hàng. Nếu phần tử F(11) có địa chỉ 50, mỗi phần tử chiếm 3 ô thì phần tử F(57) có địa chỉ:",
    dapAn: "176",
  },
  {
    cauHoi:
      "Cho mảng 2 chiều A={F( i j)}: i là chỉ số hàng, j là chỉ số cột. Mảng A có 8 hàng, 9 cột. Lưu trữ liên tiếp mảng A ưu tiên cột nếu phần tử F(11) có địa chỉ 230 , mỗi phần tử chiếm 3 ô thì phần tử F(37) có địa chỉ:",
    dapAn: "380",
  },
  {
    cauHoi:
      "Cho mảng 2 chiều A={a (i j )}, mảng có m hàng, n cột, và được lưu trữ liên tiếp. Công thức tính địa chỉ của phần tử a (i j)\n\n\rL{ F(i j )} = L(0) + C [(j - 1)m + (i - 1)]\n\n\rDùng trong trường hợp",
    dapAn: "Ưu tiên cột",
  },
  {
    cauHoi:
      "Cho mảng 2 chiều A={a (i j )}, mảng có m hàng, n cột, và được lưu trữ liên tiếp. Công thức tính địa chỉ của phần tử a (i j)\n\nL{ F(i j )} = L(0) + C [(j - 1)m + (i - 1)]\n\nDùng trong trường hợp",
    dapAn: "Ưu tiên cột",
  },
  {
    cauHoi:
      "Cho mảng 2 chiều A={a (i j )}, mảng có m hàng, n cột, và được lưu trữ liên tiếp. Công thức tính địa chỉ của phần tử a (i j)\nL{ F(i j )} = L(0) + C [(j - 1)m + (i - 1)]\nDùng trong trường hợp",
    dapAn: "Ưu tiên cột",
  },
  {
    cauHoi:
      "Cho mảng một chiều A=(a1,a2,…,ax,…,an) và được lưu trữ liên tiếp. Giả thử mỗi phần tử của mảng chiếm 3 ô và phần tử đầu tiên F(1) có địa chỉ 23 thì phần tử F(4) có địa chỉ",
    dapAn: "41",
  },
  {
    cauHoi:
      "Cho một danh sách móc nối với các phần tử trong danh sách có kiểu S1 được định nghĩa như sau:\n\n struct S1{ int info; struct S1 * next;} *head;\n\nBiết con trỏ “head” lưu địa chỉ của phần tử đầu tiên trong danh sách. Cho biết mục đích của câu lệnh sau:\n\n { head- > next- > next- > info=111;};",
    dapAn: "Giá trị “info” trong phần tử thứ 3 đã bị thay đổi.",
  },
  {
    cauHoi:
      "Cho một danh sách móc nối với các phần tử trong danh sách có kiểu S1 được định nghĩa như sau:\n\n struct S1{ int info; struct S1 * next;} *head;\n\nBiết con trỏ “head” lưu địa chỉ của phần tử đầu tiên trong danh sách. Cho biết mục đích của câu lệnh sau:\n\n {(head- > next)=(head- > next)- > next;};",
    dapAn: "Loại bỏ phần tử thứ 2 ra khỏi danh sách.",
  },
  {
    cauHoi:
      "Cho một ma trận thưa, hàng 1 có 2 phần tử F(11) , F(12) . Từ hàng thứ 2 chỉ có 3 phần tử F(k , k-1) ; F(k, k) ; F(k, k+1) , hàng cuối cùng cũng chỉ có 2 phần tử : F(n, n-1) ; F(n , n)\n\n\rHãy lưu trữ liên tiếp ưu tiên hàng của ma trận này thành một mảng một chiều : thí dụ F(11) là b(1) ; F(12) là b(2) ; F(21) là b(3) …\n\n\rTính b(k) nếu phần tử F(i j ) là F(6 , 7)",
    dapAn: "B(17)",
  },
  {
    cauHoi:
      "Cho một ma trận thưa, hàng 1 có 2 phần tử F(11) , F(12) . Từ hàng thứ 2 chỉ có 3 phần tử F(k , k-1) ; F(k, k) ; F(k, k+1) , hàng cuối cùng cũng chỉ có 2 phần tử : F(n, n-1) ; F(n , n)\n\nHãy lưu trữ liên tiếp ưu tiên hàng của ma trận này thành một mảng một chiều : thí dụ F(11) là b(1) ; F(12) là b(2) ; F(21) là b(3) …\n\nNếu F(67) thì b(  )",
    dapAn: "17",
  },
  {
    cauHoi:
      "Cho một ma trận thưa, hàng 1 có 2 phần tử F(11) , F(12) . Từ hàng thứ 2 chỉ có 3 phần tử F(k , k-1) ; F(k, k) ; F(k, k+1) , hàng cuối cùng cũng chỉ có 2 phần tử : F(n, n-1) ; F(n , n)\nHãy lưu trữ liên tiếp ưu tiên hàng của ma trận này thành một mảng một chiều : thí dụ F(11) là b(1) ; F(12) là b(2) ; F(21) là b(3) …\nTính b(k) nếu phần tử F(i j ) là F(6 , 7)",
    dapAn: "b(17)",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\n\rint Logarit(int n)\n\n\r{\n\n\r if(n<0)\n\n\r return -1;\n\n\r else\n\n\r if(n>=2)\n\n\r return 1+logarit(n/2);\n\n\r else\n\n\r return 0;\n\n\r}\n\n\rCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm giá trị nguyên  logarit cơ số 2 của n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\n\rint dequy(int a,int b)\n\n\r{\n\n\r if(a==b)\n\n\r return a;\n\n\r else\n\n\r {\n\n\r if(a>b)\n\n\r a=a-b;\n\n\r else\n\n\r b=b-a;\n\n\r }\n\n\r return dequy(a,b);\n\n\r}\n\n\rCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm ước số chung lớn nhất của 2 số nguyên a, b.",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\nint Logarit(int n)\n\n{\n\n if(n < 0)\n\n return -1;\n\n else\n\n if(n > =2)\n\n return 1+logarit(n/2);\n\n else\n\n return 0;\n\n}\n\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm giá trị nguyên  logarit cơ số 2 của n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\nint dequy(int a,int b)\n\n{\n\n if(a==b)\n\n return a;\n\n else\n\n {\n\n if(a > b)\n\n a=a-b;\n\n else\n\n b=b-a;\n\n }\n\n return dequy(a,b);\n\n}\n\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm ước số chung lớn nhất của 2 số nguyên a, b.",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\nint dequy(int n)\n\n{\n\n if(n==0)\n\n return 0;\n\n return 1+dequy(n/10);\n\n}\n\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Đếm số lượng chữ số nguyên dương n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\nlong Tong(unsigned n)\n\n{\n\n if(n==0)\n\n return 1;\n\n return n+Tong(n-2);\n\n}\n\nCho biết chức năng của đoạn chương trình trên dùng để tính cho biểu thức nào",
    dapAn: "S(n)=1+3+5+…+(2.n+1) với n > =0",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\n\nlong dequy(long n,long &max)\n\n{ \n\n long m;\n\n if(n==0)\n\n return max;\n\n else\n\n {\n\n m=n%10;\n\n if(m > max)\n\n max=m;\n\n } \n\n return dequy(n/10,max);\n\n}\n\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm chữ số có giá trị lớn nhất của số nguyên dương n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\nint Logarit(int n)\n{\n if(n < 0)\n return -1;\n else\n if(n > =2)\n return 1+logarit(n/2);\n else\n return 0;\n}\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm giá trị nguyên  logarit cơ số 2 của n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\nint n=0;\nfor (int i=0; i < 10; i+=4) n+=I; giá trị của biến n là",
    dapAn: "12",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\nlong Tong(unsigned n)\n{\n if(n==0)\n return 1;\n return n+Tong(n-2);\n}\nCho biết chức năng của đoạn chương trình trên dùng để tính cho biểu thức nào",
    dapAn: "S(n)=1+3+5+…+(2.n+1) với n > =0",
  },
  {
    cauHoi:
      "Cho đoạn chương trình sau:\nlong dequy(long n,long &max)\n{ \n long m;\n if(n==0)\n return max;\n else\n {\n m=n%10;\n if(m > max)\n max=m;\n } \n return dequy(n/10,max);\n}\nCho biết chức năng của đoạn chương trình trên",
    dapAn: "Tìm chữ số có giá trị lớn nhất của số nguyên dương n",
  },
  {
    cauHoi:
      "Cho đoạn chương trình:\n\nchar S[] = “Helen”;\n\nchar *p = S;\n\nchar c = *(p+3);\n\nGiá trị của c sẽ là:",
    dapAn: "e",
  },
  {
    cauHoi:
      "Cho đoạn chương trình:\nchar S[] = “Helen”;\nchar *p = S;\nchar c = *(p+3);\nGiá trị của c sẽ là:",
    dapAn: "e",
  },
  {
    cauHoi: "Chọn câu trả lời đúng nhất về thuật toán",
    dapAn:
      "Thuật toán là một dãy hữu hạn các bước, mỗi bước mô tả chính xác các phép toán hoặc hành động cần thực hiện để giải quyết vấn đề đặt ra",
  },
  {
    cauHoi: "Chọn câu đúng nhất cho hàm Swap?",
    dapAn:
      "Void Swap(int &X, int &Y) { \n\n   int Temp = X; X = Y; Y = Temp; \n\n}",
  },
  {
    cauHoi: "Chọn câu đúng?",
    dapAn: [
      "“struct” là một kiểu dữ liệu do người dùng định nghĩa bao gồm nhiều thành phần có kiểu khác nhau.",
      "“struct” là sự kết hợp của nhiều thành phần có thể có kiểu khác nhau.",
    ],
  },
  {
    cauHoi: "Cài đặt danh sách bằng con trỏ có nghĩa là",
    dapAn:
      "Dùng con trỏ để liên kết các phần tử của danh sách theo phương thức ai chỉ đến ai+1. Để một phần tử có thể chỉ đến một phần tử khác ta xem mỗi ô là một Record gồm có 2 trường : Trường Elements để giữ nội dung của phần tử trong danh sách. Trường Next là một con trỏ giữ địa chỉ của ô kế tiếp.",
  },
  {
    cauHoi: "Cài đặt danh sách bằng mảng có nghiã là",
    dapAn:
      "dùng một mảng (array) để lưu trữ liên tiếp các phần tử của danh sách bắt đầu từ vị trí đầu tiên của mảng.",
  },
  {
    cauHoi: "Các hoạt động cơ bản trên Danh sách liên kết vòng",
    dapAn: ["Chèn", "hiển thị", "xóa"],
  },
  {
    cauHoi: "Các thuộc tính của một kiểu dữ liệu",
    dapAn: "Tất cả các thuộc tính đưa ra",
  },
  {
    cauHoi:
      "Các tiêu chuẩn đánh giá cấu trúc dữ liệu. Để đánh giá một cấu trúc dữ liệu chúng ta thường dựa vào các tiêu chí nào",
    dapAn: "Tất cả đáp án trên là đúng",
  },
  {
    cauHoi: "Cây 5 phân có nghĩa là gì?",
    dapAn: "nut co cap lon nhat la 5",
  },
  {
    cauHoi: "Cây nhị phân khác rỗng là cây...",
    dapAn: "Mỗi nút có không quá 2 nút con",
  },
  {
    cauHoi: "Cây nhị phân tìm kiếm là:",
    dapAn:
      "Cây nhị phân mà mỗi nút trong cây đều thoả tính chất: giá trị của nút cha nhỏ hơn mọi nút trên cây con trái và lớn hơn mọi nút trên cây con phảI của nó.",
  },
  {
    cauHoi: "Có bao nhiêu loại hoạt động cơ bản trên danh sách liên kết vòng",
    dapAn: "3",
  },
  {
    cauHoi:
      "Có các khai báo sau: int x=15; int *p; Muốn p là con trỏ trỏ tới x phải thực hiện lệnh nào",
    dapAn: "P=&x;",
  },
  {
    cauHoi: "Có mấy loại danh sách liên kết",
    dapAn: "3",
  },
  {
    cauHoi: "Cấu trúc dữ liệu mảng có các ưu điểm nào?",
    dapAn: "Tất cả đáp án đều đúng",
  },
  {
    cauHoi: "Cấu trúc dữ liệu nào tương ứng với LIFO",
    dapAn: "stack",
  },
  {
    cauHoi:
      "Danh sách khai báo bằng con trỏ. Hàm sau có chức năng gì?\n\nBoolean EList( ListvHeader )\n\n{\n\nElist = (Header.Next = Nil);\n\n}",
    dapAn: "kiem tra danh sach rong",
  },
  {
    cauHoi:
      "Danh sách khai báo bằng con trỏ. Hàm sau có chức năng gì?\nBoolean EList( ListvHeader )\n{\nElist = (Header.Next = Nil);\n}",
    dapAn: "kiem tra danh sach rong",
  },
  {
    cauHoi:
      'Danh sách khai báo bằng con trỏ. Thủ tục sau có chức năng gì?"\n\nvoid MnullList ( List Header)\n\n{\n\nNew (Header);\n\nHeader.Next : = Nil;\n\n}',
    dapAn: "thu tuc khoi tao danh sach rong",
  },
  {
    cauHoi:
      'Danh sách khai báo bằng con trỏ. Thủ tục sau có chức năng gì?"\nvoid MnullList ( List Header)\n{\nNew (Header);\nHeader.Next : = Nil;\n}',
    dapAn: "thu tuc khoi tao danh sach rong",
  },
  {
    cauHoi:
      "Danh sách liên kết vòng là gì?\n\n1. Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên trỏ tới phần tử cuối cùng và phần tử cuối cùng trỏ tới phần tử đầu tiên., \n\n2. Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên trỏ tới phần tử đầu tiên và phần tử cuối cùng trỏ tới phần tử cuối.",
    dapAn: "1 đúng, 2 sai",
  },
  {
    cauHoi:
      "Danh sách liên kết vòng là gì?\n1. Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên trỏ tới phần tử cuối cùng và phần tử cuối cùng trỏ tới phần tử đầu tiên., \n2. Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên trỏ tới phần tử đầu tiên và phần tử cuối cùng trỏ tới phần tử cuối.",
    dapAn: "1 đúng, 2 sai",
  },
  {
    cauHoi:
      "Danh sách liên kết đôi là gì?\n\n1. Là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn.\n\n2. Là một biến thể của danh sách liên kết đơn, nhưng do 2 danh sách đơn cộng lại, Không có đáp án nào đúng",
    dapAn: "1 đúng, 2 sai",
  },
  {
    cauHoi:
      "Danh sách liên kết đôi là gì?\n1. Là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn.\n2. Là một biến thể của danh sách liên kết đơn, nhưng do 2 danh sách đơn cộng lại, Không có đáp án nào đúng",
    dapAn: "1 đúng, 2 sai",
  },
  {
    cauHoi: "Danh sách tuyến tính là",
    dapAn: [
      "Danh sách mà quan hệ lân cận giữa các phần tử được hiển thị ra thì được là danh sách tuyến tính",
      "Danh sách mà quan hệ lân cận giữa các phần tử được hiển thị ra thì được là danh sách tuyến tính.",
      "Danh sách mà quan hệ lân cận giữa các phần tử được xác định.",
    ],
  },
  {
    cauHoi: "Danh sách tuyến tính là",
    dapAn: "Danh sách mà quan hệ lân cận giữa các phần tử được xác định.",
  },
  {
    cauHoi: "Danh sách tuyến tính là",
    dapAn:
      "Danh sách mà quan hệ lân cận giữa các phần tử được hiển thị ra thì được là danh sách tuyến tính",
  },
  {
    cauHoi: "Duyệt cây nhị phân theo thứ tự giữa được thực hiện theo thứ tự:",
    dapAn:
      "Duyệt cây con trái theo thứ tự giữa, thăm gốc, duyệt cây con phải theo thứ tự giữa.",
  },
  {
    cauHoi: "Duyệt cây nhị phân theo thứ tự sau được thực hiện theo thứ tự:",
    dapAn:
      "Duyệt cây con trái theo thứ tự sau, duyệt cây con phải theo thứ tự sau, thăm gốc.",
  },
  {
    cauHoi: "Duyệt cây nhị phân theo thứ tự trước được thực hiện theo thứ tự:",
    dapAn:
      "Thăm gốc, duyệt cây con trái theo thứ tự trước, duyệt cây con phải theo thứ tự trước.",
  },
  {
    cauHoi:
      "Dãy số Fibonacci bắt nguồn từ bài toán cổ về việc sinh sản của các cặp thỏ. Bài toán được đặt ra như sau:\n\nCác con thỏ không bao giờ chết.\n\nHai tháng sau khi ra đời một cặp thỏ mới sẽ sinh ra một cặp thỏ con.\n\nKhi đã sinh con rồi thì cứ mỗi tháng tiếp theo chúng lại sinh được một cặp con mới.\n\nGiả sử bắt đầu từ một cặp thỏ mới ra đời thì đến tháng thứ 5 sẽ có bao nhiêu cặp?",
    dapAn: "5 cặp",
  },
  {
    cauHoi:
      "Dùng STACK để lưu trữ số nhị phân có giá trị bằng số thập phân 215 ta có kết quả: ( số bên trái vào trước số bên phải )",
    dapAn: "11101011",
  },
  {
    cauHoi: "Dấu hiệu nào dưới đây cho biết danh sách liên kết đơn rỗng:",
    dapAn: "(p==NULL);",
  },
  {
    cauHoi: "Dữ liệu kí tự bao gồm",
    dapAn: [
      "Các kí tự chữ cái.",
      "Các kí tự số chữ số.",
      "Các kí tự đặc biệt.",
    ],
  },
  {
    cauHoi:
      "Giả sử Q là Hàng đợi, các phần tử của nó có kiểu Item. Hàm sau làm nhiệm vụ gì \nboolean F(Queue Q) {\n F = (Q.rear = max);\n}",
    dapAn: "Kiểm tra hàng đợi đầy",
  },
  {
    cauHoi: "Giả sử có câu lệnh ch='A'. Vậy ch sẽ chứa bao nhiêu byte",
    dapAn: "1",
  },
  {
    cauHoi: 'Giả sử có câu lệnh ch[]= "A". ch chứa bao nhiêu bytes',
    dapAn: "2",
  },
  {
    cauHoi:
      "Giả sử trong ngôn ngữ C sử dụng khai báo “double a[12]”, phần tử a[7] là phần tử thứ bao nhiêu trong mảng a",
    dapAn: "Thứ 8.",
  },
  {
    cauHoi:
      "Ho một danh sách móc nối với các phần tử trong danh sách có kiểu S1 được định nghĩa như sau:\n\nstruct S1{int info; struct S1 *next;} *head;\n\nBiết con trỏ “*head” lưu địa chỉ của phần tử đầu tiên trong danh sách. Nhóm câu lệnh nào sau đây thêm một phần tử vào đầu danh sách:",
    dapAn: "P- > next=head; head=p;",
  },
  {
    cauHoi: "Hàng đợi còn được gọi là danh sách kiểu",
    dapAn: "fifo",
  },
  {
    cauHoi: "Hàng đợi còn được gọi là danh sách kiểu:",
    dapAn: "FIFO",
  },
  {
    cauHoi: "Hàng đợi được viết tắt bởi sự kết hợp các từ sau",
    dapAn: ["FI", "FO"],
  },
  {
    cauHoi:
      "Khai báo hàm tìm giá trị lớn nhất trong một mảng các số long dưới đây, khai báo đúng là ?",
    dapAn: "long max(long *a, int n)",
  },
  {
    cauHoi:
      "Khi biến con trỏ không chứa bất kì một địa chỉ nào thì giá trị của nó sẽ là",
    dapAn: ["0", "NULL."],
  },
  {
    cauHoi: "Khi bổ sung một phần tử mới vào hàng đợi cần kiểm tra thì ...",
    dapAn: "Hàng đợi có đầy không",
  },
  {
    cauHoi:
      "Khi chèn một phần tử vào danh sách (cài đặt bằng mảng) yêu cầu cần",
    dapAn: "do dai cua danh sach < do dai cua mang",
  },
  {
    cauHoi:
      "Khi chèn một phần tử vào danh sách xảy ra tình trạng:\n\nđộ dài của danh sách = độ dài của mảng thì thông báo là:",
    dapAn: "danh sach day",
  },
  {
    cauHoi:
      "Khi khai báo mảng, ta khởi tạo luôn giá trị của mảng như sau:int x[3]={4,2,6}; Nghĩa là: x[0]=  , x[1]=  , x[2]=  ;",
    dapAn: "4,2,6",
  },
  {
    cauHoi:
      "Khi lưu trữ cây nhị phân dưới dạng mảng, nếu vị trí của nút cha trong mảng là 3 thì vị trí tương ứng của nút con phải sẽ là:",
    dapAn: "7",
  },
  {
    cauHoi:
      "Khi lưu trữ cây nhị phân dưới dạng mảng, nếu vị trí của nút cha trong mảng là 3 thì vị trí tương ứng của nút con trái sẽ là:",
    dapAn: "6",
  },
  {
    cauHoi:
      "Khi lưu trữ cây nhị phân dưới dạng mảng, nếu vị trí của nút cha trong mảng là i thì vị trí của nút con trái là",
    dapAn: "2*i",
  },
  {
    cauHoi:
      "Khi lưu trữ cây nhị phân dưới dạng mảng, nếu vị trí của nút cha trong mảng là i thì vị tí của nút con phải là",
    dapAn: "2*i + 1",
  },
  {
    cauHoi:
      "Khi thực hiện việc thêm một node x vào cây nhị phân tìm kiếm ta chỉ cần...",
    dapAn: "Tìm vị trí thích hợp cho x trên toàn bộ cây",
  },
  {
    cauHoi:
      "Khi đổi một số nguyên từ hệ thập phân sang hệ nhị phân thì người ta dùng phép chia liên tiếp cho 2 và lấy các số dư (là các chữ số nhị phân) theo chiều ngược lại.\nCơ chế sắp xếp này chính là cơ chế hoạt động của cấu trúc dữ liệu:",
    dapAn: "Ngăn xếp (stack)",
  },
  {
    cauHoi:
      "Không gian nhớ dùng để lưu trữ các node của danh sách liên kết kép:",
    dapAn: "Lưu trữ rởi rác trong bộ nhớ.",
  },
  {
    cauHoi:
      "Không phải lúc nào cũng có thể xây dựng bài toán theo giải thuật và thủ tục đệ quy một cách dễ dàng, các vấn đề có thể là",
    dapAn: [
      "Làm thế nào để đảm bảo kích thước bài toán giảm đi sau mỗi lần gọi?",
      "Xem xét và định nghĩa các trường hợp đặc biệt (trường hợp suy biến) như thế nào?",
    ],
  },
  {
    cauHoi: "Khử đệ quy là gì",
    dapAn: "Đưa các bài toán đệ quy về các bài toán không sử dụng đệ quy",
  },
  {
    cauHoi: "Kiểu dữ liệu float có thể xử lí dữ liệu trong phạm vi nào",
    dapAn: "3.4*10 38 den 3.4*1038",
  },
  {
    cauHoi:
      "Kiểu dữ liệu int( kiểu số nguyên) có thể xử lí số nguyên nằm trong khoảng nào",
    dapAn: "-32768…32767.",
  },
  {
    cauHoi:
      "Kiểu dữ liệu nào dưới đây không được coi là kiểu dữ liệu cơ bản trong ngôn ngữ lập trình C",
    dapAn: "Kiểu mảng.",
  },
  {
    cauHoi:
      "Kiểu dữ liệu nào dưới đây được coi là kiểu dữ liệu cơ bản trong ngôn ngữ lập trình C",
    dapAn: "Kiểu double.",
  },
  {
    cauHoi: "Kí hiệu nào là con trỏ của phẩn tử thứ 3 của mảng a có 4 kí tự",
    dapAn: "*(a+2)",
  },
  {
    cauHoi: "Kích thước của mảng là  hay",
    dapAn: "so phan tu toi da cua mang,kich thuoc bo nho se cap phat cho mang",
  },
  {
    cauHoi: "Kích thước lưu trữ kiểu số nguyên là",
    dapAn: "2 byte",
  },
  {
    cauHoi:
      'Kết quả của đoạn chương trình sau là gì:\n\n\rchar c;\n\n\rint n;\n\n\rprintf("%d%c",&n,&c);\n\n\rNếu gõ vào : ”10 T”.',
    dapAn: ["C=''.", "N=10"],
  },
  {
    cauHoi:
      'Kết quả của đoạn chương trình sau là gì:\nchar c;\nint n;\nprintf("%d%c",&n,&c);\nNếu gõ vào : ”10 T”.',
    dapAn: ["c=''.", "n=10"],
  },
  {
    cauHoi: "Lệnh sau định nghĩa gì?  \n\n\rint *ptr[10];",
    dapAn: "ptr la mang cua 10 integer pointer",
  },
  {
    cauHoi: "Lựa chọn định nghĩa về danh sách đúng?",
    dapAn: [
      "Danh sách là tập hợp các phần tử có kiểu dữ liệu xác định và giữa chúng có một mối liên hệ nào đó,",
      "Một danh sách có chiều dài bằng 0 là một danh sách rỗng.",
      "Số phần tử của danh sách gọi là chiều dài của danh sách",
    ],
  },
  {
    cauHoi: "Miền giá trị của Kiểu số nguyên là:",
    dapAn: "-32768 .. 32767",
  },
  {
    cauHoi: "Mảng là",
    dapAn: "Một nhóm phần tử có cùng kiểu và chung tên gọi.",
  },
  {
    cauHoi: "Mỗi nút trong cây có tối đa:",
    dapAn: "Nhiều nút con",
  },
  {
    cauHoi:
      "Một cây nhị phân có chiều cao là 7, cây đó chỉ có 50 nút. Nếu lưu trữ kế tiếp thì lãng phí bao nhiêu ô ( nút gốc có mức 1, mỗi nút chiếm 1 ô ):",
    dapAn: "77 o",
  },
  {
    cauHoi: "Một giá trị kiểu char chiếm bao nhiêu bộ nhớ",
    dapAn: "1byte",
  },
  {
    cauHoi:
      "Ngôn ngữ lập trình C được Dennish phát triển dựa trên ngôn ngữ lập trình nào:",
    dapAn: ["BCPL", "Ngôn ngữ B"],
  },
  {
    cauHoi:
      "Ngôn ngữ lập trình nào dưới đây là ngôn ngữ lập trình có cấu trúc?",
    dapAn: ["Ngôn ngữ C", "Pascal"],
  },
  {
    cauHoi: "Ngăn xếp được viết tắt bởi sự kết hợp các từ sau",
    dapAn: ["FO", "LI"],
  },
  {
    cauHoi: "Nhược điểm của thủ tục đệ quy",
    dapAn: "Cả hai đáp án trên đều đúng",
  },
  {
    cauHoi: "Nút có khóa nhỏ nhất trong cây nhị phân tìm kiếm khác rỗng là...",
    dapAn: "Nút con bên trái  nhất",
  },
  {
    cauHoi:
      "Nếu S1 và S2 là các câu lệnh và E là biểu thức logic thì\n\nIf E Then S1 Else S2\n\nGiả sử thời gian thực hiện các lệnh S1, S2 là O(f(n)) và O(g(n)) tương ứng. Khi đó thời gian thực hiện lệnh if là",
    dapAn: "O(max (f()n), g(n)))",
  },
  {
    cauHoi:
      "Nếu có các khai báo sau:\n\n\rchar msg[10];\n\n\rchar *ptr;\n\n\rchar value;\n\n\rCâu nào sau đây là đúng:",
    dapAn: "Ptr=msg;",
  },
  {
    cauHoi:
      "Nếu có các khai báo sau:\n\n\rchar msg[10];\n\n\rchar value;\n\n\rCâu nào sau đây sẽ là đúng:",
    dapAn: "Msg[2]=value;",
  },
  {
    cauHoi:
      "Nếu có các khai báo sau:\nchar msg[10];\nchar *ptr;\nchar value;\nCâu nào sau đây là đúng:",
    dapAn: "ptr=msg;",
  },
  {
    cauHoi: "Nếu hàm được gọi trước khi nó định nghĩa thì điều kiện là gì?",
    dapAn: "Trước khi gọi hàm nó phải được khai báo",
  },
  {
    cauHoi:
      "Nếu lưu trữ móc nối thì mỗi nút của cây nhị phân cần 2 khoảng để ghi địa chỉ 2 con. Cây có 72 nút. Vậy lãng phí bao nhiêu khoảng địa chỉ:",
    dapAn: "73",
  },
  {
    cauHoi: "Nếu x là một biến toàn cục và x không phải là một con trỏ thì:",
    dapAn:
      "Miền nhớ giành cho x không bị thay đổi trong quá trình thực hiện chương trình.",
  },
  {
    cauHoi: "Phát biểu nào sau đây về mảng một chiều là đúng?",
    dapAn: "Là tập hợp hữu hạn các phần tử có cùng kiểu dữ liệu",
  },
  {
    cauHoi: "Phương pháp sắp xếp nhanh (Quick sort) chính là phương pháp:",
    dapAn: "Phân đoạn",
  },
  {
    cauHoi:
      "Queue (hàng đợi) là kiểu danh sách tuyến tính mà phép loại bỏ thực hiện ở 1 đầu gọi là lối",
    dapAn: "truoc",
  },
  {
    cauHoi:
      "Sinh viên tải Tải về . Cho biết đây là giải thuật gì (nhị phân hay tuyến tính)",
    dapAn: "nhi phan",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Cho biết đây là giải thuật gì (nhị phân hay tuyến tính)\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x2.doc">Tải về</a>',
    dapAn: "nhi phan",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Cho biết đây là giải thuật gì (nhị phân hay tuyến tính)?\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x1.doc">Tải về</a>',
    dapAn: "tuyen tinh",
  },
  {
    cauHoi:
      "Sinh viên tải Tải về . Cho biết đây là giải thuật gì nhị phân hay tuyến tính.....",
    dapAn: "Tìm phần tử nhỏ nhất của mảng M bao gồm N phần tử",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Kết quả biến n là",
    dapAn: "7",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Kết quả biến n là",
    dapAn: "5",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Kết quả biến n là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x11.doc">Tải về</a>',
    dapAn: "5",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Kết quả biến n là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x13.doc">Tải về</a>',
    dapAn: "7",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Kết quả biến n là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x15.doc">Tải về</a>',
    dapAn: "5",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Kết quả biến n là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x17.doc">Tải về</a>',
    dapAn: "7",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Kết quả biến result là",
    dapAn: "3",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Kết quả biến result là",
    dapAn: "2",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Kết quả biến result là",
    dapAn: "6",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Kết quả biến result là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x12.doc">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Tìm mô tả đúng nhất cho hàm TinhTong \n\n1. Hàm tính tổng N số nguyên đầu tiên\n\n2. Hàm tính tổng N số nguyên tố nhỏ hơn N, tính tổng N số nguyên tố lớn hơn N\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x4.doc">Tải về</a>',
    dapAn: "1 sai, 2 sai",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Đáp án đúng nhất?",
    dapAn:
      "Hàm thực hiện việc sao chép nội dung mảng M có chiều dài Len về mảng CM có cùng chiều dài. Hàm trả về chiều dài của mảng CM sau khi sao chép.",
  },
  {
    cauHoi: "Sinh viên tải Tải về . Đáp án đúng nhất?",
    dapAn: "Hàm sẽ trả về -1 nế u không tìm thấy phần tử có giá trị là X",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Đáp án đúng nhất?\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x5.doc">Tải về</a>',
    dapAn: "Hàm sẽ trả về -1 nế u không tìm thấy phần tử có giá trị là X",
  },
  {
    cauHoi:
      'Sinh viên tải Tải về . Đáp án đúng nhất?\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab4x6.doc">Tải về</a>',
    dapAn:
      "Thủ tục hỗ trợ tìm kiếm đệ quy phần tử có giá trị là X trê n mảng các phần tử từ chỉ s ố từ Firs t đế n chỉ s ố Last",
  },
  {
    cauHoi:
      "Sinh viên tải [Tải về] . Cho biết đây là giải thuật gì (nhị phân hay tuyến tính)?",
    dapAn: "tuyen tinh",
  },
  {
    cauHoi:
      "Sinh viên tải [Tải về] . Cho biết đây là giải thuật gì nhị phân hay tuyến tính.....",
    dapAn: "Tìm phần tử nhỏ nhất của mảng M bao gồm N phần tử",
  },
  {
    cauHoi: "Sinh viên tải [Tải về] . Kết quả biến result là",
    dapAn: "6",
  },
  {
    cauHoi: "Sinh viên tải [Tải về] . Kết quả biến result là",
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về cho biết chức năng chính của hàm là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x15.doc">Tải về</a>',
    dapAn: "sap xep day so tang dan",
  },
  {
    cauHoi: "Sinh viên tải file Tải về cho biết kết quả của chương trình là",
    dapAn: "16.67",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về cho biết kết quả của chương trình là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x1.doc">Tải về</a>',
    dapAn: "16.67",
  },
  {
    cauHoi:
      "Sinh viên tải file Tải về khi nhập n=3 và A[0]: 4, Nhap A[1]: 6, Nhap A[2]: 3, kết quả sẽ là",
    dapAn: "3,4,6",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về khi nhập n=3 và A[0]: 4, Nhap A[1]: 6, Nhap A[2]: 3, kết quả sẽ là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x14.doc">Tải về</a>',
    dapAn: "3,4,6",
  },
  {
    cauHoi: "Sinh viên tải file Tải về kết quả của chương trình là",
    dapAn: "66",
  },
  {
    cauHoi: "Sinh viên tải file Tải về kết quả của chương trình là là",
    dapAn: "llo_world",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về kết quả của chương trình là là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x11.doc">Tải về</a>',
    dapAn: "llo_world",
  },
  {
    cauHoi: "Sinh viên tải file Tải về kết quả của chương trình là?",
    dapAn: "63.20, -45.60, 70.10, 3.60, 14.50",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về kết quả của chương trình là?\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x7.doc">Tải về</a>',
    dapAn: "63.20, -45.60, 70.10, 3.60, 14.50",
  },
  {
    cauHoi: "Sinh viên tải file Tải về lỗi thiếu của khi gọi hàm change() là",
    dapAn: ["&", ";"],
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về lỗi thiếu của khi gọi hàm change() là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x5.doc">Tải về</a>',
    dapAn: ["&", ";"],
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về sau đó cho biết kết quả bang cac so\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x13.doc">Tải về</a>',
    dapAn: "153,370,371,407",
  },
  {
    cauHoi:
      "Sinh viên tải file Tải về sau đó cho biết kết quả của biến sum1 là",
    dapAn: "10",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về sau đó cho biết kết quả của biến sum1 là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x3.doc">Tải về</a>',
    dapAn: "10",
  },
  {
    cauHoi:
      "Sinh viên tải file Tải về sau đó nhập a =12 và b=4 cho biết biến UCLN là",
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về sau đó nhập a =12 và b=4 cho biết biến UCLN là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x6.doc">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về sau đó nhập n =12 và m =12 cho biết biến DC là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x11.doc">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      "Sinh viên tải file Tải về sau đó nhập n =12 và m =15 cho biết biến DC là",
    dapAn: "1",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về sau đó nhập n =12 và m =15 cho biết biến DC là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x10.doc">Tải về</a>',
    dapAn: "1",
  },
  {
    cauHoi: "Sinh viên tải file Tải về đầu ra output là",
    dapAn: "hello_world",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về đầu ra output là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x10.doc">Tải về</a>',
    dapAn: "hello_world",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về đầu ra output là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab2x9.doc">Tải về</a>',
    dapAn: "fpolyhcm.com",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Cho biết chương trình lỗi dòng thư",
    dapAn: "17",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Cho biết chương trình lỗi dòng thư\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x12.doc">Tải về</a>',
    dapAn: "17",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Cho biết chương trình trên lỗi ở dòng",
    dapAn: "19",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Cho biết chương trình trên lỗi ở dòng\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x10.doc">Tải về</a>',
    dapAn: "19",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Cho biết chương trình trên lỗi ở dòng\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x9.doc">Tải về</a>',
    dapAn: "19",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Cho biết kết quả của biến n là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x1.doc">Tải về</a>',
    dapAn: "5",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Khi kết quả n=24 thì ta phải nhập a=",
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Khi kết quả n=24 thì ta phải nhập a=\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x8.doc">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Khi nhập a=10; và i=2 thì biến b là =",
    dapAn: "8",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Khi nhập a=10; và i=2 thì biến b là =",
    dapAn: "2",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Khi nhập a=6; b=8 thì i là",
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Khi nhập a=6; b=8 thì i là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x2.doc">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Khi nhập vào số 4, kết quả của chương trình là\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x11.doc">Tải về</a>',
    dapAn: "10",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Sinh viên cho biết lỗi dòng thứ mấy",
    dapAn: "21",
  },
  {
    cauHoi: "Sinh viên tải file Tải về. Sinh viên cho biết lỗi dòng thứ mấy",
    dapAn: "15",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Sinh viên cho biết lỗi dòng thứ mấy\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x4.doc">Tải về</a>',
    dapAn: "21",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Sinh viên cho biết lỗi dòng thứ mấy\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x5.doc">Tải về</a>',
    dapAn: "15",
  },
  {
    cauHoi:
      'Sinh viên tải file Tải về. Sinh viên cho biết lỗi dòng thứ mấy\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab3x6.doc">Tải về</a>',
    dapAn: "10",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] . Cho biết kết quả của chương trình",
    dapAn: "0 1 1 2 3 5 8 13 21 34",
  },
  {
    cauHoi:
      "Sinh viên tải file [Tải về] . Khi kết quả n=24 thì ta phải nhập a=",
    dapAn: "4",
  },
  {
    cauHoi:
      "Sinh viên tải file [Tải về] . Khi nhập vào số 4, kết quả của chương trình là",
    dapAn: "10",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] . Sinh viên cho biết lỗi dòng thứ mấy",
    dapAn: "15",
  },
  {
    cauHoi:
      "Sinh viên tải file [Tải về] . kết quả của chương trình là 0 1 1 2, ta cần nhập biến j=",
    dapAn: "4",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] cho biết chức năng chính của hàm là",
    dapAn: "sap xep day so tang dan",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] cho biết kết quả của chương trình là",
    dapAn: "16.67",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] kết quả của chương trình là",
    dapAn: "999",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] sau đó cho biết kết quả bang cac so",
    dapAn: "153,370,371,407",
  },
  {
    cauHoi:
      "Sinh viên tải file [Tải về] sau đó cho biết kết quả của biến sum1 là",
    dapAn: "10",
  },
  {
    cauHoi:
      "Sinh viên tải file [Tải về] sau đó nhập n =123 cho biết biến DC là",
    dapAn: "3",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] đầu ra output là",
    dapAn: "hello_world",
  },
  {
    cauHoi: "Sinh viên tải file [Tải về] đầu ra output là",
    dapAn: "fpolyhcm.com",
  },
  {
    cauHoi:
      "Sắp xếp theo thứ tự tăng dần của cấp thời gian thực hiện chương trình (Chú ý: (log2n) = Log cơ số 2 của n)",
    dapAn: "O(1),O(log2n),O(n),O(nlog2n)",
  },
  {
    cauHoi:
      "Số phép so sánh của thuật toán tìm kiếm, trong trường hợp xấu nhất là",
    dapAn: "2*n",
  },
  {
    cauHoi: "Tham chiếu đến phần tử thứ i của mảng D được xác định bởi",
    dapAn: "D[i]",
  },
  {
    cauHoi: "Thao tác POP(x) dùng trong Stack là để:",
    dapAn: "Lấy một phần tử cuối cùng ra khỏi đỉnh Stack",
  },
  {
    cauHoi: "Thao tác Push(x) dùng trong Stack là để:",
    dapAn: "Bổ sung một phần tử vào đỉnh Stack",
  },
  {
    cauHoi: "Thành phần dữ liệu của danh sách liên liên kết .....",
    dapAn: "Lưu thông tin về bản thân phần tử",
  },
  {
    cauHoi: "Thành phần liên kết của danh sách liên kết .....",
    dapAn:
      "Lưu địa chỉ phần tử đứng  sau trong danh sách hoặc bằng NULL nếu là phần  tử cuối danh sách",
  },
  {
    cauHoi: "Thời gian chạy chương trình phụ thuộc vào các yếu tố nào",
    dapAn: [
      "Dữ liệu đầu vào.",
      "Tính chất của trình biên dịch được dùng.",
      "Tôc độ của máy được dùng.",
      "Độ phức tạp tính toán của giải thuật.",
    ],
  },
  {
    cauHoi:
      "Thời gian thực hiện các lệnh đơn : gán, đọc, viết là  \n\n\rChú ý: (log2n) = Log cơ số 2 của n; n^2 = n mũ 2",
    dapAn: "o(1)",
  },
  {
    cauHoi:
      "Thời gian thực hiện các lệnh đơn : gán, đọc, viết là  \n\nChú ý: (log2n) = Log cơ số 2 của n; n^2 = n mũ 2",
    dapAn: "o(1)",
  },
  {
    cauHoi: "Trong biểu diễn dữ liệu dưới dạng cây, cấp của cây chính",
    dapAn: "Cấp cao nhất của một nút trên cây",
  },
  {
    cauHoi: "Trong biểu diễn dữ liệu dưới dạng cây, nút có cấp bằng 0 gọi là:",
    dapAn: "Lá",
  },
  {
    cauHoi: "Trong các cấu trúc dữ liệu sau đâu là dữ liệu trừu tượng",
    dapAn: [
      "Cấu trúc dữ liệu dạng StacK",
      "Cấu trúc dữ liệu dạng danh sách(LIST)",
      "Cấu trúc dữ liệu kiểu hàng đợi(QUEUE)",
    ],
  },
  {
    cauHoi: "Trong các cấu trúc dữ liệu sau, đâu là dữ liệu trừu tượng?",
    dapAn: "Tất cả cấu trúc",
  },
  {
    cauHoi:
      'Trong các giải thuật sắp xếp, giải thuật nào áp dụng phương pháp "Chia để trị"?',
    dapAn: "Quick sort, Merge sort",
  },
  {
    cauHoi:
      "Trong lưu trữ dữ liệu kiểu Queue (Q) dưới dạng mảng nối vòng, giả sử F là con trỏ trỏ tới lối trước của Q, R là con trỏ trỏ tới lối sau của Q. Điều kiện F=R=0 nghĩa là:",
    dapAn: "Queue rỗng",
  },
  {
    cauHoi:
      "Trong lưu trữ dữ liệu kiểu Queue (Q), giả sử F là con trỏ trỏ tới lối trước của Q, R là con trỏ trỏ tới lối sau của Q. Khi loại bỏ một phần tử vào Queue, thì R và F thay đổi thế nào?",
    dapAn: "F=F+1, R không thay đổi",
  },
  {
    cauHoi:
      "Trong lưu trữ dữ liệu kiểu Queue (Q), giả sử F là con trỏ trỏ tới lối trước của Q, R là con trỏ trỏ tới lối sau của Q. Khi thêm một phần tử vào Queue, thì R và F thay đổi thế nào?",
    dapAn: "F không thay đổi, R=R+1",
  },
  {
    cauHoi:
      "Trong một chương trình có 3 bước thực hiện mà thời gian thực hiện tưng bước lần lượt là O(n2), O(n3) và O(nlog2n). thời gian thực hiện chương trình sẽ là\n\n\rChú ý: (log2n) = Log cơ số 2 của n; n^2 = n mũ 2",
    dapAn: "O(n^3)",
  },
  {
    cauHoi:
      "Trong một chương trình có 3 bước thực hiện mà thời gian thực hiện tưng bước lần lượt là O(n2), O(n3) và O(nlog2n). thời gian thực hiện chương trình sẽ là\n\nChú ý: (log2n) = Log cơ số 2 của n; n^2 = n mũ 2",
    dapAn: "O(n^3)",
  },
  {
    cauHoi:
      "Trong một chương trình có 3 bước thực hiện mà thời gian thực hiện tưng bước lần lượt là O(n2), O(n3) và O(nlog2n). thời gian thực hiện chương trình sẽ là\nChú ý: (log2n) = Log cơ số 2 của n; n^2 = n mũ 2",
    dapAn: "O(n^3)",
  },
  {
    cauHoi: "Trong ngôn ngữ C, khai báo “int array[3][5]” có nghĩa là:",
    dapAn:
      "Là một mảng hai chiều tối đa là 15 phần tử và mỗi phần tử là một số nguyên.",
  },
  {
    cauHoi:
      "Trong số các phép toán sau đây, phép toán nào không được dùng đối với mảng:",
    dapAn: "Bổ xung một phần tử vào mảng",
  },
  {
    cauHoi: "Trường hợp cơ sở của giải thuật đệ quy là",
    dapAn:
      "Trường hợp bài toán Pn, có quy mô đủ nhỏ để ta có thể giải trực tiếp.",
  },
  {
    cauHoi: "Trường hợp đệ quy của giải thuật đệ qui là",
    dapAn:
      "Là cơ chế đưa bài toán cần giải về một hay nhiều bài toán tương tự nhưng có quy mô nhỏ hơn",
  },
  {
    cauHoi:
      "Tìm mô tả đúng cho hàm sau:\nint SC (int M[], int Len, int CM[]) { \n for (int i = 0; i  <  Len; i++)\n CM[i] = M[i];\n return (Len);\n}",
    dapAn:
      "Hàm thực hiện việc sao chép nội dung mảng M có chiều dài Len về mảng CM có cùng chiều dài. Hàm trả về chiều dài của mảng CM sau khi sao chép",
  },
  {
    cauHoi: "Tính chất nào sau đây là tính chất của cây nhị phân tìm kiếm:",
    dapAn: "Mọi khóa thuộc cây con trái nút đó đều nhỏ hơn khóa ứng với nút đó",
  },
  {
    cauHoi: "Tính chất nào sau đây là tính chất của cây nhị phân tìm kiếm?",
    dapAn: "Mọi khóa thuộc cây con phải nút đó đều lớn hơn khóa ứng với nút đó",
  },
  {
    cauHoi: "Tư tưởng của giải thuật tìm kiếm trên cây nhị phân tìm kiếm",
    dapAn:
      "Tìm kiếm dựa vào cây nhị tìm kiếm: Nừu giá trị cần tìm nhỏ hơn gốc thì thực hiện tìm kiếm trên cây con trái, ngược lại ta việc tìm kiếm được thực hiện trên cây con phải.",
  },
  {
    cauHoi: "Tải file Tải về cho biết kết quả của chương trình",
    dapAn: "24 la so chan\n31 la so le",
  },
  {
    cauHoi:
      'Tải file Tải về cho biết kết quả của chương trình\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x2.doc">Tải về</a>',
    dapAn: "24 la so chan\n31 la so le",
  },
  {
    cauHoi: "Tải file Tải về cho biết kết quả của hàm main()",
    dapAn: "4.898980",
  },
  {
    cauHoi:
      'Tải file Tải về cho biết kết quả của hàm main()\n<a href="https://cms.poly.edu.vn/asset-v1:FPOLY+SOF307+27.02.2020+type@asset+block@Lab1x1.doc">Tải về</a>',
    dapAn: "4.898980",
  },
  {
    cauHoi: "Tải file [Tải về] cho biết kết quả của chương trình",
    dapAn: "24 la so chan\n\n\r31 la so le",
  },
  {
    cauHoi:
      "Với Stack được cài đặt bằng mảng, thủ tục sau để làm gì?\nvoid MNullStack (Stack s) {\n S.Top =Maxlenght + 1;\n}",
    dapAn: "Thủ tục khởi tạo Stack rỗng",
  },
  {
    cauHoi:
      'char S[20]="aaaaaea";\nchar* p=strstr(S,"e");\nNếu địa chỉ của S là 1000, thì giá trị của p là bao nhiêu là',
    dapAn: "1005",
  },
  {
    cauHoi:
      "cho dãy số 27 40 -7 5 57, thực hiện bước thứ 1, khi áp dụng thuật toán sắp xếp lựa chọn để sắp xếp dãy theo thứ tự giảm, ta có được dãy mới là gì?",
    dapAn: "57  27 -7  5  40",
  },
  {
    cauHoi: "hàng đợi còn được gọi là danh sách kiểu",
    dapAn: "fifo",
  },
  {
    cauHoi:
      "không phải lúc nào cũng có thể xây dựng bài toán theo giải thuật và thủ tục đệ quy một cách dễ dàng, các vấn đề có thể là",
    dapAn: [
      "Làm thế nào để đảm bảo kích thước bài toán giảm đi sau mỗi lần gọi?",
      "Xem xét và định nghĩa các trường hợp đặc biệt (trường hợp suy biến) như thế nào?",
    ],
  },
  {
    cauHoi: "Ý tưởng của giải thuật tìm kiếm nhị phân:",
    dapAn:
      "Tại mỗi bước tiến hành so sánh X với phần tử ở giữa của dãy,Dựa vào bước so sánh này quyết định giới hạn dãy tìm kiếm nằm ở nửa trên, hay nửa dưới của dãy hiện hành.",
  },
  {
    cauHoi: "Ý tưởng của giải thuật tìm kiếm tuần tự",
    dapAn:
      "So sánh X lần lượt với các phần tử thứ nhất, thứ hai,... của dãy cho đến khi gặp phần tử có khoá cần tìm.",
  },
  {
    cauHoi: "Ý tưởng phương pháp sắp xếp Trộn (Merge sort) là:",
    dapAn:
      "Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.",
  },
  {
    cauHoi: "Ý tưởng phương pháp sắp xếp chọn tăng dần (select sort)",
    dapAn:
      "Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.",
  },
  {
    cauHoi: "Ý tưởng phương pháp sắp xếp nổi bọt (bubble sort) là:",
    dapAn:
      "Bắt đầu từ cuối dãy đến đầu dãy, ta lần lượt so sánh hai phần tử kế tiếp nhau, nếu phần tử nào nhỏ hơn được đứng vị trí trên.",
  },
  {
    cauHoi: "Ý tưởng phương pháp sắp xếp vun đống (Heap sort) là",
    dapAn:
      "Lần lượt tạo đống cho cây nhị phân (phần tử gốc có giá trị lớn nhất) và loại phần tử gốc ra khỏi cây đưa vào dãy sắp xếp.",
  },
  {
    cauHoi: "ý tưởng phương pháp sắp xếp chèn (insertion sort) là:",
    dapAn:
      "Lần lượt lấy phần tử của danh sách chèn vị trí thích hợp của nó trong dãy bằng cách đẩy các phần tử lớn hơn xuống.",
  },
  {
    cauHoi: "ý tưởng phương pháp sắp xếp chọn tăng dần (select sort)",
    dapAn:
      "Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.",
  },
  {
    cauHoi: "ý tưởng phương pháp sắp xếp nhanh (Quick sort) là:",
    dapAn:
      "Lần lượt chia dãy phần tử thành hai dãy con bởi một phần tử khoá (dãy con trước khoá gồm các phần tử nhỏ hơn khoá và dãy còn lại gồm các phần tử lớn hơn khoá).",
  },
  {
    cauHoi: "ý tưởng phương pháp sắp xếp vun đống (Heap sort) là",
    dapAn:
      "Lần lượt tạo đống cho cây nhị phân (phần tử gốc có giá trị lớn nhất) và loại phần tử gốc ra khỏi cây đưa vào dãy sắp xếp.",
  },
  {
    cauHoi: "Đâu là kiểu dữ liệu có cấu trúc?",
    dapAn: ["Kiểu array (mảng)", "Kiểu con trỏ"],
  },
  {
    cauHoi: "Đâu là phát biểu dúng về danh sach moc nối:",
    dapAn: "Các phần tử của nó được lưu trữ rải rác trong bộ nhớ RAM.",
  },
  {
    cauHoi: "Đâu là phát biểu đúng về danh sách",
    dapAn: "Có thể xóa một phần tử tại vị trí bất kì trong danh sách.",
  },
  {
    cauHoi: "Đặc trưng của thuật toán",
    dapAn: "Tất cả ý nêu ra",
  },
  {
    cauHoi:
      "Đặc trưng nào của thuật toán thể hiện: Tất cả các phép toán có mặt trong các bước của thuật toán phải đủ đơn giản",
    dapAn: "Tính khả thi",
  },
  {
    cauHoi: "Đặc điểm của giải thuật đệ quy",
    dapAn: ["Bài toán được chia nhỏ ra", "Có lời gọi đến chính thủ tục đó"],
  },
  {
    cauHoi: "Để cài đặt Stack ta có thể dùng phương pháp nào sau đây?",
    dapAn: "Bằng con trỏ và bằng mảng",
  },
  {
    cauHoi:
      "Để dùng danh sách liên kết, xét hai khai báo sau(cần 1KB để lưu dữ thông tin về một sinh viên):\n\n1- Khai báo 1: struct SV{ thongtin; struct SV *tiep;};\n\n2- Khai báo 2: struct SV {thongtin}; struct DS{struct SV* sv; struct DS* tiep;};\n\n(Với “thongtin” là một thành phần dữ liệu của cấu trúc); Chọn câu đúng nhất trong các câu sau:",
    dapAn:
      "Khai báo 2 sẽ giúp chương trình chạy nhanh hơn khi đổi vị trí 2 sinh viên.",
  },
  {
    cauHoi:
      "Để thêm một đối tượng x bất kỳ vào Stack, thao tác thường dùng là:",
    dapAn: "PUSH(x).",
  },
  {
    cauHoi:
      "Để tạo danh sách liên kết, theo bạn sinh viên nào dưới đây là khai báo đúng cấu trúc tự trỏ sẽ được dùng:\n\n1- Sinh viên 1:\n\nstruct SV{char ht[25]; int tuoi; struct Sv *tiep;};\n\n2- Sinh viên 2:\n\ntypedef\n\n struct SV node;\n\nstruct SV{char ht[25]; int tuoi; node *tiep;};\n\n3- Sinh viên 3:\n\ntypedef\n\n struct SV{char ht[25]; int tuoi; struct SV *tiep;} node;",
    dapAn: ["1", "2", "3"],
  },
  {
    cauHoi:
      "Để tạo danh sách liên kết, theo bạn sinh viên nào dưới đây là khai báo đúng cấu trúc tự trỏ sẽ được dùng:\n1- Sinh viên 1:\nstruct SV{char ht[25]; int tuoi; struct Sv *tiep;};\n2- Sinh viên 2:\ntypedef\n struct SV node;\nstruct SV{char ht[25]; int tuoi; node *tiep;};\n3- Sinh viên 3:\ntypedef\n struct SV{char ht[25]; int tuoi; struct SV *tiep;} node;",
    dapAn: ["1", "2", "3"],
  },
  {
    cauHoi:
      "Để viết chương trình chỉ để sử dụng một số ít lần và cái giá của thời gian viết chương trình vượt xa cái giá của chạy chương trình thì ta chọn thuật toán:",
    dapAn: ["Thuật toán dễ cài đặt", "Thuật toán đơn giản"],
  },
  {
    cauHoi:
      "Để đổi chỗ 2 phần tử a7, a9 ta đưa thêm một tham số X và ta thực hiện dãy lệnh sau đây",
    dapAn: "X=a7 ; a7=a9 ; a9=X",
  },
  {
    cauHoi: "Định nghĩa cấu trúc dữ liệu dạng danh sách (LIST)?",
    dapAn:
      "Danh sách là một tập hợp các phần tử có cùng một kiểu mà ta gọi là kiểu phần tử (ElementType).",
  },
  {
    cauHoi: "Định nghĩa danh sách tuyến tính Hàng đợi (Queue)?",
    dapAn:
      "Hàng đợi là kiểu danh sách tuyến tính trong đó, phép bổ sung một phần tử vào hàng đợi được thực hiện ở một đầu, gọi là lối sau (rear) và phép loại bỏ một phần tử được thực hiện ở đầu kia, gọi là lối trước (front).",
  },
  {
    cauHoi: "Độ cao của cây là gì?",
    dapAn: "muc lon nhat cua cay",
  },
  {
    cauHoi: "Độ phức tạp của giải thuật tìm kiếm nhị phân là:",
    dapAn: "O(log2N)",
  },
  {
    cauHoi: "Độ phức tạp của giải thuật tìm kiếm tuần tự là:",
    dapAn: "O(N)",
  },
  {
    cauHoi: "Ưu điểm của thủ tục đệ quy là",
    dapAn: "Tất cả các đáp trên",
  },
  {
    cauHoi:
      "Ưu điểm của việc cài đặt danh sách bằng mảng là gì?\n\n1. Khi khai báo một mảng ta phải xác định số lượng phần tử của mảng, nên khống chế số luợng của đối tuợng mà danh sách lưu trữ.\n\n2. Việc truy nhập vào phần tử của mảng được thực hiện trực tiếp dựa vào địa chỉ tính được(chỉ số), nên tốc độ nhanh và đồng đều đối với mọi phần tử.",
    dapAn: "1 sai, 2 đúng",
  },
  {
    cauHoi: "Ứng dụng của giải thuật đệ quy để giải các bài toán sau:",
    dapAn: [
      "Tháp Hà Nội",
      "Tìm kiếm trong danh sách liên kết",
      "Tính giai thừa của số nguyên n",
    ],
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] đầu ra output là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1QBehdLFF6wRqrS67Jqtp1Y4hxGt2vmv_" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "hello_world",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] đầu ra output là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1RzckDeWYowf8ccLqTU3aTR-u2jxkqeQN" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "fpolyhcm.com",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] kết quả của chương trình là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1yjPMzGqdjZ3_2InGSL_OopzNFAvXjR5L" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "999",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] cho biết kết quả của chương trình là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1NagD7UzI5eAg_D98BdJCglQgQt6gnUnO" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "16.67",
  },
  {
    cauHoi:
      "Với Stack được cài đặt bằng mảng, thủ tục sau để làm gì?\n\n\rvoid MNullStack (Stack s) {\n\n\r S.Top =Maxlenght + 1;\n\n\r}",
    dapAn: "Thủ tục khởi tạo Stack rỗng",
  },
  {
    cauHoi:
      "Khi đổi một số nguyên từ hệ thập phân sang hệ nhị phân thì người ta dùng phép chia liên tiếp cho 2 và lấy các số dư (là các chữ số nhị phân) theo chiều ngược lại.\n\n\rCơ chế sắp xếp này chính là cơ chế hoạt động của cấu trúc dữ liệu:",
    dapAn: "Ngăn xếp (stack)",
  },
  {
    cauHoi:
      "Giả sử Q là Hàng đợi, các phần tử của nó có kiểu Item. Hàm sau làm nhiệm vụ gì \n\n\rboolean F(Queue Q) {\n\n\r F = (Q.rear = max);\n\n\r}",
    dapAn: "Kiểm tra hàng đợi đầy",
  },
  {
    cauHoi:
      "Để lấy loại bỏ một đối tượng ra khỏi Stack, thao tác thường dùng là:",
    dapAn: "POP(x)",
  },
  {
    cauHoi:
      "Stack (ngăn xếp) là 1 kiểu danh sách đặc biệt, mà phép bổ sung và phép loại bỏ luôn luôn thực hiện ở 1 đầu gọi là",
    dapAn: "dinh",
  },
  {
    cauHoi: "Danh sách tuyến tính dạng ngăn xếp là",
    dapAn:
      "Danh sách tuyến tính trong đó phép bổ sung một phần tử vào ngăn xếp và phép loại bỏ một phần tử khỏi ngăn xếp luôn luôn thực hiện ở một đầu gọi là đỉnh",
  },
  {
    cauHoi:
      "Tiến trình đặt (thêm) một phần tử dữ liệu mới vào trên ngăn xếp còn được biết đến với tên Hoạt động PUSH. Bước thứ  \n\n\rkiểm tra xem ngăn xếp đã đầy hay chưa?",
    dapAn: "1",
  },
  {
    cauHoi:
      "Ưu điểm của việc cài đặt danh sách bằng mảng là gì?\n\n\r1. Khi khai báo một mảng ta phải xác định số lượng phần tử của mảng,nên khống chế số luợng của đối tuợng mà danh sách lưu trữ.\n\n\r2. Việc truy nhập vào phần tử của mảng được thực hiện trực tiếp dựa vào địa chỉ tính được(chỉ số) vậy nên tốc độ nhanh và đồng đều đối với mọi phần tử.",
    dapAn: "1 sai, 2 đúng",
  },
  {
    cauHoi:
      "Khi chèn một phần tử vào danh sách xảy ra tình trạng:\n\n\rđộ dài của danh sách = độ dài của mảng thì thông báo là:",
    dapAn: "danh sach day",
  },
  {
    cauHoi:
      "Một danh sách trong đó tất cả các thao tác chèn thực hiện tại một đầu, thao tác xóa được thực hiện tại đầu kia của danh sách gọi là:",
    dapAn: "Queue;",
  },
  {
    cauHoi:
      'Danh sách khai báo bằng con trỏ. Thủ tục sau có chức năng gì?"\n\n\rvoid MnullList ( List Header)\n\n\r{\n\n\rNew (Header);\n\n\rHeader.Next : = Nil;\n\n\r}',
    dapAn: "thu tuc khoi tao danh sach rong",
  },
  {
    cauHoi:
      "Nếu lưu trữ kế tiếp một cây nhị phân có chiều cao 8 thì phải dự trù bao nhiêu ô  , Câu nút gốc có mức 1, mỗi nút cần 1 ô nhớ)",
    dapAn: "255 o",
  },
  {
    cauHoi:
      "Danh sách liên kết đôi là gì?\n\n\r1. Là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn.\n\n\r2. Là một biến thể của danh sách liên kết đơn, nhưng do 2 danh sách đơn cộng lại, Không có đáp án nào đúng",
    dapAn: "1 đúng, 2 sai",
  },
  {
    cauHoi: "Tính chất quan trọng của danh sách là",
    dapAn:
      "Các phần tử của danh sách có thứ tự tuyến tính theo vị trí xuất hiện của chúng(position)",
  },
  {
    cauHoi:
      "Dấu hiệu nào dưới đây cho biết node p của một danh sách liên kết đơn là node cuối cùng bên phải:",
    dapAn: "(p->next==null);",
  },
  {
    cauHoi:
      "Khi lưu trữ cây nhị phân dưới dạng mảng, nếu vị trí của nút cha trong mảng là 3 thì vị trí tương ứng của nút con sẽ là:",
    dapAn: ["6", "7"],
  },
  {
    cauHoi:
      "Cho một danh sách móc nối với các phần tử trong danh sách có kiểu S1 được định nghĩa như sau:\n\n\rstruct S1{int info; struct S1 *next;} *head;\n\n\rBiết con trỏ “*head” lưu địa chỉ của phần tử đầu tiên trong danh sách. Nhóm câu lệnh nào sau đây xóa phần tử đầu tiên ra khỏi danh sách:",
    dapAn: "Head=head->next;",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Cho biết chương trình trên lỗi ở dòng\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1OlnPMeViAZEz_S0FO6MfP8AWymnDKaxZ" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "19",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] khi nhập n=3 và A[0]: 4, Nhap A[1]: 6, Nhap A[2]: 3, kết quả sẽ là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1npF_lYtRHjXHA8K-DWL2qOHsjd7R5a0p" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "3,4,6",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Kết quả biến result là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1ugnliKsC6u12VTd8BRv87ch6wjOzieKZ" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] sau đó nhập a =12 và b=4 cho biết biến UCLN là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1cqD4eHVrCsoKcHo-06k7yn-m-7iioU8v" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Kết quả biến result là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1GpkoPaFWPijR1SpNhIc2XoLiIaq3LIbM" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "6",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Cho biết lỗi chương trình là thiếu dấu\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1LByZPVUNvPtmOd4svwqotf8BER6rryei" target="_blank" class="nn-down">Tải về</a>',
    dapAn: ";",
  },
  {
    cauHoi: "Cài đặt danh sách bằng mảng có nghiã là",
    dapAn:
      "Dùng một mảng (array) để lưu trữ liên tiếp các phần tử của danh sách bắt đầu từ vị trí đầu tiên của mảng.",
  },
  {
    cauHoi:
      'Tải file [Tải về] cho biết kết quả của chương trình\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1OJh6sRWoZsqJCAs8TgZt6XpXc7Ec76V3" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "24 la so chan\n\n\r31 la so le",
  },
  {
    cauHoi:
      "Hãy chỉ ra tùy chọn gắn một file vào chương trình hiện tại không hợp lệ dưới đây là",
    dapAn: "#include<file",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] kết quả của chương trình là?\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1Lktksg5Xl2sChaqc-Kn5HQQoA7qtR936" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "63.20, -45.60, 70.10, 3.60, 14.50",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Khi kết quả n=24 thì ta phải nhập a=\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1XY62FEypAdepyb4IKObBI-BUNtSmWSyE" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi:
      "Ho một danh sách móc nối với các phần tử trong danh sách có kiểu S1 được định nghĩa như sau:\n\n\rstruct S1{int info; struct S1 *next;} *head;\n\n\rBiết con trỏ “*head” lưu địa chỉ của phần tử đầu tiên trong danh sách. Nhóm câu lệnh nào sau đây thêm một phần tử vào đầu danh sách:",
    dapAn: "P->next=head; head=p;",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Sinh viên cho biết lỗi dòng thứ mấy\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1AseFYLV2FgFDGTTf7V_y9dVqe9KoEvQ_" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "21",
  },
  {
    cauHoi:
      "Cho lệnh gán X := F với F = 5X + 7Y , X=6, Y =X + 2. Sau lệnh này X có giá trị:",
    dapAn: "86",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Cho biết đây là giải thuật gì nhị phân hay tuyến tính.....\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1kOMiPCwWdq-wCOZoUC3RuV5RoSoED9Pk" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "Tìm phần tử nhỏ nhất của mảng M bao gồm N phần tử",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Kết quả biến result là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1a9OCDcjy__ZIdKWam5GONELseJWl7Wgn" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Cho biết đây là giải thuật gì (nhị phân hay tuyến tính)?\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1wVX_QtRAjsT6b4aIxmZH5Dii7bhAu0FQ" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "tuyen tinh",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Tìm mô tả đúng nhất cho hàm TinhTong \n\n\r1. Hàm tính tổng N số nguyên đầu tiên\n\n\r2. Hàm tính tổng N số nguyên tố nhỏ hơn N, tính tổng N số nguyên tố lớn hơn N\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=121PkzE0orBt8DF5I33cS22LCTRUApvBa" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "1 sai, 2 sai",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Kết quả biến n là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1a7cW2HsoXgExQBbPQPB5EJX6UZoLRbkh" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "7",
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Đáp án đúng nhất?\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1TERoGcicCwg9lI1WNWjT8E1cDBA6x-qK" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "Số phép gán: Gmin = 3 và Số phép so sánh: Smin = 2",
  },
  {
    cauHoi:
      "Mỗi phần tử trong danh sách liên kết đơn là một cấu trúc có hai thành phần",
    dapAn: ["Thành phần dữ liệu", "Thành phần liên kết"],
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Khi nhập vào số 4, kết quả của chương trình là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1djS2F6dscrB2jIDhqFUr8UoyQxL51B-b" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "10",
  },
  {
    cauHoi: "Có thể cài đặt danh sách bằng:",
    dapAn: ["Con trỏ", "Mảng", "Array", "Pointer"],
  },
  {
    cauHoi:
      'Sinh viên tải [Tải về] . Kết quả nào đúng khi thực hiện giải thuật sau với a[]= {1, 3, 5, 4, 2}; n = 5 ?\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1JhFLtgPvDx6BPqmKR9vFWARYXuLadRod" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "1 4 2 3 5",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Khi nhập a=10; và i=2 thì biến b là =\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=13_g0Iu_hrcDeJSdmCQFbvvwlyLhaaiFa" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi:
      "Nếu S1 và S2 là các câu lệnh và E là biểu thức logic thì\n\n\rIf E Then S1 Else S2\n\n\rGiả sử thời gian thực hiện các lệnh S1, S2 là O(f(n)) và O(g(n)) tương ứng. Khi đó thời gian thực hiện lệnh if là",
    dapAn: "O(max (f()n), g(n)))",
  },
  {
    cauHoi:
      "Biểu thức điều kiện để kiểm tra một phần tử thứ i của mảng A có nằm trong (-5;10) là ?\n\n\r1. (A[i] > -5) and (A[i] < 10)\n\n\r2. (-5 < A[i]) and (10 < A[i])",
    dapAn: "1 đúng, 2 đúng",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] sau đó nhập n =123 cho biết biến DC là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1ylu6iis-eK4IU1PTzerF21uSzeyj5VmZ" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "3",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] sau đó cho biết kết quả bang cac so\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1RAGLTMe3BAi3x3cwJbqO_ob-38LrpOB9" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "153,370,371,407",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] sau đó cho biết kết quả của biến sum1 là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1ZlLaha9QxPla9-xazG2KMe15_BvpBVaC" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "10",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] cho biết chức năng chính của hàm là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1eBOfzEJwNcxT_pkLzzj5EtSo3pigHDYx" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "sap xep day so tang dan",
  },
  {
    cauHoi: "Danh sách tuyến tính dạng ngăn xếp là:",
    dapAn:
      "Là một danh sách tuyến tính trong đó phép bổ sung một phần tử vào ngăn xếp và phép loại bỏ một phần tử khỏi ngăn xếp luôn luôn thực hiện ở một đầu gọi là đỉnh .",
  },
  {
    cauHoi:
      "Cho một ma trận thưa, hàng 1 có 2 phần tử F(11) , F(12) . Từ hàng thứ 2 chỉ có 3 phần tử F(k , k-1) ; F(k, k) ; F(k, k+1) , hàng cuối cùng cũng chỉ có 2 phần tử : F(n, n-1) ; F(n , n)\n\n\rHãy lưu trữ liên tiếp ưu tiên hàng của ma trận này thành một mảng một chiều : thí dụ F(11) là b(1) ; F(12) là b(2) ; F(21) là b(3) …\n\n\rNếu F(67) thì b(  )",
    dapAn: "17",
  },
  {
    cauHoi: "Có thể cài đặt danh sách bằng:",
    dapAn: ["Con trỏ", "Mảng"],
  },
  {
    cauHoi: "Trong các cấu trúc dữ liệu sau đâu là dữ liệu trừu tượng",
    dapAn: [
      "Cấu trúc dữ liệu dạng (StacK)",
      "Cấu trúc dữ liệu dạng danh sách(LIST)",
      "Cấu trúc dữ liệu kiểu hàng đợi(QUEUE)",
    ],
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . kết quả của chương trình là 0 1 1 2, ta cần nhập biến j=\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1onb1Lz3VhFO4BwmCCd-VDFZ5cbxBbAXd" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Cho biết kết quả của chương trình\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1MT5I47vYk9hcC7IWykPTaGHtRaMh6tAb" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "0 1 1 2 3 5 8 13 21 34",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Sinh viên cho biết lỗi dòng thứ mấy\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1Lsx8ubpGPtMM9ldIiAnoTJsZ6t-UYpfs" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "15",
  },
  {
    cauHoi: "Kiểu dữ liệu float có thể xử lí dữ liệu trong phạm vi nào",
    dapAn: "3.4*10-38-den-3.4*1038",
  },
  {
    cauHoi:
      "Cho dãy số {4 0 2 8 5 9 6 1 3 7}. áp dụng phương pháp sắp xếp chèn (Insert sort) sau lần lặp đầu tiên của giải thuật ta có kết quả:{0 4 2 8 5 9 6 1 3 7}. Dãy số thu được sau lần lặp thứ ba là:",
    dapAn: "{0-2-4-8-5-9-6-1-3-7}",
  },
  {
    cauHoi:
      'Danh sách khai báo bằng con trỏ. Thủ tục sau có chức năng gì?"\nvoid MnullList ( List Header)\n{\nNew (Header);\nHeader.Next : = Nil;\n}',
    dapAn: "thu-tuc-khoi-tao-danh-sach-rong",
  },
  {
    cauHoi: "Trường hợp đệ quy của giải thuật đệ qui là",
    dapAn:
      "là cơ chế đưa bài toán cần giải về một hay nhiều bài toán tương tự nhưng có quy mô nhỏ hơn",
  },
  {
    cauHoi: "Trường hợp cơ sở của giải thuật đệ quy là",
    dapAn:
      "trường hợp bài toán Pn, có quy mô đủ nhỏ để ta có thể giải trực tiếp.",
  },
  {
    cauHoi:
      "Danh sách khai báo bằng con trỏ. Hàm sau có chức năng gì?\nBoolean EList( ListvHeader )\n{\nElist = (Header.Next = Nil);\n}",
    dapAn: "kiem-tra-danh-sach-rong",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] đầu ra output là\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1QBehdLFF6wRqrS67Jqtp1Y4hxGt2vmv_" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "hello_World",
  },
  {
    cauHoi: "Ứng dụng của giải thuật đệ quy để giải các bài toán sau:",
    dapAn: [
      "Tìm kiếm trong danh sách liên kết",
      "Tính giai thừa của số nguyên n",
      "tháp Hà Nội",
    ],
  },
  {
    cauHoi:
      "Một danh sách trong đó tất cả các thao tác chèn thực hiện tại một đầu, thao tác xóa được thực hiện tại đầu kia của danh sách gọi là:",
    dapAn: "cay-nhi-phan.",
  },
  {
    cauHoi: "Có thể cài đặt danh sách bằng:",
    dapAn: ["Array", "Pointer"],
  },
  {
    cauHoi:
      "Cho dãy khoá 42,23,74,11,65,58,94,36\n\n\rLần lượt đưa dãy khoá trên vào cây nhị phân tìm kiếm. Nếu ta tìm kiếm trên cây nhị phân này thì trong trường hợp xấu nhất phải làm bao nhiêu phép so sánh",
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Khi nhập a=10; và i=2 thì biến b là =\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=13_g0Iu_hrcDeJSdmCQFbvvwlyLhaaiFa" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "2",
  },
  {
    cauHoi:
      "Cho dãy khoá 42,23,74,11,65,58,94,36\n\n\rLần lượt đưa dãy khoá trên vào cây nhị phân tìm kiếm. Bây giờ ta muốn tìm kiếm xem trong dãy khoá trên có khoá 60 không thì phải làm bao nhiêu phép so sánh:",
    dapAn: "4",
  },
  {
    cauHoi:
      'Sinh viên tải file [Tải về] . Cho biết chương trình trên lỗi ở dòng\n<a href="https://docs.google.com/uc?export=download&amp;confirm=no_antivirus&amp;id=1OlnPMeViAZEz_S0FO6MfP8AWymnDKaxZ" target="_blank" class="nn-down">Tải về</a>',
    dapAn: "20",
  },
];
const search = () => {
  let node1 = document.getElementById("myInput").value;
  let nodeDs = document.getElementById("dsCauHoi");
  console.log(node1);
  nodeDs.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].cauHoi.includes(node1) || arr[i].dapAn.includes(node1)) {
      nodeDs.innerHTML =
        nodeDs.innerHTML +
        `
            <p>
             <span> Câu hỏi số ${i} : </span> ${arr[i].cauHoi}
          </p>

             <Strong>Đáp án : </Strong> ${arr[i].dapAn}

            `;
    }
  }
};

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"));
