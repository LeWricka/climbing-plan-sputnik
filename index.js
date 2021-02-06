/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.sputnik1 = (req, res) => {
    sputnik1(req, res)
};

function sputnik1(req, res) {
    let materials = req.body.materials
    let routinesBase = {'climbing_gym': ['climbing_gym_3', 'climbing_gym_2'], 'trx': ["trx_ring"]}
    let routines = []
    materials.forEach(material => {
        routines.push(routinesBase[material])
    })
    res.status(200).send(`<!doctype html>
    <head>
      <title>Your routine</title>
    </head>
    <body>
      ${routines}
    </body>
  </html>`);
}

