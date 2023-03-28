const {createApp} = Vue

createApp({
    data(){
        return{
            titolo :'Hello Vue',
            image : './img/download.jpg',
            color : 'red'
        }
    }
}).mount('#app');