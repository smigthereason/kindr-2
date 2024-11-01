
const Password = () => {
  return (
    <div className="bg-secondary rounded-lg min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-50">Account Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4">
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2' htmlFor='grid-text-1'>email address</label>
                            <input className='appearance-none block w-full text-gray-200 border focus:border-gray-900 bg-black shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none' id='grid-text-1' type='text' placeholder='Enter email'  required/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <span className='block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2'>password</span>
                            <button className="appearance-none bg-accent text-gray-50 px-2 py-1 shadow-sm rounded-md ">change your password</button>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                            
                        
                            <div className="flex justify-end mt-10">
                                <button className="appearance-none bg-accent text-gray-50 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Password