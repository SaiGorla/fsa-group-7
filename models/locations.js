const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema( {
     
      locationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      locationName: {
        type: DataTypes.STRING(30),
        unique: true,
        required: true,
        allowNull: false
      },
      locationLatitude: {
        type: DataTypes.DECIMAL(10, 10),
        allowNull: false,
        validate: { min: -90, max: 90 }
      },
      locationLongitude: {
        type: DataTypes.DECIMAL(11, 10),
        allowNull: false,
        validate: { min: -180, max: 180 }
      }
     
   
  
})

module.exports = mongoose.model("Location", LocationSchema)