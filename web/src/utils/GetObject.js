const getURLFromObject = (image) => {
    let { formats: { small: { url: imageURL } } } = image
    return `${process.env.REACT_APP_BACKEND_URL}${imageURL}`
}

export {
    getURLFromObject
}