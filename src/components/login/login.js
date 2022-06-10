import axios from '../../../node_modules/axios/axios.js'

export default {
	name: 'login',
	data: function(){
		return {
        userName: '',
        password: '',
        users: null,
        link: '/',
        correct: false,
        inputType: 'password',
        show: false,
		}
	},
  async mounted(){
      await axios.get('http://localhost:3500/users')
                  .then((res)=>{
                      this.users = res.data
                  })
  },
	methods: {
    logIn(){
      if (this.userName != null && this.userName !='' && this.password != null && this.password != ''){
        //console.log('name: ' + this.userName + '\npassword: ' + this.password)
        for (let i = 0; i < this.users.length; i++){
          if (this.users[i].name == this.userName && this.users[i].password == this.password){
            this.correct = true
            break
          }
        }
        if (this.correct)
          this.link = '/noteView'
      }
    },
    reverse(){//hide of thow password
			if(this.show)
				this.inputType = 'password'
			else this.inputType = 'text'
			this.show = !this.show
		},
	}
}