import Food from "../models/food.model";

export const getAllFood = async function (req, res) {
  try {

    const result = await Food.find();
    return res.status(201).json({
      msg: "Informacion obtenida exitosamente",
      data: result
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};