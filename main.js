// main.js
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Tự động đóng menu khi xoay ngang màn hình hoặc phóng to trình duyệt (tùy chọn)
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // 768px là mốc md của Tailwind
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
    }
});
const membersGrid = document.getElementById('members-grid');
if (membersGrid) {
    membersGrid.className = "bg-white neo-brutalism p-4 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6";
    k57Data.thanhVien.forEach(member => {
        membersGrid.innerHTML += `
            <div class="group relative cursor-pointer bg-white neo-brutalism p-4">
                <div class="bg-sage p-2 neo-brutalism aspect-square mb-4 overflow-hidden">
                    <img src="${member.anh}" alt="Avatar" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all">
                </div>
                <h3 class="font-black text-xl uppercase">${member.ten}</h3>
                <p class="font-bold text-sm opacity-70">"${member.bietDanh}" • ${member.dob} • 12A3</p>
                <div class="absolute top-2 right-2 bg-white border-2 border-black px-2 py-1 text-[10px] font-black">${member.tag}</div>
            </div>
        `;
    });
}

// Render Thầy cô
const teachersGrid = document.getElementById('teachers-grid');
if (teachersGrid) {
    teachersGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16";
    k57Data.thayCo.forEach(teacher => {
        teachersGrid.innerHTML += `
            <div class="bg-yellow-bright p-6 neo-brutalism flex items-center gap-4">
                <img src="${teacher.anh}" class="w-24 h-24 rounded-full border-4 border-black object-cover bg-white">
                <div>
                    <h3 class="font-black text-2xl uppercase">${teacher.ten}</h3>
                    <p class="font-bold text-sage mb-2">${teacher.monHoc}</p>
                    <p class="italic text-sm">"${teacher.loiChuc}"</p>
                </div>
            </div>
        `;
    });
}

// Render Thư viện
const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
    // Render Ảnh
    k57Data.thuVien.anh.forEach(anhLink => {
        galleryGrid.innerHTML += `
            <div class="neo-brutalism overflow-hidden aspect-square">
                <img src="${anhLink}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
            </div>
        `;
    });
    // Render Video
    k57Data.thuVien.video.forEach(videoLink => {
        galleryGrid.innerHTML += `
            <div class="neo-brutalism overflow-hidden aspect-video col-span-1 md:col-span-2">
                <iframe class="w-full h-full" src="${videoLink}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    });
}

const gallerytrollGrid = document.getElementById('gallerytroll-grid');
if (gallerytrollGrid) {
    // Render Ảnh
    k57Data.anhDim.anh.forEach(anhLink => {
        gallerytrollGrid.innerHTML += `
            <div class="neo-brutalism overflow-hidden aspect-square">
                <img src="${anhLink}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
            </div>
        `;
    });
    // Render Video
    k57Data.anhDim.video.forEach(videoLink => {
        gallerytrollGrid.innerHTML += `
            <div class="neo-brutalism overflow-hidden aspect-video col-span-1 md:col-span-2">
                <iframe class="w-full h-full" src="${videoLink}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    });
}

// Xử lý Form Gửi Lời Nhắn
const messageForm = document.getElementById('message-form');
if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const data = {
            name: document.getElementById('sender-name').value,
            message: document.getElementById('sender-message').value,
            date: new Date().toLocaleString()
        };

        // Gửi dữ liệu lên Google Sheet
        fetch('https://sheetdb.io/api/v1/u9ixrj0pn7sp9', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: [data] })
        })
        .then(response => {
            alert('Lời nhắn đã được gửi lên Google Sheet của lớp!');
            messageForm.reset();
        });
    });
}
// Xử lý Cỗ Máy Thời Gian
const timeForm = document.getElementById('time-capsule-form');
if (timeForm) {
    timeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('future-name').value,
            email: document.getElementById('future-email').value,
            message: document.getElementById('future-message').value
        };

        fetch('https://sheetdb.io/api/v1/3ofh56qs9h5tg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            alert("Lá thư đã được lưu vào Google Sheets!");
            timeForm.reset();
        });
    });
}

const URL_BINH_CHON = 'https://script.google.com/macros/s/AKfycbyQ0vQxf4ahavjTtyZIEHv0_G6E-9IkkW1SjFD7AXvWGzyORcdokCTSuOYqvw_BSxhg/exec';

// 1. Đổ dữ liệu thành viên vào các Dropdown
const voteSelects = document.querySelectorAll('#voting-form select');
if (voteSelects.length > 0 && typeof k57Data !== 'undefined') {
    voteSelects.forEach(select => {
        k57Data.thanhVien.forEach(member => {
            const opt = document.createElement('option');
            opt.value = member.ten;
            opt.textContent = member.ten;
            select.appendChild(opt);
        });
    });
}

// 2. Xử lý khi nhấn Vote
const votingForm = document.getElementById('voting-form');
if (votingForm) {
    votingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-submit');
        btn.disabled = true;
        btn.innerText = "Đang ghi nhận...";

        const data = {
    nguGat: document.getElementById('vote-ngu-gat').value,
    vanNghe: document.getElementById('vote-van-nghe').value,
    hocThan: document.getElementById('vote-hoc-than').value // Đã thêm cột 3
};

        try {
            // Gửi dữ liệu lên Google Sheets
            await fetch(URL_BINH_CHON, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data)
            });

            // Hiện vùng kết quả và vẽ biểu đồ
            document.getElementById('vote-box').classList.add('hidden');
            document.getElementById('result-box').classList.remove('hidden');
            
            // Lấy dữ liệu mới nhất để vẽ biểu đồ
            setTimeout(async () => {
                const res = await fetch(URL_BINH_CHON);
                const votes = await res.json();
                drawResults(votes);
            }, 1000);

        } catch (err) {
            alert("Lỗi rồi! Bạn hãy kiểm tra lại URL App Script.");
            btn.disabled = false;
        }
    });
}

// 3. Hàm vẽ biểu đồ
function drawResults(votes) {
    // Thêm 'hocThan' vào danh sách hạng mục
    const categories = ['nguGat', 'vanNghe', 'hocThan'];
    const colors = ['#FCD34D', '#F472B6', '#60A5FA']; // Vàng, Hồng, Xanh dương

    categories.forEach((cat, index) => {
        const counts = {};
        votes.forEach(v => {
            if(v[cat]) counts[v[cat]] = (counts[v[cat]] || 0) + 1;
        });

        // Tạo ID canvas tương ứng: chart-ngu-gat, chart-van-nghe, chart-hoc-than
        const canvasId = `chart-${cat.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(counts),
                datasets: [{
                    label: `Số phiếu: ${cat === 'nguGat' ? 'Trùm ngủ gật' : cat === 'vanNghe' ? 'Văn nghệ' : 'Học thần'}`,
                    data: Object.values(counts),
                    backgroundColor: colors[index],
                    borderColor: '#000',
                    borderWidth: 3
                }]
            },
            options: {
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } }
            }
        });
    });
}