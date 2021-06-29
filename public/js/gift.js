window.addEventListener('load', () => {
    async function giphyFunction() {
        const data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=F7NNx7J2Q6taRLVi9TmWBpEPJqMDSjJV`)
        const json = await data.json();

        const div = document.querySelector('div')
        const button = document.querySelector('button')


        function random_item(items) {

            return items[Math.floor(Math.random() * items.length)];

        }



        button.addEventListener('click', () => {
            if (button) {

                let div = document.querySelector('div')
                div.classList.add('container')
                let random = random_item(json.data)
                let h3ToInsert = document.querySelector('h3')
                let imgToInsert = document.querySelector('figcaption')
                h3ToInsert.innerHTML = ` ${random.title}`
                imgToInsert.innerHTML = `<img src=${random.images.original.url}>`


            }


        })



    }
    giphyFunction();





})