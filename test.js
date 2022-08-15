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
        b.innerHTML += "<input id='input123' type='hidden' value='" + arr[i].cauHoi + "'>";
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
    cauHoi: "Đâu là các phương thức của ObjectMapper được sử dụng để đọc nguồn dữ liệu JSON và cho kết quả là JSonNode",
    dapAn: "readTree()"
  },
  {
    cauHoi: "Theo cú pháp của JSON, các cặp key=value phải thỏa mãn\n\r1. Key phải là chuỗi\n\r2. Value có thể là chuỗi",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Chon interface\n\r@FunctionalInterface\n\rpublic interface Demo4Inter{\n\r void m1(int x);\n\r}\n\rHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n\r @Override\n\r public void m1(int x) {}\n\r};",
      "Demo4Inter o3 = x -> {};",
      "Demo4Inter o4 = x -> System.out.println(x);"
    ]
  },
  {
    cauHoi: "Cho lớp Student:\n\r@Data\n\r@AllArgsConstructor\n\r@NoArgsConstructor\n\rpublic class Student {\n\r String name;\n\r Boolean gender = false;\n\r Double marks = 0.0;\n\r}\n\rHãy điền mã đúng vào chỗ trống:\n\rList<Student> list = Arrays.asList(\n\r    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n\r    ...\n\r  );\n\r  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) -> sv1.getMarks().compareTo(sv2.getMarks())",
      "(sv1, sv2) -> { return sv1.getMarks().compareTo(sv2.getMarks());}"
    ]
  },
  {
    cauHoi: "Lệnh nào được sử dụng để duyệt các key trong đối tượng JavaScript?",
    dapAn: "for(var key in object)"
  },
  {
    cauHoi: "Chon interface\n\r@FunctionalInterface\n\rpublic interface Demo4Inter{\n\r void m1(int x);\n\r default void m2() {}\n\r public static void m3() {}\n\r}\n\rHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n\r @Override\n\r public void m1(int x) {}\n\r};",
      "Demo4Inter o2 = new Demo4Inter() {\n\r @Override\n\r public void m1(int x) {}\n\r @Override\n\r public void m2() {}\n\r};",
      "Demo4Inter o3 = x -> {};",
      "Demo4Inter o4 = x -> System.out.println(x);"
    ]
  },
  {
    cauHoi: "Chon interface\n\r@FunctionalInterface\n\rpublic interface Demo4Inter{\n\r void m1(int x);\n\r default void m2() {}\n\r}\n\rHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n\r @Override\n\r public void m1(int x) {}\n\r};",
      "Demo4Inter o2 = new Demo4Inter() {\n\r @Override\n\r public void m1(int x) {}\n\r @Override\n\r public void m2() {}\n\r};",
      "Demo4Inter o3 = x -> {};",
      "Demo4Inter o4 = x -> System.out.println(x);"
    ]
  },
  {
    cauHoi: "Hãy chọn lệnh đúng duyệt Map sau\n\rMap<String, Double> map = new HashMap<>();",
    dapAn: [
      "map.forEach((k, v) -> System.out.printf(\"%s=%.2f\", k, v));",
      "map.forEach((k, v) -> {System.out.printf(\"%s=%.2f\", k, v);});"
    ]
  },
  {
    cauHoi: "Hãy điền mã đúng vào chỗ trống\n\r  List<Integer> list = Arrays.asList(1, 9, 4, 7, 5, 2);\n\r  list.forEach(_____);",
    dapAn: [
      "(n) -> {System.out.println(n);}",
      "n -> System.out.println(n)"
    ]
  },
  {
    cauHoi: "Đâu là các toán tử logic trong Thymeleaf?",
    dapAn: [
      "!",
      "and",
      "not",
      "or"
    ]
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Integer. Nếu x có giá trị là 2 thì đâu là kết quả của đoạn mã sau?\n\r<ul th:switch=\"${x}\">\n\r <li th:case=\"1\">Một</li>\n\r <li th:case=\"2\">Hai</li>\n\r <li th:case=\"3\">Ba</li>\n\r <li th:case=\"*\">Bốn</li>\n\r</ul>",
    dapAn: "Hai"
  },
  {
    cauHoi: "Chọn mã cho kết quả tương đương với thẻ sau\n\r<span th:text=\"${message}\"></span>",
    dapAn: "<span>[[${message}]]</span>"
  },
  {
    cauHoi: "Đâu là các toán tử số học được sử dụng trong Thymeleaf?",
    dapAn: [
      "%",
      "*",
      "/"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của thuộc tính x trong đối tượng o\n\r <ul th:object=\"${o}\">\n\r  <li th:text=\"_____\"></li>\n\r </ul>",
    dapAn: [
      "${o.x}",
      "*{x}"
    ]
  },
  {
    cauHoi: "Đâu là biểu được sử dụng để truy xuất các biến trong Model, Scopes và tham số?",
    dapAn: "${}"
  },
  {
    cauHoi: "Chọn mã cho kết quả tương đương với thẻ sau\n\r<span th:utext=\"${message}\"></span>",
    dapAn: "<span>[(${message})]</span>"
  },
  {
    cauHoi: "Giải sử p.html có chứa một fragment x. Hãy chọn mã đúng để chèn nội dung của fragment x trong p.html vào nội dung thẻ <div>",
    dapAn: [
      "<div th:insert=\"~{/p :: x}\"></div>",
      "<div th:insert=\"~{/p.html :: x}\"></div>"
    ]
  },
  {
    cauHoi: "Giả sử list là biến trong Model có kiểu là List<String>. Hãy điền vào chỗ trống để hiển thị thứ tự và giá trị các phần tử của list.\n\r<li th:each=\"item, state: ${list}\">\n\r<b th:text=\"_____\"></b>\n\r<b th:text=\"_____\"></b>\n\r</li>",
    dapAn: "${state.index}, ${item}"
  },
  {
    cauHoi: "Để tổ chức được giao diện đa ngôn ngữ trong Spring Boot với Thymeleaf, bạn cần phải thực hiện những công việc nào?",
    dapAn: [
      "Cấu hình nạp tài nguyên đa ngôn ngữ vào hệ thống",
      "Hiển thị dữ liệu từ tài nguyên đa ngôn ngữ lên giao diện",
      "Tổ chức tài nguyên đa ngôn ngữ"
    ]
  },
  {
    cauHoi: "Chọn phát biểu đúng về @DecimalMax() và @Max().",
    dapAn: "@DecimalMax() áp dụng cho cả số thực và số nguyên trong khi @Max() chỉ áp dụng cho số nguyên"
  },
  {
    cauHoi: "Đâu là cú pháp chọn fragment có tên là myfrag được khai báo trong file frags.html cùng thư mục?",
    dapAn: [
      "<div th:replace=“frags :: myfrag\">…</div>",
      "<div th:replace=“frags.html :: myfrag\">…</div>"
    ]
  },
  {
    cauHoi: "Điền vào chỗ trống để hoàn thiện việc đăng ký interceptor xử lý sự thay đổi ngôn ngữ thông qua tham số có tên là \"lang\" chỉ khi request với url là \"/home/index\"\n\r@Override\n\rpublic void addInterceptors(InterceptorRegistry registry) {\n\r LocaleChangeInterceptor locale = new LocaleChangeInterceptor();\n\r locale.setParamName(\"_____\");\n\r registry.addInterceptor(locale).addPathPatterns(\"_____\");\n\r}",
    dapAn: "lang, /home/index"
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là List<String>. Hãy chọn mã tạo ra các thẻ <option value=\"index\">value</option>",
    dapAn: "<option th:each=\"item, state: ${items}\" th:value=\"${state.index}\" th:text=\"${item}\"/>"
  },
  {
    cauHoi: "Cho 2 phát biểu về khai báo thông báo lỗi:\n\r1. Gán thông báo lỗi cho thuộc tính message của annotation kiểm lỗi\n\r2. Khai báo trong file tài nguyên properties",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "File tài nguyên đa ngôn ngữ phải đặt thao nguyên tắc nào.",
    dapAn: "<tên>_<mã ngôn ngữ>.properties"
  },
  {
    cauHoi: "@NotBlank có thể được sử dụng để kiểm lỗi cho trường có kiểu dữ liệu nào?",
    dapAn: "String"
  },
  {
    cauHoi: "Sự khác biệt giữa việc lựa chọn theo (tag, class, id) và fragment là gì?\n\r1. Tên fragment có ý nghĩa như mong muốn trong khi đó tag thì không vì phải sử dụng tag theo quy định của HTML\n\r2. Fragment có thể chứa tham số, trong khi (tag, class, id) không thể",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức trong controller được sử dụng để validate dữ liệu trong đối số sv?",
    dapAn: [
      "public String validate(@Valid Student sv, Errors errors){}",
      "public String validate(@Validated Student sv, BindingResult errors){}",
      "public String validate(@Validated Student sv, Errors errors){}"
    ]
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::#main})} được hiểu là gì?\n\r1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ có id là main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n\r2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::.main})} được hiểu là gì?\n\r1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ có class là main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n\r2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Đâu là khai báo fragment hợp lệ?",
    dapAn: [
      "<div th:fragment=\"myfrag\">…</div>",
      "<div th:fragment=\"myfrag(x)\">…</div>",
      "<div th:fragment=\"myfrag(x, y)\">…</div>"
    ]
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là List<String>. Hãy chọn mã tạo ra các thẻ <option value=\"value\">value</option>",
    dapAn: [
      "<option th:each=\"item, state: ${items}\" th:value=\"${item}\" th:text=\"${item}\"/>",
      "<option th:each=\"item: ${items}\" th:value=\"${item}\" th:text=\"${item}\"/>"
    ]
  },
  {
    cauHoi: "Với cú pháp lựa chọn fragment là ~{file :: selector} thì selector được hiểu là gì?",
    dapAn: [
      "class",
      "fragment",
      "id",
      "tag"
    ]
  },
  {
    cauHoi: "Khi thực hiện DELETE, Firebase REST API sẽ trả về dữ liệu gì?",
    dapAn: "Null"
  },
  {
    cauHoi: "RESTful API là web service hoạt động theo tiêu chuẩn nào?\n\r1. Operations: GET, POST, PUT, DELETE\n\r2. Transfer Data: JSON/XML",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Khi thực hiện POST, Firebase REST API sẽ trả về dữ liệu gì?",
    dapAn: "Đối tượng chứa thuộc tính name là key được sinh tự động"
  },
  {
    cauHoi: "Đâu là các phương thức của RestTemplate?",
    dapAn: [
      "delete(url)",
      "getForObject(url, responseType<T>): T",
      "postForObject(url, httpEntity, responseType<T>): T",
      "put(url, httpEntity)"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS để truy vấn dữ liệu.\n\r$http._____(url).then(response => {}).catch(error => {}))",
    dapAn: "get"
  },
  {
    cauHoi: "Điền vào chỗ trống để bóc lấy dữ liệu trả về từ REST API trong AngularJS?\n\r$http.get(url).then(response => {\n\r     var data = _____;\n\r})",
    dapAn: "response.data"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện thêm mới dữ liệu với REST API và nhận kết quả JSON\n\rURL url = new URL(\"...\");\n\rHttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\rconn.setRequestProperty(\"Accept\", \"_____\");\n\rconn.setRequestMethod(\"_____\");",
    dapAn: "application/json, POST"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS để thêm mới dữ liệu.\n\r$http._____(url, data).then(response => {}).catch(error => {}))",
    dapAn: "post"
  },
  {
    cauHoi: "Thuật ngữ API trong REST API viết tắt của?",
    dapAn: "Application Programming Interface"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. Một web service có thể sử dụng một hoặc nhiều web service khác\n\r2. JavaScript có thể sử dụng được web service",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho 2 phát biểu:\n\r1. REST API và RESTful API là một\n\r2. REST API khác RESTful API",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Đâu là URL để truy vấn thông tin của Nguyễn Thị Diễm Phương?\n<img src=\"https://docs.google.com/uc?id=1KD4lSyUutTdRQXgxpPnae7L3A4y0VSQt\" style=\"max-width:95%\">",
    dapAn: "https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users/PS09013.json"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS.\n\r$http._____(url, data).then(response => {}).catch(error => {}))",
    dapAn: [
      "post",
      "put"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS.\n\r$http._____(url).then(response => {}).catch(error => {}))",
    dapAn: [
      "delete",
      "get"
    ]
  },
  {
    cauHoi: "Cho 2 phát biểu:\n\r1. RESTful Web Service và RESTful API là một\n\r2. REST API khác RESTful Web Service",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Thông số nào phụ thuộc vào hệ quản trị CSDL?",
    dapAn: [
      "spring.datasource.driverClassName",
      "spring.jpa.hibernate.dialect"
    ]
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto có những giá trị hợp lệ nào?",
    dapAn: [
      "create",
      "create-drop",
      "none"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện câu lệnh JPQL\n\r@Query(\"SELECT o._____ FROM Product o WHERE o.id=?1\")\n\rCategory findByProduct(Integer id);",
    dapAn: "category"
  },
  {
    cauHoi: "Đâu là các phương thức được khai báo trong CrudRepository?",
    dapAn: [
      "<S extends T> S save(S entity)",
      "Optional<T> findById(ID id)",
      "T getOne(ID id)",
      "void delete(T entity)"
    ]
  },
  {
    cauHoi: "Page chứa kết quả truy vấn phân trang. Gọi phương thức nào để lấy tổng số trang truy vấn được?",
    dapAn: "getTotalPages()"
  },
  {
    cauHoi: "Annotation nào được sử dụng để chú thích cho field có kiểu java.util.Date",
    dapAn: "@Temporal"
  },
  {
    cauHoi: "Hãy viết phương thức DSL tương đương với truy vấn sau:\n\r@Query(“SELECT p FROM Product p WHERE p.price=?1”)",
    dapAn: [
      "findByPrice(double value)",
      "findByPriceEqual(double value)"
    ]
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=validate\n\rKhai báo trên có ý nghĩa gì?",
    dapAn: "Kiểm tra tính hợp lệ của CSDL so với ràng buộc trong các entity class"
  },
  {
    cauHoi: "Để có thể làm việc được với CSDL SQL Server, bạn cần phải khai báo thư viện cần thiết nào?\n\r1. Spring Data JPA\n\r<dependency>\n\r <groupId>org.springframework.boot</groupId>\n\r <artifactId>spring-boot-starter-data-jpa</artifactId>\n\r</dependency>\n\r2. SQL Server Driver\n\r<dependency>\n\r <groupId>com.microsoft.sqlserver</groupId>\n\r <artifactId>mssql-jdbc</artifactId>\n\r <scope>runtime</scope>\n\r</dependency>",
    dapAn: "Cả 2"
  },
  {
    cauHoi: "Đâu là annotation được sử dụng để chú thích cho lớp controller chứa toàn các phương thức của REST API?",
    dapAn: "@RestController"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để thực hiện đếm sản phẩm theo khoảng giá\n\r@Query(value = \"SELECT COUNT(*) FROM Products WHERE Price BETWEEN ?1 AND ? 2\", nativeQuery = true)\n\r_____ countByPrice(double min, double max);",
    dapAn: "Long"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn\n\r@Query(\"SELECT count(o) FROM Product o WHERE o.category.id=?1\")\n\r_____ countByCategory(String id);",
    dapAn: "Long"
  },
  {
    cauHoi: "Đâu là các annotation được sử dụng để ánh xạ các hoạt động của REST API với các phương thức của RestController?",
    dapAn: "@PutMapping"
  },
  {
    cauHoi: "Hãy viết phương thức DSL tương đương với truy vấn sau:\n\r@Query(“SELECT p FROM Product p WHERE p.name LIKE ?1”)",
    dapAn: [
      "List<Product> findAllByNameLike(String name)",
      "List<Product> findByNameLike(String name)",
      "List<Product> getAllByNameLike(String name)",
      "List<Product> getByNameLike(String name)"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để cho phép phương thức sau đây được sử dụng như hoạt động GET của REST API\n\r_____\n\r@GetMapping(\"/rest/find-all\")\n\rpublic List<T> findAll() {…}",
    dapAn: "@ResponseBody"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên  phương thức phân quyền yêu cầu phải đăng nhập mới được phép truy xuất\n\rhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: "authenticated()"
  },
  {
    cauHoi: "Trong bảo mật, CORS (Cross-Site Resource Sharing) là kỹ thuật dùng để ngăn chặn?",
    dapAn: "Ngăn chặn chia sẻ tài nguyên"
  },
  {
    cauHoi: "Trong file cấu hình Security, bạn cần viết mã cung cấp người dữ liệu người sử dụng trong phương thức nào?",
    dapAn: "configure(AuthenticationManagerBuilder auth)"
  },
  {
    cauHoi: "Đâu là annotation hợp lệ để phân quyền sử dụng cho các phương thức trong controller",
    dapAn: [
      "@PreAuthorize(“hasAnyRole('ADMIN', 'USER')”)",
      "@PreAuthorize(“hasRole('ADMIN')”)",
      "@PreAuthorize(“isAuthenticated()”)"
    ]
  },
  {
    cauHoi: "Trong file cấu hình Security, bạn cần viết mã cung cấp cơ chế mã hóa mật khẩu trong phương thức nào?",
    dapAn: "getPasswordEncoder()"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những phương thức của http.formLogin() xác định địa chỉ URL form đăng nhập?",
    dapAn: "loginPage(url)"
  },
  {
    cauHoi: "Trong bảo mật, Authoiation là kỹ thuật dùng để ngăn chặn?",
    dapAn: "Ngăn chặn thực hiện không đúng vai trò"
  },
  {
    cauHoi: "Trong bảo mật, Authentication là kỹ thuật dùng để ngăn chặn?",
    dapAn: "Ngăn chặn thực hiện khi chưa đăng nhập"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những phương thức của http.formLogin() xác định địa chỉ URL xử lý đăng nhập?",
    dapAn: "loginProcessingUrl(url)"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những phương thức của http.formLogin() xác định địa chỉ URL xử lý sau khi đăng nhập thất bại?",
    dapAn: "failureUrl(url)"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những phương thức của http.formLogin() giúp tùy biến xử lý các hành động có thể xảy ra trong đăng nhập với form tùy biến?",
    dapAn: [
      "defaultSuccessUrl(url, always)",
      "failureUrl(url)",
      "loginPage(url)",
      "loginProcessingUrl(url)"
    ]
  },
  {
    cauHoi: "Để sử dụng được @PreAuthorize trong các controller thì file cấu hình phải được chú thích bởi các annotation nào?",
    dapAn: [
      "@Configuration",
      "@EnableGlobalMethodSecurity(prePostEnabled = true)",
      "@EnableWebSecurity"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những url cần được khai báo xử lý trong controller?\n\rhttp.formLogin()\n\r .loginPage(\"/security/login/form\")  \n\r .loginProcessingUrl(\"/security/login\")\n\r .defaultSuccessUrl(\"/security/login/success\", false)\n\r .failureUrl(\"/security/login/error\")",
    dapAn: [
      "/security/login/error",
      "/security/login/form",
      "/security/login/success"
    ]
  },
  {
    cauHoi: "Trong Thymeleaf, biểu thức nào cho phép truy xuất danh sách authority?",
    dapAn: [
      "${#authentication.authorities}",
      "${#authentication.getAuthorities()}",
      "${#request.userPrincipal.authorities}",
      "${#request.userPrincipal.getAuthorities()}"
    ]
  },
  {
    cauHoi: "Strong Spring Security, bạn có vai trò (role) là ADMIN thì thẩm quyền (authority) tương ứng với role là gì?\n\r1. ROLE_ADMIN\n\r2. AUTHORITY_ADMIN",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Đâu là phương thức được khai báo trong UserDetails để truy xuất tên đăng nhập?",
    dapAn: "getUsername()"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. UserDetails là interface mô tả mô hình dữ liệu của người đăng nhập\n\r2. User là class implements UserDetails đồng thời bổ sung các hàm tiện ích giúp bạn dễ dàng tạo ra đối tượng UserDetails",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n\r1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n\r2. User.withUsername(\"A\").roles(\"C\").password(\"B\").build();",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cách nào sau đây tạo đối tượng UserDetailsService?\n\r1. UserDetailsService uds = new UserDetailsService() {\n\r @Override\n\r public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n\r  return null;\n\r }\n\r};\n\r2. UserDetailsService uds = username -> {\n\r  return null;\n\r};",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n\r1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n\r2. User.withUsername(\"A\").password(\"B\").authorities(\"ROLE_C\").build();",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là các key được sử dụng để khai báo thông tin đã đăng ký với facebook developer trong application.properties?",
    dapAn: [
      "spring.security.oauth2.client.registration.facebook.client-id=<app-id>",
      "spring.security.oauth2.client.registration.facebook.client-secret=<secret-code>"
    ]
  },
  {
    cauHoi: "Đâu là URL dẫn đến trang đăng ký tài khoản developer của facebook?",
    dapAn: "https://developers.facebook.com/docs/facebook-login"
  },
  {
    cauHoi: "Với oauth là OAuth2AuthenticationToken, đâu là phương thức để lấy email của tài khoản?",
    dapAn: "oauth.getPrincipal().getAttribute(\"email\")"
  },
  {
    cauHoi: "Giả sử chúng ta muốn có các liên kết đến trang đăng nhập từ mạng xã hội như các liên kết sau:\n\r<a href=\"/oauth2/google\">Google</a>\n\r<a href=\"/oauth2/facebook\">Facebook</a>\n\rHãy điền vào chỗ trống để hoàn thiện mã cấu hình đăng nhập xã hội\n\rhttp.oauth2Login()\n\r .loginPage(\"/auth/login/form\")\n\r .defaultSuccessUrl(\"/oauth2/login/success\", true)\n\r .failureUrl(\"/auth/login/error\")\n\r .authorizationEndpoint()\n\r  .baseUri(\"_____\");",
    dapAn: "/oauth2"
  },
  {
    cauHoi: "Đâu là khai báo đúng địa chỉ chuyển hướng sau khi đăng nhập (Valid Oauth Redirect URL) trong facebook?",
    dapAn: "http://localhost:8080/login/oauth2/code/facebook"
  },
  {
    cauHoi: "Trong Java, phương thức nào của HttpURLConnection giúp thiết lập header Authorization  cho request?",
    dapAn: "setRequestProperty(\"Authorization\", \"Basic <token>\")"
  },
  {
    cauHoi: "Để sử dụng được Spring Boot REST API bảo mật thì các REST Consumer cần header nào?",
    dapAn: "Authorization"
  },
  {
    cauHoi: "Đâu là lệnh được sử dụng để tạo đối tượng Authentication từ UserDetails (user)?",
    dapAn: "new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities())"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. UserDetailsService là interface mô tả mô hình dữ liệu của người đăng nhập\n\r2. UserDetails là interface cung cấp phương thức giúp tải dữ liệu người sử dụng theo tên đăng nhập để xác thực",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n\r1. User.withUsername(\"A\").password(\"B\").roles(\"ROLE_C\").build();\n\r2. User.withUsername(\"A\").password(\"B\").authorities(\"C\").build();",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Để đăng nhập được từ tài khoản Gmail, bạn cần thực hiện nhưng công việc nào?",
    dapAn: [
      "Cấu hình đăng nhập",
      "Khai báo mã ứng dụng và mã bí mật vào application.properties",
      "Khai báo thư viện Oauth2 cần thiết vào pom.xml",
      "Đăng ký tài khoản developer của Google và khai báo đầy đủ thông tin, lấy mã ứng dụng (app id) và mã bí mật (secret code)"
    ]
  },
  {
    cauHoi: "UserDetailsService khai báo phương thức nào?",
    dapAn: "loadUserByUsername(String)"
  },
  {
    cauHoi: "Hãy điền vào chỗ trong biểu thức thích hợp để hiển thị lỗi của  thuộc tính p của bean b trong Model\n\r<form th:action=\"@{/save}\" th:object=\"${b}\">\n\r    <input th:errors=\"_____\">\n\r</form>",
    dapAn: [
      "${b.p}",
      "*{p}"
    ]
  },
  {
    cauHoi: "Để upload được file thì thẻ <form> cần những thuộc tính nào?",
    dapAn: [
      "enctype=\"mutipart/form-data\"",
      "method=\"post\""
    ]
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=create-drop\n\rKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa CSDL hiện có, tạo lại CSDL đúng như các entity class, xóa CSDL khi shutdown ứng dụng"
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là String. Đâu là biểu thức hiển thị x có dạng viết hoa tất cả các ký tự đầu tiên của các từ?",
    dapAn: "${#strings.capitalizeWords(x)}"
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Đâu là URL để truy vấn thông tin liên lạc của Nguyễn Thị Diễm Phương?\n<img src=\"https://docs.google.com/uc?id=1KD4lSyUutTdRQXgxpPnae7L3A4y0VSQt\" style=\"max-width:95%\">",
    dapAn: "https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users/PS09013/contact.json"
  },
  {
    cauHoi: "Phương thức nào có các Stream của đầu vào và đầu ra chứa các phần tử cùng kiểu?",
    dapAn: [
      "filter()",
      "limit()",
      "peek()"
    ]
  },
  {
    cauHoi: "Trong HttpServletRequest, phương thức nào cho phép lấy UserDetails chứa thông tin của người đăng nhập?",
    dapAn: "isUserInRole(role)"
  },
  {
    cauHoi: "Đâu là các phương thức của ObjectMapper",
    dapAn: [
      "readTree()",
      "readValue()",
      "writeValue()",
      "writeValueAsString()"
    ]
  },
  {
    cauHoi: "Đâu là các toán tử so sánh trong Thymeleaf?",
    dapAn: [
      "!=",
      "<",
      "==",
      ">",
      "eq",
      "gt",
      "lt",
      "ne",
      "<=",
      ">=",
      "ge",
      "le"
    ]
  },
  {
    cauHoi: "Đâu là biểu được sử dụng để truy xuất dữ liệu trong file tài nguyên (.properties)",
    dapAn: "#{}"
  },
  {
    cauHoi: "Trong Thymeleaf, biểu thức nào cho phép truy xuất username của người đăng nhập",
    dapAn: [
      "${#authentication.getName()}",
      "${#authentication.name}",
      "${#authentication.principal.getUsername()}",
      "${#authentication.principal.username}"
    ]
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Double. Đâu là biểu thức hiển thị x có dạng #,###.## (2 số lẻ, tách nhóm phần nguyên bởi dấu phẩy)",
    dapAn: "${#numbers.formatDecimal(x, 0, 'COMMA', 2, 'POINT')}"
  },
  {
    cauHoi: "Hãy chọn biểu thức đúng?",
    dapAn: [
      "${#request.getParameter('x')}",
      "${#request.getRequestURI()}",
      "${#request.requestURI}",
      "${#servletContext.contextPath}"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của biến x trong ServletContext\n < b th:text=\"_____\" >  < /b?",
    dapAn: "${application.x}"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống biểu thức thích hợp để buộc thuộc tính p của bean b trong Model\n < form th:action=\"@{/save}\" > \n     < input th:field=\"_____\" > \n < /form >",
    dapAn: "${b.p}"
  },
  {
    cauHoi: "Giả sử list là biến trong Model có kiểu là List < String > . Hãy điền vào chỗ trống để hiển thị thứ tự và giá trị các phần tử của list.\n < li th:each=\"item, state: ${list}\" > \n < b th:text=\"_____\" >  < /b > \n < b th:text=\"_____\" >  < /b > \n < /li >",
    dapAn: "${state.index}, ${item}"
  },
  {
    cauHoi: "Hãy điền mã đúng vào chỗ trống\n  List < Integer >  list = Arrays.asList(1, 9, 4, 7, 5, 2);\n  list.forEach(_____);",
    dapAn: [
      "(n) - >  {System.out.println(n);}",
      "n - >  System.out.println(n)"
    ]
  },
  {
    cauHoi: "Cho lớp Student:\n@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Student {\n String name;\n Boolean gender = false;\n Double marks = 0.0;\n}\nHãy điền mã đúng vào chỗ trống:\nList < Student >  list = Arrays.asList(\n    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n    ...\n  );\n  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) - >  -sv1.getMarks().compareTo(sv2.getMarks())",
      "(sv1, sv2) - >  sv1.getName().compareTo(sv2.getName())",
      "(sv1, sv2) - >  { return -sv1.getMarks().compareTo(sv2.getMarks());}",
      "(sv1, sv2) - >  { return sv1.getName().compareTo(sv2.getName());}"
    ]
  },
  {
    cauHoi: "Đâu là các toán tử số học được sử dụng trong Thymeleaf",
    dapAn: [
      "+",
      "-"
    ]
  },
  {
    cauHoi: "Với Firebase REST API, entrypoint được quy định kết thúc là gì?",
    dapAn: ".json"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những URL đã được bảo vệ với lệnh sau\nhttp.authorizeRequests().antMatchers(\"/a/**\").authenticated()",
    dapAn: [
      "/a",
      "/a/b",
      "/a/b/c",
      "/a/b/c/d"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những url cần được khai báo xử lý trong controller?\nhttp.formLogin()\n .loginPage(\"/security/login/form\")  \n .loginProcessingUrl(\"/security/login\")\n .defaultSuccessUrl(\"/security/login/success\", false)\n .failureUrl(\"/security/login/error\")",
    dapAn: [
      "/security/login/error",
      "/security/login/form",
      "/security/login/success"
    ]
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n1. UserDetailsService là interface mô tả mô hình dữ liệu của người đăng nhập\n2. UserDetails là interface cung cấp phương thức giúp tải dữ liệu người sử dụng theo tên đăng nhập để xác thực",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::#main})} được hiểu là gì?\n1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n1. User.withUsername(\"A\").password(\"B\").roles(\"ROLE_C\").build();\n2. User.withUsername(\"A\").password(\"B\").authorities(\"C\").build();",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Mục đích của web service là gì?\n1. Xây dựng các operation trên nền internet chỉ để phục vụ cho các ứng dụng web\n2. Xây dựng các operation trên nền internet để phục vụ cho mọi thể loại ứng dụng",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Đâu là cú pháp đúng khi tạo một DAO\n1. public class MyDAO extends JpaRepository < T, ID > {}\n2. public interface MyDAO extends JpaRepository < T, ID > {}",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Với Spring Data JPA, trong entity class khi khai báo thực thể kết hợp là @JoinColumn(name=\"UserId\") sẽ ánh xạ với cột khóa ngoại có tên như thế nào?\n1. UserId\n2. User_Id",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Với Spring Data JPA khi khai báo với entity class là @Table(name=\"UserRoles\") sẽ ánh xạ với bảng có tên như thế nào?\n1. UserRoles\n2. User_Roles",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Với Spring Data JPA khi khai báo trong entity class là @Column(name=\"FirstName\") sẽ ánh xạ với cột có tên như thế nào?\n1. FirstName\n2. First_Name",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n1. User.password(\"B\").withUsername(\"A\").roles(\"C\").build();\n2. User.withUsername(\"A\").roles(\"C\").password(\"B\").build();",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Cho 2 phát biểu về vị trí của đối số tích lũy lỗi:\n1. Đối số BindingResult hoặc Errors bắt buộc phải đặt ngay sau bean được kiểm lỗi\n2. Đối số BindingResult hoặc Errors không bắt buộc phải đặt ngay sau bean được kiểm lỗi",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n2. User.withUsername(\"A\").password(\"B\").authorities(\"C\").build();",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu:\n1. RESTful Web Service và RESTful API là một\n2. REST API khác RESTful Web Service",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n1. Với SOAP, dữ liệu truyền thông cồng kềnh hơn REST\n2. Với SOAP, dữ liệu truyền thông nhẹ hơn REST",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu:\n1. REST API và RESTful API là một\n2. REST API khác RESTful API",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Tại sao nên sử dụng ResponseEntity trong các RestController method?\n1. Có nhiều lựa chọn trả về với mã trạng thái khác nhau\n2. Tránh được lỗi",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "UserDetailsService khai báo bao nhiêu phương thức trừu tượng? Có thể sử dụng biểu thức Lambda để tạo đối tượng UserDetailsService được hay không?\n1. 1 phương thức, hoàn toàn được\n1. 1 phương thức, không thể được",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n1. UserDetails là interface mô tả mô hình dữ liệu của người đăng nhập\n2. User là class implements UserDetails đồng thời bổ sung các hàm tiện ích giúp bạn dễ dàng tạo ra đối tượng UserDetails",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Theo cú pháp của JSON, các cặp key=value phải thỏa mãn\n1. Key phải là chuỗi\n2. Value có thể là chuỗi",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Với http là HttpSecurity và bạn có cấu hình đăng nhập và đăng xuất như sau:\nhttp.formLogin().loginPage(\"url1\")\nThì\n1. Bạn cần viết phương thức ánh xạ với các url1  trong controller để chuyển đến giao diện đăng nhập\n2. Không cần viết mã trong controller, hệ thống sẽ tự nhận biết form đăng nhập",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là sự thể hiện của trang web được bảo mật?\n1. Trang web trước và sau khi đăng nhập có thể khác nhau\n2. Không thể thực hiện một số hành vi nếu chưa đăng nhập",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n2. User.withUsername(\"A\").password(\"B\").authorities(\"ROLE_C\").build();",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đối số thứ 2 (x) của phương thức RestTemplate.getForObject(url, x) có ý nghĩa gì?\n1. Quy định kiểu dữ liệu trả về\n2. Quy định kiểu dữ liệu gửi đi",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho 2 phát biểu về dự án Spring Boot sử dụng Thymeleaf như sau:\n1. Thymeleaf là một động cơ tạo mẫu (template engine) chạy phía server có khả năng xử lý việc tạo ra HTML, XML, CSS, JS  và TEXT.\n2. Thymeleaf dựa vào các nguyên mẫu (HTML, CSS…) và bổ sung các quy luật cần thiết để sản sinh ra template hoàn thiện với dữ liệu động.",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức readValue() trong ObjectMapper\n1. readValue(source, Class < T > ): T\n2. readValue(source, TypeReference < T > ): T",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Trong interface JpaRepository < T, ID >  thì\n1. T là kiểu của Entity\n2. ID là kiểu của field @Id của Entity",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho 2 phát biểu về annotation kiểm lỗi sau:\n1. Tất cả annotation kiểm lỗi đều có thuộc tính message\n2. Nếu không cung cấp thông báo lỗi cho thuộc tính message thì hệ thống sẽ hiển thị lỗi mặc định khi có lỗi",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cách nào sau đây cung cấp UserDetailsService cho auth (AuthenticationManagerBuilder)?\n1. auth.userDetailsService(new UserDetailsService() {\n @Override\n public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n  return null;\n }\n});\n2. auth.userDetailsService( username - >  {\n  return null;\n});",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Spring Security sẵn có\n1. Mô hình dữ liệu người sử dụng được chuẩn hóa\n2. Phương pháp mã hóa mật khẩu",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện câu lệnh JPQL\n@Query(\"SELECT o FROM Product o WHERE o.category.id=_____\")\nList < Product >  findByCategoryId(@Param(\"id\") String id);",
    dapAn: ":id"
  },
  {
    cauHoi: "Giả sử list là biến trong Model có kiểu là List < String > . Hãy chọn mã lệnh đúng hiển thị các phần tử của list.",
    dapAn: [
      "< b th:each=\"item, state: ${list}\" th:text=\"${item}\" >  < /b >",
      "< b th:each=\"item: ${list}\" th:text=\"${item}\" >  < /b >"
    ]
  },
  {
    cauHoi: "Đâu là khai báo các thư viện cần thiết trong Spring Boot để có thể đăng nhập từ mạng xã hội?",
    dapAn: [
      "< dependency > \n  < groupId > org.springframework.boot < /groupId > \n  < artifactId > spring-boot-starter-oauth2-client < /artifactId > \n < /dependency >",
      "< dependency > \n  < groupId > org.springframework.boot < /groupId > \n  < artifactId > spring-boot-starter-security < /artifactId > \n < /dependency >"
    ]
  },
  {
    cauHoi: "Với Thymeleaf Extras Spring Security, đâu là các thẻ sử dụng security thích hợp?",
    dapAn: [
      "< div sec:authorize=\"hasAnyRole('ADMIN')\" >  < /div >",
      "< div sec:authorize=\"isAuthenticated()\" >  < /div >"
    ]
  },
  {
    cauHoi: "Đâu là khai báo fragment hợp lệ?",
    dapAn: [
      "< div th:fragment=\"myfrag\" > … < /div >",
      "< div th:fragment=\"myfrag(x)\" > … < /div >",
      "< div th:fragment=\"myfrag(x, y)\" > … < /div >"
    ]
  },
  {
    cauHoi: "Giải sử p.html có chứa một fragment x. Hãy chọn mã đúng để thay thế thẻ  < div >  bằng fragment x.",
    dapAn: [
      "< div th:replace=\"~{/p :: x}\" >  < /div >",
      "< div th:replace=\"~{/p.html :: x}\" >  < /div >"
    ]
  },
  {
    cauHoi: "Đâu là cú pháp chọn fragment có tên là myfrag được khai báo trong file frags.html cùng thư mục?",
    dapAn: [
      "< div th:replace=“frags :: myfrag\" > … < /div >",
      "< div th:replace=“frags.html :: myfrag\" > … < /div >"
    ]
  },
  {
    cauHoi: "Chọn mã cho kết quả tương đương với thẻ sau\n < span th:utext=\"${message}\" >  < /span >",
    dapAn: "< span > [(${message})] < /span >"
  },
  {
    cauHoi: "File tài nguyên đa ngôn ngữ phải đặt thao nguyên tắc nào.",
    dapAn: "< tên > _ < mã ngôn ngữ > .properties"
  },
  {
    cauHoi: "Đâu là các annotation được sử dụng để ánh xạ các hoạt động của REST API với các phương thức của RestController?",
    dapAn: [
      "@DeleteMapping",
      "@GetMapping",
      "@PostMapping",
      "@PutMapping"
    ]
  },
  {
    cauHoi: "Đâu là annotation được sử dụng để ánh xạ các hoạt động của REST API với các phương thức của RestController?",
    dapAn: "@GetMapping"
  },
  {
    cauHoi: "Đâu là các annotation kiểm lỗi số?",
    dapAn: [
      "@Min()",
      "@Size()"
    ]
  },
  {
    cauHoi: "Đâu là các annotation kiểm lỗi thời gian?",
    dapAn: [
      "@Past()",
      "@PastOrPresent()"
    ]
  },
  {
    cauHoi: "Đâu là annotation được sử dụng để chú thích đọc dữ liệu JSON từ đối số của phương thức REST API?",
    dapAn: "@RequestBody"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để cho phép phương thức sau đây được sử dụng như hoạt động GET của REST API\n_____\n@GetMapping(\"/rest/find-all\")\npublic List < T >  findAll() {…}",
    dapAn: "@ResponseBody"
  },
  {
    cauHoi: "Annotation nào được sử dụng để yêu cầu Spring kiểm lỗi bean?",
    dapAn: [
      "@Valid",
      "@Validated"
    ]
  },
  {
    cauHoi: "Đâu là biểu được sử dụng để làm đúng đường dẫn url?",
    dapAn: "@{}"
  },
  {
    cauHoi: "Chọn các đoạn mã lệnh đúng",
    dapAn: [
      "ActionListener listener = e - >  {};",
      "ActionListener listener = new ActionListener() {\n @Override\n public void actionPerformed(ActionEvent e) {}\n};",
      "new Thread(() - >  {}).start();",
      "new Thread(new Runnable() {\n @Override\n public void run() {}\n}).start();"
    ]
  },
  {
    cauHoi: "@NotEmpty có thể được sử dụng để kiểm lỗi cho trường có kiểu dữ liệu nào?",
    dapAn: [
      "Array",
      "Collection",
      "Map",
      "String"
    ]
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Integer. Nếu x có giá trị là 10 thì đâu là kết quả của đoạn mã sau?\n < ul th:switch=\"${x}\" > \n  < li th:case=\"1\" > Một < /li > \n  < li th:case=\"2\" > Hai < /li > \n  < li th:case=\"3\" > Ba < /li > \n  < li th:case=\"*\" > Bốn < /li > \n < /ul >",
    dapAn: "Bốn"
  },
  {
    cauHoi: "Để tổ chức được giao diện đa ngôn ngữ trong Spring Boot, bạn cần phải thực hiện những công việc nào?",
    dapAn: [
      "Cấu hình interceptor xử lý thay đổi ngôn ngữ",
      "Cấu hình phương pháp duy trì ngôn ngữ được chọn",
      "Lập trình lựa chọn ngôn ngữ"
    ]
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Để cập nhật thông tin liên lạc của Nguyễn Thị Diễm Phương bạn cần?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF306+2021_Summer+type@asset+block@firebase.png\">",
    dapAn: [
      "Data: { email: \"?\", address: \"?\"}",
      "Operation: PUT",
      "URL: https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users/PS09013/contact.json"
    ]
  },
  {
    cauHoi: "Chon interface\n@FunctionalInterface\npublic interface Demo4Inter{\n void m1(int x);\n}\nHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n @Override\n public void m1(int x) {}\n};",
      "Demo4Inter o2 = new Demo4Inter() {\n @Override\n public void m1(int x) {}\n public void m2() {}\n};",
      "Demo4Inter o3 = x - >  {};",
      "Demo4Inter o4 = x - >  System.out.println(x);"
    ]
  },
  {
    cauHoi: "Chon interface\n@FunctionalInterface\npublic interface Demo4Inter{\n void m1(int x);\n}\nHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n @Override\n public void m1(int x) {}\n};",
      "Demo4Inter o3 = x - >  {};",
      "Demo4Inter o4 = x - >  System.out.println(x);"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức được khai báo trong CrudRepository?",
    dapAn: [
      "Iterable < T >  findAll()",
      "Long count()",
      "boolean exists(ID id)"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức được khai báo trong PagingAndSortingRepository?",
    dapAn: [
      "Iterable<T> findAll(Sort sort)",
      "Page<T> findAll(Pageable pageable)"
    ]
  },
  {
    cauHoi: "spring.jpa.hibernate.ddl-auto=none\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Không kiểm tra các ràng buộc trong entity với CSDL"
  },
  {
    cauHoi: "spring.jpa.hibernate.ddl-auto=validate\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Kiểm tra tính hợp lệ của CSDL so với ràng buộc trong các entity class"
  },
  {
    cauHoi: "Hãy viết phương thức DSL tương đương với truy vấn sau:\n@Query(“SELECT p FROM Product p WHERE p.available=true AND p.price=?1 OR p.name LIKE ?2 ORDER BY createDate”)",
    dapAn: [
      "List < Product >  findByAvailableTrueAndPriceEqualOrNameLikeOrderByCreateDate(double price, String name);",
      "List < Product >  findByAvailableTrueAndPriceIsOrNameLikeOrderByCreateDate(double price, String name);",
      "List < Product >  findByAvailableTrueAndPriceOrNameLikeOrderByCreateDate(double price, String name);"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức được khai báo trong JpaRepository?",
    dapAn: [
      "List < T >  findAll()",
      "List < T >  findAll(Sort sort)",
      "List < T >  save(Iterable < ? extends T >  entities)"
    ]
  },
  {
    cauHoi: "Trong bảo mật, XSS (Cross-Site Scripting) là kỹ thuật dùng để?",
    dapAn: "Ngăn chặn thực hiện của script được nhập từ người sử dụng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để thực hiện tổng hợp số lượng sản phẩm từng loại\n@Query(\"SELECT o.category, count(o) FROM Product o GROUP BY o.category\")\nList < _____ >  getReport();",
    dapAn: "Object[]"
  },
  {
    cauHoi: "Đâu là khai báo phương thức truy vấn đùng cú pháp DSL?",
    dapAn: [
      "Page < Product >  findAllByNameLike(String name, Pageable pageable);",
      "Page < Product >  findByNameLike(String name, Pageable pageable);"
    ]
  },
  {
    cauHoi: "Hãy điền tên thực thể còn thiếu vào ô trống vào ô trống\n@Query(\"SELECT o FROM ___ o\")\nList < Product >  findByX();",
    dapAn: "Product"
  },
  {
    cauHoi: "Trong REST, POST đại diện cho hoạt động nào?",
    dapAn: "Thêm mới dữ liệu"
  },
  {
    cauHoi: "Đâu là lệnh tạo UserDetails hợp lệ?",
    dapAn: [
      "User.password().withUsername().roles().build();",
      "User.withUsername().password().authorities().build();",
      "User.withUsername().password().roles().build();",
      "User.withUsername().roles().password().build();"
    ]
  },
  {
    cauHoi: "Phương thức loadUserByUsername() của UserDetailsService trả về kiểu gì?",
    dapAn: "UserDetails"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=create-drop\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa CSDL hiện có, tạo lại CSDL đúng như các entity class, xóa CSDL khi shutdown ứng dụng"
  },
  {
    cauHoi: "spring.jpa.hibernate.ddl-auto=create-drop\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa CSDL hiện có, tạo lại CSDL đúng như các entity class, xóa CSDL khi shutdown ứng dụng"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=create\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa các bảng hiện có và tạo lại dựa trên các entity class"
  },
  {
    cauHoi: "spring.jpa.hibernate.ddl-auto=create\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa các bảng hiện có và tạo lại dựa trên các entity class"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện xóa dữ liệu với REST API và nhận kết quả JSON\nURL url = new URL(\"...\");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestProperty(\"Accept\", \"_____\");\nconn.setRequestMethod(\"_____\");",
    dapAn: "application/json, DELETE"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên các phương thức phân quyền hợp lệ\nhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: [
      "authenticated()",
      "hasAnyRole(\"ADMIN\", \"STAFF\")",
      "hasRole(\"ADMIN\")",
      "permitAll()"
    ]
  },
  {
    cauHoi: "Đâu là phương thức kết thúc trong Stream API?",
    dapAn: [
      "collect()",
      "count()",
      "forEach()",
      "max()",
      "min()",
      "reduce()",
      "sum()",
      "allMatch()",
      "anyMatch()",
      "average()"
    ]
  },
  {
    cauHoi: "Trong file cấu hình Security, bạn cần viết mã phân quyền sử dụng trong phương thức nào?",
    dapAn: "configure(HttpSecurity http)"
  },
  {
    cauHoi: "spring.jpa.hibernate.ddl-auto có những giá trị hợp lệ nào?",
    dapAn: [
      "create",
      "create-drop",
      "none"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những phương thức của http.formLogin() xác định địa chỉ URL xử lý sau khi đăng nhập thành công?",
    dapAn: "defaultSuccessUrl(url, always)"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS.\n$http._____(url).then(response = >  {}).catch(error = >  {}))",
    dapAn: [
      "delete",
      "get"
    ]
  },
  {
    cauHoi: "Đâu là phương thức trung gian trong Stream API?",
    dapAn: [
      "filter()",
      "map()",
      "mapToDouble()",
      "mapToInt()",
      "peek()",
      "sorted()",
      "distinct()",
      "limit()",
      "mapToLong()"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS để truy vấn dữ liệu.\n$http._____(url).then(response = >  {}).catch(error = >  {}))",
    dapAn: "get"
  },
  {
    cauHoi: "Đâu là các phương thức của JsonNode được sử dụng để lấy tham chiếu đến JsonNode của một key?",
    dapAn: "get(key)"
  },
  {
    cauHoi: "Trong Authentication phương thức nào cho phép lấy List < GrantedAuthority >  để từ đó có thể kiểm tra vai trò?",
    dapAn: "getAuthorities()"
  },
  {
    cauHoi: "Đâu là phương thức được khai báo trong UserDetails có thể truy xuất đến vai trò của người sử dụng?",
    dapAn: "getAuthorities()"
  },
  {
    cauHoi: "Đâu là phương thức được khai báo trong UserDetails?",
    dapAn: [
      "getAuthorities()",
      "getUsername()",
      "isEnable()"
    ]
  },
  {
    cauHoi: "Trong Authentication phương thức nào cho phép lấy username của người đăng nhập?",
    dapAn: "getName()"
  },
  {
    cauHoi: "Trong Authentication phương thức nào cho phép lấy UserDetails chứa thông tin của người đăng nhập?",
    dapAn: "getPrincipal()"
  },
  {
    cauHoi: "Với conn là đối tượng HttpURLConnection, hãy điền vào chỗ trống tên các phương thức để thực hiện việc đọc dữ liệu trả về từ REST API?\nint responseCode = conn._____;\nif (responseCode == 200) {\n    return mapper.readTree(conn._____);\n}",
    dapAn: "getResponseCode()/getInputStream()"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên các phương thức phân quyền yêu cầu phải đăng nhập với vai trò ADMIN hoặc STAFF thì mới được phép truy xuất\nhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: "hasAnyRole(\"ADMIN\", \"STAFF\")"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên các phương thức phân quyền yêu cầu phải đăng nhập với vai trò ADMIN thì mới được phép truy xuất\nhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: [
      "hasAnyRole(\"ADMIN\", \"STAFF\")",
      "hasRole(\"ADMIN\")"
    ]
  },
  {
    cauHoi: "Đâu là khai báo đúng địa chỉ chuyển hướng sau khi đăng nhập (Authorized Redirect URL) trong google?",
    dapAn: "http://localhost:8080/login/oauth2/code/google"
  },
  {
    cauHoi: "Đâu là các phương thức của JsonNode được sử dụng để chuyển đổi sang Iterator < JsonNode > ?",
    dapAn: "iterator()"
  },
  {
    cauHoi: "Hãy chọn lệnh đúng duyệt Map sau\nMap < String, Double >  map = new HashMap <  > ();",
    dapAn: [
      "map.forEach((k, v) - >  System.out.printf(\"%s=%.2f\", k, v));",
      "map.forEach((k, v) - >  System.out.printf(\"%s=%.2f\", k, v));",
      "map.forEach((k, v) - >  {System.out.printf(\"%s=%.2f\", k, v);});"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức của ResponseEntity có mã trạng thái là 404?",
    dapAn: "notFound()"
  },
  {
    cauHoi: "Đâu là các phương thức của ResponseEntity có mã trạng thái là 200?",
    dapAn: "ok()"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên phương thức phân quyền không cần đăng nhập cũng được phép truy xuất\nhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: "permitAll()"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS để thêm mới dữ liệu.\n$http._____(url, data).then(response = >  {}).catch(error = >  {}))",
    dapAn: "post"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống tên phương thức thích hợp của AngularJS.\n$http._____(url, data).then(response = >  {}).catch(error = >  {}))",
    dapAn: [
      "post",
      "put"
    ]
  },
  {
    cauHoi: "Hãy điền vào các chỗ trống để tạo thành câu lệnh đúng cú pháp trong AngularJS.\n$http._____(url, data)._____(response = >  {})._____(error = >  {}))",
    dapAn: [
      "post/then/catch",
      "put/then/catch"
    ]
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức trong controller được sử dụng để validate dữ liệu trong đối số sv?",
    dapAn: [
      "public String validate(@Valid Student sv, Errors errors){}",
      "public String validate(@Valid Student sv, Errors errors){}",
      "public String validate(@Validated Student sv, BindingResult errors){}",
      "public String validate(@Validated Student sv, Errors errors){}"
    ]
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức trong controller được sử dụng để validate dữ liệu trong đối số sv?",
    dapAn: [
      "public String validate(@Valid Student sv, Errors errors){}",
      "public String validate(@Validated Student sv, Errors errors){}"
    ]
  },
  {
    cauHoi: "Điền vào chỗ trống để bóc lấy dữ liệu trả về từ REST API trong AngularJS?\n$http.get(url).then(response = >  {\n     var data = _____;\n})",
    dapAn: "response.data"
  },
  {
    cauHoi: "Thông số nào chỉ ra JDBC Driver cần nạp vào để làm việc với hệ quản trị CSDL?",
    dapAn: "spring.datasource.driverClassName"
  },
  {
    cauHoi: "Đâu là các key được sử dụng để khai báo thông tin đã đăng ký với google developer trong application.properties?",
    dapAn: [
      "spring.security.oauth2.client.registration.google.client-id= < app-id >",
      "spring.security.oauth2.client.registration.google.client-secret= < secret-code >"
    ]
  },
  {
    cauHoi: "Giả sử trong cấu hình java có khai báo bean để nạp các file tài nguyên đa ngôn ngữ như sau\n@Bean(\"messageSource\")\npublic MessageSource getMessageSource() {\n ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();\n ms.setBasenames(\"classpath:i18n/layout\", \"classpath:i18n/home\");\n ms.setDefaultEncoding(\"utf-8\");\n return ms;\n}\nHãy cho biết các file tài nguyên đa ngôn ngữ đặt ở thư mục nào của dự án?",
    dapAn: "src/main/resources/i18n"
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới mà không dựa vào các thuộc tính của HTML?",
    dapAn: [
      "th:case",
      "th:each",
      "th:fragment",
      "th:if",
      "th:remove",
      "th:switch",
      "th:unless",
      "th:utext"
    ]
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới dựa vào thuộc tính có sẵn của HTML?",
    dapAn: [
      "th:action",
      "th:src",
      "th:title",
      "th:href"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để thay thế thẻ sau đây bằng nội dung của menu.html\n < nav th:replace=\"_____\" >  < /nav >",
    dapAn: "~{/menu.html}"
  },
  {
    cauHoi: "Đâu là biểu thức lựa chọn fragment đúng?",
    dapAn: [
      "~{frags.html :: #myid}",
      "~{frags.html :: .myclass}",
      "~{frags.html :: body}",
      "~{frags.html :: myfrag}"
    ]
  },
  {
    cauHoi: "Biểu thức nào cho phép hiển thị giá trị của key trong tài nguyên đa ngôn ngữ?",
    dapAn: [
      "#{key}",
      "~{key}"
    ]
  },
  {
    cauHoi: "Đâu là biểu được sử dụng để truy xuất các fragment từ các template khác?",
    dapAn: "~{}"
  },
  {
    cauHoi: "Với RestTemplate API, HttpEntity < T >  được sử dụng để làm nhiệm vụ gì?",
    dapAn: "Đóng gói dữ liệu gửi đến REST API"
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Integer. Nếu x có giá trị là 2 thì đâu là kết quả của đoạn mã sau?\n < ul th:switch=\"${x}\" > \n  < li th:case=\"1\" > Một < /li > \n  < li th:case=\"2\" > Hai < /li > \n  < li th:case=\"3\" > Ba < /li > \n  < li th:case=\"*\" > Bốn < /li > \n < /ul >",
    dapAn: "Hai"
  },
  {
    cauHoi: "Cho 2 phát biểu về ưu điểm khi sử dụng Thymeleaf so với JSP\n1. Đơn giản, dễ quản lý, bảo trì\n2. Thu hẹp khoảng cách giữa designer và developer",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho đoạn mã Thymeleaf như sau\n < b th:text=\"${x  <  5 ? 'Fail' : 'Pass'}\" >  < /b > \n < b th:if=\"${x  >  5}\" > Pass < /b > \nNếu biến x trong Model có giá trị bằng 5 thì đâu là kết quả của đoạn mã trên?",
    dapAn: "Fail"
  },
  {
    cauHoi: "Namespace của template Thymeleaf\n1. xmlns:th=\"http://www.thymeleaf.org\"\n2. xmlns:th=\"http://www.thymeleaf.com\"",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là List. Đâu là biểu thức hiển thị số lượng phần tử có trong x?",
    dapAn: "${#lists.size(x)}"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của biến x trong HttpSession\n < b th:text=\"_____\" >  < /b?",
    dapAn: "${session.x}"
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Object[]. Đâu là biểu thức hiển thị số lượng phần tử của x?",
    dapAn: "${#arrays.length(x)}"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của thuộc tính x trong đối tượng o\n  < ul th:object=\"${o}\" > \n   < li th:text=\"_____\" >  < /li > \n  < /ul >",
    dapAn: [
      "${o.x}",
      "*{x}"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để đoạn mã tính tổng căn bậc 2 các số chia hết cho 3\nStream < Integer >  s = Stream.of(1, 9, 4, 7, 5, 2);\n  double x = s.filter(n - >  n % 3 == 0)._____.sum();",
    dapAn: [
      "mapToDouble(Math::sqrt)",
      "mapToDouble(n - >  Math.sqrt(n))"
    ]
  },
  {
    cauHoi: "Hãy cho biết kết quả của biểu thức sau:\nStream.of(1, 9, 3, 7, 6, 2).filter(n - >  n % 3 == 0).reduce(0, (p, c) - >  p  <  c ? c : p)",
    dapAn: "9"
  },
  {
    cauHoi: "Hãy điền mã đúng vào chỗ trống\n  List < Integer >  list = Arrays.asList(1, 9, 4, 7, 5, 2);\n  list.forEach(_____);",
    dapAn: [
      "(n) - >  System.out.println(n)",
      "n - >  System.out.println(n)",
      "n - >  System.out::println(n)",
      "n - >  {System.out.println(n);}"
    ]
  },
  {
    cauHoi: "Cho lớp Student:\n@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Student {\n String name;\n Boolean gender = false;\n Double marks = 0.0;\n}\nHãy điền mã đúng vào chỗ trống:\nList < Student >  list = Arrays.asList(\n    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n    ...\n  );\n  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) - >  -sv1.getMarks().compareTo(sv2.getMarks())",
      "(sv1, sv2) - >  { return -sv1.getMarks().compareTo(sv2.getMarks());}"
    ]
  },
  {
    cauHoi: "Đâu là hàm được sử dụng để chuyển đổi đối chuỗi JSON sang đối tượng JSON?",
    dapAn: "JSON.parse()"
  },
  {
    cauHoi: "Hãy điền mã đúng vào chỗ trống\n  List < Integer >  list = Arrays.asList(1, 9, 4, 7, 5, 2);\n  list.forEach(_____);",
    dapAn: [
      "(n) - >  System.out.println(n)",
      "n - >  System.out.println(n)",
      "n - >  {System.out.println(n);}"
    ]
  },
  {
    cauHoi: "Trong phương thức xử lý đăng nhập thành công từ mạng xã hội, bạn muốn truy xuất đến các thông tin đầy đủ nhất của người sử dụng được mạng xã hội trả về thì cần khai báo thêm đối số nào?",
    dapAn: "OAuth2AuthenticationToken"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n2. User.withUsername(\"A\").roles(\"C\").password(\"B\").build();",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là URL dẫn đến trang đăng ký tài khoản developer của google?",
    dapAn: "https://console.developers.google.com/"
  },
  {
    cauHoi: "Trong RestTemplate phương thức nào của HttpHeaders giúp thiết lập header Authorization cho request?",
    dapAn: "add(\"Authorization\", \"Basic  < token > \")"
  },
  {
    cauHoi: "Trong Java, phương thức nào của HttpURLConnection giúp thiết lập header Authorization  cho request?",
    dapAn: "setRequestProperty(\"Authorization\", \"Basic  < token > \")"
  },
  {
    cauHoi: "Đâu là các thành phần trong Spring Security",
    dapAn: [
      "Authentication",
      "User",
      "UserDetails",
      "UserDetailsService"
    ]
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là Map < String, String > . Hãy điền vào chỗ trống các thuộc tính thích hợp\n < th:block th:each=\"item, state : ${items}\" > \n     < input th:value=\"${item.key}\" _____=\"${item.key}\" type=\"radio\" name=\"r\" > \n     < label th:text=\"${item.value}\" _____=\"${item.key}\" >  < /label > \n < /th:block >",
    dapAn: "th:id, th:for"
  },
  {
    cauHoi: "Annotation nào có thể được sử dụng để kiểm tra định dạng email?",
    dapAn: [
      "@Email()",
      "@Pattern()"
    ]
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là List < String > . Hãy chọn mã tạo ra các thẻ  < option value=\"value\" > value < /option >",
    dapAn: [
      "< option th:each=\"item, state: ${items}\" th:value=\"${item}\" th:text=\"${item}\"/ >",
      "< option th:each=\"item: ${items}\" th:value=\"${item}\" th:text=\"${item}\"/ >"
    ]
  },
  {
    cauHoi: "@NotEmpty, @NotBlank, @NotNul có thể được sử dụng để kiểm tra lỗi nào?",
    dapAn: "Đối tượng null"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống biểu thức thích hợp để buộc thuộc tính p của bean b trong Model\n < form th:action=\"@{/save}\" th:object=\"${b}\" > \n     < input th:field=\"_____\" > \n < /form >",
    dapAn: [
      "${b.p}",
      "*{p}"
    ]
  },
  {
    cauHoi: "Biểu thức nào cho phép hiển thị giá trị của key trong tài nguyên đa ngôn ngữ?",
    dapAn: "#{key}"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::.main})} được hiểu là gì?\n1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ có class là main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::main})} được hiểu là gì?\n1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức trong controller được sử dụng để validate dữ liệu trong đối số sv?",
    dapAn: "public String validate(@Validated Student sv, Errors errors){}"
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Đâu là URL để truy vấn thông tin liên lạc của Nguyễn Thị Diễm Phương?\n<img src=\"https://cms.poly.edu.vn/asset-v1:FPOLY+SOF306+2021_Summer+type@asset+block@firebase.png\">",
    dapAn: "https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users/PS09013/contact.json"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện cập nhật dữ liệu với REST API và nhận kết quả JSON\nURL url = new URL(\"...\");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestProperty(\"Accept\", \"_____\");\nconn.setRequestMethod(\"_____\");",
    dapAn: "application/json, PUT"
  },
  {
    cauHoi: "Trong REST, PUT đại diện cho hoạt động nào?",
    dapAn: "Cập nhật dữ liệu"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện tương tác với REST API và nhận kết quả JSON\nURL url = new URL(\"...\");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestProperty(\"Accept\", \"_____\");\nconn.setRequestMethod(\"_____\");",
    dapAn: [
      "application/json, DELETE",
      "application/json, GET",
      "application/json, POST",
      "application/json, PUT"
    ]
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n1. Ứng dụng mobile không thể sử dụng được web service\n2. JavaScript có thể sử dụng được web service",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện truy vấn dữ liệu từ REST API và nhận kết quả JSON\nURL url = new URL(\"...\");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestProperty(\"Accept\", \"_____\");\nconn.setRequestMethod(\"_____\");",
    dapAn: "application/json, GET"
  },
  {
    cauHoi: "Trong REST, GET đại diện cho hoạt động nào?",
    dapAn: "Truy vấn dữ liệu"
  },
  {
    cauHoi: "Trong RestTemplate, phương thức nào không trả về kết quả?",
    dapAn: [
      "delete(url)",
      "put(url, httpEntity)"
    ]
  },
  {
    cauHoi: "Khi thực hiện PUT, Firebase REST API sẽ trả về dữ liệu gì?",
    dapAn: "Đối tượng vừa cập nhật thành công"
  },
  {
    cauHoi: "Trong HttpServletRequest, phương thức nào cho phép kiểm tra người đăng nhập có vai trò nào đó hay không?",
    dapAn: "getUserPrincipal()"
  },
  {
    cauHoi: "Điền vào chỗ trống để có cấu trúc đúng của file cấu hình Spring Security?\n@Configuration\n_____\npublic class SecurityConfig  extends _____{}",
    dapAn: "@EnableWebSecurity/WebSecurityConfigurerAdapter"
  },
  {
    cauHoi: "Với auth là AuthenticationManagerBuilder, hãy điền vào chỗ trống để cung cấp thông tin của một User vào bộ nhớ\nauth.inMemoryAuthentication()._____(x)._____(y)._____(z)",
    dapAn: [
      "withUser/password/roles",
      "withUser/roles/password"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là url không cần khai báo xử lý trong controller?\nhttp.formLogin()\n .loginPage(\"/security/login/form\")  \n .loginProcessingUrl(\"/security/login\")\n .defaultSuccessUrl(\"/security/login/success\", false)\n .failureUrl(\"/security/login/error\")",
    dapAn: "/security/login"
  },
  {
    cauHoi: "Cho 2 phát biểu về Spring Security\n1. Spring Security là một framework, cung cấp các quy chuẩn trong việc thực hiện phòng vệ ứng dụng web\n2. Đơn giản trong Validation (XSS), CORS, CSRF",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Để truy xuất thông tin của người đăng nhập, trong Thymeleaf bạn có thể sử dụng đối tượng tiện ích nào?\n1. #request\n2. #authentication",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Với Spring Security framework\n1. Bạn có thể tùy biến hình thức đăng nhập (Login UI)\n2. Tự xử lý đăng xuất và lỗi truy cập không đúng vai trò",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn\n@Query(\"SELECT o.name FROM Product o\")\nList < _____ >  findProducts(Integer id);",
    dapAn: "String"
  },
  {
    cauHoi: "Hãy viết phương thức DSL tương đương với truy vấn sau:\n@Query(“SELECT p FROM Product p WHERE p.name LIKE ?1”)",
    dapAn: [
      "List < Product >  findAllByNameLike(String name)",
      "List < Product >  findByNameLike(String name)",
      "List < Product >  getAllByNameLike(String name)",
      "List < Product >  getByNameLike(String name)"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn có sắp xếp\n@Query(\"SELECT o FROM Product o WHERE o.name LIKE ?2\")\nList < Product >  findItems(_____, _____);\n1. Sort sort, String keywords\n2. String keywords, Sort sort",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Hãy điền vào các chỗ trống để hoàn thiện phương thức truy vấn sản phẩm\n@Query(value = \"SELECT * FROM _____ WHERE Name LIKE ?1\", nativeQuery = true)\nList < _____ >  findByKeyword(String keyword);",
    dapAn: "Products, Product"
  },
  {
    cauHoi: "Các lệnh tạo ra đối tượng Sort sau đây đúng hay sai\n1. Sort a = Sort.by(\"column1\", \"column2\")\n2. Sort b = Sort.by(Direction.DESC, \"column1\", \"column2\")",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là các phương thức của ResponseEntity có mã trạng thái là 204?",
    dapAn: "noContent()"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=none\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Không kiểm tra các ràng buộc trong entity với CSDL"
  },
  {
    cauHoi: "Page chứa kết quả truy vấn phân trang. Gọi phương thức nào để lấy danh sách (List < T > ) các thực thể của trang truy vấn?",
    dapAn: "getContent()"
  },
  {
    cauHoi: "Đâu là cú pháp đúng khi sử dụng PageRequest để tạo Pageable?",
    dapAn: [
      "PageRequest.of(int page, int size)",
      "PageRequest.of(int page, int size, Direction direction, String...properties)",
      "PageRequest.of(int page, int size, Sort sort)"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức của ObjectMapper được sử dụng để đọc nguồn dữ liệu JSON và chuyển đổi kết quả theo kiểu theo mong muốn của người lập trình",
    dapAn: "readValue()"
  },
  {
    cauHoi: "Với Spring Data JPA khi khai báo field có tên là firstName thì sẽ ánh xạ với cột có tên như thế nào?\n1. FirstName\n2. First_Name",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=validate\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Kiểm tra tính hợp lệ của CSDL so với ràng buộc trong các entity class"
  },
  {
    cauHoi: "Đâu là các phương thức của JsonNode được sử dụng để chuyển đổi giá trị của node sang kiểu thích hợp?",
    dapAn: [
      "asDouble()",
      "asInt()",
      "asText()"
    ]
  },
  {
    cauHoi: "Với Thymeleaf Extras Spring Security, đâu là các thẻ sử dụng security thích hợp?",
    dapAn: [
      "< div sec:authentication=\"\" >  < /div >",
      "< div sec:authorize=\"\" >  < /div >"
    ]
  },
  {
    cauHoi: "Đâu là cú pháp chọn fragment có tên là myfrag được khai báo trong cùng file lựa chọn fragment?",
    dapAn: "< div th:replace=“~{:: myfrag}\" > … < /div >"
  },
  {
    cauHoi: "Đâu là các phương thức được khai báo trong JpaRepository?",
    dapAn: [
      "T saveAndFlush(T entity)",
      "void deleteInBatch(Iterable < T >  entities)",
      "void flush()"
    ]
  },
  {
    cauHoi: "Chon interface\n@FunctionalInterface\npublic interface Demo4Inter{\n void m1(int x);\n default void m2() {}\n}\nHãy chọn mã đúng khi tạo đối tượng",
    dapAn: [
      "Demo4Inter o1 = new Demo4Inter() {\n @Override\n public void m1(int x) {}\n};",
      "Demo4Inter o2 = new Demo4Inter() {\n @Override\n public void m1(int x) {}\n @Override\n public void m2() {}\n};",
      "Demo4Inter o3 = x - >  {};",
      "Demo4Inter o4 = x - >  System.out.println(x);"
    ]
  },
  {
    cauHoi: "Sự khác biệt giữa việc lựa chọn theo (tag, class, id) và fragment là gì?\n1. Tên fragment có ý nghĩa như mong muốn trong khi đó tag thì không vì phải sử dụng tag theo quy định của HTML\n2. Fragment có thể chứa tham số, trong khi (tag, class, id) không thể",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Giả sử có lớp thực thể\n@Entity\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Report {\n @Id\n Category category;\n Long count;\n}\nHãy điền vào chỗ trống để thực hiện tổng hợp số lượng sản phẩm từng loại\n@Query(\"SELECT new Report(o.category, count(o)) FROM Product o GROUP BY o.category\")\nList < _____ >  getReport();",
    dapAn: "Report"
  },
  {
    cauHoi: "Đâu là định dạng đúng của key trong file tài nguyên thông báo lỗi ?",
    dapAn: "< annotation > . < bean > . < property >"
  },
  {
    cauHoi: "Với Spring Security Framework, bạn có thể bảo về ứng dụng web bằng những hình thức nào?",
    dapAn: [
      "Cấu hình bằng java",
      "Lập trình tùy biến",
      "Sử dụng Annotation",
      "Ẩn hiện giao diện"
    ]
  },
  {
    cauHoi: "Hãy cho biết kết quả của biểu thức sau:\nStream.of(1, 9, 3, 7, 6, 2).filter(n - >  n % 3 == 0).reduce(10, (p, c) - >  p  >  c ? c : p)",
    dapAn: "3"
  },
  {
    cauHoi: "Cho 2 phát biểu về khai báo thông báo lỗi:\n1. Gán thông báo lỗi cho thuộc tính message của annotation kiểm lỗi\n2. Khai báo trong file tài nguyên properties",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Điền vào chỗ trống để hoàn thiện cấu hình java duy trì ngôn ngữ được chọn\n@Bean(\"localeResolver\")\npublic LocaleResolver getLocaleResolver() {\n CookieLocaleResolver resolver = new CookieLocaleResolver();\n resolver.setDefaultLocale(_____);\n resolver.setCookieMaxAge(10*24*60*60); // 10 ngày\n resolver.setCookiePath(\"/\");\n return resolver;\n}",
    dapAn: "new Locale(\"vi\")"
  },
  {
    cauHoi: "Phương thức nào đúng truy vấn sản phẩm theo loại\n1.\n@Query(\"SELECT o FROM Product o WHERE o.category.id=?1\")\nList < Product >  findByCategoryId(String id);\n2. \n@Query(\"SELECT o FROM Product o WHERE o.category.id=:id\")\nList < Product >  findByCategoryId(@Param(\"id\") String id);",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho cấu hình nạp file tài nguyên như sau:\n@Bean(\"messageSource\")\npublic MessageSource getMessageSource() {\n ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();\n ms.setBasenames(\"classpath:i18n/messages\");\n ms.setDefaultEncoding(\"utf-8\");\n return ms;\n}\nHỏi file messages.properties đặt ở thư mục nào?",
    dapAn: "src/main/resources/i18n"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để tạo địa chỉ url đúng cú pháp (trong đó biến x có trong Model)\n < a th:href=\"_____\" >",
    dapAn: [
      "@{'/url/'+${x}}",
      "@{/url/{p}(p=${x})}",
      "@{|/url/${x}|}"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống để chuyển điều khiển đến URL xử lý lỗi truy cập không hợp lệ\nhttp._____()._____(URL);",
    dapAn: "exceptionHandling/accessDeniedPage"
  },
  {
    cauHoi: "Trong controller, cần viết bao nhiêu phương thức để xử lý cấu hình đăng nhập từ mạng xã hội như sau (giả sử 1 URL map với 1 phương thức)?\nhttp.oauth2Login()\n .loginPage(\"/auth/login/form\")\n .defaultSuccessUrl(\"/oauth2/login/success\", true)\n .failureUrl(\"/auth/login/error\")\n .authorizationEndpoint()\n  .baseUri(\"/oauth2/authorization\");",
    dapAn: "1"
  },
  {
    cauHoi: "Đâu là biểu được sử dụng để truy xuất các thuộc tính của một đối tượng được chọn bởi th:object?",
    dapAn: "*{}"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=update\nKhai báo trên có ý nghĩa gì?",
    dapAn: "Chỉ cập nhật lại thông số các cột và các bảng đúng như khai báo trong các entity class (không xóa cột, bảng thừa)"
  },
  {
    cauHoi: "Với Thymeleaf Extras Spring Security, đâu là các thẻ sử dụng security thích hợp?",
    dapAn: [
      "< div sec:authentication=\"authorities\" >  < /div >",
      "< div sec:authentication=\"name\" >  < /div >"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để tạo địa chỉ url đúng cú pháp (trong đó biến x có trong Model)\n < a th:href=\"_____\" >",
    dapAn: [
      "@{'/url?p=' + ${x}}",
      "@{/url(p=${x})}",
      "@{|/url?p=${x}|}"
    ]
  },
  {
    cauHoi: "Trong Thymeleaf, biểu thức nào biểu thức nào được sử dụng để kiểm tra user có một vai trò nào đó hay không?",
    dapAn: "${#request.isUserInrole('ADMIN')}"
  },
  {
    cauHoi: "Để sử dụng được Spring Boot REST API bảo mật thì các REST Consumer cần giá trị của header Authorization có định dạng như thế nào?",
    dapAn: "Basic Base64(username:password)"
  },
  {
    cauHoi: "Cho 2 phát biểu về dự án Spring Boot sử dụng Thymeleaf như sau:\n1. Cần phải khai báo thư viện Thymeleaf\n2. Các template mặc định có đuôi là html và đặt trong thư mục src/main/resources/templates",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là cú pháp đúng của phương thức trong controller được sử dụng để validate dữ liệu trong đối số sv?",
    dapAn: [
      "public String validate(@Valid Student sv, BindingResult errors){}",
      "public String validate(@Valid Student sv, Errors errors){}",
      "public String validate(@Validated Student sv, BindingResult errors){}",
      "public String validate(@Validated Student sv, Errors errors){}"
    ]
  },
  {
    cauHoi: "Hãy chọn lệnh đúng duyệt Map sau\nMap < String, Double >  map = new HashMap <  > ();",
    dapAn: [
      "map.forEach((k, v) - >  System.out.printf(\"%s=%.2f\", k, v));",
      "map.forEach((k, v) - >  {System.out.printf(\"%s=%.2f\", k, v);});"
    ]
  },
  {
    cauHoi: "Biểu thức nào cho phép hiển thị giá trị của key trong tài nguyên đa ngôn ngữ?",
    dapAn: "~{key}"
  },
  {
    cauHoi: "Cho lớp Student:\n@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Student {\n String name;\n Boolean gender = false;\n Double marks = 0.0;\n}\nHãy điền mã đúng vào chỗ trống:\nList < Student >  list = Arrays.asList(\n    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n    ...\n  );\n  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) - >  sv1.getName().compareTo(sv2.getName())",
      "(sv1, sv2) - >  { return sv1.getName().compareTo(sv2.getName());}"
    ]
  },
  {
    cauHoi: "Hãy điền mã đúng vào chỗ trống\n\r  List<Integer> list = Arrays.asList(1, 9, 4, 7, 5, 2);\n\r  list.forEach(_____);",
    dapAn: [
      "(n) -> System.out.println(n)",
      "n -> System.out.println(n)",
      "n -> {System.out.println(n);}"
    ]
  },
  {
    cauHoi: "Đâu là các phương thức của JsonNode được sử dụng để chuyển đổi sang Iterator<JsonNode>?",
    dapAn: "iterator()"
  },
  {
    cauHoi: "Phương thức nào của Stream API dùng để tích lũy một giá trị nào đó từ các phần tử trong Stream đầu vào?",
    dapAn: "reduce()"
  },
  {
    cauHoi: "Hãy chọn lệnh đúng duyệt Map sau\n\rMap<String, Double> map = new HashMap<>();",
    dapAn: "map.forEach((k, v) -> System.out.printf(\"%s=%.2f\", k, v));"
  },
  {
    cauHoi: "Cho lớp Student:\n\r@Data\n\r@AllArgsConstructor\n\r@NoArgsConstructor\n\rpublic class Student {\n\r String name;\n\r Boolean gender = false;\n\r Double marks = 0.0;\n\r}\n\rHãy điền mã đúng vào chỗ trống:\n\rList<Student> list = Arrays.asList(\n\r    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n\r    ...\n\r  );\n\r  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) -> sv1.getName().compareTo(sv2.getName())",
      "(sv1, sv2) -> { return sv1.getName().compareTo(sv2.getName());}"
    ]
  },
  {
    cauHoi: "Phương thức nào có các Stream của đầu vào và đầu ra chứa các phần tử cùng kiểu?",
    dapAn: [
      "filter()",
      "peek()"
    ]
  },
  {
    cauHoi: "Cho lớp Student:\n\r@Data\n\r@AllArgsConstructor\n\r@NoArgsConstructor\n\rpublic class Student {\n\r String name;\n\r Boolean gender = false;\n\r Double marks = 0.0;\n\r}\n\rHãy điền mã đúng vào chỗ trống:\n\rList<Student> list = Arrays.asList(\n\r    new Student(\"Nguyễn Văn Tèo\", true, 7.5)\n\r    ...\n\r  );\n\r  Collections.sort(list, _____);",
    dapAn: [
      "(sv1, sv2) -> -sv1.getName().compareTo(sv2.getName())",
      "(sv1, sv2) -> { return sv1.getName().compareTo(sv2.getName());}"
    ]
  },
  {
    cauHoi: "Giả sử x là biến trong Model có kiểu là Date. Đâu là biểu thức hiển thị x có dạng ngày-tháng-năm.",
    dapAn: "${#dates.format(x, 'dd-MM-yyyy')}"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của tham số x\n\r<b th:text=\"_____\"></b?",
    dapAn: "${param.x}"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để thay thế thẻ sau đây bằng nội dung của menu.html\n\r<nav th:replace=\"_____\"></nav>",
    dapAn: [
      "~{/menu.html}",
      "~{/menu}"
    ]
  },
  {
    cauHoi: "Giả sử map là biến trong Model có kiểu là Map<String, String>. Hãy chọn mã lệnh đúng hiển thị các cặp key=value.",
    dapAn: "<b th:each=\"x, y: ${map}\" th:text=\"@{|${x.key} = ${x.value}|}\"></b>"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của biến x trong HttpSession\n\r<b th:text=\"_____\"></b?",
    dapAn: "${session.x}"
  },
  {
    cauHoi: "Cho 2 phát biểu về dự án Spring Boot sử dụng Thymeleaf như sau:\n\r1. Cần phải khai báo thư viện Thymeleaf\n\r2. Các template mặc định có đuôi là html và đặt trong thư mục src/main/resources/templates",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Giả sử list là biến trong Model có kiểu là List<String>. Hãy chọn mã lệnh đúng hiển thị các phần tử của list.",
    dapAn: [
      "<b th:each=\"item, state: ${list}\" th:text=\"${item}\"></b>",
      "<b th:each=\"item: ${list}\" th:text=\"${item}\"></b>"
    ]
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là Map<String, String>. Hãy điền vào chỗ trống các thuộc tính thích hợp\n\r<th:block th:each=\"item, state : ${items}\">\n\r    <input th:value=\"${item.key}\" _____=\"${item.key}\" type=\"radio\" name=\"r\">\n\r    <label th:text=\"${item.value}\" _____=\"${item.key}\"></label>\n\r</th:block>",
    dapAn: "th:id, th:for"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống biểu thức thích hợp để buộc thuộc tính p của bean b trong Model\n\r<form th:action=\"@{/save}\">\n\r    <input th:field=\"_____\">\n\r</form>",
    dapAn: "${b.p}"
  },
  {
    cauHoi: "Kiểu dữ liệu để nhận trường file khi upload là gì?",
    dapAn: "MultipartFile"
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là Map<String, String>. Hãy điền vào chỗ trống biểu thức thích hợp\n\r<th:block th:each=\"item, state : ${items}\">\n\r    <input th:value=\"${item.key}\" th:id=\"_____\" type=\"radio\" name=\"r\">\n\r    <label th:text=\"${item.value}\" th:for=\"${item.key}\"></label>\n\r</th:block>",
    dapAn: "${item.key}"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::#main})} được hiểu là gì?\n\r1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n\r2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Hãy điền tên thực thể còn thiếu vào ô trống vào ô trống\n\r@Query(\"SELECT o FROM Category o\")\n\rList<____> findByX();",
    dapAn: "Category"
  },
  {
    cauHoi: "Trong REST, DELETE đại diện cho hoạt động nào?",
    dapAn: "Cập nhật dữ liệu"
  },
  {
    cauHoi: "Với RestTemplate API, HttpEntity<T> được sử dụng để làm nhiệm vụ gì?",
    dapAn: "Đóng gói dữ liệu gửi đến REST API"
  },
  {
    cauHoi: "Đối số thứ 2 (x) của phương thức RestTemplate.getForObject(url, x) có ý nghĩa gì?\n\r1. Quy định kiểu dữ liệu trả về\n\r2. Quy định kiểu dữ liệu gửi đi",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. Với SOAP, dữ liệu truyền thông cồng kềnh hơn REST\n\r2. Với SOAP, dữ liệu truyền thông nhẹ hơn REST",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Đâu là các phương thức tương tác với REST API trong AngularJS?",
    dapAn: [
      "$http.delete(url).then(response => {}).catch(error => {}))",
      "$http.get(url).then(response => {}).catch(error => {})",
      "$http.post(url, data).then(response => {}).catch(error => {}))",
      "$http.put(url, data).then(response => {}).catch(error => {}))"
    ]
  },
  {
    cauHoi: "Hãy điền tên thực thể còn thiếu vào ô trống vào ô trống\n\r@Query(\"SELECT o FROM ___ o\")\n\rList<Product> findByX();",
    dapAn: "Product"
  },
  {
    cauHoi: "Khi thực hiện GET, Firebase REST API sẽ trả về dữ liệu gì?",
    dapAn: "Đối tượng JSON"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện tương tác với REST API và nhận kết quả JSON\n\rURL url = new URL(\"...\");\n\rHttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\rconn.setRequestProperty(\"Accept\", \"_____\");\n\rconn.setRequestMethod(\"_____\");",
    dapAn: [
      "application/json, DELETE",
      "application/json, GET",
      "application/json, POST",
      "application/json, PUT"
    ]
  },
  {
    cauHoi: "Hãy điền vào các chỗ trống để tạo thành câu lệnh đúng cú pháp trong AngularJS.\n\r$http._____(url, data)._____(response => {})._____(error => {}))",
    dapAn: [
      "post/then/catch",
      "put/then/catch"
    ]
  },
  {
    cauHoi: "Đâu là khai báo phương thức truy vấn đùng cú pháp DSL?",
    dapAn: [
      "List<Product> findAllByNameLike(String name, Sort sort);",
      "List<Product> findByNameLike(String name, Sort sort);"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn có sắp xếp\n\r@Query(\"SELECT o FROM Product o WHERE o.name LIKE ?2\")\n\rList<Product> findItems(_____, _____);\n\r1. Sort sort, String keywords\n\r2. String keywords, Sort sort",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để thực hiện tổng hợp số lượng sản phẩm từng loại\n\r@Query(\"SELECT o.category, count(o) FROM Product o GROUP BY o.category\")\n\rList<_____> getReport();",
    dapAn: "Object[]"
  },
  {
    cauHoi: "Spring.jpa.hibernate.ddl-auto=create\n\rKhai báo trên có ý nghĩa gì?",
    dapAn: "Xóa các bảng hiện có và tạo lại dựa trên các entity class"
  },
  {
    cauHoi: "Với Spring Data JPA khi khai báo trong entity class là @Column(name=\"FirstName\") sẽ ánh xạ với cột có tên như thế nào?\n\r1. FirstName\n\r2. First_Name",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Trong AngularJS, đâu là lệnh thiết lập header Authorization chung cho mọi request?",
    dapAn: "$httpProvider.defaults.headers.common['Authorization'] = \"Basic <token>\""
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n\r1. User.password(\"B\").withUsername(\"A\").roles(\"C\").build();\n\r2. User.withUsername(\"A\").roles(\"C\").password(\"B\").build();",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Lệnh nào sau đây tạo đối tượng UserDetails có username là \"A\", password là \"B\" và vai trò là \"C\"?\n\r1. User.withUsername(\"A\").password(\"B\").roles(\"C\").build();\n\r2. User.withUsername(\"A\").password(\"B\").authorities(\"C\").build();",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu về Spring Security\n\r1. Spring Security là một framework, cung cấp các quy chuẩn trong việc thực hiện phòng vệ ứng dụng web\n\r2. Đơn giản trong Validation (XSS), CORS, CSRF",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là url không cần khai báo xử lý trong controller?\n\rhttp.formLogin()\n\r .loginPage(\"/security/login/form\")  \n\r .loginProcessingUrl(\"/security/login\")\n\r .defaultSuccessUrl(\"/security/login/success\", false)\n\r .failureUrl(\"/security/login/error\")",
    dapAn: "/security/login"
  },
  {
    cauHoi: "Đâu là khai báo phương thức truy vấn đùng cú pháp DSL?",
    dapAn: [
      "Page<Product> findAllByNameLike(String name, Pageable pageable);",
      "Page<Product> findByNameLike(String name, Pageable pageable);"
    ]
  },
  {
    cauHoi: "Đâu là sự thể hiện của trang web được bảo mật?\n\r1. Trang web trước và sau khi đăng nhập có thể khác nhau\n\r2. Không thể thực hiện một số hành vi nếu chưa đăng nhập",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống tên phương thức phân quyền không cần đăng nhập cũng được phép truy xuất\n\rhttp.authorizeRequests().antMatchers(\"/**\")._____",
    dapAn: "permitAll()"
  },
  {
    cauHoi: "Với Thymeleaf Extras Spring Security, đâu là các thẻ sử dụng security thích hợp?",
    dapAn: [
      "<div sec:authentication=\"\"></div>",
      "<div sec:authorize=\"\"></div>"
    ]
  },
  {
    cauHoi: "Với oauth là OAuth2AuthenticationToken, đâu là phương thức để lấy tên của tài khoản?",
    dapAn: "oauth.getPrincipal().getAttribute(\"fullname\")"
  },
  {
    cauHoi: "Spring Security framework cho phép thực hiện\n\r1. Đăng nhập với user facebook\n\r2. Đăng nhập với user google",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là khai báo các thư viện cần thiết trong Spring Boot để có thể đăng nhập từ mạng xã hội?",
    dapAn: [
      "<dependency>\n\r <groupId>org.springframework.boot</groupId>\n\r <artifactId>spring-boot-starter-oauth2-client</artifactId>\n\r</dependency>",
      "<dependency>\n\r <groupId>org.springframework.boot</groupId>\n\r <artifactId>spring-boot-starter-security</artifactId>\n\r</dependency>"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, hãy điền vào chỗ trống để chuyển điều khiển đến URL xử lý lỗi truy cập không hợp lệ\n\rhttp._____()._____(URL);",
    dapAn: "exceptionHandling/accessDeniedPage"
  },
  {
    cauHoi: "Trong bảo mật, CSRF (Cross-Site Request Forgery) là kỹ thuật dùng để ngăn chặn?",
    dapAn: "Ngăn chặn các request giả lập"
  },
  {
    cauHoi: "Trong HttpServletRequest, phương thức nào cho phép lấy username của người đăng nhập?",
    dapAn: "getRemoteUser()"
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là phương thức của http.rememberMe() giúp tùy biến tên tham số ghi nhớ tài khoản của form đăng nhập?",
    dapAn: "rememberMeParameter()"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện câu lệnh JPQL\n\r@Query(\"SELECT o FROM Product o WHERE o.category.id=_____\")\n\rList<Product> findByCategoryId(@Param(\"id\") String id);",
    dapAn: ":id"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống hiển thị giá trị của biến x trong Model\n\r<b th:text=\"_____\"></b?",
    dapAn: "${x}"
  },
  {
    cauHoi: "Đâu là annotation được sử dụng để chú thích dữ liệu JSON được trả về từ REST API?",
    dapAn: "@ResponseBody"
  },
  {
    cauHoi: "Giả sử có cấu hình interceptor xử lý thay đổi ngôn ngữ như sau\n\r@Override\n\rpublic void addInterceptors(InterceptorRegistry registry) {\n\r LocaleChangeInterceptor locale = new LocaleChangeInterceptor();\n\r locale.setParamName(\"lang\");\n\r registry.addInterceptor(locale).addPathPatterns(\"/language/change\");\n\r}\n\rHãy lựa chọn liên kết làm thay đổi ngôn ngữ",
    dapAn: [
      "<a href=\"/language/change?lang=en\">",
      "<a href=\"/language/change?lang=vi\">"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để đoạn mã tính tổng căn bậc 2 các số chia hết cho 3\n\rStream<Integer> s = Stream.of(1, 9, 4, 7, 5, 2);\n\r  double x = s.filter(n -> n % 3 == 0)._____.sum();",
    dapAn: [
      "mapToDouble(Math::sqrt)",
      "mapToDouble(n -> Math.sqrt(n))"
    ]
  },
  {
    cauHoi: "Đâu là các key được sử dụng để khai báo thông tin đã đăng ký với google developer trong application.properties?",
    dapAn: [
      "spring.security.oauth2.client.registration.google.client-id=<app-id>",
      "spring.security.oauth2.client.registration.google.client-secret=<secret-code>"
    ]
  },
  {
    cauHoi: "Với Thymeleaf Extras Spring Security, đâu là các thẻ sử dụng security thích hợp?",
    dapAn: [
      "<div sec:authorize=\"hasAnyRole('ADMIN')\"></div>",
      "<div sec:authorize=\"isAuthenticated()\"></div>"
    ]
  },
  {
    cauHoi: "Với http là HttpSecurity, đâu là những URL đã được bảo vệ với lệnh sau\n\rhttp.authorizeRequests().antMatchers(\"/a/**\").authenticated()",
    dapAn: [
      "/a",
      "/a/b",
      "/a/b/c",
      "/a/b/c/d"
    ]
  },
  {
    cauHoi: "Hãy cho biết kết quả của biểu thức sau:\n\rStream.of(1, 9, 3, 7, 6, 2).filter(n -> n % 3 == 0).reduce(0, (p, c) -> p < c ? c : p)",
    dapAn: "9"
  },
  {
    cauHoi: "Với Spring Data JPA khi khai báo với entity class là @Table(name=\"UserRoles\") sẽ ánh xạ với bảng có tên như thế nào?\n\r1. UserRoles\n\r2. User_Roles",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Cách nào sau đây cung cấp UserDetailsService cho auth (AuthenticationManagerBuilder)?\n\r1. auth.userDetailsService(new UserDetailsService() {\n\r @Override\n\r public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n\r  return null;\n\r }\n\r});\n\r2. auth.userDetailsService( username -> {\n\r  return null;\n\r});",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Cho cấu hình nạp file tài nguyên như sau:\n\r@Bean(\"messageSource\")\n\rpublic MessageSource getMessageSource() {\n\r ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();\n\r ms.setBasenames(\"classpath:i18n/messages\");\n\r ms.setDefaultEncoding(\"utf-8\");\n\r return ms;\n\r}\n\rHỏi file messages.properties đặt ở thư mục nào?",
    dapAn: "src/main/resources/i18n"
  },
  {
    cauHoi: "Với http là HttpSecurity và bạn có cấu hình đăng nhập và đăng xuất như sau:\n\rhttp.formLogin().loginPage(\"url1\")\n\rThì\n\r1. Bạn cần viết phương thức ánh xạ với các url1  trong controller để chuyển đến giao diện đăng nhập\n\r2. Không cần viết mã trong controller, hệ thống sẽ tự nhận biết form đăng nhập",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Đâu là annotation được sử dụng để ánh xạ các hoạt động của REST API với các phương thức của RestController?",
    dapAn: "@PostMapping"
  },
  {
    cauHoi: "Giả sử trong cấu hình java có khai báo bean để nạp các file tài nguyên đa ngôn ngữ như sau\n\r@Bean(\"messageSource\")\n\rpublic MessageSource getMessageSource() {\n\r ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();\n\r ms.setBasenames(\"classpath:i18n/layout\", \"classpath:i18n/home\");\n\r ms.setDefaultEncoding(\"utf-8\");\n\r return ms;\n\r}\n\rHãy cho biết các file tài nguyên đa ngôn ngữ đặt ở thư mục nào của dự án?",
    dapAn: "src/main/resources/i18n"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. UserDetails là interface mô tả mô hình dữ liệu của người đăng nhập\n\r2. UserDetailsService là interface cung cấp phương thức giúp tải dữ liệu người sử dụng theo tên đăng nhập để xác thực",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức đếm sản phẩm theo loại\n\r@Query(\"SELECT _____(o) FROM Product o WHERE o.category.id=?1\")\n\rLong countByCategory(String id);",
    dapAn: "count"
  },
  {
    cauHoi: "Trong Thymeleaf, biểu thức nào cho phép truy xuất username của người đăng nhập",
    dapAn: [
      "${#request.getRemoteUser()}",
      "${#request.remoteUser}",
      "${#request.userPrincipal.getUsername()}",
      "${#request.userPrincipal.username}"
    ]
  },
  {
    cauHoi: "Lệnh nào được sử dụng để truy vấn một thực thể theo khóa chính (@Id)\n\r1. T entity = dao.findById(id).get()\n\r2. T entity = dao.getOne(id);",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Page chứa kết quả truy vấn phân trang. Gọi phương thức nào để lấy danh sách (List<T>) các thực thể của trang truy vấn?",
    dapAn: "getContent()"
  },
  {
    cauHoi: "Cho 2 phát biểu về ưu điểm khi sử dụng Thymeleaf so với JSP\n\r1. Đơn giản, dễ quản lý, bảo trì\n\r2. Thu hẹp khoảng cách giữa designer và developer",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn\n\r@Query(\"SELECT o.name, o.price FROM Product o\")\n\rList<_____> findProducts(Integer id);",
    dapAn: "Object[]"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để tạo địa chỉ url đúng cú pháp (trong đó biến x có trong Model)\n\r<a th:href=\"_____\">",
    dapAn: [
      "@{'/url/'+${x}}",
      "@{/url/{p}(p=${x})}",
      "@{|/url/${x}|}"
    ]
  },
  {
    cauHoi: "Giả sử biến items trong Model có kiểu là Map<String, String>. Hãy chọn mã tạo ra các thẻ <option value=\"key\">value</option>",
    dapAn: [
      "<option th:each=\"item, state: ${items}\" th:value=\"${item.key}\" th:text=\"${item.value}\"/>",
      "<option th:each=\"item: ${items}\" th:value=\"${item.key}\" th:text=\"${item.value}\"/>"
    ]
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Để cập nhật thông tin liên lạc của Nguyễn Thị Diễm Phương bạn cần?\n<img src=\"https://docs.google.com/uc?id=1KD4lSyUutTdRQXgxpPnae7L3A4y0VSQt\" style=\"max-width:95%\">",
    dapAn: [
      "Data: { email: \"?\", address: \"?\"}",
      "Operation: PUT",
      "URL: https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users/PS09013/contact.json"
    ]
  },
  {
    cauHoi: "Chọn các đoạn mã lệnh đúng",
    dapAn: [
      "ActionListener listener = e -> {};",
      "ActionListener listener = new ActionListener() {\n\r @Override\n\r public void actionPerformed(ActionEvent e) {}\n\r};",
      "Runnable run = () -> {};",
      "Runnable run = new Runnable() {\n\r @Override\n\r public void run() {}\n\r};"
    ]
  },
  {
    cauHoi: "Hãy chọn lệnh đúng duyệt Map sau\nMap < String, Double >  map = new HashMap <  > ();",
    dapAn: "map.forEach((k, v) - >  System.out.printf(\"%s=%.2f\", k, v));"
  },
  {
    cauHoi: "Đâu là phương thức trung gian trong Stream API?",
    dapAn: "peek()"
  },
  {
    cauHoi: "Đâu là phương thức kết thúc trong Stream API?",
    dapAn: "forEach()"
  },
  {
    cauHoi: "Đâu là phương thức trung gian trong Stream API?",
    dapAn: "mapToDouble()"
  },
  {
    cauHoi: "Đâu là phương thức kết thúc trong Stream API?",
    dapAn: [
      "count()",
      "max()",
      "min()"
    ]
  },
  {
    cauHoi: "Đâu là phương thức kết thúc trong Stream API?",
    dapAn: [
      "allMatch()",
      "anyMatch()",
      "average()"
    ]
  },
  {
    cauHoi: "Đâu là phương thức trung gian trong Stream API?",
    dapAn: [
      "distinct()",
      "limit()",
      "mapToLong()"
    ]
  },
  {
    cauHoi: "Đâu là các toán tử so sánh trong Thymeleaf?",
    dapAn: [
      "!=",
      "==",
      "eq",
      "ne"
    ]
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới mà không dựa vào các thuộc tính của HTML?",
    dapAn: [
      "th:case",
      "th:switch",
      "th:unless"
    ]
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới dựa vào thuộc tính có sẵn của HTML?",
    dapAn: "th:src"
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới dựa vào thuộc tính có sẵn của HTML?",
    dapAn: "th:href"
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới mà không dựa vào các thuộc tính của HTML?",
    dapAn: [
      "th:each",
      "th:if",
      "th:switch"
    ]
  },
  {
    cauHoi: "Đâu là các toán tử so sánh trong Thymeleaf?",
    dapAn: [
      "<=",
      ">=",
      "ge",
      "le"
    ]
  },
  {
    cauHoi: "Hãy cho biết kết quả của biểu thức sau:\n\rStream.of(1, 9, 3, 7, 6, 2).filter(n -> n % 3 == 0).reduce(0, (p, c) -> p + c)",
    dapAn: "18"
  },
  {
    cauHoi: "Hãy điền vào chỗ trong biểu thức thích hợp để hiển thị lỗi của  thuộc tính p của bean b trong Model\n\r<form th:action=\"@{/save}\">\n\r    <input th:errors=\"_____\">\n\r</form>",
    dapAn: "${b.p}"
  },
  {
    cauHoi: "Mục đích của web service là gì?\n\r1. Xây dựng các operation trên nền internet chỉ để phục vụ cho các ứng dụng web\n\r2. Xây dựng các operation trên nền internet để phục vụ cho mọi thể loại ứng dụng",
    dapAn: "1 sai, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống của đoạn mã Java sau đây để có thể thực hiện cập nhật dữ liệu với REST API và nhận kết quả JSON\n\rURL url = new URL(\"...\");\n\rHttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\rconn.setRequestProperty(\"Accept\", \"_____\");\n\rconn.setRequestMethod(\"_____\");",
    dapAn: "application/json, PUT"
  },
  {
    cauHoi: "Biểu thức ~{/frags :: dynamic(~{::main})} được hiểu là gì?\n\r1. Chọn fragment dynamic khai báo trong frags.html và truyền thẻ main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html\n\r2. Chọn fragment dynamic khai báo trong frags.html và truyền fragment main ở trang web hiện tại cho tham số của fragment dynamic trong frags.html",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Với conn là đối tượng HttpURLConnection, hãy điền vào chỗ trống tên các phương thức để thực hiện việc đọc dữ liệu trả về từ REST API?\n\rint responseCode = conn._____;\n\rif (responseCode == 200) {\n\r    return mapper.readTree(conn._____);\n\r}",
    dapAn: "getResponseCode()/getInputStream()"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống để hoàn thiện phương thức truy vấn\n\r@Query(\"SELECT o FROM Product o WHERE o.category.id=:cid\")\n\rList<Product> findByCategoryId(_____ String id);",
    dapAn: "@Param(\"cid\")"
  },
  {
    cauHoi: "Để truy xuất thông tin của người đăng nhập, trong Thymeleaf bạn có thể sử dụng đối tượng tiện ích nào?\n\r1. #request\n\r2. #authentication",
    dapAn: "1 đúng, 2 đúng"
  },
  {
    cauHoi: "Hãy điền vào các chỗ trống để hoàn thiện phương thức truy vấn sản phẩm\n\r@Query(value = \"SELECT * FROM _____ WHERE Name LIKE ?1\", nativeQuery = true)\n\rList<_____> findByKeyword(String keyword);",
    dapAn: "Products, Product"
  },
  {
    cauHoi: "Hãy điền vào các chỗ trống để tạo thành câu lệnh đúng cú pháp trong AngularJS.\n\r$http._____(url)._____(response => {})._____(error => {}))",
    dapAn: [
      "delete/then/catch",
      "get/then/catch"
    ]
  },
  {
    cauHoi: "Hãy điền vào chỗ trống kiểu kết quả thu được của đoạn mã sau:\n\rStream<Integer> s = Stream.of(1, 9, 4, 7, 5, 2);\n\r_____ list = s.filter(n -> n % 3 == 0)\n\r  .map(n -> String.format(\"%.2f\", Math.sqrt(n)))\n\r  .collect(Collectors.toList());",
    dapAn: "List<String>"
  },
  {
    cauHoi: "Trong RestTemplate phương thức nào của HttpHeaders giúp thiết lập header Authorization cho request?",
    dapAn: "add(\"Authorization\", \"Basic <token>\")"
  },
  {
    cauHoi: "Cho Realtime Database của firebase như hình trên, Để thêm mới một user bạn cần thực hiện POST đến URL nào?\n<img src=\"https://docs.google.com/uc?id=1KD4lSyUutTdRQXgxpPnae7L3A4y0VSQt\" style=\"max-width:95%\">",
    dapAn: "URL: https://poly-java-6-d4e0b-default-rtdb.firebaseio.com/users.json"
  },
  {
    cauHoi: "Hãy viết phương thức DSL tương đương với truy vấn sau:\n\r@Query(“SELECT p FROM Product p WHERE p.price<=?1 OR p.name LIKE ?2”)",
    dapAn: "findByPriceLessThanEqualOrNameLike(double value, String name)"
  },
  {
    cauHoi: "Cho 2 phát biểu về vị trí của đối số tích lũy lỗi:\n\r1. Đối số BindingResult hoặc Errors bắt buộc phải đặt ngay sau bean được kiểm lỗi\n\r2. Đối số BindingResult hoặc Errors không bắt buộc phải đặt ngay sau bean được kiểm lỗi",
    dapAn: "1 đúng, 2 sai"
  },
  {
    cauHoi: "Cho 2 phát biểu sau:\n\r1. User là interface mô tả mô hình dữ liệu của người đăng nhập\n\r2. UserDetails là class implements UserDetails đồng thời bổ sung các hàm tiện ích giúp bạn dễ dàng tạo ra đối tượng UserDetails",
    dapAn: "1 sai, 2 sai"
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới mà không dựa vào các thuộc tính của HTML?",
    dapAn: [
      "th:block",
      "th:insert",
      "th:replace"
    ]
  },
  {
    cauHoi: "Hãy cho biết kết quả của biểu thức sau:\n\rStream.of(1, 9, 3, 7, 6, 2).filter(n -> n % 3 == 0).reduce(10, (p, c) -> p > c ? c : p)",
    dapAn: "3"
  },
  {
    cauHoi: "Hãy điền vào chỗ trống biểu thức thích hợp để buộc thuộc tính p của bean b trong Model\n\r<form th:action=\"@{/save}\" th:object=\"${b}\">\n\r    <input th:field=\"_____\">\n\r</form>",
    dapAn: [
      "${b.p}",
      "*{p}"
    ]
  },
  {
    cauHoi: "Đâu là các thuộc tính do Thymeleaf định nghĩa mới dựa vào thuộc tính có sẵn của HTML?",
    dapAn: "th:title"
  }


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
