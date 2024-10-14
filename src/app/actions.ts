'use server'

import { z } from 'zod';
import fs from 'fs/promises'

const formDataSchema = z.object({
  name: z.string().nonempty('Name is required')
});

export async function SubmitAction(prevState: any, formData: FormData) {
  try {
    const parsedData = formDataSchema.parse({
      name: formData.get('name')
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      message: `Hello, ${parsedData.name}`
    }

  } catch (e: any) {
    return {
      error: e.errors ? e.errors[0].message : e.message
    }
  }
}

const secretPath = "public/hello.txt"

export async function CreateFileDirectory() {
  try {
    const data = 'Hello, World!';
    const done = await fs.writeFile(secretPath, data);

    return done

  } catch (e: any) {

  }
}

