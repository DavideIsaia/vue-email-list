// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools = true;
const app = new Vue (
    {
        el : '#root',
        data: {
            randomMail: '',
            eMailList : []           
        },

        methods: {
            // genera 10 email random e le pusha dentro l'array predisposto
            generateMail() {
                for (let i = 0; i< 10; i++) {
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.randomMail = resp.data.response;
                        this.eMailList.push(this.randomMail);
                    });
                }
            }            
        }
    }
)