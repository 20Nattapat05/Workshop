const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

btn.addEventListener('click',(e) => {
    coupon.select()
    coupon.setSelectionRange(0,99999);
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = 'คัดลอกเสร็จสิ้น !!'
    setTimeout(() => {
        btn.textContent = 'คัดลอก'
    },1000)
})