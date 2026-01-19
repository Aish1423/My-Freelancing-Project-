const router = require("express").Router()

const multer = require("multer")

const bidStorage = multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null, "Server/Public/bid")
    },
    filename:(req, file, cb)=> {
        let picname = file.fieldname+ "" +Date.now() + ""+file.originalname
        cb(null, picname)
    }
})

const bidUpload = multer({storage:bidStorage})




const bdeController = require("../API/BDE/bdeController")
const bidController = require("../API/bid/bidController")
const categoryController = require("../API/category/categoryController")
const clientController = require("../API/client/clientController")
const projectController = require("../API/project/projectController")
const reviewController = require("../API/review/reviewController")
const userController = require("../API/user/userController")


//=======================WITHOUT TOKEN REQUESTS==========================

// =============BDE Controller===============
router.post("/bde/add", bdeController.add)
// =============BDE Controller===============

// =============Category Controller===========
router.post("/category/all", categoryController.all)
// =============Category Controller===========


// =============Project Controller=============
router.post("/project/all", projectController.all)
router.post("/project/single", projectController.single)
// =============Project Controller=============

// =============Review Controller==============
router.post("/review/all", reviewController.all)
// =============Review Controller==============

// =============User Conroller================
router.post("/user/login", userController.login)
// =============User Conroller================

//======================WITHOUT TOKEN REQUESTS=========================

// ============================================================================================================================================
//=============================================================================================================================================

//=====================WITH TOKEN REQUESTS=============================

// ====================Middlewear Token Checker=======================
router.use(require("../middleware/tokenChecker"))
// ====================Middlewear Token Checker=======================


// =============BDE Controller===============
router.post("/bde/single", bdeController.single)
router.post("/bde/update",bdeController.update)
// =============BDE Controller===============

// =============Bid Controller===============
router.post("/bid/add", bidUpload.single("poc"), bidController.add)
router.post("/bid/all", bidController.all)
router.post("/bid/single", bidController.single)
router.post("/bid/update",bidUpload.single("poc"), bidController.update) 
// =============Bid Controller===============


// =============Client Controller==============
router.post("/client/all", clientController.all)
router.post("/client/single", clientController.single)
// =============Client Controller==============


// =============User Conroller================
router.post("/user/changePassword", userController.changePassword)
// =============User Conroller================


router.all("", (req,res)=> {
    res.send({
        success : false,
        status : 404,
        message : "Inavalid Address"
    }) 
})

module.exports = router