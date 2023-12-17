import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	mobile: false,
	colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934', 'skyblue', 'hotpink'],
	decals: ['react', 'three2', 'pmndrs'],
	color: 'skyblue',
	decal: 'three2'
})

export { state }
