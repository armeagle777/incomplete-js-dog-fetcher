const names =['affenpinscher', 'african', 'airedale', 'akita', 'appenzeller', 'shepherd australian', 'basenji', 'beagle', 'bluetick', 'borzoi', 'bouvier', 'boxer', 'brabancon', 'briard', 'norwegian buhund', 'boston bulldog', 'english bulldog', 'french bulldog', 'staffordshire bullterrier', 'australian cattledog', 'chihuahua', 'chow', 'clumber', 'cockapoo', 'border collie', 'coonhound', 'cardigan corgi', 'cotondetulear', 'dachshund', 'dalmatian', 'great dane', 'scottish deerhound', 'dhole', 'dingo', 'doberman', 'norwegian elkhound', 'entlebucher', 'eskimo', 'lapphund finnish', 'bichon frise', 'germanshepherd', 'italian greyhound', 'groenendael', 'havanese', 'afghan hound', 'basset hound', 'blood hound', 'english hound', 'ibizan hound', 'plott hound', 'walker hound', 'husky', 'keeshond', 'kelpie', 'komondor', 'kuvasz', 'labradoodle', 'labrador', 'leonberg', 'lhasa', 'malamute', 'malinois', 'maltese', 'bull mastiff', 'english mastiff', 'tibetan mastiff', 'mexicanhairless', 'mix', 'bernese mountain', 'swiss mountain', 'newfoundland', 'otterhound', 'caucasian ovcharka', 'papillon', 'pekinese', 'pembroke', 'miniature pinscher', 'pitbull', 'german pointer', 'germanlonghair pointer', 'pomeranian', 'miniature poodle', 'standard poodle', 'toy poodle', 'pug', 'puggle', 'pyrenees', 'redbone', 'chesapeake retriever', 'curly retriever', 'flatcoated retriever', 'golden retriever', 'rhodesian ridgeback',
    'rottweiler', 'saluki', 'samoyed', 'schipperke', 'giant schnauzer', 'miniature schnauzer', 'english setter']

window.onload = function () {
    const selecter = document.createElement('select')
    selecter.setAttribute('id','dogTypeSelect')
    names.forEach(name=> {
        const option = document.createElement('option')
        option.innerText = name
        option.setAttribute('value',name)
        selecter.append(option)
    })
    const divContent = document.createElement('div')
    const preSpan = document.createElement('span')
    preSpan.innerText='https://dog.ceo/api/breed/'
    const postSpan = document.createElement('span')
    postSpan.innerText='/images/random'
    const fetchButton  = document.createElement('button')
    fetchButton.innerText='FETCH'
    fetchButton.setAttribute('id','fetch-button')
    divContent.append(preSpan,selecter,postSpan,fetchButton)
    const root = document.getElementById('fetch-line')
    root.append(divContent)
    document.getElementById('fetch-button').addEventListener('click', getData)
}

async function getData() {
    const maindiv=document.getElementById('fetch-line')
    if(maindiv.getElementsByTagName('div').length > 1){
        maindiv.removeChild(maindiv.getElementsByTagName('div')[1])
    }
    const dogType = document.getElementById('dogTypeSelect').value.split(' ')
    const URL = `https://dog.ceo/api/breed/${dogType}/images/random`
    try{
        const data = await fetch(URL).then(data=>data.json())
        const imageParentDiv = document.createElement('div')
        const image = document.createElement('img')
        image.src=data.message
        imageParentDiv.append(image)
        maindiv.append(imageParentDiv)
    }catch(err){
        console.log(err)
    }



}