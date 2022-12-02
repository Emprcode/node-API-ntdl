import mongoose from 'mongoose'


// schema is also a validator

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,

    },
    hr: {
        type: Number,
        required: true,
        
    },
    type: {
        type: String,
      default: "entry",
      max: [168, "Max hour"]
        
    },
}, {
    timestamps: true,
});

const table = mongoose.model( "Task", taskSchema);

export default table;