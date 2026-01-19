const router = require("express").Router()

const multer = require("multer")

const clientStorage = multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null, "Server/Public/client")
    },
    filename:(req, file, cb)=> {
        let picname = file.fieldname+ "" +Date.now() + ""+file.originalname
        cb(null, picname)
    }
})

const clientUpload = multer({storage:clientStorage})







const bdeController = require("../API/BDE/bdeController")
const bidController = require("../API/bid/bidController")
const categoryController = require("../API/category/categoryController")
const clientController = require("../API/client/clientController")
const projectController = require("../API/project/projectController")
const reviewController = require("../API/review/reviewController")
const userController = require("../API/user/userController")



// =======================================WITHOUT TOKEN REQUESTS===========================================================

// ================BDE Controller=================
router.post("/bde/single",bdeController.single)
// ================BDE Controller=================


// ===============Category Controller==============
router.post("/category/all",categoryController.all)
// ===============Category controller==============

// ===============Client Controller================
router.post("/client/add",clientController.add)
router.post("/client/all",clientController.all)
// ===============Client Controller=================


// ===============Review Controller=================
router.post("/review/add",reviewController.add)
// ===============Review Controller=================

//=================User Controller==================
router.post("/user/login",userController.login)
//=================User Controller==================
// =======================================WITHOUT TOKEN REQUESTS===========================================================

// ================================================================================================================================================================
// ================================================================================================================================================================


// =======================================WITH TOKEN REQUESTS===========================================================


// ====================Middlewear Token Checker=======================
router.use(require("../middleware/tokenChecker"))
// ====================Middlewear Token Checker=======================



// ================BDE Controller=======================================
router.post("/bde/all",bdeController.all)
// ================BDE Controller=======================================



// ================Bid Controller=======================================
router.post("/bid/all",bidController.all)
router.post("/bid/single",bidController.single)
router.post("/bid/update",bidController.update)
// ===============Bid Controller========================================



// ===============Client Controller====================================
router.post("/client/single",clientController.single)
router.post("/client/update",clientController.update)
// ===============Client Controller=====================================

// ===============Project Controller=====================================
router.post("/project/add", clientUpload.single("attachmnent"), projectController.add)
router.post("/project/all",projectController.all)
router.post("/project/update", clientUpload.single("attachmnent"), projectController.update)
router.post("/project/delete",projectController.deleteFun)
router.post("/project/single", projectController.single)
// ==============Project Controller=======================================

// ===============Review Controller======================================
router.post("/review/all",reviewController.all)
// ===============Review Controller========================================

//=================User Controller==========================================
router.post("/user/changePassword", userController.changePassword)
//=================User Controller==========================================


// =======================================WITH TOKEN REQUESTS===========================================================


router.all("",(req,res)=> {
    res.send({
        success : false,
        status : 404,
        message : "Invalid Address"
    })
})

module.exports = router