import React from 'react'

const onSubmit = (e) => {
    e.preventDefault();
    const { articleName, articleDescription } = Object.fromEntries(new FormData(e.target));
    console.log("Submitted!")
}

const Create = () => {
  return (
    <div className='flex justify-center'>
            <form
                className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6"
                onSubmit={onSubmit}
            >
                <fieldset className="flex flex-col">
                    <label className="label mb-2">
                        <span className="label-text">Article Name</span>
                    </label>
                    <input
                        type="text"
                        name="articleeName"
                        placeholder="Article name..."
                        className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                        required
                    />
                </fieldset>

                <fieldset className="flex flex-col">
                    <label className="label mb-2">
                        <span className="label-text">Article Body</span>
                    </label>
                    <textarea
                        name="articleDescription"
                        placeholder="Article description..."
                        className="input input-bordered transition-all duration-150 p-4 rounded-lg"
                        required
                    />
                </fieldset>

                <input
                    type="submit"
                    className="rounded-lg p-4 text-white bg-zinc-800 active:bg-zinc-600 transition-all duration-75 font-bold cursor-pointer"
                    value="Submit"
                />
            </form>
    </div>
  )
}

export default Create