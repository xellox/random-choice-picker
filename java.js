const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        randomSelect()
    }
})

function createTags(input) {
    const tagSplit = input.split(',').filter(any => any.trim(''))
    tagsEl.innerHTML = ''

    tagSplit.forEach(tag => {
        const createTag = document.createElement('span')
        createTag.classList.add('tag')
        createTag.innerText = tag
        tagsEl.appendChild(createTag)
    })
}

function randomSelect(){
    const times = 30
    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
        unhighlightTag(randomTag)
        }, 150)
    }, 150)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        } ,150)
    }, times * 100)
}

function pickRandomTag(){
    const getTags = document.querySelectorAll('.tag')
    return getTags[Math.floor(Math.random() * getTags.length) ]
}

function highlightTag(func){
    func.classList.add('highlight')
}

function unhighlightTag(func){
    func.classList.remove('highlight')
}