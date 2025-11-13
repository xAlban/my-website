import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET() {
  const imageDir = path.join(process.cwd(), 'public', 'photo_carousel')
  const imageFiles = fs.readdirSync(imageDir)

  const images = imageFiles.map((file) => {
    return file
  })

  return NextResponse.json(images)
}
