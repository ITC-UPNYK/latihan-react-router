export const Contact = () => {
  return (
    <div className='contact'>
      <h3 className='text-4xl font-bold mb-4'>Contact Us</h3>
      <form className='w-1/2'>
        <div className='mb-4'>
          <label
            className='block text-white text-sm font-bold mb-2'
            htmlFor='email'
          >
            Your Email:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-white text-sm font-bold mb-2'
            htmlFor='message'
          >
            Your Message:
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter your message here...'
          ></textarea>
        </div>
        <button
          className='bg-white text-black border-2 border-white py-2 px-4 rounded transition-all hover:bg-black hover:text-white focus:outline-none focus:shadow-outline'
          type='button'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
