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