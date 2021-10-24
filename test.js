function autocomplete(inp) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].cauHoi.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].cauHoi.substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].cauHoi.substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i].cauHoi + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
let arr = [
    {
        cauHoi: "Biểu thức chính quy nào quy định 5 ký tự số?",
        dapAn: [
            "[0-9]{5}",
            "\\d{5}"
        ]
    },
    {
        cauHoi: "Bạn muốn kết thúc ứng dụng khi đóng cửa sổ JFrame thì cần thiết lập giá trị nào cho thuộc tính defaultCloseOperation?",
        dapAn: "EXIT_ON_CLOSE"
    },
    {
        cauHoi: "Bạn phải thực hiện những công việc gì trong công đoạn báo cáo kiểm thử?",
        dapAn: [
            "Phân loại kết quả kiểm thử",
            "Quản lý và phân tích kết quả kiểm thử",
            "Viết báo cáo các kết quả kiểm thử"
        ]
    },
    {
        cauHoi: "Bạn phải thực hiện những công việc gì trong công đoạn xây dựng kịch bản kiểm thử?",
        dapAn: [
            "Chuẩn bị dữ liệu kiểm thử",
            "Xây dựng kịch bản kiểm thử sản phẩm",
            "Đọc bản phân tích các yêu cầu của phầm mềm"
        ]
    },
    {
        cauHoi: "CREATE PROC sp_ThongKeNguoiHoc\nAS BEGIN\n SELECT\n  YEAR(NgayDK) Nam,\n  (*) SoLuong,\n  (NgayDK) DauTien,\n  (NgayDK) CuoiCung\n FROM NguoiHoc\n GROUP BY YEAR(NgayDK)\nEND",
        dapAn: "count,min,max"
    },
    {
        cauHoi: "CREATE TABLE ChuyenDe\n(\n MaCD NCHAR(5) NOT NULL,\n TenCD NVARCHAR(50) NOT NULL,\n  FLOAT NOT NULL,\n  INT NOT NULL,\n  NVARCHAR(50) NOT NULL,\n MoTa NVARCHAR(255) NOT NULL,\n PRIMARY KEY(MaCD)\n)",
        dapAn: "hocphi,thoiluong,hinh"
    },
    {
        cauHoi: "CREATE TABLE HocVien\n(\n MaHV INT IDENTITY(1,1) NOT NULL,\n MaKH INT NOT NULL,\n MaNH NCHAR(7) NOT NULL,\n Diem FLOAT NOT NULL,\n PRIMARY KEY(MaHV),\n FOREIGN KEY(MaNH) REFERENCES NguoiHoc(MaNH) ON DELETE NO ACTION ON UPDATE CASCADE,\n FOREIGN KEY(MaKH) REFERENCES KhoaHoc(MaKH)    \n)",
        dapAn: "on-update-cascade,on-delete-cascade"
    },
    {
        cauHoi: "CREATE TABLE NguoiHoc\n(\n MaNH NCHAR(7) NOT NULL,\n HoTen NVARCHAR(50) NOT NULL,\n NgaySinh DATE NOT NULL,\n GioiTinh BIT NOT NULL,\n DienThoai NVARCHAR(50) NOT NULL,\n Email NVARCHAR(50) NOT NULL,\n GhiChu NVARCHAR(max) NULL,\n MaNV NVARCHAR(50) NOT NULL,\n NgayDK DATE NOT NULL,\n PRIMARY KEY(MaNH),\n FOREIGN KEY(MaNV) REFERENCES NhanVien(MaNV)    \n)",
        dapAn: "on-delete-no-action,on-update-cascade"
    },
    {
        cauHoi: "CREATE TABLE NhanVien\n(\n MaNV NVARCHAR(50) NOT NULL,\n MatKhau NVARCHAR(50) NOT NULL,\n HoTen NVARCHAR(50) NOT NULL,\n  BIT NOT NULL,\n  (MaNV)\n)",
        dapAn: "vaitro,primary-key"
    },
    {
        cauHoi: "Cho 2 phát biểu về CSDL\n1. Xóa chuyên đề thì các khóa học của chuyên đề cũng bị xóa theo\n2. Cập nhật mã chuyên đề trên bảng chuyên đề thì các mã chuyên đề trên các khóa học của chuyên đề đó cũng được cập nhật theo",
        dapAn: "1 sai, 2 đúng"
    },
    {
        cauHoi: "Cho 2 phát biểu về các đối số của phương thức JdbcHelper.query(String sql, Object...args) như sau:\n1. sql là câu lệnh SQL hoặc lời gọi thủ tục lưu có thể chứa các dấu ?\n2. Danh sách các giá trị được sử dụng để đưa vào các dấu ? của tham số sql thứ nhất",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Cho 2 phát biểu về layout như sau:\n1. GridLayout chia container thành lưới với kích thước các ô bằng nhau\n2. FlowLayout sắp xếp các điều khiển từ trái sang phải và từ trên xuống dưới",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Cho 2 phát biểu về lớp tiện ích XDate đã giới thiệu trong bài học:\n1. XDate.toString(Date, String) sẽ giúp chuyển đổi một đối tượng thời gian sang chuỗi đúng với định dạng\n2. XDate.toDate(String, String) sẽ chuyển đổi một chuỗi có định dạng sang đối tượng thời gian",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Cho 3 phát biểu về phân tích yêu cầu khách hàng như sau:\n1. Phân tích là quá trình làm rõ yêu cầu của khách hàng\n2. Phân tích là việc xác nhận hiểu biết của bạn có giống như mong muốn của khách hàng hay không?\n3. Phân tích giúp chỉ rõ những phần việc phải thực hiện trong quá trình xây dựng phần mềm tiếp sau",
        dapAn: [
            "Phát biểu 1 đúng",
            "Phát biểu 2 đúng",
            "Phát biểu 3 đúng"
        ]
    },
    {
        cauHoi: "Cho các phát biểu về lớp tiện ích XImage như sau:\n1. XImage.save(File) sẽ lưu file vào thư mục logos của ứng dụng\n2. Ximage.read(String) sẽ đọc file hình từ thư mục logos",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Cho hai phát biểu sau?\n1. Chuyên đề là môn-đun môn học tổng hợp\n2. Khóa học là các lớp học được tổ chức cho một chuyên đề tại từng thời điểm khác nhau",
        dapAn: "Phát biểu 1 đúng, phát biểu 2 đúng"
    },
    {
        cauHoi: "Cho đoạn mã sau đây:\n    String sql = \"UPDATE NhanVien SET VaiTro=? WHERE MaNV=?\";\n    Class.forName(driver);\n    Connection conn = DriverManager.getConnection(dburl, user, pass);\n    PreparedStatement stmt = conn.prepareStatement(sql);\n    stmt.  ;\n    stmt.  ;\n    stmt.executeUpdate();\n    conn.close();\nHãy điền các phương thức còn thiếu vào ô trống để cập nhật nhân viên có mã là TeoNV trở thành trưởng phòng?",
        dapAn: "setboolean(1,true),setstring(2,\"teonv\")"
    },
    {
        cauHoi: "Cho đoạn mã sau:\n    Class.  (driver);\n  conn = DriverManager.getConnection(dburl, user, pass);\n    Statement stmt = conn.  ();\n    stmt.executeUpdate(sql);\n    conn.close();\nHãy điền vào các ô trống để có được đoạn mã lệnh hợp lý?",
        dapAn: "forname,connection,createstatement"
    },
    {
        cauHoi: "Chọn câu lệnh SQL đúng",
        dapAn: [
            "DELETE FROM NhanVien",
            "DELETE NhanVien",
            "SELECT * FROM NhanVien"
        ]
    },
    {
        cauHoi: "Chọn phát biểu đúng về LapTrinhCity",
        dapAn: "Là một trung tâm đào tạo các chuyên đề ngắn hạn"
    },
    {
        cauHoi: "Chọn phát biểu đúng về lý do cần thiết phải sử dụng DAO.",
        dapAn: [
            "Dễ dàng nâng cấp, sửa chữa",
            "Quản lý code làm việc với CSDL tập trung",
            "Tái sử dụng code đã viết"
        ]
    },
    {
        cauHoi: "Chức năng quản lý nào sau đây không được LapTrinhCity yêu cầu bạn phải thực hiện",
        dapAn: [
            "Quản lý các chuyên đề",
            "Quản lý các khóa học",
            "Quản lý học viên của các khóa học"
        ]
    },
    {
        cauHoi: "Chức năng tổng hợp thống kê nào sau đây không được LapTrinhCity yêu cầu bạn phải thực hiện",
        dapAn: "Bảng lương của nhân viên theo tháng"
    },
    {
        cauHoi: "Có bao nhiêu cửa sổ quản lý trong EduSys có giao diện được chia thành 2 tab bạn cần phải thiết kế?",
        dapAn: "4"
    },
    {
        cauHoi: "Có bao nhiêu tab trong cửa sổ thống kê?",
        dapAn: "4"
    },
    {
        cauHoi: "Cặp phương thức nào cho phép đọc/ghi dữ liệu trên ô nhập JTextField?",
        dapAn: "getText()/setText()"
    },
    {
        cauHoi: "Cặp phương thức nào cho phép đọc/ghi hình ảnh của JLabel?",
        dapAn: "getIcon()/setIcon()"
    },
    {
        cauHoi: "Cặp phương thức nào cho phép đọc/ghi nhãn của JLabel?",
        dapAn: "getText()/setText()"
    },
    {
        cauHoi: "Cặp phương thức nào cho phép đọc/ghi trạng thái của JCheckBox?",
        dapAn: "isSelected()/setSelected()"
    },
    {
        cauHoi: "Gọi phương thức chonAnh() của ChuyenDeJDialog để mở hộp thoại chọn file ảnh, lưu file ảnh vào thư mục logos, đọc lại ảnh từ thư mục logos, hiển thị ảnh lên nhãn lblHinh và ghi nhớ tên ảnh vào thuộc tính toolTipText của nhãn lblHinh. Hãy hoàn thiện mã cho phương thức chọn ảnh.\n    void chonAnh() {\n        if(fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION){\n            File file = fileChooser.getSelectedFile();\n            XImage.  (file); // lưu hình vào thư mục logos\n            ImageIcon icon = XImage.  (file.getName()); // đọc hình từ logos\n            lblHinh.  (icon);\n            lblHinh.setToolTipText(file.getName()); // giữ tên hình trong tooltip\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-FileChooser.png\">",
        dapAn: "save,read,seticon"
    },
    {
        cauHoi: "Gọi phương thức prev() để hiển thị nhân viên trước nhân viên hiện tại của bảng tblNhanVien lên form. Hãy hoàn thiện mã cho phương thức này.\n    void prev(){\n        if(this.row  >  0){\n            this.  ;\n            this.edit();\n        }\n    }",
        dapAn: "row--"
    },
    {
        cauHoi: "Hoàn thiện câu lệnh truy vấn tổng hợp lượng người học từng năm sau đây\n SELECT\n  YEAR(NgayDK) Nam,\n  COUNT(*) SoLuong,\n  MIN(NgayDK) DauTien,\n  MAX(NgayDK) CuoiCung\n FROM NguoiHoc\n GROUP BY",
        dapAn: "year(ngaydk)"
    },
    {
        cauHoi: "Hoàn thiện câu lệnh truy vấn tổng hợp điểm theo chuyên đề sau đây\n SELECT\n  ChuyenDe,\n  COUNT(MaHV) SoHV,\n  MIN(Diem) ThapNhat,\n  MAX(Diem) CaoNhat,\n  AVG(Diem) TrungBinh\n FROM KhoaHoc kh\n  JOIN HocVien hv ON kh.MaKH=hv.MaKH\n  JOIN ChuyenDe cd ON cd.MaCD=kh.MaCD\n GROUP BY TenCD",
        dapAn: "tencd"
    },
    {
        cauHoi: "Hoàn thiện lớp HocVienDAO như trong bài học\npublic class HocVienDAO extends EduSysDAO <  ,  > {\n    ...\n}",
        dapAn: "hocvien,integer"
    },
    {
        cauHoi: "Hoàn thiện lớp thực thể HocVien như đã phân tích trong bài học\npublic class HocVien {\n    private  maHV;\n    private int maKH;\n    private  maNH;\n    private  diem;\n    getters/setters\n}",
        dapAn: "int,string,double"
    },
    {
        cauHoi: "Hoàn thiện phương thức delete() của lớp HocVienDAO như đã hướng dẫn trong bài học\n    public void delete(Integer MaHV){\n        String sql=\"DELETE FROM HocVien WHERE MaHV=?\";\n        XJdbc.update(sql,  );\n    }",
        dapAn: "mahv"
    },
    {
        cauHoi: "Hoàn thiện phương thức insert() của lớp HocVienDAO như đã hướng dẫn trong bài học\n    public void insert(HocVien model){\n        String sql=\"INSERT INTO HocVien(MaKH, MaNH,  ) VALUES(?, ?, ?)\";\n        XJdbc.update(sql, \n                model.getMaKH(), \n                model.getMaNH(), \n                model.  ());\n    }",
        dapAn: "diem,getdiem"
    },
    {
        cauHoi: "Hoàn thiện phương thức update() của lớp HocVienDAO như đã hướng dẫn trong bài học\n    public void update(HocVien model){\n        String sql=\"UPDATE HocVien SET MaKH=?,  =?, Diem=? WHERE MaHV=?\";\n        XJdbc.update(sql, \n                model.getMaKH(), \n                model.getMaNH(), \n                model.getDiem(), \n                model.  ());\n    }",
        dapAn: "manh,getmahv"
    },
    {
        cauHoi: "Hoàn thiện phương thức xóa của NhanVienDAO\n    public void delete(String MaNV){\n        String sql=\"    NhanVien WHERE MaNV=?\";\n        XJdbc.  (sql, MaNV);\n    }",
        dapAn: "delete,from,update"
    },
    {
        cauHoi: "Hoàn thiện đoạn mã sau để có thể chuyển đổi chuỗi s có dạng ngày-tháng-năm sang đối tượng Date.\ntry{\n Date ngay = XDate.  (s, “dd-MM-yyyy”);\n}\ncatch(Exception e){\n MsgBox.alert(this, “Không đúng dạng ngày”);\n}",
        dapAn: "todate"
    },
    {
        cauHoi: "Hoàn thành cấu trúc thủ tục lưu sau đây\nCREATE  MyProc()\nAS BEGIN\n    \nEND",
        dapAn: "procedure"
    },
    {
        cauHoi: "Hãy sắp xếp theo thứ tự xuất hiện của các cửa sổ trong sản phẩm mục tiêu?\n1.  \n2.  \n3.",
        dapAn: "cua-so-chao,cua-so-dang-nhap,cua-so-giao-dien-chinh"
    },
    {
        cauHoi: "Hãy điền vào các ô trống để hoàn thiện lớp tiện ích MsgBox \npublic class MsgBox {\n    public static void alert(Component parent, String message) {\n        JOptionPane.  (parent, message, \n                \"Hệ thống quản lý đào tạo\", JOptionPane.INFORMATION_MESSAGE);\n    }\n    public static boolean confirm(Component parent, String message) {\n        int result = JOptionPane.  (parent, message, \n                \"Hệ thống quản lý đào tạo\", \n                JOptionPane.YES_NO_OPTION, JOptionPane.QUESTION_MESSAGE);\n        return result == JOptionPane.YES_OPTION;\n    }\n    public static String prompt(Component parent, String message) {\n        return JOptionPane.  (parent, message, \n                \"Hệ thống quản lý đào tạo\", JOptionPane.INFORMATION_MESSAGE);\n    }\n}",
        dapAn: "showmessagedialog,showconfirmdialog,showinputdialog"
    },
    {
        cauHoi: "Hãy điền vào các ô trống để hoàn thiện lớp tiện ích XDate theo như hướng dẫn trong bài học.\n\npublic class XDate {\n    static SimpleDateFormat formater = new SimpleDateFormat();\n    public static Date  (String date, String pattern) {\n        try {\n            formater.applyPattern(pattern);\n            return formater.parse(date);\n        } \n        catch (ParseException ex) {\n            throw new RuntimeException(ex);\n        }\n    }\n    public static String  (Date date, String pattern) {\n        formater.applyPattern(pattern);\n        return formater.format(date);\n    }\n    public static Date  (Date date, long days) {\n        date.setTime(date.getTime() + days*24*60*60*1000);\n        return date;\n    }\n}",
        dapAn: "todate,tostring,adddays"
    },
    {
        cauHoi: "Hãy điền vào các ô trống để khai báo biến message sau đây có thể truy xuất bất kỳ trong lớp nào của ứng dụng thông qua tên lớp (MyClass.message):\npublic class MyClass{\n    String message;\n}",
        dapAn: "public,static"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql delete một chuyên đề theo mã\n\"  FROM ChuyenDe WHERE MaCD=?\"",
        dapAn: "delete"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql delete một khóa học theo mã\n\"DELETE FROM KhoaHoc WHERE  =?\"",
        dapAn: "makh"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql delete một người học theo mã\n\"DELETE FROM  WHERE MaNH=?\"",
        dapAn: "nguoihoc"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql insert một chuyên đề vào CSDL\n\"INSERT INTO ChuyenDe (MaCD, TenCD,  , ThoiLuong,  , MoTa) VALUES (?, ?, ?, ?, ?, ?)\"",
        dapAn: "hocphi,hinh"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql insert một người học vào CSDL\n\"INSERT INTO NguoiHoc (MaNH, HoTen,  , GioiTinh, DienThoai,  , GhiChu, MaNV) VALUES (?, ?, ?, ?, ?, ?, ?, ?)\"",
        dapAn: "ngaysinh,email"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql select một chuyên đề theo mã\n\"SELECT *  ChuyenDe WHERE MaCD=?\"",
        dapAn: "from"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql select một khóa học theo mã\n\"SELECT * FROM  WHERE MaKH=?\"",
        dapAn: "khoahoc"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql select một người học theo mã\n\"SELECT  FROM NguoiHoc WHERE MaNH=?\"",
        dapAn: "*"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql update một KhoaHoc theo mã\n\"UPDATE KhoaHoc  MaCD=?, HocPhi=?, ThoiLuong=?, NgayKG=?, GhiChu=?, MaNV=? WHERE  =?\"",
        dapAn: "set,makh"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql update một người học theo mã\n\"UPDATE NguoiHoc SET HoTen=?, NgaySinh=?, GioiTinh=?,  =?, Email=?, GhiChu=?, MaNV=  WHERE MaNH=?\"",
        dapAn: "dienthoai,?"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện lớp KhoaHocDAO\npublic class KhoaHocDAO extends EduSysDAO <  ,  > {\n     ...\n}",
        dapAn: "khoahoc,integer"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện lớp thực thể ChuyenDe\npublic class ChuyenDe {\n    private String maCD;\n    private String  ;\n    private  hocPhi;\n    private  thoiLuong;\n    private String hinh;\n    private String moTa;\n\n    getters/setters\n}",
        dapAn: "tencd,double,int"
    },
    {
        cauHoi: "Hãy điền vào ô trống để mở trang web index.html trong thư mục help trên trình duyệt:\nDesktop.getDesktop().  (new File(\"help/index.html\").toURI());",
        dapAn: "browse"
    },
    {
        cauHoi: "Hình trên nêu ra các bước lập trình JDBC cơ bản. Hãy điền các thành phần còn thiếu vào các ô:\n4.  \n5.  \n8.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB2.png\">",
        dapAn: "executeupdate,executequery,close"
    },
    {
        cauHoi: "JFrame và JDialog khác nhau ở điểm nào?\n1. Không có sự khác biệt\n2. JFrame là một cửa sổ độc lập trong khi đó JDialog phụ thuộc vào một JFrame khác.",
        dapAn: "1 sai, 2 đúng"
    },
    {
        cauHoi: "JProgressBar có những thuộc tính nào?",
        dapAn: [
            "maximum",
            "minimum",
            "stringPainted",
            "value"
        ]
    },
    {
        cauHoi: "JdbcHelper.query() không đóng kết nối là vì:",
        dapAn: "Cần kết nối để đọc dữ liệu từ ResultSet"
    },
    {
        cauHoi: "Khi chọn một chuyên đề thì khóa học thay đổi theo chuyên đề. Phương thức fillComboBoxKhoaHoc() chỉ hiển thị những khóa học theo chuyên đề được chọn. Hãy hoàn thiện phương thức này\n    void fillComboBoxKhoaHoc(){\n        DefaultComboBoxModel model = (DefaultComboBoxModel) cboKhoaHoc.getModel();\n        model.removeAllElements();\n        ChuyenDe chuyenDe = (ChuyenDe) cboChuyenDe.  ();\n        if(chuyenDe != null){\n            List < KhoaHoc >  list = khdao.  (chuyenDe.getMaCD());\n            for(KhoaHoc kh: list){\n                model.addElement(kh);\n            }\n            this.fillTableHocVien();\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "getselecteditem,selectbychuyende"
    },
    {
        cauHoi: "Khi kiểm thử Case 5, kết quả mong đợi của bạn là gì?\n1. Thông báo lỗi \"Vui lòng đăng nhập với TeoNV, songlong\"\n2. Thông báo lỗi \"Vui lòng không để trống tên đăng nhập và mật khẩu\"\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Login.png\">",
        dapAn: "1 sai, 2 đúng"
    },
    {
        cauHoi: "Khi thay đổi chuyên đề trên ComboBox sẽ gọi phương thức chonChuyenDe() để thực hiện việc hiển thị thông tin mặc định của khóa học  được lấy từ chuyên đề được chọn, đổ lại dữ liệu trên bảng, cập nhật trạng thái form… Hãy hoàn thiện phương thức này\n    void chonChuyenDe(){\n        ChuyenDe chuyenDe = (ChuyenDe) cboChuyenDe.  ();\n        txtThoiLuong.setText(String.valueOf(chuyenDe.  ()));\n        txtHocPhi.setText(String.valueOf(chuyenDe.  ()));\n        lblTenCD.setText(chuyenDe.getTenCD());\n        txtGhiChu.setText(chuyenDe.getTenCD());\n        \n        this.fillTable();\n        this.row = -1;\n        this.updateStatus();\n        tabs.setSelectedIndex(1);\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Course.png\">",
        dapAn: "getselecteditem,getthoiluong,gethocphi"
    },
    {
        cauHoi: "Khi xây dựng dữ liệu mẫu để kiểm thử cho chức năng nhập điểm, bạn sẽ đưa ra những dữ liệu gì?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: [
            "Số lớn hơn 10",
            "Số từ 0 đến 10",
            "Số âm",
            "Để trống hoặc ký tự bất kỳ"
        ]
    },
    {
        cauHoi: "Khóa học là lớp học được tạo ra từ một chuyên đề nào đó. Hãy giải thích tại sao trong khóa học lại có học phí trong khi đó học phí đã được quy định trong chuyên đề",
        dapAn: "Học phí của khóa học là học phí của chuyên đề tại thời điểm tạo khóa học. Học phí của mỗi khóa học sẽ không đổi trong khi học phí của chuyên đề có thể thay đổi theo thời gian."
    },
    {
        cauHoi: "Kiểm thử phần mềm bao gồm những công việc nào?",
        dapAn: [
            "Phân tích kết quả kiểm thử và viết báo cáo lỗi",
            "Thực hiện kiểm thử theo kịch bản",
            "Xây dựng kịch bản kiểm thử"
        ]
    },
    {
        cauHoi: "Kết quả của ThongKeDAO.getBangDiem() cho chúng ta List < Object[] >  (mỗi phần tử trong List là một mảng). Hãy chọn phát biểu đúng về mảng này.",
        dapAn: [
            "Object[0] là mã người học và có kiểu là String",
            "Object[1] là họ và tên người học và có kiểu là String",
            "Object[2] là điểm và có kiểu là Integer"
        ]
    },
    {
        cauHoi: "Kết quả thực hiện của phương thức executeUpdate() của Statement cho chúng ta biết điều gì?",
        dapAn: "Số lượng bản ghi bị thay đổi"
    },
    {
        cauHoi: "Layout nào chia container thành lưới với kích thước các ô luôn bằng nhau?",
        dapAn: "GridLayout"
    },
    {
        cauHoi: "Layout nào cho phép container sắp xếp các các thành phần giao diện nối tiếp nhau từ trái sang phải từ trên xuống dưới.",
        dapAn: "FlowLayout"
    },
    {
        cauHoi: "Lệnh nào được sử dụng để cập nhật vai trò của nhân viên có mã số là A?",
        dapAn: [
            "JdbcHelper.update(\"UPDATE NhanVien SET VaiTro=1 WHERE MaNV='A'\")",
            "JdbcHelper.update(\"UPDATE NhanVien SET VaiTro=1 WHERE MaNV=?\", \"A\")",
            "JdbcHelper.update(\"UPDATE NhanVien SET VaiTro=? WHERE MaNV=?\", 1, \"A\")"
        ]
    },
    {
        cauHoi: "Lớp tiện ích XImage có những phương thức nào?",
        dapAn: [
            "XImage.getAppIcon()",
            "XImage.read()",
            "XImage.save()"
        ]
    },
    {
        cauHoi: "Mã điều khiển của cửa sổ ChuyenDeJDialog sử dụng những lớp nào?",
        dapAn: [
            "ChuyenDeDAO",
            "XImage"
        ]
    },
    {
        cauHoi: "Mã điều khiển của cửa sổ KhoaHocJDialog sử dụng những DAO nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Course.png\">",
        dapAn: [
            "ChuyenDeDAO",
            "KhoaHocDAO"
        ]
    },
    {
        cauHoi: "Môn học dự án mẫu bạn sẽ thực hiện điều gì?",
        dapAn: "Tất cả các phát biểu khác đều đúng"
    },
    {
        cauHoi: "Một chuyên đề có thể tổ chức bao nhiêu khóa học?",
        dapAn: "Bao nhiêu khóa cũng được"
    },
    {
        cauHoi: "Mục tiêu của bài học này là gì?",
        dapAn: [
            "Mô hình hóa được hệ thống",
            "Mô tả chính xác các chức năng của hệ thống",
            "Vẽ được sơ đồ use cases",
            "Xác định được mối quan hệ giữa các thực thể"
        ]
    },
    {
        cauHoi: "Mục đích của kiểm thử phần mềm là gì?\n1. Đảm bảo chất lượng của sản phẩm trước khi xuất bản\n2. Phụ thuộc vào mục đích của khách hàng",
        dapAn: "1 đúng, 2 sai"
    },
    {
        cauHoi: "NhanVienJDialog sử dụng DAO và Entity nào để làm việc với CSDL?",
        dapAn: "NhanVien/NhanVienDAO"
    },
    {
        cauHoi: "Phân tích là quá trình?",
        dapAn: "Nghiên cứu yêu cầu đưa ra từ khách hàng"
    },
    {
        cauHoi: "Phương thức ResultSet.next() làm công việc gì?",
        dapAn: "Đọc bản ghi tiếp theo vào ứng dụng"
    },
    {
        cauHoi: "Phương thức clearForm() được gọi để xóa trắng form đồng thời cập nhật lại trạng thái của form. Hãy hoàn thiện clearForm()\n    void clearForm(){\n        NhanVien nv = new  ();\n        this.setForm(  );\n        this.row = -1;\n        this.updateStatus();\n    }",
        dapAn: "nhanvien,nv"
    },
    {
        cauHoi: "Phương thức edit() lấy mã nhân viên tại vị trí của hàng hiện tại (this.row). Sau đó truy vấn thông tin nhân viên từ CSDL và hiển thị lên form và chọn tab thứ nhất đồng thời cập nhật lại trạng thái form. Hãy hoàn thiện mã cho edit().\n    void edit() {\n        String manv = (String) tblNhanVien.getValueAt(this.row,  );\n        NhanVien nv = dao.  (manv);\n        this.setForm(nv);\n        tabs.  (0);\n        this.updateStatus();\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Table.png\">",
        dapAn: "0,selectbyid,setselectedindex"
    },
    {
        cauHoi: "Phương thức executeQuery() của Statement trả về kết quả là gì?",
        dapAn: "ResultSet"
    },
    {
        cauHoi: "Phương thức executeUpdate() của Statement trả về kết quả là gì?",
        dapAn: "int"
    },
    {
        cauHoi: "Phương thức fillComboBoxNam() của NhanVienJDialog đổ những năm có khai giảng vào ComboBox. Hãy hoàn thiện mã cho phương thức này\n    void fillComboBoxNam(){\n        DefaultComboBoxModel model = (DefaultComboBoxModel) cboNam.getModel();\n        model.removeAllElements();\n        List < Integer >  list = khdao.  ();\n        for(Integer year : list){\n            model.addElement(year);\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Report-Revenue.png\">",
        dapAn: "selectyears"
    },
    {
        cauHoi: "Phương thức fillTable() của NguoiHocJDialog chỉ lọc lấy dánh sách người học có họ và tên chứa chuỗi tìm kiếm. Hãy hoàn thiện phương thức này.\n    void fillTable() {\n        DefaultTableModel model = (DefaultTableModel) tblNguoiHoc.getModel();\n        model.setRowCount(0);\n        try {\n            String keyword = txtTimKiem.  ();\n            List < NguoiHoc >  list = dao.  (keyword);\n            for (NguoiHoc nh : list) {\n                Object[] row = {\n                    nh.getMaNH(),\n                    nh.getHoTen(),\n                    nh.getGioiTinh()?\"Nam\":\"Nữ\",\n                    XDate.toString(nh.getNgaySinh(), \"MM/dd/yyyy\"),\n                    nh.getDienThoai(),\n                    nh.getEmail(),\n                    nh.getMaNV(),\n                    XDate.toString(nh.getNgayDK(), \"MM/dd/yyyy\")\n                };\n                model.addRow(row);\n            }\n        } \n        catch (Exception e) {\n            MsgBox.alert(this, \"Lỗi truy vấn dữ liệu!\");\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Table-Learner.png\">",
        dapAn: "gettext,selectbykeyword"
    },
    {
        cauHoi: "Phương thức fillTable() được sử dụng để truy vấn và đỗ toàn bộ nhân viên lên bảng. Hãy hoàn thiện phương thức này.\n    void fillTable() {\n        DefaultTableModel model = (DefaultTableModel) tblNhanVien.  ();\n        model.setRowCount(0);\n        try {\n            List < NhanVien >  list = dao.  ();\n            for (NhanVien nv : list) {\n                Object[] row = {\n                    nv.getMaNV(),\n                    nv.getMatKhau(),\n                    nv.getHoTen(),\n                    nv.getVaiTro()?\"Trưởng phòng\":\"Nhân viên\"\n                };\n                model.  (row);\n            }\n        } \n        catch (Exception e) {\n            MsgBox.alert(this, \"Lỗi truy vấn dữ liệu!\");\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Table.png\">",
        dapAn: "getmodel,selectall,addrow"
    },
    {
        cauHoi: "Phương thức fillTableDiemChuyenDe() của NhanVienJDialog truy vấn và hiển thị điểm từng chuyên đề. Hãy hoàn thiện mã cho phương thức này\n    void fillTableDiemChuyenDe() {\n        DefaultTableModel model = (DefaultTableModel) tblDiemChuyenDe.getModel();\n        model.setRowCount(0);\n        List < Object[] >  list = dao.getDiemChuyenDe();\n        for(Object[] row : list){\n            model.addRow(new Object[]{row[0], row[1], row[2], row[3], String.format(\"%.1f\", row[4])});\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Report-Subject.png\">",
        dapAn: "getDiemChuyenDe"
    },
    {
        cauHoi: "Phương thức fillTableNguoiHoc() của HocVienJDialog đỗ dữ liệu những người học không tham gia vào khóa học được chọn đồng thời phải có họ và tên chứa chuỗi tìm kiếm. Hãy hoàn thiện phương thức này\n    void fillTableNguoiHoc(){\n        DefaultTableModel model = (DefaultTableModel) tblNguoiHoc.getModel();\n        model.setRowCount(0);\n        KhoaHoc khoaHoc = (KhoaHoc) cboKhoaHoc.getSelectedItem();\n        String keyword = txtTimKiem.getText();\n        List < NguoiHoc >  list = nhdao.selectNotInCourse(  .getMaKH(),  );\n        for(NguoiHoc nh: list){\n            model.addRow(new Object[]{\n                nh.getMaNH(),\n                nh.getHoTen(),\n                nh.getGioiTinh()?\"Nam\":\"Nữ\",\n                nh.getNgaySinh(),\n                nh.getDienThoai(),\n                nh.getEmail()\n            });                \n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Learner.png\">",
        dapAn: "khoahoc,keyword"
    },
    {
        cauHoi: "Phương thức getBangDiem() của ThongKeDAO gọi thủ tục lưu sp_BangDiem() để truy vấn bảng điểm của một khóa học. Hãy hoàn thiện phương thức này.\n    public List <  >  getBangDiem(Integer makh){\n        String sql = \"{  sp_BangDiem (?)}\";\n        String[] cols = {\"MaNH\", \"HoTen\", \"Diem\"};\n        return this.getListOfArray(sql, cols, makh);\n    }",
        dapAn: "object[],call"
    },
    {
        cauHoi: "Phương thức getForm() của NguoiHocJDialog được sử dụng để tạo đối tượng người học với thông tin được lấy từ form nhập. Ngoài ra cần phải có thêm thông tin nhân viên tạo người học này được lấy từ thông tin của người đăng nhập. Hãy hoàn thiện mã cho phương thức getForm()\n    NguoiHoc getForm() {\n        NguoiHoc nh = new NguoiHoc();\n        nh.setMaNH(txtMaNH.getText());\n        nh.setHoTen(txtHoTen.getText());\n        nh.setGioiTinh(rdoNam.isSelected());\n        nh.setNgaySinh(XDate.toDate(txtNgaySinh.getText(), \"MM/dd/yyyy\"));\n        nh.setDienThoai(txtDienThoai.getText());\n        nh.setEmail(txtEmail.getText());\n        nh.setGhiChu(txtGhiChu.getText());\n        nh.setMaNV(  );\n        nh.setNgayDK(new Date());\n        return nh;\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Learner.png\">",
        dapAn: "auth.user.getmanv()"
    },
    {
        cauHoi: "Phương thức getForm() sẽ tạo ra một đối tượng nhân viên với dữ liệu được lấy từ form người sử dụng nhập vào. Hãy hoàn thiện phương thức này.\n  getForm(){\n        NhanVien nv = new NhanVien();\n        nv.setMaNV(txtMaNV.getText());\n        nv.setHoTen(txtHoTen.getText());\n        nv.setMatKhau(new String(txtMatKhau.getPassword()));\n        nv.setVaiTro(rdoTruongPhong.  ());\n        return nv;\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Form.png\">",
        dapAn: "nhanvien,isselected"
    },
    {
        cauHoi: "Phương thức getListOfArray() của ThongKeDAO gọi thủ tục lưu \nprivate List < Object[] >  getListOfArray(String sql, String[] cols, Object...args){...}\nTrong đó:\n+ sql: lời gọi thủ tục lưu có thể chứa tham số (?)\n+ args: các giá trị tham số cung cấp cho lời gọi thủ tục lưu\n+ cols: cấu trúc kết quả nhận được\nGiả sử cho sql và cols như sau:\n        String sql = \"{CALL sp_BangDiem (?)}\";\n        String[] cols = {\"MaNH\", \"HoTen\", \"Diem\"};\nHãy chọn lời gọi thủ tục lưu để truy vấn bảng điểm của khóa học có mã là 100",
        dapAn: "getListOfArray(sql, cols, 100)"
    },
    {
        cauHoi: "Phương thức getSelectedFile() cho kết quả là gì?",
        dapAn: "Đối tượng của File được chọn"
    },
    {
        cauHoi: "Phương thức init() của NhanVienJDialog được gọi trong initComponents() của của sổ.\n    void init(){\n  (null); // đưa cửa sổ ra giữa màn hình\n        this.  (); // đổ dữ liệu nhân viên vào bảng\n        this.  (); // cập nhật trạng thái form\n    }\nHãy hoàn thiện phương thức init() theo phần comment",
        dapAn: "setlocationrelativeto,filltable,updatestatus"
    },
    {
        cauHoi: "Phương thức insert() của NhanVienJDialog được gọi để thêm mới một nhân viên với dữ liệu từ form. Hãy hoàn thành mã cho phương thức này.\n    void insert(){\n        NhanVien nv = this.getForm();\n        String mk2 = new String(txtMatKhau2.getPassword());\n        if(!mk2.equals(nv.getMatKhau())){\n            MsgBox.alert(this, \"Xác nhận mật khẩu không đúng!\");\n        }\n        else{\n            try {\n                dao.  (nv); // thêm mới\n                this.  (); // đổ lại bảng\n                this.  (); // xóa trắng form\n                MsgBox.alert(this, \"Thêm mới thành công!\");\n            } \n            catch (Exception e) {\n                MsgBox.alert(this, \"Thêm mới thất bại!\");\n            }\n        }\n    }",
        dapAn: "insert,filltable,clearform"
    },
    {
        cauHoi: "Phương thức length() của lớp String giúp bạn lập trình sửa được những lỗi nào?",
        dapAn: [
            "Để trống",
            "Độ dài chuỗi"
        ]
    },
    {
        cauHoi: "Phương thức nào cho phép vô hiệu hóa/kích hoạt trạng thái nút (JButton)?",
        dapAn: "setEnable()"
    },
    {
        cauHoi: "Phương thức nào của JTable cho phép lấy tổng số hàng hiện tại của nó?",
        dapAn: "getRowCount()"
    },
    {
        cauHoi: "Phương thức nào của JTable cho phép lấy vị trí của hàng được chọn đầu tiên?",
        dapAn: "getSelectedRow()"
    },
    {
        cauHoi: "Phương thức nào của JdbcHelper sau khi thực hiện chưa đóng kết nối?",
        dapAn: [
            "getStmt()",
            "query()"
        ]
    },
    {
        cauHoi: "Phương thức nào của lớp String giúp bạn kiểm tra một chuỗi có so khớp (đối sánh) với một biểu thức chính quy hay không?",
        dapAn: "matches()"
    },
    {
        cauHoi: "Phương thức nào của lớp tiện ích trả về kết quả là boolean?",
        dapAn: "MsgBox.confirm(String)"
    },
    {
        cauHoi: "Phương thức nào giúp bạn chuyển một chuỗi thành số nguyên?",
        dapAn: "Integer.valueOf(String)"
    },
    {
        cauHoi: "Phương thức nào giúp bạn chuyển một chuỗi thành số nguyên?",
        dapAn: [
            "Integer.parseInt(String)",
            "Integer.valueOf(String)"
        ]
    },
    {
        cauHoi: "Phương thức nào là của Connection?",
        dapAn: [
            "createStatement()",
            "prepareCall()",
            "prepareStatement()"
        ]
    },
    {
        cauHoi: "Phương thức nào là của JTable?",
        dapAn: [
            "getRowCount()",
            "getSelectedRow()",
            "getValueAt(row, col)"
        ]
    },
    {
        cauHoi: "Phương thức nào được sử dụng để nạp driver vào ứng dụng?",
        dapAn: "Class.forName()"
    },
    {
        cauHoi: "Phương thức removeHocVien() của HocVienJDialog được gọi khi click nút [Xóa khỏi khóa học] để xóa những học viên được chọn trên bảng học viên khỏi khóa học và đổ lại dữ liệu cho 2 bảng tblHocVien và tblNguoiHoc. Hãy hoàn thiện phương thức này.\n    void removeHocVien(){\n            int[] rows = tblHocVien.  ();\n            if(rows.length  >  0 && \n                    MsgBox.confirm(this, \"Bạn muốn xóa các học viên được chọn?\")){\n                for(int row : rows){\n                    int mahv = (Integer) tblHocVien.getValueAt(row,  );\n                    hvdao.delete(mahv);\n                }\n                this.fillTableHocVien();\n            }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "getselectedrows,0"
    },
    {
        cauHoi: "Phương thức selectByChuyenDe() của KhoaHocDAO truy vấn danh sách các khóa học theo mã chuyên đề để đỗ dữ liệu lên bảng khóa học. Hãy hoàn thiện mã cho phương thức này\n    public List < KhoaHoc >  selectByChuyenDe(String macd){\n        String sql=\"SELECT * FROM  WHERE  =?\";\n        return this.selectBySql(sql, macd);\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Table-Course.png\">",
        dapAn: "khoahoc,macd"
    },
    {
        cauHoi: "Phương thức selectByKeyword() của NguoiHocDAO chỉ truy vấn những người học có họ và tên chứa chuỗi tìm kiếm. Hãy hoàn thiện phương thức này\n    public List < NguoiHoc >  selectByKeyword(String keyword){\n        String sql=\"SELECT * FROM NguoiHoc WHERE HoTen  ?\";\n        return this.selectBySql(sql, \"%\"+keyword+\"%\");\n    }",
        dapAn: "like"
    },
    {
        cauHoi: "Phương thức selectBySql(String sql, Object...args) của NguoiHocDAO cho phép truy vấn danh sách người học theo câu lệnh SQL và giá trị các tham số ?. Hãy cho biết đoạn mã nào sau đây là đúng?",
        dapAn: [
            "String sql=\"SELECT * FROM NguoiHoc WHERE HoTen LIKE '%Nguyễn '\";\nList < NguoiHoc >  list = this.selectBySql(sql);",
            "String sql=\"SELECT * FROM NguoiHoc WHERE HoTen LIKE ?\";\nList < NguoiHoc >  list = this.selectBySql(sql, \"%Nguyễn \");"
        ]
    },
    {
        cauHoi: "Phương thức selectBySql(String sql, Object...args) của NhanVienDAO cho phép truy vấn danh sách nhân viên tùy thuộc vào câu lệnh SQL và các giá trị cung cấp cho các vị trí dâu ? trong câu lệnh SQL. Lời gọi nào sau đây là hợp lệ?",
        dapAn: [
            "List < NhanVien >  list = selectBySql(\"SELECT * FROM NhanVien WHERE MaNV='TeoNV'\")",
            "List < NhanVien >  list = selectBySql(\"SELECT * FROM NhanVien WHERE MaNV=?\", \"TeoNV\")",
            "List < NhanVien >  list = selectBySql(\"SELECT * FROM NhanVien\")"
        ]
    },
    {
        cauHoi: "Phương thức selectBySql(String sql, Object...args) của NhanVienDAO cho phép truy vấn danh sách nhân viên tùy thuộc vào câu lệnh SQL và các giá trị cung cấp cho các vị trí dâu ? trong câu lệnh SQL. Phương thức selectAll() sử dụng phương thức selectBySql() để truy vấn tất cả nhân viên có trong CSDL. Hãy hoàn thiện phương thức này:\n    public List <  >  selectAll(){\n        String sql=\"SELECT * FROM NhanVien\";\n        return this.selectBySql(sql);\n    }",
        dapAn: "nhanvien"
    },
    {
        cauHoi: "Phương thức selectBySql(String sql, Object...args) của NhanVienDAO cho phép truy vấn danh sách nhân viên tùy thuộc vào câu lệnh SQL và các giá trị cung cấp cho các vị trí dâu ? trong câu lệnh SQL. Phương thức selectById() sử dụng phương thức selectBySql() để truy vấn một nhân viên theo mã nhân viên. Hãy hoàn thiện phương thức này:\n    public NhanVien selectById(String manv){\n        String sql=\"SELECT * FROM NhanVien WHERE MaNV=?\";\n        List < NhanVien >  list = this.selectBySql(sql, manv);\n        return list.  ()  >  0 ? list.get(  ) : null;\n    }",
        dapAn: "size,0"
    },
    {
        cauHoi: "Phương thức selectNotInCourse() của NguoiHocDAO truy vẫn danh sách người học không tham gia vào khóa học và có họ và tên chứa chuỗi tìm kiếm. Hãy hoàn thiện phương thức này\n    public List < NguoiHoc >  selectNotInCourse(int makh, String keyword) {\n        String sql=\"SELECT * FROM NguoiHoc \"\n                + \" WHERE HoTen  ? AND \"\n                + \" MaNH  (SELECT MaNH FROM HocVien WHERE MaKH=?)\";\n        return this.selectBySql(sql, \"%\"+keyword+\"%\", makh);\n    }",
        dapAn: "like,not-in"
    },
    {
        cauHoi: "Phương thức selectTab() của ThongKeJDialog được sử dụng để chọn Tab theo vị trí. Hãy hoàn thiên phương thức này.\n    public void selectTab(int index){\n        tabs.  (index);\n    }",
        dapAn: "setselectedindex"
    },
    {
        cauHoi: "Phương thức selectYears() của KhoaHocDAO được sử dụng để truy vấn các năm có khai giảng các khóa học. Hãy hoàn thiên phương thức này.\n    public List < Integer >  selectYears() {\n        String sql=\"SELECT  year(NgayKG) FROM KhoaHoc ORDER BY Year DESC\";\n        List < Integer >  list=new ArrayList <  > ();\n        try {\n           ResultSet rs = XJdbc.query(sql);\n           while(rs.next()){\n                 list.add(rs.getInt(1));\n            }\n            rs.getStatement().getConnection().close();\n            return list;\n        } \n        catch (SQLException ex) {\n            throw new RuntimeException(ex);\n        }\n    }",
        dapAn: "distinct"
    },
    {
        cauHoi: "Phương thức setForm() của ChuyenDeJDialog được sử dụng để hiển thị thông tin đối tượng chuyên đề lên form form. Hãy hoàn thiện mã cho phương thức setForm()\n    void setForm(ChuyenDe cd){\n        txtMaCD.setText(cd.getMaCD());\n        txtTenCD.setText(cd.getTenCD());\n        txtThoiLuong.setText(String.valueOf(cd.getThoiLuong()));\n        txtHocPhi.setText(String.valueOf(cd.getHocPhi()));\n        txtMota.setText(cd.getMoTa());\n        if(cd.getHinh() != null){\n            lblHinh.  (cd.getHinh());\n            lblHinh.  (XImage.read(cd.getHinh()));\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Sub.png\">",
        dapAn: "settooltiptext,seticon"
    },
    {
        cauHoi: "Phương thức setForm() được sử dụng để hiển thị thông tin của một đối tượng nhân viên lên form. Hãy hoàn thiện phương thức này.\n    void setForm(NhanVien nv){\n        txtMaNV.setText(  .getMaNV());\n        txtHoTen.setText(nv.getHoTen());\n        txtMatKhau.setText(nv.getMatKhau());\n        txtMatKhau2.setText(nv.getMatKhau());\n        rdoTruongPhong.setSelected(nv.  ());\n        rdoNhanVien.  (!nv.getVaiTro());\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Form.png\">",
        dapAn: "nv,getvaitro,setselected"
    },
    {
        cauHoi: "Phương thức showOpenDialog() mở hộp thoại cho phép chọn file từ máy tính đồng thời trả về một số nguyên. Nếu kết quả trả về bằng giá trị của hằng số JFileChooser.APPROVE_OPTION có nghĩa là gì?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-FileChooser.png\">",
        dapAn: "Có file được chọn"
    },
    {
        cauHoi: "Phương thức update() của NhanVienJDialog được gọi để cập nhật thông tin nhân viên đang xem trên form. Hãy hoàn thành mã cho phương thức này.\n    void update(){\n        NhanVien nv = this.  ();\n        String mk2 = new String(txtMatKhau2.getPassword());\n        if(!mk2.equals(nv.getMatKhau())){\n            MsgBox.alert(this, \"Xác nhận mật khẩu không đúng!\");\n        }\n        else{\n            try {\n                dao.  (nv); // cập nhật\n                this.  (); // đổ lại bảng\n                MsgBox.alert(this, \"Cập nhật thành công!\");\n            } \n            catch (Exception e) {\n                MsgBox.alert(this, \"Cập nhật thất bại!\");\n            }\n        }\n    }",
        dapAn: "getform,update,filltable"
    },
    {
        cauHoi: "Phương thức updateDiem() của HocVienJDialog được gọi khi click nút [Cập nhật điểm] để cập nhật điểm của tất cả các học viên trên bảng vào CSDL. Hãy hoàn thiện phương thức này.\n    void updateDiem(){\n        int n = tblHocVien.  ();\n        for(int i=0; i < n; i++){\n            int mahv = (Integer) tblHocVien.getValueAt(i, 1);\n            double diem = (Double) tblHocVien.getValueAt(i,  );\n            HocVien hv = hvdao.selectById(mahv);\n            hv.setDiem(diem);\n            hvdao.update(hv);\n        }\n        MsgBox.alert(this, \"Cập nhật điểm thành công!\");\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "getrowcount,4"
    },
    {
        cauHoi: "Phương thức updateStatus() của NhanVienJDialog được sử dụng để thay đổi trạng thái của form.\n    void updateStatus(){\n        boolean edit = (this.row  > = 0);\n        boolean first = (this.row == 0);\n        boolean last = (this.row == tblNhanVien.getRowCount() - 1);\n        // Trạng thái form\n        txtMaNV.setEditable(!edit);\n        btnThem.setEnabled(!edit);\n        btnSua.setEnabled(edit);\n        btnXoa.setEnabled(edit);\n        \n        // Trạng thái điều hướng\n        btnFirst.setEnabled(edit && !first);\n        btnPrev.setEnabled(edit && !first);\n        btnNext.setEnabled(edit && !last);\n        btnLast.setEnabled(edit && !last);\n    }\nKhi this.row = tblNhanVien.getRowCount() - 1 thì các điều khiển nào sẽ được kích hoạt?",
        dapAn: "btnXoa"
    },
    {
        cauHoi: "Phương thức updateStatus() của NhanVienJDialog được sử dụng để thay đổi trạng thái của form.\n    void updateStatus(){\n        boolean edit = (this.row  > = 0);\n        boolean first = (this.row == 0);\n        boolean last = (this.row == tblNhanVien.getRowCount() - 1);\n        // Trạng thái form\n        txtMaNV.setEditable(!edit);\n        btnThem.setEnabled(!edit);\n        btnSua.setEnabled(edit);\n        btnXoa.setEnabled(edit);\n        \n        // Trạng thái điều hướng\n        btnFirst.setEnabled(edit && !first);\n        btnPrev.setEnabled(edit && !first);\n        btnNext.setEnabled(edit && !last);\n        btnLast.setEnabled(edit && !last);\n    }\nKhi this.row lớn hơn 0 và nhỏ hơn tblNhanVien.getRowCount() - 1 thì các điều khiển nào sẽ được kích hoạt?",
        dapAn: [
            "btnNext",
            "btnXoa"
        ]
    },
    {
        cauHoi: "SELECT\n  TenCD ChuyenDe,\n  COUNT(MaHV) SoHV,\n  MIN(Diem) ThapNhat,\n  MAX(Diem) CaoNhat,\n  AVG(Diem) TrungBinh\n FROM KhoaHoc kh\n  JOIN HocVien hv ON kh.MaKH=hv.MaKH\n  JOIN ChuyenDe cd ON cd.MaCD=kh.MaCD\n GROUP BY",
        dapAn: "tencd"
    },
    {
        cauHoi: "SELECT nh.MaNH, nh.HoTen, hv.Diem\n FROM HocVien hv\n  NguoiHoc nh ON nh.MaNH=hv.MaNH\n  hv.MaKH = @MaKH\n  hv.Diem DESC",
        dapAn: "join,where,order-by"
    },
    {
        cauHoi: "Sản phẩm mục tiêu được LapTrinhCity yêu cầu sử dụng công nghệ gì?",
        dapAn: [
            "JDK 1.8+",
            "SQL Server 2008+",
            "Swing & JDBC"
        ]
    },
    {
        cauHoi: "Sử dụng  sẽ tránh được SQL Injection?",
        dapAn: "preparedstatement"
    },
    {
        cauHoi: "Sử dụng  sẽ tránh được với dữ liệu nhị phân.",
        dapAn: "preparedstatement"
    },
    {
        cauHoi: "Sử dụng PreparedStatement với câu lệnh SQL \"SELECT * FROM ChuyenDe WHERE TenCD LIKE ? AND HocPhi=?\". Hãy chọn phương thức để đưa dữ liệu vào các vị trí dấu ?",
        dapAn: "setString(1,\"X\"), setDouble(2,100)"
    },
    {
        cauHoi: "Sử dụng dòng mã lệnh nào để hiển thị cửa sổ JDialog được tạo từ NetBean?",
        dapAn: "new MyDialog(this, true).setVisible(true)"
    },
    {
        cauHoi: "Theo các phát biểu sau thì\n1. Người học là người đăng ký tham gia học tập tại trung tâm.\n2. Hoc viên là người học tham gia vào một khóa học.",
        dapAn: "Một người học có thể trở thành nhiều học viên của nhiều lớp khác nhau"
    },
    {
        cauHoi: "Theo hướng dẫn của bài học, để hoàn thiện đoạn mã đăng nhập bạn phải sử dụng phương thức nào để điền vào ô trống sau đây?\n        String manv = txtMaNV.getText();\n        String matKhau = new String(txtMatKhau.getPassword());\n        NhanVien nhanVien = dao.  (manv);\n        if(nhanVien == null){\n            MsgBox.alert(this, \"Sai tên đăng nhập!\");\n        }\n        else if(!matKhau.equals(nhanVien.getMatKhau())){\n            MsgBox.alert(this, \"Sai mật khẩu!\");\n        }\n        else{\n            Auth.user = nhanVien;\n            this.dispose();\n        }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Login.png\">",
        dapAn: "selectbyid"
    },
    {
        cauHoi: "Theo hướng dẫn đóng gói trong bài học bạn cần sử dụng những phần mềm nào?",
        dapAn: [
            "InnoSettup",
            "exe4j"
        ]
    },
    {
        cauHoi: "Theo hướng dẫn đóng gói trong bài học đóng gói bao gồm những công đoạn: \n1. Sử dụng exe4j để tạo file exe từ file jar\n2. Đóng gói file exe và các tài nguyên liên quan thành file settup",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Theo mô hình triển khai thì?",
        dapAn: [
            "Ứng dụng EduSys có thể cài trên nhiều máy nhưng dùng chung CSDL",
            "Ứng dụng EduSys phải được cài đặt trên máy của người sử dụng"
        ]
    },
    {
        cauHoi: "Theo phân tích thì chuyên đề và khóa học có những thuộc tính chung nào?",
        dapAn: [
            "Học phí",
            "Thời lượng"
        ]
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc của \"bảng điểm\" bao gồm Mã người học, Họ và tên,  và",
        dapAn: "xep-loai,diem"
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc của \"bảng điểm\" bao gồm Mã người học, Họ và tên,  và",
        dapAn: "diem,xep-loai"
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc thông tin thống kê \"người học theo năm\" bao gồm Năm,  , Ngày đăng ký đầu tiên,",
        dapAn: "ngay-dang-ky-sau-cung,so-hoc-vien"
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc thông tin thống kê \"điểm từng chuyên đề\" bao gồm Chuyên đề,  , Điểm cao nhất, Điểm thấp nhất,",
        dapAn: "diem-trung-binh,so-luong-hoc-vien"
    },
    {
        cauHoi: "Theo phân tích thì đâu là chức năng tổng hợp - thống kê?",
        dapAn: [
            "Doanh thu",
            "Người học theo năm"
        ]
    },
    {
        cauHoi: "Theo phân tích thì đâu là khóa ngoại trong bảng HocVien (học viên)",
        dapAn: [
            "MaKH",
            "MaNH"
        ]
    },
    {
        cauHoi: "Theo phân tích thì đâu là khóa ngoại trong bảng NguoiHoc (người học)",
        dapAn: "MaNV"
    },
    {
        cauHoi: "Theo phân tích, mỗi chức năng quản lý cho phép thực hiện các hoạt động nào?",
        dapAn: [
            "Sửa thông tin",
            "Tìm kiếm thông tin",
            "Xem thông tin",
            "Xóa thông tin"
        ]
    },
    {
        cauHoi: "Theo quy ước của tài liệu dự án thì tiếp đầu ngữ của\n1. JCheckBox là  \n2. JComboBox là  \n3. JListBox là  \n4. JMenuItem là",
        dapAn: "chk,cbo,lst,mni"
    },
    {
        cauHoi: "Theo quy ước của tài liệu dự án thì tiếp đầu ngữ của\n1. Jlabel là  \n2. JButton là  \n3. JTextField là  \n4. JRadioButton là",
        dapAn: "lbl,btn,txt,rdo"
    },
    {
        cauHoi: "Theo thiết kế CSDL, hãy cho biết câu lệnh SQL chứa lời gọi thủ tục lưu nào sau đây là đúng?",
        dapAn: "{CALL sp_BangDiem(?)}"
    },
    {
        cauHoi: "Theo thiết kế của bảng NhanVien thì lệnh đọc dữ liệu nào sau đây là đúng nhất?",
        dapAn: "ResultSet.getBoolean(\"VaiTro\")"
    },
    {
        cauHoi: "Theo thiết kế thì kiểu dữ liệu của thuộc tính vai trò (VaiTro) của thực thể nhân viên (NhanVien) có kiểu là gì",
        dapAn: "BIT"
    },
    {
        cauHoi: "Theo thiết kế thì trên cửa sổ chính chứa những thành phần giao diện nào?",
        dapAn: [
            "MenuBar",
            "StatusBar",
            "ToolBar"
        ]
    },
    {
        cauHoi: "Theo yêu cầu của LapTrinhCity thì quan hệ giữa KhoaHoc và ChuyenDe phải thỏa mãn quy luật nào?\n1. Delete: CASCADE\n2. Update: CASCADE",
        dapAn: "1 sai, 2 đúng"
    },
    {
        cauHoi: "Theo yêu cầu của LapTrinhCity thì quan hệ giữa KhoaHoc và HocVien phải thỏa mãn quy luật nào?\n1. Delete: CASCADE\n2. Update: CASCADE",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Theo yêu cầu của môn học này thì cấu trúc tài liệu dự án mà bạn cần phải hoàn thành bao gồm?",
        dapAn: [
            "Giới thiệu dự án",
            "Khảo sát và phân tích",
            "Kiểm thử",
            "Thiết kế hệ thống",
            "Thực hiện viết mã",
            "Đóng gói và triển khai (gồm tài liệu hướng dẫn)"
        ]
    },
    {
        cauHoi: "Thiết kế bao gồm công việc nào?",
        dapAn: [
            "Phác thảo giao diện trên giấy hoặc các công cụ phần mềm",
            "Vẽ mô hình công nghệ của ứng dụng phần mềm"
        ]
    },
    {
        cauHoi: "Thiết kế hệ thống phần mềm là quá trình phác thảo  ,  , bố cục cần thiết và kiến trúc công nghệ của hệ thống phần mềm dựa trên tài liệu phân tích đã thống nhất với khách hàng",
        dapAn: "giao-dien,du-lieu"
    },
    {
        cauHoi: "Thuộc tính VaiTro trong thực thể nhân viên có ý nghĩa gì trong phần mềm?",
        dapAn: "Phân quyền sử dụng"
    },
    {
        cauHoi: "Thuộc tính nào của cửa sổ cho phép ẩn hoặc hiện thanh tiêu đề của cửa sổ?",
        dapAn: "undecorated"
    },
    {
        cauHoi: "Thuộc tính nào nắm giữ tiêu đề của hộp thoại JFileChooser?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-FileChooser.png\">",
        dapAn: "dialogTitle"
    },
    {
        cauHoi: "Thành phần nào được sử dụng để thực thi câu lệnh SQL (không phải lời gọi thủ tục lưu) chứa các dấu hỏi dành chỗ cho việc đưa dữ liệu sau này?",
        dapAn: "PreparedStatement"
    },
    {
        cauHoi: "Thành phần nào được sử dụng để thực thi câu lệnh SQL có chứa dữ liệu trực tiếp?",
        dapAn: "Statement"
    },
    {
        cauHoi: "Thành phần nào được sử dụng để thực thi lời gọi thủ tục lưu (PROC)?",
        dapAn: "CallableStatement"
    },
    {
        cauHoi: "Thủ tục lưu sp_BangDiem() tổng hợp điểm của người học theo gia một khóa học. Hãy hoàn thiện thủ tục này.\nCREATE PROC sp_BangDiem(@MaKH INT)\nAS BEGIN\n SELECT \n  nh.MaNH,\n  nh.HoTen,\n  hv.Diem\n FROM HocVien hv\n  JOIN NguoiHoc nh ON nh.MaNH=hv.MaNH\n WHERE hv.MaKH =  \n ORDER BY hv.Diem DESC\nEND",
        dapAn: "@makh"
    },
    {
        cauHoi: "Thủ tục lưu sp_DoanhThu() tổng hợp doanh thu từng chuyên đề của một năm. Hãy hoàn thiện thủ tục này.\nCREATE PROC sp_DoanhThu(@Year INT)\nAS BEGIN\n SELECT\n  TenCD ChuyenDe,\n  COUNT(DISTINCT kh.MaKH) SoKH,\n  COUNT(hv.MaHV) SoHV,\n  SUM(kh.HocPhi) DoanhThu,\n  MIN(kh.HocPhi) ThapNhat,\n  MAX(kh.HocPhi) CaoNhat,\n  AVG(kh.HocPhi) TrungBinh\n FROM KhoaHoc kh\n  JOIN HocVien hv ON kh.MaKH=hv.MaKH\n  JOIN ChuyenDe cd ON cd.MaCD=kh.MaCD\n WHERE YEAR(NgayKG) = @Year\n  TenCD\nEND",
        dapAn: "group-by"
    },
    {
        cauHoi: "Thủ tục lưu sp_LuongNguoiHoc() tổng hợp lượng người học đăng ký từng năm. Hãy hoàn thiện thủ tục này.\nCREATE PROC sp_LuongNguoiHoc\nAS BEGIN\n SELECT\n  YEAR(NgayDK) Nam,\n  COUNT(*) SoLuong,\n  MIN(NgayDK) DauTien,\n  MAX(NgayDK) CuoiCung\n FROM NguoiHoc\n  YEAR(NgayDK)\nEND",
        dapAn: "group-by"
    },
    {
        cauHoi: "Trong NhanVienDAO bao gồm những phương thức nào?",
        dapAn: [
            "delete()",
            "insert()",
            "update()"
        ]
    },
    {
        cauHoi: "Trong NhanVienDAO phương thức nào truy vấn danh sách nhân viên?",
        dapAn: [
            "selectAll()",
            "selectBySql()"
        ]
    },
    {
        cauHoi: "Trong NhanVienDAO phương thức nào truy vấn một nhân viên?",
        dapAn: "selectById()"
    },
    {
        cauHoi: "Trong NhanVienJDialog có 2 dòng mã khai báo sau:\n    NhanVienDAO dao = new NhanVienDAO();\n    int row = -1;\nTrong đó:\n1. dao là đối tượng được sử dụng để làm việc với bảng NhanVien trong CSDL\n2. row để ghi nhớ vị trí của hàng đang được chọn trên bảng tblNhanVien",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Trong các lớp DAO cụ thể,\n1. Phải override các phương thức với kiểu cụ thể\n2. Có thể viết thêm các phương thức truy xuất dữ liệu khác ngoài EduSysDAO",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Trong dự án lớp EduSysDAO < E, K >  có mục địch gì?",
        dapAn: [
            "Chuẩn hóa việc đặt tên và sử dụng kiểu ở các lớp con",
            "Giảm công việc khai báo phương thức ở lớp con"
        ]
    },
    {
        cauHoi: "Trong phần mã điều khiển của NhanVienJDialog theo hướng dẫn trong bài học, cho 2 phát biểu sau đây:\n1. fillTable() truy vấn và đổ danh sách trưởng phòng lên bảng\n2. edit() hiển thị thông tin của hàng hiện tại lên form",
        dapAn: "1 sai, 2 đúng"
    },
    {
        cauHoi: "Trong phần mã điều khiển của NhanVienJDialog theo hướng dẫn trong bài học, cho 2 phát biểu sau đây:\n1. insert() tạo đối tượng nhân viên, thêm vào csdl, xóa trắng form, đổ lại dữ liệu lên form\n2. update() tạo đối tượng nhân viên, cập nhật vào csdl, xóa trắng form, đổ lại dữ liệu lên form",
        dapAn: "1 đúng, 2 sai"
    },
    {
        cauHoi: "Trong phần mã điều khiển của NhanVienJDialog theo hướng dẫn trong bài học, cho 2 phát biểu sau đây:\n1. setForm() hiển thị thông tin của một đối tượng nhân viên lên form\n2. getForm() tạo một đối tượng nhân viên với dữ liệu từ form",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Trong quá trình phân tích yêu cầu của LapTrinhCity chúng ta phát hiện những thực thể nào?",
        dapAn: [
            "Chuyên đề",
            "Học viên",
            "Người học",
            "Khóa học",
            "Nhân viên"
        ]
    },
    {
        cauHoi: "Trong quá trình phân tích yêu cầu của LapTrinhCity chúng ta phát hiện những thực thể nào?",
        dapAn: [
            "Học viên",
            "Khóa học",
            "Nhân viên"
        ]
    },
    {
        cauHoi: "Trên cửa sổ giao diện chính có những thành phần nào?",
        dapAn: [
            "Thanh công cụ (toolbar)",
            "Thanh trạng thái (statusbar)",
            "Thực đơn (menu)"
        ]
    },
    {
        cauHoi: "Tài liệu dự án là tài liệu ghi nhận lại toàn bộ công việc đã thực hiện trong quá trình làm phần mềm?",
        dapAn: "Đúng"
    },
    {
        cauHoi: "Tại sao thuộc tính mã người học (MaNH) của thực thể khóa học (KhoaHoc) bắt buộc phải có kiểu là là NCHAR(7)?",
        dapAn: "Vì mã người học là khóa ngoại nên phải có kiểu giống với khóa chính của thực thể người học (NguoiHoc)"
    },
    {
        cauHoi: "Unit Testing là một công đoạn kiểm thử tương ứng với công đoạn nào trong quá trình phân tích và thiết kế?",
        dapAn: "Detailed Design"
    },
    {
        cauHoi: "Yêu cầu về bảo mật của LapTrinhCity là gì?",
        dapAn: [
            "Chỉ có trưởng phòng mới được thực hiện xóa dữ liệu",
            "Chỉ có trưởng phòng mới được xem doanh thu"
        ]
    },
    {
        cauHoi: "Điền vào ô trống các kiểu dữ liệu theo phân tích, thiết kế thông tin của thực thể nhân viên\npublic class NhanVien {\n    private  maNV;\n    private String matKhau;\n    private String hoTen;\n    private  vaiTro = false;\n\n    getters/setters\n}",
        dapAn: "string,boolean"
    },
    {
        cauHoi: "Điền vào ô trống đoạn mã sau tên phương thức của chuỗi để kiểm tra chuỗi s có so khớp với 5 ký tự hoa hay không, nếu không khớp sẽ nhận dòng thông báo lỗi\nif(!s.  (\"[A-Z]{5}\")){\n    System.out.println(\"Chuỗi không hợp lệ\");\n}",
        dapAn: "matches"
    },
    {
        cauHoi: "Điền vào ô trống để khi gọi phương thức sau thì JLable sẽ được cập nhật thời gian theo thời gian hệ thống.\n    void startDongHo(){\n        SimpleDateFormat formater = new SimpleDateFormat(\"hh:mm:ss a\");\n        new  (1000, (ActionEvent e) - >  {\n            lblDongHo.setText(formater.format(new Date()));\n        }).start();\n    }",
        dapAn: "timer"
    },
    {
        cauHoi: "Điều khiển (Control) nào được sử dụng để nhóm các JRadioButton thành một nhóm?",
        dapAn: "ButtonGroup"
    },
    {
        cauHoi: "Điều khiển (Control) nào được sử dụng để tạo một mục của thực đơn?",
        dapAn: "JMenuItem"
    },
    {
        cauHoi: "Điều khiển (Control) nào được sử dụng để tạo thanh thực đơn?",
        dapAn: "JMenuBar"
    },
    {
        cauHoi: "Đâu là 2 phương thức của lớp tiện ích Auth hỗ trợ lập trình sửa lỗi?",
        dapAn: [
            "isLogin()",
            "isManager()"
        ]
    },
    {
        cauHoi: "Đâu là biểu thức chính quy phù hợp nhất có thể sử dụng để kiểm tra email?",
        dapAn: "\\w+@\\w+(\\.\\w+){1,2}"
    },
    {
        cauHoi: "Đâu là biểu thức chính quy phù hợp nhất có thể sử dụng để kiểm tra số điện thoại Việt Nam",
        dapAn: "((84)|(0))\\d{9}"
    },
    {
        cauHoi: "Đâu là biểu thức chính quy phù hợp nhất có thể sử dụng để kiểm tra địa chỉ website?",
        dapAn: "http[s]?://\\.+"
    },
    {
        cauHoi: "Đâu là các thành phần thuộc JDBC?",
        dapAn: [
            "CallableStatement",
            "PreparedStatement",
            "Statement"
        ]
    },
    {
        cauHoi: "Đâu là cú pháp đúng khi tạo thủ tục lưu?",
        dapAn: [
            "CREATE PROC  <  < tên >  >  [( <  < tham số >  > )] AS BEGIN  <  < thân >  >  END",
            "CREATE PROCEDURE  <  < tên >  >  [( <  < tham số >  > )] AS BEGIN  <  < thân >  >  END"
        ]
    },
    {
        cauHoi: "Đâu là dòng mã lệnh không cho phép nhập vào JTextField txtMaNV?",
        dapAn: [
            "setEditable(false)",
            "setEnable(false)"
        ]
    },
    {
        cauHoi: "Đâu là layout được sử dụng trong Swing?",
        dapAn: [
            "BorderLayout",
            "FlowLayout",
            "GridLayout",
            "NullLayout"
        ]
    },
    {
        cauHoi: "Đâu là những thuộc tính của JProgressBar?",
        dapAn: [
            "max",
            "min",
            "stringPainted",
            "value"
        ]
    },
    {
        cauHoi: "Đâu là phương thức chuyển đổi chuỗi sang kiểu nguyên thủy?",
        dapAn: [
            "Boolean.parseBoolean(String)",
            "Double.parseDouble(String)",
            "Integer.parseInt(String)"
        ]
    },
    {
        cauHoi: "Để bỏ thanh tiêu đề khỏi cửa số bạn thiết lập giá trị nào cho thuộc tính nào của cửa sổ",
        dapAn: "undecorated:true"
    },
    {
        cauHoi: "Để hiển thị của sổ đúng giữa màn hình máy tính, bạn sử dụng phương thức nào của cửa sổ?",
        dapAn: "setLocationRelativeTo(null)"
    },
    {
        cauHoi: "Để hiển thị mã khóa học kèm với ngày khai giảng bên trong ComboBox khóa học thì bạn cần override phương thức toString() của lớp thực thể KhoaHoc như thế nào?\n    @Override\n    public String toString() {\n        return this.  + \" (\" + this.  + \")\";\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "macd,ngaykg"
    },
    {
        cauHoi: "Để hiển thị thông báo xác nhận như hình trên bạn sử dụng lệnh nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Confirm.png\">",
        dapAn: "MsgBox.confirm(String)"
    },
    {
        cauHoi: "Để kiểm thử Case 3 bạn sẽ thực hiện kiểm thử công việc gì?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q8-Test-Security.png\">",
        dapAn: [
            "Ghi nhận việc xóa được hay không xóa được",
            "Vào tất cả các chức năng để thực hiện xóa dữ liệu",
            "Đăng nhập với tài khoản NoPT, 123456"
        ]
    },
    {
        cauHoi: "Để kiểm thử Case 7 bạn sẽ thực hiện kiểm thử công việc gì?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q8-Test-Security.png\">",
        dapAn: [
            "Ghi nhận việc xóa được hay không xóa được",
            "Vào cửa sổ Quản lý nhân viên và xóa tài khoản TeoNV",
            "Đăng nhập với tài khoản TeoNV, songlong"
        ]
    },
    {
        cauHoi: "Để kết thúc ứng dụng EduSys khi nhấp nút [Kết thúc], bạn thực hiện lệnh nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Login.png\">",
        dapAn: "System.exit(0)"
    },
    {
        cauHoi: "Để thay đổi tiêu đề của cửa sổ, bạn sử dụng phương thức nào?",
        dapAn: "setTitle()"
    },
    {
        cauHoi: "Để thực hiện công việc hiển thị người học ngay khi nhập chuỗi tìm kiếm bạn cần bẩy sự kiện nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Learner.png\">",
        dapAn: "Key.released"
    },
    {
        cauHoi: "Để thực hiện được chức năng đổi mật khẩu, chương trình đã sử dụng DAO nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Change.png\">",
        dapAn: "NhanVienDAO"
    },
    {
        cauHoi: "Để thực thi câu lệnh SQL sau đây thì bạn sử dụng phương thức nào của JdbcHelper là gọn nhất:\nsql = \"SELECT count(*) FROM KhoaHoc\"",
        dapAn: "value()"
    },
    {
        cauHoi: "Để đặt phím nóng cho một mục trong thực đơn bạn sử dụng thuộc tính nào?",
        dapAn: "accelerator"
    },
    {
        cauHoi: "Để đọc dữ liệu có kiểu dữ liệu trong SQL là BINARY thì bạn nên sử dụng phương thức nào?",
        dapAn: "ResultSet.getBytes()"
    },
    {
        cauHoi: "Để đổ dữ liệu vào cboChuyenDe thì mã điều khiển của KhoaHocJDialog bổ sung phương thức fillComboBoxChuyenDe(). Hãy hoàn thiện mã cho phương thức này\n    ChuyenDeDAO cddao = new ChuyenDeDAO();\n    void fillComboBoxChuyenDe(){\n        DefaultComboBoxModel model = (DefaultComboBoxModel) cboChuyenDe.  ();\n        model.  ();\n        List < ChuyenDe >  list = cddao.selectAll();\n        for(ChuyenDe cd : list){\n             model.  (cd);\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Table-Course.png\">",
        dapAn: "getmodel,removeallelements,addelement"
    },
    {
        cauHoi: "Layout nào chia container thành 5 khu vực đông, tây, nam, bắc và trung tâm?",
        dapAn: "BorderLayout"
    },
    {
        cauHoi: "Thuộc tính nào của JFrame và JDialog là tiêu đề cửa sổ?\n1. Thuộc tính title\n2. Thuộc tính subject",
        dapAn: "1 đúng, 2 sai"
    },
    {
        cauHoi: "Theo phân tích thì đâu là khóa ngoại trong bảng KhoaHoc (khóa học)",
        dapAn: [
            "MaCD",
            "MaNV"
        ]
    },
    {
        cauHoi: "CREATE PROC sp_ThongKeDoanhThu(@Year INT)\nAS BEGIN\n SELECT\n  TenCD ChuyenDe,\n  COUNT(DISTINCT kh.MaKH) SoKH,\n  COUNT(hv.MaHV) SoHV,\n  SUM(kh.HocPhi) DoanhThu,\n  MIN(kh.HocPhi) ThapNhat,\n  MAX(kh.HocPhi) CaoNhat,\n  AVG(kh.HocPhi) TrungBinh\n FROM KhoaHoc kh\n  JOIN HocVien hv ON kh.MaKH=hv.MaKH\n  JOIN ChuyenDe cd ON cd.MaCD=kh.MaCD\n  YEAR(NgayKG) = @Year\n  TenCD\nEND",
        dapAn: "where,group-by"
    },
    {
        cauHoi: "CREATE TABLE KhoaHoc\n(\n MaKH INT  NOT NULL,\n MaCD NCHAR(5) NOT NULL,\n HocPhi  NOT NULL,\n ThoiLuong INT NOT NULL,\n NgayKG  NOT NULL,\n GhiChu NVARCHAR(50) NULL,\n MaNV NVARCHAR(50) NOT NULL,\n NgayTao DATE NOT NULL,\n PRIMARY KEY(MaKH),\n FOREIGN KEY(MaCD) REFERENCES ChuyenDe(MaCD) ON DELETE NO ACTION ON UPDATE CASCADE,\n FOREIGN KEY(MaNV) REFERENCES NhanVien(MaNV) ON DELETE NO ACTION ON UPDATE CASCADE\n)",
        dapAn: "identity(1,1),float,date"
    },
    {
        cauHoi: "Theo yêu cầu của môn học này thì cấu trúc tài liệu dự án mà bạn cần phải hoàn thành bao gồm?",
        dapAn: [
            "Giới thiệu dự án",
            "Khảo sát và phân tích",
            "Thiết kế hệ thống",
            "Thực hiện viết mã"
        ]
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc thông tin thống kê \"doanh thu từng chuyên đề\" bao gồm Chuyên đề,  , Số lượng học viên,  , Học phí cao nhất, Học phí thấp nhất, Học phí trung bình",
        dapAn: "so-luong-khoa-hoc,so-luong-hoc-vien"
    },
    {
        cauHoi: "Đâu là yêu cầu của LapTrinhCity",
        dapAn: [
            "Học viên là người học được đăng ký một khóa học nào đó",
            "Người học là người đăng ký vào trung tâm"
        ]
    },
    {
        cauHoi: "Cho 2 phát biểu về môn dự án mẫu như sau:\nPhát biểu 1: Dự án mẫu là môn học làm dự án phần mềm theo mẫu thiết kế sẵn.\nPhát biểu 2: Sản phẩm mục tiêu là sản phẩm phần mềm để sinh viên hướng tới\nHãy chọn câu trả lời đúng nhất",
        dapAn: "Phát biểu 1 đúng, Phát biểu 2 đúng"
    },
    {
        cauHoi: "Hoàn thiện phương thức selectAll() của lớp HocVienDAO như đã hướng dẫn trong bài học\n    public List <  >  selectAll(){\n        String sql=\"SELECT * FROM HocVien\";\n        return selectBySql(sql);\n    }",
        dapAn: "hocvien"
    },
    {
        cauHoi: "Phương thức selectByKhoaHoc() của HocVienDAO thực hiện truy vấn những học viên theo mã khóa học. Hãy hoàn thiện phương thức này\n    public List < HocVien >  selectByKhoaHoc(int maKH) {\n        String sql=\"SELECT * FROM HocVien WHERE  =?\";\n        return this.selectBySql(sql, maKH);\n    }",
        dapAn: "makh"
    },
    {
        cauHoi: "Phương thức getDiemChuyenDe() của ThongKeDAO gọi thủ tục lưu sp_DiemChuyenDe() để truy vấn điểm từng chuyên đề. Hãy hoàn thiện phương thức này.\n    public List < Object[] >  getDiemChuyenDe(){\n        String sql = \"{CALL sp_DiemChuyenDe}\";\n        String[] cols = {\"ChuyenDe\", \"SoHV\", \"ThapNhat\", \"CaoNhat\", \"  \"};\n        return this.getListOfArray(sql, cols);\n    }",
        dapAn: "trungbinh"
    },
    {
        cauHoi: "Mã điều khiển của HocVienJDialog sử dụng đến các DAO nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student.png\">",
        dapAn: [
            "ChuyenDeDAO",
            "HocVienDAO",
            "KhoaHocDAO",
            "NguoiHocDAO"
        ]
    },
    {
        cauHoi: "Phương thức nào giúp bạn chuyển một chuỗi thành số thực?",
        dapAn: [
            "Double.parseDouble(String)",
            "Double.valueOf(String)"
        ]
    },
    {
        cauHoi: "Xử lý ngoại lệ của phương thức tiện ích Integer.parseInt(String) bạn sẽ kiểm được những lỗi nào?",
        dapAn: "Chuỗi có thể chuyển thành số int hay không"
    },
    {
        cauHoi: "Bạn phải thực hiện những công việc gì trong công đoạn thực hiện kiểm thử?",
        dapAn: [
            "Chạy thử với dữ liệu mẫu",
            "Nghiên cứu kịch bản kiểm thử",
            "Phát hiện và ghi nhận kết quả"
        ]
    },
    {
        cauHoi: "Thuộc tính nào là của JMenuItem?",
        dapAn: [
            "accelerator",
            "icon",
            "text"
        ]
    },
    {
        cauHoi: "Điền vào các ô trống còn thiếu để phương thức đổi mật khẩu sau đây thực hiện đúng yêu cầu:\n    private void doiMatKhau() {\n        String manv = txtMaNV.getText();\n        String matKhau = new String(txtMatKhau.getPassword());\n        String matKhauMoi = new String(txtMatKhauMoi.getPassword());\n        String matKhauMoi2 = new String(txtMatKhauMoi2.getPassword());\n        \n        if(!manv.  (Auth.user.getMaNV())){\n            MsgBox.alert(this, \"Sai tên đăng nhập!\");\n        }\n        else if(!matKhau.  (Auth.user.getMatKhau())){\n            MsgBox.alert(this, \"Sai mật khẩu!\");\n        }\n        else if(!matKhauMoi.equals(matKhauMoi2)){\n            MsgBox.alert(this, \"Xác nhận mật khẩu không đúng!\");\n        }\n        else{\n            Auth.user.setMatKhau(matKhauMoi);\n            dao.  (Auth.user);\n            MsgBox.alert(this, \"Đổi mật khẩu thành công!\");\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Change.png\">",
        dapAn: "equalsignorecase,equals,update"
    },
    {
        cauHoi: "BorderLayout chia container thành bao nhiêu vùng?",
        dapAn: "5"
    },
    {
        cauHoi: "Để truy vấn bảng điểm của một khóa học có mã số là 1005, bạn sử dụng dòng lệnh nào?",
        dapAn: [
            "ResultSet rs = JdbcHelper.query(\"{call sp_bangdiem(1005)}\")",
            "ResultSet rs = JdbcHelper.query(\"{call sp_bangdiem(?)}\", 1005)"
        ]
    },
    {
        cauHoi: "Theo thiết kế của bảng NguoiHoc thì lệnh đọc dữ liệu nào sau đây là đúng?",
        dapAn: [
            "ResultSet.getBoolean(\"GioiTinh\")",
            "ResultSet.getDate(\"NgaySinh\")",
            "ResultSet.getString(\"HoTen\")"
        ]
    },
    {
        cauHoi: "Lệnh nào được sử dụng để mở kết nối từ ứng dụng Java đến hệ quản trị CSDL?",
        dapAn: "DriverManager.getConnection()"
    },
    {
        cauHoi: "Lớp DAO là gì?",
        dapAn: "Là lớp chứa các phương thức làm việc với CSDL"
    },
    {
        cauHoi: "Trong các lớp DAO cụ thể,\n1. Phải override các phương thức với kiểu cụ thể\n2. Cần phương thức nào thì override phương thức đó",
        dapAn: "1 đúng, 2 sai"
    },
    {
        cauHoi: "Vị trí dấu ? Trong câu lệnh SQL sử dụng với PreparedStatement được bắt đầu từ?",
        dapAn: "1"
    },
    {
        cauHoi: "Với PreparedStatement người lập trình không cần phải xử lý  và  .",
        dapAn: "dau-nhay-don,unicode"
    },
    {
        cauHoi: "Phương thức delete() của NhanVienJDialog được gọi để xóa nhân viên đang xem trên form. Hãy hoàn thành mã cho phương thức này.\n    void delete(){\n            String manv = txtMaNV.getText();\n            if(manv.equals(Auth.user.getMaNV())){\n                MsgBox.alert(this, \"Bạn không được xóa chính bạn!\");\n            }\n            else if(MsgBox.confirm(this, \"Bạn thực sự muốn xóa nhân viên này?\")){\n                try {\n                    dao.  (manv); // xóa nhân viên\n                    this.  (); // đổ lại bảng\n                    this.  (); // xóa trắng form\n                    MsgBox.alert(this, \"Xóa thành công!\");\n                } \n                catch (Exception e) {\n                    MsgBox.alert(this, \"Xóa thất bại!\");\n                }\n            }\n    }",
        dapAn: "delete,filltable,clearform"
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc thông tin thống kê \"điểm từng chuyên đề\" bao gồm Chuyên đề,  , Điểm cao nhất, Điểm thấp nhất,",
        dapAn: "so-luong-hoc-vien,diem-trung-binh"
    },
    {
        cauHoi: "Thủ tục lưu sp_DiemChuyenDe() tổng hợp điểm từng chuyên đề. Hãy hoàn thiện thủ tục này.\nCREATE PROC sp_DiemChuyenDe\nAS BEGIN\n SELECT\n  TenCD ChuyenDe,\n  COUNT(MaHV) SoHV,\n  MIN(Diem) ThapNhat,\n  MAX(Diem) CaoNhat,\n  AVG(Diem) TrungBinh\n FROM KhoaHoc kh\n  JOIN HocVien hv ON kh.MaKH=hv.MaKH\n  JOIN ChuyenDe cd ON cd.MaCD=kh.MaCD\n GROUP BY  \nEND",
        dapAn: "tencd"
    },
    {
        cauHoi: "Mục đích của kiểm thử phần mềm là gì?\n1. Đảm bảo chất lượng của sản phẩm trước khi xuất bản\n2. Phụ thuộc vào mục đích của khách hàng",
        dapAn: "1 đúng, 2 sai"
    },
    {
        cauHoi: "Điều khiển (Control) nào được sử dụng để tạo một đường phân cách giữa các mục của thực đơn?",
        dapAn: "JSeperator"
    },
    {
        cauHoi: "Sau đây là phương thức xử lý sự kiện click chuột lên bảng tblNhanVien. Hãy hoàn thiện mã để khi nhấp đúp chuột lên bảng tblNhanVien thì ghi nhận vị trí hàng được chọn vào trường row và gọi phương thức edit() để hiển thị thông tin nhân viên của hàng được chọn lên form.\n    private void tblNhanVienMouseClicked(java.awt.event.MouseEvent evt) {               \n        if(evt.  () == 2){\n            this.row = tblNhanVien.  ();\n            this.edit();\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Table.png\">",
        dapAn: "getclickcount,getselectedrow"
    },
    {
        cauHoi: "Gọi phương thức chonAnh() của ChuyenDeJDialog để mở hộp thoại chọn file ảnh, lưu file ảnh vào thư mục logos, đọc lại ảnh từ thư mục logos, hiển thị ảnh lên nhãn lblHinh và ghi nhớ tên ảnh vào thuộc tính toolTipText của nhãn lblHinh. Hãy hoàn thiện mã cho phương thức chọn ảnh.\n    void chonAnh() {\n        if(fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION){\n            File file = fileChooser.  ();\n            XImage.save(file); // lưu hình vào thư mục logos\n  icon = XImage.read(file.getName()); // đọc hình từ logos\n            lblHinh.setIcon(icon);\n            lblHinh.  (file.getName()); // giữ tên hình trong tooltip\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-FileChooser.png\">",
        dapAn: "getselectedfile,imageicon,settooltiptext"
    },
    {
        cauHoi: "Lớp EduSysDAO < E, K > , trong đó:\n1. E là kiểu tổng quát đại diện cho kiểu thực thể\n2. K là kiểu tổng quát đại diện cho kiểu của trường chứa khóa chính",
        dapAn: "1 đúng, 2 đúng"
    },
    {
        cauHoi: "Lớp thực thể là gì?",
        dapAn: "Là lớp mô tả cấu trúc dữ liệu của một bảng"
    },
    {
        cauHoi: "Khi chọn một khóa học thì bảng học viên thay đổi theo khóa học được chọn. Phương thức fillTableHocVien() chỉ hiển thị những học viên theo khóa học được chọn. Hãy hoàn thiện phương thức này\n    void fillTableHocVien(){\n        DefaultTableModel model = (DefaultTableModel) tblHocVien.getModel();\n        model.setRowCount(0);\n        KhoaHoc khoaHoc = (KhoaHoc) cboKhoaHoc.  ();\n        if(khoaHoc != null){\n            List < HocVien >  list = hvdao.  (khoaHoc.getMaKH());\n            for(int i=0; i < list.size(); i++){\n                HocVien hv = list.get(i);\n                String hoten = nhdao.selectById(hv.getMaNH()).getHoTen();\n                model.addRow(new Object[]{\n                    i + 1,\n                    hv.getMaHV(),\n                    hv.getMaNH(),\n                    hoten,\n                    hv.getDiem()\n                });\n            }\n            this.fillTableNguoiHoc();\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "getselecteditem,selectbykhoahoc"
    },
    {
        cauHoi: "Khi người sử dụng nhấp nút [Tìm] thì gọi đến phương thức timKiem() để lọc và hiển thị lại người học, xóa trắng form và cập nhật lại trạng thái form. Hãy hoàn thiện phương thức này\n    private void timKiem() {\n        this.  ();\n        this.  ();\n        this.row = -1;\n        this.  ();\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Table-Learner.png\">",
        dapAn: "filltable,clearform,updatestatus"
    },
    {
        cauHoi: "new Timer(10, new ActionListener(){\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                int value = progress.getValue();\n                if(value  <  progress.getMaximum()){\n                    progress.setValue(value + 1);\n                }\n                else{\n                    ChaoJDialog.this.dispose();\n                }\n            }\n        }).start();",
        dapAn: "Phương thức actionPerformed() cứ 10 mili giây sẽ được gọi một lần"
    },
    {
        cauHoi: "Hãy điền vào các ô trống để hoàn thiện lớp tiện ích Auth \npublic class Auth {\n    NhanVien user = null;\n    public static void clear() {\n        Auth.user = null;\n    }\n    public static boolean isLogin() {\n        return Auth.user != null;\n    }\n    public static boolean isManager() {\n        return Auth.isLogin() && user.getVaiTro();\n    }\n}",
        dapAn: "static,public"
    },
    {
        cauHoi: "Đâu là biểu thức chính quy phù hợp nhất có thể sử dụng để kiểm tra số xe gắng máy?",
        dapAn: "\\d{2}-[A-Z]\\d-((\\d{4})|(\\d{3}\\.\\d{2}))"
    },
    {
        cauHoi: "Đâu là yêu bảo mật cầu của LapTrinhCity",
        dapAn: [
            "Nhân viên không được phép xóa và xem doanh thu",
            "Đăng nhập"
        ]
    },
    {
        cauHoi: "Hoàn thiện phương thức cập nhật của NhanVienDAO\n    public void update(NhanVien model){\n        String sql=\"  NhanVien  MatKhau=?, HoTen=?, VaiTro=?  MaNV=?\";\n        XJdbc.update(sql, \n                model.getMatKhau(), \n                model.getHoTen(), \n                model.getVaiTro(),\n                model.getMaNV());\n    }",
        dapAn: "update,set,where"
    },
    {
        cauHoi: "Để nhóm nhiều JRadioButton thành môt nhóm bạn cần sử dụng điều khiển nào?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Learner.png\">",
        dapAn: "ButtonGroup"
    },
    {
        cauHoi: "Thông tin của nhân viên sau khi đăng nhập được lưu trữ ở đâu?",
        dapAn: "Auth.user"
    },
    {
        cauHoi: "Câu lệnh select sau truy vấn những người học nào?\n\"SELECT * FROM NguoiHoc WHERE MaNH NOT IN (SELECT MaNH FROM HocVien)\"",
        dapAn: "Những người học chưa đăng ký khóa học nào"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện lớp NguoiHocDAO\npublic class NguoiHocDAO extends EduSysDAO <  ,  > {\n     ...\n}",
        dapAn: "nguoihoc,string"
    },
    {
        cauHoi: "Phương thức getForm() của ChuyenDeJDialog được sử dụng để tạo đối tượng chuyên đề từ dữ liệu form. Hãy hoàn thiện mã cho phương thức getForm()\n    ChuyenDe getForm(){\n        ChuyenDe cd = new ChuyenDe();\n        cd.setMaCD(txtMaCD.getText());\n        cd.setTenCD(txtTenCD.getText());\n        cd.setThoiLuong(Integer.  (txtThoiLuong.getText()));\n        cd.setHocPhi(Double.valueOf(txtHocPhi.getText()));\n        cd.setMoTa(txtMota.getText());\n        cd.setHinh(lblHinh.  ());\n        return cd;\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Sub.png\">",
        dapAn: "valueof,gettooltiptext"
    },
    {
        cauHoi: "Trong NhanVienDAO phương thức nào làm thay đổi dữ liệu?",
        dapAn: [
            "delete()",
            "insert()",
            "update()"
        ]
    },
    {
        cauHoi: "Hoàn thiện chuỗi kết nối đến CSDL SQL Server bằng cách điền vào phần còn thiếu.\n\"  :  ://localhost;database=EduSys\"",
        dapAn: "jdbc,sqlserver"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB4.png\">",
        dapAn: "getstring,getdouble"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB3.png\">",
        dapAn: "createstatement,executeupdate"
    },
    {
        cauHoi: "Hình trên nêu ra các bước lập trình JDBC cơ bản. Hãy điền các thành phần còn thiếu vào các ô:\n1.  \n2.  \n3.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB1.png\">",
        dapAn: "class,drivermanager,connection"
    },
    {
        cauHoi: "Sắp xếp thứ tự xuất hiện của các cửa sổ theo thiết kế:\n  = >  = >",
        dapAn: "cua-so-chao,cua-so-dang-nhap,cua-so-chinh"
    },
    {
        cauHoi: "CREATE TABLE NhanVien\n(\n MaNV NVARCHAR(50) NOT NULL,\n MatKhau NVARCHAR(50) NOT NULL,\n HoTen NVARCHAR(50) NOT NULL,\n VaiTro BIT NOT NULL,\n  (MaNV)\n)",
        dapAn: "primary-key"
    },
    {
        cauHoi: "Sắp xếp theo thứ tự đúng các công đoạn trong quy trình thực hiện dự án?\n  = >  = >  = >  = >",
        dapAn: "analysis,design,implement,testing,maintenance"
    },
    {
        cauHoi: "Hãy điền vào ô trống để khi gọi phương thức openDoiMatKhau() và đã đăng nhập thì mở cửa sổ đổi mật khẩu\n    void openDoiMatKhau() {\n        if(Auth.isLogin()){\n            new DoiMatKhauJDialog(this, true).  (true);\n        }\n        else{\n            MsgBox.alert(this, \"Vui lòng đăng nhập!\");\n        }\n    }",
        dapAn: "setvisible"
    },
    {
        cauHoi: "Gọi phương thức first() để hiển thị nhân viên đầu tiên của bảng tblNhanVien lên form. Hãy hoàn thiện mã cho phương thức này.\n    void first(){\n        this.row =  ;\n        this.edit();\n    }",
        dapAn: "0"
    },
    {
        cauHoi: "Gọi phương thức last() để hiển thị nhân viên cuối cùng của bảng tblNhanVien lên form. Hãy hoàn thiện mã cho phương thức này.\n    void last(){\n        this.row = tblNhanVien.  () - 1;\n        this.edit();\n    }",
        dapAn: "getrowcount"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện lớp thực thể NguoiHoc\npublic class NguoiHoc {\n    private String maNH;\n    private String  ;\n    private Date ngaySinh = XDate.addDays(new Date(), -365*20);\n    private  gioiTinh;\n    private String dienThoai;\n    private String email;\n    private String ghiChu;\n    private String  ;\n    private Date ngayDK = new Date();\n    getters/setters\n}",
        dapAn: "hoten,boolean,manv"
    },
    {
        cauHoi: "Theo phân tích thì cấu trúc thông tin thống kê \"doanh thu từng chuyên đề\" bao gồm Chuyên đề,  , Số lượng học viên,  , Học phí cao nhất, Học phí thấp nhất, Học phí trung bình",
        dapAn: "so-luong-hoc-vien,so-luong-khoa-hoc"
    },
    {
        cauHoi: "Hình trên nêu ra các bước lập trình JDBC cơ bản. Hãy điền các thành phần còn thiếu vào các ô:\n1.  \n2.  \n3.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB1.png\">",
        dapAn: "Class,drivermanager,connection"
    },
    {
        cauHoi: "Phương thức fillTableLuongNguoiHoc() của NhanVienJDialog truy vấn và hiển thị lượng người học từng chuyên đề. Hãy hoàn thiện mã cho phương thức này\n    void fillTableLuongNguoiHoc(){\n        DefaultTableModel model = (DefaultTableModel) tblNguoiHoc.getModel();\n        model.setRowCount(0);\n        List < Object[] >  list = dao.  ();\n        for(Object[] row : list){\n            model.addRow(row);\n        }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Report-Learner.png\">",
        dapAn: "getluongnguoihoc"
    },
    {
        cauHoi: "Hoàn thiện đoạn mã sau để có thể kiểm tra một bản ghi đã tồn tại hay chưa theo giá trị của khóa chính.\nif(dao.  (id) != null){\n MsgBox.alert(this, “Mã đã tồn tại”);\n}",
        dapAn: "selectbyid"
    },
    {
        cauHoi: "Sử dụng  sẽ tránh được SQL Injection?",
        dapAn: "callablestatement"
    },
    {
        cauHoi: "Phương thức fillTableLuongNguoiHoc() của NhanVienJDialog truy vấn và hiển thị lượng người học từng chuyên đề. Hãy hoàn thiện mã cho phương thức này\n    void fillTableLuongNguoiHoc(){\n        DefaultTableModel model = (DefaultTableModel) tblNguoiHoc.getModel();\n        model.setRowCount(0);\n        List < Object[] >  list = dao.  ();\n        for(Object[] row : list){\n            model.addRow(row);\n        }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Report-Learner.png\">",
        dapAn: "getLuongNguoiHoc"
    },
    {
        cauHoi: "Hãy điền vào các ô trống để hoàn thiện lớp tiện ích Auth \npublic class Auth {\n    NhanVien user = null;\n    public static void clear() {\n        Auth.user = null;\n    }\n    public static boolean isLogin() {\n        return Auth.user != null;\n    }\n    public static boolean isManager() {\n        return Auth.isLogin() && user.getVaiTro();\n    }\n}",
        dapAn: "public,static"
    },
    {
        cauHoi: "CREATE TABLE NhanVien\n(\n MaNV NVARCHAR(50) NOT NULL,\n MatKhau NVARCHAR(50) NOT NULL,\n HoTen NVARCHAR(50) NOT NULL,\n VaiTro BIT NOT NULL,\n  (MaNV)\n)",
        dapAn: "Primary-key"
    },
    {
        cauHoi: "Trong quá trình phân tích yêu cầu của LapTrinhCity chúng ta phát hiện những thực thể nào?",
        dapAn: [
            "Chuyên đề",
            "Học viên",
            "Người học"
        ]
    },
    {
        cauHoi: "Phương thức getForm() của ChuyenDeJDialog được sử dụng để tạo đối tượng chuyên đề từ dữ liệu form. Hãy hoàn thiện mã cho phương thức getForm()\n    ChuyenDe getForm(){\n        ChuyenDe cd = new ChuyenDe();\n        cd.setMaCD(txtMaCD.getText());\n        cd.setTenCD(txtTenCD.getText());\n        cd.setThoiLuong(Integer.  (txtThoiLuong.getText()));\n        cd.setHocPhi(Double.valueOf(txtHocPhi.getText()));\n        cd.setMoTa(txtMota.getText());\n        cd.setHinh(lblHinh.  ());\n        return cd;\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Form-Sub.png\">",
        dapAn: "parseint,gettooltiptext"
    },
    {
        cauHoi: "CREATE TABLE NhanVien\n(\n MaNV NVARCHAR(50) NOT NULL,\n MatKhau NVARCHAR(50) NOT NULL,\n HoTen NVARCHAR(50) NOT NULL,\n VaiTro BIT NOT NULL,\n  (MaNV)\n)",
        dapAn: "PRIMARY-KEY"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB4.png\">",
        dapAn: "getString,getDouble"
    },
    {
        cauHoi: "Hình trên nêu ra các bước lập trình JDBC cơ bản. Hãy điền các thành phần còn thiếu vào các ô:\n1.  \n2.  \n3.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB1.png\">",
        dapAn: "Class,DriverManager,connection"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB3.png\">",
        dapAn: "createStatement,executeUpdate"
    },
    {
        cauHoi: "Hãy điền tên phương thức còn thiếu trong lớp ThongKeDAO\npublic class ThongKeDAO {\n    private List < Object[] >  getListOfArray(String sql, String[] cols, Object...args){\n        ...\n    }\n    public List < Object[] >  getBangDiem(Integer makh){\n        ...\n    }\n    public List < Object[] >  getLuongNguoiHoc(){\n        ...\n    }\n    public List < Object[] >  (){\n        ...\n    }\n    public List < Object[] >  getDoanhThu(int nam){\n        ...\n    }\n}",
        dapAn: "getdiemchuyende"
    },
    {
        cauHoi: "Lệnh Class.forName(\"  \")  được sử dụng để nạp driver vào ứng dụng JDBC. Hãy nhập chuỗi driver của hệ quản trị SQL Server.",
        dapAn: "com.microsoft.sqlserver.sqlserverdriver"
    },
    {
        cauHoi: "Hãy điền các kiểu Java tương ứng với kiểu SQL sau đây:\n1. NCHAR/NVARCHAR = >  \n2. BIT = >  \n3. FLOAT = >  \n4. BIGINT = >",
        dapAn: "string,boolean,double,long"
    },
    {
        cauHoi: "Hình trên nêu ra các bước lập trình JDBC cơ bản. Hãy điền các thành phần còn thiếu vào các ô:\n1.  \n2.  \n3.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB1.png\">",
        dapAn: "class,drivermanager,Connection"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB3.png\">",
        dapAn: "createStatement,executeupdate"
    },
    {
        cauHoi: "Hoàn thiện chuỗi kết nối đến CSDL SQL Server bằng cách điền vào phần còn thiếu.\n\"  :  ://localhost;database=EduSys\"",
        dapAn: "JDBC,SQLSERVER"
    },
    {
        cauHoi: "Hình trên là mã lập trình JDBC thao tác dữ liệu. Hãy điền vào ô trống các phương thức còn thiếu.\n1.  \n2.\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q3DB3.png\">",
        dapAn: "CREATESTATEMENT,EXECUTEUPDATE"
    },
    {
        cauHoi: "Gọi phương thức last() để hiển thị nhân viên cuối cùng của bảng tblNhanVien lên form. Hãy hoàn thiện mã cho phương thức này.\n    void last(){\n        this.row = tblNhanVien.  () - 1;\n        this.edit();\n    }",
        dapAn: "getRowCount"
    },
    {
        cauHoi: "Phương thức selectYears() của KhoaHocDAO được sử dụng để truy vấn các năm có khai giảng các khóa học. Hãy hoàn thiên phương thức này.\n    public List < Integer >  selectYears() {\n        String sql=\"SELECT  year(NgayKG) FROM KhoaHoc ORDER BY Year DESC\";\n        List < Integer >  list=new ArrayList <  > ();\n        try {\n           ResultSet rs = XJdbc.query(sql);\n           while(rs.next()){\n                 list.add(rs.getInt(1));\n            }\n            rs.getStatement().getConnection().close();\n            return list;\n        } \n        catch (SQLException ex) {\n            throw new RuntimeException(ex);\n        }\n    }",
        dapAn: "DISTINCT"
    },
    {
        cauHoi: "Khi chọn một chuyên đề thì khóa học thay đổi theo chuyên đề. Phương thức fillComboBoxKhoaHoc() chỉ hiển thị những khóa học theo chuyên đề được chọn. Hãy hoàn thiện phương thức này\n    void fillComboBoxKhoaHoc(){\n        DefaultComboBoxModel model = (DefaultComboBoxModel) cboKhoaHoc.getModel();\n        model.removeAllElements();\n        ChuyenDe chuyenDe = (ChuyenDe) cboChuyenDe.  ();\n        if(chuyenDe != null){\n            List < KhoaHoc >  list = khdao.  (chuyenDe.getMaCD());\n            for(KhoaHoc kh: list){\n                model.addElement(kh);\n            }\n            this.fillTableHocVien();\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q7-Student-Mark.png\">",
        dapAn: "getSelectedItem,selectbychuyende"
    },
    {
        cauHoi: "Sắp xếp thứ tự xuất hiện của các cửa sổ theo thiết kế:\n\r  =>  =>",
        dapAn: "cua so chao,cua so dang nhap,cua so chinh"
    },
    {
        cauHoi: "Sắp xếp thứ tự xuất hiện của các cửa sổ theo thiết kế:\n\r  =>  =>",
        dapAn: "cua-so-chao,cua-so-dang-nhap,cua-so-chinh"
    },
    {
        cauHoi: "Điền vào các ô trống còn thiếu để phương thức đổi mật khẩu sau đây thực hiện đúng yêu cầu:\n    private void doiMatKhau() {\n        String manv = txtMaNV.getText();\n        String matKhau = new String(txtMatKhau.getPassword());\n        String matKhauMoi = new String(txtMatKhauMoi.getPassword());\n        String matKhauMoi2 = new String(txtMatKhauMoi2.getPassword());\n        \n        if(!manv.  (Auth.user.getMaNV())){\n            MsgBox.alert(this, \"Sai tên đăng nhập!\");\n        }\n        else if(!matKhau.  (Auth.user.getMatKhau())){\n            MsgBox.alert(this, \"Sai mật khẩu!\");\n        }\n        else if(!matKhauMoi.equals(matKhauMoi2)){\n            MsgBox.alert(this, \"Xác nhận mật khẩu không đúng!\");\n        }\n        else{\n            Auth.user.setMatKhau(matKhauMoi);\n            dao.  (Auth.user);\n            MsgBox.alert(this, \"Đổi mật khẩu thành công!\");\n        }\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Change.png\">",
        dapAn: "equalsIgnoreCase,equals,update"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql delete một người học theo mã\n\"DELETE FROM  WHERE MaNH=?\"",
        dapAn: "NguoiHoc"
    },
    {
        cauHoi: "Theo hướng dẫn của bài học, để hoàn thiện đoạn mã đăng nhập bạn phải sử dụng phương thức nào để điền vào ô trống sau đây?\n        String manv = txtMaNV.getText();\n        String matKhau = new String(txtMatKhau.getPassword());\n        NhanVien nhanVien = dao.  (manv);\n        if(nhanVien == null){\n            MsgBox.alert(this, \"Sai tên đăng nhập!\");\n        }\n        else if(!matKhau.equals(nhanVien.getMatKhau())){\n            MsgBox.alert(this, \"Sai mật khẩu!\");\n        }\n        else{\n            Auth.user = nhanVien;\n            this.dispose();\n        }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q4-Login.png\">",
        dapAn: "selectById"
    },
    {
        cauHoi: "Với PreparedStatement người lập trình không cần phải xử lý  và  .",
        dapAn: " dau-nhay-don,unicode"
    },
    {
        cauHoi: "Phương thức update() của NhanVienJDialog được gọi để cập nhật thông tin nhân viên đang xem trên form. Hãy hoàn thành mã cho phương thức này.\n    void update(){\n        NhanVien nv = this.  ();\n        String mk2 = new String(txtMatKhau2.getPassword());\n        if(!mk2.equals(nv.getMatKhau())){\n            MsgBox.alert(this, \"Xác nhận mật khẩu không đúng!\");\n        }\n        else{\n            try {\n                dao.  (nv); // cập nhật\n                this.  (); // đổ lại bảng\n                MsgBox.alert(this, \"Cập nhật thành công!\");\n            } \n            catch (Exception e) {\n                MsgBox.alert(this, \"Cập nhật thất bại!\");\n            }\n        }\n    }",
        dapAn: "getForm,update,filltable"
    },
    {
        cauHoi: "Phương thức selectTab() của ThongKeJDialog được sử dụng để chọn Tab theo vị trí. Hãy hoàn thiên phương thức này.\n    public void selectTab(int index){\n        tabs.  (index);\n    }",
        dapAn: "setSelectedIndex"
    },
    {
        cauHoi: "Hãy điền vào ô trống để hoàn thiện câu lệnh sql delete một chuyên đề theo mã\n\"  FROM ChuyenDe WHERE MaCD=?\"",
        dapAn: "DELETE"
    },
    {
        cauHoi: "Phương thức setForm() được sử dụng để hiển thị thông tin của một đối tượng nhân viên lên form. Hãy hoàn thiện phương thức này.\n    void setForm(NhanVien nv){\n        txtMaNV.setText(  .getMaNV());\n        txtHoTen.setText(nv.getHoTen());\n        txtMatKhau.setText(nv.getMatKhau());\n        txtMatKhau2.setText(nv.getMatKhau());\n        rdoTruongPhong.setSelected(nv.  ());\n        rdoNhanVien.  (!nv.getVaiTro());\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q5-Form.png\">",
        dapAn: "nv,getvaitro,setSelected"
    },
    {
        cauHoi: "Phương thức selectByChuyenDe() của KhoaHocDAO truy vấn danh sách các khóa học theo mã chuyên đề để đỗ dữ liệu lên bảng khóa học. Hãy hoàn thiện mã cho phương thức này\n    public List < KhoaHoc >  selectByChuyenDe(String macd){\n        String sql=\"SELECT * FROM  WHERE  =?\";\n        return this.selectBySql(sql, macd);\n    }\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF2041+2020_T9+type@asset+block@Q6-Table-Course.png\">",
        dapAn: "KhoaHoc,macd"
    },
    {
        cauHoi: "vãi ",
        dapAn: "vãi"
    }

]
const search = () => {

    let node1 = document.getElementById("myInput").value
    let nodeDs = document.getElementById("dsCauHoi")
    console.log(node1);
    nodeDs.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].cauHoi.includes(node1) || arr[i].dapAn.includes(node1)) {
            nodeDs.innerHTML = nodeDs.innerHTML + `
            <p>
             <span> Câu hỏi số ${i} : </span> ${arr[i].cauHoi}
          </p>

             <Strong>Đáp án : </Strong> ${arr[i].dapAn}

            `
        }
    }

}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"));