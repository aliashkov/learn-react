const defaultStore = {
    items: [
        { id: 1, title: 'Asus ROG Advantage', body: '1920 x 1080 IPS, 144 Гц, несенсорный, Intel Core i7 10750H 2600 МГц, 16 ГБ DDR4, SSD 1024 ГБ, видеокарта NVIDIA GeForce RTX 2070 Super 8 ГБ, Windows 10, цвет крышки темно-серый', cost: '6 997.00', file: 'https://img.5element.by/import/images/ut/goods/good_83139d4e-35bd-11ec-bb94-0050560120e8/g513qy-hq007-rog-strix-g15-advantage-edition-noutbuk-asus-1.jpg' },
        { id: 2, title: 'Legion 5', body: '1920 x 1080 IPS, 144 Гц, несенсорный, Intel Core i7 10750H 2600 МГц, 16 ГБ DDR4, SSD 1024 ГБ, видеокарта NVIDIA GeForce RTX 2070 Super 8 ГБ, Windows 10, цвет крышки темно-серый', cost: '5 999.00', file: 'https://img.5element.by/import/images/ut/goods/good_150f371a-ab63-11ec-bb95-0050560120e8/17ach6-82k00006rk-legion-5-igrovoy-noutbuk-lenovo-1.jpg' },
        { id: 3, title: 'Legion 5 Pro', body: '1920 x 1080 IPS, 144 Гц, несенсорный, Intel Core i7 10750H 2600 МГц, 16 ГБ DDR4, SSD 1024 ГБ, видеокарта NVIDIA GeForce RTX 2070 Super 8 ГБ, Windows 10, цвет крышки темно-серый', cost: '7 799.00', file: 'https://img.5element.by/import/images/ut/goods/good_da0c4252-8d97-11ec-bb94-0050560120e8/16ach6h-82jq000urk-legion-5-pro-noutbuk-lenovo-1_600.jpg' },
    ],
}


export const itemsReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "INITIAL_STATE":
            return { ...state, items: action.payload }
        case "POSTS_SORT":
            return { ...state, items: action.payload }
        case "CHANGE_VISIBILITY":
            return { ...state, items: action.payload }
        case "ADD_POST":
            return { ...state, items: [...state.items, action.payload] }
        case "DELETE_ITEM":
            return { ...state, items: action.payload }
        case "CHANGE_POST":
            return { ...state, items: action.payload }
        default:
            return state
    }
}
