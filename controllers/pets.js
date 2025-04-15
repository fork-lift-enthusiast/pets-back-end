import Pet from "../models/pet.js";

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.log(error);
    res.stats(500).json({ error: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPet = async (req, res) => {

  try {
    const { petId } = req.params;
    const pet = await Pet.findById(petId);

    if (!pet) {
        throw new Error("Pet not found")
    }

    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePet = async (req,res) =>{
   try {
       const updatedPet = Pet.findByIdAndUpdate(req.params.petId, req.body )
        if (!updatedPet){
            res.status(404)
            throw new Error('Pet not found')
        }
   } catch (error) {
    
   }

}

export const deletePet = async (req,res) =>{
    Pet.findByIdAndDelete(req.params.petId)
}