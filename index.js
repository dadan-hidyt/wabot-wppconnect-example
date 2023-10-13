const wppconnect = require("@wppconnect-team/wppconnect");

/**
 * basic
 */
const sessionName = "NusaAgency";

wppconnect
    .create({
        session: sessionName,
        onLoadingScreen: function (percen, msg) {
            console.info(percen + " " + msg);
        },
    })
    .then(function (client) {
        client.onMessage(async function (message) {
            try {
                if (message.isGroupMsg == false) {
                    /**
                     * Send message
                     */
                    if (message.body == "punten" || message.body.toLowerCase() == 'assalamualaikum' || message.body == 'p') {
                        client.sendText(message.from, "Waalaikumussalam, Wr.Wb");
                        client.sendText(message.from, "Apa Ada yang bisa kami bantu?");
                    } else if (message.body.toLowerCase().includes('/daftar_harga_ojs')) {
                        client.sendFile(message.from, 'https://nusaagency.com/storage/OJS.pdf');
                        client.sendText(message.from, "Berikut adalah daftar harga ojs\njika ingin langsung menanyakan ke marketing, silahkan ketik */MARKETING*\nAtau ketikan */portofolio* untuk melihat ojs yang sudah kami buat")
                    } else if (message.body.toLocaleLowerCase().includes('/portofolio')) {
                        client.sendText(message.from, `Samudra Publisher:\nhttp://samudrapublisher.com/\nRayyan Journal:\nhttp://rayyanjurnal.com/\nFahrudin Org:\nhttps://fahruddin.org/`);
                    } else if(message.body.toLowerCase() == '/marketing'){
                        client.sendContactVcard(message.from,'6281222251024@c.us','Marketing Nusa Agency');
                    } else if (message.body.toLowerCase().includes('ojs')) {
                        client.sendText(message.from, "Apakah Saudara Ingin Buat OJS?\nJika Iya ketikan */daftar_harga_ojs*");

                    } else {
                        client.sendText(message.from,"*HALLO!!* Selamat datang di nusa agency\nketikan keyword *ojs* atau *web development* untuk melihat info layanan kami!");

                    }
                }
            } catch (error) {
                console.error(error);
            }
        });
    })
    .catch(function (e) {
        console.error(e.message);
    });