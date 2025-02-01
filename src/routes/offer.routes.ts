import { OfferController } from "../controllers/offer.controller";
import { Router } from "express";

const router = Router()

//Get Listar todas las ofertas localhost:3000/api/offerts/?tittle=react&category=dam
router.get('/', OfferController.getAll)
router.get('/:id', OfferController.getById)
// POST añadir una oferta nueva localhost:3000/api/offerts/ {body}
router.post('/', OfferController.create)
//Delete Borrar una oferta localhost:3000/api/offerts/xxxx
router.post('/:id', OfferController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/xxxx {body}
router.put('/:id', OfferController.update)


// calificamos una oferta x
router.post('/:id/rate/', OfferController.rate)
//Vemos que calificacion (total) se le ha dado a una oferta
router.get('/:id/rate/', OfferController.getRate)

export default router