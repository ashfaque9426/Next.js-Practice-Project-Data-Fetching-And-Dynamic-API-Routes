import { connectToDatabase } from '../../../utils/database';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const { email, userName, password } = await req.json();
    const db = await connectToDatabase();
    const userInfoCollection = db.collection('userInfo');

    try {
        const existingUser = await userInfoCollection.findOne({ email: email });
        if (existingUser) {
            return NextResponse.json({ msg: "User Already Exists" });
        }

        const result = await userInfoCollection.insertOne({ email, userName, password });
        return NextResponse.json({ msg: "User added successfully", data: result });
    }
    catch (err) {
        console.error('Error:', err);
        return NextResponse.json({ err: err.message });
    }
}