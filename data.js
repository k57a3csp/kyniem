const k57Data = {
    // 1. Danh sách thành viên
    thanhVien: [
        { ten: "Vương Đình Tường An", dob: "26/10/2008", tag: "BOY ♂️", anh: "images/thanhvien/an.jpg", bietDanh: "albert" },
        { ten: "Đặng Việt Anh", dob: "13/06/2008", tag: "BOY ♂️", anh: "images/thanhvien/vanh.jpg" , bietDanh: "dva, vanh" },
        { ten: "NGUYỄN TÀI TIẾN ANH", dob: "12/3/2008", tag: "BOY ♂️", anh: "images/thanhvien/tanh.jpg" , bietDanh: "tien" },
        { ten: "Nguyễn Thị Lan Anh", dob: "02/04/2008", tag: "GIRL ♀️", anh: "images/thanhvien/lanh.png" , bietDanh: "lanh" },
        { ten: "Trần Ngọc Phương Anh", dob: "09/03/2008", tag: "GIRL ♀️", anh: "images/thanhvien/phanh.jpg" , bietDanh: "phanh" },
        { ten: "Vương Minh Anh", dob: "06/03/2008", tag: "GIRL ♀️", anh: "images/thanhvien/ma.jpg" , bietDanh: "ma, manh" },
        { ten: "Nguyễn Lê Đức Bình", dob: "28/10/2008", tag: "BOY ♂️", anh: "images/thanhvien/binh.jpg" , bietDanh: "binh" },
        { ten: "Trần Bảo Minh Châu", dob: "17/04/2008", tag: "GIRL ♀️", anh: "images/thanhvien/chau.jpg" , bietDanh: "tẹt" },
        { ten: "Nguyễn Hữu Tuấn Cường", dob: "13/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/cn.jpg" , bietDanh: "cn" },
        { ten: "Nguyễn Cao Anh Đức", dob: "11/06/2008", tag: "BOY ♂️", anh: "images/thanhvien/duc.jpg" , bietDanh: "Zeraora" },
        { ten: "Nguyễn Việt Dũng", dob: "25/09/2008", tag: "BOY ♂️", anh: "images/thanhvien/dung.jpg" , bietDanh: "Akita Art" },
        { ten: "Nguyễn Đặng Thùy Dương", dob: "03/01/2008", tag: "GIRL ♀️", anh: "images/thanhvien/duong.jpg" , bietDanh: "tduong" },
        { ten: "Nguyễn Tiến Dương", dob: "18/05/2008", tag: "BOY ♂️", anh: "images/thanhvien/tduong.jpg" , bietDanh: "Marky" },
        { ten: "Phan Khánh Duy", dob: "09/10/2008", tag: "BOY ♂️", anh: "images/thanhvien/duy.jpg" , bietDanh: "bố Đức" },
        { ten: "Đinh Quang Hiếu", dob: "04/01/2008", tag: "BOY ♂️", anh: "images/thanhvien/hieu.jpg" , bietDanh: "hiropi" },
        { ten: "Vũ Ngọc Hưng", dob: "21/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/hung.jpg" , bietDanh: "Ỉn" },
        { ten: "Lê Gia Huy", dob: "04/04/2008", tag: "BOY ♂️", anh: "images/thanhvien/ghuy.jpg" , bietDanh: "biển" },
        { ten: "Nguyễn Tuấn Huy", dob: "09/08/2008", tag: "BOY ♂️", anh: "images/thanhvien/thuy.jpg" , bietDanh: "HNT" },
        { ten: "Vũ Chấn Huy", dob: "17/09/2008", tag: "BOY ♂️", anh: "images/thanhvien/chuy.jpg" , bietDanh: "chấn, kurot" },
        { ten: "Trần Nguyễn Minh Huyền", dob: "05/03/2008", tag: "GIRL ♀️", anh: "images/thanhvien/huyen.jpg" , bietDanh: "mihuein" },
        { ten: "VŨ ANH KHÔI", dob: "04/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/khoi.jpg" , bietDanh: "totozz" },
        { ten: "Phạm Ngọc Bằng Linh", dob: "28/04/2008", tag: "GIRL ♀️", anh: "images/thanhvien/linh.png" , bietDanh: "ngọc linh, bling bel" },
        { ten: "Doãn Hải Minh", dob: "10/08/2008", tag: "BOY ♂️", anh: "images/thanhvien/hminh.jpg", bietDanh: "lì"  },
        { ten: "Lê Quốc Minh", dob: "17/05/2008", tag: "BOY ♂️", anh: "images/thanhvien/qminh.jpg" , bietDanh: "A Minh Reyna" },
        { ten: "Phạm Châu Minh", dob: "20/05/2008", tag: "BOY ♂️", anh: "images/thanhvien/cminh.jpg" , bietDanh: "Knight" },
        { ten: "Phan Tiến Minh", dob: "30/12/2008", tag: "BOY ♂️", anh: "images/thanhvien/tminh.jpg", bietDanh: "Mimi"  },
        { ten: "Lưu Trà My", dob: "02/10/2008", tag: "GIRL ♀️", anh: "images/thanhvien/my.jpg" , bietDanh: "tmii" },
        { ten: "Trần Thị Minh Ngọc", dob: "24/06/2008", tag: "GIRL ♀️", anh: "images/thanhvien/ngoc.jpg" , bietDanh: "" },
        { ten: "Trần Khôi Nguyên", dob: "29/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/nguyen.jpg" , bietDanh: "filmintomlife" },
        { ten: "Hoàng Tiến Phát", dob: "11/06/2008", tag: "BOY ♂️", anh: "images/thanhvien/phat.jpg" , bietDanh: "PhátHoàng" },
        { ten: "Hoàng Hải Phong", dob: "17/09/2008", tag: "BOY ♂️", anh: "images/thanhvien/phong.jpg" , bietDanh: "xôi" },
        { ten: "Đào Đức Phúc", dob: "30/10/2008", tag: "BOY ♂️", anh: "images/thanhvien/phuc.jpg" , bietDanh: "dpw" },
        { ten: "Nguyễn Lê Anh Phương", dob: "09/02/2008", tag: "GIRL ♀️", anh: "images/thanhvien/phuong.jpeg", bietDanh: "as, as phương, hellast"  },
        { ten: "Nguyễn Thế Quyết", dob: "16/12/2008", tag: "BOY ♂️", anh: "images/thanhvien/quyet.jpg" , bietDanh: "TQ" },
        { ten: "Chu Tuấn Sang", dob: "10/04/2008", tag: "BOY ♂️", anh: "images/thanhvien/sang.jpg" , bietDanh: "Sangchu" },
        { ten: "An Hải Kim Sơn", dob: "28/07/2008", tag: "BOY ♂️", anh: "images/thanhvien/kson.jpg" , bietDanh: "ăn hại" },
        { ten: "Đỗ Minh Thực", dob: "19/06/2008", tag: "BOY ♂️", anh: "images/thanhvien/thuc.jpg", bietDanh: "Lychee"  },
        { dob: "28/11/2008", ten: "Trang Vân Thy", tag: "GIRL ♀️", anh: "images/thanhvien/thy.png" , bietDanh: "Bóng Pé" },
        { ten: "Đỗ Ngọc Tuấn Tú", dob: "29/01/2008", tag: "BOY ♂️", anh: "images/thanhvien/tu.jpg", bietDanh: "Tumoi"  },
        { ten: "Phạm Mỹ Tuệ", dob: "30/11/2008", tag: "GIRL ♀️", anh: "images/thanhvien/tue.jpg" , bietDanh: "alli" },
        { ten: "Nguyễn Đức Việt", dob: "17/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/viet.jpg" , bietDanh: "Mason Cato" },
        { ten: "Lê Quang Vinh", dob: "30/03/2008", tag: "BOY ♂️", anh: "images/thanhvien/lqv.jpg" , bietDanh: "Lqv3003" },
        { ten: "Trần Quang Vinh", dob: "03/04/2008", tag: "BOY ♂️", anh: "images/thanhvien/tqv.jpg" , bietDanh: "Vinhdzvcl<3" },
        { ten: "Nguyễn Đức Công Vương", dob: "09/02/2008", tag: "BOY ♂️", anh: "images/thanhvien/vuong.jpg", bietDanh: "square"  },
        { ten: "Lê Ngọc Yến", dob: "12/10/2008", tag: "GIRL ♀️", anh: "images/thanhvien/yen.jpg", bietDanh: "Yến"  }
    ],

    // 2. Danh sách thầy cô
    // data.js
    thayCo: [
    { 
        ten: "Cô Đinh Thị Hà Trang", 
        monHoc: "Giáo Viên Chủ Nhiệm / Tiếng Anh", 
        anh: "images/giaovien/hatrang.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Hoàng Đức Nguyên", 
        monHoc: "Toán (Lớp 12)", 
        anh: "images/giaovien/nguyen.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Nguyễn Thanh Loan", 
        monHoc: "Ngữ Văn", 
        anh: "images/giaovien/thanhloan.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Nguyễn Thanh Hồng", 
        monHoc: "Toán Đại (Lớp 10)", 
        anh: "images/giaovien/thayhong.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Lưu Tiến Đức", 
        monHoc: "Toán Hình (Lớp 10)", 
        anh: "images/giaovien/luutienduc.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Nguyễn Thị Hồng Phượng", 
        monHoc: "Toán Đại (Lớp 11)", 
        anh: "images/giaovien/phuong.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Nguyễn Việt Hà", 
        monHoc: "Toán Hình (Lớp 11)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ha", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Bùi Phương Thúy", 
        monHoc: "Vật Lý", 
        anh: "images/giaovien/ptb.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Nguyễn Trường Giang", 
        monHoc: "Hóa Học (Lớp 12)", 
        anh: "images/giaovien/truonggiang.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Lê Phương Thảo", 
        monHoc: "Hóa Học (Lớp 10 & 11)", 
        anh: "images/giaovien/thao.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Hải Lý", 
        monHoc: "Sinh Học (Lớp 10)", 
        anh: "images/giaovien/sinhly.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Đinh Thị Thu Hằng", 
        monHoc: "Sinh Học (Lớp 11 & 12)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hang", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Linh", 
        monHoc: "Lịch Sử (Lớp 10)", 
        anh: "images/giaovien/linhsu.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Đặng Minh Xuân", 
        monHoc: "Lịch Sử (Lớp 10 & 11)", 
        anh: "images/giaovien/xuan.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Cô Nguyễn Thị Thu Hà", 
        monHoc: "Lịch Sử (Lớp 12)", 
        anh: "images/giaovien/hasu.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Đặng Xuân Đích", 
        monHoc: "Tin Học (Lớp 10 & 12)", 
        anh: "images/giaovien/dich.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Bùi Quang Vinh", 
        monHoc: "Tin Học (Lớp 11)", 
        anh: "images/giaovien/vinh.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Nguyễn Minh Ngọc", 
        monHoc: "Thể Dục (Lớp 10 & 12)", 
        anh: "images/giaovien/ngoc.webp", 
        loiChuc: "" 
    },
    { 
        ten: "Thầy Hưng", 
        monHoc: "Thể Dục (Lớp 11)", 
        anh: "https://api.dicebear.com/7.x/adventurer/svg?seed=HungTD", 
        loiChuc: "" 
    }
],

    // 3. Thư viện Kỷ niệm (Chỉ cần dán link ảnh/video vào trong ngoặc kép)
    thuVien: {
        anh: [
            "images/thuvien/2.jpg",
"images/thuvien/3.jpg",
"images/thuvien/4.jpg",
"images/thuvien/5.jpg",
"images/thuvien/6.jpg",
"images/thuvien/7.jpg",
"images/thuvien/8.jpg",
"images/thuvien/9.jpg",
"images/thuvien/10.jpg",
"images/thuvien/11.jpg",
"images/thuvien/12.jpg",
"images/thuvien/13.jpg",
"images/thuvien/14.jpg",
"images/thuvien/15.jpg",
"images/thuvien/16.jpg",
"images/thuvien/17.jpg",
"images/thuvien/18.jpg",
"images/thuvien/19.jpg",
"images/thuvien/20.jpg",
"images/thuvien/21.jpg",
"images/thuvien/22.jpg",
"images/thuvien/23.jpg",
"images/thuvien/24.jpg",
"images/thuvien/25.jpg",
"images/thuvien/26.jpg",
"images/thuvien/27.jpg",
"images/thuvien/28.jpg",
"images/thuvien/29.jpg",
"images/thuvien/30.jpg",
"images/thuvien/31.jpg",
"images/thuvien/32.jpg",
"images/thuvien/33.jpg",
"images/thuvien/34.jpg",
"images/thuvien/35.jpg",

        ],
        video: [
        ]
    },

    anhDim: {
        anh:[
            "images/anhdim/1.jpg",
            "images/anhdim/2.jpg",
            "images/anhdim/3.jpg",
            "images/anhdim/4.jpg",
            "images/anhdim/5.jpg",
            "images/anhdim/6.jpg",
            "images/anhdim/7.jpg",
            "images/anhdim/8.jpg",
            "images/anhdim/9.jpg",
            "images/anhdim/11.jpg",
            "images/anhdim/12.jpg",
            "images/anhdim/13.jpg",
            "images/anhdim/14.jpg",
            "images/anhdim/15.jpg",
            "images/anhdim/16.jpg",
            "images/anhdim/18.jpg",
            "images/anhdim/19.jpg",
        ],
        video: [
            "images/anhdim/10.mp4",
            "images/anhdim/17.mp4",
            "images/anhdim/20.mp4",
            "images/anhdim/21.mp4",
            "images/anhdim/22.mp4",
            "images/anhdim/23.mp4",
        ]
    }
};
