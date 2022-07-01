(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer({ img, name, text }) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    var customersJson =
        [
            { img: 0, name: 'john', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' },
            { img: 1, name: 'Sandy', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock' },
            { img: 2, name: 'Amy', text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
            { img: 3, name: 'Tyerll', text: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. ' },
            { img: 4, name: 'Wanda', text: ' All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.' }

        ];
    for (var a = 0; a < customersJson.length; a++) {
        console.log(a, customersJson[a])
        createCustomer(customersJson[a])
    }
    const card = document.getElementById("main-card")
    console.log(card)

    card.classList.add('even')
    customerImage.src = customers[0].img
    customerName.textContent = customers[0].name
    customerText.textContent = customers[0].text

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if (index % 2 === 0) {
                card.classList.remove('odd')
                card.classList.add('even')
            } else {
                card.classList.remove('even')
                card.classList.add('odd')
            }

        })
    })

})()