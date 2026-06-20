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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
