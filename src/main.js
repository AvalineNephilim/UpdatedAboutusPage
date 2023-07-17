let index = 0;
const items = document.querySelectorAll('.item');

items.forEach((item)=>item.addEventListener('click', ()=>{
    if(item.dataset.index === index) {
        return;
    }
    // hiding the unactive one
    items[index].classList.remove('h-36');
    items[index].classList.add('h-16');
    items[index].classList.remove('border-white');
    items[index].classList.add('border-[#5274BE]');

    // expanding the height for active one
    item.classList.remove('h-16');
    item.classList.add('h-36');
    item.classList.remove('border-[#5274BE]');
    item.classList.add('border-white');

    index = item.dataset.index;
}));