import axios from '../../../node_modules/axios/axios.js'

export default {
	name: 'Signup',
	data: ()=>{
		return {
			users: null,
			image: '',
			userName: '',
			password: '',
			link: '/',
			show: false,
			inputType: 'password',
			formData: new FormData,
			alreadyExist: false
		}
	},
	async mounted(){
		await axios.get('http://localhost:3500/users')
					.then((res)=>{
						this.users = res.data
					})
	},
	methods: {
		onSelect(){
			const file = this.$refs.file.files[0]
			if (file && file != null)
				this.image = file
		},
		async signIn(){
			//check if a user name already exists
			if (this.users && this.userName != '' && this.password != '')
				for (let i = 0; i < this.users.lenght; i++){
					if (this.users[i].name == this.userName || this.users[i].password == this.password){
						this.alreadyExist = true
					}
				}
			//upload data if not exist
			if (!this.alreadyExist){
				this.formData.append('image', this.image)
				this.formData.append('name', this.userName)
				this.formData.append('password', this.password)
				await axios.post('http://localhost:3500/users', this.formData)
				this.link = "/noteview"
			}
		},
		reverse(){
			if(this.show)
				this.inputType = 'password'
			else this.inputType = 'text'
			this.show = !this.show
		},
	}
}