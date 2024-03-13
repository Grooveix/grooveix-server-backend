const router = require('express').Router();

/* Controller Imports */
const collectionController = require("./controllers/collectionController");

/**
 * GET: get a Song from the Database
 */
router.get(
    "/get",
        collectionController.get
);

/**
 * POST: Add a new Song to our Local folder and/or to the database
 */
router.post(
    '/add',
    collectionController.add
);

/**
 * REMOVE: removes a Song from the database and Local Folder
 */

router.delete(
    '/remove',
    collectionController.remove
)

/**
 * POST: updates and syncs the local folder with the database
 */

router.post(
    '/sync',
    collectionController.sync
)

module.exports = router;