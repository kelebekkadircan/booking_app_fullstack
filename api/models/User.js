import mongoose from "mongoose";



const UserSchema = new mongoose.Schema
    (
        {
            username: {
                type: String,
                requried: true,
                unique: true
            },
            email: {
                type: String,
                requried: true,
                unique: true
            },
            country: {
                type: String,
                requried: true,
            },
            img: {
                type: String,

            },
            city: {
                type: String,
                requried: true,
            },
            phone: {
                type: String,
                requried: true,
            },
            password: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                default: false
            }

        },
        {
            timestamps: true
        }
    );


export default mongoose.model("User", UserSchema)