const getURLFromObject = (image) => {

    let { formats: { small: { url: imageURL } } } = image
    return `${imageURL}`

}

export {
    getURLFromObject
}