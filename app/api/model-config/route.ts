import { NextResponse } from "next/server";

async function handle() {
  let model_list: any[] = [];
  // @ts-ignore
  if (process.env.MODEL_LIST) {
    model_list = process.env.MODEL_LIST.split(",").map((v) => {
      return {
        name: v,
        available: true,
      };
    });
  }
  return NextResponse.json({ model_list });
}
export const dynamic = "force-dynamic";
export const GET = handle;
