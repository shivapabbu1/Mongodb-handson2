const express=require('express')
const studentcontroller=require('../controllers/student')
const router=express.Router();

router.post('/emp',studentcontroller.empEnroll)
router.get('/empall',studentcontroller.getallempdata)
router.get("/salary", studentcontroller.getempdataofsalary)
router.get('/exp',studentcontroller.getempdatofexp)
router.get('/expandgrad',studentcontroller.getempdataofexpandgrad)
router.put('/update',studentcontroller.Updateofempdatasalary)
router.delete('/delete',studentcontroller.Deleteindb)

module.exports=router;