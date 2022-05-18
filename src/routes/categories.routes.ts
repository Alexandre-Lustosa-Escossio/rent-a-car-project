import { Router } from 'express'

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body; 

  categories.push({
    name,
    description
  })
1
  return res.status(201).json({message: 'Vehicle Succesfully Added'})
})

export { categoriesRoutes }