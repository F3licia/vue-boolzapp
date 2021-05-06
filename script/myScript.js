
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
                            status: 'sent',
                            showPopup: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showPopup: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            showPopup: false
                        }]
            },
                {name:"Fabio",
                pic:"imgs/avatar_2.jpg",
                convo:[
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        showPopup: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        showPopup: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        showPopup: false
                    }
                ]},

                {name:"Gianni",
                pic:"imgs/avatar_3.jpg",
                convo:[
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        showPopup: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        showPopup: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        showPopup: false
                    }
                ]},

                {name:"Franco",
                pic:"imgs/avatar_4.jpg",
                convo:[
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        showPopup: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        showPopup: false
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
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.newMess,
                        status: 'sent',
                        showPopup: false
                    })
                    setTimeout(()=> {     //LA FUNZIONE NORMALE NON MANTIENE IL THIS
                        this.active.convo.push({
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            text: "ok",
                            status: 'received',
                            showPopup: false
                        })
                    },1000)
                return this.newMess ="" },
                
                formatTime(dataString){
                    const dataFormString = moment(dataString, "DD/MM/YYYY HH:mm:ss")
                    return dataFormString.format("HH:mm")
                },

                lastAccess(){
                  // filtra convo per status , date ultimo oggetto 
                    
                },

                showOptions(element){
                    element.showPopup = !element.showPopup;
                      
                  }

        },
       
        computed: {               
                filteredContacts:function(){
                    return this.ctcs.filter((contact) => {
                        return contact.name.match(this.search);
                    });
                }
            }
})