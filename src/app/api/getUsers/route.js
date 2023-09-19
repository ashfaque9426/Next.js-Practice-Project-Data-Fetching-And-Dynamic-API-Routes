import { connectToDatabase } from '../../../utils/database';
import { NextResponse } from 'next/server';


export const GET = async (req, res) => {
    const db = await connectToDatabase();
    const userInfoCollection = db.collection('userInfo');

    try {
        const result = await userInfoCollection.find().toArray();
        return NextResponse.json(result);
    }
    catch (err) {
        console.log('in catch block')
        return NextResponse.json(err.message);
    }
}