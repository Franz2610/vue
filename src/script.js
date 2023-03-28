const {createApp} = Vue

createApp({
    data(){
        return{
            titolo :'Hello Vue',
            color : 'red',
            image : ''
        }
    }
}).mount('#app');