const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/ariya/status', (req, res) => {

    res.json({
        batteryPercent: 67,
        rangeKm: 396,
        plugged: false,
        charging: false,
        lastUpdate: '23:26'
    });

});

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});