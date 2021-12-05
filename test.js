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
            cauHoi :  "Chính phủ là cơ quan nhà nước có đặc điểm nào dưới đây?",
            dapAn :  "Chính phủ là cơ quan hành pháp"
        },
        {
            cauHoi :  "Các thành tố của hệ thống pháp luật là:",
            dapAn :  "Quy phạm pháp luật, chế định pháp luật, ngành luật"
        },
        {
            cauHoi :  "Ở Việt Nam, văn bản luật do cơ quan nào dưới đây ban hành?",
            dapAn :  "Quốc hội"
        },
        {
            cauHoi :  "Chọn phương án điền vào chỗ trống: “…………. là văn bản quy phạm pháp luật do Quốc hội - Cơ quan quyền lực nhà nước cao nhất - ban hành”",
            dapAn :  "Văn bản luật"
        },
        {
            cauHoi :  "Điều 29 khoản 2 của Bộ luật Dân sự năm 2015 quy định: “Cá nhân khi sinh ra được xác định dân tộc theo dân tộc của cha đẻ, mẹ đẻ. Trường hợp cha đẻ, mẹ đẻ thuộc hai dân tộc khác nhau thì dân tộc của con được xác định theo dân tộc của cha đẻ hoặc mẹ đẻ theo thỏa thuận của cha đẻ, mẹ đẻ; trường hợp không có thỏa thuận thì dân tộc của con được xác định theo tập quán; trường hợp tập quán khác nhau thì dân tộc của con được xác định theo tập quán của dân tộc ít người hơn”. Trong quy định này, có mấy quy phạm pháp luật?",
            dapAn :  "4"
        },
        {
            cauHoi :  "Phần tử nhỏ nhất tạo nên hệ thống pháp luật Việt Nam là gì?",
            dapAn :  "Quy phạm pháp luật"
        },
        {
            cauHoi :  "Trong Nhà nước CHXHCN Việt Nam, quyền lực Nhà nước thuộc về lực lượng nào dưới đây?",
            dapAn :  "Không đáp án nào đúng"
        },
        {
            cauHoi :  "Cơ quan nào dưới đây thuộc hệ thống các cơ quan quản lý trong bộ máy nhà nước của Việt Nam?",
            dapAn :  "Chính phủ"
        },
        {
            cauHoi :  "Theo quy định của pháp luật Việt Nam, khi các văn bản có quy định khác nhau về cùng một vấn đề thì áp dụng quy định của:",
            dapAn :  "Văn bản có hiệu lực pháp lý cao hơn"
        },
        {
            cauHoi :  "Ngành luật nào không có trong hệ thống pháp luật Việt Nam?",
            dapAn :  "Ngành luật doanh nghiệp"
        },
        {
            cauHoi :  "Trong bộ máy Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam thì Quốc hội là:",
            dapAn :  "Cả A, B, C đều đúng"
        },
        {
            cauHoi :  "Người đứng đầu cơ quan hành pháp trong bộ máy nhà nước của Việt Nam là:",
            dapAn :  "Thủ tướng chính phủ"
        },
        {
            cauHoi :  "Tiêu chí nào dưới đây không được sử dụng để xác định cơ quan nhà nước thuộc bộ máy nhà nước?",
            dapAn :  "Cơ quan nhà nước hoạt động trên cơ sở kinh phí do tư nhân cung cấp"
        },
        {
            cauHoi :  "Cơ quan nào dưới đây không thuộc hệ thống cơ quan xét xử trong bộ máy nhà nước của Việt Nam?",
            dapAn :  "Viện kiểm sát nhân dân"
        },
        {
            cauHoi :  "Quyền “lập hiến và lập pháp” thuộc về cơ quan nào dưới đây trong bộ máy nhà nước của Việt Nam?",
            dapAn :  "Quốc hội"
        },
        {
            cauHoi :  "Hiến pháp năm 2013 bao gồm bao nhiêu chương, bao nhiêu điều?",
            dapAn :  "11 chương, 120 điều"
        },
        {
            cauHoi :  "“Xây dựng con người Việt Nam có sức khỏe, văn hóa, giàu lòng yêu nước, có tinh thần đoàn kết, ý thức làm chủ, trách nhiệm công dân” là mục đích của chính sách nào được quy định trong Hiến pháp năm 2013?",
            dapAn :  "Chính sách văn hóa"
        },
        {
            cauHoi :  "Chính phủ Việt Nam đặt ra mục tiêu 1 triệu doanh nghiệp hoạt động trên thị trường Việt Nam. Chính phủ đang thực hiện chính sách nào được quy định trong Hiến pháp năm 2013?",
            dapAn :  "Chính sách kinh tế"
        },
        {
            cauHoi :  "Để thực hiện chính sách Khoa học và Công nghệ theo Hiến pháp năm 2013, Nhà nước Việt Nam:",
            dapAn :  "Bảo hộ quyền sở hữu trí tuệ"
        },
        {
            cauHoi :  "Theo Hiến pháp năm 2013, hình thức lao động nào dưới đây bị cấm?",
            dapAn :  "Lao động cưỡng bức"
        },
        {
            cauHoi :  "Ở Việt Nam, Hiến pháp do ai ban hành?",
            dapAn :  "Quốc hội"
        },
        {
            cauHoi :  "Ở Việt Nam hiện nay, hệ thống tòa án được tổ chức gồm:",
            dapAn :  "Tòa án nhân dân tối cao; Tòa án nhân dân cấp cao; Tòa án nhân dân cấp tỉnh; Tòa án nhân dân cấp huyện."
        },
        {
            cauHoi :  "Hiến pháp Việt Nam năm 2013 xác định phát triển khoa học và công nghệ là:",
            dapAn :  "Quốc sách hàng đầu, giữ vai trò then chốt trong sự nghiệp phát triển kinh tế - xã hội của đất nước."
        },
        {
            cauHoi :  "Mục đích phát triển kinh tế theo Hiến pháp là:",
            dapAn :  "Dân giàu, nước mạnh, công bằng, dân chủ, văn minh"
        },
        {
            cauHoi :  "Theo Hiến pháp năm 2013, văn hóa Việt Nam được bảo tồn và phát triển với phương châm:",
            dapAn :  "Tiên tiến, đậm đà bản sắc dân tộc, tiếp thu tinh hoa văn hóa nhân loại"
        },
        {
            cauHoi :  "Đại hội Đảng toàn quốc lần thứ XI khẳng định nền kinh tế Việt Nam là nền kinh tế thị trường định hướng xã hội chủ nghĩa có bao nhiêu hình thức sở hữu?",
            dapAn :  "4"
        },
        {
            cauHoi :  "Tính đến năm 2018, Việt Nam có mấy bản Hiến pháp?",
            dapAn :  "5"
        },
        {
            cauHoi :  "Theo Hiến pháp năm 2013, bảo vệ Tổ quốc Việt Nam XHCN là:",
            dapAn :  "Tất cả đều đúng"
        },
        {
            cauHoi :  "“Bảo vệ các quyền và lợi ích hợp pháp của bà mẹ, trẻ em trong quan hệ gia đình” là một trong những mục đích của chính sách nào được quy định trong Hiến pháp năm 2013?",
            dapAn :  "Chính sách xã hội"
        },
        {
            cauHoi :  "Theo Hiến pháp năm 2013, công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam là:",
            dapAn :  "Người có quốc tịch Việt Nam"
        },
        {
            cauHoi :  "Ai là người trong hội đồng xét xử được tham gia nghị án trong phiên tòa hình sự sơ thẩm?",
            dapAn :  "Thẩm phán và Hội thẩm nhân dân"
        },
        {
            cauHoi :  "Theo pháp luật tố tụng hình sự Việt Nam, trong giai đoạn khởi tố vụ án hình sự, việc xác định dấu hiệu tội phạm không dựa vào cơ sở nào dưới đây?",
            dapAn :  "Tố giác của công dân"
        },
        {
            cauHoi :  "Giám đốc thẩm là xét xử lại vụ án đã có hiệu lực pháp luật khi:",
            dapAn :  "Phát hiện sai phạm trong quy trình tố tụng"
        },
        {
            cauHoi :  "Theo Bộ luật Hình sự năm 2015, trục xuất là hình phạt được áp dụng cho:",
            dapAn :  "Người nước ngoài phạm tội trên lãnh thổ Việt Nam"
        },
        {
            cauHoi :  "Theo pháp luật tố tụng hình sự Việt Nam, hội đồng xét xử phúc thẩm một vụ án hình sự bao gồm:",
            dapAn :  "3 thẩm phán, trong trường hợp cần thiết có thêm hai hội thẩm nhân dân"
        },
        {
            cauHoi :  "Ông A phạm tội ít nghiêm trọng. Thời hiệu truy cứu trách nhiệm hình sự đối với ông A là:",
            dapAn :  "5 năm kể từ ngày tội phạm được thực hiện"
        },
        {
            cauHoi :  "Theo Bộ luật Hình sự năm 2015, thời hiệu truy cứu trách nhiệm hình sự là 05 năm được áp dụng đối với:",
            dapAn :  "Tội phạm ít nghiêm trọng"
        },
        {
            cauHoi :  "Theo pháp luật tố tụng hình sự Việt Nam, quy trình giải quyết một vụ án hình sự gồm:",
            dapAn :  "5 giai đoạn"
        },
        {
            cauHoi :  "Chủ thể nào dưới đây khi phạm tội phải chịu trách nhiệm hình sự?",
            dapAn :  "Công ty TNHH M"
        },
        {
            cauHoi :  "Theo pháp luật tố tụng hình sự Việt Nam, trong quy trình giải quyết một vụ án hình sự, giai đoạn nào dưới đây được thực hiện bởi cơ quan công an có thẩm quyền?",
            dapAn :  "Xét xử"
        },
        {
            cauHoi :  "Các hình thức xử phạt vi phạm hành chính bao gồm:",
            dapAn :  "Cảnh cáo, phạt tiền, tước quyền sử dụng giấy phép, tịch thu tang vật, phương tiện được sử dụng để vi phạm hành chính, buộc tháo dỡ khôi phục tình trạng ban đầu."
        },
        {
            cauHoi :  "Phương pháp điều chỉnh của pháp luật hình sự là:",
            dapAn :  "Quyền uy"
        },
        {
            cauHoi :  "Trình tự xét xử tại một phiên tòa hình sự bao gồm:",
            dapAn :  "Khai mạc, xét hỏi, tranh luận, nghị án, tuyên án"
        },
        {
            cauHoi :  "Theo Bộ luật Hình sự năm 2015, thời hiệu truy cứu trách nhiệm hình sự là 20 năm được áp dụng đối với:",
            dapAn :  "Tội phạm đặc biệt nghiêm trọng"
        },
        {
            cauHoi :  "Theo pháp luật hình sự Việt Nam, nhận định nào dưới đây là đúng khi nói về pháp nhân thương mại phạm tội?",
            dapAn :  "Không có đáp án nào đúng"
        },
        {
            cauHoi :  "Theo Luật Xử lý vi phạm hành chính năm 2012, việc áp dụng biện pháp xử lý hành chính phải:",
            dapAn :  "Nhanh chóng, công khai, khách quan, đúng thẩm quyền, đảm bảo công bằng, đúng quy định"
        },
        {
            cauHoi :  "Điều 8 khoản 1 Nghị định số 42/2019/NĐ-CP của Chính phủ ngày 16/05/2019 quy định: “Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối với hành vi không thực hiện đúng nội dung văn bản chấp thuận hoặc phương án khai thác loài thủy sản nguy cấp, quý hiếm.” Nếu một tổ chức vi phạm quy định này và không có tình tiết tăng nặng hoặc giảm nhẹ, tổ chức đó bị xử phạt khoản tiền là:",
            dapAn :  "60 triệu đồng"
        },
        {
            cauHoi :  "Dấu hiệu vi phạm hành chính bao gồm:",
            dapAn :  "Tất cả đều đúng"
        },
        {
            cauHoi :  "Theo Luật Xử lý vi phạm hành chính năm 2012, một hành vi vi phạm hành chính có thể bị xử phạt bao nhiêu lần?",
            dapAn :  "1 lần"
        },
        {
            cauHoi :  "Ông H chạy xe mô tô trên đường và bị công an kiểm tra nồng độ cồn. Nồng độ cồn của ông H là 0,8 miligram/1 lít khí thở. Theo Nghị định số 46/2016/NĐ-CP ngày 26/05/2016 của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt, ông H bị xử phạt tiền ở mức từ 3 triệu đồng đến 4 triệu đồng. Mức tiền phạt tối thiểu mà ông H phải nộp, trong tình huống có tình tiết giảm nhẹ là:",
            dapAn :  "3 triệu đồng"
        },
        {
            cauHoi :  "Theo Luật Xử lý vi phạm hành chính năm 2012, hình thức xử phạt nào dưới đây có thể là hình thức xử phạt chính hoặc là hình thức xử phạt bổ sung?",
            dapAn :  "Tịch thu phương tiện được sử dụng để vi phạm hành chính"
        },
        {
            cauHoi :  "Xử phạt vi phạm hành chính không bao gồm nguyên tắc nào dưới đây?",
            dapAn :  "Một hành vi vi phạm hành chính có thể bị xử phạt nhiều lần"
        },
        {
            cauHoi :  "Theo Luật Xử lý vi phạm hành chính năm 2012, biện pháp ngăn chặn và bảo đảm xử lý vi phạm hành chính không bao gồm biện pháp nào dưới đây?",
            dapAn :  "Buộc thu hồi sản phẩm, hàng hóa không đảm bảo chất lượng"
        },
        {
            cauHoi :  "Một số yếu tố có thể kết hợp khi xác định hành vi vi phạm pháp luật hành chính không bao gồm:",
            dapAn :  "Cách thức thực hiện hành vi"
        },
        {
            cauHoi :  "Lỗi cố ý trong vi phạm hành chính thường được hiểu là:",
            dapAn :  "Đã nhận thức được hành vi của mình là nguy hiểm cho xã hội, bị pháp luật cấm thực hiện nhưng vẫn thực hiện"
        },
        {
            cauHoi :  "Cơ quan nào sau đây không thuộc cơ quan hành chính nhà nước?",
            dapAn :  "Hội đồng nhân dân"
        },
        {
            cauHoi :  "Cơ sở để truy cứu trách nhiệm hành chính là:",
            dapAn :  "Vi phạm hành chính"
        },
        {
            cauHoi :  "Ông X đèo con mình là em K (15 tuổi) trên một chiếc xe mô tô. Ông X vượt đèn đỏ và bị công an dừng xe và xử phạt. Nhận định nào dưới đây là đúng?",
            dapAn :  "Chỉ ông X phải nộp phạt"
        },
        {
            cauHoi :  "Quan hệ pháp luật hành chính nội bộ là:",
            dapAn :  "Quan hệ pháp luật điều chỉnh mối quan hệ giữa các chủ thể có mối quan hệ lệ thuộc về mặt tổ chức"
        },
        {
            cauHoi :  "Theo Luật xử lý vi phạm hành chính năm 2012, người nào trong cơ quan thuế có quyền phạt tiền đến 25 triệu đồng?",
            dapAn :  "Chi cục trưởng chi cục thuế"
        },
        {
            cauHoi :  "Theo pháp luật dân sự Việt Nam, chủ thể của quyền sở hữu là:",
            dapAn :  "Người đang sở hữu tài sản"
        },
        {
            cauHoi :  "Theo Bộ luật Dân sự năm 2015, chế tài phạt do vi phạm hợp đồng được áp dụng:",
            dapAn :  "Khi các bên có thỏa thuận trong hợp đồng về việc áp dụng chế tài phạt"
        },
        {
            cauHoi :  "Theo Bộ luật Dân sự năm 2015, điều kiện nào sau đây không phải là điều kiện hiệu lực của hợp đồng?",
            dapAn :  "Mục đích của hợp đồng không được vi phạm điều cấm của pháp luật"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Dân sự năm 2015, các bên tham gia giao kết hợp đồng:",
            dapAn :  "Cả ba đáp án trên đều sai"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Dân sự năm 2015, khi áp dụng chế tài phạt, mức phạt:",
            dapAn :  "Do các bên thỏa thuận trong hợp đồng"
        },
        {
            cauHoi :  "Theo Bộ luật Dân sự năm 2015, một bên không có quyền hủy bỏ hợp đồng và không phải bồi thường thiệt hại trong trường hợp nào dưới đây?",
            dapAn :  "Bên kia vi phạm không cơ bản nghĩa vụ hợp đồng"
        },
        {
            cauHoi :  "Theo Bộ luật Dân sự năm 2015, đối tượng của quyền sở hữu không bao gồm:",
            dapAn :  "Quyền hình ảnh"
        },
        {
            cauHoi :  "Theo Bộ luật dân sự năm 2015, nguyên tắc nào dưới đây không phải là nguyên tắc của pháp luật dân sự Việt Nam?",
            dapAn :  "Nguyên tắc giao dịch có lợi"
        },
        {
            cauHoi :  "Anh A ăn trộm chiếc xe máy dựng ở vỉa hè. Theo Bộ luật Dân sự năm 2015, việc chiếm hữu của anh A đối với chiếc xe máy đó là:",
            dapAn :  "Chiếm hữu không có căn cứ pháp luật nhưng không ngay tình"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Dân sự năm 2015, hợp đồng sẽ hình thành khi:",
            dapAn :  "Các bên đồng ý về tất cả các điều khoản của hợp đồng"
        },
        {
            cauHoi :  "Theo quy định của Luật dân sự, quyền sở hữu tài sản bao gồm:",
            dapAn :  "Quyền chiếm hữu, quyền sử dụng và quyền định đoạt"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Dân sự năm 2015, hợp đồng cung ứng dịch vụ có đối tượng là:",
            dapAn :  "Hành vi"
        },
        {
            cauHoi :  "Quan hệ nhân thân khác với quan hệ tài sản thuộc phạm vi điều chỉnh của pháp luật dân sự Việt Nam là:",
            dapAn :  "Quan hệ nhân thân không thể chuyển dịch được cho người khác"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Dân sự năm 2015, cá nhân có năng lực hành vi dân sự đầy đủ khi:",
            dapAn :  "Từ đủ 18 tuổi trở lên"
        },
        {
            cauHoi :  "Theo quy định của Luật dân sự, căn cứ nào sau đây không được coi là căn cứ xác lập quyền sở hữu tài sản hợp pháp?",
            dapAn :  "Do trộm cắp, chiếm đoạt bất hợp pháp không ngay tình của người khác"
        },
        {
            cauHoi :  "Theo Bộ luật Lao động năm 2012 và pháp luật có liên quan, phần bảo hiểm xã hội mà người lao động phải đóng không bao gồm:",
            dapAn :  "Bảo hiểm tai nạn lao động, bệnh nghề nghiệp"
        },
        {
            cauHoi :  "Bộ luật Dân sự hiện hành có hiệu lực từ ngày",
            dapAn :  "01/01/2017"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Lao động, tiền lương làm thêm của người lao động vào ngày nghỉ hàng tuần theo giờ tiêu chuẩn là:",
            dapAn :  "2"
        },
        {
            cauHoi :  "Theo Bộ luật Lao động năm 2012, khi một bên muốn sửa đổi, bổ sung hợp đồng lao động, bên đó phải thông báo cho bên kia trước ít nhất:",
            dapAn :  "3 ngày làm việc"
        },
        {
            cauHoi :  "Luật Lao động điều chỉnh mối quan hệ giữa",
            dapAn :  "Cả A, B, C đều đúng"
        },
        {
            cauHoi :  "Theo Bộ luật Lao động, người lao động nghỉ việc mà vẫn hưởng nguyên lương trong trường hợp nào dưới đây?",
            dapAn :  "Cả A, B, C đều đúng"
        },
        {
            cauHoi :  "Công ty P ký hợp đồng lao động 12 tháng với ông Q. Hết thời hạn 12 tháng, ông Q vẫn tiếp tục làm việc nhưng công ty P không ký hợp đồng lao động mới. Theo Bộ luật Lao động năm 2012, nhận định nào dưới đây đúng?",
            dapAn :  "Hợp đồng lao động 12 tháng trở thành hợp đồng lao động không xác định thời hạn"
        },
        {
            cauHoi :  "Các quan hệ xã hội phát sinh trước khi có quan hệ lao động thuộc phạm vi điều chỉnh của luật lao động không bao gồm quan hệ nào dưới đây?",
            dapAn :  "Quan hệ giữa một người làm thêm và công ty nơi người đó làm thêm"
        },
        {
            cauHoi :  "Theo Bộ luật Lao động năm 2012, người nào dưới đây là người sử dụng lao động?",
            dapAn :  "Các doanh nghiệp"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Lao động năm 2012, đình công sẽ bị coi là bất hợp pháp khi:",
            dapAn :  "Tất cả các đáp án trên đều đúng"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Lao động, người sử dụng lao động là cá nhân phải là người:",
            dapAn :  "Đủ 18 tuổi"
        },
        {
            cauHoi :  "Nhận định nào dưới đây đúng khi nói về các nguyên tắc của luật lao động?",
            dapAn :  "Khuyến khích các thỏa thuận có lợi hơn cho người lao động"
        },
        {
            cauHoi :  "Nhận định nào dưới đây là đúng khi nói về quyền của người lao động?",
            dapAn :  "Người lao động không có quyền yêu cầu người sử dụng điều chỉnh mức đóng bảo hiểm thất nghiệp"
        },
        {
            cauHoi :  "Theo quy định của Bộ luật Lao động năm 2012, thời hiệu khởi kiện đối với tranh chấp về bồi thường thiệt hại cho người sử dụng lao động trong tranh chấp lao động cá nhân là bao nhiêu năm kể từ ngày mỗi bên tranh chấp cho rằng quyền và lợi ích của mình bị vi phạm?",
            dapAn :  "1 năm"
        },
        {
            cauHoi :  "Công ty TNHH A tuyển bà Q làm nhân viên tạp vụ với thời hạn 36 tháng. Theo quy định của Bộ luật Dân sự năm 2012, hợp đồng lao động với bà Q phải được lập dưới hình thức nào?",
            dapAn :  "Văn bản"
        },
        {
            cauHoi :  "Chủ thể của tham nhũng là:",
            dapAn :  "Người có chức vụ, quyền hạn"
        },
        {
            cauHoi :  "Theo Luật Phòng, chống tham nhũng năm 2018, hành vi nào dưới đây là hành vi tham nhũng trong khu vực nhà nước:",
            dapAn :  "Lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi"
        },
        {
            cauHoi :  "Ông K làm trưởng phòng Quản lý đô thị của Quận P. Ông K đã nhận một khoản tiền từ bà P để “lờ” đi sai phạm trong xây dựng của bà P. Hành vi của ông K, theo Luật Phòng, chống tham nhũng năm 2018, là:",
            dapAn :  "Không thực hiện nhiệm vụ, công vụ vì vụ lợi"
        },
        {
            cauHoi :  "Công dân không có trách nhiệm nào dưới đây trong phòng chống tham nhũng?",
            dapAn :  "Không đáp án nào đúng"
        },
        {
            cauHoi :  "Trong công tác phòng, chống tham nhũng, Ban thanh tra nhân dân không có trách nhiệm nào dưới đây:",
            dapAn :  "Trực tiếp xem xét đơn kiến nghị và xác minh hành vi tham nhũng"
        },
        {
            cauHoi :  "Hành vi nào sau đây là hành vi tham ô tài sản:",
            dapAn :  "Lợi dụng chức vụ, quyền hạn chiếm đoạt tài sản mà mình có trách nhiệm quản lý."
        },
        {
            cauHoi :  "Nguyên nhân tham nhũng nào sau đây không thuộc nhóm nguyên nhân chủ quan:",
            dapAn :  "Chính sách pháp luật chưa đầy đủ, thiếu đồng bộ, thiếu nhất quán"
        },
        {
            cauHoi :  "Tham nhũng là hành vi của người có chức vụ, quyền hạn nhằm mục đích gì?",
            dapAn :  "Vụ lợi"
        },
        {
            cauHoi :  "Luật Phòng chống tham nhũng năm 2018 có hiệu lực thay thế cho:",
            dapAn :  "Luật Phòng, chống tham nhũng năm 2005"
        },
        {
            cauHoi :  "Trong Luật Phòng chống tham nhũng năm 2018, các quy định về “chế độ trách nhiệm của người đứng đầu cơ quan, tổ chức, đơn vị trong phòng, chống tham nhũng” được đưa vào trong:",
            dapAn :  "Chương 4 của Luật"
        },
        {
            cauHoi :  "Khi tố cáo hành vi tham nhũng, công dân không có trách nhiệm nào dưới đây?",
            dapAn :  "Số tiền mà người có hành vi tham nhũng có được"
        },
        {
            cauHoi :  "Một trong những điểm mới của Luật Phòng, chống tham nhũng năm 2018 là:",
            dapAn :  "Luật điều chỉnh cả hành vi tham nhũng của doanh nghiệp, tổ chức khu vực ngoài Nhà nước"
        },
        {
            cauHoi :  "Theo Luật Phòng, chống tham nhũng năm 2018, hành vi tham nhũng trong khu vực nhà nước không bao gồm:",
            dapAn :  "Cố ý làm trái gây hậu quả nghiêm trọng"
        },
        {
            cauHoi :  "Tác hại về chính trị của tham nhũng bao gồm:",
            dapAn :  "Làm giảm sút lòng tin của dân chúng vào sự lãnh đạo của Đảng"
        },
        {
            cauHoi :  "Nguyên nhân nào dưới đây không phải là nguyên nhân của tham nhũng ở Việt Nam?",
            dapAn :  "Môi trường kinh doanh đang ngày càng được cải thiện"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, chi nhánh công ty Q là:",
            dapAn :  "Không có đáp án nào đúng"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, tổ chức nào dưới đây là tổ chức xã hội tham gia bảo vệ quyền lợi người tiêu dùng?",
            dapAn :  "Hiệp hội bảo vệ quyền lợi người tiêu dùng"
        },
        {
            cauHoi :  "Người nào dưới đây không phải là người tiêu dùng?",
            dapAn :  "Bà M mua sữa về để làm sữa chua bán"
        },
        {
            cauHoi :  "Người tiêu dùng là:",
            dapAn :  "Người mua, sử dụng hàng hóa dịch vụ cho mục đích tiêu dùng, sinh hoạt của cá nhân, gia đình, tổ chức."
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010,  tổ chức, cá nhân kinh doanh hàng hóa, dịch vụ không có trách nhiệm nào dưới đây?",
            dapAn :  "Thu tiền bán hàng từ người tiêu dùng"
        },
        {
            cauHoi :  "Cửa hàng điện máy M tiến hành sửa chữa tủ lạnh cho bà H trong thời hạn bảo hành của chiếc tủ lạnh này. Theo Luật Bảo vệ quyền lợi người tiêu dùng, cửa hàng điện máy M đang thực hiện trách nhiệm:",
            dapAn :  "Bảo hành hàng hóa, linh kiện, phụ kiện"
        },
        {
            cauHoi :  "Theo pháp luật Việt Nam hiện hành, tổ chức, người nào dưới đây là cá nhân hoạt động thương mại độc lập, thường xuyên không phải đăng ký kinh doanh?",
            dapAn :  "Người buôn bán vặt"
        },
        {
            cauHoi :  "Chủ đầu tư dự án chung cư GS, trước khi ký hợp đồng bán căn hộ chung cư cho các khách hàng, đã phải đăng ký mẫu hợp đồng với cơ quan nhà nước có thẩm quyền. Theo Luật Bảo vệ quyền lợi người tiêu dùng, chủ đầu tư dự án chung cư GS đang thực hiện trách nhiệm:",
            dapAn :  "Kiểm soát hợp đồng theo mẫu, điều kiện giao dịch chung"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, biên bản hòa giải thành không cần có nội dung nào sau đây?",
            dapAn :  "Cam kết của các bên về việc sẽ không khởi kiện ra tòa án"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, tổ chức xã hội tham gia bảo vệ quyền lợi người tiêu dùng không có trách nhiệm nào dưới đây?",
            dapAn :  "Giải quyết tranh chấp giữa người tiêu dùng và người bán hàng hóa"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, trong giải quyết tranh chấp về bảo vệ quyền lợi người tiêu dùng, người có nghĩa vụ chứng minh lỗi gây ra thiệt hại là:",
            dapAn :  "Tổ chức, cá nhân kinh doanh hàng hóa dịch vụ"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, ai là người có thẩm quyền quyết định bên có lỗi trong vụ án dân sự về bảo vệ quyền lợi người tiêu dùng?",
            dapAn :  "Tòa án"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng, nhận định nào dưới đây là đúng khi nói về các cá nhân hoạt động thương mại độc lập, thường xuyên và không phải đăng ký kinh doanh?",
            dapAn :  "Họ không phải là thương nhân"
        },
        {
            cauHoi :  "Công ty P sau khi bán một hợp đồng bảo hiểm nhân thọ cho bà M đã cung cấp cho bà M một hóa đơn. Theo Luật Bảo vệ quyền lợi người tiêu dùng, công ty P đang thực hiện trách nhiệm:",
            dapAn :  "Cung cấp bằng chứng giao dịch"
        },
        {
            cauHoi :  "Theo Luật Bảo vệ quyền lợi người tiêu dùng năm 2010, nếu người tiêu dùng yêu cầu tổ chức kinh doanh hàng hóa phải bồi thường, nghĩa vụ chứng minh thiệt hại thuộc về:",
            dapAn :  "Người tiêu dùng"
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