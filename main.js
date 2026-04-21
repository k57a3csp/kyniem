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
                <p class="font-bold text-sm opacity-70">"${member.bietDanh}" • 12A3</p>
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