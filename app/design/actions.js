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
		{id:1,path:"http://cdn2.tstatic.net/kaltim/foto/bank/images/reine-norwegia_20170416_110011.jpg"},
		{id:2,path:'https://files.brightside.me/files/news/part_0/5855/223455-burano1-1000-e9f955b9fb-1484634138.jpg'},
		{id:3,path:'https://kintamaniid-a903.kxcdn.com/wp-content/uploads/Bukit-Asah-Karangasem-1-1024x683.jpg'},
		{id:4,path:'https://jejakbcdn-a903.kxcdn.com/wp-content/uploads/Situ-gede.jpg'},
		{id:5,path:'http://www.wisataterindah.info/wp-content/uploads/2017/12/Sunrise-Sabana-Puncak-Pilar.jpg'}
	]

	return {
		type: 'ALL_PICTURES',
		payload : picture
	}
}
