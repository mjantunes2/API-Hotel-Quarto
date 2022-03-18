const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.get("/teste", (req, res) => {
    res.status(200).json({mensagem: "Servidor Funcionando"});
});

async function sincronizar() {
    try {
        
    } catch (error) {
        
    }
};

sincronizar();