// تحديد الزر وجسم الصفحة
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// وظيفة التبديل
toggleBtn.addEventListener('click', () => {
    // تبديل الكلاس dark-mode في الـ body
    body.classList.toggle('dark-mode');

    // تغيير الأيقونة بناءً على الوضع الحالي
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️'; // شمس للوضع النهاري
    } else {
        toggleBtn.textContent = '🌙'; // قمر للوضع الليلي
    }
});
