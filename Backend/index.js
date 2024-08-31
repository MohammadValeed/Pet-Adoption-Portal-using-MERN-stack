const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const { v4: uuidv4 } = require('uuid')
const app = express();
app.use(express.json());
app.use(cors());

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' });

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Petzee")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define Mongoose schemas
const PetzeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  id: String,
});

const PetSchema = new mongoose.Schema({
  name: String,
  age: String,
  location: String,
  ownerInfo: String,
  category: String,
  description: String,
  userID: String,
  adopted: Boolean,
  pet_id: String,
  owner: String, // Add owner field to associate pet with owner
  image: String, // Add image field to store image filename
});

// Define Mongoose schema for AdoptionRequest
const AdoptionRequestSchema = new mongoose.Schema({
  requesterName: String,
  requesterEmail: String,
  requesterPhone: String,
  requesterAddress: String,
  petID: String,
  petAddedBy: String,
  requestId: String,
  requesterUserId: String,
  status: { type: String, default: 'pending' }, // e.g., 'pending', 'accepted', 'rejected'
});

// Create Mongoose models
const PetzeeModel = mongoose.model('Petzee', PetzeeSchema);
const PetModel = mongoose.model('Pet', PetSchema);
const AdoptionRequestModel = mongoose.model('AdoptionRequest', AdoptionRequestSchema);

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  PetzeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ user, message: "Success" });
        } else {
          res.json("The Password is Incorrect");
        }
      } else {
        res.json("No record exist");
      }
    });
});

// Registration endpoint
app.post('/register', (req, res) => {
  // const { name, email, password , id} = req.body;
  // const id = uuidv4()
  const userDetails = req.body

  console.log(userDetails)
  const { email } = userDetails
  PetzeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        // User with the same email already exists
        res.status(400).json({ message: 'User with this email already exists' });
      } else {
        // Create a new user
        PetzeeModel.create(userDetails)
          .then(register => {
            console.log(register)
            res.status(201).json(register)
          })
          .catch(err => res.status(500).json(err));
      }
    })
    .catch(err => res.status(500).json(err));
});

// Add a new pet endpoint with image upload
app.post('/add-pet', upload.single('image'), (req, res) => {
  const { name, age, location, ownerInfo, category, description, adopted, owner, userID, pet_id } = req.body;
  const image = req.file ? req.file.filename : 'default-image.jpg';
  console.log(userID)
  PetModel.create({
    name,
    age,
    location,
    ownerInfo,
    category,
    description,
    adopted,
    userID,
    pet_id,
    owner, // Add owner field to associate pet with owner
    image, // Add image field to store image filename
  })
    .then(pet => res.status(201).json(pet))
    .catch(err => res.status(500).json(err));
});

// Update a pet by ID endpoint
app.put('/update-pet/:id', (req, res) => {
  const { name, age, location, ownerInfo, category, description, adopted } = req.body;
  const { id } = req.params;

  PetModel.findByIdAndUpdate(id, {
    name,
    age,
    location,
    ownerInfo,
    category,
    description,
    adopted,
  }, { new: true })
    .then(pet => res.status(200).json(pet))
    .catch(err => res.status(500).json(err));
});

// Delete a pet by ID endpoint
app.delete('/delete-pet/:id', (req, res) => {
  const { id } = req.params;

  PetModel.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: 'Pet deleted successfully' }))
    .catch(err => res.status(500).json(err));
});

// Get all pets endpoint
app.get('/get-pets', async (req, res) => {
  await PetModel.find()
    .then(pets => res.status(200).json(pets))
    .catch(err => res.status(500).json(err));
});

// Get pets by owner email endpoint
app.post('/get-pets-by-owner/', async (req, res) => {
  const { id } = req.body;
  try {
    const pets = await PetModel.find({ userID: id });
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve uploaded images
app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);
  res.sendFile(filePath);
});

// Add a new endpoint to handle adoption requests
// Add a new endpoint to handle adoption requests
// Add a new endpoint to handle adoption requests
app.post('/submit-adoption-request', async (req, res) => {
  try {
    const { name, email, phone, address, petId, userId, PetAddedId, requestId } = req.body;
    console.log({ name, email, phone, address, petId, userId, PetAddedId, requestId })
    // Create and save the adoption request
    const newRequest = new AdoptionRequestModel({
      requesterName: name,
      requesterEmail: email,
      requesterPhone: phone,
      requesterAddress: address,
      petID: petId,
      requestId: requestId,
      petAddedBy: PetAddedId,
      requesterUserId: userId // Include the user ID of the requester
    });

    const savedRequest = await newRequest.save();

    res.status(201).json({ message: 'Adoption request submitted successfully', request: savedRequest });
  } catch (error) {
    console.error('Error submitting adoption request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
// Endpoint to get adoption requests by user ID
app.post('/get-my-adoption-requests', async (req, res) => {
  try {
    const { userId } = req.body;
    const requests = await AdoptionRequestModel.find({ requesterUserId: userId });
    console.log(requests)

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching user adoption requests:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint to get adoption requests by pet ID
app.get('/get-adoption-requests-by-pet/:petID', async (req, res) => {
  try {
    const { petID } = req.params;
    const requests = await AdoptionRequestModel.find({ petID });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching adoption requests by pet ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint to update an adoption request status
app.put('/update-adoption-request-status/:requestID', async (req, res) => {
  try {
    const { requestID } = req.params;
    const { status } = req.body;

    const updatedRequest = await AdoptionRequestModel.findByIdAndUpdate(
      requestID,
      { status },
      { new: true }
    );

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error('Error updating adoption request status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// New endpoint to get all adoption requests
app.post('/get-adoption-requests', async (req, res) => {
  try {
    const { userId } = req.body
    // console.log(userId)
    const requests = await AdoptionRequestModel.find({ petAddedBy: userId, status: "pending" });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching adoption requests:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.post("/change-status", async (req, res) => {
  try {
    const { requestId, status } = req.body;
    // console.log({ requestId })
    const respose = await AdoptionRequestModel.findOneAndUpdate({ requestId }, { status })
    console.log(respose)
    if (status === "Accept") {
      const response2 = await PetModel.findOneAndUpdate({ pet_id: respose.petID }, { adopted: true })
      res.status(200).json({ message: "Updated" })
    }
    res.json({ message: "done" }).status(200)
    console.log(respose)
  } catch (e) {
    console.log("server error")
  }
})


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});