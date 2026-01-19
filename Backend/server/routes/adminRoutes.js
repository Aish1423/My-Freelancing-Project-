const router = require("express").Router()
const multer = require('multer')
// const categoryUpload = multer({dest:'server/public/category/'})

const categoryStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'server/public/category')
    },
    filename:(req, file, cb)=>{
        // cb(null, file.originalname)
        let picname = file.fieldname+ "_" + Date.now() + "_"+file.originalname
        cb(null, picname)
        
    }
})

const categoryUpload = multer({storage:categoryStorage})


const bdeController = require("../API/BDE/bdeController")
const bidController = require("../API/bid/bidController")
const categoryController = require("../API/category/categoryController")
const clientController = require("../API/client/clientController")
const projectController = require("../API/project/projectController")
const reviewController = require("../API/review/reviewController")
const userController = require("../API/user/userController")


router.post("/user/login", userController.login)

// ------------------middleware token checker------------------
router.use(require('../middleware/tokenChecker'))
// ------------------middleware token checker------------------

// =============BDE Controller===============
router.post("/bde/all", bdeController.all)
router.post("/bde/single", bdeController.single)
router.post("/bde/changeStatus", bdeController.changeStatus)
//make change status in this
// =============BDE Controller===============

// =============Bid Controller===============
router.post("/bid/all", bidController.all)
router.post("/bid/single", bidController.single)
// =============Bid Controller===============


// =============Category Controller===========
router.post("/category/add", categoryUpload.single('thumbnail')
    ,categoryController.add)
router.post("/category/all", categoryController.all)
router.post("/category/single", categoryController.single)
router.post("/category/update",categoryController.update)
router.post("/category/delete",categoryController.deleteFun)
// =============Category Controller===========

// =============Client Controller==============
router.post("/client/all", clientController.all)
//make change status in this 
// =============Client Controller==============

// =============Project Controller=============
router.post("/project/all", projectController.all)
// =============Project Controller=============

// =============Review Controller==============
router.post("/review/all", reviewController.all)
router.post("/review/delete",reviewController.deleteFun)
// =============Review Controller==============



// =============User Conroller================
// router.post("/user/login", userController.login)
router.post("/user/changePassword", userController.changePassword)
// =============User Conroller================



router.all("**", (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router