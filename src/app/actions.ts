'use server'

export default async function SubmitAction(prevState: any,
  formData: FormData) {

  // set timeout to simulate a slow network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    if (!formData.get('name')) {
      throw new Error('Name is required');
    }

    return {
      message: `Hello, ${formData.get('name')}`
    }

  }
  catch (e: any) {
    return {
      error: e.message
    }
  }
}