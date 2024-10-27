import organizationModel from "../../../../db/models/organization.model.js";
import userModel from "../../../../db/models/user.model.js";

export const addOrganization = async (req, res, next) => {
  let { title, description } = req.body;
  let existOrganization = await organizationModel.findOne({ title });
  if (existOrganization) return "email already existed";

  let addedOrganization = await organizationModel.insertMany({
    title,
    description,
  });

  res.json({ message: "done", addedOrganization });
};

export const updateOrganization = async (req, res, next) => {
  let {
    title,
    description,
  } = req.body;

  let foundedOrganization = await organizationModel.findOne({ title });

  if (foundedOrganization) {
    let updatedOrganization = await organizationModel.findOneAndUpdate(
      { title },
      {

        description,
       
      },
      { new: true }
    );
    res.json({ message: "done", updatedOrganization });
  } else {
    res.json({ message: "not found" });
  }
};


export const deleteOrganization = async (req, res, next) => {
  let { title } = req.body;

  let DeletedOrg = await organizationModel.findOneAndDelete({ title });

  if (DeletedOrg) {
    res.json({ message: "deleted", DeletedOrg });
  } else {
    res.json({ message: "not found" });
  }
}

export const getOrganization = async (req, res, next) => {
  let { id } = req.params;

  let foundedOrganization = await organizationModel.findOne({ _id: id });

  if (foundedOrganization) {
    res.json({ message: "Data", foundedOrganization });
  } else {
    res.json({ message: "not found" });
  }

 
}



export const getAllOrganization = async (req, res, next) => {
  let founded = await organizationModel.find({});
  if (founded) {
    res.json({ message: "application founded", founded });
  } else {
    return " not founded"
  }
}



export const invitation = async (req, res, next) => {
    let{orgId} = req.params
    let foundedUser = await userModel.find({email});
    if (foundedUser) {
       let foundedOrg = await organizationModel.findById({_id:orgId})
       if(!foundedOrg) return "org not found"
       await organizationModel.insertMany({userId:foundedUser._id})
    } else {
        res.json({ message: "user not founded" });
    }
  }
