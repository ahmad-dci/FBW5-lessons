import {combineReducers} from 'redux'

const imagesArr = []

const imagesReducer = (images = imagesArr, action) => {
    if (action.type === 'SET_IMAGES') {
        return action.payload
    }
    return images
}

const selectedImageReducer = (image = null, action) => {
    if (action.type === 'SELECT_IMAGE') {
        return action.payload
    }
    return image
}

export default combineReducers({
    images: imagesReducer,
    selectedImage: selectedImageReducer
})
