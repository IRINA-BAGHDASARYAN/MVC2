const model = require("./model");

const ribbonInventory = {
  totalLength: 100,
  pricePerMeter: 5,
  sell(requestedLength) {
    if (requestedLength > this.totalLength) {
      throw new Error("Ներողություն, պահեստում այդքան ժապավեն չկա։");
    }
    const cost = requestedLength * this.pricePerMeter;
    this.totalLength -= requestedLength;
    return { cost, remainingLength: this.totalLength };
  },
};

class RedisController {
  static async insert(req, res) {
    try {
      const { data } = req.body;
      if (!data) {
        throw new Error("empty");
      }
      await model.insert(data);
      return res.status(200).send("data created");
    } catch (error) {
      console.error("Error", error);
      return res.status(400).json({ error: error.message });
    }
  }

  static async sellRibbon(req, res) {
    try {
      const { requestedLength } = req.body;
      if (typeof requestedLength !== "number" || requestedLength <= 0) {
        return res.status(400).json({ error: "requestedLength must be a positive number" });
      }

      const result = ribbonInventory.sell(requestedLength);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error", error);
      return res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
    } catch (error) {
      console.log("Error", error);
    }
  }

  static deleteOne(req, res) {
    try {
    } catch (error) {
      console.log("Error", error);
    }
  }

  static deleteAll(req, res) {
    try {
    } catch (error) {
      console.log("Error", error);
    }
  }

  static getAll(req, res) {
    try {
    } catch (error) {
      console.log("Error", error);
    }
  }
}
module.exports = RedisController;
