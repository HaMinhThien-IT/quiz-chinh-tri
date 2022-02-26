function autocomplete(inp) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].cauHoi.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].cauHoi.substr(0, val.length) + "</strong>";
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
        if (currentFocus < 0) currentFocus = (x.length - 1);

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
           cauHoi:"C.Mác và Ph. Angghen đã chia chủ nghĩa cộng sản thành bao nhiêu giai đoạn phát triển?",
           dapAn:"2"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội được tính từ khi?",
           dapAn:"Cách mạng tháng Mười Nga 1917"
        },
        {
           cauHoi:"Hồ Chí Minh đi tìm đường cứu nước bắt đầu từ đâu?",
           dapAn:"TP. Hồ Chí Minh"
        },
        {
           cauHoi:"Chủ nghĩa xã hội khoa học ra đời từ điều kiện kinh tế - xã hội nào?",
           dapAn:"Sự phát triển lớn mạnh của phương thức sản xuất tư bản và sự lớn mạnh của giai cấp công nhân"
        },
        {
           cauHoi:"Trước khi có học thuyết Mác, kết quả các phong trào đấu tranh của giai cấp vô sản chống giai cấp tư sản đều?",
           dapAn:"Thất bại"
        },
        {
           cauHoi:"Trong lịch sử phát triển các hình thái kinh tế - xã hội, chính trị xuất hiện vào thời kỳ?",
           dapAn:"Chiếm hữu nô lệ"
        },
        {
           cauHoi:"Chức năng cơ bản của môn học chính trị trong trường nghề là?",
           dapAn:"Nhận thức khoa học và giáo dục tư tưởng phẩm chất đạo đức, lối sống"
        },
        {
           cauHoi:"Sự phát minh và ứng dụng rộng rãi các thành tựu khoa học (cả khoa học lý luận và khoa học tự nhiên) cuối thế kỷ XIX ở Châu Âu đã tác động như thế nào đến chủ nghĩa Mác?",
           dapAn:"Củng cố về lý luận và cơ sở khoa học"
        },
        {
           cauHoi:"Chức năng chung của môn học chính trị là?",
           dapAn:"Góp phần đào tạo người lao động nhận thức đúng về tri thức khoa học chính trị và rèn luyện phẩm chất chính trị phù hợp"
        },
        {
           cauHoi:"Sau khi học xong môn học chính trị người học cần vận dụng kiến thức như thế nào?",
           dapAn:"Để rèn luyện trở thành người lao động có phẩm chất chính trị vững vàng, đạo đức tốt, năng lực công tác"
        },
        {
           cauHoi:"Chủ nghĩa Mác - Lênin do ai sáng lập nên?",
           dapAn:"Mác - Ăngghen"
        },
        {
           cauHoi:"Nguồn gốc lý luận trực tiếp hình thành nên chủ nghĩa xã hội khoa học là:",
           dapAn:"Chủ nghĩa xã hội không tưởng ở Pháp"
        },
        {
           cauHoi:"Đâu là hệ tư tưởng tiến bộ nhất, giúp nhân dân lao động và thuộc địa giành lại độc lập, tự do?",
           dapAn:"Chủ nghĩa Mác - Lênin"
        },
        {
           cauHoi:"Chính trị xuất hiện khi nào?",
           dapAn:"Khi xã hội có sự phân chia giai cấp"
        },
        {
           cauHoi:"Mác, Ph.Ăngghen có mối quan hệ gắn bó và hiểu biết sâu sắc các phong trào của giai cấp nào?",
           dapAn:"Giai cấp công nhân"
        },
        {
           cauHoi:"Các cuộc đấu tranh tiêu biểu của giai cấp công nhân đầu thế kỷ XIX làm tiền đề hình thành chủ nghĩa Mác là?",
           dapAn:"Phong trào công nhân dệt ở Lyon (Pháp), Hiến chương của công nhân Anh, Công nhân dệt ở Xilêđi (Đức)"
        },
        {
           cauHoi:"Những thành tựu khoa học tự nhiên là cơ sở khoa học trực tiếp hình thành chủ nghĩa Mác là:",
           dapAn:"Học thuyết về sự tiến hóa các loài của Đacuyn, Định luật bảo toàn và chuyển hóa năng lượng của Lomoloxop, Thuyết tiến hóa các loài của Svac, Slaydel"
        },
        {
           cauHoi:"Ph. Ăngghen đã chia vận động của vật chất thành bao nhiêu hình thức cơ bản?",
           dapAn:"5"
        },
        {
           cauHoi:"Theo chủ nghĩa Mác – Lênin, mối quan hệ giữa vật chất và ý thức được thể hiện như thế nào?",
           dapAn:"Vật chất có trước, ý thức có sau, vật chất quyết định ý thức, thức có sự tác động trở lại đối với vật chất"
        },
        {
           cauHoi:"Trong các hình thức vận động sau của vật chất thì hình thức vận động nào là cao nhất?",
           dapAn:"Xã hội"
        },
        {
           cauHoi:"Phép biện chứng duy vật có những nguyên lý cơ bản là:",
           dapAn:"Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển"
        },
        {
           cauHoi:"Phát triển là một khuynh hướng của vận động đối với các sự vật hiện tượng bao gồm :",
           dapAn:"Đi từ thấp đến cao, từ đơn giản đến phức tạp, kém hoàn thiện đến hoàn thiện hơn, bao hàm cả sự thụt lùi đi xuống làm tiền đề cho sự phát triển"
        },
        {
           cauHoi:"Phản ánh đặc biệt của bộ óc con người với hiện thực khách quan được thể hiện như thế nào?",
           dapAn:"Phản ánh có sự tích cực, chủ động, sáng tạo; có quy trình tự trao đổi thông tin giữa chủ thể và đối tượng có chọn lọc và định hướng, mô hình hóa trong tư duy, hiện thực hóa qua hoạt đông thực tiễn"
        },
        {
           cauHoi:"Theo lý luận của chủ nghĩa Mác – Lênin, ý thức được hình thành từ các nguồn gốc?",
           dapAn:"Tự nhiên, xã hội"
        },
        {
           cauHoi:"Theo chủ nghĩa Mác – Lênin, bản chất của ý thức được hình thành như thế nào?",
           dapAn:"Phản ánh thế giới khách quan vào bộ óc người"
        },
        {
           cauHoi:"Định nghĩa “Vật chất là một phạm trù của triết học dùng để chỉ thực tại khách quan, được đem lại cho con người trong cảm giác, được cảm giác chép lại, chụp lại, phản ánh không lệ thuộc vào cảm giác” của nhà tư tưởng nào?",
           dapAn:"V.I.Lênin"
        },
        {
           cauHoi:"Giai đoạn sau của quá trình nhận thức (nhận thức lý tính) ở con người, bao gồm:",
           dapAn:"Từ khái niệm đến phán đoán và suy lý"
        },
        {
           cauHoi:"Đâu là một trong những giai đoạn của quá trình nhận thức?",
           dapAn:"Trực quan sinh động"
        },
        {
           cauHoi:"Giai đoạn đầu của quá trình nhận thức (nhận thức cảm tính) ở con người, bao gồm:",
           dapAn:"Từ cảm giác đến tri giác và biểu tượng"
        },
        {
           cauHoi:"Nguyên nhân của sự phát triển trong các sự vật hiện tượng là?",
           dapAn:"Do sự liên hệ tác động qua lại giữa các mặt, các yếu tố bên trong của sự vật hiện tượng"
        },
        {
           cauHoi:"Ý nghĩa phương pháp luận của nguyên lý về mối liên hệ phổ biến là?",
           dapAn:"Có quan điểm toàn diện trong nhìn nhận và đánh giá về sự vật và hiện tượng"
        },
        {
           cauHoi:"Quy trình nhận thức của con người trải qua các giai đoạn nào sau đây?",
           dapAn:"Từ trực quan sinh động đến tư duy trừu tượng"
        },
        {
           cauHoi:"Trong quan hệ sản xuất, yếu tố nào mang tính quyết định nhất ?",
           dapAn:"Quan hệ sở hữu về tư liệu sản xuất"
        },
        {
           cauHoi:"Vai trò của thực tiễn đối với hoạt động nhận thức của con người là?",
           dapAn:"Là cơ sở, nguồn gốc của nhận thức, động lực, mục đích của nhận thức, tiêu chuẩn của chân lý"
        },
        {
           cauHoi:"Đảng ta chủ trương phát triển lực lượng sản xuất bằng cách?",
           dapAn:"Thực hiện công cuộc công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức"
        },
        {
           cauHoi:"Theo lý luận của chủ nghĩa Mác – Lênin, nguồn gốc vận động của vật chất là:",
           dapAn:"Tự thân vận động, do mâu thuẫn bên trong quyết định"
        },
        {
           cauHoi:"Trong lực lượng sản xuất, yếu tố nào cách mạng nhất?",
           dapAn:"Công cụ lao động"
        },
        {
           cauHoi:"Hoạt động thực tiễn là hoạt động vật chất của con người tác động vào thế giới khách quan bao gồm những thình thức nào?",
           dapAn:"Hoạt động sản xuất vật chất, hoạt động chính trị - xã hội, hoạt động thực nghiệm khoa học"
        },
        {
           cauHoi:"Phương thức sản của một hình thái kinh tế xã hội là gì?",
           dapAn:"Cách thức tiến hành tổ chức sản xuất vật chất"
        },
        {
           cauHoi:"Động lực chủ yếu của tiến bộ xã hội là?",
           dapAn:"Sự phát triển của lực lượng sản xuất"
        },
        {
           cauHoi:"Phép biện chứng duy vật có những quy luật cơ bản là?",
           dapAn:"Quy luật mâu thuẫn, quy luật lượng - chất, quy luật phủ định của phủ định"
        },
        {
           cauHoi:"Theo chủ nghĩa Mác –Lênin, tính thống nhất của thế giới thể hiện ở?",
           dapAn:"Tính vật chất"
        },
        {
           cauHoi:"Vai trò của một phương thức sản xuất đối với sự phát triển xã hội là:",
           dapAn:"Quyết định tính chất của xã hội, tổ chức kết cấu của một xã hội, sự chuyển hóa của xã hội loài người qua các giai đoạn lịch sử"
        },
        {
           cauHoi:"Quan hệ sản xuất là?",
           dapAn:"Mối quan hệ giữa con người với con người trong quá trình tổ chức sản xuất"
        },
        {
           cauHoi:"Phương thức sản xuất bao gồm những yếu tố nào sau đây?",
           dapAn:"Lực lượng sản xuất và Quan hệ sản xuất"
        },
        {
           cauHoi:"Thực chất của đấu tranh giai cấp trong lịch sử xã hội loài người là?",
           dapAn:"Đấu tranh vì lợi ích kinh tế không thể điều hòa được"
        },
        {
           cauHoi:"Mối quan hệ biện chứng giữa lực lượng sản xuất và quan hệ sản xuất trong quy luật phát triển xã hội được thể hiện như thế nào?",
           dapAn:"Lực lượng sản xuất quyết định quan hệ sản xuất, quan hệ sản xuất có sự tác động trở lại đối với lực lượng sản xuất"
        },
        {
           cauHoi:"Trong nền sản xuất lớn hiện đại, yếu tố nào giữ vai trò quyết định trong quá trình sản xuất?",
           dapAn:"Sức lao động"
        },
        {
           cauHoi:"Trong kinh tế, phương thức sản xuất hàng hóa phát triển mạnh nhất trong hình thái kinh tế - xã hội nào?",
           dapAn:"Tư bản chủ nghĩa"
        },
        {
           cauHoi:"Đâu là thuộc tính của hàng hóa?",
           dapAn:"Giá trị"
        },
        {
           cauHoi:"Trong các khâu của quá trình sản xuất, khâu nào giữ vai trò quyết định?",
           dapAn:"Sản xuất"
        },
        {
           cauHoi:"Trong tư liệu lao động, bộ phận nào quyết định đến năng suất lao động?",
           dapAn:"Công cụ lao động"
        },
        {
           cauHoi:"Để sức lao động trở thành hàng hóa cần có bao nhiêu điều kiện cơ bản?",
           dapAn:"2"
        },
        {
           cauHoi:"Một trong những phát kiến địa lý quan trọng làm cơ sở cho chủ nghĩa thực dân ra đời là?",
           dapAn:"Tìm ra châu Mỹ"
        },
        {
           cauHoi:"Hàng hóa có bao nhiêu thuộc tính?",
           dapAn:"2"
        },
        {
           cauHoi:"Hàng hóa có thuộc tính cơ bản là?",
           dapAn:"Giá trị và giá trị sử dụng"
        },
        {
           cauHoi:"Để tích lũy nguyên thủy tư bản, chủ nghĩa tư bản đã dùng thủ đoạn nào?",
           dapAn:"Dùng bạo lực tàn khốc, dã man, tước đoạt, cướp bóc, tăng thuế"
        },
        {
           cauHoi:"Trong kinh tế chính trị Mác, học thuyết nào sau đây được gọi là hòn đá tảng?",
           dapAn:"Học thuyết giá trị thặng dư"
        },
        {
           cauHoi:"Chủ ngĩa đế quốc là gì?",
           dapAn:"Chính sách mở rộng quyền lực và tầm ảnh hưởng của một quốc gia thông qua hoạt động thuộc địa hóa bằng vũ lực hoặc các phương thức khác"
        },
        {
           cauHoi:"Điều kiện để sức lao động trở thành hàng hóa sức lao động?",
           dapAn:"Con người được tự do về than thể và không có tư liệu sản xuất"
        },
        {
           cauHoi:"Điều kiện nào để sản xuất hàng hóa ra đời?",
           dapAn:"Có sự phân công lao động xã hội và tư hữu về tư liệu sản xuất"
        },
        {
           cauHoi:"Theo lý luận của chủ nghĩa Mác – Lênin, sức lao động là gì?",
           dapAn:"Là tổng thể các năng lực lao động của con người, bao gồm thể lực, trí lực và kinh nghiệm tham gia vào hoạt động sản xuất"
        },
        {
           cauHoi:"Theo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội, Đảng ta đã xác định bao nhiêu phương hướng để xây dựng xã hội xã hội chủ nghĩa?",
           dapAn:"7"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội là?",
           dapAn:"Là thời kỳ cải biến cách mạng sâu sắc trên tất cả các lĩnh vực của đời sống xã hội từ xã hội cũ sang xã hội mới"
        },
        {
           cauHoi:"Dựa trên sáng kiến vĩ đại nào để C.Mác và Ph. Engel luận giải một cách khoa học về sứ mệnh lịch sử của giai cấp công nhân?",
           dapAn:"Chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư"
        },
        {
           cauHoi:"Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là?",
           dapAn:"Từ một nền sản xuất nhỏ là phổ biến quá độ lên CNXH không qua chế độ TBCN"
        },
        {
           cauHoi:"Chủ nghĩa xã hội bắt đầu từ nước nào?",
           dapAn:"Liên Xô"
        },
        {
           cauHoi:"Vì sao chủ nghĩa xã hội hiện thực sụp đổ ở Liên Xô?",
           dapAn:"Do sự sai lầm trong cải tổ và sự phản bội của Gorbachev"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam bắt đầu từ khi nào?",
           dapAn:"1954"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội diễn ra cuộc đấu tranh gay gắt giữa?",
           dapAn:"Một bên là giai cấp công nhân và nhân dân lao động vừa giành được chính quyền nhà nước với một bên là giai cấp bóc lột và các thế lực phản động mới bị đánh đổ"
        },
        {
           cauHoi:"Đặc trưng cơ bản của chủ nghĩa xã hội là?",
           dapAn:"Đây là giai đoạn thấp, mới thoát thai từ xã hội cũ vì vậy còn nhiều tàn dư trên tất cả các lĩnh vực của đời sống xã hội"
        },
        {
           cauHoi:"Thời kỳ quá độ ở nước ta được diễn ra trong cả nước bắt đầu từ khi nào?",
           dapAn:"1975"
        },
        {
           cauHoi:"Theo Đại hội Đại biểu toàn quốc lần thứ X (2006), xã hội xã hội chủ nghĩa ở nước ta có bao nhiêu đặc trưng cơ bản?",
           dapAn:"8"
        },
        {
           cauHoi:"Lênin đã áp dụng thành công lý luận chủ nghĩa Mác – Lênin vào hiện thực về chủ nghĩa xã hội ở nước nào?",
           dapAn:"Nga"
        },
        {
           cauHoi:"Theo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội, xã hội xã hội chủ nghĩa ở nước ta có bao nhiêu đặc trưng cơ bản?",
           dapAn:"6"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội có thể diễn ra theo con đường nào?",
           dapAn:"Quá độ trực tiếp hoặc gián tiếp qua nhiều bước trung gian"
        },
        {
           cauHoi:"Hãy điền cụm từ còn thiếu trong đoạn văn sau: “Lịch sử xã hội loài người phát triển tuần tự qua các hình thái kinh tế - xã hội, từ cộng sản nguyên thủy lên cộng sản chủ nghĩa là một quá trình …”",
           dapAn:"Tất yếu sẽ diễn ra"
        },
        {
           cauHoi:"Thành Nhà Hồ ở đâu?",
           dapAn:"Thanh Hóa"
        },
        {
           cauHoi:"Nguồn gốc đầu tiên dẫn tới sự ra đời nhà nước Đại Việt cổ?",
           dapAn:"Chống giặc ngoại xâm và thiên tai"
        },
        {
           cauHoi:"Làng cổ Đường Lâm, nơi sinh ra vị anh hùng dân tộc?",
           dapAn:"Ngô Quyền, Phùng Hưng"
        },
        {
           cauHoi:"Một trong những nhiệm vụ mà Đảng ta xác định đối với vấn đề dân tộc đó là?",
           dapAn:"Xây dựng thế trận quốc phòng toàn dân và thế trận an ninh nhân dân"
        },
        {
           cauHoi:"Trong các phương án sau, đâu là quan điểm của Đảng ta về vấn đề dân tộc?",
           dapAn:"Các dân tộc trong đại gia đình các dân tộc Việt Nam bình đẳng, đoàn kết, tương trợ giúp đỡ nhau cùng phát triển, cùng nhau phấn đấu thực hiện thắng lợi sự nghiệp CNH, HĐH đất nước, xây dựng và bảo vệ vững chắc tổ quốc, kiên quyết chống mọi âm mưu chia rẽ"
        },
        {
           cauHoi:"Văn hóa Việt Nam là nền văn hóa biểu hiện?",
           dapAn:"Sự tổng hoà của các tiểu vùng văn hóa khác nhau, tạo nên sự thống nhất trong đa dạng"
        },
        {
           cauHoi:"Di cốt và công cụ cổ xưa ở những địa danh: Võ Nhai (Lạng sơn ), núi Đọ (Thanh hoá), Thẩm Ồn (Nghệ An ), Xuân Lộc (Đồng nai ) được nêu lên nhằm giải thích điều gì sau đây?",
           dapAn:"Cư dân Cổ Việt Nam không phải di cư từ nơi khác đến mà có nguồn gốc bản địa từ rất sớm. Việt Nam là một trong những địa chỉ trên thế giới xuất hiện con người"
        },
        {
           cauHoi:"Yếu tố nào tạo nên cốt lõi văn hóa, là cội nguồn của chủ nghĩa yêu nước Việt Nam?",
           dapAn:"Sự gắn bó làng, xóm; nước và nhà hoà quyện với nhau"
        },
        {
           cauHoi:"Nhà nước Việt Nam đầu tiên ra đời vì lý do gì?",
           dapAn:"Vì nhu cầu xây dựng đất nước và chống giặc ngoại xâm"
        },
        {
           cauHoi:"Cây đa Tân Trào ở đâu?",
           dapAn:"Tuyên Quang"
        },
        {
           cauHoi:"Truyền thuyết Sơn Tinh – Thủy Tinh có ý nghĩa?",
           dapAn:"Tinh thần đoàn kết, đắp đê, trị thủy của dân tộc"
        },
        {
           cauHoi:"Những bài học kinh nghiệm sau: “lấy nhỏ thắng lớn”, “lấy ít địch nhiều”, “lấy yếu chống mạnh”, “lấy chất lượng cao thắng số lượng đông” thể hiện điều gì?",
           dapAn:"Truyền thống lao động cần cù"
        },
        {
           cauHoi:"Truyền thuyết “Con Rồng Cháu Tiên” khẳng định điều gì?",
           dapAn:"Tất cả các đáp án đều đúng"
        },
        {
           cauHoi:"Một trong những lý do mà các thế lực thường xuyên xâm lược lãnh hải nước ta là?",
           dapAn:"Có trữ lượng dầu mỏ vô cùng dồi dào và quan trọng cho phát triển kinh tế"
        },
        {
           cauHoi:"Chế độ phong kiến trung ương tập quyền đạt đến độ hoàn thiện trong lịch sử Việt Nam thuộc triều đại nào?",
           dapAn:"Nhà Lê"
        },
        {
           cauHoi:"Đâu là một trong những tên gọi của Đảng ta?",
           dapAn:"Đảng Lao động Việt Nam"
        },
        {
           cauHoi:"Pháp xâm lược Việt Nam, xã hội Việt Nam tồn tại nhiều mâu thuẫn, nhưng nổi lên 2 mâu thuẫn: Giữa dân tộc Việt Nam với thực dân Pháp; Giữa nhân dân Việt Nam (chủ yếu là nông dân) với địa chủ phong kiến. Hai mâu thuẫn này được gọi là:",
           dapAn:"Mâu thuẫn chủ yếu"
        },
        {
           cauHoi:"“Khi mâu thuẫn với Pháp và phong kiến có ý thức dân tộc và dân chủ; nhưng do lo sợ bị cách mạng đánh đổ họ thường dao động ngả nghiêng, dễ cải lương, thoả hiệp”. Đây là quan điểm nhằm chỉ giai cấp, tầng lớp nào?",
           dapAn:"Tư sản Việt Nam"
        },
        {
           cauHoi:"Tinh thần “Khai dân trí, chấn dân trí, hậu dân sinh” là tinh thần của phong trào cách mạng nào trong lịch sử Việt Nam?",
           dapAn:"Phong trào Duy Tân"
        },
        {
           cauHoi:"“Ra đời trong quá trình khai thác thuộc địa lần I của Pháp; sau chiến tranh thế giới thứ nhất phát triển rất nhanh. Tuy ít về số lượng, ra đời muộn so với giai cấp công nhân châu Âu, đời sống gắn với sản xuất công nghiệp, họ là đại biểu của phương thức sản xuất tiên tiến nhất”. Đây là quan điểm nhằm chỉ giai cấp, tầng lớp nào?",
           dapAn:"Tư sản Việt Nam"
        },
        {
           cauHoi:"Tiểu thương, tiểu chủ, công chức, trí thức, học sinh, sinh viên là lực lượng thuộc?",
           dapAn:"Tầng lớp tiểu tư sản Việt Nam"
        },
        {
           cauHoi:"Phương án nào sau đây mô tả xã hội Việt Nam trước khi có Đảng Cộng sản Việt Nam ra đời?",
           dapAn:"Từ một quốc gia phong kiến độc lập trở thành một nước thuộc địa nửa phong kiến; dân ta từ chỗ tự do, trở thành nô lệ"
        },
        {
           cauHoi:"Nguyên nhân thất bại của các phong trào Cần Vương, nông dân Yên thế, yêu nước theo khuynh hướng dân chủ tư sản, Đông kinh nghĩa Thục, Duy Tân, Việt Nam quốc dân Đảng là gì?",
           dapAn:"Bế tắc về đường lối chính trị, lỏng lẻo về tổ chức, không có cơ sở rộng rãi trong quần chúng"
        },
        {
           cauHoi:"Lý do nào khẳng định giai cấp nông dân không thể dựng ngọn cờ tập hợp lực lượng đấu tranh chống Pháp, không có khả năng lãnh đạo cách mạng?",
           dapAn:"Không đại biểu cho một phương thức sản xuất tiên tiến, không có hệ tư tưởng độc lập"
        },
        {
           cauHoi:"Nguyên nhân thất bại của các phong trào yêu nước trước khi có Đảng là bế tắc về đường lối chính trị, lỏng lẻo về tổ chức, không có cơ sở rộng rãi trong quần chúng. Do đó có thể nói......",
           dapAn:"Tiền đồ cách mạng Việt Nam đen tối như không có đường ra"
        },
        {
           cauHoi:"Tất cả tổ chức chính trị ra đời đều tuân thủ một số quy luật nhất định, vậy Đảng Cộng Sản Việt Nam ra đời theo quy luật nào?",
           dapAn:"Là kết quả của sự kết hợp chặt chẽ chủ nghĩa Mác – Lênin với phong trào công nhân và phong trào yêu nước Việt Nam"
        },
        {
           cauHoi:"“Tiền đồ cách mạng Việt Nam đen tối như không có đường ra” là câu nói của ai?",
           dapAn:"Phan Bội Châu"
        },
        {
           cauHoi:"Tờ báo Thanh Niên của Hội Việt Nam Thanh Niên Cách Mạng Đồng Chí Hội ra số đầu tiên vào thời gian nào?",
           dapAn:"Ngày 21/06/1925"
        },
        {
           cauHoi:"“Đảng Cộng sản Việt Nam, đội tiên phong của giai cấp công nhân Việt Nam, đại biểu trung thành quyền lợi của giai cấp công nhân, nhân dân lao động và của cả dân tộc, theo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh, là lực lượng lãnh đạo Nhà nước và xã hội. Mọi tổ chức của Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật”. Đoạn trích trên được trích tại điều bao nhiêu của Hiến pháp Việt Nam?",
           dapAn:"Điều 4"
        },
        {
           cauHoi:"Trước năm 1930, ba tổ chức Cộng sản tồn tại ở Việt Nam được thể hiện như thế nào?",
           dapAn:"Chia rẽ, mâu thuẫn, tạo điểm yếu để thực dân đàn áp"
        },
        {
           cauHoi:"Nguyễn Ái Quốc ra đi tìm đường cứu nước vào lúc chủ nghĩa tư bản đang tồn tại như thế nào?",
           dapAn:"Đã trở thành chủ nghĩa đế quốc"
        },
        {
           cauHoi:"Chủ tịch Hồ Chí Minh cho rằng: “Phải lấy kết quả thiết thực đã góp sức bao nhiêu cho sản xuất và lãnh đạo sản xuất mà đo ý chí cách mạng của mình. Hãy kiên quyết …….lối làm việc không nhằm mục đích nâng cao sản xuất\". Hãy điền cụm từ còn thiếu vào chỗ trống trong các trường hợp sau:",
           dapAn:"Chống bệnh nói suông, thói phô trương hình thức"
        },
        {
           cauHoi:"Theo tư tưởng Hồ Chí Minh, sức hấp dẫn của chủ nghĩa xã hội là gì?",
           dapAn:"Sự cống hiến, sự chiến đấu và hy sinh cho lý tưởng cộng sản trở thành hiện thực ở đời sống nhân dân"
        },
        {
           cauHoi:"Chọn phương án hợp lý nhất để điền vào chỗ trống: “ Tư tưởng Hồ Chí Minh là một hệ thống quan điểm và tư tưởng của Hồ Chí Minh trong sự nghiệp cách mạng của ông được Đảng Cộng sản Việt Nam tổng kết, hệ thống hóa. ... Đảng Cộng sản Việt Nam xác định lấy Chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh là kim chỉ nam cho mọi hành động và thắng lợi của cách mạng Việt Nam.”.",
           dapAn:"Toàn diện và sâu sắc; sáng tạo; cụ thể"
        },
        {
           cauHoi:"“Muốn cứu nước và giải phóng dân tộc không có con đường nào khác là....”. Hãy điền cụm từ còn thiếu vào chỗ trống?",
           dapAn:"Cách mạng vô sản"
        },
        {
           cauHoi:"Một trong những quan điểm của Hồ Chí Minh khẳng định: Muốn cách mạng thành công phải có…",
           dapAn:"Sự lãnh đạo của Đảng cách mạng theo Chủ nghĩa Mác – Lênin"
        },
        {
           cauHoi:"Năm 1920 Hồ Chí Minh đã tìm thấy con đường cứu nước khi?",
           dapAn:"Đọc được bản Luận cương của Lênin"
        },
        {
           cauHoi:"“Quét sạch chủ nghĩa cá nhân, nâng cao đạo đức cách mạng” là tư tưởng thuộc nội dung nào sau đây?",
           dapAn:"Thực hiện cần, kiệm, liêm, chính, chí công vô tư"
        },
        {
           cauHoi:"Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 trong một gia đình có truyền thống.... Ở làng....xã….huyện Nam Đàn, tỉnh Nghệ An. Hãy lựa chọn phương án phù hợp sau để hoàn thành đúng thứ tự các thông tin?",
           dapAn:"Nho học yêu nước, Sen, Kim Liên"
        },
        {
           cauHoi:"Ban Chấp hành Trung ương khoá IX đã quyết định triển khai chỉ đạo điểm cuộc vận động nào?",
           dapAn:"\"Học tập và làm theo tấm gương đạo đức Hồ Chí Minh\""
        },
        {
           cauHoi:"Học tập và làm theo tư tưởng Hồ Chí Minh là nhiệm vụ của toàn Đảng, toàn dân và toàn quân Học tập tư tưởng Hồ Chí Minh là học tập……",
           dapAn:"Lý luận cách mạng Việt Nam"
        },
        {
           cauHoi:"Trong quá trình hình thành và phát triển tư tưởng Hồ Chí Minh, giai đoạn từ năm 1911-1920 là giai đoạn thể hiện nội dung nào sau đây?",
           dapAn:"Xác định con đường cứu nước, giải phóng dân tộc"
        },
        {
           cauHoi:"Đâu là tác phẩm của Hồ Chí Minh",
           dapAn:"Đường Kách Mệnh"
        },
        {
           cauHoi:"Giai cấp tư sản Việt Nam có số ít là tư sản mại bản có quyền lợi kinh tế chính trị gắn liền với đế quốc thực dân; phần lớn còn lại là ......",
           dapAn:"Tư sản dân tộc"
        },
        {
           cauHoi:"Quan điểm nào sau đây KHÔNG phải là của Hồ Chí Minh?",
           dapAn:"Đảng phải thẳng thắn phê bình, tự giác nhận lỗi, không để cho dân đói, dân rét, dân nghèo và đặc biệt khi có lỗi với dân thì tự giác viết đơn nghỉ việc và nhận trách nhiệm"
        },
        {
           cauHoi:"Ai đã khẳng định: “Nói kinh tế thị trường định hướng xã hội chủ nghĩa có nghĩa đây không phải là kinh tế thị trường tự do theo kiểu tư bản chủ nghĩa, cũng không phải là kinh tế bao cấp, quản lý theo kiểu tập trung quan liêu và cũng chưa hoàn toàn là kinh tế thị trường xã hội chủ nghĩa, bởi vì Việt Nam đang ở trong thời kỳ quá độ lên chủ nghĩa xã hội, vừa có vừa chưa có đầy đủ các yếu tố của chủ nghĩa xã hội”.",
           dapAn:"Nguyễn Phú Trọng"
        },
        {
           cauHoi:"Phương án nào phản ánh nhiệm vụ của Đảng ta trong thời kỳ đẩy mạnh CNH, HĐH đất nước?",
           dapAn:"Tất cả các đáp án đều đúng"
        },
        {
           cauHoi:"Vấn đề “Tam nông” là vấn đề gì?",
           dapAn:"Nông nghiệp, nông thôn, nông dân"
        },
        {
           cauHoi:"Thị trường tài chính của nước ta hiện nay có nhiều vấn đề phức tạp, đặc biệt là sự xuất hiện một số hiện tượng có tham vọng thâu tóm ngân hàng, hiện tượng này có ảnh hưởng gì đến ổn định cho đất nước?",
           dapAn:"Tất cả các đáp án đều đúng"
        },
        {
           cauHoi:"Thành phần kinh tế nhà nước hiện nay ở nước ta bao gồm?",
           dapAn:"Tất cả các phương án đều sai"
        },
        {
           cauHoi:"Thành phần kinh tế nào giữ vai trò chủ đạo ở nước ta?",
           dapAn:"Nhà nước"
        },
        {
           cauHoi:"Sinh ra và lớn lên trong một nước thuộc địa ½ phong kiến; kinh tế nông nghiệp lạc hậu, phần lớn đảng viên của Đảng xuất thân từ giai cấp nông dân, luôn bị kẻ thù đàn áp dã man. Do đó,....…",
           dapAn:"Để giữ vững sự lãnh đạo của Đảng, bí quyết thành công của Đảng chính là luôn giữ vững bản chất giai cấp công nhân; luôn là ngọn cờ tiền phong trong cuộc đấu tranh giành độc lập dân tộc và xây dựng chủ nghĩa xã hội"
        },
        {
           cauHoi:"Muốn có phương thức sản xuất chủ nghĩa xã hội, hình thái kinh tế - xã hội chủ nghĩa thì chúng ta cần?",
           dapAn:"Xây dựng cơ sở vật chất – kỹ thuật tương ứng"
        },
        {
           cauHoi:"Đặc điểm lớn nhất của nước ta trong thời kỳ quá độ là gì?",
           dapAn:"Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn tư bản chủ nghĩa"
        },
        {
           cauHoi:"Mô hình kinh tế trong thời kỳ quá độ ở nước ta là?",
           dapAn:"Kinh tế thị trường định hướng XHCN"
        },
        {
           cauHoi:"Sở hữu toàn dân về tư liệu sản xuất còn được gọi là?",
           dapAn:"Sở hữu nhà nước"
        },
        {
           cauHoi:"Chủ tịch Hồ Chí Minh cho rằng: “Phải lấy kết quả thiết thực đã góp sức bao nhiêu cho sản xuất và lãnh đạo sản xuất mà đo ý chí cách mạng của mình. Hãy kiên quyết …….lối làm việc không nhằm mục đích nâng cao sản xuất\". Hãy điền cụm từ còn thiếu vào chỗ trố",
           dapAn:"Kinh tế thị trường"
        },
        {
           cauHoi:"Những nguy cơ, thách thức như: Tụt hậu về kinh tế, chệch hướng về chủ nghĩa xã hội, nạn tham nhũng và quan liêu, “diễn biến hòa bình”… được Đảng ta nhận định trong Văn kiện?",
           dapAn:"Văn kiện Đại hội IX"
        },
        {
           cauHoi:"Sở hữu tư nhân về tư liệu sản xuất ở nước ta được biểu hiện dưới hình thức?",
           dapAn:"Cá thể, tiểu chủ, tư bản tư nhân, hộ gia đình"
        },
        {
           cauHoi:"Phải kiên quyết chống các loại bệnh “nội xâm” và đưa ra khỏi Đảng những phần tử thoái hóa biến chất. Từ đó.....",
           dapAn:"Để mỗi cán bộ đảng viên của đảng vừa hồng lại vừa chuyên."
        },
        {
           cauHoi:"Chức năng giáo dục của văn hóa thể hiện?",
           dapAn:"Nhận thức, tư tưởng, tình cảm và hành động"
        },
        {
           cauHoi:"Xây dựng hoàn chỉnh hệ thống chính sách bản đảm cung ứng dịch vụ công công thiết yếu nhằm?",
           dapAn:"Đảm bảo tính công bằng và bình đẳng cho mọi người dân"
        },
        {
           cauHoi:"Chủ trương phát triển hệ thống y tế công bằng và hiệu quả là hướng đến?",
           dapAn:"Đảm bảo mọi người dân được chăm sóc và bảo vệ sức khỏe"
        },
        {
           cauHoi:"Văn hóa là sự tổng hỏa của các giá trị về?",
           dapAn:"Vật chất và tinh thần"
        },
        {
           cauHoi:"Thực hiện các chính sách xã hội vì con người Đảng chủ trương?",
           dapAn:"Phát triển kinh tế gắn liền với công bằng xã hội"
        },
        {
           cauHoi:"Như thế nào là một nền văn hóa đậm đà bản sắc dân tộc?",
           dapAn:"Những giá trị bền vững, những tinh hoa của cộng đồng các dân tộc Việt Nam đó; Giữ gìn bản sắc dân tộc đi đôi với chống lạc hậu, lỗi thời hủ tục, tập quán cũ"
        },
        {
           cauHoi:"Một trong những đặc trưng của chủ nghĩa xã hội là “có nền văn hóa…,đậm đà bản sắc dân tộc”. Điền từ còn thiếu vào chổ trống?",
           dapAn:"Tiên tiến"
        },
        {
           cauHoi:"Xây dựng và phát triển văn hóa là sự nghiệp của?",
           dapAn:"Toàn dân do Đảng lãnh đạo"
        },
        {
           cauHoi:"Giải quyết các vấn đề toàn cầu hiện nay cần phải có?",
           dapAn:"Sự hợp tác đa phương"
        },
        {
           cauHoi:"Đảng và nhà nước ta coi chính sách dân số là?",
           dapAn:"Quốc sách"
        },
        {
           cauHoi:"Nền văn hóa Việt Nam được hình thành trên cở sở đặc trưng văn hóa tổng hợp các dân tộc Việt Nam nên có tính chất gì?",
           dapAn:"Thống nhất trong đa dạng"
        },
        {
           cauHoi:"Nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường định hướng xã hội chủ nghĩa ở nước ta có vai trò như thế nào đối với sự phát triển kinh tế - xã hội?",
           dapAn:"Tất cả các đáp án đều đúng"
        },
        {
           cauHoi:"Kết hợp mục tiêu kinh tế với mục tiêu xã hội được tiến hành?",
           dapAn:"Trên phạm vi cả nước,ở từng lĩnh vực từng địa phương"
        },
        {
           cauHoi:"Xây dựng chiến lược quốc gia về nâng cao sức khỏe, tầm vóc con người là?",
           dapAn:"Tăng tuổi thọ, cải thiện chất lượng giống nòi"
        },
        {
           cauHoi:"Đề cương văn hóa Việt Nam do ai viết?",
           dapAn:"Trường Chinh"
        },
        {
           cauHoi:"Toàn cầu hóa nghĩa là?",
           dapAn:"Sự hợp tác đa phương giữa các quốc gia"
        },
        {
           cauHoi:"Quan điểm cơ bản của Đảng về quốc phòng an ninh là?",
           dapAn:"Xây dựng nền quốc phòng toàn dân và an ninh nhân dân vững mạnh toàn diện"
        },
        {
           cauHoi:"Chủ nghĩa đế quốc và các thế lực thù địch đang âm mưu chống phá Việt Nam bằng chiến lược nào?",
           dapAn:"Diễn biến hòa bình và bạo loạn lật đổ"
        },
        {
           cauHoi:"Một trong những nhiệm vụ của quốc phòng an ninh hiện nay là?",
           dapAn:"Làm thất bại mọi âm mưu chống phá của các thế lực thù địch"
        },
        {
           cauHoi:"Điền từ còn thiếu vào chỗ trống: “Tăng cường quốc phòng, giữ vững an ninh quốc gia, trật tự, an toàn xã hội là nhiệm vụ trọng yếu, thường xuyên của….”.",
           dapAn:"Đảng, Nhà nước và toàn dân"
        },
        {
           cauHoi:"Quốc phòng là gì?",
           dapAn:"Là công cuộc giữ nước của một quốc gia, gồm tổng thể các hoạt động đối nội và đối ngoại về quân sự, chính trị, kinh tế, văn hoá, khoa học của Nhà nước và nhân dân để phòng…nhằm giữ vững hoà bình, đẩy lùi, ngăn chặn các hoạt động gây chiến của kẻ thù và sẵn sàng đánh thắng chiến tranh xâm lược dưới mọi hình thức, mọi quy mô"
        },
        {
           cauHoi:"Bảo vệ tổ quốc được xem là nhiệm vụ như thế nào đối với cách mạng Việt Nam?",
           dapAn:"Chiến lược"
        },
        {
           cauHoi:"Trong sự kết hợp phát triển kinh tế xã hội và an ninh quốc phòng cần phải là?",
           dapAn:"Xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân, xây dựng khu vực phòng thủ tỉnh thành phố"
        },
        {
           cauHoi:"Sức mạnh để bảo vệ tổ quốc là?",
           dapAn:"Của khối đại đoàn kết dân tộc, cả hệ thống chính trị"
        },
        {
           cauHoi:"Nhiệm vụ bảo vệ tổ quốc hiện nay là?",
           dapAn:"Bảo vệ Đảng nhà nước, nhân dân và chế độ xã hội chủ nghĩa, an ninh chính trị, kinh tế, tư tưởng"
        },
        {
           cauHoi:"Quân đội nhân dân Việt Nam thành lập vào?",
           dapAn:"Ngày 22 tháng 12 năm 1944"
        },
        {
           cauHoi:"Cơ sở chính trị -xã hội vững chắc cho quốc phòng và an ninh thì cán bộ, đảng viên và nhân dân phải?",
           dapAn:"Vững vàng về chính trị tư tưởng"
        },
        {
           cauHoi:"An ninh quốc gia là gì?",
           dapAn:"Là sự ổn định trong quan hệ chính trị giữa các giai cấp, khẳng định vị trí lãnh đạo của giai cấp cầm quyền đối với các giai cấp khác và vị trí độc lập, tự chủ của chính quyền nhà nước đối với các Nhà nước khác trên thế giới"
        },
        {
           cauHoi:"Để động viên chiến đấu bảo vệ tổ quốc Hồ Chí Minh đã từng nói: “ Các vua Hùng đã có công dựng nước, Bác cháu ta phải……” điền từ còn thiếu vào câu nói trên?",
           dapAn:"Cùng nhau giữ lấy nước"
        },
        {
           cauHoi:"Trong thực hiện nhiệm vụ bảo vệ tổ quốc luôn phải?",
           dapAn:"Nâng cao ý thức trách nhiệm và tinh thần cảnh giác"
        },
        {
           cauHoi:"Mặt trận tổ quốc và các đoàn thể nhân dân có vai trò như thế nào trong việc tập hợp vận động và đoàn kết rộng rãi và các tập thể nhân dân?",
           dapAn:"Quan trọng"
        },
        {
           cauHoi:"Quan điểm nào sau đây đúng theo chủ nghĩa duy vật biện chứng?",
           dapAn:"Con người tạo ra tôn giáo"
        },
        {
           cauHoi:"Tôn giáo nào là do người Việt sáng lập nên?",
           dapAn:"Đạo cao Đài và Hòa Hảo"
        },
        {
           cauHoi:"Tôn giáo nào xuất hiện sớm nhất trong lịch sử nước ta?",
           dapAn:"Đạo Phật"
        },
        {
           cauHoi:"Thực hiện đại đoàn kết dân tộc Đảng và nhà nước bảo đảm lợi ích chính đáng của?",
           dapAn:"Mọi tầng lớp dân cư"
        },
        {
           cauHoi:"Điền từ còn thiếu vào chỗ trống: Một trong những nội dung của chính sách tôn giáo ở nước ta hiện nay là tôn trọng, bảo đảm quyền tự do ….... và không ....... của nhân dân.",
           dapAn:"Tín ngưỡng – tín ngưỡng"
        },
        {
           cauHoi:"Điền từ còn thiếu vào chỗ trống: \"Tôn giáo là một hình thái ý thức – xã hội phản ánh một cách hoang đường, hư ảo ............... khách quan. Qua sự phản ánh của tôn giáo, những sức mạnh tự phát trong tự nhiên và xã hội đều trở thành thần bí.\"",
           dapAn:"Hiện thực"
        },
        {
           cauHoi:"Đối với thế hệ trẻ trong xây dựng đoàn kết dân tộc cần phải?",
           dapAn:"Thường xuyên giáo dục chính trị, truyền thống, lý tưởng đạo đức lối sống"
        },
        {
           cauHoi:"Dân tộc nào ở nước ta chiếm thành phần dân số đông đảo nhất?",
           dapAn:"Kinh (Việt)"
        },
        {
           cauHoi:"Chính sách tôn giáo cơ bản của Đảng ta hiện nay là?",
           dapAn:"Đảm bảo tự do tín ngưỡng, mọi tôn giáo hoạt động theo theo khuôn khổ và bình đẳng trước pháp luật"
        },
        {
           cauHoi:"Chính sách tôn giáo của Đảng và nhà nước ta nhằm mục đích gì?",
           dapAn:"Làm cho tôn giáo hoạt động bình thường"
        },
        {
           cauHoi:"Để nêu cao tinh thần đoàn kết, chủ tịch Hồ Chí Minh đã đề ra khẩu hiệu gì?",
           dapAn:"“ Đoàn kết, đoàn kết, đại đoàn kết. Thành công thành công đại thành công”"
        },
        {
           cauHoi:"Chính sách nhất quán của nhà nước xã hội chủ nghĩa đối với tôn giáo là gì?",
           dapAn:"Tôn trọng và bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của mọi công dân"
        },
        {
           cauHoi:"Nguồn gốc hình thành nên tôn giáo là gì?",
           dapAn:"Xã hội, nhận thức, tâm lý"
        },
        {
           cauHoi:"Theo Ph. Ăng nghen đã có một nhận xét làm cho chúng ta thấy rõ bản chất của tôn giáo như sau: “Tất cả mọi tôn giáo chẳng qua chỉ là …….. – vào trong đầu óc của con người – của những lực lượng bên ngoài chi phối cuộc sống của họ, chỉ là sự phản ánh trong đó những lực lượng trần thế đã mang hình thức những lực lượng siêu trần thế.”.Điền từ còn thiếu vào đoạn văn trên?",
           dapAn:"Sự phản ánh hư ảo"
        },
        {
           cauHoi:"Nội dung sau đây nói về vấn đề gì?: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển, đa phương hóa, đa dạng hóa và chủ động và tích cực hội nhập kinh tế quốc tế”.",
           dapAn:"Quan điểm đối ngoại"
        },
        {
           cauHoi:"Một trong những đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa là gì?",
           dapAn:"Nhà nước của dân, do dân và vì dân"
        },
        {
           cauHoi:"Phong trào đấu tranh của giai cấp công nhân Việt Nam chuyển từ đấu tranh tự phát lên đấu tranh tự giác đươc đánh dấu bởi?",
           dapAn:"Phong trào đấu tranh công nhân Ba Son"
        },
        {
           cauHoi:"Xây dựng Nhà nước pháp quyền ở nước ta hiện nay phải xuất phát từ căn cứ cơ bản nào?",
           dapAn:"Nắm vững nguyên lý cơ bản của chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh cũng như cương lĩnh của Đảng về Nhà nước và pháp luật"
        },
        {
           cauHoi:"Văn bản nào có hiệu lực cao nhất trong hệ thống pháp luật Việt Nam?",
           dapAn:"Hiến pháp"
        },
        {
           cauHoi:"Một trong những yếu tố thúc đẩy xây dựng Nhà nước pháp quyền “là đẩy mạnh phòng chống ….”. Điền từ còn thiếu vào chổ trống?",
           dapAn:"Suy thoái đạo đức"
        },
        {
           cauHoi:"Đảng ta xác định xây dựng nhà nước pháp quyền xã hội chủ nghĩa có bao nhiêu đặc trưng?",
           dapAn:"5"
        },
        {
           cauHoi:"Giai cấp công nhân Việt Nam có sứ mệnh lịch sử to lớn là?",
           dapAn:"Lãnh đạo cách mạng; đại diện phương thức sản xuất tiên tiến tiên phong trong sự nghiệp xây dựng chủ nghĩa xã hội; đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước"
        },
        {
           cauHoi:"Một trong những tiêu chuẩn xây dựng đội ngũ cán bộ công chức trong sạch có năng lực là?",
           dapAn:"Cần, kiệm, liêm, chính chí công vô tư, không tham nhũng và kiên quyết chống tham nhũng"
        },
        {
           cauHoi:"Đảng ta xác định: “Tổ chức quyền lực của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là thống nhất, có sự phân công và phối hợp giữa các cơ quan nhà nước trong thực hiện các quyền…..”",
           dapAn:"Lập pháp, hành pháp, tư pháp"
        },
        {
           cauHoi:"Trong các cơ quan tư pháp, cơ quan nào biểu hiện quyền tập trung nhất?",
           dapAn:"Tòa án nhân dân"
        },
        {
           cauHoi:"Điền từ thích hợp vào khoảng trống sau: Tham nhũng hiện nay là một trong bốn ............... của Việt Nam.",
           dapAn:"Bệnh"
        },
        {
           cauHoi:"Một trong những biện pháp để xây dựng Nhà nước pháp quyền trong hệ thống chính trị là?",
           dapAn:"Hoàn thiện hệ thống pháp luật và cơ quan lập pháp"
        },
        {
           cauHoi:"Xây dựng giai cấp công nhân Việt Nam lớn mạnh trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước là nhiệm vụ?",
           dapAn:"Quan trọng và cấp bách"
        },
        {
           cauHoi:"Xây dựng và phát triển giai cấp công nhân Việt Nam lớn mạnh là trách nhiệm của?",
           dapAn:"Cả hệ thống chính trị, toàn xã hội, người công nhân và của người sử dụng lao động"
        },
        {
           cauHoi:"Mặt trận tổ quốc Việt Nam có vai trò như thế nào trong xây dựng nhà nước pháp quyền xã hội chủ nghĩa?",
           dapAn:"Phản biện xã hội"
        },
        {
           cauHoi:"Ngoài truyền thống tốt đẹp của dân tộc thì giai cấp công nhân Việt Nam còn có truyền thống tiêu biểu nào?",
           dapAn:"Trung tâm đoàn kết toàn dân tộc; Giữ vai trò lãnh đạo cách mạng; Giữ vững truyền thống độc lập dân tộc gắn với chủ nghĩa xã hội"
        },
        {
           cauHoi:"Giai cấp công nhân là giai cấp tiên tiến nhất vì?",
           dapAn:"Lực lượng sản xuất tiến bộ, có trình độ xã hội hóa cao"
        },
        {
           cauHoi:"Sau khi chiếm được Việt Nam, thực dân Pháp đã tiến hành?",
           dapAn:"Chương trình khai thác thuộc địa"
        },
        {
           cauHoi:"Thực trạng của giai cấp công nhân Việt Nam hiện nay là?",
           dapAn:"Chưa đáp ứng được yêu cầu về số lượng, trình độ học vấn, chuyên môn, kỹ năng nghề nghiệp trong sự nghiệp CNH – HĐH đất nước"
        },
        {
           cauHoi:"Điền từ còn thiếu vào khái niệm sau: “Giai cấp công nhân là một lực lượng xã hội to lớn, đang phát triển, bao gồm những người lao động chân tay và trí óc làm công hưởng lương trong các loại hình sản xuất kinh doanh và dịch vụ ………., hoặc sản xuất kinh doanh và dịch vụ có tính chất ………..”",
           dapAn:"Công nghiệp"
        },
        {
           cauHoi:"Những nguy cơ, thách thức như: tụt hậu về kinh tế, chệch hướng về chủ nghĩa xã hội, nạn tham nhũng và quan liêu, “diễn biến hòa bình”… được Đảng ta nhận định trong Văn kiện của đại hội nào?",
           dapAn:"Đại hội Đảng lần thứ IX"
        },
        {
           cauHoi:"Thực dân Pháp đã thực hiện mấy lần khai thác thuộc địa?",
           dapAn:"2"
        },
        {
           cauHoi:"Hiểu như thế nào về khái niệm giai cấp công nhân là gì?",
           dapAn:"Là một lực lượng xã hội to lớn, đang phát triển, bao gồm những người lao động chân tay và trí óc, làm công hưởng lương trong các loại hình sản xuất kinh doanh và dịch vụ công nghiệp, hoặc sản xuất kinh doanh và dịch vụ có tính chất công nghiệp"
        },
        {
           cauHoi:"Đặc điểm ra đời của giai cấp công nhân Việt Nam như thế nào?",
           dapAn:"Phần lớn xuất thân từ nông dân"
        },
        {
           cauHoi:"Tổ chức công đoàn Việt Nam ra đời được đánh dấu bằng sự kiện nào?",
           dapAn:"Thành lập Công hội đỏ Bắc kỳ"
        },
        {
           cauHoi:"Sự phát triển giai cấp công nhân Việt Nam về số lượng đến năm 1929 đạt?",
           dapAn:"22 vạn người"
        },
        {
           cauHoi:"Sự phát triển giai cấp công nhân Việt Nam về số lượng đến trước chiến tranh thế giới thứ nhất đạt ...............?",
           dapAn:"Khoảng 10 vạn người"
        },
        {
           cauHoi:"Sông Bạch Đằng hiện nay ở những tỉnh nào?",
           dapAn:"Quảng Ninh, Hải Phòng"
        },
        {
           cauHoi:"Mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng được thể hiện như thế nào?",
           dapAn:"Cơ sở hạ tầng quyết định kiến trúc thượng tầng, kiến trúc thượng tầng ra đời có sự tác động trở lại đối với cơ sở hạ tầng"
        },
        {
           cauHoi:"Tiền tệ có bao nhiêu chức năng cơ bản?",
           dapAn:"5"
        },
        {
           cauHoi:"Khuyến khích mọi người làm giàu theo pháp luật là ?",
           dapAn:"Khắc phục tư tưởng bao cấp ỷ lại"
        },
        {
           cauHoi:"Theo học thuyết Mác, bản chất của con người là:",
           dapAn:"Tổng hòa các mối quan hệ xã hội"
        },
        {
           cauHoi:"Quy luật kinh tế cơ bản của sản xuất hàng hóa là?",
           dapAn:"Quy luật giá trị"
        },
        {
           cauHoi:"Chủ tịch Hồ Chí Minh đã kêu gọi thực hiện chính sách nào về tôn giáo?",
           dapAn:"“Tín ngưỡng tự do, lương giáo đoàn kết”"
        },
        {
           cauHoi:"Văn hóa Đông Sơn là nền văn hóa đại diện cho Nhà nước nào sau đây?",
           dapAn:"Nhà nước Văn Lang – Âu Lạc"
        },
        {
           cauHoi:"Nguồn gốc lý luận trực tiếp để triết học Mác ra đời là:",
           dapAn:"Triết học cổ điển Đức"
        },
        {
           cauHoi:"Cuộc cách mạng công nghiệp đầu tiên bắt nguồn từ đâu?",
           dapAn:"Anh"
        },
        {
           cauHoi:"Trong các khâu của quá trình sản xuất, khâu nào là mục đích và động lực của quá trình sản xuất?",
           dapAn:"Tiêu dùng"
        },
        {
           cauHoi:"Hãy lựa chọn phương án đúng nhất trong các phương án sau?",
           dapAn:"Nhà nước Văn Lang – Âu Lạc với nền văn hóa Đông Sơn; Nhà nước Chăm Pa Cổ với nền văn hóa Sa Huỳnh; Vương Quốc Phù Nam với nền văn hóa Ốc Eo"
        },
        {
           cauHoi:"Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội còn được gọi là?",
           dapAn:"Cương lĩnh 1991"
        },
        {
           cauHoi:"Đâu là nguyên lý của Phép biện chứng duy vật?",
           dapAn:"Nguyên lý về sự phát triển"
        },
        {
           cauHoi:"Các bộ phận lý luận cấu thành nên chủ nghĩa Mác bao gồm?",
           dapAn:"Triết học, Kinh tế chính trị học, Chủ nghĩa xã hội khoa học"
        },
        {
           cauHoi:"Học thuyết Mác được sáng lập bởi các nhà tư tưởng?",
           dapAn:"Mác, Ph.Ăngghen"
        },
        {
           cauHoi:"Những thành tựu lý luận là nguồn gốc lý luận trực tiếp hình thành chủ nghĩa Mác – Lênin là:",
           dapAn:"Triết học cổ điển Đức, Kinh tế chính trị học Anh, Chủ nghĩa xã hội không tưởng Pháp"
        },
        {
           cauHoi:"Trong trường nghề, môn chính trị có bao nhiêu chức năng cơ bản?",
           dapAn:"2"
        },
        {
           cauHoi:"Theo Lênin, thuộc tính chung nhất của vật chất là gì?",
           dapAn:"Tồn tại bên ngoài, không lệ thuộc vào cảm giác"
        },
        {
           cauHoi:"Theo lý luận của chủ nghĩa Mác – Lênin thì phương thức tồn tại của vật chất là:",
           dapAn:"Vận động"
        },
        {
           cauHoi:"Ý nghĩa phương pháp luận của nguyên lý về sự phát triển là?",
           dapAn:"Khi xem xét sự vận hiện tượng chúng ta phải đặt nó trong trạng thái vận động, phát triển, áp dụng quan điểm toàn diện và quan điểm lịch sử cụ thể"
        },
        {
           cauHoi:"Trong những quy luật của phép biện chứng duy vật, quy luật nào vạch ra cách thức của sự phát triển?",
           dapAn:"Quy luật lượng chất"
        },
        {
           cauHoi:"Trong những quy luật của phép biện chứng duy vật, quy luật nào vạch ra nguồn gốc động lực của sự phát triển?",
           dapAn:"Quy luật mâu thuẫn"
        },
        {
           cauHoi:"Trong những quy luật cơ bản của phép biện chứng duy vật, quy luật nào vạch ra khuynh hướng của sự phát triển?",
           dapAn:"Quy luật phủ định"
        },
        {
           cauHoi:"Lực lượng sản xuất là?",
           dapAn:"Mối quan hệ giữa con người với tự nhiên, thể hiện trình độ chinh phục tự nhiên của con người"
        },
        {
           cauHoi:"Đảng ta chủ trương phát triển quan hệ sản xuất bằng cách?",
           dapAn:"Chủ trương phát triển nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường"
        },
        {
           cauHoi:"Hàng hóa là gì?",
           dapAn:"Là sản phẩm của lao động, nhằm thỏa mãn nhu cầu nào đó của con người, thông qua trao đổi mua bán"
        },
        {
           cauHoi:"Vai trò của sản xuất hàng hóa đối với xã hội là?",
           dapAn:"Duy trì và phát triển xã hội"
        },
        {
           cauHoi:"Đâu là hàng hóa?",
           dapAn:"Bút của nhà sản xuất muốn bán ra thị trường"
        },
        {
           cauHoi:"Giá trị thặng dư là gì?",
           dapAn:"Là giá trị dôi ra ngoài sức lao động, bị nhà tư bản chiếm đoạt"
        },
        {
           cauHoi:"Cách mạng tư sản đầu tiên diễn ra ở đâu?",
           dapAn:"Hà Lan"
        },
        {
           cauHoi:"Lênin sinh ra ở đâu?",
           dapAn:"Nga"
        },
        {
           cauHoi:"Dòng sông nào đã đi vào lịch sử dân tộc với cuộc kháng chiến chống quân Nam Hán?",
           dapAn:"Sông Bạch Đằng"
        },
        {
           cauHoi:"Địa hình Việt Nam có hình chữ S nằm ở phía đông bán đảo Đông Dương, giữa vùng Đông Nam á, phía Bắc giáp Trung Quốc, phía Tây giáp Lào và Campuchia, phía Đông và Nam giáp biển, các điều kiện này có khó khăn gì đối với chính trị?",
           dapAn:"Dễ xảy ra xung đột lãnh thổ với các nước láng giềng"
        },
        {
           cauHoi:"Các dân tộc ở Việt Nam có trình độ phát triển kinh tế - xã hội?",
           dapAn:"Không đều nhau"
        },
        {
           cauHoi:"Quê hương của cố Tổng Bí thư Trần Phú?",
           dapAn:"Hà Tĩnh"
        },
        {
           cauHoi:"Trong lịch sử, Việt Nam luôn là mục tiêu nhòm ngó của các thế lực từ bên ngoài xâm lược lớn hơn mình rất nhiều lần, nguyên nhân từ yếu tố nào?",
           dapAn:"Tài nguyên thiên nhiên dồi dào"
        },
        {
           cauHoi:"Đảng Cộng sản Việt Nam ra đời là bước ngoặt lịch sử vĩ đại của cách mạng Việt Nam. Từ đây cách mạng Việt nam đã có một đảng chân chính lãnh đạo, trở thành một bộ phận của cách mạng thế giới. Đồng thời, ......",
           dapAn:"chấm dứt thời kỳ khủng hoảng về đường lối, bế tắc về phương pháp cứu nước đưa cách mạng Việt Nam đến thắng lợi cuối cùng"
        },
        {
           cauHoi:"Hồ Chí Minh đọc bản “Sơ thảo lần thứ nhất Luận cương của Lênin về vấn đề dân tộc và thuộc địa” vào thời gian nào?",
           dapAn:"Tháng 7 năm 1920"
        },
        {
           cauHoi:"Trận Điện Biên Phủ diễn ra vào khoảng thời gian nào?",
           dapAn:"1954"
        },
        {
           cauHoi:"“Trong Đảng thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình là cách tốt nhất để củng cố và phát triển sự đoàn kết và thống nhất của Đảng. Phải có tình đồng chí thương yêu lẫn nhau”. Đó là đoạn trích thuộc?",
           dapAn:"Trích Di chúc Hồ Chí Minh"
        },
        {
           cauHoi:"Đâu là kẻ thù chính của dân tộc ta trong giai đoạn 1858 - 1954?",
           dapAn:"Pháp"
        },
        {
           cauHoi:"Giai cấp nông dân tuy là lực lượng đa số trong xã hội, chịu một cổ 2 tròng. Nhưng mặt khác, ......",
           dapAn:"họ vừa là người dân mất nước, vừa là người bị áp bức, bóc lột nặng nề nên họ rất kiên quyết cách mạng"
        },
        {
           cauHoi:"Tư tưởng về chí công vô tư được thể hiện rõ nét nhất trong nội dung nào của hệ thống tư tưởng Hồ Chí Minh?",
           dapAn:"Tư tưởng về đạo đức cách mạng"
        },
        {
           cauHoi:"Theo tư tưởng Hồ Chí Minh, \"Muôn việc thành công hoặc thất bại, đều do …. tốt hoặc kém”. Hãy điền từ còn thiếu vào chỗ trống theo các phương án sau:",
           dapAn:"Cán bộ"
        },
        {
           cauHoi:"Lời dặn sau của Hồ Chí Minh: \"Bất kỳ việc gì, chúng ta phải bắt đầu từ gốc, dần dần đến ngọn, từ ít đến nhiều, từ hẹp đến rộng, chớ nên tham mau, tham nhiều trong một lúc\". Người đang nói đến điều gì?",
           dapAn:"Mối quan hệ giữa chính sách, quan điểm và cách thực hiện chúng"
        },
        {
           cauHoi:"Hồ Chí Minh là lãnh tụ của tổ chức nào?",
           dapAn:"Hội Việt Nam cách mạng thanh niên"
        },
        {
           cauHoi:"Yếu tố nào quan trọng nhất góp phần hình thành Tư tưởng Hồ Chí Minh?",
           dapAn:"Phẩm chất cá nhân của Người"
        },
        {
           cauHoi:"Có bao nhiêu nguyên tắc xây dựng và rèn luyện đạo đức cách mạng theo tư tưởng Hồ Chí Minh?",
           dapAn:"3"
        },
        {
           cauHoi:"Tư tưởng về tình yêu thương con người ở tư tưởng Hồ Chí Minh được thể hiện ở khía cạnh nào sau đây?",
           dapAn:"Tất cả các đáp án"
        },
        {
           cauHoi:"Thành phần kinh tế nhà nước ở Việt Nam được hình thành trên loại hình sở hữu về tư liệu sản xuất nào?",
           dapAn:"Sở hữu toàn dân"
        },
        {
           cauHoi:"Điền từ còn thiếu vào chỗ trống?: “về xây dựng và phát triển nền văn hóa ... tiên tiến đậm đà bản sắc dân tộc” được đề ra vào năm nào?",
           dapAn:"Việt Nam"
        },
        {
           cauHoi:"Để bảo vệ và phát huy truyền thống văn hóa của dân tộc cần phải?",
           dapAn:"Bảo vệ các di sản và giá trị văn hóa truyền thống"
        },
        {
           cauHoi:"Điền từ còn thiếu trong câu nói của chủ tịch Hồ Chí Minh: “Vì lẽ sống sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, nghệ thuật. Những công cụ sinh hoạt hàng ngày về ăn, mặc, ở và các phương thức sử dụng. Toàn bộ những sáng tạo và phát minh đó là ……..”",
           dapAn:"Văn hóa"
        },
        {
           cauHoi:"Đường lối xây dựng và phát triển văn hóa của Đảng hiện nay là?",
           dapAn:"Tiên tiến đậm đà bản sắc dân tộc"
        },
        {
           cauHoi:"Theo Hồ Chí Minh, văn hóa có bao nhiêu chức năng cơ bản?",
           dapAn:"4"
        },
        {
           cauHoi:"Việt Nam hiện nay có bao nhiêu dân tộc?",
           dapAn:"54"
        },
        {
           cauHoi:"Theo quy định của pháp luật Việt Nam, việc truyền đạo và các hoạt động tôn giáo cần phải?",
           dapAn:"Tuân thủ hiến pháp và pháp luật"
        },
        {
           cauHoi:"Để phát huy sức mạnh đoàn kết dân tộc Đại hội X đã đề ra “Nâng cao năng lực chiến đấu của Đảng, phát huy ………, đẩy mạnh toàn diện công cuộc đổi mơi, sớm đưa nươcs ta ra khỏi tình trạng kém phát triển” điền từ còn thiếu vào đoạn văn trên?",
           dapAn:"sức mạnh đại đoàn kết dân tộc"
        },
        {
           cauHoi:"Các thế lực thù địch hiện nay lợi dụng vấn đề tôn giáo để làm gì?",
           dapAn:"Phá hoại đoàn kết dân tộc, chống đối chế độ"
        },
        {
           cauHoi:"Hoạt động tôn giáo hiện nay vẫn còn phức tạp với những biểu hiện nào?",
           dapAn:"Tổ chức truyền đạo trái phép, hành nghề mê tín dị đoan, kích động, chống đối"
        },
        {
           cauHoi:"Quá trình sản xuất là sự kết hợp giữa các yếu tố?",
           dapAn:"Sức lao động, tư liệu lao động và đối tượng lao động"
        },
        {
           cauHoi:"Chủ nghĩa Mác - Lênin chỉ rõ động lực của sự phát triển xã hội chính là do nguyên nhân nào?",
           dapAn:"Sự phát triển của sản xuất vật chất"
        },
        {
           cauHoi:"Ngày 17 tháng 6 năm 1929 là mốc thời gian đánh dấu tổ chức cộng sản nào được thành lập?",
           dapAn:"Đông Dương Cộng sản Đảng"
        },
        {
           cauHoi:"Nhà nước ta đã lấy hệ tư tưởng nào làm \"kim chỉ nam\"",
           dapAn:"Chủ nghĩa Mác – Lênin"
        },
        {
           cauHoi:"Nguồn gốc lý luận trực tiếp hình thành kinh tế chính trị Mác là:",
           dapAn:"Kinh tế cổ điển Anh"
        },
        {
           cauHoi:"Mác, Ph. Ăngghen có kiến thức thiên tài trong nhiều lĩnh vực như:",
           dapAn:"Triết học, kinh tế chính trị, toán học, quân sự"
        },
        {
           cauHoi:"Sự vận động và phát triển của xã hội bao gồm quy luật cơ bản là:",
           dapAn:"Quan hệ sản xuất và lực lượng sản xuất; Cơ sở hạ tầng và kiến trúc thượng tầng"
        },
        {
           cauHoi:"Lực lượng sản xuất bao gồm?",
           dapAn:"Tư liệu sản xuất và người lao động"
        },
        {
           cauHoi:"Phương thức sản xuất tư bản chủ nghĩa phát triển dẫn đến mâu thuẫn xã hội nào cần được giải quyết?",
           dapAn:"Mâu thuẫn giữa giai cấp vô sản và giai cấp tư sản"
        },
        {
           cauHoi:"Ai là người đề ra khả năng quá độ lên chủ nghĩa xã hội?",
           dapAn:"V.I. Lênin"
        },
        {
           cauHoi:"Khi nói: “Quá độ lên chủ nghĩa xã hội bỏ qua tư bản chủ nghĩa” là bỏ qua yếu tố nào?",
           dapAn:"Bỏ qua việc xác lập của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
        },
        {
           cauHoi:"Việc đắp đê trị thủy trong lịch sử dựng nước của nhân dân Việt Nam đã góp phần trực tiếp hình thành nên truyền thống tốt đẹp cơ bản nào sau đây?",
           dapAn:"Truyền thống đoàn kết"
        },
        {
           cauHoi:"Phương án nào sau đây KHÔNG đúng?",
           dapAn:"Cần cù vốn là bản chất của lao động nói chung"
        },
        {
           cauHoi:"Theo tư tưởng Hồ Chí Minh, trung với nước, hiếu với dân là gì?",
           dapAn:"Suốt đời phấn đấu hy sinh vì độc lập, tự do của Tổ quốc, vì chủ nghĩa xã hội"
        },
        {
           cauHoi:"Đối với trí thức trong phát huy đoàn kết dân tộc cần phải?",
           dapAn:"Phát huy dân chủ và trọng dụng nhân tài"
        },
        {
           cauHoi:"Phong trào đấu tranh của giai cấp công nhân Việt Nam chuyển từ đấu tranh tự phát lên đấu tranh tự giác đươc đánh dấu bởi?",
           dapAn:"Phong trào đấu tranh của công nhân Phú Riềng"
        },
        {
           cauHoi:"Thời kỳ quá độ ở nước ta được diễn ra trong cả nước bắt đầu từ khi nào?",
           dapAn:"1954"
        },
        {
           cauHoi:"Chủ nghĩa xã hội bắt đầu từ nước nào?",
           dapAn:"Anh"
        },
        {
           cauHoi:"Sinh ra và lớn lên trong một nước thuộc địa ½ phong kiến; kinh tế nông nghiệp lạc hậu, phần lớn đảng viên của Đảng xuất thân từ giai cấp nông dân, luôn bị kẻ thù đàn áp dã man. Do đó,....…",
           dapAn:"Để mãi mãi giữ vững sự lãnh đạo của Đảng, phương châm của mọi thắng lợi là tiêu diệt tận gốc các thế lực phản động, thực hiện “diễn biến hòa bình”, “bạo loạn lật đổ”"
        },
        {
           cauHoi:"Chủ tịch Hồ Chí Minh cho rằng: “Phải lấy kết quả thiết thực đã góp sức bao nhiêu cho sản xuất và lãnh đạo sản xuất mà đo ý chí cách mạng của mình. Hãy kiên quyết …….lối làm việc không nhằm mục đích nâng cao sản xuất\". Hãy điền cụm từ còn thiếu vào chỗ trống trong các trường hợp sau:",
           dapAn:"Chống bệnh thành tích, thói cá nhân chủ nghĩa"
        },
        {
           cauHoi:"Làng cổ Đường Lâm, nơi sinh ra vị anh hùng dân tộc?",
           dapAn:"Không có đáp án đúng"
        },
        {
           cauHoi:"Thực hiện các chính sách xã hội vì con người Đảng chủ trương?",
           dapAn:"Chăm lo đời sống vật chất tinh thần cho nhân dân"
        },
        {
           cauHoi:"Trong những quy luật của phép biện chứng duy vật, quy luật nào vạch ra nguồn gốc động lực của sự phát triển?",
           dapAn:"Quy luật lượng chất"
        },
        {
           cauHoi:"Trong nền sản xuất lớn hiện đại, yếu tố nào giữ vai trò quyết định trong quá trình sản xuất?",
           dapAn:"Đối tượng lao động"
        },
        {
           cauHoi:"Việt Nam hiện nay có bao nhiêu tôn giáo chính?",
           dapAn:"6"
        },
        {
           cauHoi:"Các dân tộc ở Việt Nam có trình độ phát triển kinh tế - xã hội?",
           dapAn:"Giống nhau"
        },
        {
           cauHoi:"Quốc phòng là gì?",
           dapAn:"Là sứ mệnh của mỗi quốc gia, dân tộc"
        },
        {
           cauHoi:"Điền từ thích hợp vào khoảng trống sau: Tham nhũng hiện nay là một trong bốn ............... của Việt Nam.",
           dapAn:"Trào lưu"
        },
        {
           cauHoi:"Đảng ta chủ trương phát triển lực lượng sản xuất bằng cách?",
           dapAn:"Phát triển kinh tế gắn với thực hiện công bằng xã hội"
        },
        {
           cauHoi:"Điều kiện để sức lao động trở thành hàng hóa sức lao động?",
           dapAn:"Con người được tự do đem bán sức lao động của mình như một hàng hóa"
        },
        {
           cauHoi:"Bảo vệ tổ quốc được xem là nhiệm vụ như thế nào đối với cách mạng Việt Nam?",
           dapAn:"Then chốt"
        },
        {
           cauHoi:"Đâu là một trong những giai đoạn của quá trình nhận thức?",
           dapAn:"Tư duy"
        },
        {
           cauHoi:"Tư tưởng về chí công vô tư được thể hiện rõ nét nhất trong nội dung nào của hệ thống tư tưởng Hồ Chí Minh?",
           dapAn:"Tư tưởng về xây dựng Đảng trong sạch, vững mạnh"
        },
        {
           cauHoi:"Thời kỳ quá độ lên chủ nghĩa xã hội được tính từ khi?",
           dapAn:"Công xã Paris 1871"
        },
        {
           cauHoi:"Thực dân Pháp đã thực hiện mấy lần khai thác thuộc địa?",
           dapAn:"3"
        },
        {
           cauHoi:"Chủ nghĩa Mác - Lênin chỉ rõ động lực của sự phát triển xã hội chính là do nguyên nhân nào?",
           dapAn:"Hình thành nên giai cấp"
        },
        {
           cauHoi:"Di cốt và công cụ cổ xưa ở những địa danh: Võ Nhai (Lạng sơn ), núi Đọ (Thanh hoá), Thẩm Ồn (Nghệ An ), Xuân Lộc (Đồng nai ) được nêu lên nhằm giải thích điều gì sau đây?",
           dapAn:"Cư dân Cổ Việt Nam có nguồn gốc từ Phương Bắc"
        },
        {
           cauHoi:"Xây dựng và phát triển văn hóa là sự nghiệp của?",
           dapAn:"Ngành văn hóa do Đảng lãnh đạo"
        },
        {
           cauHoi:"Đảng ta xác định: “Tổ chức quyền lực của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là thống nhất, có sự phân công và phối hợp giữa các cơ quan nhà nước trong thực hiện các quyền…..”",
           dapAn:"Tự do dân chủ"
        },
        {
           cauHoi:"Phát triển là một khuynh hướng của vận động đối với các sự vật hiện tượng bao gồm :",
           dapAn:"Đi từ cao xuống thấp, đi từ hoàn thiện đến hoàn thiện hơn, không có sự phát triển thụt lùi"
        },
        {
           cauHoi:"Nguồn gốc hình thành nên tôn giáo là gì?",
           dapAn:"Mối quan hệ giữa thần thánh và con người"
        },
        {
           cauHoi:"Một trong những đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa là gì?",
           dapAn:"Nhà nước hoạt động không theo hiến pháp và pháp luật"
        },
        {
           cauHoi:"Trong sự kết hợp phát triển kinh tế xã hội và an ninh quốc phòng cần phải là?",
           dapAn:"Xây dựng phát triển lực lượng ba thứ quân tinh nhuệ hiện đại thực hiện bảo vệ chủ quyền và toàn vẹn lãnh thổ"
        },
        {
           cauHoi:"Chức năng chung của môn học chính trị là?",
           dapAn:"Góp phần đào tạo người lao động vừa có đức, vừa có tài"
        },
        {
           cauHoi:"Hoạt động thực tiễn là hoạt động vật chất của con người tác động vào thế giới khách quan bao gồm những thình thức nào?",
           dapAn:"Hoạt động vật chất, hoạt động tinh thần"
        },
        {
           cauHoi:"Chính sách tôn giáo cơ bản của Đảng ta hiện nay là?",
           dapAn:"Cho phép thành lập các tôn giáo mới"
        },
        {
           cauHoi:"Theo tư tưởng Hồ Chí Minh, trung với nước, hiếu với dân là gì?",
           dapAn:"Xây dựng khối đoàn kết quốc tế"
        },
        {
           cauHoi:"Phương thức sản của một hình thái kinh tế xã hội là gì?",
           dapAn:"Cách thức tổ chức hoạt động đối nội và đối ngoại"
        },
        {
           cauHoi:"Văn hóa Đông Sơn là nền văn hóa đại diện cho Nhà nước nào sau đây?",
           dapAn:"Vương quốc Phù Nam"
        },
        {
           cauHoi:"Trước khi có học thuyết Mác, kết quả các phong trào đấu tranh của giai cấp vô sản chống giai cấp tư sản đều?",
           dapAn:"Thắng lợi"
        },
        {
           cauHoi:"Một trong những đặc trưng của chủ nghĩa xã hội là “có nền văn hóa…,đậm đà bản sắc dân tộc”. Điền từ còn thiếu vào chổ trống?",
           dapAn:"Cổ truyền"
        },
        {
           cauHoi:"Quân đội nhân dân Việt Nam thành lập vào?",
           dapAn:"Ngày 19 tháng 12 năm 1946"
        },
        {
           cauHoi:"Tất cả tổ chức chính trị ra đời đều tuân thủ một số quy luật nhất định, vậy Đảng Cộng Sản Việt Nam ra đời theo quy luật nào?",
           dapAn:"Là kết quả của sự kết hợp những bài học kinh nghiệm của các phong trào đấu tranh trước 1930, đặc biệt là các bài học xuất phát tự sự tồn tại của các tổ chức Cộng sản"
        },
        {
           cauHoi:"Nguyên nhân của sự phát triển trong các sự vật hiện tượng là?",
           dapAn:"Do một lực lượng siêu nhiên tác động và chi phối đến sự phát triển"
        },
        {
           cauHoi:"Các cuộc đấu tranh tiêu biểu của giai cấp công nhân đầu thế kỷ XIX làm tiền đề hình thành chủ nghĩa Mác là?",
           dapAn:"Phong trào công nhân dệt ở Paris (Pháp), Hiến chương của công nhân Anh, Công nhân dệt ở Nga"
        },
        {
           cauHoi:"Điều kiện nào để sản xuất hàng hóa ra đời?",
           dapAn:"Người sản xuất tự do về thân thể"
        },
        {
           cauHoi:"“Muốn cứu nước và giải phóng dân tộc không có con đường nào khác là....”. Hãy điền cụm từ còn thiếu vào chỗ trống?",
           dapAn:"Cách mạng toàn dân"
        },
        {
           cauHoi:"Xây dựng hoàn chỉnh hệ thống chính sách bản đảm cung ứng dịch vụ công công thiết yếu nhằm?",
           dapAn:"Đáp ứng nhu cầu hội nhập khu vực và quốc tế"
        },
        {
           cauHoi:"Để nêu cao tính đoàn kết của giai cấp vô sản Lênin đã đề ra khẩu hiệu nào?",
           dapAn:"“Vô sản thế giới và các dân tộc bị áp bức đoàn kết lại”"
        },
        {
           cauHoi:"Yếu tố nào tạo nên sự cố kết trong cộng đồng dân tộc Việt Nam?",
           dapAn:"Nhu cầu lao động sản xuất, chiến đấu dựng xây đất nước"
        },
        {
           cauHoi:"Dân tộc ta đã phải trải qua hơn 12 thế kỷ chống chiến tranh xâm lược bảo vệ tổ quốc, trong số các thế lực ngoại bang, chống thế lực nào lâu dài nhất?",
           dapAn:"Quân Nam Hán"
        },
        {
           cauHoi:"Phương án nào sau đây KHÔNG đúng về chế độ phong kiến Việt Nam cuối thế kỷ XVIII đến giữa thế kỷ XIX?",
           dapAn:"Từng bước thiết lập nên những chính sách mới nhằm phối hợp, đoàn kết nhân dân chống lại thực dân Pháp"
        },
        {
           cauHoi:"Đảng ta đã lãnh đạo đất nước giành được nhiều thắng lợi, rút ra nhiều bài học kinh nghiệm. Trong các phương án sau, đâu là bài học kinh nghiệm của Đảng ta?",
           dapAn:"Cách mạng là sự nghiệp của dân, do dân và vì dân"
        },
        {
           cauHoi:"Cách mạng tháng 8 năm 1945 là kết quả của bao nhiêu năm đấu tranh anh dũng của nhân dân ta dưới sự lãnh đạo của Đảng?",
           dapAn:"Của 15 năm lãnh đạo"
        },
        {
           cauHoi:"“Bất cứ ở đâu, trên thế giới chỉ có 2 loại người : bóc lột và bị bóc”. Nhận định này là của ai?",
           dapAn:"Hồ Chí Minh"
        },
        {
           cauHoi:"Đại hội đại biểu toàn quốc lần thứ mấy của Đảng chính thức ghi vào Cương lĩnh và Điều lệ Đảng: \"Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động...\"",
           dapAn:"Đại hội Đại biểu lần thứ VII"
        },
        {
           cauHoi:"Tôn giáo nào ở nước ta hiện nay có số lượng tín đồ đông nhất?",
           dapAn:"Phật giáo"
        },
        {
           cauHoi:"Hoàn thành định nghĩa sau: «Chính trị là khoa học nghiên cứu về mối quan hệ giữa con người, giai cấp, đảng phái, dân tộc trong việc …, …, …. và …..quyền lực chính trị »",
           dapAn:"giành, giữ, tổ chức, thực thi"
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