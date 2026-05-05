



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
}





function dropdownMenuTriggerOnClick() {

    const dropdownMenuContent = document.getElementById('dropdown-menu')
    dropdownMenuContent.classList.toggle('active')
}