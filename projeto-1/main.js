let modalOpen = false

const btnOpen = document.getElementById('btn-open')

function manipularModal(){
    const modal = document.getElementById('card-info')

    if(modalOpen){
        modal.style.width = '0'
        modalOpen = false
        btnOpen.style.display = 'flex'
        return
    }
    modal.style.width = 'auto'
    modalOpen = true
    btnOpen.style.display = 'none'
}

btnOpen.addEventListener('click', manipularModal)
document.getElementById('btn-close').addEventListener('click', manipularModal)