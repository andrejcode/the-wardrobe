import { ImageMaskData } from '@/lib/definitions';
import { NextRequest, NextResponse } from 'next/server';
import * as fal from '@fal-ai/serverless-client';

export async function GET(req: NextRequest) {
  try {
    const result: ImageMaskData = await fal.subscribe('fal-ai/idm-vton', {
      input: {
        human_image_url:
          'https://img.freepik.com/free-photo/european-man-smiling-cheerful-expression-full-body-portrait_53876-129390.jpg?w=900&t=st=1721625228~exp=1721625828~hmac=ee150fad38c2d4bc5e03468c13e130819e799bebfb994ef1c1dba23aef0375cb',
        garment_image_url:
          'https://img01.ztat.net/article/spp-media-p1/4d9ca4a6d4be436c83a0c2adfb0ff39f/97f4f43c0f9848f8bd00886db100f224.jpg?imwidth=1800&filter=packshot',
        description: 'Short Sleeve Round Neck T-shirts',
      },
      logs: false,
    });

    return NextResponse.json({ imageUrl: result.image.url }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
