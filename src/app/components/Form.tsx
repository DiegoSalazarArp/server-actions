"use client"

import { useActionState } from "react";
import SubmitAction from "../actions";

export default function Form() {
  const [state, formAction, pending] = useActionState(SubmitAction, null);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <div className="flex items-center justify-start">
        <h1 className="text-2xl">Enter</h1>
      </div>
      <form action={formAction} className="flex flex-col gap-2">
        <input placeholder="enter your name" type="text" name="name" className="border border-slate-400 py-2 px-4 rounded" />
        <button type="submit" className="py-2 px-4 bg-blue-400 rounded text-white hover:opacity-80 transition-all duration-100">
          {
            pending ? 'Submitting...' : 'Submit'
          }
        </button>
        {
          state && <div className="text-red-500">{JSON.stringify(state, null, 2)}</div>
        }
      </form>
    </div>
  );
}