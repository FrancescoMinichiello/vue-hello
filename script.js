//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao mi chiamo Francesco',
            age: 26,
            image: 'https://www.r101.it/resizer/1200/720/true/1479293548471_1609836225.jpg--the_rock_e_la__persona_piu_piacevole_e_simpatica_al_mondo_.jpg'
        }
    },
}).mount('#app');