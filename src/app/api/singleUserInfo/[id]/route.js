import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../../utils/database';
import { NextResponse } from 'next/server';


export const GET = async (req, {params}) => {
    const {id} = params;
    const db = await connectToDatabase();
    const userInfoCollection = db.collection('userInfo');

    try {
        const result = await userInfoCollection.findOne({ _id: new ObjectId(id)});
        return NextResponse.json(result);
    }
    catch (err) {
        return NextResponse.json({ error: err.message });
    }
}