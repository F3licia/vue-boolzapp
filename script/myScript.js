
const app = new Vue(
    {
        el: '#vueContainer',
        data: {
            active:"",
            ctcs:[
                {name:"nome-1",
                    pic:"imgs/avatar_1.jpg",
                    convo: [
                        {
                            date: '13/08/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }]
            },
                {name:"nome-2", pic:"imgs/avatar_2.jpg"},
                {name:"nome-3", pic:"imgs/avatar_3.jpg"},
                {name:"nome-4", pic:"imgs/avatar_4.jpg"},
                {name:"nome-5", pic:"imgs/avatar_5.jpg"},
                {name:"nome-6", pic:"imgs/avatar_6.jpg"},
                {name:"nome-7", pic:"imgs/avatar_7.jpg"},
                {name:"nome-8", pic:"imgs/avatar_8.jpg"},
            ],

        },
   
        methods: {   
            openConvo(contact){  
               this.active = contact;   
            },
            sentReceived(status){

          
            },
        }
    }

);