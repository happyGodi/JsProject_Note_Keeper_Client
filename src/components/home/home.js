import login from '../login/login.vue'
import signup from '../signin/signin.vue'

export default{
    name: 'home',
    components: {
        login: login,
        signup: signup
    },
    data: function(){
        return {
            current: 'login',
            text: 'Don\'t have an account yet?',
            okSign: false
        }
    },
    methods: {
        change(){
            if (!this.okSign){
                this.current = 'signup'
                this.text = 'Log into an account?'               
            }
            else{
                this.current = 'login'
                this.text = 'Don\'t have an account yet?'
            }
            this.okSign = !this.okSign
        }
    }
}