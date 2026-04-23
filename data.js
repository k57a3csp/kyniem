const k57Data = {
    // 1. Danh sách thành viên
    thanhVien: [
        { ten: "Vương Đình Tường An", dob: "26/10/2008", tag: "BOY ♂️", anh: "images/an.jpg", bietDanh: "albert" },
        { ten: "Đặng Việt Anh", dob: "13/06/2008", tag: "BOY ♂️", anh: "" , bietDanh: "dva, vanh" },
        { ten: "NGUYỄN TÀI TIẾN ANH", dob: "12/3/2008", tag: "BOY ♂️", anh: "" , bietDanh: "tien" },
        { ten: "Nguyễn Thị Lan Anh", dob: "02/04/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "lanh" },
        { ten: "Trần Ngọc Phương Anh", dob: "09/03/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "phanh" },
        { ten: "Vương Minh Anh", dob: "06/03/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "ma, manh" },
        { ten: "Nguyễn Lê Đức Bình", dob: "28/10/2008", tag: "BOY ♂️", anh: "" , bietDanh: "binh" },
        { ten: "Trần Bảo Minh Châu", dob: "17/04/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "tẹt" },
        { ten: "Nguyễn Hữu Tuấn Cường", dob: "13/03/2008", tag: "BOY ♂️", anh: "" , bietDanh: "cn" },
        { ten: "Nguyễn Cao Anh Đức", dob: "11/06/2008", tag: "BOY ♂️", anh: "images/anhduc.jpg" , bietDanh: "Akita Art" },
        { ten: "Nguyễn Việt Dũng", dob: "25/09/2008", tag: "BOY ♂️", anh: "" , bietDanh: "kDuy" },
        { ten: "Nguyễn Đặng Thùy Dương", dob: "03/01/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "tduong" },
        { ten: "Nguyễn Tiến Dương", dob: "18/05/2008", tag: "BOY ♂️", anh: "" , bietDanh: "Marky" },
        { ten: "Phan Khánh Duy", dob: "09/10/2008", tag: "BOY ♂️", anh: "images/duy.jpg" , bietDanh: "bố Đức" },
        { ten: "Đinh Quang Hiếu", dob: "04/01/2008", tag: "BOY ♂️", anh: "" , bietDanh: "hiropi" },
        { ten: "Vũ Ngọc Hưng", dob: "21/03/2008", tag: "BOY ♂️", anh: "" , bietDanh: "Ỉn" },
        { ten: "Lê Gia Huy", dob: "04/04/2008", tag: "BOY ♂️", anh: "" , bietDanh: "biển" },
        { ten: "Nguyễn Tuấn Huy", dob: "09/08/2008", tag: "BOY ♂️", anh: "images/tuanhuy.jpg" , bietDanh: "HNT" },
        { ten: "Vũ Chấn Huy", dob: "17/09/2008", tag: "BOY ♂️", anh: "" , bietDanh: "chấn, kurot" },
        { ten: "Trần Nguyễn Minh Huyền", dob: "05/03/2008", tag: "GIRL ♀️", anh: "images/huyen.jpg" , bietDanh: "mihuein" },
        { ten: "VŨ ANH KHÔI", dob: "04/03/2008", tag: "BOY ♂️", anh: "images/khoi.jpg" , bietDanh: "totozz" },
        { ten: "Phạm Ngọc Bằng Linh", dob: "28/04/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "ngọc linh, bling bel" },
        { ten: "Doãn Hải Minh", dob: "10/08/2008", tag: "BOY ♂️", anh: "", bietDanh: "lì"  },
        { ten: "Lê Quốc Minh", dob: "17/05/2008", tag: "BOY ♂️", anh: "" , bietDanh: "A Minh Reyna" },
        { ten: "Phạm Châu Minh", dob: "20/05/2008", tag: "BOY ♂️", anh: "images/chauminh.jpg" , bietDanh: "Knight" },
        { ten: "Phan Tiến Minh", dob: "30/12/2008", tag: "BOY ♂️", anh: "images/tienminh.jpg", bietDanh: "Mimi"  },
        { ten: "Lưu Trà My", dob: "02/10/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "tmii" },
        { ten: "Trần Thị Minh Ngọc", dob: "24/06/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "" },
        { ten: "Trần Khôi Nguyên", dob: "29/03/2008", tag: "BOY ♂️", anh: "images/nguyen.jpg" , bietDanh: "filmintomlife" },
        { ten: "Hoàng Tiến Phát", dob: "11/06/2008", tag: "BOY ♂️", anh: "" , bietDanh: "PhátHoàng" },
        { ten: "Hoàng Hải Phong", dob: "17/09/2008", tag: "BOY ♂️", anh: "images/phong.jpg" , bietDanh: "xôi" },
        { ten: "Đào Đức Phúc", dob: "30/10/2008", tag: "BOY ♂️", anh: "images/phuc.jpg" , bietDanh: "dpw" },
        { ten: "Nguyễn Lê Anh Phương", dob: "09/02/2008", tag: "GIRL ♀️", anh: "", bietDanh: "as, as phương, hellast"  },
        { ten: "Nguyễn Thế Quyết", dob: "16/12/2008", tag: "BOY ♂️", anh: "images/quyet.jpg" , bietDanh: "TQ" },
        { ten: "Chu Tuấn Sang", dob: "10/04/2008", tag: "BOY ♂️", anh: "images/sang.jpg" , bietDanh: "Sangchu" },
        { ten: "An Hải Kim Sơn", dob: "28/07/2008", tag: "BOY ♂️", anh: "" , bietDanh: "ăn hại" },
        { ten: "Đỗ Minh Thực", dob: "19/06/2008", tag: "BOY ♂️", anh: "images/thuc.jpg", bietDanh: "Lychee"  },
        { dob: "28/11/2008", ten: "Trang Vân Thy", tag: "GIRL ♀️", anh: "" , bietDanh: "Bóng Pé" },
        { ten: "Đỗ Ngọc Tuấn Tú", dob: "29/01/2008", tag: "BOY ♂️", anh: "images/tu.jpg", bietDanh: "Tumoi"  },
        { ten: "Phạm Mỹ Tuệ", dob: "30/11/2008", tag: "GIRL ♀️", anh: "" , bietDanh: "alli" },
        { ten: "Nguyễn Đức Việt", dob: "17/03/2008", tag: "BOY ♂️", anh: "images/viet.jpg" , bietDanh: "Mason Cato" },
        { ten: "Lê Quang Vinh", dob: "30/03/2008", tag: "BOY ♂️", anh: "images/vinh.jpg" , bietDanh: "Lqv3003" },
        { ten: "Trần Quang Vinh", dob: "03/04/2008", tag: "BOY ♂️", anh: "images/quangvinh.jpg" , bietDanh: "Vinhdzvcl<3" },
        { ten: "Nguyễn Đức Công Vương", dob: "09/02/2008", tag: "BOY ♂️", anh: "", bietDanh: "square"  },
        { ten: "Lê Ngọc Yến", dob: "12/10/2008", tag: "GIRL ♀️", anh: "images/yen.jpg", bietDanh: "Yến"  }
    ],

    // 2. Danh sách thầy cô
    // data.js
    thayCo: [
    { 
        ten: "Cô Đinh Thị Hà Trang", 
        monHoc: "Giáo Viên Chủ Nhiệm / Tiếng Anh", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496132993654198292/1727197390_z5695677575835_524c56e82024de37de6bdade76931e84-Ha-Trang.png?ex=69e8c5ee&is=69e7746e&hm=8c1d7a7565a319859285ac4c7ab27c24c41ca5e37a43e58a6921c2deb83430a9&=&format=webp&quality=lossless&width=590&height=885", 
        loiChuc: "Chúc các chú rồng A3 luôn tự tin và tỏa sáng trên con đường mình chọn!" 
    },
    { 
        ten: "Thầy Hoàng Đức Nguyên", 
        monHoc: "Toán (Lớp 12)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496132319906631780/1727285824_E1BAA2nh-Hoang-Duc-Nguyen.png?ex=69e8c54d&is=69e773cd&hm=786f1adb93ab0cd7eaa451e9b8f78da97fdd97ef08969140ce2f574f8fe5533d&=&format=webp&quality=lossless&width=590&height=886", 
        loiChuc: "Chúc các em ôn thi thật tốt và cán đích với kết quả rực rỡ nhất." 
    },
    { 
        ten: "Cô Nguyễn Thanh Loan", 
        monHoc: "Ngữ Văn", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496165869321977937/image.png?ex=69e8e48c&is=69e7930c&hm=4181d49f20899ba26d36a38c01fe28855cd5bedf766d4fc39ad3da9dfe921ca0&=&format=webp&quality=lossless&width=591&height=886", 
        loiChuc: "Viết tiếp những chương thật đẹp cho cuộc đời mình, các em nhé!" 
    },
    { 
        ten: "Thầy Nguyễn Thanh Hồng", 
        monHoc: "Toán Đại (Lớp 10)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496131935909449910/1723082895_Thay-Hong.png?ex=69e8c4f2&is=69e77372&hm=508405cc849623579309a01a2966b36d52885c189247c1fea4199c2b68d95ad5&=&format=webp&quality=lossless&width=513&height=886", 
        loiChuc: "Luôn giữ vững tư duy logic và bản lĩnh trong mọi thử thách." 
    },
    { 
        ten: "Thầy Lưu Tiến Đức", 
        monHoc: "Toán Hình (Lớp 10)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496132170828353718/1723283731_Duc-Tien-Duc-Luu.png?ex=69e8c52a&is=69e773aa&hm=8b7cc7b3ad38aacfeff8a32f740b02a95c97910ad74d2c509fe2f19eb24ddd85&=&format=webp&quality=lossless", 
        loiChuc: "Mọi vấn đề đều có cách giải, quan trọng là góc nhìn của các em." 
    },
    { 
        ten: "Cô Nguyễn Thị Hồng Phượng", 
        monHoc: "Toán Đại (Lớp 11)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496132704582762636/image.png?ex=69e8c5a9&is=69e77429&hm=67f52570de391398d4977d0d4375bfd68f52621ae087ad8e47e951caa5edc25b&=&format=webp&quality=lossless&width=661&height=885", 
        loiChuc: "Kiên trì là chìa khóa của mọi thành công." 
    },
    { 
        ten: "Cô Nguyễn Việt Hà", 
        monHoc: "Toán Hình (Lớp 11)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ha", 
        loiChuc: "Hy vọng các em sẽ luôn tìm thấy sự cân bằng trong cuộc sống." 
    },
    { 
        ten: "Cô Bùi Phương Thúy", 
        monHoc: "Vật Lý", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496133467170275359/1727283189_IMG_20240715_201925-3-Phuong-Thuy-Bui.png?ex=69e8c65f&is=69e774df&hm=b27d5354057ee7361f85a885dbe8db00bc9bd1135e1e12a29bb57d15476f9fc3&=&format=webp&quality=lossless", 
        loiChuc: "Hãy là những nguồn năng lượng tích cực lan tỏa đến mọi người." 
    },
    { 
        ten: "Thầy Nguyễn Trường Giang", 
        monHoc: "Hóa Học (Lớp 12)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496133325679755355/1727280983_E1BAA2nh-Giang-Nguyen-Truong-Giang.png?ex=69e8c63d&is=69e774bd&hm=09c87fb83e91f03899461c7b61dbac47fc3b794fbdbca2afd41d2ae1290d9dac&=&format=webp&quality=lossless&width=565&height=886", 
        loiChuc: "Phản ứng cuộc đời luôn cần sự nhiệt huyết, hãy cháy hết mình!" 
    },
    { 
        ten: "Cô Lê Phương Thảo", 
        monHoc: "Hóa Học (Lớp 10 & 11)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496133439479615489/1727281359_IMG_4688-2-LC3AA-PhC6B0C6A1ng-ThE1BAA3o.png?ex=69e8c658&is=69e774d8&hm=3296e299d430730c175113ff53b9f64b388d36c1c3facd1c77d9b4683a850f97&=&format=webp&quality=lossless&width=664&height=886", 
        loiChuc: "Chúc các em luôn có những 'liên kết' bền vững và tốt đẹp." 
    },
    { 
        ten: "Cô Hải Lý", 
        monHoc: "Sinh Học (Lớp 10)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496169255492653147/image.png?ex=69ea3933&is=69e8e7b3&hm=ee7e72ce6830d155bd926ccd517d854f795a872036108c24326832cd5879eed1&=&format=webp&quality=lossless&width=886&height=886", 
        loiChuc: "Yêu thiên nhiên, yêu bản thân và không ngừng tiến hóa nhé!" 
    },
    { 
        ten: "Cô Đinh Thị Thu Hằng", 
        monHoc: "Sinh Học (Lớp 11 & 12)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hang", 
        loiChuc: "Sức sống bền bỉ sẽ đưa các em đi xa hơn mong đợi." 
    },
    { 
        ten: "Cô Linh", 
        monHoc: "Lịch Sử (Lớp 10)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496166229897908484/image.png?ex=69e8e4e2&is=69e79362&hm=24a9c25dc60e05fe942e5f25c90e26d012537d30fee597ca2417d27c63199b64&=&format=webp&quality=lossless", 
        loiChuc: "Trân trọng quá khứ để viết nên những trang sử mới hào hùng." 
    },
    { 
        ten: "Thầy Đặng Minh Xuân", 
        monHoc: "Lịch Sử (Lớp 10 & 11)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496166021663424602/image.png?ex=69e8e4b0&is=69e79330&hm=6edd33b88be28675e35bff86bd6f020f7c9c14fe56d4f73041b5eb852d61f8bd&=&format=webp&quality=lossless&width=881&height=886", 
        loiChuc: "Hành trình vạn dặm bắt đầu từ những bước chân đầu tiên." 
    },
    { 
        ten: "Cô Nguyễn Thị Thu Hà", 
        monHoc: "Lịch Sử (Lớp 12)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496133171111133265/1727198473_NguyE1BB85n-ThE1BB8B-Thu-HC3A0_-TE1BB95-XH-Thu-HC3A0-NguyE1BB85n1.png?ex=69e8c618&is=69e77498&hm=a691c2cbf30f02297fa9e115c210d64e1006f0f27f41645f1f4dfcb059129c08&=&format=webp&quality=lossless", 
        loiChuc: "Ghi nhớ nguồn cội và không ngừng vươn tới tương lai." 
    },
    { 
        ten: "Thầy Đặng Xuân Đích", 
        monHoc: "Tin Học (Lớp 10 & 12)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496133969148772422/1723084003_Thay-Dich.png?ex=69e8c6d7&is=69e77557&hm=d46523b9f1176c79978bf563695105b5c92cf0042a68c3c00a20c8717f153737&=&format=webp&quality=lossless&width=590&height=886", 
        loiChuc: "Lập trình tương lai bằng niềm đam mê và sự sáng tạo." 
    },
    { 
        ten: "Thầy Bùi Quang Vinh", 
        monHoc: "Tin Học (Lớp 11)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496165726111662194/image.png?ex=69e8e46a&is=69e792ea&hm=87974157386f9f1ff359ef898b378280f6eaec14e2225ac102ec924ad151119e&=&format=webp&quality=lossless", 
        loiChuc: "Chúc các em luôn có những thuật toán tối ưu nhất cho cuộc đời mình." 
    },
    { 
        ten: "Thầy Nguyễn Minh Ngọc", 
        monHoc: "Thể Dục (Lớp 10 & 12)", 
        anh: "https://media.discordapp.net/attachments/893888180439367833/1496166582991458334/image.png?ex=69e8e536&is=69e793b6&hm=b2e1c3a6496d6026ce10d87a7b62d289eae578234920368c5e68e914da349f49&=&format=webp&quality=lossless&width=882&height=886", 
        loiChuc: "Thân khỏe thì tâm mới an, hãy luôn rèn luyện sức khỏe nhé!" 
    },
    { 
        ten: "Thầy Hưng", 
        monHoc: "Thể Dục (Lớp 11)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=HungTD", 
        loiChuc: "Bền bỉ, dẻo dai và không bao giờ bỏ cuộc." 
    }
],

    // 3. Thư viện Kỷ niệm (Chỉ cần dán link ảnh/video vào trong ngoặc kép)
    thuVien: {
        anh: [
            "https://images.unsplash.com/photo-1511629091441-ee4614645276?w=800",
            "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800",
            // Thêm link ảnh khác ở đây...
        ],
        video: [
            // Thêm link video (ví dụ: link youtube dạng embed hoặc link .mp4)
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
        ]
    },

    anhDim: {
        anh:[

        ],
        video: [

        ]
    }
};