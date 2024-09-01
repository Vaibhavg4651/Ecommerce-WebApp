import { Router } from 'express'
import expressAsyncHandler from 'express-async-handler'

import {addProduct, getProducts, getProductById} from '../Controllers/ProductController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = Router()

router.route('/').get(getProducts).post(addProduct)
router
  .route('/:id')
  .get(getProductById)

router.get('/search', expressAsyncHandler(async (req, res) => {
    const searchTerm = req.query.q || '';

    if (searchTerm.length < 3) {
        return res.status(200).json([]);
    }

    const products = await Product.aggregate([
      {
        $match: {
          name: {
            $regex: `^${searchTerm}`, // Matches names that start with the searchTerm
            $options: 'i' // Case-insensitive search
        }
        }
    },
    {
        $project: {
            name: 1,
            price: 1,
            image: 1
        }
    }
    ]);

    res.status(200).json(products);
}));

export default router