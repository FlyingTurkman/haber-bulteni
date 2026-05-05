



document.addEventListener('DOMContentLoaded', initialLoading)


function initialLoading() {

    const dropdownMenuContainer = document.getElementById('dropdown-menu-container')
    const dropdownMenuContent = document.getElementById('dropdown-menu')
    const dropdownMenuTriggerButton = document.getElementById('dropdown-menu-trigger')
    dropdownMenuTriggerButton.addEventListener('click', dropdownMenuTriggerOnClick)


    window.addEventListener('click', (e) => {

        if (!dropdownMenuContainer.contains(e.target) && dropdownMenuContent.classList.contains('active')) {
            dropdownMenuContent.classList.remove('active')
        }
    })

    const form = document.getElementById('subs-form')

    form.addEventListener('submit', (e) => {

        e.preventDefault()

        formSubmit(form)
    })

    const alertMessageCloseButton = document.getElementById('alert-message-close-button')
    alertMessageCloseButton.addEventListener('click', (e) => {
        alertMessageClose()
    })
}





function dropdownMenuTriggerOnClick() {

    const dropdownMenuContent = document.getElementById('dropdown-menu')
    dropdownMenuContent.classList.toggle('active')
}

function formSubmit(form) {

    const formData = new FormData(form)
    const email = formData.get('email')

    const alertMessageContent = document.getElementById('alert-message-content')
    alertMessageContent.innerHTML = `
    <label>Teşekkürler ${email}</label> <br></br>
    <i>
        Haber bülteni aboneliğiniz başarıyla oluşturuldu. E-posta adresinize gelen bildirim postasını kontrol etmeniz önemle rica olunur.
    </i>
    <b>Her ayın ilk haftası</b><i>nda yeni sayımız e-posta adresinize otomatik olarak gönderilecektir.</i>
    `
    alertMessageOpen()
}

function alertMessageOpen() {
    
    const alertMesssageContainer = document.getElementById('alert-message')

    alertMesssageContainer.classList.add('message-active')
}

function alertMessageClose() {
    
    const alertMessageContainer = document.getElementById('alert-message')

    alertMessageContainer.classList.remove('message-active')
}