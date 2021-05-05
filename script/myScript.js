
const app = new Vue(
    {
        el: '#vueContainer',
        data: {
            newMess:"",
            active:{},
            search:"",
    
            ctcs:[
                {name:"Michele",
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
                {name:"Fabio",
                pic:"imgs/avatar_2.jpg",
                convo:[
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]},

                {name:"Gianni",
                pic:"imgs/avatar_3.jpg",
                convo:[
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]},

                {name:"Franco",
                pic:"imgs/avatar_4.jpg",
                convo:[
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]},

                {name:"Mario",
                pic:"imgs/avatar_5.jpg",
                convo:[]},

                {name:"Luisa",
                pic:"imgs/avatar_6.jpg",
                convo:[]},

                {name:"Samuele",
                pic:"imgs/avatar_7.jpg",
                convo:[]},
                {name:"Paolo",
                pic:"imgs/avatar_8.jpg",
                convo:[]},
            ],

        },

        methods:{
            openConvo(contact){  
                this.active = contact;   
                },

                sendMess() {
                    this.active.convo.push({
                        date: 'now',
                        text: this.newMess,
                        status: 'sent'
                    })
                    setTimeout(()=> {     //LA FUNZIONE NORMALE NON MANTIENE IL THIS
                        this.active.convo.push({
                            date: 'now',
                            text: "ok",
                            status: 'received'
                        })
                    },1000)
                return this.newMess ="" },
        },
       
        computed: {
                
                filteredContacts:function(){
                    return this.ctcs.filter((contact) => {
                        return contact.name.match(this.search);
                    });
                }
            }
})