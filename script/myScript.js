const app = new Vue(
    {
        el: '#vueContainer',
        data: {
            newMess:"",
            active:{},
            search:"",
            classes:"",
            showStyle:"",
            nowWriting:"",

            randomAnswers:[
                "Ok!", "XD", "Se lo dici tu...", "Ti richiamo dopo", "Sono d'accordo", "greve"
            ],
    
            ctcs:[
                {name:"Michele",
                    pic:"imgs/avatar_1.jpg",
                    convo: [
                        {
                            date: '13/08/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showPopup: false,     

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showPopup: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            showPopup: false,
                        }]
            },
                {name:"Fabio",
                pic:"imgs/avatar_2.jpg",
                convo:[
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        showPopup: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        showPopup: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        showPopup: false,
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

            sendMess() {                   //inserisce un messaggio//
                this.active.convo.push({
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newMess,
                status: 'sent',
                showPopup: false
                })

                this.nowWriting = this.active
                /***aggiungendo una nuova variabile, "blocco" la funzione sull'utente precedentemente
                selezionato se l'active dovesse cambiare prima della fine della funzione***/
                
                var no = Math.floor(Math.random() * 6); //calcolo risposta random
                setTimeout(()=> {  
                    
                    this.nowWriting.convo.push({  //***** */
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: this.randomAnswers[no],  //messaggio random
                    status: 'received',
                    showPopup: false
                    })                    
                    this.scrollToBottom(); //richiama funzione auto-scroll
                },1000);

            return this.newMess ="";       //svuota la barra messaggi
            },
                            
            addClasses(sts){               //stili messaggi
                if(sts === 'sent'){
                return this.classes="sentmsg"
               }
                else if(sts === 'received'){
                return this.classes="receivedmsg"
               }
            },

            addClassesPopUp(sts){          //stili pop-up (spostati a dx o sx)
              return this.classes = "banner-" + sts
            },   
       
            //-----------------------------//auto scroll
            scrollToBottom(){  //ref = id vue
                setTimeout (()=> {
                const htmlElement = this.$refs.chatContainerToScroll;
                htmlElement.scrollTop = htmlElement.scrollHeight;
                }, 100);
            },//------------------------

            formatTime(dataString){        //formatta data e ora
                const dataFormString = moment(dataString, "DD/MM/YYYY HH:mm:ss")
                return dataFormString.format("HH:mm")
            },

            showOptions(element){          //mostra o nasconde pop-up
                element.showPopup = !element.showPopup;                    
            },

            deleteItem(ToDelete) {         //formatta data e ora
                this.active.convo.splice(ToDelete, 1)    
            //this.active.convo[ToDelete].text ="Questo messaggio è stato eliminato"  //alternativa con messaggio                              
            },

            lastMessage(contact){          //ritorna l'ultimo messaggio del contatto               
                const receivedText = contact.convo.filter(( el ) => el.satus = 'received'); 
                if(receivedText.length === 0 ){
                return "nessun messaggio da mostare";
                }
                const lastMsgText = receivedText[receivedText.length - 1].text;
                if(lastMsgText.length > 20 ){
                let previewMsg = lastMsgText.slice(0,20) + "...";
                return previewMsg;
                }  
            return lastMsgText;
            },

            redo(){
            return this.search = "";
            },
        },
        computed: {
            
            filteredContacts:function(){   //filtra i contatti in base alla variabile search
                return this.ctcs.filter((contact) => {
                return contact.name.toLowerCase().startsWith(this.search.toLowerCase());
                });
            },

            lastAccess(){                 //mostra quando è stato stampato l'ultimo messaggio
                if(!this.active.convo ){
                return "";
                }
                const received = this.active.convo.filter(( msg ) => msg.satus = 'received'); // no '==='?

                if(received.length === 0 ){
                return "";
                }

                const lastMsgDate = received[received.length - 1].date;
                if(!lastMsgDate){
                return "";
                }
                return this.formatTime(lastMsgDate);
                },      
              
            }
})

