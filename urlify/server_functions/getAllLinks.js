"use server";
import short_url from "@/models/short_url";
import { connectToDb } from "./mongodb/connect";
import { currentUser } from "@clerk/nextjs/server";

export default async function getAllLinks() {
    const user = await currentUser();
    await connectToDb();
    try {
        const data = await short_url.find({ author: user.emailAddresses[0].emailAddress });
        return JSON.stringify(data);
    }
    catch (err) {
        return false;
    }
}