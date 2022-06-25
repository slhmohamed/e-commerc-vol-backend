
const { Matrial } = require('../models/matrial');
 exports.createMatrial = async (req, res) => {
    try {
        let promo = { rate: 0, price: 0 };
      if (parseFloat(req.body.promo) > 0) {
        promo.rate = parseFloat(req.body.promo);
        promo.price = parseFloat(req.body.price - req.body.promo); //parseFloat(req.body.price) - (promo.rate * parseFloat(req.body.price)) / 100;
      }
        const new_matrial = new Matrial({
            title: req.body.title,
             state: req.body.state,
            code: req.body.code,
             price: parseFloat(req.body.price),
             stock: req.body.stock,
            description: req.body.description,
            new: req.body.new,
             onsale: req.body.onsale,
            promo: promo,
             categories: [mongoose.mongo.ObjectId(catalog._id)],
        })

        const new_matrials = await new_matrial.save();
        res.status(200).send({ status: true, result: new_matrial });
    }
    catch (err) {
        res.status(500).send("Somthing failed.");

    }
}
exports.updateMatrial = async (req, res, next) => {
    try {
        let promo = { rate: 0, price: 0 };
        if (parseFloat(req.body.promo) > 0) {
          promo.rate = parseFloat(req.body.promo);
          promo.price = parseFloat(req.body.price - req.body.promo); //parseFloat(req.body.price) - (promo.rate * parseFloat(req.body.price)) / 100;
        }
        const entity = await Matrial.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            slug: slugify(req.body.name),
        })
        res.status(200).send({ status: true, result: entity });
    }
    catch (err) {
        res.status(500).send("Somthing failed.");
    }
} 


exports.deleteMatrial = async (req, res, next) => {
    try {
        const entity = await Matrial.findByIdAndRemove(req.params.id)
        res.status(200).send({ status: true, result: entity });
    }
    catch (err) {
        res.status(500).send("Somthing failed.");
    }
} 


exports.allMatrial = async (req, res, next) => {
    try {
        const matrials = await Matrial.find()
        res.status(200).send({ status: true, result: matrials });
    }
    catch (err) {
        res.status(500).send("Somthing failed.");
    }
}
exports.singleMatrial = async (req, res, next) => {
    try {
        const categorie = await Matrial.findById(req.params.id)
        res.status(200).send({ status: true, result: categorie });
    }
    catch (err) {
        res.status(500).send("Somthing failed.");
    }
} 