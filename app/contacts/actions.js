export function allMenu(){
    // data simulation
    const menu= [
        { name: 'Model', icon: 'person', value:'Home' },
        { name: 'Kamera', icon: 'camera' },
        { name: 'Gambar', icon : 'images', value:'Picture'},
        { name: 'Huruf', icon: 'create',value:'Font' },
        { name: 'Forme', icon : 'star'},
        { name: 'Efek', icon: 'color-wand' },
        { name: 'Stikcer', icon: 'happy' },
        
    ]

    return {
        type: 'ALL_MENU',
        payload: menu
    }
}
export function allPicture(){
	const picture = [
		{id:1,path:"require('./IMG_7427.jpeg')"},
		{id:2,path:"require('./IMG_7428.jpeg')"},
		{id:3,path:"require('./IMG_7430.jpeg')"},
		{id:4,path:"require('./IMG_7431.jpeg')"},
	]

	return {
		type: 'ALL_PICTURES',
		payload : picture
	}
}
export function addPicture(input){
	const path = {input}
	return {
		type : 'ADD_PICTURE',
		payload: path
	}
}