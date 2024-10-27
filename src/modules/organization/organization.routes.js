import  express  from "express";
import { auth } from "../../middleware/auth.js";
import { addOrganization, deleteOrganization, getAllOrganization, getOrganization, invitation, updateOrganization } from "./controller/organization.controller.js";



const organizationRoutes = express.Router()


organizationRoutes.post("/addOrganization",auth,addOrganization)

organizationRoutes.put("/updateOrganization",auth,updateOrganization)
organizationRoutes.delete("/deleteOrganization",auth,deleteOrganization)

organizationRoutes.get("/getOrganization/:id",auth,getOrganization)
organizationRoutes.get("/getAllOrganization",auth,getAllOrganization)
organizationRoutes.post("/invitation/:orgId",auth,invitation)














export default organizationRoutes